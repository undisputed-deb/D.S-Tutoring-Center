"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links: Array<{ href: string; label: string }> = [
  { href: "#programs", label: "Programs" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 24);
      setHidden(y > lastY && y > 120);
      setLastY(y);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden ? -80 : 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`mx-auto max-w-7xl px-4 md:px-6 lg:px-8 ${
            scrolled ? "py-3" : "py-4"
          }`}
        >
          <div
            className={`flex items-center justify-between rounded-full border ${
              scrolled
                ? "border-white/10 bg-black/70 backdrop-blur-md"
                : "border-white/10 bg-transparent"
            } px-4 md:px-6 py-3 transition-colors`}
          >
            {/* Left: Logo */}
            <a href="#" className="flex items-center">
              <span className="sr-only">D.S Tutoring Center</span>
              <Image
                src="/D.S Tutoring Center Logo.jpeg"
                alt="D.S Tutoring Center Logo"
                width={50}
                height={50}
                className="h-10 w-auto md:h-12"
                priority
              />
            </a>

            {/* Center: Links */}
            <nav className="hidden md:flex items-center gap-6">
              {links.map((l) => (
                <a key={l.href} className="nav-link" href={l.href}>
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Right: Contact CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden md:inline-flex btn btn-outline btn-lg"
                aria-label="Contact D.S Tutoring Center"
              >
                CONTACT
              </a>
              <button
                aria-label="Open menu"
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/90 hover:text-white hover:border-white/30 transition"
                onClick={() => setOpen(true)}
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute right-4 top-4">
              <button
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white hover:border-white/30"
                onClick={() => setOpen(false)}
              >
                <X size={22} />
              </button>
            </div>
            <div className="flex min-h-full flex-col items-center justify-center gap-6 px-6">
              <a href="#" className="flex items-center">
                <Image
                  src="/D.S Tutoring Center Logo.jpeg"
                  alt="D.S Tutoring Center Logo"
                  width={80}
                  height={80}
                  className="h-20 w-auto"
                />
              </a>
              <nav className="flex flex-col items-center gap-4">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    className="text-2xl text-white/90 hover:text-white"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * i }}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>
              <a
                href="#contact"
                className="mt-6 btn btn-primary-gradient btn-lg w-full max-w-xs"
                onClick={() => setOpen(false)}
              >
                CONTACT
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
