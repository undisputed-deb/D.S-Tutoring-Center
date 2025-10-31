"use client";

import { BookOpen, Phone, Mail, MapPin, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { memo } from "react";

const QuickLink = memo(({ item, index }: { item: string; index: number }) => (
  <motion.li 
    key={index}
    className="hover:text-cyan-400 transition-colors cursor-pointer"
    whileHover={{ x: 8 }}
  >
    {item}
  </motion.li>
));

QuickLink.displayName = "QuickLink";

export const Footer = memo(() => {
  const programs = ["State Test Prep", "SHSAT Preparation", "SAT Tutoring", "Regents Exams", "AP Courses"];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 overflow-hidden">
      {/* Simplified animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-8 h-8 text-cyan-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  D.S Tutoring Center
                </span>
              </div>
              <p className="text-white/70 leading-relaxed">
                Excellence in education through personalized tutoring and proven results.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Programs</h3>
              <ul className="space-y-2 text-white/70">
                {programs.map((item, i) => (
                  <QuickLink key={i} item={item} index={i} />
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Contact</h3>
              <div className="space-y-3">
                <a 
                  href="tel:9173126589" 
                  className="flex items-center gap-3 text-white/70 hover:text-cyan-400 transition-colors"
                >
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>917-312-6589</span>
                </a>
                
                <a 
                  href="mailto:debashrestha222@gmail.com" 
                  className="flex items-center gap-3 text-white/70 hover:text-cyan-400 transition-colors"
                >
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>debashrestha222@gmail.com</span>
                </a>
                
                <div className="flex items-center gap-3 text-white/70">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>New York, NY</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 mt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-white/60 text-sm">
              <p>© {new Date().getFullYear()} D.S Tutoring Center. All rights reserved.</p>
              <p className="flex items-center gap-2">
                Built with excellence and dedication to student success
                <Heart className="w-4 h-4 text-pink-400 fill-current" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";