import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Phone, Mail, CheckCircle2 } from "lucide-react";

export const Pricing = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
              <DollarSign className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">Flexible Pricing</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Invest In Your Child's Future
            </h2>
            <p className="text-xl text-muted-foreground">
              Personalized packages tailored to your needs
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>

          <Card className="p-10 sm:p-14 shadow-card-hover card-3d bg-gradient-card border-2 border-primary/10">
            <div className="text-center space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Custom Tutoring Plans
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Every student is unique, and so are their learning needs. I offer flexible pricing options that fit your schedule and budget.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 py-8">
                <div className="flex flex-col items-center gap-3 p-6 bg-primary/5 rounded-xl">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                  <p className="font-semibold text-foreground">One-on-One Sessions</p>
                </div>
                <div className="flex flex-col items-center gap-3 p-6 bg-primary/5 rounded-xl">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                  <p className="font-semibold text-foreground">Group Classes</p>
                </div>
                <div className="flex flex-col items-center gap-3 p-6 bg-primary/5 rounded-xl">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                  <p className="font-semibold text-foreground">Package Deals</p>
                </div>
              </div>

              <div className="bg-muted/50 rounded-xl p-8 space-y-6">
                <h4 className="text-2xl font-bold text-foreground">
                  Get Your Personalized Quote
                </h4>
                
                <p className="text-muted-foreground">
                  Contact me directly to discuss your child's needs and receive a customized pricing plan
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href="tel:9173126589" className="inline-flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      917-312-6589
                    </a>
                  </Button>
                  
                  <Button 
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href="mailto:debashrestha222@gmail.com" className="inline-flex items-center gap-2">
                      <Mail className="w-5 h-5" />
                      Email Me
                    </a>
                  </Button>
                </div>
              </div>

              <div className="text-sm text-muted-foreground pt-4">
                <p className="italic">
                  "I work with families to create payment plans that work for everyone. Your child's education shouldn't be limited by budget constraints."
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
