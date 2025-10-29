import { BookOpen, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary-darker text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-8 h-8 text-accent" />
                <span className="text-2xl font-bold">D.S Tutoring Center</span>
              </div>
              <p className="text-white/80">
                Excellence in education through personalized tutoring and proven results.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Programs</h3>
              <ul className="space-y-2 text-white/80">
                <li className="hover:text-white transition-colors cursor-pointer">State Test Prep</li>
                <li className="hover:text-white transition-colors cursor-pointer">SHSAT Preparation</li>
                <li className="hover:text-white transition-colors cursor-pointer">SAT Tutoring</li>
                <li className="hover:text-white transition-colors cursor-pointer">Regents Exams</li>
                <li className="hover:text-white transition-colors cursor-pointer">AP Courses</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Contact</h3>
              <div className="space-y-3">
                <a 
                  href="tel:9173126589" 
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>917-312-6589</span>
                </a>
                
                <a 
                  href="mailto:debashrestha222@gmail.com" 
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>debashrestha222@gmail.com</span>
                </a>
                
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>New York, NY</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 mt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-white/60 text-sm">
              <p>© {new Date().getFullYear()} D.S Tutoring Center. All rights reserved.</p>
              <p>Built with excellence and dedication to student success</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
