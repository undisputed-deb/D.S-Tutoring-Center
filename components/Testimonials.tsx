"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import ReviewForm from "./ReviewForm";

type Review = {
  id: string;
  name: string;
  email: string;
  grade: string;
  subject: string;
  school?: string;
  rating: number;
  message?: string;
  comment?: string;
  status: string;
  created_at: string;
};

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log("🔍 Fetching reviews from Supabase...");
      console.log("📍 Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);

      const { data, error: fetchError } = await supabase
        .from("reviews")
        .select("*")
        .eq("status", "approved")
        .order("created_at", { ascending: false });

      console.log("✅ Fetch complete!");
      console.log("📊 Number of reviews fetched:", data?.length || 0);
      console.log("📝 Review data:", data);
      console.log("❌ Fetch error:", fetchError);

      if (fetchError) {
        console.error("🚨 Supabase error details:", fetchError);
        throw fetchError;
      }

      setReviews(data || []);
      console.log("✨ Reviews set to state:", data || []);
    } catch (err: any) {
      setError(err.message || "Failed to load reviews");
      console.error("💥 Error fetching reviews:", err);
      console.error("💥 Error details:", {
        message: err.message,
        details: err.details,
        hint: err.hint,
        code: err.code,
      });
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  // Helper function to get review text (handles both 'comment' and 'message' fields for backward compatibility)
  const getReviewText = (review: Review) => {
    const text = review.comment || review.message || "";
    console.log(`📝 Review ${review.id} text:`, text);
    console.log(`   - comment field:`, review.comment);
    console.log(`   - message field (legacy):`, review.message);
    return text;
  };

  const featuredReview = reviews.length > 0 ? reviews[0] : null;
  const miniReviews = reviews.slice(1);

  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="relative py-16 md:py-24"
    >
      {/* Diagonal split background (dark instead of white) */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 diagonal-right bg-[#1a1a1a]" />
      </div>

      {/* Header across diagonal */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h3
          className="font-black text-balance text-outline"
          style={{ fontSize: "clamp(2rem, 8vw, 5rem)" }}
        >
          WHAT STUDENTS SAY
        </h3>
      </div>

      {loading ? (
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8 mt-8">
          <div className="text-center text-white/70">Loading reviews...</div>
        </div>
      ) : error ? (
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8 mt-8">
          <div className="text-center text-red-400">Error: {error}</div>
        </div>
      ) : reviews.length === 0 ? (
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8 mt-8">
          <div className="rounded-3xl border border-white/10 bg-black p-8 text-center">
            <p className="text-white/90 text-xl">
              Be the first to leave a review!
            </p>
            <p className="mt-2 text-white/60">
              Share your experience with D.S Tutoring Center
            </p>
          </div>
        </div>
      ) : (
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8 mt-8 grid grid-cols-12 gap-6">
          {/* Left: Featured testimonial on dark */}
          {featuredReview && (
            <div className="col-span-12 md:col-span-6">
              <div className="rounded-3xl border border-white/10 bg-black p-6 md:p-8">
                <div className="text-6xl md:text-7xl leading-none text-[#ffd700]">"</div>
                <blockquote className="mt-4 text-white/95 text-xl md:text-2xl leading-relaxed">
                  {getReviewText(featuredReview)}
                </blockquote>
                <div className="mt-6 flex flex-col gap-2">
                  <div className="text-white/90 font-medium text-lg">
                    {featuredReview.name}
                    {featuredReview.grade && `, ${featuredReview.grade}`}
                  </div>
                  <div className="text-white/60 text-sm">
                    {featuredReview.subject}
                    {featuredReview.school && ` • ${featuredReview.school}`}
                  </div>
                </div>
                <div
                  className="mt-4 text-[#ffd700] text-2xl"
                  aria-label={`${featuredReview.rating} stars`}
                >
                  {renderStars(featuredReview.rating)}
                </div>
              </div>
            </div>
          )}

          {/* Right: Marquee of mini testimonials on dark */}
          {miniReviews.length > 0 && (
            <div className="col-span-12 md:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] p-4">
                <div className="marquee marquee-left inline-flex gap-4 min-w-[200%]">
                  {[...miniReviews, ...miniReviews].map((review, i) => (
                    <div
                      key={`${review.id}-${i}`}
                      className="rounded-xl border border-white/10 bg-[#1a1a1a] px-5 py-4 text-white shadow-sm min-w-[300px] max-w-[400px]"
                    >
                      <p className="text-sm text-white/90 leading-relaxed mb-3 whitespace-normal break-words">
                        "{getReviewText(review)}"
                      </p>
                      <div className="flex flex-col gap-1">
                        <div className="text-xs text-white/80 font-medium">
                          {review.name}
                          {review.grade && `, ${review.grade}`}
                        </div>
                        <div className="text-xs text-white/50">
                          {review.subject}
                          {review.school && ` • ${review.school}`}
                        </div>
                      </div>
                      <div className="mt-3 text-[#ffd700] text-sm">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Review Form Section */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8 mt-16">
        <div className="text-center mb-12">
          <h4 className="text-3xl md:text-4xl font-black text-white">
            LEAVE A REVIEW
          </h4>
          <p className="mt-4 text-white/70">
            Share your experience and help other students succeed
          </p>
        </div>
        <ReviewForm />
      </div>
    </section>
  );
}
