import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { getClientIP, checkRateLimit, recordSubmission, isValidEmail, sanitizeString, getCORSHeaders } from '@/lib/api-helpers';

// Handle OPTIONS request for CORS preflight
export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get('origin');
  return NextResponse.json({}, {
    status: 200,
    headers: getCORSHeaders(origin)
  });
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin');
  const corsHeaders = getCORSHeaders(origin);

  try {
    // Get client IP for rate limiting
    const clientIP = getClientIP(request);

    // Check rate limit BEFORE processing (but don't increment yet)
    const rateLimitCheck = await checkRateLimit(clientIP, 'review');
    if (!rateLimitCheck.allowed) {
      return NextResponse.json(
        { error: rateLimitCheck.error || 'Too many submissions. Please try again later.' },
        { status: 429, headers: corsHeaders }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, grade, subject, school, rating, comment } = body;

    // Validation
    if (!name || !email || !grade || !subject || !rating || !comment) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400, headers: corsHeaders }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400, headers: corsHeaders }
      );
    }

    // Validate rating
    const ratingNum = parseInt(rating);
    if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5.' },
        { status: 400, headers: corsHeaders }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeString(name),
      email: sanitizeString(email.toLowerCase()),
      grade: sanitizeString(grade),
      subject: sanitizeString(subject),
      school: school ? sanitizeString(school) : null,
      rating: ratingNum,
      comment: sanitizeString(comment),
      status: 'pending' // Reviews need approval before showing
    };

    // Insert into Supabase
    const { error } = await supabase
      .from('reviews')
      .insert([sanitizedData]);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to submit review. Please try again.' },
        { status: 500, headers: corsHeaders }
      );
    }

    // Record successful submission for rate limiting
    await recordSubmission(clientIP, 'review');

    // Success
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your review! It will be published after review.'
      },
      { status: 200, headers: corsHeaders }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500, headers: corsHeaders }
    );
  }
}
