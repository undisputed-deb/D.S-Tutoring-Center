import debProfile from "@/assets/deb-profile.jpg";

export const ProfileImage = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center animate-fade-in">
          <div className="relative group">
            {/* Animated border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-float"></div>
            
            {/* Image container */}
            <div className="relative">
              <img
                src={debProfile}
                alt="Deb - Professional Tutor at D.S Tutoring Center"
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover shadow-card-hover border-4 border-white transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};