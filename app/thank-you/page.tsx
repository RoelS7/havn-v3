"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/hooks/use-language"

const content = {
  nl: {
    eyebrow: "Aanvraag ontvangen",
    title: "Bedankt voor uw aanvraag",
    subtitle: "We hebben uw bericht goed ontvangen en nemen binnen 24 uur persoonlijk contact met u op.",
    steps: [
      { number: "01", title: "Aanvraag ontvangen", description: "Uw gegevens zijn veilig ontvangen.", done: true },
      { number: "02", title: "Persoonlijke analyse", description: "We analyseren uw accommodatie en situatie.", done: false },
      { number: "03", title: "Strategiegesprek", description: "We bespreken de opportuniteiten samen.", done: false },
    ],
    calendly: {
      title: "Wil u sneller van start?",
      subtitle: "Plan direct een gratis strategiegesprek in — kies zelf het moment dat u uitkomt.",
    },
    back: "← Terug naar home",
    trustItems: [
      "Geen verplichtingen",
      "Reactie binnen 24 uur",
      "100% gratis gesprek",
    ],
  },
  en: {
    eyebrow: "Request received",
    title: "Thank you for your request",
    subtitle: "We have received your message and will personally contact you within 24 hours.",
    steps: [
      { number: "01", title: "Request received", description: "Your details have been safely received.", done: true },
      { number: "02", title: "Personal analysis", description: "We analyze your accommodation and situation.", done: false },
      { number: "03", title: "Strategy call", description: "We discuss the opportunities together.", done: false },
    ],
    calendly: {
      title: "Want to get started faster?",
      subtitle: "Schedule a free strategy call directly — choose the moment that suits you.",
    },
    back: "← Back to home",
    trustItems: [
      "No obligations",
      "Response within 24 hours",
      "100% free call",
    ],
  },
  es: {
    eyebrow: "Solicitud recibida",
    title: "Gracias por su solicitud",
    subtitle: "Hemos recibido su mensaje y nos pondremos en contacto personalmente en menos de 24 horas.",
    steps: [
      { number: "01", title: "Solicitud recibida", description: "Sus datos han sido recibidos de forma segura.", done: true },
      { number: "02", title: "Análisis personal", description: "Analizamos su propiedad y situación.", done: false },
      { number: "03", title: "Llamada estratégica", description: "Discutimos las oportunidades juntos.", done: false },
    ],
    calendly: {
      title: "¿Quiere empezar más rápido?",
      subtitle: "Reserve directamente una asesoría gratuita — elija el momento que más le convenga.",
    },
    back: "← Volver al inicio",
    trustItems: [
      "Sin compromiso",
      "Respuesta en 24 horas",
      "Llamada 100% gratuita",
    ],
  },
}

const calendlyLocale: Record<string, string> = {
  nl: "nl",
  en: "en",
  es: "es",
}

export default function ThankYou() {
  const { language, changeLanguage, isLoaded } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isLoaded) setTimeout(() => setVisible(true), 50)
  }, [isLoaded])

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-gold text-2xl font-serif">Loading...</div>
      </div>
    )
  }

  const c = content[language as keyof typeof content]

  return (
    <>
      {/* SEO: noindex via meta — add to head via next/head or metadata export if using App Router */}
      <Navbar language={language} onLanguageChange={changeLanguage} />

      <main className="min-h-screen bg-[var(--background)]">

        {/* ── HERO CONFIRMATION ── */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          {/* Subtle background texture */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
          {/* Gold accent line top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-[var(--gold,#C9A96E)]" />

          <div
            className="max-w-3xl mx-auto text-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {/* Checkmark */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-[var(--gold,#C9A96E)] mb-8">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M5 14L11 20L23 8"
                  stroke="var(--gold, #C9A96E)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="text-xs tracking-[0.2em] uppercase text-[var(--gold,#C9A96E)] mb-4 font-medium">
              {c.eyebrow}
            </p>
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-[var(--foreground)]">
              {c.title}
            </h1>
            <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
              {c.subtitle}
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {c.trustItems.map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold,#C9A96E)] inline-block" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEXT STEPS ── */}
        <section
          className="max-w-3xl mx-auto px-4 pb-20"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {c.steps.map((step, i) => (
              <div
                key={step.number}
                className="relative p-6 rounded-xl border"
                style={{
                  borderColor: step.done ? "var(--gold, #C9A96E)" : "rgba(0,0,0,0.08)",
                  background: step.done ? "rgba(201,169,110,0.04)" : "white",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.6s ease ${0.2 + i * 0.1}s, transform 0.6s ease ${0.2 + i * 0.1}s`,
                }}
              >
                <span
                  className="text-xs font-mono tracking-widest mb-3 block"
                  style={{ color: step.done ? "var(--gold, #C9A96E)" : "#aaa" }}
                >
                  {step.number}
                </span>
                <h3 className="font-serif text-base mb-1 text-[var(--foreground)]">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                {step.done && (
                  <span className="absolute top-4 right-4">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="var(--gold,#C9A96E)" strokeWidth="1" />
                      <path d="M4.5 8L7 10.5L11.5 5.5" stroke="var(--gold,#C9A96E)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── DIVIDER ── */}
        <div className="max-w-3xl mx-auto px-4 mb-16">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold,#C9A96E)]" />
            <div className="flex-1 h-px bg-gray-100" />
          </div>
        </div>

        {/* ── CALENDLY ── */}
        <section
          className="max-w-4xl mx-auto px-4 pb-24"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 0.4s",
          }}
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif mb-3 text-[var(--foreground)]">
              {c.calendly.title}
            </h2>
            <p className="text-gray-500">{c.calendly.subtitle}</p>
          </div>

          <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <iframe
              src={`https://calendly.com/smitsro7/consult?locale=${calendlyLocale[language]}&hide_gdpr_banner=1`}
              width="100%"
              height="700"
              frameBorder="0"
            />
          </div>
        </section>

        {/* ── BACK TO HOME ── */}
        <div className="text-center pb-20">
          <Link
            href="/"
            className="inline-block px-6 py-3 border border-gray-200 text-gray-500 text-sm rounded-lg hover:border-gray-800 hover:text-gray-800 transition-colors"
          >
            {c.back}
          </Link>
        </div>
      </main>

      <Footer language={language} />
    </>
  )
}