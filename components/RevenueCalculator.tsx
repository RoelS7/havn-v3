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
    nl: { /* ... je bestaande vertalingen ... */ },
    en: { /* ... je bestaande vertalingen ... */ },
    es: { /* ... je bestaande vertalingen ... */ }
  }[language || "en"] || { /* fallback */ }

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
    <div className="max-w-2xl mx-auto px-4 pt-8 pb-12">
      <div className="luxury-card p-10 rounded-3xl border border-gold/20 bg-white shadow-xl">
        <h2 className="text-3xl font-serif text-black mb-8 text-center">
          {text.title}
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{text.rooms}</label>
            <input
              type="number"
              min="1"
              value={rooms}
              onChange={(e) => setRooms(Number(e.target.value))}
              className="w-full border border-gray-200 rounded-xl p-4 focus:border-gold focus:ring-gold"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{text.adr}</label>
            <input
              type="number"
              min="10"
              value={adr}
              onChange={(e) => setAdr(Number(e.target.value))}
              className="w-full border border-gray-200 rounded-xl p-4 focus:border-gold focus:ring-gold"
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
              className="w-full border border-gray-200 rounded-xl p-4 focus:border-gold focus:ring-gold"
            />
          </div>

          <button
            onClick={calculate}
            className="w-full bg-black hover:bg-gray-900 text-white font-medium py-4 rounded-2xl transition-all"
          >
            {text.calculate}
          </button>

          {result !== null && (
            <div className="mt-10 p-8 bg-[var(--background)] rounded-2xl border border-gold/30">
              <p className="text-lg text-gray-600">{text.result}</p>
              <p className="text-4xl font-bold text-black mt-2">
                €{Math.round(result).toLocaleString()}
              </p>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">{text.increase}</p>
                <p className="text-3xl font-semibold text-green-600">
                  +€{Math.round(result * 0.18).toLocaleString()}
                </p>
                <p className="text-xs text-gray-500 mt-1">{text.based}</p>
              </div>

              <div className="mt-8">
                <input
                  type="email"
                  placeholder={text.email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl p-4"
                />
                <button
                  onClick={submitLead}
                  disabled={!email || loading}
                  className="mt-4 w-full bg-gold hover:bg-gold/90 text-black font-medium py-4 rounded-2xl transition-all disabled:opacity-50"
                >
                  {loading ? "..." : text.cta}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}