import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Target, Trophy, Users } from "lucide-react";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const heroContentRef = useRef<HTMLDivElement>(null);
  const particleContainerRef = useRef<HTMLDivElement>(null);
  const parallaxBgRef = useRef<HTMLDivElement>(null);
  const parallaxMidRef = useRef<HTMLDivElement>(null);
  const parallaxFrontRef = useRef<HTMLDivElement>(null);

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

  // Advanced parallax scrolling with 3D depth
  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      const scrolled = window.pageYOffset;

      if (parallaxBgRef.current) {
        parallaxBgRef.current.style.transform = `translateZ(-2px) scale(1.5) translateY(${scrolled * 0.5}px)`;
      }
      if (parallaxMidRef.current) {
        parallaxMidRef.current.style.transform = `translateZ(-1px) scale(1.2) translateY(${scrolled * 0.3}px)`;
      }
      if (parallaxFrontRef.current) {
        parallaxFrontRef.current.style.transform = `translateZ(0px) scale(1) translateY(${scrolled * 0.1}px)`;
      }
      if (heroContentRef.current) {
        heroContentRef.current.style.transform = `translateY(${scrolled * -0.2}px) scale(${1 - scrolled * 0.0003})`;
        heroContentRef.current.style.opacity = `${1 - scrolled * 0.001}`;
      }

      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener("scroll", requestTick);

    return () => window.removeEventListener("scroll", requestTick);
  }, []);

  // Mouse parallax effect for 3D depth
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;

      if (heroContentRef.current) {
        heroContentRef.current.style.transform = `perspective(1000px) rotateY(${mouseX * 5}deg) rotateX(${-mouseY * 5}deg)`;
      }

      // Move floating orbs based on mouse
      const orbs = document.querySelectorAll(".morph-shape");
      orbs.forEach((orb, index) => {
        const speed = (index + 1) * 10;
        (orb as HTMLElement).style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate floating particles
  useEffect(() => {
    const createParticle = () => {
      if (!particleContainerRef.current) return;

      const particle = document.createElement("div");
      particle.className = "particle";

      const size = Math.random() * 4 + 2;
      const left = Math.random() * 100;
      const delay = Math.random() * 10;
      const duration = Math.random() * 10 + 10;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${left}%`;
      particle.style.background = `radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)`;
      particle.style.borderRadius = "50%";
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;

      particleContainerRef.current.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, duration * 1000);
    };

    // Create particles periodically
    const interval = setInterval(createParticle, 500);

    // Initial particles
    for (let i = 0; i < 20; i++) {
      setTimeout(createParticle, i * 100);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen perspective-container overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Multi-layer parallax background */}
      <div className="parallax-layer parallax-bg" ref={parallaxBgRef}>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-purple-900/30 to-slate-900/50"></div>
      </div>

      {/* Animated 3D orbs in mid layer */}
      <div className="parallax-layer parallax-mid" ref={parallaxMidRef}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 morph-shape">
          <div className="w-full h-full bg-gradient-to-br from-orange-500/20 to-purple-600/20 blur-3xl animate-pulse"></div>
        </div>
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] morph-shape"
          style={{ animationDelay: "2s" }}
        >
          <div className="w-full h-full bg-gradient-to-tr from-blue-500/20 to-indigo-600/20 blur-3xl animate-pulse"></div>
        </div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] morph-shape"
          style={{ animationDelay: "4s" }}
        >
          <div className="w-full h-full bg-gradient-to-bl from-purple-500/15 to-pink-600/15 blur-3xl animate-pulse"></div>
        </div>
      </div>

      {/* Floating particles */}
      <div
        className="parallax-layer parallax-front"
        ref={parallaxFrontRef}
      ></div>
      <div
        id="particleContainer"
        ref={particleContainerRef}
        className="absolute inset-0 pointer-events-none"
      ></div>

      {/* Grain texture overlay */}
      <div className="absolute inset-0 grain pointer-events-none"></div>

      {/* Year markers with 3D effect */}
      <div className="absolute top-8 left-8 text-white/60 text-sm font-mono tracking-wider z-20 float-3d">
        <span className="shimmer-effect">2025</span>
      </div>
      <div
        className="absolute top-8 right-8 text-white/60 text-sm font-mono tracking-wider z-20 float-3d"
        style={{ animationDelay: "0.5s" }}
      >
        <span className="shimmer-effect">NYC</span>
      </div>

      {/* Floating Stats Cards - Left Side */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <div
          className="space-y-6 opacity-0"
          style={{ animation: "fade-in-up 1s ease-out 1.2s forwards" }}
        >
          {/* Students Count */}
          <div className="glass p-6 rounded-2xl float-3d hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">80+</p>
                <p className="text-white/70 text-sm">Active Students</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div
            className="glass p-6 rounded-2xl float-3d hover:scale-105 transition-transform duration-300"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">2.5+</p>
                <p className="text-white/70 text-sm">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Success Rate */}
          <div
            className="glass p-6 rounded-2xl float-3d hover:scale-105 transition-transform duration-300"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">120%</p>
                <p className="text-white/70 text-sm">Commitment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-7xl mx-auto" ref={heroContentRef}>
          {/* Animated title with 3D depth */}
          <div className="mb-8 perspective-container">
            <h1
              className="font-sans text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-tight tracking-wide drop-shadow-2xl"
              style={{
                transform: "rotateX(5deg) translateZ(50px)",
                transformStyle: "preserve-3d",
              }}
            >
              <span className="inline-block hover:scale-110 transition-transform duration-300">
                D.S
              </span>
              <span className="inline-block hover:scale-110 transition-transform duration-300 ml-4">
                TUTORING
              </span>
              <span className="block mt-4 relative">
                <span className="relative inline-block text-glow">
                  <span className="relative z-10 bg-gradient-to-r from-orange-400 via-purple-500 to-blue-500 bg-clip-text text-transparent gradient-animated">
                    CENTER
                  </span>
                  {/* 3D glow effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 opacity-50 blur-2xl -z-10 animate-pulse"></span>
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle with fade-in animation */}
          <p
            className="font-sans text-xl sm:text-2xl lg:text-3xl text-white/90 mb-4 max-w-4xl mx-auto font-light tracking-wide drop-shadow-lg opacity-0"
            style={{ animation: "fade-in-up 1s ease-out 0.5s forwards" }}
          >
            Transform your academic journey with personalized tutoring that
            delivers results
          </p>

          {/* Tagline with typing effect */}
          <p
            className="font-mono text-sm sm:text-base lg:text-lg text-white/70 mb-12 uppercase tracking-widest font-semibold opacity-0"
            style={{ animation: "fade-in-up 1s ease-out 0.7s forwards" }}
          >
            <span className="shimmer-effect">Building Bright Futures</span>
          </p>

          {/* 3D Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0"
            style={{ animation: "fade-in-up 1s ease-out 0.9s forwards" }}
          >
            <button
              onClick={() => scrollToSection("programs")}
              className="group relative px-10 py-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 neon-button perspective-container"
            >
              <span className="relative z-10 flex items-center">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>

            <button
              onClick={toggleWhyChoose}
              className="group relative px-10 py-6 glass text-white font-bold text-lg rounded-full shadow-xl hover:shadow-white/20 transform hover:scale-105 transition-all duration-300 border-2 border-white/30 hover:border-white/60"
            >
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
      </div>

      {/* 3D Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 perspective-container">
        <div className="float-3d">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2 glass">
            <div className="w-1 h-3 bg-gradient-to-b from-orange-400 to-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      
    </section>
  );
};