"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      aria-label="Contact CTA"
      className="relative py-20 md:py-28 bg-black spotlight"
    >
      <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-6 lg:px-8 text-center">
        <div className="text-xs tracking-[0.25em] text-white/60">READY TO START?</div>
        <h3
          className="mt-3 font-black text-balance"
          style={{ fontSize: "clamp(3rem, 8vw, 8rem)", lineHeight: 0.95 }}
        >
          Let&apos;s Build Your Success Story
        </h3>
        <p
          className="mx-auto mt-5 max-w-2xl text-white/70"
          style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.6 }}
        >
          Try 1–2 free classes. No commitment. Just results.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <a
            href="tel:19173126589"
            className="btn btn-primary-gradient btn-lg glow-pulse"
          >
            BOOK FREE TRIAL
          </a>
        </motion.div>

        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          <a href="tel:19173126589" className="text-white text-lg hover:underline">
            917-312-6589
          </a>
          <span className="hidden md:inline-block text-white/40">•</span>
          <a
            href="mailto:debashrestha222@gmail.com"
            className="text-white text-lg hover:underline"
          >
            debashrestha222@gmail.com
          </a>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <ContactForm />
        </motion.div>
      </div>

      {/* Grid background */}
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-30"></div>
    </section>
  );
}
