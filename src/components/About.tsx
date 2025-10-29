import { GraduationCap, Award, Users, Sparkles } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl sm:text-6xl font-black text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 sm:p-12 border-2 border-transparent hover:border-blue-500/30 transition-all duration-500 overflow-hidden group">
            
            {/* Gradient background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            
            <div className="relative flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-foreground flex items-center gap-2">
                      Meet Deb
                      <Sparkles className="w-6 h-6 text-yellow-500" />
                    </h3>
                    <p className="text-lg text-muted-foreground font-medium">Your Dedicated Tutor</p>
                  </div>
                </div>

                <p className="text-lg text-foreground leading-relaxed">
                  I'm a <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Software Engineer at Mutual of Omaha</span> with over <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">2.5+ years of tutoring excellence</span>. Previously, I honed my teaching skills at Bobby Tariq Tutoring Center, and currently I'm teaching <span className="relative inline-block">
                  <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-2xl">80+ students</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></span>
                  </span> across all subjects, where I developed a proven methodology for student success.
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-6 space-y-4 border-2 border-blue-200 dark:border-blue-800 shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2 text-lg">Teaching Expertise</h4>
                      <p className="text-sm text-muted-foreground font-medium">
                        Grades 5-8 • State Tests • SHSAT • SAT (Math + ELA)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2 text-lg">Regents Subjects</h4>
                      <p className="text-sm text-muted-foreground font-medium">
                        Algebra 1 & 2 • Geometry • ELA • Chemistry • Physics • Living Environment • Social Studies • Earth Science
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px] rounded-2xl shadow-xl">
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6">
                    <p className="text-lg text-foreground font-semibold italic">
                      "Homework and school quizzes are my <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">TOP priority</span>. With extensive experience and a proven track record, I don't just teach - I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">transform students into confident learners</span>."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};