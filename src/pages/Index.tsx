import { lazy, Suspense } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Reviews } from "@/components/Reviews";

// For named exports, we need to destructure in the lazy import
const WhyChoose = lazy(() => import("@/components/WhyChoose").then(module => ({ default: module.WhyChoose })));
const ProfileImage = lazy(() => import("@/components/ProfileImage").then(module => ({ default: module.ProfileImage })));
const About = lazy(() => import("@/components/About").then(module => ({ default: module.About })));
const TeachingPhilosophy = lazy(() => import("@/components/TeachingPhilosophy").then(module => ({ default: module.TeachingPhilosophy })));
const Programs = lazy(() => import("@/components/Programs").then(module => ({ default: module.Programs })));
const Commitment = lazy(() => import("@/components/Commitment").then(module => ({ default: module.Commitment })));
const Pricing = lazy(() => import("@/components/Pricing").then(module => ({ default: module.Pricing })));
const ContactForm = lazy(() => import("@/components/ContactForm").then(module => ({ default: module.ContactForm })));

// Loading spinner that shows while components are loading
const LoadingSection = () => (
  <div className="h-40 flex items-center justify-center bg-slate-900">
    <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* 1. Navigation */}
      <Navigation />
      
      {/* 2. Hero */}
      <Hero />
      
      {/* 3. Reviews */}
      <Reviews />
      
      {/* 4. Profile Image */}
      <Suspense fallback={<LoadingSection />}>
        <ProfileImage />
      </Suspense>
      
      {/* 5. About Me */}
      <Suspense fallback={<LoadingSection />}>
        <About />
      </Suspense>
      
      {/* 6. Programs */}
      <div id="programs">
        <Suspense fallback={<LoadingSection />}>
          <Programs />
        </Suspense>
      </div>
      
      {/* 7. Why Choose */}
      <div id="why-choose">
        <Suspense fallback={<LoadingSection />}>
          <WhyChoose />
        </Suspense>
      </div>
      
      {/* 8. Teaching Philosophy */}
      <Suspense fallback={<LoadingSection />}>
        <TeachingPhilosophy />
      </Suspense>
      
      {/* 9. Contact Form */}
      <Suspense fallback={<LoadingSection />}>
        <ContactForm />
      </Suspense>
      
      {/* 10. Commitment */}
      <Suspense fallback={<LoadingSection />}>
        <Commitment />
      </Suspense>
      
      {/* 11. Pricing */}
      <Suspense fallback={<LoadingSection />}>
        <Pricing />
      </Suspense>
      
      {/* 12. Footer */}
      <Footer />
    </div>
  );
};

export default Index;