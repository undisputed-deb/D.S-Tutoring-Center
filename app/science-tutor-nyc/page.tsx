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
        <h2 className="text-3xl md:text-4xl font-black mb-8">My Science Tutoring Method</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 bg-[#0a0a0a] p-6">
            <h3 className="text-lg font-bold mb-3">Concept Mastery</h3>
            <p className="text-white/80 text-sm">I ensure you understand the "why" behind scientific concepts, not just memorization.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0a0a0a] p-6">
            <h3 className="text-lg font-bold mb-3">Lab Skills</h3>
            <p className="text-white/80 text-sm">Master lab techniques, data analysis, and scientific method for exams and coursework.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0a0a0a] p-6">
            <h3 className="text-lg font-bold mb-3">Regents Prep</h3>
            <p className="text-white/80 text-sm">Specialized preparation for all NY Regents science exams with proven strategies.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-8">Science Tutoring FAQ</h2>
        <div className="space-y-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">Do you offer chemistry tutoring in NYC?</h3>
            <p className="text-white/80">Yes! I provide expert chemistry tutoring covering all topics including the Chemistry Regents exam.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">Can you help with physics homework?</h3>
            <p className="text-white/80">Absolutely. I help with homework, test prep, and building fundamental physics understanding.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">What science Regents exams do you prepare students for?</h3>
            <p className="text-white/80">I prepare students for Chemistry, Physics, Living Environment (Biology), and Earth Science Regents exams.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Excel in Science?</h2>
          <p className="text-xl text-white/80 mb-8">Start your science tutoring journey with a free trial session.</p>
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
