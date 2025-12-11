"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="font-black text-xl">D.S Tutoring Center</div>
            <div className="mt-2 text-white/70">Excellence in Education</div>
            <div className="mt-4 flex items-center gap-3 text-white/60">
              <a href="#" className="hover:text-white underline-offset-4 hover:underline">
                Portfolio
              </a>
              <a href="#" className="hover:text-white underline-offset-4 hover:underline">
                Social
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3"
          >
            <FooterLink href="#programs" label="Programs" />
            <FooterLink href="#about" label="About" />
            <FooterLink href="#testimonials" label="Testimonials" />
            <FooterLink href="#faq" label="FAQ" />
            <FooterLink href="#contact" label="Contact" />
            <FooterLink href="#pricing" label="Pricing" />
          </motion.nav>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="font-semibold">Contact</div>
            <div className="mt-2 text-white/70">NYC, New York</div>
            <a href="tel:19173126589" className="block mt-2 text-white/90 hover:underline">
              917-312-6589
            </a>
            <a
              href="mailto:debashrestha222@gmail.com"
              className="block mt-1 text-white/90 hover:underline"
            >
              debashrestha222@gmail.com
            </a>
            <div className="mt-2 text-white/60">Hours: Mon–Sun, 9am–8pm</div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-white/60 text-sm">
          <div>© {new Date().getFullYear()} D.S Tutoring Center. Built with ❤️.I make learning fun.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="text-white/80 hover:text-white transition-colors">
      {label}
    </a>
  );
}
