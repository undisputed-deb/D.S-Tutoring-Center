import Link from "next/link";
import { formatDate, getCategoryColor, type BlogPost } from "@/lib/blog-utils";

interface RelatedPostsProps {
  posts: BlogPost[];
  currentSlug: string;
}

export default function RelatedPosts({ posts, currentSlug }: RelatedPostsProps) {
  // Filter out current post and limit to 3
  const relatedPosts = posts
    .filter(post => post.slug !== currentSlug)
    .slice(0, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-12 border-t border-white/10">
      <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <article
            key={post.slug}
            className="group bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-[1.02]"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-xs font-bold ${getCategoryColor(post.category)}`}>
                {post.category}
              </span>
              <span className="text-white/40 text-xs">•</span>
              <time className="text-xs text-white/60" dateTime={post.published_date}>
                {formatDate(post.published_date)}
              </time>
            </div>

            <Link href={`/blog/${post.slug}`}>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#ffd700] transition-colors line-clamp-2">
                {post.title}
              </h3>
            </Link>

            <p className="text-white/70 text-sm mb-4 line-clamp-2">
              {post.excerpt}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 text-[#ffd700] hover:text-[#00d9ff] transition-colors text-sm font-medium"
            >
              Read More
              <svg
                className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
