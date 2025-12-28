"use client";

import { useState, FormEvent } from "react";

export default function ReviewForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    grade: "",
    subject: "",
    school: "",
    rating: 5,
    comment: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Use secure API route instead of direct Supabase call
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          grade: formData.grade,
          subject: formData.subject,
          school: formData.school,
          rating: formData.rating,
          comment: formData.comment,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit review');
      }

      setStatus("success");
      setFormData({ name: "", email: "", grade: "", subject: "", school: "", rating: 5, comment: "" });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || "Failed to submit review. Please try again.");
      console.error("Error submitting review:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.name === "rating" ? parseInt(e.target.value) : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="review-name" className="block text-sm font-medium text-white/90 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="review-name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:border-transparent transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="review-email" className="block text-sm font-medium text-white/90 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="review-email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:border-transparent transition"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="grade" className="block text-sm font-medium text-white/90 mb-2">
              Grade *
            </label>
            <input
              type="text"
              id="grade"
              name="grade"
              required
              value={formData.grade}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:border-transparent transition"
              placeholder="e.g., 10th"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-white/90 mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:border-transparent transition"
              placeholder="e.g., Math"
            />
          </div>

          <div>
            <label htmlFor="school" className="block text-sm font-medium text-white/90 mb-2">
              School
            </label>
            <input
              type="text"
              id="school"
              name="school"
              value={formData.school}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:border-transparent transition"
              placeholder="School name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="rating" className="block text-sm font-medium text-white/90 mb-2">
            Rating *
          </label>
          <div className="flex items-center gap-4">
            <select
              id="rating"
              name="rating"
              required
              value={formData.rating}
              onChange={handleChange}
              className="px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:border-transparent transition"
            >
              <option value={5}>5 Stars - Excellent</option>
              <option value={4}>4 Stars - Very Good</option>
              <option value={3}>3 Stars - Good</option>
              <option value={2}>2 Stars - Fair</option>
              <option value={1}>1 Star - Poor</option>
            </select>
            <div className="text-[#ffd700] text-2xl">
              {"★".repeat(formData.rating)}{"☆".repeat(5 - formData.rating)}
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="review-comment" className="block text-sm font-medium text-white/90 mb-2">
            Your Review *
          </label>
          <textarea
            id="review-comment"
            name="comment"
            required
            value={formData.comment}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:border-transparent transition resize-none"
            placeholder="Share your experience with D.S Tutoring Center..."
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full btn btn-primary-gradient btn-lg glow-pulse disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "SUBMITTING..." : "SUBMIT REVIEW"}
        </button>

        {status === "success" && (
          <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-center">
            Thank you for your review! It will be published after review.
          </div>
        )}

        {status === "error" && (
          <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-center">
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  );
}
