import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Math Tutor NYC | Algebra, Geometry & Calculus Tutoring | D.S Tutoring",
  description:
    "Top math tutor near me in NYC. Expert help for Algebra, Geometry, Calculus, Pre-Calc & more. 95% success rate. Grades 5-12. Free trial. Call 917-312-6589.",
  keywords: ["math tutor NYC", "math tutor near me", "algebra tutor NYC", "geometry tutor NYC", "calculus tutor NYC"],
  alternates: {
    canonical: "https://d-s-tutoring-center.vercel.app/math-tutor-nyc",
  },
};

export default function MathTutorPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <CustomCursor />

      <section className="relative noise overflow-hidden pt-32 pb-16">
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="text-xs tracking-[0.25em] text-white/60 mb-4">MATH TUTORING</div>
          <h1 className="font-black text-balance leading-[0.95]" style={{fontSize: "clamp(2.5rem, 8vw, 5rem)"}}>
            MATH TUTOR NYC
          </h1>
          <h2 className="mt-6 text-2xl md:text-3xl font-bold text-gradient-electric">
            Expert Math Tutoring for All Levels in New York City
          </h2>
          <p className="mt-6 max-w-3xl text-lg md:text-xl text-white/80 leading-relaxed">
            Looking for a <strong>math tutor near me in NYC</strong>? I'm Deb Shrestho, providing comprehensive math tutoring for grades 5-12. From Algebra and Geometry to Calculus and Statistics, I help students master fundamentals and excel in exams.
          </p>
        </div>
      </section>

      {/* What Parents & Students Struggle With for Math */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-4 text-center">Why Math Tutoring Becomes Necessary</h2>
        <p className="text-center text-white/70 mb-12 max-w-3xl mx-auto">
          After working with 80+ NYC students, here are the REAL math struggles families face - and how I solve them:
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ MATH STRUGGLE #1</div>
            <h3 className="text-xl font-bold mb-3">Homework Battles Every Night</h3>
            <p className="text-white/80 mb-4">
              Math homework becomes a 2-hour nightly battle. Tears, frustration, parents trying to help but don't remember the "new" methods. Everyone's stressed, nothing gets done.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              I take homework OFF parents' plates completely. We review ALL homework in our sessions. I explain every problem, show multiple methods, and ensure understanding. Parents get their evenings back.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ MATH STRUGGLE #2</div>
            <h3 className="text-xl font-bold mb-3">"I Get It In Class But Forget At Home"</h3>
            <p className="text-white/80 mb-4">
              Student understands when teacher explains but can't do homework alone. They watch, nod along, then stare blankly at problems later. No transfer of learning.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              I don't lecture - YOU do the work. I guide, ask questions, and make YOU solve problems step-by-step. Active learning = real understanding. You'll remember because YOU figured it out.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ MATH STRUGGLE #3</div>
            <h3 className="text-xl font-bold mb-3">Word Problems = Instant Panic</h3>
            <p className="text-white/80 mb-4">
              Students can solve "3x + 5 = 20" easily but freeze when it's: "Sarah has 5 apples and buys 3 more. How many total?" Can't translate words into math equations.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              I teach a systematic approach: Identify what you're solving for → Underline key numbers → Draw diagrams → Translate to equation → Solve. We practice 100+ word problems until it's automatic.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ MATH STRUGGLE #4</div>
            <h3 className="text-xl font-bold mb-3">Good Grades But No Real Understanding</h3>
            <p className="text-white/80 mb-4">
              Student gets B's and C's by memorizing steps for tests, then forgets everything next unit. No foundation. Math becomes harder every year because gaps keep growing.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              We go back and fill gaps FIRST. I identify what you missed from previous years and rebuild foundation. Then current material makes sense. You're not just memorizing - you UNDERSTAND.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ MATH STRUGGLE #5</div>
            <h3 className="text-xl font-bold mb-3">"I'm Just Not a Math Person"</h3>
            <p className="text-white/80 mb-4">
              Student convinced they're "bad at math." They've failed so many tests, gotten so much negative feedback, they've given up. Math anxiety is real and crippling.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              I rebuild confidence through small wins. Start with problems you CAN solve, then gradually increase difficulty. Celebrate every success. You're not "bad at math" - you just need the right teacher.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ MATH STRUGGLE #6</div>
            <h3 className="text-xl font-bold mb-3">Different Methods Confuse Students</h3>
            <p className="text-white/80 mb-4">
              Teacher teaches one method. Parent learned a different method. YouTube shows a third method. Student is confused which one to use and mixes them up, getting wrong answers.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              I teach YOUR school's method first so tests are easy. Then I show alternative methods for understanding. You'll know multiple approaches and when to use each. Flexibility = mastery.
            </p>
          </div>
        </div>
      </section>

      {/* Unique Features Section */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 bg-white/5 rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-black mb-8 text-center">
          What Makes My Math Tutoring Different
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-xl border border-white/10 bg-black">
            <div className="text-5xl mb-4">📝</div>
            <h3 className="text-xl font-bold mb-3">100% Homework Priority</h3>
            <p className="text-white/70 text-sm">
              School homework comes FIRST every session. We review, correct, and explain every assignment. Extra practice happens AFTER homework is mastered.
            </p>
          </div>
          <div className="text-center p-6 rounded-xl border border-white/10 bg-black">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Customized Practice Problems</h3>
            <p className="text-white/70 text-sm">
              I create custom worksheets targeting YOUR specific weak areas. Not generic practice - problems designed exactly for what YOU struggle with.
            </p>
          </div>
          <div className="text-center p-6 rounded-xl border border-white/10 bg-black">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">Weekly Parent Progress Reports</h3>
            <p className="text-white/70 text-sm">
              Parents receive detailed weekly updates: topics covered, homework completion rate, test scores, areas of improvement, and next steps. Full transparency.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-8">Math Subjects I Teach</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-gradient-electric mb-4">Algebra 1 & 2</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Linear equations & inequalities</li>
              <li>• Quadratic functions & factoring</li>
              <li>• Polynomials & rational expressions</li>
              <li>• Exponents, radicals & logarithms</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-gradient-fire mb-4">Geometry</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Proofs & logical reasoning</li>
              <li>• Triangles, circles & polygons</li>
              <li>• Coordinate geometry & transformations</li>
              <li>• 3D shapes & volume</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-gradient-purple mb-4">Pre-Calculus</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Trigonometry & trig identities</li>
              <li>• Functions & graphs</li>
              <li>• Sequences, series & matrices</li>
              <li>• Limits & continuity</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-gradient-neon mb-4">Calculus (AP & College)</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Derivatives & differentiation rules</li>
              <li>• Integrals & integration techniques</li>
              <li>• Applications (optimization, area, volume)</li>
              <li>• Differential equations & series</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-gradient-electric mb-4">Statistics & Probability</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Probability & counting</li>
              <li>• Data analysis & graphs</li>
              <li>• Normal distributions & z-scores</li>
              <li>• Hypothesis testing & confidence intervals</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-gradient-fire mb-4">Test Prep Math</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• SAT Math (all sections)</li>
              <li>• SHSAT Math (Arithmetic, Algebra, Geometry)</li>
              <li>• State Tests (grades 3-8)</li>
              <li>• Regents exams (all math levels)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-8">Math Tutoring FAQ</h2>
        <div className="space-y-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">Can I get a math tutor near me in NYC?</h3>
            <p className="text-white/80">Yes! I offer both in-person tutoring throughout NYC (Manhattan, Brooklyn, Queens, Bronx, Staten Island) and online sessions via Zoom for maximum convenience.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">What grades do you tutor?</h3>
            <p className="text-white/80">I tutor students in grades 5-12, covering everything from elementary math through AP Calculus BC. Also test prep for SAT, SHSAT, State Tests, and Regents exams.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">How quickly will I see improvement?</h3>
            <p className="text-white/80">Most students see grade improvements within 4-6 weeks of consistent tutoring (2-3 sessions/week). Test scores typically improve after 8-12 weeks of focused prep.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">Do you help with homework?</h3>
            <p className="text-white/80">Absolutely! Homework review is the FIRST thing we do every session. I ensure you understand every assignment and can complete future homework independently.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">What if my child has major knowledge gaps from previous years?</h3>
            <p className="text-white/80">No problem. I start with a diagnostic to identify gaps, then we systematically fill them while staying current with schoolwork. Building foundation is my specialty.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Master Math?</h2>
          <p className="text-xl text-white/80 mb-8">Book your FREE trial session and start improving today.</p>
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
