"use client";

import { Check, Minus } from "lucide-react";
import { translations } from "@/lib/translations";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Package {
  id: string;
  name: string;
  tagline: string;
  price: string;
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
      className={`relative flex flex-col rounded-2xl border transition-all duration-300 ${
        pkg.featured
          ? "border-[#B8924A] bg-[#0F1923] text-white shadow-2xl shadow-[#B8924A]/10 scale-[1.02]"
          : "border-[#E8DFD0] bg-white text-[#0F1923] hover:border-[#B8924A]/40 hover:shadow-lg"
      }`}
    >
      {pkg.badge && (
        <div
          className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium tracking-widest uppercase whitespace-nowrap ${
            pkg.featured ? "bg-[#B8924A] text-white" : "bg-[#0F1923] text-white"
          }`}
        >
          {pkg.badge}
        </div>
      )}

      <div className="p-7 flex flex-col flex-1">
        {/* Header */}
        <div className="mb-6">
          <p className="text-xs tracking-[0.14em] uppercase font-medium mb-1 text-[#B8924A]">
            {pkg.name}
          </p>
          <h3
            className={`font-serif text-2xl font-light leading-snug mb-4 ${
              pkg.featured ? "text-white" : "text-[#0F1923]"
            }`}
            style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
          >
            {pkg.tagline}
          </h3>

          <div className="flex items-baseline gap-1">
            <span
              className={`text-xs mr-1 ${
                pkg.featured ? "text-white/50" : "text-[#0F1923]/40"
              }`}
            >
            </span>
            <span
              className={`text-4xl font-light tracking-tight ${
                pkg.featured ? "text-white" : "text-[#0F1923]"
              }`}
              style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
            >
              €{pkg.price}
            </span>
            {pkg.priceTo && (
              <span
                className={`text-sm ${
                  pkg.featured ? "text-white/40" : "text-[#0F1923]/30"
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
            pkg.featured ? "text-white/60" : "text-[#5A6A7A]"
          }`}
        >
          {pkg.ideal}
        </p>

        <ul className="space-y-2.5 flex-1 mb-6">
          {pkg.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <Check
                size={14}
                className="mt-0.5 flex-shrink-0 text-[#B8924A]"
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
            <li key={`n-${i}`} className="flex items-start gap-2.5 opacity-30">
              <Minus size={14} className="mt-0.5 flex-shrink-0" strokeWidth={2} />
              <span className="text-sm leading-snug">{f}</span>
            </li>
          ))}
        </ul>

        <div
          className={`rounded-xl p-3.5 mb-6 text-xs leading-relaxed ${
            pkg.featured
              ? "bg-[#B8924A]/15 text-[#D4AF7A]"
              : "bg-[#F5EFE6] text-[#7A6040]"
          }`}
        >
          <span className="font-medium">{resultLabel}: </span>
          {pkg.result}
        </div>

        <a
          href="#contact"
          className={`block text-center rounded-xl py-3.5 text-sm font-medium tracking-wide transition-all duration-200 ${
            pkg.featured
              ? "bg-[#B8924A] text-white hover:bg-[#A07840]"
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
    <div className="rounded-2xl border border-[#E8DFD0] bg-white overflow-hidden hover:border-[#B8924A]/40 hover:shadow-lg transition-all duration-300">
      <div className="p-7">
        <div className="mb-4">
          <span
            className={`inline-block text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full mb-3 ${
              plan.typeColor === "gold"
                ? "bg-[#B8924A]/10 text-[#B8924A]"
                : "bg-[#8A9AB5]/10 text-[#8A9AB5]"
            }`}
          >
            {plan.type}
          </span>
          <h3
            className="text-xl font-light text-[#0F1923] leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
          >
            {plan.name}
          </h3>
          <p className="text-sm text-[#B8924A] mt-0.5">{plan.tagline}</p>
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
                  className="text-lg font-light text-[#0F1923]"
                  style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
                >
                  {tier.price}
                </span>
                <span className="text-xs text-[#0F1923]/40">{tier.period}</span>
              </div>
            </div>
          ))}
        </div>

        <ul className="space-y-2">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-center gap-2.5">
              <Check
                size={13}
                className="flex-shrink-0 text-[#B8924A]"
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
          <p className="text-xs tracking-[0.18em] uppercase text-[#B8924A] font-medium mb-3">
            {t.sectionLabel}
          </p>
          <h2
            className="text-4xl sm:text-5xl font-light text-[#0F1923] leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
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
          <span className="text-[#B8924A] mt-0.5 flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="#B8924A" strokeWidth="1.5" />
              <path
                d="M8 7v4M8 5.5v.5"
                stroke="#B8924A"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <p className="text-sm text-[#3A4A5A] leading-relaxed">{t.platformNote}</p>
        </div>

        {/* Monthly header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.18em] uppercase text-[#B8924A] font-medium mb-3">
            {t.monthlyLabel}
          </p>
          <h2
            className="text-3xl sm:text-4xl font-light text-[#0F1923] leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
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
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#0F1923] text-white px-8 py-4 rounded-xl text-sm font-medium tracking-wide hover:bg-[#1A2A3A] transition-colors duration-200"
          >
            {t.cta}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
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