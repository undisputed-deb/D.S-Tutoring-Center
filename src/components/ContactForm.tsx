"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send, User, Mail, School, BookOpen, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { supabase, type ContactSubmission } from "@/lib/supabase";

export const ContactForm = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState<Omit<ContactSubmission, 'id' | 'created_at'>>({
    name: "",
    email: "",
    phone: "",
    grade: "",
    school: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { data, error: supabaseError } = await supabase
        .from('contact_submissions')
        .insert([formData])
        .select();

      if (supabaseError) {
        throw supabaseError;
      }

      // Success!
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        grade: "",
        school: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
      
      console.log("Form submitted successfully:", data);
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Something went wrong. Please try again or contact me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const grades = [
    "5th Grade", "6th Grade", "7th Grade", "8th Grade",
    "9th Grade", "10th Grade", "11th Grade", "12th Grade"
  ];

  const subjects = [
    "State Test Prep",
    "SHSAT Preparation",
    "SAT Tutoring",
    "Regents Exams",
    "AP Courses",
    "General Inquiry"
  ];

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
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
              Get Started Today
            </motion.h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Fill out the form below and I'll get back to you within 24 hours
            </p>
            <motion.div 
              className="w-32 h-1.5 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 mx-auto mt-8 rounded-full"
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
                background: "linear-gradient(45deg, #a855f7, #ec4899, #f97316, #3b82f6)",
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
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-20 blur-3xl"></div>

            <Card className="relative p-8 sm:p-12 shadow-2xl border-0 bg-transparent">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: 3,
                    }}
                  >
                    <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-4">Thank You!</h3>
                  <p className="text-xl text-white/80">
                    I've received your message and will get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 flex items-center gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <p className="text-red-200 text-sm">{error}</p>
                    </motion.div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <label className="block text-white font-semibold mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Student Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="Enter student's name"
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <label className="block text-white font-semibold mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <label className="block text-white font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="(123) 456-7890"
                      />
                    </motion.div>

                    {/* Grade */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <label className="block text-white font-semibold mb-2">
                        <BookOpen className="w-4 h-4 inline mr-2" />
                        Grade *
                      </label>
                      <select
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      >
                        <option value="" className="bg-slate-900">Select grade</option>
                        {grades.map((grade) => (
                          <option key={grade} value={grade} className="bg-slate-900">{grade}</option>
                        ))}
                      </select>
                    </motion.div>

                    {/* School */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <label className="block text-white font-semibold mb-2">
                        <School className="w-4 h-4 inline mr-2" />
                        School Name
                      </label>
                      <input
                        type="text"
                        name="school"
                        value={formData.school}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="Enter school name"
                      />
                    </motion.div>

                    {/* Subject */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <label className="block text-white font-semibold mb-2">
                        Subject of Interest *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      >
                        <option value="" className="bg-slate-900">Select subject</option>
                        {subjects.map((subject) => (
                          <option key={subject} value={subject} className="bg-slate-900">{subject}</option>
                        ))}
                      </select>
                    </motion.div>
                  </div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <label className="block text-white font-semibold mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Additional Questions or Comments
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your learning goals, challenges, or any specific questions..."
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center"
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="w-5 h-5" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </motion.div>
                  </motion.div>
                </form>
              )}
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-white/70 mb-4">Or reach out directly:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:9173126589"
                className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                📞 917-312-6589
              </motion.a>
              <span className="hidden sm:inline text-white/40">•</span>
              <motion.a
                href="mailto:debashrestha222@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                📧 debashrestha222@gmail.com
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};