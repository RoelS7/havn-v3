"use client"
import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"

type Lang = "nl" | "en" | "es"

const text = {
  nl: {
    title: "Revenue Calculator",
    subtitle: "Ontdek het verborgen potentieel van uw accommodatie",
    step1: "Uw accommodatie",
    step2: "Prestaties",
    step3: "Uw rapport",
    rooms: "Aantal kamers / units",
    adr: "Gemiddelde prijs per nacht (€)",
    occ: "Huidige bezettingsgraad (%)",
    propertyType: "Type accommodatie",
    propertyTypes: {
      bnb: "B&B",
      vacation: "Vakantiewoning",
      apartment: "Appartement",
      hotel: "Boutique Hotel",
      villa: "Villa",
    },
    country: "Land / Markt",
    countries: {
      be: "België",
      us: "Verenigde Staten",
      mx: "Mexico",
      co: "Colombia",
      other: "Andere",
    },
    platforms: "Actieve platforms",
    platformList: {
      airbnb: "Airbnb",
      booking: "Booking.com",
      vrbo: "VRBO / Vrbo",
      direct: "Directe website",
      expedia: "Expedia",
    },
    challenges: "Grootste uitdaging",
    challengeList: {
      time: "Te veel handmatig werk",
      revenue: "Omzet verhogen",
      occupancy: "Bezetting verhogen",
      systems: "Systemen koppelen",
      communication: "Gastcommunicatie",
    },
    calculate: "Bereken mijn potentieel",
    result: "Geschatte jaaromzet",
    potential: "Potentieel met HAVN",
    gain: "Extra omzet per jaar",
    based: "Gebaseerd op gemiddelde optimalisaties van 15–25%",
    email: "Ontvang uw persoonlijk AI rapport",
    emailPlaceholder: "uw@email.com",
    cta: "Stuur mijn gratis rapport",
    loading: "Rapport wordt gegenereerd...",
    sent: "✓ Rapport verstuurd! Check uw inbox.",
    selectType: "Selecteer type",
    selectCountry: "Selecteer land",
    selectChallenge: "Selecteer uitdaging",
    platformsHint: "Selecteer alle actieve platforms",
    required: "Vul alle verplichte velden in",
  },
  en: {
    title: "Revenue Calculator",
    subtitle: "Discover the hidden potential of your property",
    step1: "Your Property",
    step2: "Performance",
    step3: "Your Report",
    rooms: "Number of rooms / units",
    adr: "Average nightly rate (€)",
    occ: "Current occupancy rate (%)",
    propertyType: "Property type",
    propertyTypes: {
      bnb: "B&B",
      vacation: "Vacation Rental",
      apartment: "Apartment",
      hotel: "Boutique Hotel",
      villa: "Villa",
    },
    country: "Market / Country",
    countries: {
      be: "Belgium",
      us: "United States",
      mx: "Mexico",
      co: "Colombia",
      other: "Other",
    },
    platforms: "Active platforms",
    platformList: {
      airbnb: "Airbnb",
      booking: "Booking.com",
      vrbo: "VRBO / Vrbo",
      direct: "Direct website",
      expedia: "Expedia",
    },
    challenges: "Biggest challenge",
    challengeList: {
      time: "Too much manual work",
      revenue: "Increasing revenue",
      occupancy: "Improving occupancy",
      systems: "Connecting systems",
      communication: "Guest communication",
    },
    calculate: "Calculate my potential",
    result: "Estimated yearly revenue",
    potential: "Potential with HAVN",
    gain: "Extra revenue per year",
    based: "Based on average optimization improvements of 15–25%",
    email: "Receive your personal AI report",
    emailPlaceholder: "your@email.com",
    cta: "Send my free report",
    loading: "Generating your report...",
    sent: "✓ Report sent! Check your inbox.",
    selectType: "Select type",
    selectCountry: "Select country",
    selectChallenge: "Select challenge",
    platformsHint: "Select all active platforms",
    required: "Please fill in all required fields",
  },
  es: {
    title: "Calculadora de Ingresos",
    subtitle: "Descubre el potencial oculto de tu propiedad",
    step1: "Tu Propiedad",
    step2: "Rendimiento",
    step3: "Tu Informe",
    rooms: "Número de habitaciones / unidades",
    adr: "Tarifa promedio por noche (€)",
    occ: "Tasa de ocupación actual (%)",
    propertyType: "Tipo de propiedad",
    propertyTypes: {
      bnb: "B&B",
      vacation: "Alquiler Vacacional",
      apartment: "Apartamento",
      hotel: "Hotel Boutique",
      villa: "Villa",
    },
    country: "Mercado / País",
    countries: {
      be: "Bélgica",
      us: "Estados Unidos",
      mx: "México",
      co: "Colombia",
      other: "Otro",
    },
    platforms: "Plataformas activas",
    platformList: {
      airbnb: "Airbnb",
      booking: "Booking.com",
      vrbo: "VRBO / Vrbo",
      direct: "Sitio web directo",
      expedia: "Expedia",
    },
    challenges: "Mayor desafío",
    challengeList: {
      time: "Demasiado trabajo manual",
      revenue: "Aumentar ingresos",
      occupancy: "Mejorar ocupación",
      systems: "Conectar sistemas",
      communication: "Comunicación con huéspedes",
    },
    calculate: "Calcular mi potencial",
    result: "Ingresos anuales estimados",
    potential: "Potencial con HAVN",
    gain: "Ingresos extra por año",
    based: "Basado en mejoras promedio de optimización del 15–25%",
    email: "Recibe tu informe AI personalizado",
    emailPlaceholder: "tu@email.com",
    cta: "Enviar mi informe gratuito",
    loading: "Generando tu informe...",
    sent: "✓ ¡Informe enviado! Revisa tu bandeja.",
    selectType: "Selecciona tipo",
    selectCountry: "Selecciona país",
    selectChallenge: "Selecciona desafío",
    platformsHint: "Selecciona todas las plataformas activas",
    required: "Por favor completa todos los campos requeridos",
  },
}

