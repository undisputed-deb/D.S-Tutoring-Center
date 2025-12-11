"use client";

import { motion } from "framer-motion";
import { Layers, BookOpen, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Step = { id: string; title: string; desc: string; icon: "fund" | "practice" | "excel" };

const steps: Step[] = [
  { id: "01", title: "MASTER FUNDAMENTALS", desc: "We build strong foundations: concepts, patterns, and methods.", icon: "fund" },
  { id: "02", title: "PRACTICE TOGETHER", desc: "Guided drills, instant feedback, and iterative improvement.", icon: "practice" },
  { id: "03", title: "REINFORCE & EXCEL", desc: "Targeted reinforcement and exam readiness with data-driven plans.", icon: "excel" },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const p = Math.min(el.scrollLeft / Math.max(1, maxScroll), 1);
      setProgress(p);
    };
    el.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => el.removeEventListener("scroll", handler);
  }, []);

  return (
    <section
      id="process"
      aria-label="Process"
      className="relative mx-auto max-w-none px-0 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 mb-6">
        <div className="text-xs tracking-[0.25em] text-white/60">PROCESS</div>
      </div>

      <div
        ref={containerRef}
        className="snap-x snap-mandatory overflow-x-auto no-scrollbar"
      >
        <div className="flex w-[300%]">
          {steps.map((s, i) => (
            <Panel key={s.id} step={s} index={i} />
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 mt-6">
        <div className="h-[3px] w-full rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-gradient-electric"
            style={{ width: `${Math.max(10, progress * 100)}%` }}
          />
        </div>
      </div>
    </section>
  );
}

function Panel({ step, index }: { step: Step; index: number }) {
  const bg =
    index % 2 === 0 ? "bg-black" : "bg-[#1a1a1a]";

  const Icon =
    step.icon === "fund" ? Layers : step.icon === "practice" ? BookOpen : TrendingUp;

  return (
    <div
      className={`snap-center min-w-full ${bg} border-y border-white/10`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Large translucent number */}
          <div
            className="absolute -top-4 left-0 font-black text-white/5"
            style={{ fontSize: "clamp(4rem, 18vw, 12rem)", lineHeight: 1 }}
            aria-hidden
          >
            {step.id}
          </div>

          <div className="relative z-10 grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 md:col-span-8">
              <h4
                className="font-black"
                style={{ fontSize: "clamp(1.8rem, 6vw, 3rem)" }}
              >
                {step.title}
              </h4>
              <p className="mt-3 text-white/80" style={{ lineHeight: 1.6 }}>
                {step.desc}
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 flex items-center justify-start md:justify-end">
              <motion.div
                initial={{ scale: 0.9, rotate: -6, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-2xl border border-white/15 bg-white/5"
              >
                <Icon className="text-white" size={32} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
