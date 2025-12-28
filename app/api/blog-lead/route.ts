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
    const rateLimitCheck = await checkRateLimit(clientIP, 'blog_lead');
    if (!rateLimitCheck.allowed) {
      return NextResponse.json(
        { error: rateLimitCheck.error || 'Too many submissions. Please try again later.' },
        { status: 429, headers: corsHeaders }
      );
    }

    // Parse request body
    const body = await request.json();
    const { blog_post_slug, name, email, phone, student_grade, subject_interest, message } = body;

    // Validation
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
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

    // Sanitize inputs
    const sanitizedData = {
      blog_post_slug: blog_post_slug ? sanitizeString(blog_post_slug) : null,
      name: sanitizeString(name),
      email: sanitizeString(email.toLowerCase()),
      phone: phone ? sanitizeString(phone) : null,
      student_grade: student_grade ? sanitizeString(student_grade) : null,
      subject_interest: subject_interest ? sanitizeString(subject_interest) : null,
      message: message ? sanitizeString(message) : null
    };

    // Insert into Supabase
    const { error } = await supabase
      .from('blog_leads')
      .insert([sanitizedData]);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to submit form. Please try again or call us at (917) 312-6589.' },
        { status: 500, headers: corsHeaders }
      );
    }

    // Record successful submission for rate limiting
    await recordSubmission(clientIP, 'blog_lead');

    // Success
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! We will contact you within 24 hours.'
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
