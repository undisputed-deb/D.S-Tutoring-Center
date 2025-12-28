"use client";

import { useState, FormEvent } from "react";
import { checkClientSideRateLimit } from "@/lib/rate-limit";

interface BlogLeadFormProps {
  blogSlug: string;
  ctaHeading?: string;
  ctaDescription?: string;
}

export default function BlogLeadForm({
  blogSlug,
  ctaHeading = "Does this sound familiar?",
  ctaDescription = "Schedule a free diagnostic session. We'll identify exactly what's holding your child back and create a personalized plan."
}: BlogLeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    student_grade: "",
    subject_interest: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Client-side rate limiting (first line of defense)
      const rateLimitCheck = checkClientSideRateLimit('blog_lead', 3, 60);
      if (!rateLimitCheck.isAllowed) {
        setErrorMessage(rateLimitCheck.error || "Too many submissions. Please try again later.");
        setStatus("error");
        return;
      }

      // Basic validation
      if (!formData.name.trim() || !formData.email.trim()) {
        setErrorMessage("Please fill in all required fields.");
        setStatus("error");
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setErrorMessage("Please enter a valid email address.");
        setStatus("error");
        return;
      }

      // Use secure API route instead of direct Supabase call
      const response = await fetch('/api/blog-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          blog_post_slug: blogSlug,
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim() || undefined,
          student_grade: formData.student_grade || undefined,
          subject_interest: formData.subject_interest || undefined,
          message: formData.message.trim() || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      // Success
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        student_grade: "",
        subject_interest: "",
        message: ""
      });

      // Track conversion event (if you add analytics later)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'Blog Lead Form',
          event_label: blogSlug
        });
      }

    } catch (err: any) {
      console.error("Form submission error:", err);
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className="my-12 p-8 bg-gradient-electric rounded-lg border border-white/20">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-3 text-white">
          {ctaHeading}
        </h3>
        <p className="text-white/90 mb-6">
          {ctaDescription}
        </p>

        {status === "success" ? (
          <div className="bg-green-500/20 border border-green-500/40 rounded-lg p-6 text-center">
            <svg
              className="w-12 h-12 text-green-400 mx-auto mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
            <p className="text-white/90">
              We've received your information and will contact you within 24 hours to schedule your free diagnostic session.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-1">
                  Parent/Student Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:border-transparent transition-all"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:border-transparent transition-all"
                  placeholder="(917) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="student_grade" className="block text-sm font-medium text-white/90 mb-1">
                  Student Grade
                </label>
                <select
                  id="student_grade"
                  name="student_grade"
                  value={formData.student_grade}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:border-transparent transition-all"
                >
                  <option value="">Select grade</option>
                  <option value="6th">6th Grade</option>
                  <option value="7th">7th Grade</option>
                  <option value="8th">8th Grade</option>
                  <option value="9th">9th Grade</option>
                  <option value="10th">10th Grade</option>
                  <option value="11th">11th Grade</option>
                  <option value="12th">12th Grade</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="subject_interest" className="block text-sm font-medium text-white/90 mb-1">
                Subject of Interest
              </label>
              <select
                id="subject_interest"
                name="subject_interest"
                value={formData.subject_interest}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:border-transparent transition-all"
              >
                <option value="">Select subject</option>
                <option value="SHSAT Prep">SHSAT Prep</option>
                <option value="SAT Prep">SAT Prep</option>
                <option value="Regents Tutoring">Regents Tutoring</option>
                <option value="Math Tutoring">Math Tutoring</option>
                <option value="Science Tutoring">Science Tutoring</option>
                <option value="Multiple Subjects">Multiple Subjects</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-1">
                Tell us about your child's challenges (optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:border-transparent transition-all resize-none"
                placeholder="My child is struggling with..."
              />
            </div>

            {status === "error" && errorMessage && (
              <div className="bg-red-500/20 border border-red-500/40 rounded-lg p-4 text-red-200">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn btn-primary-gradient btn-lg glow-pulse w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "SENDING..." : "SCHEDULE FREE DIAGNOSTIC SESSION"}
            </button>

            <p className="text-xs text-white/60 text-center">
              No obligation. No credit card required. We'll contact you within 24 hours.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
