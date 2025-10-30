"use client";

import { Target, TrendingUp, Users, Clock, Award, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";

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
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
  };

  // 3D Card Component with mouse tracking
  const Card3D = ({ feature, index }: { feature: any; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const springConfig = { stiffness: 300, damping: 30 };
    const x = useSpring(useMotionValue(0), springConfig);
    const y = useSpring(useMotionValue(0), springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const rotateXValue = (mouseY / rect.height) * -15;
      const rotateYValue = (mouseX / rect.width) * 15;

      setRotateX(rotateXValue);
      setRotateY(rotateYValue);
      x.set(mouseX * 0.1);
      y.set(mouseY * 0.1);
    };

    const handleMouseLeave = () => {
      setRotateX(0);
      setRotateY(0);
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        ref={cardRef}
        variants={cardVariants}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.05, z: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-full perspective-1000"
      >
        <Card className="group relative overflow-hidden border-2 border-white/20 dark:border-slate-700/30 hover:border-transparent transition-all duration-500 h-full backdrop-blur-xl bg-white/10 dark:bg-slate-800/10 hover:shadow-2xl">
          
          {/* Glassmorphism background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/5 dark:from-slate-800/30 dark:to-slate-900/5 backdrop-blur-md"></div>
          
          {/* Animated gradient overlay */}
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-700`}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          ></motion.div>
          
          {/* Glowing border effect */}
          <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-700 ${feature.shadow}`}></div>
          
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
            }}
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 1,
            }}
          ></motion.div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, -100],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
          
          <CardContent 
            className="relative p-8 transition-colors duration-500"
            style={{
              transform: "translateZ(50px)",
            }}
          >
            {/* Icon with 3D effect */}
            <motion.div 
              className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-2xl relative`}
              style={{
                transform: "translateZ(75px)",
              }}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 }
              }}
            >
              <feature.icon className="w-8 h-8 text-white" />
              
              {/* Icon glow */}
              <div className={`absolute inset-0 ${feature.iconBg} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </motion.div>
            
            <h3 
              className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-white mb-3 transition-colors duration-500 drop-shadow-lg"
              style={{
                transform: "translateZ(50px)",
              }}
            >
              {feature.title}
            </h3>
            <p 
              className="text-slate-700 dark:text-slate-200 group-hover:text-white transition-colors duration-500 leading-relaxed drop-shadow-md font-medium"
              style={{
                transform: "translateZ(25px)",
              }}
            >
              {feature.description}
            </p>
          </CardContent>

          {/* Decorative corner with animation */}
          <motion.div 
            className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
            animate={{
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${feature.gradient} rounded-bl-full`}></div>
          </motion.div>

          {/* Bottom accent line */}
          <motion.div
            className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient}`}
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </Card>
      </motion.div>
    );
  };

  return (
    <section 
      id="why-choose"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [-20, 20, -20],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [20, -20, 20],
            y: [20, -20, 20],
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
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6"
            animate={{
              textShadow: [
                "0 0 20px rgba(168, 85, 247, 0.5)",
                "0 0 40px rgba(168, 85, 247, 0.8)",
                "0 0 20px rgba(168, 85, 247, 0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Why Choose D.S Tutoring Center?
          </motion.h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Experience the difference of working with a dedicated educator who truly cares about your success
          </p>
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-orange-400 via-purple-500 to-blue-500 mx-auto mt-8 rounded-full"
            animate={{
              scaleX: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
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
            <Card3D key={index} feature={feature} index={index} />
          ))}
        </motion.div>
      </motion.div>

      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
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
    </section>
  );
};