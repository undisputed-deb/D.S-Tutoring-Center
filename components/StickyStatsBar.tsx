"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Stat = { label: string; value: number; suffix?: string };

const stats: Stat[] = [
  { label: "LESSONS", value: 1200, suffix: "+" },
  { label: "SUCCESS", value: 95, suffix: "%" },
  { label: "SCHOOLS", value: 35, suffix: "+" },
  { label: "STUDENTS", value: 80, suffix: "+" },
];

export default function StickyStatsBar() {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimationControls();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) controls.start("visible");
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <section
      ref={ref}
      aria-label="Stats"
      className="sticky top-20 z-40 mx-auto w-full bg-black"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.8, y: -6 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="rounded-xl border border-white/15 bg-black"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((s, idx) => (
              <StatCell key={s.label} index={idx} {...s} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCell({
  label,
  value,
  suffix,
  index,
}: Stat & { index: number }): JSX.Element {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let frame: number;
    const duration = 1200;
    const start = performance.now();
    const animate = (time: number) => {
      const t = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.floor(eased * value));
      if (t < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px" }}
      transition={{ delay: 0.05 * index, duration: 0.4 }}
      className="flex items-center justify-center px-4 py-6"
    >
      <div className="text-center">
        <div
          className="font-black leading-none"
          style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
          aria-label={`${value}${suffix ?? ""} ${label}`}
        >
          {display}
          {suffix ?? ""}
        </div>
        <div className="mt-2 text-xs tracking-[0.2em] text-white/60">
          {label}
        </div>
      </div>
    </motion.div>
  );
}
