import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { id: "state-test", label: "State Test" },
    { id: "shsat", label: "SHSAT" },
    { id: "sat", label: "SAT" },
    { id: "regents", label: "Regents" },
    { id: "ap", label: "AP" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-white/10 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <GraduationCap className={`w-6 h-6 transition-colors ${isScrolled ? "text-primary" : "text-white"}`} />
            <span className={`font-bold text-lg transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}>
              D.S Tutoring
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:scale-110 ${
                  isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-accent"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <Button
            size="sm"
            onClick={() => scrollToSection("programs")}
            className={`transition-all duration-300 transform hover:scale-105 ${
              isScrolled
                ? "bg-primary hover:bg-primary/90 shadow-lg"
                : "bg-accent hover:bg-accent/90 shadow-xl"
            } text-white`}
          >
            Programs
          </Button>
        </div>
      </div>
    </nav>
  );
};