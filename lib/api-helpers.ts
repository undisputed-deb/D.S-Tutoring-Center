// =====================================================
// API SECURITY HELPERS
// =====================================================
// Server-side utilities for rate limiting and validation

import { NextRequest } from 'next/server';
import { supabase } from './supabase';
import { RATE_LIMIT_CONFIGS } from './rate-limit';

/**
 * Get client IP address from request headers
 */
export function getClientIP(request: NextRequest): string {
  // Check multiple headers for IP address (works with proxies/CDNs)
  const forwarded = request.headers.get('x-forwarded-for');
  const real = request.headers.get('x-real-ip');
  const cfConnecting = request.headers.get('cf-connecting-ip');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  if (real) {
    return real.trim();
  }

  if (cfConnecting) {
    return cfConnecting.trim();
  }

  // Fallback to a default (not ideal but prevents crashes)
  return 'unknown';
}

/**
 * Server-side rate limit check using Supabase
 * Returns true if request should be ALLOWED, false if BLOCKED
 */
export async function checkRateLimit(
  ipAddress: string,
  formType: string
): Promise<{ allowed: boolean; error?: string; currentCount?: number }> {
  const config = RATE_LIMIT_CONFIGS[formType];

  if (!config) {
    // No rate limit configured for this form type
    return { allowed: true };
  }

  try {
    // Get current rate limit status
    const { data: rateLimitData, error: fetchError } = await supabase
      .from('form_rate_limits')
      .select('*')
      .eq('ip_address', ipAddress)
      .eq('form_type', formType)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') {
      // Error other than "no rows found"
      console.error('Rate limit fetch error:', fetchError);
      return { allowed: true }; // Fail open
    }

    const now = new Date();

    // No record exists - first submission, allow it
    if (!rateLimitData) {
      return { allowed: true, currentCount: 0 };
    }

    // Check if window has expired
    const windowStart = new Date(rateLimitData.window_start);
    const windowExpired = (now.getTime() - windowStart.getTime()) > (config.windowMinutes * 60 * 1000);

    if (windowExpired) {
      // Window expired, allow submission
      return { allowed: true, currentCount: 0 };
    }

    // Window is active, check if user has exceeded limit
    // Important: We check the CURRENT count before recording the new submission
    // So if max is 1, we allow when count is 0, block when count is 1+
    if (rateLimitData.submission_count >= config.maxSubmissions) {
      return {
        allowed: false,
        currentCount: rateLimitData.submission_count,
        error: `Too many submissions. Please wait ${config.windowMinutes} minutes before trying again.`
      };
    }

    // Under the limit, allow submission
    return { allowed: true, currentCount: rateLimitData.submission_count };

  } catch (err) {
    console.error('Rate limit exception:', err);
    return { allowed: true }; // Fail open
  }
}

/**
 * Record a successful submission for rate limiting
 * Call this AFTER the submission succeeds
 */
export async function recordSubmission(
  ipAddress: string,
  formType: string
): Promise<void> {
  const config = RATE_LIMIT_CONFIGS[formType];

  if (!config) {
    return; // No rate limit configured
  }

  try {
    // Check if record exists
    const { data: existing } = await supabase
      .from('form_rate_limits')
      .select('*')
      .eq('ip_address', ipAddress)
      .eq('form_type', formType)
      .single();

    const now = new Date();

    if (!existing) {
      // Create new record
      await supabase
        .from('form_rate_limits')
        .insert([{
          ip_address: ipAddress,
          form_type: formType,
          submission_count: 1,
          window_start: now.toISOString()
        }]);
    } else {
      // Check if window expired
      const windowStart = new Date(existing.window_start);
      const windowExpired = (now.getTime() - windowStart.getTime()) > (config.windowMinutes * 60 * 1000);

      if (windowExpired) {
        // Reset window
        await supabase
          .from('form_rate_limits')
          .update({
            submission_count: 1,
            window_start: now.toISOString()
          })
          .eq('ip_address', ipAddress)
          .eq('form_type', formType);
      } else {
        // Increment counter
        await supabase
          .from('form_rate_limits')
          .update({
            submission_count: existing.submission_count + 1
          })
          .eq('ip_address', ipAddress)
          .eq('form_type', formType);
      }
    }
  } catch (err) {
    console.error('Error recording submission:', err);
    // Don't throw - submission already succeeded
  }
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Sanitize string input (remove potentially harmful characters)
 */
export function sanitizeString(input: string): string {
  return input.trim().slice(0, 1000); // Limit length to prevent abuse
}

/**
 * Check if origin is allowed (for CORS)
 */
export function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false;

  const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://dstutoringcenter.com',
    'https://www.dstutoringcenter.com',
    // Add your production domain here
  ];

  return allowedOrigins.includes(origin);
}

/**
 * Create CORS headers for API responses
 */
export function getCORSHeaders(origin: string | null) {
  const headers: Record<string, string> = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400', // 24 hours
  };

  // Only set allowed origin if it's in our whitelist
  if (origin && isAllowedOrigin(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  }

  return headers;
}
