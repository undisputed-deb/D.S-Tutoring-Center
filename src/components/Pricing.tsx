"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Phone, Mail, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Pricing = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const features = [
    { icon: CheckCircle2, text: "One-on-One Sessions" },
    { icon: CheckCircle2, text: "Group Classes" },
    { icon: CheckCircle2, text: "Package Deals" }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
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
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border-2 border-orange-400/30"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <DollarSign className="w-5 h-5 text-orange-400" />
              </motion.div>
              <span className="text-orange-300 font-semibold">Flexible Pricing</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6"
              animate={{
                textShadow: [
                  "0 0 20px rgba(16, 185, 129, 0.5)",
                  "0 0 40px rgba(16, 185, 129, 0.8)",
                  "0 0 20px rgba(16, 185, 129, 0.5)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Invest In Your Child's Future
            </motion.h2>
            <p className="text-xl text-white/80">
              Personalized packages tailored to your needs
            </p>
            <motion.div 
              className="w-32 h-1.5 bg-gradient-to-r from-emerald-400 to-orange-400 mx-auto mt-6 rounded-full"
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
            style={{ y: parallaxY }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Animated gradient border */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: "linear-gradient(45deg, #10b981, #f59e0b, #ec4899, #3b82f6)",
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
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-orange-500 to-pink-500 opacity-20 blur-3xl"></div>

            <Card className="relative p-10 sm:p-14 shadow-2xl border-0 bg-transparent">
              <div className="text-center space-y-8">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    Custom Tutoring Plans
                  </h3>
                  <p className="text-lg text-white/80 max-w-2xl mx-auto">
                    Every student is unique, and so are their learning needs. I offer flexible pricing options that fit your schedule and budget.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 py-8">
                  {features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex flex-col items-center gap-3 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-emerald-400/50 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <feature.icon className="w-10 h-10 text-emerald-400" />
                      </motion.div>
                      <p className="font-semibold text-white">{feature.text}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  className="bg-white/5 backdrop-blur-md rounded-xl p-8 space-y-6 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h4 className="text-2xl font-bold text-white">
                    Get Your Personalized Quote
                  </h4>
                  
                  <p className="text-white/70">
                    Contact me directly to discuss your child's needs and receive a customized pricing plan
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        size="lg"
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold px-8 py-6 text-lg rounded-full shadow-lg"
                        asChild
                      >
                        <a href="tel:9173126589" className="inline-flex items-center gap-2">
                          <Phone className="w-5 h-5" />
                          917-312-6589
                        </a>
                      </Button>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        size="lg"
                        className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold px-8 py-6 text-lg rounded-full shadow-lg"
                        asChild
                      >
                        <a href="mailto:debashrestha222@gmail.com" className="inline-flex items-center gap-2">
                          <Mail className="w-5 h-5" />
                          Email Me
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>

                <div className="text-sm text-white/60 pt-4">
                  <p className="italic">
                    "I work with families to create payment plans that work for everyone. Your child's education shouldn't be limited by budget constraints."
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};