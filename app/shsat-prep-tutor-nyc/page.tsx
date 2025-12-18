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

      {/* What Parents & Students Struggle With for SHSAT */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-4 text-center">Why SHSAT Prep Is So Challenging</h2>
        <p className="text-center text-white/70 mb-12 max-w-3xl mx-auto">
          The SHSAT is NYC's most competitive middle school exam. Here are the REAL struggles families face - and how I solve them:
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ SHSAT STRUGGLE #1</div>
            <h3 className="text-xl font-bold mb-3">Extreme Competition - Only 10% Get In</h3>
            <p className="text-white/80 mb-4">
              20,000+ students take the SHSAT. Only ~2,000 get offers to specialized high schools. That's 10%. Your child is competing against NYC's best - half did test prep for a year+.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              I teach you to compete at the HIGHEST level. We don't aim for "good enough" - we aim for top 10%. Advanced strategies, harder practice problems, and mastery of every question type. You'll be OVERPREPARED.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ SHSAT STRUGGLE #2</div>
            <h3 className="text-xl font-bold mb-3">Starting Too Late - Cramming Doesn't Work</h3>
            <p className="text-white/80 mb-4">
              Parents call me in September: "Test is in November, can we start now?" Two months isn't enough. Students who start 6-12 months early have 3x higher acceptance rates.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              If you start late, I prioritize ruthlessly: focus on high-value topics first, drill weak areas aggressively, maximize every session. But I'm honest - the earlier you start, the better your odds.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ SHSAT STRUGGLE #3</div>
            <h3 className="text-xl font-bold mb-3">Parents Don't Understand The Test Format</h3>
            <p className="text-white/80 mb-4">
              Most parents never took the SHSAT. They don't know what their child needs to practice, how to evaluate progress, or what score is competitive. Flying blind = wasted time.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              I guide parents every step. I explain what scores mean, which schools are realistic, what to practice, and track progress weekly. You'll know EXACTLY where your child stands vs competition.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ SHSAT STRUGGLE #4</div>
            <h3 className="text-xl font-bold mb-3">Time Pressure - Not Enough Time to Finish</h3>
            <p className="text-white/80 mb-4">
              57 Math questions in 90 minutes. 57 ELA questions in 90 minutes. Students run out of time, leave questions blank, or rush and make careless mistakes. Speed + accuracy = brutal.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              We drill time management obsessively. Skip hard questions, return later. Answer easy ones first. I track your time per question and identify where you're slow. By test day, pacing is AUTOMATIC.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ SHSAT STRUGGLE #5</div>
            <h3 className="text-xl font-bold mb-3">"My Child Is Smart But Not Test-Smart"</h3>
            <p className="text-white/80 mb-4">
              Your child gets A's in school but bombs practice tests. Why? The SHSAT tests logic, patterns, and strategic thinking - NOT memorization. Different skillset entirely.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              I teach test-taking as a SKILL. Process of elimination, strategic guessing, pattern recognition, question analysis. School-smart students become test-smart with proper training.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ SHSAT STRUGGLE #6</div>
            <h3 className="text-xl font-bold mb-3">One Shot Only - No Retakes or Second Chances</h3>
            <p className="text-white/80 mb-4">
              You get ONE attempt. One bad day, one mistake, one section you freeze on = no offer. The pressure is immense. Students crack under stress.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              I simulate test day pressure weekly. Full-length practice tests under real conditions. We build mental toughness and confidence. By test day, you've done this 20+ times - it feels routine, not scary.
            </p>
          </div>
        </div>
      </section>

      {/* Unique Features Section */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 bg-white/5 rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-black mb-8 text-center">
          What Makes My SHSAT Prep Different
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-xl border border-white/10 bg-black">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-3">Official SHSAT Materials ONLY</h3>
            <p className="text-white/70 text-sm">
              I use ONLY official DOE released SHSAT exams and Kaplan/Barron's materials written by former test writers. No fake questions that don't match real test difficulty.
            </p>
          </div>
          <div className="text-center p-6 rounded-xl border border-white/10 bg-black">
            <div className="text-5xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-3">Score Tracking & Progress Analytics</h3>
            <p className="text-white/70 text-sm">
              Weekly practice test score tracking. I chart your Math vs ELA performance, question-type accuracy, and projected cutoff scores for each school. Data-driven prep.
            </p>
          </div>
          <div className="text-center p-6 rounded-xl border border-white/10 bg-black">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">School Selection Strategy</h3>
            <p className="text-white/70 text-sm">
              I help you rank schools strategically based on your practice scores. We target schools where you're competitive, not just dream schools. Smart ranking = better odds.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-8">My Proven SHSAT Method</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold text-gradient-electric mb-4">Math Section (57 Questions)</h3>
            <p className="text-white/80 mb-4">Complete coverage of all SHSAT Math topics:</p>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>• <strong>Arithmetic & Number Theory</strong> - Primes, factors, divisibility</li>
              <li>• <strong>Algebra & Equations</strong> - Linear/quadratic equations, systems</li>
              <li>• <strong>Geometry & Coordinate Plane</strong> - Area, angles, slopes</li>
              <li>• <strong>Word Problems & Logic</strong> - Rate/distance, age problems</li>
              <li>• <strong>Data Analysis & Probability</strong> - Charts, graphs, statistics</li>
            </ul>
            <p className="text-white/80 mt-4 text-sm">
              Formula mastery → Pattern recognition → Speed drills → Full practice tests. 90 minutes = 95 seconds per question average.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold text-gradient-fire mb-4">ELA Section (57 Questions)</h3>
            <p className="text-white/80 mb-4">Reading & Revising/Editing mastery:</p>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>• <strong>Active Reading Strategies</strong> - Skim structure first</li>
              <li>• <strong>Evidence-Based Answers</strong> - Find proof in passage</li>
              <li>• <strong>Critical Analysis</strong> - Author's purpose, tone, theme</li>
              <li>• <strong>Grammar & Usage Rules</strong> - 20 rules tested repeatedly</li>
              <li>• <strong>Revising & Editing</strong> - Clarity, concision, transitions</li>
            </ul>
            <p className="text-white/80 mt-4 text-sm">
              We practice with passages from fiction, non-fiction, poetry, and informational texts. Learn to answer ANY passage type under time pressure.
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
            <p className="text-white/80">Ideally 6-12 months before the test date (test is usually in November). Starting in January-March gives you optimal prep time. Later starts are possible but require more intensive sessions.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">What score do I need to get into Stuyvesant/Bronx Science?</h3>
            <p className="text-white/80">Cutoff scores change yearly. Stuyvesant typically needs ~560-570+. Bronx Science ~520-535. Brooklyn Tech ~500-515. I track historical cutoffs and project your odds based on practice scores.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">How many practice tests should my child take?</h3>
            <p className="text-white/80">Minimum 10-15 full-length practice tests. I assign one every 2 weeks, review it thoroughly in our session, and drill weak areas. Repetition builds speed and confidence.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">Can my child study independently or do they need a tutor?</h3>
            <p className="text-white/80">Self-study works for VERY disciplined students with strong fundamentals. But 90% of students need structure, accountability, strategy guidance, and someone to identify blind spots. Tutoring dramatically improves odds.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">What if my child doesn't get in? Are there other options?</h3>
            <p className="text-white/80">Yes! Many excellent NYC high schools: Beacon, Millennium, Eleanor Roosevelt, and screened programs. I help families build backup plans. SHSAT isn't the only path to success.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready for SHSAT Success?</h2>
          <p className="text-xl text-white/80 mb-8">Start your specialized high school journey with a FREE strategy session.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="btn btn-primary-gradient btn-lg">
              BOOK FREE SESSION
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
