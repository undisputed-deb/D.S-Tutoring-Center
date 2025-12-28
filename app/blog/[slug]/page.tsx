import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import {
  formatDate,
  getCategoryColor,
  getCategoryDisplayName,
  getRelatedServicePage,
  generateArticleSchema,
  generateBreadcrumbSchema,
  sanitizeContent,
  type BlogPost
} from "@/lib/blog-utils";
import BlogLeadForm from "@/components/BlogLeadForm";
import RelatedPosts from "@/components/RelatedPosts";

const WEBSITE_URL = "https://d-s-tutoring-center.vercel.app";

// Generate metadata for each blog post
export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { data: post } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (!post) {
    return {
      title: "Post Not Found | D.S Tutoring Center",
      description: "The blog post you're looking for doesn't exist."
    };
  }

  return {
    title: post.title,
    description: post.meta_description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.meta_description,
      type: "article",
      publishedTime: post.published_date,
      modifiedTime: post.updated_date || post.published_date,
      authors: [post.author],
      images: post.featured_image_url
        ? [{ url: post.featured_image_url }]
        : [{ url: `${WEBSITE_URL}/D.S Tutoring Center Logo.jpeg` }]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.meta_description,
      images: post.featured_image_url || `${WEBSITE_URL}/D.S Tutoring Center Logo.jpeg`
    },
    alternates: {
      canonical: `${WEBSITE_URL}/blog/${post.slug}`
    }
  };
}

// Fetch blog post by slug
async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (error || !data) {
    return null;
  }

  // Increment view count (fire and forget)
  supabase.rpc("increment_blog_view_count", { post_slug: slug }).then();

  return data as BlogPost;
}

// Fetch related posts
async function getRelatedPosts(category: string, limit: number = 3): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("is_published", true)
    .eq("category", category)
    .order("published_date", { ascending: false })
    .limit(limit + 1); // Fetch one extra to account for current post

  if (error || !data) {
    return [];
  }

  return data as BlogPost[];
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.category);
  const relatedService = getRelatedServicePage(post.category);
  const articleSchema = generateArticleSchema(post, WEBSITE_URL);
  const breadcrumbSchema = generateBreadcrumbSchema(post, WEBSITE_URL);

  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <article className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumbs */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center gap-2 text-white/60">
            <li>
              <Link href="/" className="hover:text-[#ffd700] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li>
              <Link href="/blog" className="hover:text-[#ffd700] transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="text-white/90">{post.title}</li>
          </ol>
        </nav>

        {/* Category Badge */}
        <div className="mb-4">
          <span className={`inline-block text-sm font-bold ${getCategoryColor(post.category)} px-3 py-1 bg-white/5 rounded-full border border-white/10`}>
            {getCategoryDisplayName(post.category)}
          </span>
        </div>

        {/* Post Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Post Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-white/10">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-white/80">{post.author}</span>
          </div>
          <span className="text-white/40">•</span>
          <time className="text-white/80" dateTime={post.published_date}>
            {formatDate(post.published_date)}
          </time>
          <span className="text-white/40">•</span>
          <span className="text-white/80">{post.reading_time_minutes} min read</span>
          {post.view_count > 0 && (
            <>
              <span className="text-white/40">•</span>
              <span className="text-white/80">{post.view_count.toLocaleString()} views</span>
            </>
          )}
        </div>

        {/* Featured Image */}
        {post.featured_image_url && (
          <div className="mb-12 rounded-lg overflow-hidden border border-white/10">
            <img
              src={post.featured_image_url}
              alt={post.title}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Post Content */}
        <div
          className="prose prose-invert prose-lg max-w-none mb-12
            prose-headings:text-white prose-headings:font-bold
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-white/80 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-[#ffd700] prose-a:no-underline hover:prose-a:text-[#00d9ff] prose-a:transition-colors
            prose-strong:text-white prose-strong:font-bold
            prose-ul:text-white/80 prose-ul:my-6
            prose-ol:text-white/80 prose-ol:my-6
            prose-li:mb-2
            prose-blockquote:border-l-4 prose-blockquote:border-[#ffd700] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-white/70
            prose-code:text-[#00d9ff] prose-code:bg-white/5 prose-code:px-2 prose-code:py-1 prose-code:rounded
          "
          dangerouslySetInnerHTML={{ __html: sanitizeContent(post.content) }}
        />

        {/* Related Service CTA */}
        {relatedService && (
          <div className="my-12 p-6 bg-white/5 border border-white/10 rounded-lg">
            <p className="text-white/80 mb-4">
              <strong className="text-white">Looking for professional help?</strong> Check out our{" "}
              <Link
                href={relatedService.url}
                className="text-[#ffd700] hover:text-[#00d9ff] transition-colors font-medium"
              >
                {relatedService.title}
              </Link>{" "}
              services.
            </p>
          </div>
        )}

        {/* Lead Capture Form */}
        <BlogLeadForm blogSlug={post.slug} />

        {/* Share Buttons - Future Enhancement */}
        {/* <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/80 mb-4">Share this article:</p>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:border-white/30 transition-all">
              Twitter
            </button>
            <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:border-white/30 transition-all">
              Facebook
            </button>
            <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:border-white/30 transition-all">
              LinkedIn
            </button>
          </div>
        </div> */}

        {/* Related Posts */}
        <RelatedPosts posts={relatedPosts} currentSlug={post.slug} />
      </article>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </main>
  );
}
