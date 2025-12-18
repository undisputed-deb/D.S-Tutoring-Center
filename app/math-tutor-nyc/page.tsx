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

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-8">Math Subjects I Teach</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-gradient-electric mb-4">Algebra 1 & 2</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Linear equations</li>
              <li>• Quadratic functions</li>
              <li>• Polynomials</li>
              <li>• Exponents & radicals</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-gradient-fire mb-4">Geometry</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Proofs & theorems</li>
              <li>• Triangles & circles</li>
              <li>• Coordinate geometry</li>
              <li>• 3D shapes</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-gradient-purple mb-4">Pre-Calculus</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Trigonometry</li>
              <li>• Functions</li>
              <li>• Sequences & series</li>
              <li>• Limits</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-gradient-neon mb-4">Calculus</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Derivatives</li>
              <li>• Integrals</li>
              <li>• Applications</li>
              <li>• Series</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-gradient-electric mb-4">Statistics</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Probability</li>
              <li>• Data analysis</li>
              <li>• Distributions</li>
              <li>• Hypothesis testing</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-gradient-fire mb-4">Test Prep Math</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• SAT Math</li>
              <li>• SHSAT Math</li>
              <li>• State Tests</li>
              <li>• Regents exams</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-8">My Math Tutoring Approach</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-8">
            <h3 className="text-xl font-bold mb-4">Master the Fundamentals</h3>
            <p className="text-white/80 leading-relaxed">
              I don't just help with homework. I ensure you understand the underlying concepts and can apply them to any problem.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-8">
            <h3 className="text-xl font-bold mb-4">Practice Until Perfect</h3>
            <p className="text-white/80 leading-relaxed">
              Repetition builds mastery. We practice extensively until concepts become second nature.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-8">
            <h3 className="text-xl font-bold mb-4">Personalized Instruction</h3>
            <p className="text-white/80 leading-relaxed">
              Every student learns differently. I adapt my teaching style to match your learning pace and style.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-8">
            <h3 className="text-xl font-bold mb-4">Real Results</h3>
            <p className="text-white/80 leading-relaxed">
              95% success rate, 80+ students taught, 1200+ lessons delivered. Proven track record of excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-black mb-8">Math Tutoring FAQ</h2>
        <div className="space-y-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">Can I get a math tutor near me in NYC?</h3>
            <p className="text-white/80">Yes! I offer both in-person tutoring throughout NYC and online sessions via Zoom for maximum convenience.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">What grades do you tutor?</h3>
            <p className="text-white/80">I tutor students in grades 5-12, covering everything from elementary math through advanced calculus.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-3">How quickly will I see improvement?</h3>
            <p className="text-white/80">Most students see noticeable improvement within 4-6 weeks of consistent tutoring and practice.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Master Math?</h2>
          <p className="text-xl text-white/80 mb-8">Book your free trial session and start improving today.</p>
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
