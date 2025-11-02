import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Target, Trophy, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Simple static background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-purple-900/30 to-slate-900/50"></div>
        {/* Static orb decoration */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96">
          <div className="w-full h-full bg-gradient-to-br from-orange-500/20 to-purple-600/20 blur-3xl"></div>
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px]">
          <div className="w-full h-full bg-gradient-to-tr from-blue-500/20 to-indigo-600/20 blur-3xl"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
          <div className="w-full h-full bg-gradient-to-bl from-purple-500/15 to-pink-600/15 blur-3xl"></div>
        </div>
      </div>

      {/* Subtle grain texture */}
      <div className="absolute inset-0 grain pointer-events-none opacity-20"></div>

      {/* Year markers */}
      <div className="absolute top-8 left-8 text-white/60 text-sm font-mono tracking-wider z-20">
        2025
      </div>
      <div className="absolute top-8 right-8 text-white/60 text-sm font-mono tracking-wider z-20">
        NYC
      </div>

      {/* Stats Cards - Desktop only */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <div className="space-y-6">
          {/* Students Count */}
          <div className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
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
          <div className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
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

          {/* Commitment */}
          <div className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
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
        <div className="text-center max-w-7xl mx-auto">
          {/* Title */}
          <div className="mb-8">
            <h1 className="font-sans text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-tight tracking-wide drop-shadow-2xl">
              <span className="inline-block">D.S</span>
              <span className="inline-block ml-4">TUTORING</span>
              <span className="block mt-4 relative">
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-orange-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    CENTER
                  </span>
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="font-sans text-xl sm:text-2xl lg:text-3xl text-white/90 mb-4 max-w-4xl mx-auto font-light tracking-wide drop-shadow-lg">
            Transform your academic journey with personalized tutoring that
            delivers results
          </p>

          {/* Tagline */}
          <p className="font-mono text-sm sm:text-base lg:text-lg text-white/70 mb-12 uppercase tracking-widest font-semibold">
            Building Bright Futures
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => scrollToSection("programs")}
              className="group relative px-10 py-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>

            <button
              onClick={toggleWhyChoose}
              className="group relative px-10 py-6 glass text-white font-bold text-lg rounded-full shadow-xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 border-2 border-white/30 hover:border-white/60"
            >
              <span className="relative z-10">Learn More</span>
            </button>

            <button
              onClick={() => scrollToSection("pricing")}
              className="group relative px-10 py-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                View Pricing
                <BookOpen className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Simple scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2 glass">
          <div className="w-1 h-3 bg-gradient-to-b from-orange-400 to-purple-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};