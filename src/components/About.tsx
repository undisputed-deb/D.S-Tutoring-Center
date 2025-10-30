"use client";

import { GraduationCap, Award, Users, Sparkles, Zap, BookOpen } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export const About = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateXValue = (mouseY / rect.height) * -10;
    const rotateYValue = (mouseX / rect.width) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
        <div className="max-w-5xl mx-auto">
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
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 40px rgba(59, 130, 246, 0.8)",
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto rounded-full"
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
            ref={cardRef}
            style={{ 
              y: parallaxY,
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden group perspective-1000"
          >
            {/* Glassmorphism background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl"></div>

            {/* Animated gradient border */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: "linear-gradient(45deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899)",
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
            >
              <div className="absolute inset-[2px] rounded-3xl bg-slate-900/95 backdrop-blur-xl"></div>
            </motion.div>

            {/* Glowing aura */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700"></div>

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
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

            {/* Decorative orbs */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

            <div className="relative p-8 sm:p-12" style={{ transform: "translateZ(50px)" }}>
              <div className="flex flex-col gap-8">
                {/* Header with icon */}
                <motion.div 
                  className="flex items-center gap-4 mb-2"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 }
                    }}
                    style={{ transform: "translateZ(75px)" }}
                  >
                    <GraduationCap className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-4xl font-black text-white flex items-center gap-2">
                      Meet Deb
                      <motion.div
                        animate={{
                          rotate: [0, 15, -15, 0],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Sparkles className="w-7 h-7 text-yellow-400" />
                      </motion.div>
                    </h3>
                    <p className="text-lg text-cyan-300 font-semibold">Your Dedicated Tutor</p>
                  </div>
                </motion.div>

                <motion.p 
                  className="text-lg text-white/90 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{ transform: "translateZ(40px)" }}
                >
                  I'm a <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Software Engineer at Mutual of Omaha</span> with over <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">2.5+ years of tutoring excellence</span>. Previously, I honed my teaching skills at Bobby Tariq Tutoring Center, and currently I'm teaching{" "}
                  <span className="relative inline-block">
                    <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-2xl">80+ students</span>
                    <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></span>
                  </span>{" "}
                  across all subjects, where I developed a proven methodology for student success.
                </motion.p>

                {/* Info cards */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    className="group/card relative overflow-hidden rounded-2xl p-6 backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-orange-400/50 transition-all duration-500"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-pink-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative flex items-start gap-3">
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Award className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-white mb-2 text-lg">Teaching Expertise</h4>
                        <p className="text-sm text-white/70 font-medium">
                          Grades 5-8 • State Tests • SHSAT • SAT (Math + ELA)
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="group/card relative overflow-hidden rounded-2xl p-6 backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-emerald-400/50 transition-all duration-500"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative flex items-start gap-3">
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Users className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-white mb-2 text-lg">Regents Subjects</h4>
                        <p className="text-sm text-white/70 font-medium">
                          Algebra 1 & 2 • Geometry • ELA • Chemistry • Physics • Living Environment • Social Studies • Earth Science
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Quote box */}
                <motion.div
                  className="relative overflow-hidden rounded-2xl p-1"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  style={{ transform: "translateZ(40px)" }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899)",
                      backgroundSize: "300% 300%",
                    }}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  ></motion.div>
                  
                  <div className="relative bg-slate-900 rounded-2xl p-6 backdrop-blur-xl">
                    <BookOpen className="w-8 h-8 text-cyan-400 mb-3" />
                    <p className="text-lg text-white font-semibold italic leading-relaxed">
                      "Homework and school quizzes are my{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-black">TOP priority</span>. With extensive experience and a proven track record, I don't just teach - I{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-black">transform students into confident learners</span>."
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Corner decoration */}
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 opacity-20"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-cyan-400 to-purple-500 rounded-bl-full blur-xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};