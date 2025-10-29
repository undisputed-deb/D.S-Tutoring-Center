import { Check, BookOpenCheck, Target, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export const TeachingPhilosophy = () => {
  const steps = [
    {
      icon: BookOpenCheck,
      title: "Master the Fundamentals",
      description: "Master all concepts, basics, logic, and formulas with deep understanding",
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      iconBg: "bg-gradient-to-br from-cyan-400 to-indigo-600",
      shadow: "shadow-cyan-500/50"
    },
    {
      icon: Target,
      title: "Practice Together",
      description: "Work through practice problems together in class with guided support",
      gradient: "from-orange-400 via-red-500 to-pink-600",
      iconBg: "bg-gradient-to-br from-orange-400 to-pink-600",
      shadow: "shadow-orange-500/50"
    },
    {
      icon: TrendingUp,
      title: "Reinforce & Excel",
      description: "Reinforce learning with targeted homework assignments for mastery",
      gradient: "from-emerald-400 via-green-500 to-teal-600",
      iconBg: "bg-gradient-to-br from-emerald-400 to-teal-600",
      shadow: "shadow-emerald-500/50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-100 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl sm:text-6xl font-black text-foreground mb-4">
              Teaching Philosophy
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven three-step approach that transforms students into confident learners
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className="group relative p-8 bg-white dark:bg-slate-800 hover:shadow-2xl transition-all duration-500 border-2 border-slate-200 dark:border-slate-700 hover:border-transparent overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 ${step.shadow}`}></div>
                
                <div className="relative text-center space-y-4 group-hover:text-white transition-colors duration-500">
                  <div className={`w-16 h-16 ${step.iconBg} rounded-2xl flex items-center justify-center mx-auto shadow-xl transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-400 group-hover:from-white group-hover:to-white text-white group-hover:text-slate-900 font-black text-xl shadow-lg transform group-hover:scale-110 transition-all duration-500">
                    {index + 1}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-white transition-colors duration-500">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground group-hover:text-white/90 transition-colors duration-500">
                    {step.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <div className={`absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr ${step.gradient} rounded-tr-full`}></div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white p-10 sm:p-12 shadow-2xl border-0">
            
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <div className="relative max-w-3xl mx-auto space-y-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black">My Commitment to You</h3>
              </div>
              
              <p className="text-xl sm:text-2xl text-center leading-relaxed font-medium">
                "I'm always here for my students and their families. My goal is simple: give <span className="font-black text-yellow-300 text-3xl">120%</span> to ensure every student succeeds. Your child's success is my success."
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <a href="tel:9173126589" className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full text-lg font-bold transition-all duration-300 border-2 border-white/40">
                  📞 917-312-6589
                </a>
                <span className="hidden sm:inline text-white/60 text-2xl">•</span>
                <a href="mailto:debashrestha222@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full text-lg font-bold transition-all duration-300 border-2 border-white/40">
                  📧 debashrestha222@gmail.com
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};