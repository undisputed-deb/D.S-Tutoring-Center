"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.1, ease: "easeOut", duration: 0.6 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.5 } },
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const floatY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      id="home"
      className="relative noise overflow-hidden"
      aria-label="D.S Tutoring Center Hero"
      ref={containerRef}
    >
      {/* Background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
        {/* Color wash accents */}
        <div className="absolute -top-32 -right-40 h-[60vmin] w-[60vmin] blob blob-electric opacity-30"></div>
        <div className="absolute -bottom-32 -left-40 h-[55vmin] w-[55vmin] blob blob-purple opacity-20"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 pt-28 md:pt-32 pb-12 md:pb-20">
        <div className="grid grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left 60% */}
          <motion.div
            className="col-span-12 md:col-span-7 lg:col-span-7"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <motion.div variants={item} className="mb-6 text-sm tracking-[0.2em] text-white/60">
              D.S TUTORING CENTER
            </motion.div>

            {/* Massive stacked title */}
            <div className="leading-[0.9]">
              <motion.h1
                variants={item}
                className="font-black text-balance"
                style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
              >
                <span className="block">D.S</span>
                <span className="block">TUTORING</span>
                <span className="block text-outline">CENTER</span>
              </motion.h1>
            </div>

            <motion.h2
              variants={item}
              className="mt-6 text-2xl md:text-3xl font-bold text-gradient-electric"
            >
              Math, State Test, Regents, SAT & SHSAT Tutor NYC
            </motion.h2>

            <motion.p
              variants={item}
              className="mt-4 max-w-xl text-balance text-white/70"
              style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.6 }}
            >
              D.S Tutoring Center - Premier NYC tutoring with 95% success rate. Expert tutoring for Math, State Tests, SAT, SHSAT, Science (Chemistry, Physics, Biology), and all Regents exams. Free trial available.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <a
                href="#contact"
                className="btn btn-primary-gradient btn-lg"
                aria-label="Book a free trial"
              >
                BOOK FREE TRIAL
              </a>
              <a
                href="#programs"
                className="btn btn-outline btn-lg"
                aria-label="Explore programs"
              >
                EXPLORE PROGRAMS
              </a>
              <a
                href="#testimonials"
                className="btn btn-outline btn-lg"
                aria-label="Read reviews"
              >
                REVIEWS
              </a>
              <a
                href="/blog"
                className="btn btn-outline btn-lg"
                aria-label="Read our blog"
              >
                BLOG
              </a>
            </motion.div>

            {/* Location bottom-left of left column */}
            <motion.div
              variants={item}
              className="mt-10 text-xs font-medium tracking-[0.2em] text-white/60"
            >
              📍 NEW YORK CITY
            </motion.div>
          </motion.div>

          {/* Right 40%: Animated gradient blob / 3D-like element */}
          <div className="col-span-12 md:col-span-5 lg:col-span-5 relative min-h-[40vh] md:min-h-[60vh]">
            <motion.div
              className="absolute inset-0 flex items-center justify-center overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              style={{ y: floatY }}
            >
              {/* Vertical flow lines (top-to-bottom), water-like */}
              <div className="relative h-full w-full max-w-[560px] rounded-[28px] border border-white/10 bg-white/[0.02] backdrop-blur-md">
                {/* flowing columns */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-0 h-1/2"
                    style={{
                      left: `${6 + i * 12}%`,
                      width: "3px",
                      borderRadius: "9999px",
                      background:
                        i % 2 === 0
                          ? "linear-gradient(to bottom, rgba(0,217,255,0.8), rgba(0,102,255,0.0))"
                          : "linear-gradient(to bottom, rgba(178,75,243,0.8), rgba(255,0,110,0.0))",
                      filter: "blur(0.5px)",
                    }}
                    initial={{ y: "-120%" }}
                    animate={{ y: "120%" }}
                    transition={{
                      duration: 6 + (i % 3),
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.2,
                    }}
                  />
                ))}

                {/* soft glow core */}
                <motion.div
                  className="absolute inset-0 rounded-[28px]"
                  style={{
                    boxShadow:
                      "inset 0 0 120px rgba(0,0,0,0.5), 0 0 60px rgba(0, 102, 255, 0.15)",
                  }}
                  animate={{ opacity: [0.6, 0.8, 0.6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* accent blobs for color depth */}
                <motion.div
                  className="absolute -top-24 -right-24 h-[50vmin] w-[50vmin] blob blob-electric opacity-30"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-24 -left-24 h-[45vmin] w-[45vmin] blob blob-purple opacity-20 mix-blend-screen"
                  animate={{ rotate: [0, -12, 0] }}
                  transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom divider subtle line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
}
