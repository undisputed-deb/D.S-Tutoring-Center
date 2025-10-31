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
      {/* Navigation and Hero load immediately (not lazy) */}
      <Navigation />
      <Hero />
      
      {/* All other sections load when you scroll to them */}
      <div id="why-choose">
        <Suspense fallback={<LoadingSection />}>
          <WhyChoose />
        </Suspense>
      </div>
      
      <Suspense fallback={<LoadingSection />}>
        <ProfileImage />
      </Suspense>
      
      <Suspense fallback={<LoadingSection />}>
        <About />
      </Suspense>
      
      <div id="programs">
        <Suspense fallback={<LoadingSection />}>
          <Programs />
        </Suspense>
      </div>
      
      {/* Reviews Section - Shows student testimonials */}
      <Reviews />
      
      <Suspense fallback={<LoadingSection />}>
        <TeachingPhilosophy />
      </Suspense>
      
      <Suspense fallback={<LoadingSection />}>
        <ContactForm />
      </Suspense>
      
      <Suspense fallback={<LoadingSection />}>
        <Commitment />
      </Suspense>
      
      <Suspense fallback={<LoadingSection />}>
        <Pricing />
      </Suspense>
      
      {/* Footer loads immediately */}
      <Footer />
    </div>
  );
};

export default Index;