// =====================================================
// RATE LIMITING UTILITY
// =====================================================
// Prevents spam and abuse on blog lead forms

import { supabase } from './supabase';

export interface RateLimitConfig {
  maxSubmissions: number;  // Maximum submissions allowed
  windowMinutes: number;   // Time window in minutes
}

export const RATE_LIMIT_CONFIGS: Record<string, RateLimitConfig> = {
  'blog_lead': {
    maxSubmissions: 3,    // 3 submissions
    windowMinutes: 60     // per 60 minutes (1 hour)
  },
  'contact': {
    maxSubmissions: 5,
    windowMinutes: 60
  },
  'review': {
    maxSubmissions: 2,    // 2 reviews
    windowMinutes: 60     // per 60 minutes (1 hour)
  }
};

/**
 * Check if the client has exceeded the rate limit for a specific form type
 *
 * @param ipAddress - Client IP address
 * @param formType - Type of form ('blog_lead', 'contact', etc.)
 * @returns Object with isAllowed boolean and optional error message
 */
export async function checkRateLimit(
  ipAddress: string,
  formType: string
): Promise<{ isAllowed: boolean; error?: string }> {
  const config = RATE_LIMIT_CONFIGS[formType];

  if (!config) {
    // If no rate limit config exists, allow by default
    return { isAllowed: true };
  }

  try {
    // Call the Supabase function to check rate limit
    const { data, error } = await supabase.rpc('check_rate_limit', {
      client_ip: ipAddress,
      form: formType,
      max_submissions: config.maxSubmissions,
      window_minutes: config.windowMinutes
    });

    if (error) {
      console.error('Rate limit check error:', error);
      // On error, allow submission (fail open to not block legitimate users)
      return { isAllowed: true };
    }

    if (data === false) {
      return {
        isAllowed: false,
        error: `Too many submissions. Please wait ${config.windowMinutes} minutes before trying again.`
      };
    }

    return { isAllowed: true };
  } catch (err) {
    console.error('Rate limit check exception:', err);
    // On exception, allow submission (fail open)
    return { isAllowed: true };
  }
}

/**
 * Simple client-side rate limiting (additional layer)
 * Stores submission timestamps in localStorage
 */
export function checkClientSideRateLimit(
  formType: string,
  maxSubmissions: number = 3,
  windowMinutes: number = 60
): { isAllowed: boolean; error?: string } {
  // Check if localStorage is available
  if (typeof window === 'undefined' || !window.localStorage) {
    return { isAllowed: true };
  }

  const storageKey = `rate_limit_${formType}`;
  const now = Date.now();
  const windowMs = windowMinutes * 60 * 1000;

  try {
    // Get existing submissions
    const stored = localStorage.getItem(storageKey);
    const submissions: number[] = stored ? JSON.parse(stored) : [];

    // Filter out submissions outside the time window
    const recentSubmissions = submissions.filter(
      timestamp => now - timestamp < windowMs
    );

    // Check if limit exceeded
    if (recentSubmissions.length >= maxSubmissions) {
      const oldestSubmission = Math.min(...recentSubmissions);
      const waitMinutes = Math.ceil((windowMs - (now - oldestSubmission)) / 60000);

      return {
        isAllowed: false,
        error: `You've submitted this form too many times. Please wait ${waitMinutes} minute${waitMinutes !== 1 ? 's' : ''} before trying again.`
      };
    }

    // Add current submission and save
    recentSubmissions.push(now);
    localStorage.setItem(storageKey, JSON.stringify(recentSubmissions));

    return { isAllowed: true };
  } catch (err) {
    console.error('Client-side rate limit error:', err);
    // On error, allow submission
    return { isAllowed: true };
  }
}

/**
 * Clear rate limit for a specific form type (for testing/debugging)
 */
export function clearClientSideRateLimit(formType: string): void {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.removeItem(`rate_limit_${formType}`);
  }
}
