"use client";

import { Check, Minus } from "lucide-react";

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

// ─── Data ─────────────────────────────────────────────────────────────────────

const PACKAGES: Package[] = [
  {
    id: "launch",
    name: "HAVN Launch",
    tagline: "Jouw eerste directe boekingen",
    price: "1.495",
    priceTo: "2.500",
    ideal:
      "Vakantiehuizen, B&B's en kleine accommodaties die willen stoppen met het betalen van OTA-commissies.",
    result: "Een professionele directe boekingsbasis — klaar om commissies te vermijden.",
    features: [
      "Directe boekingen via je eigen website",
      "Koppeling met Booking.com & Airbnb",
      "Online betalingen via Stripe",
      "Automatische bevestigings- & check-inmails",
      "Reviewverzoeken na verblijf",
      "Housekeeping notificaties",
      "Training & overdracht",
    ],
    notIncluded: ["Google Hotels", "Revenue management", "Doorlopende optimalisatie"],
    featured: false,
  },
  {
    id: "growth",
    name: "HAVN Growth",
    tagline: "Meer omzet per boeking",
    price: "2.495",
    priceTo: "3.500",
    ideal:
      "Accommodaties die niet alleen directe boekingen willen, maar ook hun opbrengst actief willen verhogen.",
    result: "Meer zichtbaarheid, slimmere prijzen en hogere opbrengst per verblijf.",
    features: [
      "Alles uit HAVN Launch",
      "Google Hotels — direct op jouw naam",
      "Dynamische prijsstrategie & framework",
      "Markt- & concurrentieanalyse",
      "Minimum stay & kalenderstrategie",
      "Upsell workflows",
      "Gepersonaliseerde gastcommunicatie",
      "Revenue dashboard",
    ],
    notIncluded: [],
    featured: true,
    badge: "Meest gekozen",
  },
  {
    id: "scale",
    name: "HAVN Scale",
    tagline: "Volledig schaalbaar verhuurplatform",
    price: "3.995",
    priceTo: null,
    ideal: "Operators, vakantieparken en complexe multi-property structuren.",
    result:
      "Een professioneel verhuurplatform met geavanceerde automatisatie en schaalbaarheid.",
    features: [
      "Alles uit HAVN Growth",
      "Multi-property setup",
      "Maatwerk automatisatie & workflows",
      "Meerdere gebruikersrollen",
      "Teamtraining",
      "Uitgebreide rapportering",
      "Strategisch advies op maat",
    ],
    notIncluded: [],
    featured: false,
    badge: "Op maat",
  },
];

const MONTHLY: MonthlyPlan[] = [
  {
    id: "platform",
    name: "HAVN Platform",
    type: "Verplicht",
    typeColor: "gold",
    tagline: "De technische basis van jouw verhuur",
    description:
      "Bundelt je softwarelicentie, hosting, onderhoud, OTA-support en jaarlijkse systeemreview in één maandelijks bedrag. Geen verrassingen, geen aparte facturen.",
    tiers: [
      { label: "1 – 3 units", price: "€59", period: "/ maand" },
      { label: "4 – 10 units", price: "€99", period: "/ maand" },
      { label: "10+ units", price: "Offerte", period: "op maat" },
    ],
    features: [
      "Softwarelicentie inbegrepen",
      "Hosting & onderhoud",
      "Technische support",
      "OTA ondersteuning",
      "Kleine configuratiewijzigingen",
      "Jaarlijkse systeemreview",
    ],
  },
  {
    id: "revenue",
    name: "HAVN Revenue",
    type: "Optioneel",
    typeColor: "slate",
    tagline: "Actief revenue management",
    description:
      "Maandelijkse marktanalyse, bezettingsrapport en concrete prijsaanbevelingen — voor eigenaars die elke euro willen optimaliseren zonder zelf de markt te volgen.",
    tiers: [
      { label: "1 – 3 units", price: "€149", period: "/ maand" },
      { label: "4 – 10 units", price: "€249", period: "/ maand" },
      { label: "10+ units", price: "Offerte", period: "op maat" },
    ],
    features: [
      "Maandelijkse revenue review",
      "Bezettings- & concurrentieanalyse",
      "Evenementen- & seizoensanalyse",
      "Aanbevelingen prijsaanpassingen",
      "Kalenderoptimalisatie",
      "Strategiegesprek & rapportering",
    ],
  },
];

// ─── PackageCard ──────────────────────────────────────────────────────────────

function PackageCard({ pkg }: { pkg: Package }) {
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
              Vanaf
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
                – €{pkg.priceTo}
              </span>
            )}
          </div>
        </div>

        <div
          className={`h-px mb-5 ${pkg.featured ? "bg-white/10" : "bg-[#E8DFD0]"}`}
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
          <span className="font-medium">Resultaat: </span>
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
          Offerte aanvragen
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

export default function PricingSection() {
  return (
    <section className="bg-[#F5EFE6] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.18em] uppercase text-[#B8924A] font-medium mb-3">
            Pakketten & Prijzen
          </p>
          <h2
            className="text-4xl sm:text-5xl font-light text-[#0F1923] leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
          >
            Kies je startpunt
          </h2>
          <p className="text-base text-[#5A6A7A] max-w-xl mx-auto leading-relaxed">
            Eenmalige implementatie om jouw verhuurinfrastructuur te bouwen,
            aangevuld met een maandelijks platform en optioneel revenue management.
          </p>
        </div>

        {/* One-time packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
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
          <p className="text-sm text-[#3A4A5A] leading-relaxed">
            Elk implementatiepakket wordt aangevuld met het{" "}
            <strong className="font-medium text-[#0F1923]">HAVN Platform</strong>{" "}
            — het maandelijks abonnement dat je softwarelicentie, hosting en
            technische support bundelt.
          </p>
        </div>

        {/* Monthly header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.18em] uppercase text-[#B8924A] font-medium mb-3">
            Maandelijkse diensten
          </p>
          <h2
            className="text-3xl sm:text-4xl font-light text-[#0F1923] leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
          >
            De motor die blijft draaien
          </h2>
          <p className="text-base text-[#5A6A7A] max-w-xl mx-auto leading-relaxed">
            Na implementatie hou je het systeem actueel en je omzet optimaal.
          </p>
        </div>

        {/* Monthly cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {MONTHLY.map((plan) => (
            <MonthlyCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-sm text-[#5A6A7A] mb-6">
            Niet zeker welk pakket past? Plan een gratis strategiegesprek en we
            bekijken het samen.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#0F1923] text-white px-8 py-4 rounded-xl text-sm font-medium tracking-wide hover:bg-[#1A2A3A] transition-colors duration-200"
          >
            Gratis strategiegesprek plannen
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
