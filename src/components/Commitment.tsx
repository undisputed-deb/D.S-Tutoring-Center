import { Card } from "@/components/ui/card";
import { Heart, Ear, Users2, Zap, TrendingUp } from "lucide-react";

export const Commitment = () => {
  const commitments = [
    {
      icon: Ear,
      text: "I actively listen to parents and guardians, understanding each family's unique circumstances"
    },
    {
      icon: Users2,
      text: "I adapt my teaching style to fit every student's needs"
    },
    {
      icon: Zap,
      text: "I give 120% effort to deliver the best results for every student"
    },
    {
      icon: TrendingUp,
      text: "Monthly progress assessments tailored to each student's schedule"
    },
    {
      icon: Heart,
      text: "Proven strategies that build confidence and achieve results"
    }
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full">
                <Heart className="w-6 h-6 text-primary animate-pulse" />
                <span className="text-primary font-semibold">My Commitment</span>
              </div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
              Try Just 1-2 Classes -<br />
              <span className="text-primary">You'll See Why I'm The Best Choice</span>
            </h2>
            
            <p className="text-xl text-muted-foreground">
              For Your Child's Success
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {commitments.map((item, index) => (
              <Card 
                key={index}
                className="p-6 card-3d hover:shadow-card-hover transition-all duration-300 border-2 border-transparent hover:border-primary/20 bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground leading-relaxed pt-2">
                    {item.text}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-hero text-white p-10 sm:p-12 text-center shadow-card-hover">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Experience the Difference
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of students who have transformed their academic journey with personalized attention and proven results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:9173126589"
                className="inline-flex items-center justify-center bg-white text-primary hover:bg-white/90 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                📞 Call Now: 917-312-6589
              </a>
              <a 
                href="mailto:debashrestha222@gmail.com"
                className="inline-flex items-center justify-center bg-accent text-white hover:bg-accent/90 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                📧 Email Me
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
