"use client";

import { Card } from "@/components/ui/card";
import { Heart, Ear, Users2, Zap, TrendingUp } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, memo } from "react";

// Memoized Commitment Card
const CommitmentCard = memo(({ item, index }: { item: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full"
    >
      <Card className="group relative p-6 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 border-2 border-white/30 overflow-hidden h-full">
        
        {/* Gradient overlay on hover */}
        {isHovered && (
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}

        {/* Subtle glow effect */}
        <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>

        <div className="relative flex items-start gap-4">
          <motion.div 
            className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <item.icon className="w-6 h-6 text-white" />
          </motion.div>
          <p className="text-slate-800 dark:text-white group-hover:text-white leading-relaxed pt-2 font-medium transition-colors duration-300">
            {item.text}
          </p>
        </div>
      </Card>
    </motion.div>
  );
});

CommitmentCard.displayName = "CommitmentCard";

export const Commitment = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const commitments = [
    {
      icon: Ear,
      text: "I actively listen to parents and guardians, understanding each family's unique circumstances",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: Users2,
      text: "I adapt my teaching style to fit every student's needs",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: Zap,
      text: "I give 120% effort to deliver the best results for every student",
      gradient: "from-orange-400 to-red-500"
    },
    {
      icon: TrendingUp,
      text: "Monthly progress assessments tailored to each student's schedule",
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      icon: Heart,
      text: "Proven strategies that build confidence and achieve results",
      gradient: "from-pink-400 to-rose-500"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      {/* Simplified animated background - only 2 orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ opacity }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 bg-pink-500/20 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-pink-400/30">
                <Heart className="w-6 h-6 text-pink-400" />
                <span className="text-pink-300 font-semibold">My Commitment</span>
              </div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Try Just 1-2 Classes -<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">You'll See Why I'm The Best Choice</span>
            </h2>
            
            <p className="text-xl text-white/80">
              For Your Child's Success
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {commitments.map((item, index) => (
              <CommitmentCard key={index} item={item} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-3xl blur-sm" />

            <Card className="relative bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 text-white p-10 sm:p-12 text-center shadow-2xl border-0">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Experience the Difference
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join hundreds of students who have transformed their academic journey with personalized attention and proven results
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a 
                  href="tel:9173126589"
                  className="inline-flex items-center justify-center bg-white text-purple-600 hover:bg-white/90 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📞 Call Now: 917-312-6589
                </motion.a>
                <motion.a 
                  href="mailto:debashrestha222@gmail.com"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📧 Email Me
                </motion.a>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};