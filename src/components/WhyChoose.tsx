"use client";

import { Target, TrendingUp, Users, Clock, Award, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, memo } from "react";

// Memoized Card3D component to prevent unnecessary re-renders
const Card3D = memo(({ feature, index }: { feature: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full"
    >
      <Card className="group relative overflow-hidden border-2 border-white/20 dark:border-slate-700/30 hover:border-transparent transition-all duration-500 h-full backdrop-blur-xl bg-white/10 dark:bg-slate-800/10 hover:shadow-2xl">
        
        {/* Simplified background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/5 dark:from-slate-800/30 dark:to-slate-900/5 backdrop-blur-md"></div>
        
        {/* Animated gradient overlay - only on hover */}
        {isHovered && (
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-90`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
        
        {/* Glowing border effect - simplified */}
        <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}></div>
        
        <CardContent className="relative p-8 transition-colors duration-500">
          {/* Icon */}
          <motion.div 
            className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-2xl relative`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <feature.icon className="w-8 h-8 text-white" />
          </motion.div>
          
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-white mb-3 transition-colors duration-500">
            {feature.title}
          </h3>
          <p className="text-slate-700 dark:text-slate-200 group-hover:text-white transition-colors duration-500 leading-relaxed font-medium">
            {feature.description}
          </p>
        </CardContent>

        {/* Bottom accent line */}
        <motion.div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient}`}
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : 0 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
      </Card>
    </motion.div>
  );
});

Card3D.displayName = "Card3D";

export const WhyChoose = () => {
  const features = [
    {
      icon: Award,
      title: "Proven Teaching Methods",
      description: "Systematic approach that builds mastery through formula mastery, logic, and practice",
      gradient: "from-amber-400 via-yellow-500 to-orange-500",
      iconBg: "bg-gradient-to-br from-amber-400 to-orange-500",
    },
    {
      icon: TrendingUp,
      title: "2.5 Years Experience",
      description: "Previously tutored at Bobby Tariq Tutoring Center with a track record of success",
      gradient: "from-emerald-400 via-teal-500 to-cyan-500",
      iconBg: "bg-gradient-to-br from-emerald-400 to-cyan-500",
    },
    {
      icon: Users,
      title: "Personalized Approach",
      description: "I adapt my teaching style to fit every student's unique learning needs",
      gradient: "from-purple-400 via-violet-500 to-fuchsia-500",
      iconBg: "bg-gradient-to-br from-purple-400 to-fuchsia-500",
    },
    {
      icon: Zap,
      title: "120% Commitment",
      description: "I give my absolute best to ensure every student achieves their academic goals",
      gradient: "from-rose-400 via-pink-500 to-red-500",
      iconBg: "bg-gradient-to-br from-rose-400 to-red-500",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Monthly progress assessments tailored to each student's schedule",
      gradient: "from-blue-400 via-indigo-500 to-purple-500",
      iconBg: "bg-gradient-to-br from-blue-400 to-purple-500",
    },
    {
      icon: Target,
      title: "Results-Driven Strategies",
      description: "Homework and school quizzes are my TOP priority for immediate impact",
      gradient: "from-lime-400 via-green-500 to-emerald-500",
      iconBg: "bg-gradient-to-br from-lime-400 to-emerald-500",
    },
  ];

  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      id="why-choose"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      {/* Simplified animated background - only 2 orbs instead of many particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
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
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
            Why Choose D.S Tutoring Center?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Experience the difference of working with a dedicated educator who truly cares about your success
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-orange-400 via-purple-500 to-blue-500 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card3D key={index} feature={feature} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};