"use client";

import { Card } from "@/components/ui/card";
import { Heart, Ear, Users2, Zap, TrendingUp } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export const Commitment = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
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

  const CommitmentCard = ({ item, index }: { item: any; index: number }) => {
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
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.05, z: 30 }}
        className="h-full"
      >
        <Card className="group relative p-6 bg-white/10 backdrop-blur-xl hover:shadow-2xl transition-all duration-500 border-2 border-white/20 hover:border-transparent overflow-hidden h-full">
          
          {/* Glassmorphism background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md"></div>

          {/* Gradient overlay on hover */}
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-700`}
          ></motion.div>

          {/* Glow effect */}
          <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700`}></div>

          <div className="relative flex items-start gap-4" style={{ transform: "translateZ(30px)" }}>
            <motion.div 
              className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg`}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              style={{ transform: "translateZ(50px)" }}
            >
              <item.icon className="w-6 h-6 text-white" />
            </motion.div>
            <p className="text-slate-900 dark:text-white group-hover:text-white leading-relaxed pt-2 font-medium drop-shadow-md transition-colors duration-500">
              {item.text}
            </p>
          </div>
        </Card>
      </motion.div>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
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
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <motion.div 
                className="flex items-center gap-3 bg-pink-500/20 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-pink-400/30"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Heart className="w-6 h-6 text-pink-400" />
                </motion.div>
                <span className="text-pink-300 font-semibold">My Commitment</span>
              </motion.div>
            </div>
            
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
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
              Try Just 1-2 Classes -<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">You'll See Why I'm The Best Choice</span>
            </motion.h2>
            
            <p className="text-xl text-white/80">
              For Your Child's Success
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-6 mb-12"
            style={{ y: parallaxY }}
          >
            {commitments.map((item, index) => (
              <CommitmentCard key={index} item={item} index={index} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: "linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6)",
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
              <div className="absolute inset-[2px] rounded-3xl bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600"></div>
            </motion.div>

            <Card className="relative bg-transparent text-white p-10 sm:p-12 text-center shadow-2xl border-0">
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