import Link from "next/link";
import { formatDate, getCategoryColor, getCategoryDisplayName, type BlogPost } from "@/lib/blog-utils";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-white/30 transition-all duration-300 hover:transform hover:scale-[1.02]">
      {post.featured_image_url && (
        <div className="aspect-video w-full overflow-hidden bg-white/5">
          <img
            src={post.featured_image_url}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className={`text-sm font-bold ${getCategoryColor(post.category)}`}>
            {getCategoryDisplayName(post.category)}
          </span>
          <span className="text-white/40 text-sm">•</span>
          <time className="text-sm text-white/60" dateTime={post.published_date}>
            {formatDate(post.published_date)}
          </time>
          <span className="text-white/40 text-sm">•</span>
          <span className="text-sm text-white/60">
            {post.reading_time_minutes} min read
          </span>
        </div>

        <Link href={`/blog/${post.slug}`} className="group-hover:text-gradient-electric transition-colors">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ffd700] transition-colors">
            {post.title}
          </h3>
        </Link>

        <p className="text-white/70 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-[#ffd700] hover:text-[#00d9ff] transition-colors font-medium"
        >
          Read Article
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
