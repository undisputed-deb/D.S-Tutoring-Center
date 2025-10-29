import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WhyChoose } from "@/components/WhyChoose";
import { ProfileImage } from "@/components/ProfileImage";
import { About } from "@/components/About";
import { TeachingPhilosophy } from "@/components/TeachingPhilosophy";
import { Programs } from "@/components/Programs";
import { Commitment } from "@/components/Commitment";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="why-choose">
        <WhyChoose />
      </div>
      <ProfileImage />
      <About />
      <TeachingPhilosophy />
      <div id="programs">
        <Programs />
      </div>
      <Commitment />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
