import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Regents Tutoring NYC | All Regents Exam Prep | D.S Tutoring Center",
  description:
    "Expert Regents exam tutoring in NYC for Algebra, Geometry, ELA, Chemistry, Physics & more. 95% pass rate. Free trial available. Call 917-312-6589.",
  keywords: ["Regents tutoring NYC", "Regents exam prep", "Algebra Regents tutor", "Geometry Regents tutor", "Chemistry Regents tutor"],
  alternates: {
    canonical: "https://d-s-tutoring-center.vercel.app/regents-tutoring-nyc",
  },
};

export default function RegentsTutoringPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <CustomCursor />

      <section className="relative noise overflow-hidden pt-32 pb-16">
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="text-xs tracking-[0.25em] text-white/60 mb-4">REGENTS EXAM PREP</div>
          <h1 className="font-black text-balance leading-[0.95]" style={{fontSize: "clamp(2.5rem, 8vw, 5rem)"}}>
            REGENTS TUTORING NYC
          </h1>
          <h2 className="mt-6 text-2xl md:text-3xl font-bold text-gradient-fire">
            Expert Preparation for All NY Regents Exams
          </h2>
          <p className="mt-6 max-w-3xl text-lg md:text-xl text-white/80 leading-relaxed">
            <strong>Regents exam scores matter.</strong> They're on your transcript and every college sees them. I provide comprehensive <strong>Regents tutoring in NYC</strong> for all subjects: Algebra, Geometry, ELA, Chemistry, Physics, Living Environment, Social Studies, and Earth Science.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-8">Regents Exams I Prepare Students For</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-gradient-electric mb-3">Math Regents</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Algebra 1 Regents</li>
              <li>• Algebra 2 Regents</li>
              <li>• Geometry Regents</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-gradient-fire mb-3">Science Regents</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Chemistry Regents</li>
              <li>• Physics Regents</li>
              <li>• Living Environment</li>
              <li>• Earth Science</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-gradient-purple mb-3">Other Regents</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• ELA Regents</li>
              <li>• Global History</li>
              <li>• US History</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-8">Why My Regents Prep Works</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-8">
            <h3 className="text-xl font-bold mb-4">Complete Topic Coverage</h3>
            <p className="text-white/80 leading-relaxed">
              I systematically cover every topic on the exam using past Regents questions and official materials. No surprises on test day.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-8">
            <h3 className="text-xl font-bold mb-4">Past Exam Mastery</h3>
            <p className="text-white/80 leading-relaxed">
              We practice extensively with actual past Regents exams. I teach you to recognize question patterns and common traps.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-8">
            <h3 className="text-xl font-bold mb-4">Scoring Strategies</h3>
            <p className="text-white/80 leading-relaxed">
              Learn how to maximize points on short and extended response questions. I teach the rubrics examiners use.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-8">
            <h3 className="text-xl font-bold mb-4">95% Pass Rate</h3>
            <p className="text-white/80 leading-relaxed">
              My students consistently achieve passing scores (65+) and many score in the mastery range (85+).
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-8">Regents Exam Prep FAQ</h2>
        <div className="space-y-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">How long does Regents exam prep take?</h3>
            <p className="text-white/80">Ideally 2-4 months before the exam for comprehensive preparation. However, I also offer intensive crash courses for students closer to test dates.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">What score do I need to pass a Regents exam?</h3>
            <p className="text-white/80">You need a score of 65 or higher to pass. Scores of 85+ are considered mastery level and look excellent on transcripts.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">Do you use official Regents materials?</h3>
            <p className="text-white/80">Yes! I use past Regents exams, official reference tables, and approved materials to ensure authentic preparation.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">Can you help if I failed a Regents exam?</h3>
            <p className="text-white/80">Absolutely. Many students retake Regents exams to improve their scores. I'll identify knowledge gaps and ensure you're ready to pass.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-white/5 to-white/[0.02] p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Your Transcript Matters</h2>
          <p className="text-xl text-white/80 mb-2">Regents scores appear on your high school transcript.</p>
          <p className="text-lg text-white/70 mb-8">Colleges review them for admissions decisions.</p>
          <div className="text-6xl font-black text-gradient-electric mb-4">85+</div>
          <p className="text-white/80">Aim for mastery-level scores to stand out</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Pass Your Regents?</h2>
          <p className="text-xl text-white/80 mb-8">Start your Regents prep with a free trial session today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="btn btn-primary-gradient btn-lg">
              BOOK FREE TRIAL
            </a>
            <Link href="/" className="btn btn-outline btn-lg">
              VIEW ALL PROGRAMS
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
