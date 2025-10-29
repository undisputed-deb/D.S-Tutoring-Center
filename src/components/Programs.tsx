import { Card } from "@/components/ui/card";
import { FileCheck, Trophy, GraduationCap, BookOpen, Sparkles } from "lucide-react";

export const Programs = () => {
  const programs = [
    {
      id: "state-test",
      icon: FileCheck,
      title: "State Test Mastery",
      subtitle: "Topic-by-Topic Excellence",
      description: "I take a systematic, no-cramming approach to State Tests for both Math and ELA. For Math, I give the concept, logic and formulas first , understand the logic behind them, and then drill actual test questions until they're second nature and then rest of the stuffs is homework.  For ELA, we break down reading strategies and deconstruct exactly what makes a high-scoring written answer. My method is simple: we build a strong foundation and practice every topic until it's perfected, so you walk in with total confidence.",
      color: "from-cyan-500 via-blue-500 to-indigo-600",
      shadow: "shadow-cyan-500/50",
      iconBg: "bg-gradient-to-br from-cyan-400 to-blue-600"
    },
    {
      id: "shsat",
      icon: Trophy,
      title: "SHSAT Prep",
      subtitle: "Competitive Excellence",
      description: "The SHSAT is an elimination exam that demands absolute dedication from both student and teacher. This exam has 2 modules (Math + ELA), each with 2 parts. I teach the complete curriculum, extensive time management strategies, exam circumstances handling, and the smart approach: easy questions first, then tackle the harder ones. I strictly follow the SHSAT handbook because the administration consistently uses similar question patterns. Formula mastery → Logic building → Examples → In-class practice → Practice test homework. Alignment and commitment = Success.",
      color: "from-purple-500 via-fuchsia-500 to-pink-600",
      shadow: "shadow-purple-500/50",
      iconBg: "bg-gradient-to-br from-purple-400 to-pink-600"
    },
    {
      id: "sat",
      icon: GraduationCap,
      title: "SAT Preparation",
      subtitle: "Your Gateway to Top Colleges",
      description: "My SAT Preparation service is your complete gateway to top colleges, as a high score opens critical doors to selective schools, scholarships, and optimal course placement. I provide comprehensive, one-on-one coaching for both the digital Reading/Writing and the adaptive Math sections. We deconstruct the test using a proven, systematic 5-step math method: first, we achieve formula mastery so you know them cold; next, we focus on logic building to understand how the test-makers think; then, we walk through in-depth examples to spot common traps. This is followed by in-class practice where I correct mistakes in real-time, and it's finalized with practice test homework using the best resources, including official College Board tests and rigorous material from Barron's, The Princeton Review, and Khan Academy. We apply this same systematic rigor to the Reading/Writing section, mastering grammar and critical reading strategies. But my support doesn't end with the test; I am your partner for the entire application journey. I provide expert guidance on navigating the Common App, crafting a compelling personal essay, and strategically prioritizing your extracurricular activities to build a powerful narrative for admissions officers.",
      color: "from-emerald-500 via-green-500 to-teal-600",
      shadow: "shadow-green-500/50",
      iconBg: "bg-gradient-to-br from-emerald-400 to-teal-600"
    },
    
   {
      id: "regents",
      icon: BookOpen,
      title: "Regents Exams",
      subtitle: "Your Academic Transcript Matters",
      description: "These are the scores every college will see. I cover all key subjects: Algebra 1, Algebra 2, Geometry, ELA, Chemistry, Physics, Living Environment, and Earth Science. My proven 5-step method builds mastery: we master core concepts, build logic, and walk through examples. But my top priority is practice. We do lots of Regents packet practice together in class, and you master it all with targeted homework using real, past Regents exams. We don't just pass - we excel.",
      color: "from-orange-500 via-amber-500 to-yellow-600",
      shadow: "shadow-orange-500/50",
      iconBg: "bg-gradient-to-br from-orange-400 to-yellow-600"
    },

    {
      id: "ap",
      icon: Sparkles,
      title: "Advanced Placement",
      subtitle: "College-Level Excellence",
      description: "Challenge yourself with college-level coursework. Master complex concepts through structured learning: comprehensive concept building → formula mastery → strategic problem-solving → intensive practice → challenging homework assignments. Elevate your academic profile.",
      color: "from-rose-500 via-pink-500 to-red-600",
      shadow: "shadow-rose-500/50",
      iconBg: "bg-gradient-to-br from-rose-400 to-red-600"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-background to-slate-50 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl sm:text-6xl font-black text-foreground mb-4 tracking-tight">
              Our Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tutoring programs designed for every academic goal
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card 
                id={program.id}
                key={index}
                className="group relative overflow-hidden card-hover-float hover:shadow-2xl transition-all duration-500 border-2 border-slate-200 hover:border-transparent cursor-pointer bg-white dark:bg-slate-800"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Vibrant gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${program.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 ${program.shadow}`}></div>
                
                <div className="relative p-8 space-y-4 group-hover:text-white transition-colors duration-500">
                  {/* Icon with enhanced animation */}
                  <div className={`w-16 h-16 ${program.iconBg} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl group-hover:shadow-2xl`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-white mb-1 transition-colors duration-500">
                      {program.title}
                    </h3>
                    <p className="text-sm font-semibold text-primary group-hover:text-white/90 transition-colors duration-500">
                      {program.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground group-hover:text-white/90 leading-relaxed transition-colors duration-500">
                    {program.description}
                  </p>

                  {/* Hover indicator with arrow animation */}
                  <div className="flex items-center gap-2 text-primary group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-sm font-semibold">Learn more</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${program.color} rounded-bl-full`}></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};