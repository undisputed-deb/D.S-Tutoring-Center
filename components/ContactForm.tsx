"use client";

import { useState, FormEvent } from "react";
import { supabase } from "@/lib/supabase";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
          },
        ]);

      if (error) throw error;

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || "Failed to submit form. Please try again.");
      console.error("Error submitting contact form:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:border-transparent transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:border-transparent transition"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:border-transparent transition"
              placeholder="(123) 456-7890"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-white/90 mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:border-transparent transition"
              placeholder="How can we help?"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:border-transparent transition resize-none"
            placeholder="Tell us about your goals and how we can help..."
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full btn btn-primary-gradient btn-lg glow-pulse disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
        </button>

        {status === "success" && (
          <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-center">
            Thank you! We&apos;ll get back to you soon.
          </div>
        )}

        {status === "error" && (
          <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-center">
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  );
}
