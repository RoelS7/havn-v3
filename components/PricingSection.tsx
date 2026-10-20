"use client";

import { Check, Minus } from "lucide-react";
import { translations } from "@/lib/translations";
import { CALENDLY_URL } from "@/lib/constants";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Package {
  id: string;
  name: string;
  tagline: string;
  price: string | null;
  priceTo: string | null;
  ideal: string;
  result: string;
  features: string[];
  notIncluded: string[];
  featured: boolean;
  badge?: string;
}

interface MonthlyTier {
  label: string;
  price: string;
  period: string;
}

interface MonthlyPlan {
  id: string;
  name: string;
  type: string;
  typeColor: "gold" | "slate";
  tagline: string;
  description: string;
  tiers: MonthlyTier[];
  features: string[];
}

interface PricingSectionProps {
  language: string;
}

// ─── PackageCard ──────────────────────────────────────────────────────────────

function PackageCard({
  pkg,
  resultLabel,
  requestQuote,
}: {
  pkg: Package;
  resultLabel: string;
  requestQuote: string;
}) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border transition-[border-color,box-shadow] duration-300 ${
        pkg.featured
          ? "border-gold/70 bg-[#0F1923] bg-[radial-gradient(80%_50%_at_50%_0%,rgba(184,146,92,0.14),transparent_70%)] text-white shadow-[0_30px_60px_-30px_rgba(15,25,35,0.6),0_20px_40px_-24px_rgba(184,146,92,0.25)] scale-[1.02]"
          : "border-[#E8DFD0] bg-white text-[#0F1923] hover:border-gold/40 hover:shadow-lg"
      }`}
    >
      {pkg.featured && (
        <div aria-hidden="true" className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF7A] to-transparent" />
      )}
      {pkg.badge && (
        <div
          className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium tracking-widest uppercase whitespace-nowrap ${
            pkg.featured ? "bg-gold text-[#0F1923]" : "bg-[#0F1923] text-white"
          }`}
        >
          {pkg.badge}
        </div>
      )}

      <div className="p-7 flex flex-col flex-1">
        {/* Header */}
        <div className="mb-6">
          <p className={`text-sm font-medium mb-1 ${pkg.featured ? "text-[#D4AF7A]" : "text-gold-ink"}`}>
            {pkg.name}
          </p>
          <h3
            className={`font-serif text-2xl leading-snug mb-4 ${
              pkg.featured ? "text-white" : "text-[#0F1923]"
            }`}
          >
            {pkg.tagline}
          </h3>

          <div className="flex items-baseline gap-1">
            {pkg.price && (
              <span
                className={`font-serif text-4xl tracking-tight ${
                  pkg.featured ? "text-white" : "text-[#0F1923]"
                }`}
              >
                {pkg.price}
              </span>
            )}
            {pkg.priceTo && (
              <span
                className={`text-sm ${
                  pkg.featured ? "text-white/70" : "text-[#5A6A7A]"
                }`}
              >
                {pkg.priceTo}
              </span>
            )}
          </div>
        </div>

        <div
          className={`h-px mb-5 ${
            pkg.featured ? "bg-white/10" : "bg-[#E8DFD0]"
          }`}
        />

        <p
          className={`text-sm leading-relaxed mb-5 ${
            pkg.featured ? "text-white/75" : "text-[#5A6A7A]"
          }`}
        >
          {pkg.ideal}
        </p>

        <ul className="space-y-2.5 flex-1 mb-6">
          {pkg.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <Check
                size={14}
                className="mt-0.5 flex-shrink-0 text-gold"
                strokeWidth={2.5}
              />
              <span
                className={`text-sm leading-snug ${
                  pkg.featured ? "text-white/80" : "text-[#3A4A5A]"
                }`}
              >
                {f}
              </span>
            </li>
          ))}
          {pkg.notIncluded.map((f, i) => (
            <li key={`n-${i}`} className={`flex items-start gap-2.5 ${pkg.featured ? "text-white/60" : "text-[#6B7680]"}`}>
              <Minus size={14} className="mt-0.5 flex-shrink-0" strokeWidth={2} aria-hidden="true" />
              <span className="text-sm leading-snug line-through decoration-1">{f}</span>
            </li>
          ))}
        </ul>

        <div
          className={`rounded-xl p-3.5 mb-6 text-xs leading-relaxed ${
            pkg.featured
              ? "bg-gold/15 text-[#D4AF7A]"
              : "bg-[#F5EFE6] text-[#7A6040]"
          }`}
        >
          <span className="font-medium">{resultLabel}: </span>
          {pkg.result}
        </div>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`block text-center rounded-xl py-3.5 text-sm font-medium tracking-wide transition-[background-color,color,transform] duration-200 active:scale-[0.98] ${
            pkg.featured
              ? "btn-sheen bg-gold text-[#0F1923] hover:bg-[#C9A46C]"
              : "border border-[#0F1923] text-[#0F1923] hover:bg-[#0F1923] hover:text-white"
          }`}
        >
          {requestQuote}
        </a>
      </div>
    </div>
  );
}

