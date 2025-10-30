"use client";

import { Card } from "@/components/ui/card";
import { FileCheck, Trophy, GraduationCap, BookOpen, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export const Programs = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const programs = [
    {
      id: "state-test",
      icon: FileCheck,
      title: "State Test Mastery",
      subtitle: "Topic-by-Topic Excellence",
      description: "I take a systematic, no-cramming approach to State Tests for both Math and ELA. For Math, I give the concept, logic and formulas first , understand the logic behind them, and then drill actual test questions until they're second nature and then rest of the stuffs is homework.  For ELA, we break down reading strategies and deconstruct exactly what makes a high-scoring written answer. My method is simple: we build a strong foundation and practice every topic until it's perfected, so you walk in with total confidence.",
      color: "from-cyan-500 via-blue-500 to-indigo-600",
      shadow: "shadow-cyan-500/50",
      iconBg: "bg-gradient-to-br from-cyan-400 to-blue-600"
    },
    {
      id: "shsat",
      icon: Trophy,
      title: "SHSAT Prep",
      subtitle: "Competitive Excellence",
      description: "The SHSAT is an elimination exam that demands absolute dedication from both student and teacher. This exam has 2 modules (Math + ELA), each with 2 parts. I teach the complete curriculum, extensive time management strategies, exam circumstances handling, and the smart approach: easy questions first, then tackle the harder ones. I strictly follow the SHSAT handbook because the administration consistently uses similar question patterns. Formula mastery → Logic building → Examples → In-class practice → Practice test homework. Alignment and commitment = Success.",
      color: "from-purple-500 via-fuchsia-500 to-pink-600",
      shadow: "shadow-purple-500/50",
      iconBg: "bg-gradient-to-br from-purple-400 to-pink-600"
    },
    {
      id: "sat",
      icon: GraduationCap,
      title: "SAT Preparation",
      subtitle: "Your Gateway to Top Colleges",
      description: "My SAT Preparation service is your complete gateway to top colleges, as a high score opens critical doors to selective schools, scholarships, and optimal course placement. I provide comprehensive, one-on-one coaching for both the digital Reading/Writing and the adaptive Math sections. We deconstruct the test using a proven, systematic 5-step math method: first, we achieve formula mastery so you know them cold; next, we focus on logic building to understand how the test-makers think; then, we walk through in-depth examples to spot common traps. This is followed by in-class practice where I correct mistakes in real-time, and it's finalized with practice test homework using the best resources, including official College Board tests and rigorous material from Barron's, The Princeton Review, and Khan Academy. We apply this same systematic rigor to the Reading/Writing section, mastering grammar and critical reading strategies. But my support doesn't end with the test; I am your partner for the entire application journey. I provide expert guidance on navigating the Common App, crafting a compelling personal essay, and strategically prioritizing your extracurricular activities to build a powerful narrative for admissions officers.",
      color: "from-emerald-500 via-green-500 to-teal-600",
      shadow: "shadow-green-500/50",
      iconBg: "bg-gradient-to-br from-emerald-400 to-teal-600"
    },
    {
      id: "regents",
      icon: BookOpen,
      title: "Regents Exams",
      subtitle: "Your Academic Transcript Matters",
      description: "These are the scores every college will see. I cover all key subjects: Algebra 1, Algebra 2, Geometry, ELA, Chemistry, Physics, Living Environment, and Earth Science. My proven 5-step method builds mastery: we master core concepts, build logic, and walk through examples. But my top priority is practice. We do lots of Regents packet practice together in class, and you master it all with targeted homework using real, past Regents exams. We don't just pass - we excel.",
      color: "from-orange-500 via-amber-500 to-yellow-600",
      shadow: "shadow-orange-500/50",
      iconBg: "bg-gradient-to-br from-orange-400 to-yellow-600"
    },
    {
      id: "ap",
      icon: Sparkles,
      title: "Advanced Placement",
      subtitle: "College-Level Excellence",
      description: "Challenge yourself with college-level coursework. Master complex concepts through structured learning: comprehensive concept building → formula mastery → strategic problem-solving → intensive practice → challenging homework assignments. Elevate your academic profile.",
      color: "from-rose-500 via-pink-500 to-red-600",
      shadow: "shadow-rose-500/50",
      iconBg: "bg-gradient-to-br from-rose-400 to-red-600"
    }
  ];

  const ProgramCard = ({ program, index }: { program: any; index: number }) => {
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

      const rotateXValue = (mouseY / rect.height) * -12;
      const rotateYValue = (mouseX / rect.width) * 12;

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
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.03, z: 50 }}
        className="h-full"
      >
        <Card 
          id={program.id}
          className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-white/20 cursor-pointer bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl h-full"
        >
          {/* Glassmorphism background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md"></div>

          {/* Vibrant gradient background on hover */}
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-90 transition-opacity duration-700`}
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
          <div className={`absolute -inset-1 bg-gradient-to-r ${program.color} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-700 ${program.shadow}`}></div>
          
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
            {[...Array(4)].map((_, i) => (
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
            className="relative p-8 space-y-4 transition-colors duration-500"
            style={{ transform: "translateZ(50px)" }}
          >
            {/* Icon with enhanced animation */}
            <motion.div 
              className={`w-16 h-16 ${program.iconBg} rounded-2xl flex items-center justify-center shadow-2xl relative`}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, 0],
                transition: { duration: 0.5 }
              }}
              style={{ transform: "translateZ(75px)" }}
            >
              <program.icon className="w-8 h-8 text-white" />
              <div className={`absolute inset-0 ${program.iconBg} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </motion.div>

            {/* Title */}
            <div style={{ transform: "translateZ(50px)" }}>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-white mb-1 transition-colors duration-500 drop-shadow-lg">
                {program.title}
              </h3>
              <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 group-hover:text-white/90 transition-colors duration-500 drop-shadow-md">
                {program.subtitle}
              </p>
            </div>

            {/* Description */}
            <p 
              className="text-slate-700 dark:text-slate-200 group-hover:text-white/90 leading-relaxed transition-colors duration-500 font-medium drop-shadow-md"
              style={{ transform: "translateZ(40px)" }}
            >
              {program.description}
            </p>

            {/* Hover indicator with arrow animation */}
            <motion.div 
              className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
              style={{ transform: "translateZ(40px)" }}
              initial={{ y: 8 }}
              whileHover={{ x: 8 }}
            >
              <span className="text-sm font-semibold">Learn more</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          </div>

          {/* Decorative corner accent */}
          <motion.div 
            className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
            animate={{
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${program.color} rounded-bl-full`}></div>
          </motion.div>

          {/* Bottom accent line */}
          <motion.div
            className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${program.color}`}
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
      id="programs" 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight"
              animate={{
                textShadow: [
                  "0 0 20px rgba(6, 182, 212, 0.5)",
                  "0 0 40px rgba(6, 182, 212, 0.8)",
                  "0 0 20px rgba(6, 182, 212, 0.5)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Our Programs
            </motion.h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-6">
              Comprehensive tutoring programs designed for every academic goal
            </p>
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            style={{ y: parallaxY }}
          >
            {programs.map((program, index) => (
              <ProgramCard key={index} program={program} index={index} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};