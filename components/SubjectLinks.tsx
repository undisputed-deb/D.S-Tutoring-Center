"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const subjects = [
  {
    title: "Math Tutor NYC",
    description: "Algebra, Geometry, Calculus & more",
    href: "/math-tutor-nyc",
    gradient: "electric",
  },
  {
    title: "SAT Tutor NYC",
    description: "Expert SAT Math & Reading prep",
    href: "/sat-tutor-nyc",
    gradient: "neon",
  },
  {
    title: "SHSAT Prep NYC",
    description: "Get into specialized high schools",
    href: "/shsat-prep-tutor-nyc",
    gradient: "fire",
  },
  {
    title: "Science Tutor NYC",
    description: "Chemistry, Physics, Biology",
    href: "/science-tutor-nyc",
    gradient: "purple",
  },
  {
    title: "Regents Tutoring NYC",
    description: "All NY Regents exam prep",
    href: "/regents-tutoring-nyc",
    gradient: "electric",
  },
];

export default function SubjectLinks() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black mb-4">
          EXPLORE OUR TUTORING SERVICES
        </h2>
        <p className="text-white/70 text-lg">
          Click below to learn more about each subject
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject, index) => (
          <motion.div
            key={subject.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={subject.href}
              className="block group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-all duration-300 hover:border-white/30"
            >
              <h3 className={`text-xl font-bold mb-2 text-gradient-${subject.gradient} group-hover:scale-105 transition-transform`}>
                {subject.title}
              </h3>
              <p className="text-white/70 text-sm">{subject.description}</p>
              <div className="mt-4 text-white/50 text-sm group-hover:text-white/80 transition-colors">
                Learn more →
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
