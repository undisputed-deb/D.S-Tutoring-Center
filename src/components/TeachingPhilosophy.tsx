"use client";

import { Check, BookOpenCheck, Target, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, memo } from "react";

// Memoized Step Card
const StepCard = memo(({ step, index }: { step: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full"
    >
      <Card className="group relative p-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 border-2 border-white/30 overflow-hidden h-full">
        
        {/* Gradient overlay on hover */}
        {isHovered && (
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-85`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
        
        {/* Subtle glow effect */}
        <div className={`absolute -inset-1 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
        
        <div className="relative text-center space-y-4">
          <motion.div 
            className={`w-16 h-16 ${step.iconBg} rounded-2xl flex items-center justify-center mx-auto shadow-xl`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <step.icon className="w-8 h-8 text-white" />
          </motion.div>
          
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-400 group-hover:from-white group-hover:to-white text-white group-hover:text-slate-900 font-black text-xl shadow-lg transition-all duration-300">
            {index + 1}
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-white transition-colors duration-300">
            {step.title}
          </h3>
          
          <p className="text-slate-800 dark:text-slate-200 group-hover:text-white transition-colors duration-300 font-medium">
            {step.description}
          </p>
        </div>

        {/* Bottom accent line */}
        <motion.div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${step.gradient}`}
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : 0 }}
          transition={{ duration: 0.3 }}
        />
      </Card>
    </motion.div>
  );
});

StepCard.displayName = "StepCard";

export const TeachingPhilosophy = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const steps = [
    {
      icon: BookOpenCheck,
      title: "Master the Fundamentals",
      description: "Master all concepts, basics, logic, and formulas with deep understanding",
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      iconBg: "bg-gradient-to-br from-cyan-400 to-indigo-600",
    },
    {
      icon: Target,
      title: "Practice Together",
      description: "Work through practice problems together in class with guided support",
      gradient: "from-orange-400 via-red-500 to-pink-600",
      iconBg: "bg-gradient-to-br from-orange-400 to-pink-600",
    },
    {
      icon: TrendingUp,
      title: "Reinforce & Excel",
      description: "Reinforce learning with targeted homework assignments for mastery",
      gradient: "from-emerald-400 via-green-500 to-teal-600",
      iconBg: "bg-gradient-to-br from-emerald-400 to-teal-600",
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden"
    >
      {/* Simplified animated background - only 2 orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ opacity }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
              Teaching Philosophy
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-6">
              A proven three-step approach that transforms students into confident learners
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 blur-sm" />

            <Card className="relative bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 text-white p-10 sm:p-12 shadow-2xl border-0">
              <div className="relative max-w-3xl mx-auto space-y-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black">My Commitment to You</h3>
                </div>
                
                <p className="text-xl sm:text-2xl text-center leading-relaxed font-medium">
                  "I'm always here for my students and their families. My goal is simple: give <span className="font-black text-yellow-300 text-3xl">120%</span> to ensure every student succeeds. Your child's success is my success."
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                  <motion.a 
                    href="tel:9173126589" 
                    className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full text-lg font-bold transition-all duration-300 border-2 border-white/40"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    📞 917-312-6589
                  </motion.a>
                  <span className="hidden sm:inline text-white/60 text-2xl">•</span>
                  <motion.a 
                    href="mailto:debashrestha222@gmail.com" 
                    className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full text-lg font-bold transition-all duration-300 border-2 border-white/40"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    📧 debashrestha222@gmail.com
                  </motion.a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};