// ─── MonthlyCard ──────────────────────────────────────────────────────────────

function MonthlyCard({ plan }: { plan: MonthlyPlan }) {
  return (
    <div className="rounded-2xl border border-[#E8DFD0] bg-white overflow-hidden hover:border-gold/40 hover:shadow-[0_16px_36px_-18px_rgba(184,146,92,0.35)] transition-[border-color,box-shadow] duration-300">
      <div className="p-7">
        <div className="mb-4">
          <span
            className={`inline-block text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full mb-3 ${
              plan.typeColor === "gold"
                ? "bg-gold/10 text-gold-ink"
                : "bg-[#5A6A7A]/10 text-[#4A5866]"
            }`}
          >
            {plan.type}
          </span>
          <h3
            className="font-serif text-xl text-[#0F1923] leading-tight"
          >
            {plan.name}
          </h3>
          <p className="text-sm text-gold-ink mt-0.5">{plan.tagline}</p>
        </div>

        <p className="text-sm text-[#5A6A7A] leading-relaxed mb-6">
          {plan.description}
        </p>

        <div className="space-y-2 mb-6">
          {plan.tiers.map((tier, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-2.5 px-3.5 rounded-lg bg-[#F5EFE6]"
            >
              <span className="text-sm text-[#5A6A7A]">{tier.label}</span>
              <div className="flex items-baseline gap-1">
                <span
                  className="font-serif text-lg text-[#0F1923]"
                      >
                  {tier.price}
                </span>
                <span className="text-xs text-[#5A6A7A]">{tier.period}</span>
              </div>
            </div>
          ))}
        </div>

        <ul className="space-y-2">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-center gap-2.5">
              <Check
                size={13}
                className="flex-shrink-0 text-gold"
                strokeWidth={2.5}
              />
              <span className="text-sm text-[#3A4A5A]">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function PricingSection({ language }: PricingSectionProps) {
  const currentLang =
    language === "nl" || language === "en" || language === "es" ? language : "nl";
  const t = translations[currentLang].pricing;

  return (
    <section className="bg-[#F5EFE6] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className="font-serif text-4xl sm:text-5xl text-[#0F1923] leading-tight tracking-[-0.02em] mb-4 text-balance"
          >
            {t.title}
          </h2>
          <p className="text-base text-[#5A6A7A] max-w-xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* One-time packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {(t.packages as Package[]).map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              resultLabel={t.resultLabel}
              requestQuote={t.requestQuote}
            />
          ))}
        </div>

        {/* Platform note */}
        <div className="flex items-start gap-3 bg-[#0F1923]/5 border border-[#0F1923]/10 rounded-xl px-5 py-4 mb-20 max-w-2xl mx-auto">
          <span className="text-gold mt-0.5 flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="7" stroke="#B8925C" strokeWidth="1.5" />
              <path
                d="M8 7v4M8 5.5v.5"
                stroke="#B8925C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <p className="text-sm text-[#3A4A5A] leading-relaxed">{t.platformNote}</p>
        </div>

        {/* Monthly header */}
        <div className="text-center mb-12">
          <h2
            className="font-serif text-3xl sm:text-4xl text-[#0F1923] leading-tight tracking-[-0.02em] mb-4 text-balance"
          >
            {t.monthlyTitle}
          </h2>
          <p className="text-base text-[#5A6A7A] max-w-xl mx-auto leading-relaxed">
            {t.monthlySubtitle}
          </p>
        </div>

        {/* Monthly cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {(t.monthly as MonthlyPlan[]).map((plan) => (
            <MonthlyCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-sm text-[#5A6A7A] mb-6">{t.notSure}</p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0F1923] text-white px-8 py-4 rounded-xl text-sm font-medium tracking-wide hover:bg-[#1A2A3A] active:scale-[0.98] transition-[background-color,transform] duration-200"
          >
            {t.cta}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}