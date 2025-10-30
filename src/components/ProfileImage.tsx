"use client";

import debProfile from "@/assets/deb-profile.jpg";
import { motion } from "framer-motion";

export const ProfileImage = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative group">
            {/* Animated border */}
            <motion.div 
              className="absolute -inset-2 rounded-full blur-lg"
              style={{
                background: "linear-gradient(45deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899)",
                backgroundSize: "300% 300%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                scale: [1, 1.05, 1],
              }}
              transition={{
                backgroundPosition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
            
            {/* Image container with 3D effect */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.5 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <img
                src={debProfile}
                alt="Deb - Professional Tutor at D.S Tutoring Center"
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover shadow-2xl border-4 border-white/20 backdrop-blur-xl"
                style={{ transform: "translateZ(50px)" }}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
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
              />
            </motion.div>

            {/* Floating particles around image */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: `${50 + 45 * Math.cos((i / 8) * 2 * Math.PI)}%`,
                  top: `${50 + 45 * Math.sin((i / 8) * 2 * Math.PI)}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};