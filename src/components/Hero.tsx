import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleWhyChoose = () => {
    const element = document.getElementById("why-choose");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Year markers */}
      <div className="absolute top-8 left-8 text-white/60 text-sm font-mono animate-fade-in tracking-wider">
        2025
      </div>
      <div className="absolute top-8 right-8 text-white/60 text-sm font-mono animate-fade-in tracking-wider">
        NYC
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Main title with glassmorphism effect */}
          <div className="relative inline-block mb-8">
            <h1 className="font-sans text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-tight tracking-wide drop-shadow-2xl">
              D.S TUTORING{" "}
              {/* Added a space here */}
              {/* Glassmorphism 3D overlay on CENTER */}
              <span className="glass-overlay">CENTER</span>
            </h1>
            
            {/* Subtle grain texture */}
            <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none mix-blend-overlay"></div>
          </div>
          
          <p className="font-sans text-xl sm:text-2xl text-white/90 mb-4 max-w-4xl mx-auto font-light tracking-wide drop-shadow-lg">
            Transform your academic journey with personalized tutoring that delivers results
          </p>

          {/* Bottom tagline - using mono for a modern tech feel */}
          <p className="font-mono text-sm sm:text-base text-white/70 mb-12 uppercase tracking-widest font-semibold">
            Building Bright Futures
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection("programs")}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-10 py-6 text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 border-2 border-orange-400/50"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={toggleWhyChoose}
              className="bg-white/15 backdrop-blur-md text-white hover:bg-white/25 hover:text-white font-semibold px-10 py-6 text-lg rounded-full transition-all duration-300 border-2 border-white/40 hover:border-white/60 shadow-xl"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/80 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};