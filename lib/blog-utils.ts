// =====================================================
// BLOG UTILITY FUNCTIONS
// =====================================================

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  meta_description: string;
  keywords: string[];
  author: string;
  published_date: string;
  updated_date: string | null;
  content: string;
  excerpt: string;
  category: 'SHSAT' | 'Regents' | 'SAT' | 'Math' | 'Tutoring' | 'General';
  featured_image_url: string | null;
  is_published: boolean;
  view_count: number;
  reading_time_minutes: number;
  created_at: string;
}

export interface BlogLead {
  blog_post_slug: string | null;
  name: string;
  email: string;
  phone?: string;
  student_grade?: string;
  subject_interest?: string;
  message?: string;
}

/**
 * Format published date for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Calculate estimated reading time from content
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Get category display name
 */
export function getCategoryDisplayName(category: BlogPost['category']): string {
  const displayNames: Record<BlogPost['category'], string> = {
    'SHSAT': 'SHSAT Prep',
    'Regents': 'Regents Exams',
    'SAT': 'SAT Prep',
    'Math': 'Math Help',
    'Tutoring': 'Tutoring Advice',
    'General': 'General'
  };
  return displayNames[category];
}

/**
 * Get category color for UI
 */
export function getCategoryColor(category: BlogPost['category']): string {
  const colors: Record<BlogPost['category'], string> = {
    'SHSAT': 'text-gradient-electric',
    'Regents': 'text-gradient-fire',
    'SAT': 'text-gradient-purple',
    'Math': 'text-gradient-neon',
    'Tutoring': 'text-gradient-rainbow',
    'General': 'text-gradient-electric'
  };
  return colors[category];
}

/**
 * Get related service page URL based on blog category
 */
export function getRelatedServicePage(category: BlogPost['category']): { url: string; title: string } | null {
  const servicePages: Record<string, { url: string; title: string }> = {
    'SHSAT': { url: '/shsat-prep-tutor-nyc', title: 'SHSAT Prep Tutoring' },
    'Regents': { url: '/regents-tutoring-nyc', title: 'Regents Tutoring' },
    'SAT': { url: '/sat-tutor-nyc', title: 'SAT Tutoring' },
    'Math': { url: '/math-tutor-nyc', title: 'Math Tutoring' }
  };
  return servicePages[category] || null;
}

/**
 * Sanitize HTML content for safe display (basic sanitization)
 * For production, consider using a library like DOMPurify
 */
export function sanitizeContent(content: string): string {
  // Remove script tags
  let sanitized = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  // Remove event handlers
  sanitized = sanitized.replace(/on\w+\s*=\s*["'][^"']*["']/gi, '');
  return sanitized;
}

/**
 * Generate SEO-friendly slug from title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Truncate text to specified length with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Get client IP address (server-side only)
 * Works with Next.js API routes and Server Components
 */
export function getClientIP(headers: Headers): string {
  // Check various headers for IP address
  const forwardedFor = headers.get('x-forwarded-for');
  const realIP = headers.get('x-real-ip');
  const cfConnectingIP = headers.get('cf-connecting-ip');

  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  return 'unknown';
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone format (US phone numbers)
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\(\)\+]{10,}$/;
  return phoneRegex.test(phone);
}

/**
 * Generate Article Schema markup for SEO
 */
export function generateArticleSchema(post: BlogPost, websiteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.meta_description,
    author: {
      '@type': 'Organization',
      name: 'D.S Tutoring Center',
      url: websiteUrl
    },
    publisher: {
      '@type': 'Organization',
      name: 'D.S Tutoring Center',
      logo: {
        '@type': 'ImageObject',
        url: `${websiteUrl}/D.S Tutoring Center Logo.jpeg`
      }
    },
    datePublished: post.published_date,
    dateModified: post.updated_date || post.published_date,
    image: post.featured_image_url || `${websiteUrl}/D.S Tutoring Center Logo.jpeg`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${websiteUrl}/blog/${post.slug}`
    },
    keywords: post.keywords.join(', '),
    articleSection: getCategoryDisplayName(post.category),
    wordCount: post.content.split(/\s+/).length
  };
}

/**
 * Generate BreadcrumbList Schema for SEO
 */
export function generateBreadcrumbSchema(post: BlogPost, websiteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: websiteUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${websiteUrl}/blog`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `${websiteUrl}/blog/${post.slug}`
      }
    ]
  };
}
