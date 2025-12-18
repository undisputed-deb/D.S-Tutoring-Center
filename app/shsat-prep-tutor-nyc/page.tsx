import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "SHSAT Prep Tutor NYC | Specialized High School Admission Test | D.S Tutoring",
  description:
    "Expert SHSAT prep tutor in NYC. Proven strategies for Stuyvesant, Bronx Science & Brooklyn Tech admission. 95% success rate. Free trial. Call 917-312-6589.",
  keywords: ["SHSAT prep tutor NYC", "SHSAT tutor NYC", "specialized high school test prep", "Stuyvesant prep", "SHSAT math tutor"],
  alternates: {
    canonical: "https://d-s-tutoring-center.vercel.app/shsat-prep-tutor-nyc",
  },
};

export default function SHSATTutorPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <CustomCursor />

      <section className="relative noise overflow-hidden pt-32 pb-16">
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="text-xs tracking-[0.25em] text-white/60 mb-4">SHSAT PREPARATION</div>
          <h1 className="font-black text-balance leading-[0.95]" style={{fontSize: "clamp(2.5rem, 8vw, 5rem)"}}>
            SHSAT PREP TUTOR NYC
          </h1>
          <h2 className="mt-6 text-2xl md:text-3xl font-bold text-gradient-fire">
            Get Into Stuyvesant, Bronx Science, Brooklyn Tech & More
          </h2>
          <p className="mt-6 max-w-3xl text-lg md:text-xl text-white/80 leading-relaxed">
            The <strong>SHSAT (Specialized High School Admissions Test)</strong> is highly competitive. I provide dedicated <strong>SHSAT prep tutoring in NYC</strong> using proven strategies that have helped students gain admission to NYC's elite specialized high schools including Stuyvesant, Bronx Science, and Brooklyn Tech.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-8">Why My SHSAT Prep Program Works</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-bold text-gradient-electric mb-4">Complete Curriculum Coverage</h3>
            <p className="text-white/80 leading-relaxed">
              The SHSAT has 2 modules (Math + ELA), each with 2 parts. I teach the complete curriculum following the official SHSAT handbook, because the test consistently uses similar question patterns year after year.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-bold text-gradient-fire mb-4">Strategic Time Management</h3>
            <p className="text-white/80 leading-relaxed">
              I teach extensive time management strategies and exam handling techniques: tackle easy questions first, then return to harder ones. Smart pacing is crucial for SHSAT success.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-bold text-gradient-purple mb-4">Proven 5-Step Method</h3>
            <p className="text-white/80 leading-relaxed">
              Formula Mastery → Logic Building → Examples → In-Class Practice → Practice Test Homework. Consistent practice with real SHSAT questions ensures exam readiness.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-bold text-gradient-neon mb-4">Total Commitment Required</h3>
            <p className="text-white/80 leading-relaxed">
              The SHSAT demands absolute dedication from both student and tutor. I give 120% to ensure you're fully prepared. Alignment and commitment = Success.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-8">SHSAT Test Structure</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-[#0a0a0a] p-6">
            <h3 className="text-xl font-bold mb-4">Math Section</h3>
            <ul className="space-y-2 text-white/80">
              <li>✓ Arithmetic & Number Theory</li>
              <li>✓ Algebra & Equations</li>
              <li>✓ Geometry & Coordinate Plane</li>
              <li>✓ Word Problems & Logic</li>
              <li>✓ Data Analysis & Probability</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0a0a0a] p-6">
            <h3 className="text-xl font-bold mb-4">ELA Section</h3>
            <ul className="space-y-2 text-white/80">
              <li>✓ Reading Comprehension</li>
              <li>✓ Revising & Editing</li>
              <li>✓ Critical Analysis</li>
              <li>✓ Evidence-Based Answers</li>
              <li>✓ Grammar & Usage</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-8">Target Schools</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-8 rounded-2xl border border-white/10 bg-white/5">
            <div className="text-2xl font-black text-gradient-electric mb-2">Stuyvesant</div>
            <div className="text-white/70">Manhattan</div>
          </div>
          <div className="text-center p-8 rounded-2xl border border-white/10 bg-white/5">
            <div className="text-2xl font-black text-gradient-fire mb-2">Bronx Science</div>
            <div className="text-white/70">Bronx</div>
          </div>
          <div className="text-center p-8 rounded-2xl border border-white/10 bg-white/5">
            <div className="text-2xl font-black text-gradient-purple mb-2">Brooklyn Tech</div>
            <div className="text-white/70">Brooklyn</div>
          </div>
          <div className="text-center p-8 rounded-2xl border border-white/10 bg-white/5">
            <div className="text-2xl font-black text-gradient-neon mb-2">Staten Island Tech</div>
            <div className="text-white/70">Staten Island</div>
          </div>
          <div className="text-center p-8 rounded-2xl border border-white/10 bg-white/5">
            <div className="text-2xl font-black text-gradient-electric mb-2">HSMSE</div>
            <div className="text-white/70">Manhattan</div>
          </div>
          <div className="text-center p-8 rounded-2xl border border-white/10 bg-white/5">
            <div className="text-2xl font-black text-gradient-fire mb-2">Queens Science</div>
            <div className="text-white/70">Queens</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-8">SHSAT Prep FAQ</h2>
        <div className="space-y-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">When should I start SHSAT prep?</h3>
            <p className="text-white/80">Ideally 6-12 months before the test date. Earlier preparation allows for thorough coverage of all topics and ample practice time.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">What's the best way to prepare for SHSAT?</h3>
            <p className="text-white/80">Consistent practice with official SHSAT materials, mastering fundamentals, time management strategies, and working with an experienced tutor who knows the test inside out.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">How competitive is the SHSAT?</h3>
            <p className="text-white/80">Extremely competitive. Only about 10% of test-takers receive offers. That's why dedicated preparation with a proven tutor is essential.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready for SHSAT Success?</h2>
          <p className="text-xl text-white/80 mb-8">Start your specialized high school journey with a free trial session.</p>
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
