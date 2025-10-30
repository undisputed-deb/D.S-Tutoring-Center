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
import { ContactForm } from "@/components/ContactForm";


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
      <div id="programs">
        <Programs />
      </div>
      <ContactForm />
      <Commitment />
      <Pricing />
      <TeachingPhilosophy />
      <Footer />
    </div>
  );
};

export default Index;
