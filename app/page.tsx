import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// Remove direct imports
// import StickyStatsBar from "@/components/StickyStatsBar";
// import About from "@/components/About";
// import Programs from "@/components/Programs";
// import Process from "@/components/Process";
// import Testimonials from "@/components/Testimonials";
// import Features from "@/components/Features";
// import Pricing from "@/components/Pricing";
// import FAQ from "@/components/FAQ";
// import ContactCTA from "@/components/ContactCTA";
// import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
// import CustomCursor from "@/components/CustomCursor";

const StickyStatsBar = dynamic(() => import("@/components/StickyStatsBar"), {
  loading: () => <div className="h-16" />,
});
const About = dynamic(() => import("@/components/About"), {
  loading: () => <PlaceholderSection label="ABOUT" />,
});
const Programs = dynamic(() => import("@/components/Programs"), {
  loading: () => <PlaceholderSection label="PROGRAMS" />,
});
// const Process = dynamic(() => import("@/components/Process"), {
//   loading: () => <PlaceholderSection label="PROCESS" />,
// });
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <PlaceholderSection label="TESTIMONIALS" />,
});
const Features = dynamic(() => import("@/components/Features"), {
  loading: () => <PlaceholderSection label="FEATURES" />,
});
const Pricing = dynamic(() => import("@/components/Pricing"), {
  loading: () => <PlaceholderSection label="PRICING" />,
});
const FAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => <PlaceholderSection label="FAQ" />,
});
const ContactCTA = dynamic(() => import("@/components/ContactCTA"), {
  loading: () => <PlaceholderSection label="CONTACT" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-24 border-t border-white/10" />,
});
const CustomCursor = dynamic(() => import("@/components/CustomCursor"));
const SubjectLinks = dynamic(() => import("@/components/SubjectLinks"), {
  loading: () => <PlaceholderSection label="SUBJECTS" />,
});

function PlaceholderSection({ label }: { label: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24">
      <div className="h-28 w-full rounded-2xl border border-white/10 bg-white/5 animate-pulse flex items-center justify-center">
        <span className="text-white/40 text-xs tracking-[0.25em]">{label}</span>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <CustomCursor />
      <Hero />
      <StickyStatsBar />
      <SubjectLinks />
      <About />
      <Testimonials />
      <Programs />
      <Features />
      <Pricing />
      <FAQ />
      <ContactCTA />
      <Footer />
      <section className="h-24" />
    </div>
  );
}
