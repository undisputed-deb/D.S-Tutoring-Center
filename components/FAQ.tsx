"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

type QA = { q: string; a: string };

const faqs: QA[] = [
  { q: "What subjects do you teach?", a: "Math, ELA, and targeted prep for State Tests, SHSAT, SAT, Regents (Algebra, Geometry, Chemistry, Physics, ELA), and AP courses." },
  { q: "How much does it cost?", a: "Flexible tiers from $25–$60/hr depending on intensity and plan. We recommend Standard for most students." },
  { q: "Is there a free trial?", a: "Yes—try 1–2 free classes to experience our approach. No commitment needed." },
  { q: "What is your methodology?", a: "Fundamentals-first, deliberate practice, and data-driven reinforcement. We teach clarity, pattern recognition, and exam strategy." },
  { q: "How long are sessions?", a: "Typically 60–90 minutes per session, adjusted by student needs and schedule." },
  { q: "Online or in-person?", a: "We serve remotely nationwide via high-quality online sessions." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-label="FAQ"
      className="relative mx-auto max-w-4xl px-4 md:px-6 lg:px-8 py-16 md:py-24"
    >
      {/* Switched to high-contrast charcoal card */}
      <div className="rounded-3xl border border-white/10 bg-[#1a1a1a] text-white p-6 md:p-8">
        <div className="text-xs tracking-[0.25em] text-white/60">FAQ</div>
        <h3
          className="mt-2 font-black text-balance"
          style={{ fontSize: "clamp(2rem, 6vw, 3rem)" }}
        >
          Common questions
        </h3>

        <ul className="mt-6 divide-y divide-white/10">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q}>
                <button
                  className={`flex w-full items-start justify-between gap-4 py-4 text-left transition-colors ${
                    isOpen ? "border-l-4 border-l-[#00d9ff]" : "border-l-4 border-l-transparent"
                  }`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span
                    className={`font-semibold ${
                      isOpen ? "text-gradient-electric" : "hover:text-gradient-purple"
                    }`}
                    style={{ fontSize: "1.25rem" }}
                  >
                    {item.q}
                  </span>
                  <span className="mt-1 shrink-0 text-white/80">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="pb-4 text-white/80" style={{ lineHeight: 1.6 }}>
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
