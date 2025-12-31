"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24"
      aria-label="About D.S Tutoring Center"
    >
      <div className="grid grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
        {/* Left: Deb portrait */}
        <div className="col-span-12 md:col-span-5 lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-[280px] w-[280px] md:h-[360px] md:w-[360px] lg:h-[400px] lg:w-[400px] overflow-hidden rounded-full border border-white/15">
              <Image
                src="/deb-profile.jpg"
                alt="Deb Shrestho — Founder"
                fill
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 360px, 400px"
                className="object-cover"
                priority={false}
              />
            </div>
            <div className="mt-4 text-center text-xs tracking-[0.2em] text-white/60">
              DEB SHRESTHO / FOUNDER
            </div>
          </motion.div>
        </div>

        {/* Right: Content */}
        <div className="col-span-12 md:col-span-7 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="text-xs tracking-[0.25em] text-white/60 mb-3">
              MEET YOUR TUTOR
            </div>
            <h2
              className="font-black text-balance leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
            >
              Transforming Students Into Confident Learners
            </h2>
            <div
              className="mt-5 space-y-4 text-white/80"
              style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.6 }}
            >
              <p>
                I am Deb Shrestho, Software Engineer at Mutual of Omaha and I give <span className="text-gradient-electric">120%</span> to every single student I work with. My journey in education stems from a genuine passion for helping young minds unlock their full potential. Previously, I honed my teaching skills at <span className="text-gradient-fire">Bobby Tariq Tutoring Center</span>, and currently I&apos;m teaching <span className="text-gradient-purple">80+ students</span> across all subjects, where I developed a proven methodology for student success.
              </p>
              <p>
                I always try to give my absolute best and make homework and quizzes the TOP priority. I don&apos;t just teach concepts. I ensure students master them through consistent practice and reinforcement. Every session is constructed to the individual student&apos;s learning style, pace, and goals.
              </p>
            </div>

            {/* Pull quote */}
            <div className="mt-8 md:mt-10 rounded-2xl border border-white/15 p-6 md:p-8">
              <blockquote className="font-serif text-2xl md:text-3xl leading-snug">
                "I give <span className="text-gradient-electric">120%</span> to every single student because your success is my success."
              </blockquote>
            </div>

            {/* Expertise lists */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white text-black p-6 shadow-sm">
                <div className="text-xs tracking-[0.2em] text-black/60">TEACHING EXPERTISE</div>
                <p className="mt-2 text-sm text-black/80">
                  Grades 5–8 • State Tests • SHSAT • SAT (Math + ELA)
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white text-black p-6 shadow-sm">
                <div className="text-xs tracking-[0.2em] text-black/60">REGENTS SUBJECTS</div>
                <p className="mt-2 text-sm text-black/80">
                  Algebra 1 &amp; 2 • Geometry • ELA • Chemistry • Physics • Living Environment • Social Studies • Earth Science
                </p>
              </div>
            </div>

            <p className="mt-6 text-white/80" style={{ lineHeight: 1.6 }}>
              My approach is simple but effective: master the fundamentals, practice relentlessly, and excel. With patience, dedication, and a personalized touch, I&apos;ve helped students not just pass exams but genuinely understand and love learning.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
