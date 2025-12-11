"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, DollarSign, Sparkles, NotebookPen, UserCheck } from "lucide-react";

const rows = [
  "120% COMMITMENT • HOMEWORK PRIORITY • PERSONALIZED APPROACH •",
  "Fun Teaching • FLEXIBLE SCHEDULING • AFFORDABLE RATES •",
];

const featureList = [
  { icon: CheckCircle, title: "Proven Results", text: "95% success rate." },
  { icon: Sparkles, title: "High Impact", text: "Fundamentals + deliberate practice." },
  { icon: NotebookPen, title: "Homework Priority", text: "Clarity and consistency for every task." },
  { icon: Clock, title: "Flexible Scheduling", text: "Evenings and weekends available." },
  { icon: DollarSign, title: "Affordable", text: "Competitive rates for families." },
  { icon: UserCheck, title: "Personalized", text: "Plans for each learner." },
];

export default function Features() {
  return (
    <section
      aria-label="Features"
      className="relative py-16 md:py-24"
    >
      {/* Marquee */}
      <div className="overflow-hidden">
        <div className="marquee marquee-left text-outline" style={{ fontSize: "clamp(2.2rem, 10vw, 6rem)" }}>
          <span className="px-4">{rows[0]}</span>
          <span className="px-4">{rows[0]}</span>
        </div>
        <div className="marquee marquee-right text-outline" style={{ fontSize: "clamp(2.2rem, 10vw, 6rem)" }}>
          <span className="px-4">{rows[1]}</span>
          <span className="px-4">{rows[1]}</span>
        </div>
      </div>

      {/* Features grid */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {featureList.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-white/15 bg-black p-6"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5">
                <f.icon size={24} className="text-white" />
              </div>
              <h5 className="mt-4 font-bold">{f.title}</h5>
              <p className="mt-2 text-white/70">{f.text}</p>
              <div className="mt-4 h-[2px] w-16 bg-white/10 group-hover:bg-gradient-electric transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
