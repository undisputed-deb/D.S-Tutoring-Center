import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "State Test Prep NYC | NYS Math & ELA Test Tutoring | D.S Tutoring",
  description:
    "Expert NYS State Test prep tutor in NYC. Master Math & ELA for grades 3-8. Proven strategies, practice tests & score improvement. 95% success rate. Free trial.",
  keywords: ["State test prep NYC", "NYS state test tutor", "NY state test preparation", "state test math tutor", "state test ELA tutor"],
  alternates: {
    canonical: "https://d-s-tutoring-center.vercel.app/state-test-prep-nyc",
  },
};

export default function StateTestPrepPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <CustomCursor />

      <section className="relative noise overflow-hidden pt-32 pb-16">
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="text-xs tracking-[0.25em] text-white/60 mb-4">NYS STATE TEST PREPARATION</div>
          <h1 className="font-black text-balance leading-[0.95]" style={{fontSize: "clamp(2.5rem, 8vw, 5rem)"}}>
            STATE TEST PREP NYC
          </h1>
          <h2 className="mt-6 text-2xl md:text-3xl font-bold text-gradient-electric">
            Master NYS Math & ELA State Tests - Grades 3-8
          </h2>
          <p className="mt-6 max-w-3xl text-lg md:text-xl text-white/80 leading-relaxed">
            The <strong>New York State Tests</strong> are crucial assessments that determine student proficiency and academic placement. I provide expert <strong>State Test prep tutoring in NYC</strong> for both Math and ELA, helping students build confidence and achieve mastery.
          </p>
        </div>
      </section>

      {/* What Parents & Students Struggle With Most */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-4 text-center">What Makes State Tests Challenging?</h2>
        <p className="text-center text-white/70 mb-12 max-w-3xl mx-auto">
          Based on working with 80+ NYC students, here are the TOP struggles parents and students face - and how I solve them:
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ COMMON STRUGGLE #1</div>
            <h3 className="text-xl font-bold mb-3">Test Anxiety & Time Pressure</h3>
            <p className="text-white/80 mb-4">
              Students freeze up during timed tests, second-guess correct answers, or rush through questions making careless errors.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              I simulate real test conditions during practice, teach proven time management techniques, and build confidence through repeated exposure. Students learn to trust their knowledge and pace themselves effectively.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ COMMON STRUGGLE #2</div>
            <h3 className="text-xl font-bold mb-3">Weak Foundation in Core Concepts</h3>
            <p className="text-white/80 mb-4">
              Students have gaps from previous grades - they never truly mastered fractions, long division, or reading comprehension strategies.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              I identify and fill knowledge gaps FIRST before test strategies. We go back to fundamentals until concepts are rock-solid, then build forward to test-level material.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ COMMON STRUGGLE #3</div>
            <h3 className="text-xl font-bold mb-3">Word Problems & Applied Math</h3>
            <p className="text-white/80 mb-4">
              Students can solve "2 + 2 = ?" but struggle when asked "Sarah has 2 apples and gets 2 more. How many does she have?" They can't translate words into math.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              I teach a systematic approach: identify key information, underline numbers and operations, draw diagrams, and translate step-by-step. We practice 100+ word problems until it becomes automatic.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ COMMON STRUGGLE #4</div>
            <h3 className="text-xl font-bold mb-3">ELA Constructed Response Paralysis</h3>
            <p className="text-white/80 mb-4">
              Students read the passage but don't know how to write a complete, well-organized response. They write too little, forget to cite evidence, or go off-topic.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              I provide templates and frameworks: Topic sentence → Evidence from text → Explanation → Conclusion. We practice the exact rubric scorers use. Students learn what "complete" looks like.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ COMMON STRUGGLE #5</div>
            <h3 className="text-xl font-bold mb-3">Parent Frustration & Homework Battles</h3>
            <p className="text-white/80 mb-4">
              Parents want to help but don't understand the "new" methods schools teach. Homework becomes a nightly battle. Students get frustrated and shut down.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              I take homework OFF parents' plates completely. I review all homework in our sessions, explain methods clearly, and provide weekly progress updates so parents know exactly where their child stands.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ COMMON STRUGGLE #6</div>
            <h3 className="text-xl font-bold mb-3">"My Child is Smart But Tests Poorly"</h3>
            <p className="text-white/80 mb-4">
              Students understand concepts when explained but perform poorly on tests. They know the material but can't demonstrate it under pressure.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              We practice test-taking as a SKILL separate from content knowledge. I teach how to eliminate wrong answers, manage time, and use process of elimination. Knowing content is half the battle - test strategy is the other half.
            </p>
          </div>
        </div>
      </section>

      {/* Unique Features Section */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 bg-white/5 rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-black mb-8 text-center">
          What Makes D.S Tutoring Center Different
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-xl border border-white/10 bg-black">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">Diagnostic Assessment</h3>
            <p className="text-white/70 text-sm">
              First session = FREE diagnostic. I identify exactly where your child struggles and create a customized plan. No cookie-cutter approach.
            </p>
          </div>
          <div className="text-center p-6 rounded-xl border border-white/10 bg-black">
            <div className="text-5xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-3">Weekly Progress Reports</h3>
            <p className="text-white/70 text-sm">
              Parents receive detailed updates every week: what we covered, homework completion, areas of improvement, and next steps. Full transparency.
            </p>
          </div>
          <div className="text-center p-6 rounded-xl border border-white/10 bg-black">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">100% Homework Priority</h3>
            <p className="text-white/70 text-sm">
              School homework comes FIRST. I review, correct, and explain every assignment. Test prep happens after homework is mastered - not instead of it.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-8">My State Test Prep Method</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold text-gradient-electric mb-4">Math Section Mastery</h3>
            <p className="text-white/80 mb-4">Topic-by-topic coverage aligned with NYS standards:</p>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>• Number Operations & Fractions</li>
              <li>• Algebraic Thinking & Patterns</li>
              <li>• Geometry & Measurement</li>
              <li>• Data Analysis & Statistics</li>
              <li>• Word Problem Strategies</li>
              <li>• Calculator & Mental Math Skills</li>
            </ul>
            <p className="text-white/80 mt-4 text-sm">
              We don't cram. We build mastery through: Concept → Examples → Guided Practice → Independent Practice → Past Test Questions → Full Practice Tests
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold text-gradient-fire mb-4">ELA Section Excellence</h3>
            <p className="text-white/80 mb-4">Complete reading and writing preparation:</p>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>• Active Reading Strategies</li>
              <li>• Text Evidence Location</li>
              <li>• Main Idea & Theme Identification</li>
              <li>• Vocabulary in Context</li>
              <li>• Constructed Response Framework</li>
              <li>• Essay Organization & Structure</li>
            </ul>
            <p className="text-white/80 mt-4 text-sm">
              I teach the EXACT scoring rubrics used by NY State. Students learn to write responses that check every box graders are looking for.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-8">State Test Prep FAQ</h2>
        <div className="space-y-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">When should my child start State Test prep?</h3>
            <p className="text-white/80">Ideally 3-6 months before the test (starting in fall for spring tests). This allows time to fill knowledge gaps AND practice test strategies without overwhelming your child.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">What if my child is already struggling in school?</h3>
            <p className="text-white/80">Perfect - that's exactly when to start! State Test prep doubles as homework help and grade improvement. We strengthen fundamentals which helps both school AND test performance.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">How often should we meet for State Test prep?</h3>
            <p className="text-white/80">I recommend 2-3 sessions per week for maximum impact. Consistency is key - students who meet regularly show 2-3x faster improvement than sporadic sessions.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">Do you use real NYS State Test materials?</h3>
            <p className="text-white/80">Yes! I use released NYS test questions, official practice tests, and materials aligned exactly with current State Test format and difficulty. No generic workbooks.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">What scores can my child expect?</h3>
            <p className="text-white/80">With consistent effort, most students improve by 1-2 proficiency levels. Students starting at Level 2 often reach Level 3 (proficient) or Level 4 (exceeds standards). Those at Level 1 typically reach Level 2-3.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Master the State Tests?</h2>
          <p className="text-xl text-white/80 mb-8">Start with a FREE diagnostic assessment - see exactly where your child needs help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="btn btn-primary-gradient btn-lg">
              BOOK FREE DIAGNOSTIC
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
