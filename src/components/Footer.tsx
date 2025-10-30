"use client";

import { BookOpen, Phone, Mail, MapPin, Heart } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            y: [-50, 50, -50],
            x: [-30, 30, -30],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            y: [50, -50, 50],
            x: [30, -30, 30],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Brand */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <BookOpen className="w-8 h-8 text-cyan-400" />
                </motion.div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  D.S Tutoring Center
                </span>
              </div>
              <p className="text-white/70 leading-relaxed">
                Excellence in education through personalized tutoring and proven results.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-white">Programs</h3>
              <ul className="space-y-2 text-white/70">
                {["State Test Prep", "SHSAT Preparation", "SAT Tutoring", "Regents Exams", "AP Courses"].map((item, i) => (
                  <motion.li 
                    key={i}
                    className="hover:text-cyan-400 transition-colors cursor-pointer hover:translate-x-2 duration-300"
                    whileHover={{ x: 8 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-white">Contact</h3>
              <div className="space-y-3">
                <motion.a 
                  href="tel:9173126589" 
                  className="flex items-center gap-3 text-white/70 hover:text-cyan-400 transition-colors group"
                  whileHover={{ x: 8 }}
                >
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>917-312-6589</span>
                </motion.a>
                
                <motion.a 
                  href="mailto:debashrestha222@gmail.com" 
                  className="flex items-center gap-3 text-white/70 hover:text-cyan-400 transition-colors group"
                  whileHover={{ x: 8 }}
                >
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>debashrestha222@gmail.com</span>
                </motion.a>
                
                <div className="flex items-center gap-3 text-white/70">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>New York, NY</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            className="border-t border-white/10 pt-8 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-white/60 text-sm">
              <p>© {new Date().getFullYear()} D.S Tutoring Center. All rights reserved.</p>
              <p className="flex items-center gap-2">
                Built with excellence and dedication to student success
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
                  <Heart className="w-4 h-4 text-pink-400 fill-current" />
                </motion.div>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};