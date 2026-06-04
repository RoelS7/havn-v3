"use client"
import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"

type Lang = "nl" | "en" | "es"

const WHOLE_PROPERTY_TYPES = ["vacation", "villa", "apartment"]

const text = {
  nl: {
    title: "Hoeveel commissie betaal jij elk jaar aan OTA's",
    subtitle: "Ontdek het verborgen potentieel van uw accommodatie",
    step1: "Uw accommodatie",
    step2: "Prestaties",
    step3: "Uw rapport",
    rooms: "Aantal kamers",
    pricePerNight: "Prijs per nacht (€)",
    adr: "Gemiddelde prijs per kamer per nacht (€)",
    occ: "Huidige bezettingsgraad (%)",
    highSeasonOcc: "Hoogseizoen bezetting (%)",
    lowSeasonOcc: "Laagseizoen bezetting (%)",
    highSeasonMonths: "Hoogseizoen maanden (van de 12)",
    propertyType: "Type accommodatie",
    propertyTypes: { bnb: "B&B", vacation: "Vakantiewoning", apartment: "Appartement", hotel: "Boutique Hotel", villa: "Villa" },
    country: "Land / Markt",
    countries: { be: "België", us: "Verenigde Staten", mx: "Mexico", co: "Colombia", other: "Andere" },
    platforms: "Actieve platforms",
    platformList: { airbnb: "Airbnb", booking: "Booking.com", vrbo: "VRBO / Vrbo", direct: "Directe website", expedia: "Expedia" },
    challenges: "Grootste uitdaging",
    challengeList: { time: "Te veel handmatig werk", revenue: "Omzet verhogen", occupancy: "Bezetting verhogen", systems: "Systemen koppelen", communication: "Gastcommunicatie" },
    calculate: "Bereken mijn potentieel",
    result: "Geschatte jaaromzet",
    potential: "Potentieel met HAVN",
    gain: "Extra omzet per jaar",
    perMonth: "Gemiddeld per maand",
    commissionSave: "Besparing directe boekingen",
    benchmarkTitle: "Hoe doe je het vs. de markt?",
    benchmarkBelow: "Onder marktgemiddelde",
    benchmarkAvg: "Rond marktgemiddelde",
    benchmarkAbove: "Boven marktgemiddelde",
    benchmarkText: "Vergelijkbare accommodaties in",
    benchmarkAvgOcc: "halen gemiddeld",
    benchmarkYours: "Jij zit op",
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
    seasonalityTitle: "Seizoenspatroon",
    avgOccLabel: "Gemiddelde bezetting",
    commissionRate: "OTA commissie (%)",
  },
  en: {
    title: "How much commission do you pay to OTAs every year?",
    subtitle: "Discover the hidden potential of your property",
    step1: "Your Property",
    step2: "Performance",
    step3: "Your Report",
    rooms: "Number of rooms",
    pricePerNight: "Price per night (€)",
    adr: "Average price per room per night (€)",
    occ: "Current occupancy rate (%)",
    highSeasonOcc: "High season occupancy (%)",
    lowSeasonOcc: "Low season occupancy (%)",
    highSeasonMonths: "High season months (out of 12)",
    propertyType: "Property type",
    propertyTypes: { bnb: "B&B", vacation: "Vacation Rental", apartment: "Apartment", hotel: "Boutique Hotel", villa: "Villa" },
    country: "Market / Country",
    countries: { be: "Belgium", us: "United States", mx: "Mexico", co: "Colombia", other: "Other" },
    platforms: "Active platforms",
    platformList: { airbnb: "Airbnb", booking: "Booking.com", vrbo: "VRBO / Vrbo", direct: "Direct website", expedia: "Expedia" },
    challenges: "Biggest challenge",
    challengeList: { time: "Too much manual work", revenue: "Increasing revenue", occupancy: "Improving occupancy", systems: "Connecting systems", communication: "Guest communication" },
    calculate: "Calculate my potential",
    result: "Estimated yearly revenue",
    potential: "Potential with HAVN",
    gain: "Extra revenue per year",
    perMonth: "Average per month",
    commissionSave: "Direct booking savings",
    benchmarkTitle: "How do you compare to the market?",
    benchmarkBelow: "Below market average",
    benchmarkAvg: "Around market average",
    benchmarkAbove: "Above market average",
    benchmarkText: "Similar properties in",
    benchmarkAvgOcc: "average",
    benchmarkYours: "You are at",
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
    seasonalityTitle: "Seasonal pattern",
    avgOccLabel: "Average occupancy",
    commissionRate: "OTA commission (%)",
  },
  es: {
    title: "¿Cuánta comisión pagas a las agencias de viajes online cada año?",
    subtitle: "Descubre el potencial oculto de tu propiedad",
    step1: "Tu Propiedad",
    step2: "Rendimiento",
    step3: "Tu Informe",
    rooms: "Número de habitaciones",
    pricePerNight: "Precio por noche (€)",
    adr: "Tarifa promedio por habitación por noche (€)",
    occ: "Tasa de ocupación actual (%)",
    highSeasonOcc: "Ocupación temporada alta (%)",
    lowSeasonOcc: "Ocupación temporada baja (%)",
    highSeasonMonths: "Meses de temporada alta (de 12)",
    propertyType: "Tipo de propiedad",
    propertyTypes: { bnb: "B&B", vacation: "Alquiler Vacacional", apartment: "Apartamento", hotel: "Hotel Boutique", villa: "Villa" },
    country: "Mercado / País",
    countries: { be: "Bélgica", us: "Estados Unidos", mx: "México", co: "Colombia", other: "Otro" },
    platforms: "Plataformas activas",
    platformList: { airbnb: "Airbnb", booking: "Booking.com", vrbo: "VRBO / Vrbo", direct: "Sitio web directo", expedia: "Expedia" },
    challenges: "Mayor desafío",
    challengeList: { time: "Demasiado trabajo manual", revenue: "Aumentar ingresos", occupancy: "Mejorar ocupación", systems: "Conectar sistemas", communication: "Comunicación con huéspedes" },
    calculate: "Calcular mi potencial",
    result: "Ingresos anuales estimados",
    potential: "Potencial con HAVN",
    gain: "Ingresos extra por año",
    perMonth: "Promedio por mes",
    commissionSave: "Ahorro reservas directas",
    benchmarkTitle: "¿Cómo te comparas con el mercado?",
    benchmarkBelow: "Por debajo del promedio",
    benchmarkAvg: "Alrededor del promedio",
    benchmarkAbove: "Por encima del promedio",
    benchmarkText: "Propiedades similares en",
    benchmarkAvgOcc: "promedian",
    benchmarkYours: "Tú estás en",
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
    seasonalityTitle: "Patrón estacional",
    avgOccLabel: "Ocupación promedio",
    commissionRate: "Comisión OTA (%)",
  },
}

