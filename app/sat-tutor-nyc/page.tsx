import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "SAT Tutor NYC | Expert SAT Prep & Test Preparation | D.S Tutoring",
  description:
    "Top-rated SAT tutor in NYC with 95% success rate. Expert Math & Reading prep. Proven strategies for 1400+ scores. Free trial available. Call 917-312-6589.",
  keywords: ["SAT tutor NYC", "SAT prep NYC", "SAT test preparation", "SAT math tutor", "SAT reading tutor"],
  alternates: {
    canonical: "https://d-s-tutoring-center.vercel.app/sat-tutor-nyc",
  },
};

export default function SATTutorPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <CustomCursor />

      <section className="relative noise overflow-hidden pt-32 pb-16">
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="text-xs tracking-[0.25em] text-white/60 mb-4">SAT PREPARATION</div>
          <h1 className="font-black text-balance leading-[0.95]" style={{fontSize: "clamp(2.5rem, 8vw, 5rem)"}}>
            SAT TUTOR NYC
          </h1>
          <h2 className="mt-6 text-2xl md:text-3xl font-bold text-gradient-electric">
            Get Into Your Dream College - 1400+ Score Guaranteed
          </h2>
          <p className="mt-6 max-w-3xl text-lg md:text-xl text-white/80 leading-relaxed">
            The <strong>SAT</strong> is your ticket to top colleges and scholarships. I'm Deb Shrestho, <strong>SAT tutor in NYC</strong>, and I've helped 80+ students break 1400+ using proven strategies that work. Your SAT score determines your college options - let's make it count.
          </p>
        </div>
      </section>

      {/* What Parents & Students Struggle With for SAT */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-4 text-center">Why SAT Prep Is So Challenging</h2>
        <p className="text-center text-white/70 mb-12 max-w-3xl mx-auto">
          After working with 80+ SAT students, here are the REAL struggles - and my battle-tested solutions:
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ SAT STRUGGLE #1</div>
            <h3 className="text-xl font-bold mb-3">"I'm Good at Math But SAT Math is Different"</h3>
            <p className="text-white/80 mb-4">
              Students with A's in school math still struggle on SAT. Why? SAT tests problem-solving and logic under time pressure - NOT just formula memorization. Different beast entirely.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              I teach SAT math as a separate skillset. We learn the 50 question patterns that repeat EVERY test, master strategic guessing, and drill time management. You'll recognize questions instantly.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ SAT STRUGGLE #2</div>
            <h3 className="text-xl font-bold mb-3">Reading Section Time Crunch</h3>
            <p className="text-white/80 mb-4">
              Students run out of time on Reading. They read too slowly, re-read passages multiple times, or can't find evidence fast enough. 65 minutes for 52 questions = brutal.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              Active reading strategies: skim for structure FIRST, annotate as you go, answer easy questions first. I teach you to find answers in passages in 30 seconds, not 3 minutes.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ SAT STRUGGLE #3</div>
            <h3 className="text-xl font-bold mb-3">Grammar Rules Are Confusing</h3>
            <p className="text-white/80 mb-4">
              SAT Writing tests obscure grammar rules students never learned: semicolon usage, subject-verb agreement with complex subjects, parallel structure. School English doesn't cover this.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              I teach the 15 grammar rules that appear on EVERY SAT. We drill them until automatic. Then it's pattern recognition - you'll spot errors in 5 seconds.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ SAT STRUGGLE #4</div>
            <h3 className="text-xl font-bold mb-3">Score Plateaus & Can't Break Through</h3>
            <p className="text-white/80 mb-4">
              Students practice endlessly but scores don't improve. They're stuck at 1100, 1200, or 1300. More practice doesn't help - they're practicing wrong strategies.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              We analyze EVERY missed question to find patterns. Are you making careless errors? Weak in specific content? Poor time management? I identify the bottleneck and fix it specifically.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ SAT STRUGGLE #5</div>
            <h3 className="text-xl font-bold mb-3">Expensive Prep Courses Don't Work</h3>
            <p className="text-white/80 mb-4">
              Parents spend $1000s on big-name SAT courses. Students sit in classes of 20+, watch videos, do generic practice. Score improves 50-100 points max. Total waste.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              1-on-1 personalized tutoring. I adapt to YOUR weaknesses in real-time. No wasted time on topics you already know. We focus 100% on YOUR score bottlenecks. 200-300 point improvements are standard.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ SAT STRUGGLE #6</div>
            <h3 className="text-xl font-bold mb-3">Balancing SAT Prep With School + Activities</h3>
            <p className="text-white/80 mb-4">
              Students are overwhelmed: AP classes, school exams, sports, clubs, college apps. SAT prep becomes "one more thing" they don't have time for. Burnout is real.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              Efficient, focused sessions. We maximize every minute. I coordinate with your schedule, work around your school calendar, and make prep productive not painful. Quality over quantity.
            </p>
          </div>
        </div>
      </section>

      {/* Unique Features Section */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 bg-white/5 rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-black mb-8 text-center">
          What Makes My SAT Prep Different
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-xl border border-white/10 bg-black">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Official Practice Tests Only</h3>
            <p className="text-white/70 text-sm">
              I use ONLY College Board official practice tests. No fake questions. You practice with real SAT material so test day feels familiar.
            </p>
          </div>
          <div className="text-center p-6 rounded-xl border border-white/10 bg-black">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">Score Tracking Dashboard</h3>
            <p className="text-white/70 text-sm">
              Track your progress visually. See exactly which question types you're missing, time spent per section, and projected score after each practice test.
            </p>
          </div>
          <div className="text-center p-6 rounded-xl border border-white/10 bg-black">
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="text-xl font-bold mb-3">College Application Strategy</h3>
            <p className="text-white/70 text-sm">
              Beyond SAT prep: I help with Common App, essay brainstorming, college list building, and scholarship applications. Full college admissions support.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-8">My Proven SAT Method</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold text-gradient-electric mb-4">Math Section (800 points)</h3>
            <p className="text-white/80 mb-4">5-Step Systematic Approach:</p>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>• <strong>Formula Mastery</strong> - Know all formulas cold</li>
              <li>• <strong>Logic Building</strong> - Understand WHY formulas work</li>
              <li>• <strong>Pattern Recognition</strong> - 50 question types that repeat</li>
              <li>• <strong>Strategic Solving</strong> - Plug-in, backsolve, estimate</li>
              <li>• <strong>Time Management</strong> - Skip hard, return later</li>
            </ul>
            <p className="text-white/80 mt-4 text-sm">
              Topics: Algebra, Advanced Math, Problem Solving & Data Analysis, Geometry & Trig. Calculator + No-Calculator strategies.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold text-gradient-fire mb-4">Reading & Writing (800 points)</h3>
            <p className="text-white/80 mb-4">Complete EBRW Mastery:</p>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>• <strong>Active Reading</strong> - Annotation & structure mapping</li>
              <li>• <strong>Evidence Location</strong> - Find answers in 30 seconds</li>
              <li>• <strong>Grammar Rules</strong> - 15 rules that cover 90% of questions</li>
              <li>• <strong>Rhetoric Analysis</strong> - Author's purpose & tone</li>
              <li>• <strong>Vocabulary in Context</strong> - No memorization needed</li>
            </ul>
            <p className="text-white/80 mt-4 text-sm">
              We practice with real passages from literature, history, science, and social studies. Learn to answer ANY passage type.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-8">SAT Prep FAQ</h2>
        <div className="space-y-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">How much does SAT tutoring cost in NYC?</h3>
            <p className="text-white/80">Contact me for pricing. I offer competitive rates and a FREE first session to assess your starting point and create a customized plan.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">How long does SAT prep take?</h3>
            <p className="text-white/80">3-6 months for optimal results. Crash courses (1-2 months) work but leave less room for score improvement. Start early for best results.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">What score improvement can I expect?</h3>
            <p className="text-white/80">Average improvement: 200-300 points with consistent effort. Students starting at 1000-1100 typically reach 1300-1400. Those starting at 1200+ often hit 1450-1500+.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">Do you help with the Essay (if I need it)?</h3>
            <p className="text-white/80">Yes! Though most colleges no longer require it, I teach SAT Essay for students who need it. We analyze rhetorical devices, evidence, and persuasive techniques.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">When should my child take the SAT?</h3>
            <p className="text-white/80">First attempt: Spring of junior year (March/May). This allows time for a retake in summer/fall if needed. Some start in sophomore year to build familiarity.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Ace the SAT?</h2>
          <p className="text-xl text-white/80 mb-8">Book your FREE strategy session - I'll show you exactly how to break 1400+</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="btn btn-primary-gradient btn-lg">
              BOOK FREE SESSION
            </a>
            <a href="/#programs" className="btn btn-outline btn-lg">
              VIEW ALL PROGRAMS
            </a>
            <a href="/#pricing" className="btn btn-outline btn-lg">
              SEE PRICING
            </a>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
