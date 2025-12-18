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
            Expert SAT Preparation for NYC Students
          </h2>
          <p className="mt-6 max-w-3xl text-lg md:text-xl text-white/80 leading-relaxed">
            Looking for the best <strong>SAT tutor in NYC</strong>? I'm Deb Shrestho, and I specialize in helping students achieve 1400+ scores through proven strategies, personalized instruction, and relentless practice. With a 95% success rate, I've helped 80+ students get into their dream colleges.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-8">Why Choose My SAT Prep Program?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-bold text-gradient-electric mb-4">Comprehensive Math Section Mastery</h3>
            <p className="text-white/80 leading-relaxed">
              I cover all SAT math topics systematically: Algebra, Advanced Math, Problem Solving, Geometry, and Trigonometry. We master formulas first, build logic, review examples, then drill with official practice tests until concepts become second nature.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-bold text-gradient-fire mb-4">Reading & Writing Excellence</h3>
            <p className="text-white/80 leading-relaxed">
              Master critical reading strategies, grammar rules, and rhetoric analysis. I teach you how to decode complex passages quickly and identify correct answers with confidence.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-bold text-gradient-purple mb-4">Proven 5-Step Method</h3>
            <p className="text-white/80 leading-relaxed">
              Formula Mastery → Logic Building → In-Depth Examples → In-Class Practice → Practice Test Homework. This systematic approach ensures you're fully prepared for test day.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-bold text-gradient-neon mb-4">College Application Guidance</h3>
            <p className="text-white/80 leading-relaxed">
              Beyond SAT prep, I guide you through the Common App, personal essay writing, and extracurricular strategy to maximize your college acceptance chances.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-8">What My SAT Students Achieve</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-8 rounded-2xl border border-white/10 bg-white/5">
            <div className="text-5xl font-black text-gradient-electric">1400+</div>
            <div className="mt-2 text-white/70">Average Score Improvement</div>
          </div>
          <div className="text-center p-8 rounded-2xl border border-white/10 bg-white/5">
            <div className="text-5xl font-black text-gradient-fire">95%</div>
            <div className="mt-2 text-white/70">Student Success Rate</div>
          </div>
          <div className="text-center p-8 rounded-2xl border border-white/10 bg-white/5">
            <div className="text-5xl font-black text-gradient-purple">80+</div>
            <div className="mt-2 text-white/70">Students Prepared</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-8">SAT Prep Topics Covered</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-[#0a0a0a] p-6">
            <h3 className="text-xl font-bold mb-4">SAT Math Topics</h3>
            <ul className="space-y-2 text-white/80">
              <li>✓ Algebra & Linear Equations</li>
              <li>✓ Advanced Math & Functions</li>
              <li>✓ Problem Solving & Data Analysis</li>
              <li>✓ Geometry & Trigonometry</li>
              <li>✓ Calculator & No-Calculator Sections</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0a0a0a] p-6">
            <h3 className="text-xl font-bold mb-4">SAT Reading & Writing</h3>
            <ul className="space-y-2 text-white/80">
              <li>✓ Reading Comprehension Strategies</li>
              <li>✓ Grammar & Standard English Conventions</li>
              <li>✓ Rhetoric & Expression of Ideas</li>
              <li>✓ Evidence-Based Reading Skills</li>
              <li>✓ Time Management Techniques</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">How much does SAT tutoring cost in NYC?</h3>
            <p className="text-white/80">Contact me for pricing details. I offer competitive rates and a free trial session to assess your needs.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">How long does SAT prep take?</h3>
            <p className="text-white/80">Typically 3-6 months for optimal results, depending on your starting score and target score. Consistent practice is key.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">Do you offer in-person or online tutoring?</h3>
            <p className="text-white/80">I offer both in-person tutoring in NYC and online sessions via Zoom for maximum flexibility.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Ace the SAT?</h2>
          <p className="text-xl text-white/80 mb-8">Book your free trial session today and start your journey to a top SAT score.</p>
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
