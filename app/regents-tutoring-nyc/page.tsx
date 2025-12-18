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

      {/* What Parents & Students Struggle With for Regents */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-4 text-center">Why Regents Exams Cause So Much Stress</h2>
        <p className="text-center text-white/70 mb-12 max-w-3xl mx-auto">
          Regents scores go on your transcript forever. Every college sees them. Here are the REAL struggles - and my solutions:
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ REGENTS STRUGGLE #1</div>
            <h3 className="text-xl font-bold mb-3">Transcript Anxiety - Scores Are Permanent</h3>
            <p className="text-white/80 mb-4">
              Unlike regular tests, Regents scores go on your official transcript. Every college application sees them. A bad score follows you forever. The pressure is intense.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              We prepare thoroughly so you're CONFIDENT on test day. Practice tests, topic mastery, time management. You'll walk in knowing you're ready. No surprises = no panic.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ REGENTS STRUGGLE #2</div>
            <h3 className="text-xl font-bold mb-3">Multiple Exams in One Week - Overwhelming Schedule</h3>
            <p className="text-white/80 mb-4">
              Regents week = 3-5 exams in 5 days. Algebra Monday, ELA Tuesday, Chemistry Thursday. Students burn out, can't study for all of them, prioritize wrong exams.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              I help you create a study calendar: which exams need most prep, what to study when, how to balance review across subjects. Strategic planning prevents overwhelm.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ REGENTS STRUGGLE #3</div>
            <h3 className="text-xl font-bold mb-3">Retaking Regents - Falling Further Behind</h3>
            <p className="text-white/80 mb-4">
              Failed a Regents? Now you're retaking in August while friends enjoy summer. Or retaking next year while taking NEW Regents. It snowballs fast.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              We identify EXACTLY what you failed on, fill those gaps aggressively, and ensure you pass the retake. I provide intensive summer/retake prep so you pass ONCE and move on.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ REGENTS STRUGGLE #4</div>
            <h3 className="text-xl font-bold mb-3">Curve Confusion - "Do I Need 65% or 50%?"</h3>
            <p className="text-white/80 mb-4">
              Regents are curved. You might need only 45 raw points to get a 65. Or 70 points to get an 85. Students don't understand the conversion and misjudge their readiness.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              I track your raw score on practice tests AND convert to scaled scores. You'll know EXACTLY where you stand. We target the raw point total you need for your goal scaled score.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ REGENTS STRUGGLE #5</div>
            <h3 className="text-xl font-bold mb-3">Timing College Apps With Regents - Chicken & Egg</h3>
            <p className="text-white/80 mb-4">
              Seniors take Regents in January while applying to colleges. Do you send scores now or wait? What if you bomb? Colleges see "pending" scores and judge.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              I help juniors take ALL Regents early (by junior year) so senior year is stress-free. For seniors, we prep aggressively so you're CONFIDENT your scores will be good.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ REGENTS STRUGGLE #6</div>
            <h3 className="text-xl font-bold mb-3">Summer School Regents - No Break, Rushed Learning</h3>
            <p className="text-white/80 mb-4">
              Failed during school year? Summer school compresses a year of content into 6 weeks, then Regents exam. Students barely learn the material before testing.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              I provide intensive summer tutoring alongside summer school. We reinforce what you're learning, fill gaps from the original course, and ensure you're READY for the August Regents.
            </p>
          </div>
        </div>
      </section>

      {/* Unique Features Section */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 bg-white/5 rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-black mb-8 text-center">
          What Makes My Regents Prep Different
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-xl border border-white/10 bg-black">
            <div className="text-5xl mb-4">📋</div>
            <h3 className="text-xl font-bold mb-3">Official Past Regents Only</h3>
            <p className="text-white/70 text-sm">
              I use ONLY official NY State released Regents exams from the past 10 years. You practice with real test questions, real difficulty, real format.
            </p>
          </div>
          <div className="text-center p-6 rounded-xl border border-white/10 bg-black">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Score Conversion Tracking</h3>
            <p className="text-white/70 text-sm">
              I track your raw score AND scaled score on every practice test. You'll know exactly what raw points you need to hit your target scaled score (65, 75, 85, etc.).
            </p>
          </div>
          <div className="text-center p-6 rounded-xl border border-white/10 bg-black">
            <div className="text-5xl mb-4">✍️</div>
            <h3 className="text-xl font-bold mb-3">Constructed Response Mastery</h3>
            <p className="text-white/70 text-sm">
              Regents have short and extended response questions worth major points. I teach you the EXACT format graders want: clear work, proper units, complete sentences.
            </p>
          </div>
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
              <li>• Living Environment (Biology)</li>
              <li>• Earth Science</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-gradient-purple mb-3">Other Regents</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• ELA Regents</li>
              <li>• Global History & Geography</li>
              <li>• US History & Government</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-8">Regents Exam Prep FAQ</h2>
        <div className="space-y-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">How long does Regents exam prep take?</h3>
            <p className="text-white/80">Ideally 2-4 months before the exam for comprehensive preparation. I also offer intensive 4-6 week crash courses for students closer to test dates who need focused review.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">What score do I need to pass a Regents exam?</h3>
            <p className="text-white/80">You need a scaled score of 65+ to pass. Scores of 85+ are mastery level and look excellent on transcripts. But remember: raw points ≠ scaled score. I teach you exactly what you need.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">Do you use official Regents materials?</h3>
            <p className="text-white/80">Yes! I use ONLY official NY State released Regents exams from the past 10 years, official reference tables, and approved materials to ensure authentic preparation.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">Can you help if I failed a Regents exam?</h3>
            <p className="text-white/80">Absolutely. I specialize in retake prep. We analyze what you failed on, fill those specific gaps, and ensure you pass the next time. Summer and retake prep available.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">How many practice tests should I take?</h3>
            <p className="text-white/80">Minimum 5-8 full-length practice tests. We review every question you miss, identify patterns in your mistakes, and drill weak areas. Repetition builds confidence.</p>
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
          <p className="text-xl text-white/80 mb-8">Start your Regents prep with a FREE trial session today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="btn btn-primary-gradient btn-lg">
              BOOK FREE TRIAL
            </Link>
            <Link href="/#about" className="btn btn-outline btn-lg">
              ABOUT
            </Link>
            <Link href="/#programs" className="btn btn-outline btn-lg">
              PROGRAMS
            </Link>
            <Link href="/#pricing" className="btn btn-outline btn-lg">
              PRICING
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
