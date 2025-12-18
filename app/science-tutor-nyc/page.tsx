import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Science Tutor NYC | Chemistry, Physics & Biology Tutoring | D.S Tutoring",
  description:
    "Expert science tutor in NYC for Chemistry, Physics, Biology & Earth Science. Regents exam prep specialist. 95% success rate. Free trial. Call 917-312-6589.",
  keywords: ["science tutor NYC", "chemistry tutor NYC", "physics tutor NYC", "biology tutor NYC", "earth science tutor"],
  alternates: {
    canonical: "https://d-s-tutoring-center.vercel.app/science-tutor-nyc",
  },
};

export default function ScienceTutorPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <CustomCursor />

      <section className="relative noise overflow-hidden pt-32 pb-16">
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="text-xs tracking-[0.25em] text-white/60 mb-4">SCIENCE TUTORING</div>
          <h1 className="font-black text-balance leading-[0.95]" style={{fontSize: "clamp(2.5rem, 8vw, 5rem)"}}>
            SCIENCE TUTOR NYC
          </h1>
          <h2 className="mt-6 text-2xl md:text-3xl font-bold text-gradient-electric">
            Chemistry, Physics, Biology & Earth Science Tutoring
          </h2>
          <p className="mt-6 max-w-3xl text-lg md:text-xl text-white/80 leading-relaxed">
            Need a <strong>science tutor in NYC</strong>? I specialize in Chemistry, Physics, Biology, and Earth Science tutoring for middle and high school students. Expert Regents exam preparation with a 95% success rate.
          </p>
        </div>
      </section>

      {/* What Parents & Students Struggle With for Science */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-4 text-center">Why Science Classes Feel So Hard</h2>
        <p className="text-center text-white/70 mb-12 max-w-3xl mx-auto">
          Science combines math, reading, and abstract thinking. Here are the REAL struggles students face - and my solutions:
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ SCIENCE STRUGGLE #1</div>
            <h3 className="text-xl font-bold mb-3">Memorization Overload - Too Much to Remember</h3>
            <p className="text-white/80 mb-4">
              Biology = 50 vocab terms per chapter. Chemistry = formulas, element names, reaction types. Physics = equations. Students try to memorize everything, remember nothing.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              I teach UNDERSTANDING over memorization. When you understand HOW things work, you don't need to memorize. We use patterns, analogies, and connections. Knowledge sticks naturally.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ SCIENCE STRUGGLE #2</div>
            <h3 className="text-xl font-bold mb-3">Lab Reports & Scientific Writing Confusion</h3>
            <p className="text-white/80 mb-4">
              Students don't know what a hypothesis is, how to analyze data, or how to write conclusions. Lab reports become guessing games. They lose points not because they don't know science - but because they can't write about it.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              I provide templates and frameworks for EVERY section: hypothesis format, data table structure, conclusion checklist. We practice writing scientifically until it's automatic.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ SCIENCE STRUGGLE #3</div>
            <h3 className="text-xl font-bold mb-3">Abstract Concepts - Can't Visualize What's Happening</h3>
            <p className="text-white/80 mb-4">
              Atoms, chemical bonds, DNA replication, electric fields - you can't SEE them. Textbooks show 2D diagrams. Students read descriptions but can't picture what's actually happening.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              I use diagrams, animations, and real-world analogies. We draw pictures together. I show videos. Abstract becomes concrete. You'll VISUALIZE science, not just read about it.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ SCIENCE STRUGGLE #4</div>
            <h3 className="text-xl font-bold mb-3">Word Problems Require Math + Science Combined</h3>
            <p className="text-white/80 mb-4">
              "Calculate the velocity..." "Find the molarity..." "What's the genetic probability?" Students understand the science OR the math, but struggle when both are required in one problem.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              I teach formula application step-by-step: Identify what you're solving for → Write the formula → Plug in values → Solve. We practice 50+ calculation problems per topic until automatic.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ SCIENCE STRUGGLE #5</div>
            <h3 className="text-xl font-bold mb-3">Dense Reading Passages - Science Textbooks Are Brutal</h3>
            <p className="text-white/80 mb-4">
              Science textbooks pack 10 concepts into one paragraph. Students read a page 3 times and still don't understand. Too many unfamiliar terms, complex sentence structure, information overload.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              I teach active reading: highlight key terms, annotate definitions, summarize each paragraph in your own words. We break dense passages into digestible chunks. You'll extract meaning efficiently.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-8">
            <div className="text-red-400 text-sm font-bold mb-3">❌ SCIENCE STRUGGLE #6</div>
            <h3 className="text-xl font-bold mb-3">Multiple Sciences at Once - Switching Mental Gears</h3>
            <p className="text-white/80 mb-4">
              Freshman year: Earth Science. Sophomore: Biology. Junior: Chemistry. Senior: Physics. Each science requires different thinking. Students struggle to switch mental frameworks.
            </p>
            <div className="text-green-400 text-sm font-bold mb-2">✓ MY SOLUTION:</div>
            <p className="text-white/70 text-sm">
              I teach how each science thinks differently: Biology = systems and processes. Chemistry = reactions and calculations. Physics = forces and equations. You'll learn the "mindset" for each.
            </p>
          </div>
        </div>
      </section>

      {/* Unique Features Section */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 bg-white/5 rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-black mb-8 text-center">
          What Makes My Science Tutoring Different
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-xl border border-white/10 bg-black">
            <div className="text-5xl mb-4">🧪</div>
            <h3 className="text-xl font-bold mb-3">Lab Report Mastery</h3>
            <p className="text-white/70 text-sm">
              I provide step-by-step templates for EVERY lab section: title, purpose, hypothesis, materials, procedure, data, analysis, conclusion. No more guessing.
            </p>
          </div>
          <div className="text-center p-6 rounded-xl border border-white/10 bg-black">
            <div className="text-5xl mb-4">📐</div>
            <h3 className="text-xl font-bold mb-3">Visual Learning Approach</h3>
            <p className="text-white/70 text-sm">
              I use diagrams, videos, animations, and drawing to make abstract concepts concrete. You'll SEE science happening, not just read about it.
            </p>
          </div>
          <div className="text-center p-6 rounded-xl border border-white/10 bg-black">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-3">Regents Exam Strategies</h3>
            <p className="text-white/70 text-sm">
              I teach the exact question types, common traps, and point-earning strategies for Chemistry, Physics, Living Environment, and Earth Science Regents.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-8">Science Subjects I Teach</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold text-gradient-electric mb-4">Chemistry Tutoring</h3>
            <p className="text-white/80 mb-4">Master chemical reactions, stoichiometry, periodic trends, and more.</p>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>• Atomic structure & periodic table</li>
              <li>• Chemical bonding & reactions</li>
              <li>• Stoichiometry & mole calculations</li>
              <li>• Acids, bases & pH</li>
              <li>• Organic chemistry basics</li>
              <li>• Chemistry Regents prep</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold text-gradient-fire mb-4">Physics Tutoring</h3>
            <p className="text-white/80 mb-4">Understand motion, forces, energy, electricity, and waves.</p>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>• Kinematics & dynamics</li>
              <li>• Forces & Newton's laws</li>
              <li>• Energy & momentum</li>
              <li>• Electricity & magnetism</li>
              <li>• Waves & optics</li>
              <li>• Physics Regents prep</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold text-gradient-purple mb-4">Biology Tutoring</h3>
            <p className="text-white/80 mb-4">Explore cells, genetics, evolution, and human body systems.</p>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>• Cell structure & function</li>
              <li>• Genetics & DNA</li>
              <li>• Evolution & natural selection</li>
              <li>• Ecology & ecosystems</li>
              <li>• Human anatomy & physiology</li>
              <li>• Living Environment Regents prep</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold text-gradient-neon mb-4">Earth Science Tutoring</h3>
            <p className="text-white/80 mb-4">Study rocks, minerals, weather, astronomy, and Earth's systems.</p>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>• Rocks, minerals & plate tectonics</li>
              <li>• Weather & climate</li>
              <li>• Astronomy & solar system</li>
              <li>• Earth's history & fossils</li>
              <li>• Environmental science</li>
              <li>• Earth Science Regents prep</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-8">Science Tutoring FAQ</h2>
        <div className="space-y-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">Do you offer chemistry tutoring in NYC?</h3>
            <p className="text-white/80">Yes! I provide expert chemistry tutoring covering all topics including the Chemistry Regents exam. In-person throughout NYC and online via Zoom.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">Can you help with lab reports?</h3>
            <p className="text-white/80">Absolutely! I provide step-by-step templates for hypothesis, procedure, data tables, analysis, and conclusions. We'll master scientific writing together.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">What science Regents exams do you prepare students for?</h3>
            <p className="text-white/80">I prepare students for all four NY science Regents: Chemistry, Physics, Living Environment (Biology), and Earth Science. I teach test strategies and content mastery.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">My child is failing science - can you help?</h3>
            <p className="text-white/80">Yes! I start with fundamentals, identify knowledge gaps, and rebuild from the ground up. Most students see grade improvements within 6-8 weeks of consistent sessions.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">Do you help with AP science courses?</h3>
            <p className="text-white/80">Yes! I tutor AP Biology, AP Chemistry, and AP Physics. I'm familiar with the AP exam format and teach both content and exam strategies.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Excel in Science?</h2>
          <p className="text-xl text-white/80 mb-8">Start your science tutoring journey with a FREE trial session.</p>
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