export default function RevenueCalculator({ language: langProp }: { language?: string }) {
  const { language: hookLang } = useLanguage()
  const language = (langProp || hookLang) as Lang
  const t = text[language] || text.en

  // Step 1 — property
  const [propertyType, setPropertyType] = useState("")
  const [country, setCountry] = useState("")
  const [platforms, setPlatforms] = useState<string[]>([])
  const [challenge, setChallenge] = useState("")

  // Step 2 — numbers
  const [rooms, setRooms] = useState(5)
  const [adr, setAdr] = useState(120)
  const [occupancy, setOccupancy] = useState(60)

  // Step 3 — result + lead
  const [result, setResult] = useState<number | null>(null)
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  const togglePlatform = (p: string) => {
    setPlatforms((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    )
  }

  const calculate = () => {
    if (!propertyType || !country || !challenge) {
      setError(t.required)
      return
    }
    setError("")
    const revenue = rooms * adr * (occupancy / 100) * 365
    setResult(revenue)
  }

  const submitLead = async () => {
    if (!email || result === null) return
    setLoading(true)
    try {
      await fetch("/api/calculator-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rooms,
          adr,
          occupancy,
          email,
          revenue: result,
          language,
          propertyType,
          country,
          platforms: platforms.join(", "),
          challenge,
        }),
      })
      setSent(true)
    } catch (e) {
      console.error(e)
    }
    setLoading(false)
  }

  const gain = result ? Math.round(result * 0.2) : 0
  const potential = result ? Math.round(result * 1.2) : 0

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="bg-white rounded-3xl shadow-xl border border-[#C9A96E]/20 p-8 md:p-10">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif text-black mb-2">{t.title}</h2>
          <p className="text-gray-500 text-sm">{t.subtitle}</p>
        </div>

        <div className="space-y-8">

          {/* ── STEP 1: Property info ── */}
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[#C9A96E] font-medium mb-4">
              01 — {t.step1}
            </p>
            <div className="grid grid-cols-1 gap-4">

              {/* Property type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.propertyType} <span className="text-[#C9A96E]">*</span>
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full border border-gray-200 rounded-2xl p-4 text-base focus:border-[#C9A96E] focus:ring-2 focus:ring-[#C9A96E]/20 bg-white"
                >
                  <option value="">{t.selectType}</option>
                  {Object.entries(t.propertyTypes).map(([k, v]) => (
                    <option key={k} value={k}>{v}</option>
                  ))}
                </select>
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.country} <span className="text-[#C9A96E]">*</span>
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full border border-gray-200 rounded-2xl p-4 text-base focus:border-[#C9A96E] focus:ring-2 focus:ring-[#C9A96E]/20 bg-white"
                >
                  <option value="">{t.selectCountry}</option>
                  {Object.entries(t.countries).map(([k, v]) => (
                    <option key={k} value={k}>{v}</option>
                  ))}
                </select>
              </div>

              {/* Platforms */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.platforms}
                  <span className="text-gray-400 text-xs ml-2">({t.platformsHint})</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(t.platformList).map(([k, v]) => (
                    <button
                      key={k}
                      type="button"
                      onClick={() => togglePlatform(k)}
                      className={`px-4 py-2 rounded-full text-sm border transition-all ${
                        platforms.includes(k)
                          ? "bg-[#C9A96E] border-[#C9A96E] text-white"
                          : "bg-white border-gray-200 text-gray-600 hover:border-[#C9A96E]"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Challenge */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.challenges} <span className="text-[#C9A96E]">*</span>
                </label>
                <select
                  value={challenge}
                  onChange={(e) => setChallenge(e.target.value)}
                  className="w-full border border-gray-200 rounded-2xl p-4 text-base focus:border-[#C9A96E] focus:ring-2 focus:ring-[#C9A96E]/20 bg-white"
                >
                  <option value="">{t.selectChallenge}</option>
                  {Object.entries(t.challengeList).map(([k, v]) => (
                    <option key={k} value={k}>{v}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          {/* ── STEP 2: Numbers ── */}
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[#C9A96E] font-medium mb-4">
              02 — {t.step2}
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.rooms}</label>
                <input
                  type="number"
                  min="1"
                  value={rooms}
                  onChange={(e) => setRooms(Number(e.target.value))}
                  className="w-full border border-gray-200 rounded-2xl p-4 text-lg focus:border-[#C9A96E] focus:ring-2 focus:ring-[#C9A96E]/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.adr}</label>
                <input
                  type="number"
                  min="10"
                  value={adr}
                  onChange={(e) => setAdr(Number(e.target.value))}
                  className="w-full border border-gray-200 rounded-2xl p-4 text-lg focus:border-[#C9A96E] focus:ring-2 focus:ring-[#C9A96E]/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.occ}</label>
                <div className="relative">
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={occupancy}
                    onChange={(e) => setOccupancy(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #C9A96E ${occupancy}%, #e5e7eb ${occupancy}%)`
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>10%</span>
                    <span className="font-semibold text-[#C9A96E] text-base">{occupancy}%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          {/* Calculate button */}
          <button
            onClick={calculate}
            className="w-full bg-black hover:bg-gray-900 text-white font-medium py-4 rounded-2xl text-lg transition-all"
          >
            {t.calculate}
          </button>

          {/* ── STEP 3: Results ── */}
          {result !== null && (
            <div className="mt-2 rounded-2xl border border-[#C9A96E]/30 overflow-hidden">

              <div className="bg-black p-6 text-white text-center">
                <p className="text-xs tracking-[0.15em] uppercase text-[#C9A96E] mb-1">
                  03 — {t.step3}
                </p>
                <p className="text-sm text-gray-400 mb-1">{t.result}</p>
                <p className="text-4xl font-bold">€{Math.round(result).toLocaleString()}</p>
              </div>

              <div className="grid grid-cols-2 divide-x divide-[#C9A96E]/20 bg-[#C9A96E]/5">
                <div className="p-5 text-center">
                  <p className="text-xs text-gray-500 mb-1">{t.potential}</p>
                  <p className="text-2xl font-bold text-black">€{potential.toLocaleString()}</p>
                </div>
                <div className="p-5 text-center">
                  <p className="text-xs text-gray-500 mb-1">{t.gain}</p>
                  <p className="text-2xl font-bold text-green-600">+€{gain.toLocaleString()}</p>
                </div>
              </div>

              <div className="p-6 bg-white">
                <p className="text-xs text-gray-400 text-center mb-6">{t.based}</p>

                {!sent ? (
                  <>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.email}
                    </label>
                    <input
                      type="email"
                      placeholder={t.emailPlaceholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-gray-200 rounded-2xl p-4 text-base focus:border-[#C9A96E] focus:ring-2 focus:ring-[#C9A96E]/20 mb-3"
                    />
                    <button
                      onClick={submitLead}
                      disabled={!email || loading}
                      className="w-full py-4 rounded-2xl text-base font-medium transition-all disabled:opacity-50"
                      style={{ background: "#C9A96E", color: "white" }}
                    >
                      {loading ? t.loading : t.cta}
                    </button>
                  </>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-green-600 font-medium text-lg">{t.sent}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
