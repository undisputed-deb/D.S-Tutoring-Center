"use client";

import { Check, BookOpenCheck, Target, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export const TeachingPhilosophy = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const steps = [
    {
      icon: BookOpenCheck,
      title: "Master the Fundamentals",
      description: "Master all concepts, basics, logic, and formulas with deep understanding",
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      iconBg: "bg-gradient-to-br from-cyan-400 to-indigo-600",
      shadow: "shadow-cyan-500/50"
    },
    {
      icon: Target,
      title: "Practice Together",
      description: "Work through practice problems together in class with guided support",
      gradient: "from-orange-400 via-red-500 to-pink-600",
      iconBg: "bg-gradient-to-br from-orange-400 to-pink-600",
      shadow: "shadow-orange-500/50"
    },
    {
      icon: TrendingUp,
      title: "Reinforce & Excel",
      description: "Reinforce learning with targeted homework assignments for mastery",
      gradient: "from-emerald-400 via-green-500 to-teal-600",
      iconBg: "bg-gradient-to-br from-emerald-400 to-teal-600",
      shadow: "shadow-emerald-500/50"
    }
  ];

  const StepCard = ({ step, index }: { step: any; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

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
    };

    const handleMouseLeave = () => {
      setRotateX(0);
      setRotateY(0);
    };

    return (
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        whileHover={{ scale: 1.05, z: 50 }}
        className="h-full"
      >
        <Card className="group relative p-8 bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl hover:shadow-2xl transition-all duration-500 border-2 border-white/20 hover:border-transparent overflow-hidden h-full">
          
          {/* Glassmorphism background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md"></div>
          
          {/* Gradient overlay on hover */}
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-700`}
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
          
          {/* Glow effect */}
          <div className={`absolute -inset-1 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-700 ${step.shadow}`}></div>
          
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
            {[...Array(3)].map((_, i) => (
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
          
          <div 
            className="relative text-center space-y-4 transition-colors duration-500"
            style={{ transform: "translateZ(50px)" }}
          >
            <motion.div 
              className={`w-16 h-16 ${step.iconBg} rounded-2xl flex items-center justify-center mx-auto shadow-2xl relative`}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, 0],
                transition: { duration: 0.5 }
              }}
              style={{ transform: "translateZ(75px)" }}
            >
              <step.icon className="w-8 h-8 text-white" />
              <div className={`absolute inset-0 ${step.iconBg} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </motion.div>
            
            <motion.div 
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-400 group-hover:from-white group-hover:to-white text-white group-hover:text-slate-900 font-black text-xl shadow-lg transform group-hover:scale-110 transition-all duration-500"
              style={{ transform: "translateZ(60px)" }}
            >
              {index + 1}
            </motion.div>
            
            <h3 
              className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-white transition-colors duration-500 drop-shadow-lg"
              style={{ transform: "translateZ(50px)" }}
            >
              {step.title}
            </h3>
            
            <p 
              className="text-slate-700 dark:text-slate-200 group-hover:text-white transition-colors duration-500 drop-shadow-md font-medium"
              style={{ transform: "translateZ(40px)" }}
            >
              {step.description}
            </p>
          </div>

          {/* Decorative corner */}
          <motion.div 
            className="absolute bottom-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
            animate={{
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className={`absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr ${step.gradient} rounded-tr-full`}></div>
          </motion.div>

          {/* Bottom accent line */}
          <motion.div
            className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${step.gradient}`}
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
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
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
        <div className="max-w-6xl mx-auto">
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
                  "0 0 20px rgba(99, 102, 241, 0.5)",
                  "0 0 40px rgba(99, 102, 241, 0.8)",
                  "0 0 20px rgba(99, 102, 241, 0.5)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Teaching Philosophy
            </motion.h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-6">
              A proven three-step approach that transforms students into confident learners
            </p>
            <motion.div 
              className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full"
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
            className="grid md:grid-cols-3 gap-8 mb-16"
            style={{ y: parallaxY }}
          >
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899)",
                backgroundSize: "300% 300%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            ></motion.div>

            <Card className="relative bg-transparent text-white p-10 sm:p-12 shadow-2xl border-0 backdrop-blur-sm">
              {/* Animated background elements */}
              <div className="absolute inset-0 opacity-20 overflow-hidden">
                <motion.div 
                  className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"
                  animate={{
                    y: [-20, 20, -20],
                    x: [-10, 10, -10],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300 rounded-full blur-3xl"
                  animate={{
                    y: [20, -20, 20],
                    x: [10, -10, 10],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              
              <div className="relative max-w-3xl mx-auto space-y-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <motion.div 
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Check className="w-7 h-7" />
                  </motion.div>
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