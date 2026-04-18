"use client"
import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"

export default function RevenueCalculator() {
  const { language } = useLanguage()
  const [rooms, setRooms] = useState(20)
  const [adr, setAdr] = useState(120)
  const [occupancy, setOccupancy] = useState(60)
  const [email, setEmail] = useState("")
  const [result, setResult] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)

  const benchmarkRevenue = rooms * adr * 0.68 * 365

  const text = {
    nl: {
      title: "Hotel Revenue Calculator",
      rooms: "Aantal kamers",
      adr: "Gemiddelde kamerprijs (€)",
      occ: "Bezettingsgraad (%)",
      calculate: "Bereken mijn omzet",
      result: "Geschatte jaarlijkse omzet",
      increase: "Potentiële stijging met HAVN optimalisatie",
      email: "Email voor volledige analyse",
      cta: "Ontvang volledige analyse",
      based: "Gebaseerd op gemiddelde optimalisaties van 10–20%"
    },
    en: {
      title: "Hotel Revenue Calculator",
      rooms: "Number of rooms",
      adr: "Average nightly rate (€)",
      occ: "Occupancy rate (%)",
      calculate: "Calculate my revenue",
      result: "Estimated yearly revenue",
      increase: "Potential increase with HAVN optimization",
      email: "Email for full analysis",
      cta: "Get full revenue analysis",
      based: "Based on average optimization improvements of 10–20%"
    }
  }[language || "en"]

  const calculate = () => {
    const revenue = rooms * adr * (occupancy / 100) * 365
    setResult(revenue)
  }

  const submitLead = async () => {
    if (!email) return
    setLoading(true)
    await fetch("/api/calculator-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rooms, adr, occupancy, email, revenue: result, language })
    })
    setLoading(false)
  }

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="luxury-card p-10 rounded-3xl bg-white shadow-xl border border-gold/20">
        <h2 className="text-3xl font-serif text-center text-black mb-10">
          {text.title}
        </h2>

        <div className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{text.rooms}</label>
            <input
              type="number"
              min="1"
              value={rooms}
              onChange={(e) => setRooms(Number(e.target.value))}
              className="w-full border border-gray-200 rounded-2xl p-4 focus:border-gold focus:ring-2 focus:ring-gold/30 text-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{text.adr}</label>
            <input
              type="number"
              min="10"
              value={adr}
              onChange={(e) => setAdr(Number(e.target.value))}
              className="w-full border border-gray-200 rounded-2xl p-4 focus:border-gold focus:ring-2 focus:ring-gold/30 text-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{text.occ}</label>
            <input
              type="number"
              min="1"
              max="100"
              value={occupancy}
              onChange={(e) => setOccupancy(Number(e.target.value))}
              className="w-full border border-gray-200 rounded-2xl p-4 focus:border-gold focus:ring-2 focus:ring-gold/30 text-lg"
            />
          </div>

          <button
            onClick={calculate}
            className="w-full bg-black hover:bg-gray-900 text-white font-medium py-4 rounded-2xl text-lg transition-all mt-4"
          >
            {text.calculate}
          </button>

          {result !== null && (
            <div className="mt-10 p-8 bg-[var(--background)] rounded-2xl border border-gold/30">
              <p className="text-lg text-gray-600 mb-1">{text.result}</p>
              <p className="text-4xl font-bold text-black">€{Math.round(result).toLocaleString()}</p>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">{text.increase}</p>
                <p className="text-3xl font-semibold text-green-600">+€{Math.round(result * 0.18).toLocaleString()}</p>
                <p className="text-xs text-gray-500 mt-1">{text.based}</p>
              </div>

              <div className="mt-10">
                <label className="block text-sm font-medium text-gray-700 mb-2">{text.email}</label>
                <input
                  type="email"
                  placeholder="jouw@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-200 rounded-2xl p-4 text-lg"
                />
                <button
                  onClick={submitLead}
                  disabled={!email || loading}
                  className="mt-4 w-full bg-gold hover:bg-gold/90 text-black font-medium py-4 rounded-2xl text-lg disabled:opacity-50 transition-all"
                >
                  {loading ? "Bezig..." : text.cta}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}