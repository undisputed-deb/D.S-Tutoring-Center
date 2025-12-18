"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Program = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  desc: string;
  accent: "electric" | "fire" | "neon" | "purple";
  link?: string;
};

const programs: Program[] = [
  {
    id: "state",
    number: "01",
    title: "State Test Mastery",
    subtitle: "Topic-by-Topic Excellence",
    desc:
      "I take a systematic, no-cramming approach to State Tests for both Math and ELA. For Math, I give the concept, logic and formulas first, understand the logic behind them, and then drill actual test questions until they're second nature and then rest of the stuffs is homework. For ELA, we break down reading strategies and deconstruct exactly what makes a high-scoring written answer. My method is simple: we build a strong foundation and practice every topic until it's perfected, so you walk in with total confidence.",
    accent: "electric",
    link: "/state-test-prep-nyc",
  },
  {
    id: "shsat",
    number: "02",
    title: "SHSAT Prep",
    subtitle: "Competitive Excellence",
    desc:
      "The SHSAT is an elimination exam that demands absolute dedication from both student and teacher. This exam has 2 modules (Math + ELA), each with 2 parts. I teach the complete curriculum, extensive time management strategies, exam circumstances handling, and the smart approach: take questions first, then tackle the harder ones. I strictly follow the SHSAT handbook because the administration consistently uses similar question patterns. Formula mastery → Logic building → Examples → In-class practice → Practice test homework. Alignment and commitment = Success.",
    accent: "fire",
    link: "/shsat-prep-tutor-nyc",
  },
  {
    id: "sat",
    number: "03",
    title: "SAT Preparation",
    subtitle: "Your Gateway to Top Colleges",
    desc:
      "My SAT Preparation service is your complete gateway to top colleges, as a high score opens critical doors to selective schools, scholarships, and optimal course placement. I provide comprehensive, one-on-one coaching for both the digital Reading/Writing and the adaptive Math sections. We deconstruct the test using a proven, systematic 5-step math method: first, we achieve formula mastery so you know them cold; next, we focus on logic building to understand how the test-makers think; then, we walk through in-depth examples to spot common traps. This is followed by in-class practice where I correct mistakes in real-time, and it's finalized with practice test homework using the best resources. We apply this same rigor to Reading/Writing, mastering grammar and critical reading strategies. I also guide the Common App, personal essay, and extracurricular strategy.",
    accent: "neon",
    link: "/sat-tutor-nyc",
  },
  {
    id: "regents",
    number: "04",
    title: "Regents Exams",
    subtitle: "Your Academic Transcript Matters",
    desc:
      "These are the scores every college will see. I cover all key subjects: Algebra 1, Algebra 2, Geometry, ELA, Chemistry, Physics, Living Environment, and Earth Science. My proven 5-step method builds mastery: we master core concepts, build logic, and walk through examples. Top priority is practice: lots of Regents packet practice together in class, and targeted homework using real past Regents exams. We don't just pass — we excel.",
    accent: "purple",
    link: "/regents-tutoring-nyc",
  },
  {
    id: "ap",
    number: "05",
    title: "Advanced Placement",
    subtitle: "College-Level Excellence",
    desc:
      "Challenge yourself with college-level coursework. Master complex concepts through structured learning: comprehensive concept building → formula mastery → strategic problem-solving → intensive practice → challenging homework assignments. Elevate your academic profile.",
    accent: "electric",
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      aria-label="Programs"
      className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24"
    >
      <div className="mb-8 md:mb-12">
        <div className="text-xs tracking-[0.25em] text-white/60">PROGRAMS</div>
        <h3
          className="mt-2 font-black text-outline"
          style={{ fontSize: "clamp(2rem, 8vw, 5rem)" }}
        >
          PROGRAMS
        </h3>
      </div>

      <div className="space-y-6 md:space-y-8">
        {programs.map((p, i) => (
          <ProgramBlock key={p.id} program={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProgramBlock({ program, index }: { program: Program; index: number }) {
  const accentBar =
    program.accent === "electric"
      ? "bg-gradient-electric"
      : program.accent === "fire"
      ? "bg-gradient-fire"
      : program.accent === "neon"
      ? "bg-gradient-neon"
      : "bg-gradient-purple";

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ delay: index * 0.05 }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a]"
    >
      <div className={`absolute left-0 top-0 h-full w-[6px] ${accentBar}`} />
      <div className="relative p-6 md:p-8">
        <div className="text-sm tracking-[0.2em] text-white/60">{program.number}</div>
        <h4 className="mt-2 font-bold" style={{ fontSize: "clamp(1.4rem, 4vw, 2rem)" }}>
          {program.title}
        </h4>
        <div className="text-white/70">{program.subtitle}</div>
        <p className="mt-4 text-white/80" style={{ lineHeight: 1.7 }}>
          {program.desc}
        </p>
        {program.link && (
          <div className="mt-6">
            <Link href={program.link} className="btn btn-outline">
              LEARN MORE
            </Link>
          </div>
        )}
      </div>
    </motion.article>
  );
}
