// src/components/Reviews.tsx
"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, Loader2, Plus } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { supabase, type Review } from "@/lib/supabase";
import { ReviewForm } from "@/components/ReviewForm";

export const Reviews = () => {
  const sectionRef = useRef(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  useEffect(() => {
    fetchApprovedReviews();
  }, []);

  const fetchApprovedReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('status', 'approved')
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (data) setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300 dark:text-gray-600"
        }`}
      />
    ));
  };

  const ReviewCard = ({ review, index }: { review: Review; index: number }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.03, y: -5 }}
        className="h-full"
      >
        <Card className="group relative overflow-hidden border-2 border-white/20 hover:border-transparent transition-all duration-500 h-full backdrop-blur-xl bg-white/10 dark:bg-slate-800/10 hover:shadow-2xl p-6">
          
          {/* Glassmorphism background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/5 dark:from-slate-800/30 dark:to-slate-900/5 backdrop-blur-md"></div>
          
          {/* Gradient overlay on hover */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-80 transition-opacity duration-700"
          ></motion.div>

          {/* Quote icon */}
          <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Quote className="w-16 h-16 text-white" />
          </div>

          <div className="relative space-y-4">
            {/* Rating */}
            <div className="flex items-center gap-1">
              {renderStars(review.rating)}
            </div>

            {/* Comment */}
            <p className="text-slate-700 dark:text-slate-200 group-hover:text-white transition-colors duration-500 leading-relaxed font-medium">
              "{review.comment}"
            </p>

            {/* Author Info */}
            <div className="pt-4 border-t border-white/10 space-y-1">
              <p className="font-bold text-slate-900 dark:text-white group-hover:text-white transition-colors">
                {review.name}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-white/80 transition-colors">
                {review.grade} • {review.subject}
              </p>
              {review.school && (
                <p className="text-xs text-slate-500 dark:text-slate-500 group-hover:text-white/70 transition-colors">
                  {review.school}
                </p>
              )}
            </div>
          </div>
        </Card>
      </motion.div>
    );
  };

  return (
    <section 
      id="reviews"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [-30, 30, -30],
            y: [-30, 30, -30],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [30, -30, 30],
            y: [30, -30, 30],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ opacity }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6"
              animate={{
                textShadow: [
                  "0 0 20px rgba(236, 72, 153, 0.5)",
                  "0 0 40px rgba(236, 72, 153, 0.8)",
                  "0 0 20px rgba(236, 72, 153, 0.5)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              What Students Say
            </motion.h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Real feedback from real students achieving real results
            </p>
            <motion.div 
              className="w-32 h-1.5 bg-gradient-to-r from-pink-400 via-orange-500 to-yellow-400 mx-auto rounded-full mb-8"
              animate={{
                scaleX: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>

            {/* Add Review Button */}
            {!showForm && (
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button
                  onClick={() => setShowForm(true)}
                  className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 hover:from-pink-600 hover:via-orange-600 hover:to-yellow-600 text-white font-bold px-8 py-4 text-lg rounded-full shadow-2xl"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Leave a Review
                </Button>
              </motion.div>
            )}
          </motion.div>

          {/* Review Form */}
          {showForm && (
            <ReviewForm 
              onClose={() => setShowForm(false)} 
              onSuccess={() => {
                setShowForm(false);
                fetchApprovedReviews();
              }}
            />
          )}

          {/* Reviews Display */}
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-12 h-12 text-white animate-spin" />
            </div>
          ) : reviews.length === 0 && !showForm ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <p className="text-xl text-white/70 mb-6">
                Be the first to leave a review!
              </p>
            </motion.div>
          ) : reviews.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
              style={{ y: parallaxY }}
            >
              {reviews.map((review, index) => (
                <ReviewCard key={review.id} review={review} index={index} />
              ))}
            </motion.div>
          ) : null}
        </div>
      </motion.div>
    </section>
  );
};