const BENCHMARKS: Record<string, number> = { be: 68, us: 72, mx: 65, co: 60, other: 65 }

export default function RevenueCalculator({ language: langProp }: { language?: string }) {
  const { language: hookLang } = useLanguage()
  const language = (langProp || hookLang) as Lang
  const t = text[language] || text.en

  const [propertyType, setPropertyType] = useState("")
  const [country, setCountry] = useState("")
  const [platforms, setPlatforms] = useState<string[]>([])
  const [challenge, setChallenge] = useState("")
  const [rooms, setRooms] = useState(3)
  const [adr, setAdr] = useState(120)
  const [highSeasonOcc, setHighSeasonOcc] = useState(80)
  const [lowSeasonOcc, setLowSeasonOcc] = useState(45)
  const [highSeasonMonths, setHighSeasonMonths] = useState(5)
  const [commissionRate, setCommissionRate] = useState(15)
  const [result, setResult] = useState<number | null>(null)
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  const isWholeProperty = WHOLE_PROPERTY_TYPES.includes(propertyType)
  const effectiveRooms = isWholeProperty ? 1 : rooms
  const avgOccupancy = Math.round(
    (highSeasonOcc * highSeasonMonths + lowSeasonOcc * (12 - highSeasonMonths)) / 12
  )

  const togglePlatform = (p: string) => {
    setPlatforms((prev) => prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p])
  }

  const calculate = () => {
    if (!propertyType || !country || !challenge) { setError(t.required); return }
    setError("")
    const highDays = Math.round((highSeasonMonths / 12) * 365)
    const lowDays = 365 - highDays
    const revenue =
      effectiveRooms * adr * (highSeasonOcc / 100) * highDays +
      effectiveRooms * adr * (lowSeasonOcc / 100) * lowDays
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
          rooms: effectiveRooms,
          adr,
          occupancy: avgOccupancy,
          email,
          revenue: result,
          language,
          propertyType,
          country,
          platforms: platforms.join(", "),
          challenge,
          highSeasonOcc,
          lowSeasonOcc,
          highSeasonMonths,
          commissionRate,
        }),
      })
      setSent(true)
    } catch (e) { console.error(e) }
    setLoading(false)
  }

  const gain = result ? Math.round(result * 0.2) : 0
  const potential = result ? Math.round(result * 1.2) : 0
  const perMonth = result ? Math.round(result / 12) : 0
  const annualCommission = result ? Math.round(result * (commissionRate / 100)) : 0
  const commissionSaving = result ? Math.round(annualCommission * 0.4) : 0
  const benchmarkOcc = country ? (BENCHMARKS[country] || 65) : 65
  const countryLabel = country ? ((t.countries as Record<string, string>)[country] || country) : ""
  const benchmarkDiff = avgOccupancy - benchmarkOcc
  const benchmarkStatus = benchmarkDiff >= 5 ? "above" : benchmarkDiff <= -5 ? "below" : "avg"
  const benchmarkColor = benchmarkStatus === "above" ? "#16a34a" : benchmarkStatus === "below" ? "#dc2626" : "#d97706"
  const benchmarkLabel = benchmarkStatus === "above" ? t.benchmarkAbove : benchmarkStatus === "below" ? t.benchmarkBelow : t.benchmarkAvg

  return (
    <div className="max-w-2xl mx-auto px-4 pt-10">
      <div className="bg-white rounded-3xl shadow-xl border border-[#C9A96E]/20 p-8 md:p-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif text-black mb-2">{t.title}</h2>
          <p className="text-gray-500 text-sm">{t.subtitle}</p>
        </div>

        <div className="space-y-8">
          {/* STEP 1 */}
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[#C9A96E] font-medium mb-4">01 — {t.step1}</p>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.propertyType} <span className="text-[#C9A96E]">*</span></label>
                <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)} className="w-full border border-gray-200 rounded-2xl p-4 text-base focus:border-[#C9A96E] focus:ring-2 focus:ring-[#C9A96E]/20 bg-white">
                  <option value="">{t.selectType}</option>
                  {Object.entries(t.propertyTypes).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.country} <span className="text-[#C9A96E]">*</span></label>
                <select value={country} onChange={(e) => setCountry(e.target.value)} className="w-full border border-gray-200 rounded-2xl p-4 text-base focus:border-[#C9A96E] focus:ring-2 focus:ring-[#C9A96E]/20 bg-white">
                  <option value="">{t.selectCountry}</option>
                  {Object.entries(t.countries).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.platforms} <span className="text-gray-400 text-xs ml-2">({t.platformsHint})</span></label>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(t.platformList).map(([k, v]) => (
                    <button key={k} type="button" onClick={() => togglePlatform(k)}
                      className={`px-4 py-2 rounded-full text-sm border transition-all ${platforms.includes(k) ? "bg-[#C9A96E] border-[#C9A96E] text-white" : "bg-white border-gray-200 text-gray-600 hover:border-[#C9A96E]"}`}>
                      {v}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.challenges} <span className="text-[#C9A96E]">*</span></label>
                <select value={challenge} onChange={(e) => setChallenge(e.target.value)} className="w-full border border-gray-200 rounded-2xl p-4 text-base focus:border-[#C9A96E] focus:ring-2 focus:ring-[#C9A96E]/20 bg-white">
                  <option value="">{t.selectChallenge}</option>
                  {Object.entries(t.challengeList).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                </select>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          {/* STEP 2 */}
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[#C9A96E] font-medium mb-4">02 — {t.step2}</p>
            <div className="space-y-5">
              {!isWholeProperty && propertyType && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.rooms}</label>
                  <input type="number" min="1" value={rooms} onChange={(e) => setRooms(Number(e.target.value))}
                    className="w-full border border-gray-200 rounded-2xl p-4 text-lg focus:border-[#C9A96E] focus:ring-2 focus:ring-[#C9A96E]/20" />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isWholeProperty || !propertyType ? t.pricePerNight : t.adr}
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">€</span>
                  <input type="number" min="10" value={adr} onChange={(e) => setAdr(Number(e.target.value))}
                    className="w-full border border-gray-200 rounded-2xl p-4 pl-8 text-lg focus:border-[#C9A96E] focus:ring-2 focus:ring-[#C9A96E]/20" />
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-5 space-y-4">
                <p className="text-sm font-medium text-gray-700">{t.seasonalityTitle}</p>
                {[
                  { label: t.highSeasonOcc, value: highSeasonOcc, setter: setHighSeasonOcc, min: 10, max: 100 },
                  { label: t.lowSeasonOcc, value: lowSeasonOcc, setter: setLowSeasonOcc, min: 5, max: 100 },
                ].map(({ label, value, setter, min, max }) => (
                  <div key={label}>
                    <div className="flex justify-between mb-1">
                      <label className="text-xs text-gray-500">{label}</label>
                      <span className="text-xs font-semibold text-[#C9A96E]">{value}%</span>
                    </div>
                    <input type="range" min={min} max={max} value={value} onChange={(e) => setter(Number(e.target.value))}
                      className="w-full h-2 rounded-full appearance-none cursor-pointer"
                      style={{ background: `linear-gradient(to right, #C9A96E ${value}%, #e5e7eb ${value}%)` }} />
                  </div>
                ))}
                <div>
                  <div className="flex justify-between mb-1">
                    <label className="text-xs text-gray-500">{t.highSeasonMonths}</label>
                    <span className="text-xs font-semibold text-[#C9A96E]">{highSeasonMonths}/12</span>
                  </div>
                  <input type="range" min="1" max="11" value={highSeasonMonths} onChange={(e) => setHighSeasonMonths(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{ background: `linear-gradient(to right, #C9A96E ${(highSeasonMonths / 11) * 100}%, #e5e7eb ${(highSeasonMonths / 11) * 100}%)` }} />
                </div>
                <div className="flex justify-between items-center pt-1 border-t border-gray-200">
                  <span className="text-xs text-gray-500">{t.avgOccLabel}</span>
                  <span className="text-sm font-bold text-[#C9A96E]">{avgOccupancy}%</span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-5">
                <div className="flex justify-between mb-1">
                  <label className="text-xs text-gray-500">{t.commissionRate}</label>
                  <span className="text-xs font-semibold text-[#C9A96E]">{commissionRate}%</span>
                </div>
                <input type="range" min="10" max="25" step="1" value={commissionRate} onChange={(e) => setCommissionRate(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{ background: `linear-gradient(to right, #C9A96E ${((commissionRate - 10) / 15) * 100}%, #e5e7eb ${((commissionRate - 10) / 15) * 100}%)` }} />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>10%</span>
                  <span>25%</span>
                </div>
              </div>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button onClick={calculate} className="w-full bg-black hover:bg-gray-900 text-white font-medium py-4 rounded-2xl text-lg transition-all">
            {t.calculate}
          </button>

          {/* STEP 3 */}
          {result !== null && (
            <div className="mt-2 rounded-2xl border border-[#C9A96E]/30 overflow-hidden">
              <div className="bg-black p-6 text-white text-center">
                <p className="text-xs tracking-[0.15em] uppercase text-[#C9A96E] mb-1">03 — {t.step3}</p>
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
              <div className="grid grid-cols-2 divide-x divide-gray-100 bg-white border-t border-gray-100">
                <div className="p-4 text-center">
                  <p className="text-xs text-gray-400 mb-1">{t.perMonth}</p>
                  <p className="text-lg font-semibold text-black">€{perMonth.toLocaleString()}</p>
                </div>
                <div className="p-4 text-center">
                  <p className="text-xs text-gray-400 mb-1">{t.commissionSave}</p>
                  <p className="text-lg font-semibold text-green-600">+€{commissionSaving.toLocaleString()}</p>
                </div>
              </div>
              {country && (
                <div className="bg-white border-t border-gray-100 p-5">
                  <p className="text-xs font-medium text-gray-700 mb-3">{t.benchmarkTitle}</p>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500">{t.benchmarkText} {countryLabel}: {benchmarkOcc}% {t.benchmarkAvgOcc}</span>
                    <span className="text-xs font-bold" style={{ color: benchmarkColor }}>{benchmarkLabel}</span>
                  </div>
                  <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className="absolute left-0 top-0 h-full rounded-full" style={{ width: `${benchmarkOcc}%`, background: "#e5e7eb" }} />
                    <div className="absolute left-0 top-0 h-full rounded-full transition-all" style={{ width: `${Math.min(avgOccupancy, 100)}%`, background: benchmarkColor, opacity: 0.85 }} />
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>0%</span>
                    <span>{t.benchmarkYours} {avgOccupancy}%</span>
                    <span>100%</span>
                  </div>
                </div>
              )}
              <div className="bg-amber-50 border-t border-amber-100 p-4">
                <p className="text-xs text-amber-800 leading-relaxed">
                  💡 {language === "nl"
                    ? `Je betaalt nu ~€${annualCommission.toLocaleString()} aan platformcommissie per jaar. Met 40% directe boekingen bespaar je €${commissionSaving.toLocaleString()} extra.`
                    : language === "es"
                    ? `Actualmente pagas ~€${annualCommission.toLocaleString()} en comisiones anuales. Con 40% de reservas directas ahorrarías €${commissionSaving.toLocaleString()} extra.`
                    : `You're currently paying ~€${annualCommission.toLocaleString()} in annual platform commissions. With 40% direct bookings you'd save €${commissionSaving.toLocaleString()} extra.`}
                </p>
              </div>
              <div className="p-6 bg-white border-t border-gray-100">
                <p className="text-xs text-gray-400 text-center mb-6">{t.based}</p>
                {!sent ? (
                  <>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.email}</label>
                    <input type="email" placeholder={t.emailPlaceholder} value={email} onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-gray-200 rounded-2xl p-4 text-base focus:border-[#C9A96E] focus:ring-2 focus:ring-[#C9A96E]/20 mb-3" />
                    <button onClick={submitLead} disabled={!email || loading}
                      className="w-full py-4 rounded-2xl text-base font-medium transition-all disabled:opacity-50"
                      style={{ background: "#C9A96E", color: "white" }}>
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