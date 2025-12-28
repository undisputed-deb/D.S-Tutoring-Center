import { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import BlogCard from "@/components/BlogCard";
import { type BlogPost } from "@/lib/blog-utils";

export const metadata: Metadata = {
  title: "Tutoring Advice & Test Prep Tips | D.S Tutoring Center Blog",
  description: "Expert advice on SHSAT prep, Regents exams, SAT tutoring, and helping struggling students in NYC. Real insights from experienced tutors.",
  keywords: [
    "SHSAT prep tips",
    "SAT tutoring advice",
    "Regents exam help",
    "NYC tutoring blog",
    "math help for struggling students",
    "test prep strategies NYC"
  ],
  openGraph: {
    title: "Tutoring Advice & Test Prep Tips | D.S Tutoring Center Blog",
    description: "Expert advice on SHSAT prep, Regents exams, SAT tutoring, and helping struggling students in NYC.",
    type: "website",
    url: "https://d-s-tutoring-center.vercel.app/blog"
  },
  alternates: {
    canonical: "https://d-s-tutoring-center.vercel.app/blog"
  }
};

async function getBlogPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("is_published", true)
    .order("published_date", { ascending: false });

  if (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }

  return data as BlogPost[];
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real Advice from{" "}
            <span className="text-gradient-electric">NYC Tutors</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Practical strategies for SHSAT, Regents, SAT, and helping students who are falling behind.
            No fluff—just what actually works based on years of tutoring experience in New York City.
          </p>
        </div>

        {/* Category Filter - Future Enhancement */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button className="px-4 py-2 rounded-full border border-white/20 text-white hover:border-[#ffd700] hover:text-[#ffd700] transition-all">
            All Posts
          </button>
          <button className="px-4 py-2 rounded-full border border-white/20 text-white hover:border-[#ffd700] hover:text-[#ffd700] transition-all">
            SHSAT
          </button>
          <button className="px-4 py-2 rounded-full border border-white/20 text-white hover:border-[#ffd700] hover:text-[#ffd700] transition-all">
            SAT
          </button>
          <button className="px-4 py-2 rounded-full border border-white/20 text-white hover:border-[#ffd700] hover:text-[#ffd700] transition-all">
            Regents
          </button>
          <button className="px-4 py-2 rounded-full border border-white/20 text-white hover:border-[#ffd700] hover:text-[#ffd700] transition-all">
            Math
          </button>
        </div> */}

        {/* Blog Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-block p-8 bg-white/5 border border-white/10 rounded-lg">
              <svg
                className="w-16 h-16 text-white/40 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <h2 className="text-2xl font-bold text-white mb-2">Coming Soon</h2>
              <p className="text-white/70">
                We're working on helpful articles for NYC students and parents.
                <br />
                Check back soon!
              </p>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 max-w-3xl mx-auto text-center p-8 bg-gradient-electric rounded-lg border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Now?
          </h2>
          <p className="text-white/90 mb-6 text-lg">
            Don't wait for your child to fall further behind. Schedule a free diagnostic session today.
          </p>
          <a
            href="/#contact"
            className="btn btn-primary-gradient btn-lg glow-pulse inline-block"
          >
            SCHEDULE FREE DIAGNOSTIC
          </a>
        </div>
      </div>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "D.S Tutoring Center Blog",
            description: "Expert tutoring advice for NYC students and parents",
            url: "https://d-s-tutoring-center.vercel.app/blog",
            publisher: {
              "@type": "Organization",
              name: "D.S Tutoring Center",
              logo: {
                "@type": "ImageObject",
                url: "https://d-s-tutoring-center.vercel.app/D.S Tutoring Center Logo.jpeg"
              }
            }
          })
        }}
      />
    </main>
  );
}
