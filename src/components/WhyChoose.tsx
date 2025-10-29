"use client";

import { Target, TrendingUp, Users, Clock, Award, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const WhyChoose = () => {
  const features = [
    {
      icon: Award,
      title: "Proven Teaching Methods",
      description: "Systematic approach that builds mastery through formula mastery, logic, and practice",
      gradient: "from-amber-400 via-yellow-500 to-orange-500",
      iconBg: "bg-gradient-to-br from-amber-400 to-orange-500",
      shadow: "shadow-amber-500/50"
    },
    {
      icon: TrendingUp,
      title: "2.5 Years Experience",
      description: "Previously tutored at Bobby Tariq Tutoring Center with a track record of success",
      gradient: "from-emerald-400 via-teal-500 to-cyan-500",
      iconBg: "bg-gradient-to-br from-emerald-400 to-cyan-500",
      shadow: "shadow-emerald-500/50"
    },
    {
      icon: Users,
      title: "Personalized Approach",
      description: "I adapt my teaching style to fit every student's unique learning needs",
      gradient: "from-purple-400 via-violet-500 to-fuchsia-500",
      iconBg: "bg-gradient-to-br from-purple-400 to-fuchsia-500",
      shadow: "shadow-purple-500/50"
    },
    {
      icon: Zap,
      title: "120% Commitment",
      description: "I give my absolute best to ensure every student achieves their academic goals",
      gradient: "from-rose-400 via-pink-500 to-red-500",
      iconBg: "bg-gradient-to-br from-rose-400 to-red-500",
      shadow: "shadow-rose-500/50"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Monthly progress assessments tailored to each student's schedule",
      gradient: "from-blue-400 via-indigo-500 to-purple-500",
      iconBg: "bg-gradient-to-br from-blue-400 to-purple-500",
      shadow: "shadow-blue-500/50"
    },
    {
      icon: Target,
      title: "Results-Driven Strategies",
      description: "Homework and school quizzes are my TOP priority for immediate impact",
      gradient: "from-lime-400 via-green-500 to-emerald-500",
      iconBg: "bg-gradient-to-br from-lime-400 to-emerald-500",
      shadow: "shadow-lime-500/50"
    },
  ];

  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section 
      id="why-choose"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl sm:text-6xl font-black text-foreground mb-4">
            Why Choose D.S Tutoring Center?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference of working with a dedicated educator who truly cares about your success
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ y: parallaxY }}
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="h-full"
            >
              <Card className="group relative overflow-hidden border-2 border-slate-200 dark:border-slate-700 hover:border-transparent transition-all duration-500 bg-white dark:bg-slate-800 h-full hover:shadow-2xl">
                
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 ${feature.shadow}`}></div>
                
                <CardContent className="relative p-8 group-hover:text-white transition-colors duration-500">
                  <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-4 shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-white mb-2 transition-colors duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-white/90 transition-colors duration-500">
                    {feature.description}
                  </p>
                </CardContent>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${feature.gradient} rounded-bl-full`}></div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};