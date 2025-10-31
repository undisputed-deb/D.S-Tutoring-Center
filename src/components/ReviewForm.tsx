// src/components/ReviewForm.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Send, CheckCircle, AlertCircle, User, Mail, BookOpen, School as SchoolIcon, GraduationCap, MessageSquare, X } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

interface ReviewFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

export const ReviewForm = ({ onClose, onSuccess }: ReviewFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    grade: "",
    subject: "",
    customSubject: "", // NEW: for custom input
    school: "",
    rating: 0,
    comment: ""
  });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const grades = [
    "5th Grade", "6th Grade", "7th Grade", "8th Grade",
    "9th Grade", "10th Grade", "11th Grade", "12th Grade"
  ];

  const subjects = [
    "State Test Prep",
    "SHSAT Preparation",
    "SAT Tutoring",
    "Regents Exams",
    "AP Courses",
    "Math",
    "ELA",
    "Science",
    "Other" // This triggers the custom input
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.rating === 0) {
      setError("Please select a rating");
      return;
    }

    // If "Other" is selected, use custom subject
    const finalSubject = formData.subject === "Other" 
      ? formData.customSubject 
      : formData.subject;

    if (!finalSubject || finalSubject.trim() === "") {
      setError("Please specify your subject(s)");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase
        .from('reviews')
        .insert([{
          name: formData.name,
          email: formData.email,
          grade: formData.grade,
          subject: finalSubject, // Use the final subject
          school: formData.school || null,
          rating: formData.rating,
          comment: formData.comment,
          status: 'pending'
        }]);

      if (supabaseError) throw supabaseError;

      setIsSubmitted(true);
      setTimeout(() => {
        onSuccess();
      }, 3000);
    } catch (err) {
      console.error('Error submitting review:', err);
      setError("Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="max-w-3xl mx-auto mb-16"
    >
      <Card className="relative bg-slate-900/95 backdrop-blur-xl border-2 border-pink-500/30 p-8 sm:p-12">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: 2 }}
            >
              <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
            </motion.div>
            <h3 className="text-3xl font-bold text-white mb-4">Thank You!</h3>
            <p className="text-xl text-white/80">
              Your review has been submitted for approval. It will appear on the site once approved!
            </p>
          </motion.div>
        ) : (
          <>
            <h3 className="text-3xl font-bold text-white mb-2 text-center">Leave a Review</h3>
            <p className="text-white/70 mb-8 text-center">Share your experience with D.S Tutoring Center</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-red-200 text-sm">{error}</p>
                </motion.div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Grade */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <GraduationCap className="w-4 h-4 inline mr-2" />
                    Grade/Class *
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  >
                    <option value="" className="bg-slate-900">Select grade</option>
                    {grades.map((grade) => (
                      <option key={grade} value={grade} className="bg-slate-900">{grade}</option>
                    ))}
                  </select>
                </div>

                {/* Subject Dropdown */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <BookOpen className="w-4 h-4 inline mr-2" />
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  >
                    <option value="" className="bg-slate-900">Select subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject} className="bg-slate-900">{subject}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Custom Subject Input - Shows when "Other" is selected */}
              {formData.subject === "Other" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <label className="block text-white font-semibold mb-2">
                    <BookOpen className="w-4 h-4 inline mr-2" />
                    Specify Your Subject(s) *
                  </label>
                  <input
                    type="text"
                    name="customSubject"
                    value={formData.customSubject}
                    onChange={handleChange}
                    required={formData.subject === "Other"}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="e.g., Algebra, Chemistry, Physics (separate with commas)"
                  />
                  <p className="text-xs text-white/60 mt-2">
                    💡 Tip: You can enter multiple subjects separated by commas
                  </p>
                </motion.div>
              )}

              {/* School */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  <SchoolIcon className="w-4 h-4 inline mr-2" />
                  School Name (Optional)
                </label>
                <input
                  type="text"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="Enter school name"
                />
              </div>

              {/* Rating */}
              <div>
                <label className="block text-white font-semibold mb-2">Rating *</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-10 h-10 ${
                          star <= (hoveredRating || formData.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-600"
                        } transition-colors`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Comment */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Your Review *
                </label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                  placeholder="Share your experience with us..."
                />
              </div>

              {/* Submit Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 hover:from-pink-600 hover:via-orange-600 hover:to-yellow-600 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2 justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 justify-center">
                      <Send className="w-5 h-5" />
                      Submit Review
                    </span>
                  )}
                </Button>
              </motion.div>

              <p className="text-sm text-white/60 text-center">
                Your review will be visible after approval
              </p>
            </form>
          </>
        )}
      </Card>
    </motion.div>
  );
};