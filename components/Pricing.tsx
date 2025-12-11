"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

type Tier = {
  name: string;
  price: string;
  badge?: string;
  accent: "electric" | "fire" | "neon" | "purple";
  features: string[];
  popular?: boolean;
};

const tiers: Tier[] = [
  {
    name: "One-on-One Sessions",
    price: "Contact for pricing",
    badge: "RECOMMENDED",
    accent: "electric",
    features: ["Personalized lessons", "Homework priority", "Flexible scheduling"],
    popular: true,
  },
  {
    name: "Group Classes",
    price: "Contact for pricing",
    accent: "neon",
    features: ["Collaborative learning", "Topic-focused sessions", "Budget-friendly"],
  },
  {
    name: "Package Deals",
    price: "Contact for pricing",
    accent: "purple",
    features: ["Multi-session bundles", "Structured roadmaps", "Savings for families"],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24"
    >
      <div className="text-xs tracking-[0.25em] text-white/60">PRICING</div>
      <h3
        className="mt-2 font-black text-balance"
        style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
      >
        Custom Tutoring Plans
      </h3>
      <p className="mt-3 max-w-3xl text-white/70">
        Every student is unique, and so are their learning needs. I offer flexible pricing
        options that fit your schedule and budget.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {tiers.map((t, i) => (
          <PricingCard key={t.name} tier={t} index={i} />
        ))}
      </div>
    </section>
  );
}

function PricingCard({ tier, index }: { tier: Tier; index: number }) {
  const accentBg =
    tier.accent === "electric"
      ? "bg-gradient-electric"
      : tier.accent === "fire"
      ? "bg-gradient-fire"
      : tier.accent === "neon"
      ? "bg-gradient-neon"
      : "bg-gradient-purple";

  const CardInner = (
    <div
      className={`relative rounded-3xl border border-white/10 bg-black p-6 md:p-8 ${
        tier.popular ? "shadow-[0_0_40px_rgba(0,102,255,0.25)]" : ""
      }`}
    >
      {tier.badge && (
        <div className="absolute -top-3 left-6">
          <span className="inline-flex items-center rounded-full bg-white text-black px-3 py-1 text-xs font-semibold">
            {tier.badge}
          </span>
        </div>
      )}

      <div className="text-xs tracking-[0.2em] text-white/60">{tier.name}</div>
      <div className="mt-2 font-black" style={{ fontSize: "clamp(1.8rem, 6vw, 2.6rem)" }}>
        {tier.price}
      </div>

      <ul className="mt-6 space-y-3">
        {tier.features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-white/80">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white/5">
              <Check size={16} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <a
          href="#contact"
          className={`btn btn-lg w-full ${
            tier.popular ? "btn-primary-gradient" : "btn-outline"
          }`}
        >
          GET STARTED
        </a>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="relative"
    >
      {tier.popular ? (
        <div className={`gradient-border-animated rounded-3xl`}>
          {CardInner}
        </div>
      ) : (
        <div className="rounded-3xl">{CardInner}</div>
      )}
      {/* Accent underline */}
      <div className={`mt-4 h-[2px] w-20 ${accentBg}`} />
    </motion.div>
  );
}
