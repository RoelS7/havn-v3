import { Settings, TrendingUp, Zap } from "lucide-react"
import { translations } from "@/lib/translations"

interface SolutionSectionProps {
  language: string
}

export function SolutionSection({ language }: SolutionSectionProps) {
  const currentLang = language === "nl" || language === "en" ? language : "nl"
  const t = translations[currentLang]

  const icons = [Settings, TrendingUp, Zap]

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif mb-4 text-balance">
            {t.solution.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.solution.pillars.map((pillar, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className="text-center p-8 rounded-lg bg-white/5 border border-gold/20 hover:border-gold/50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 mb-6">
                  <Icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-medium text-gold mb-3">{pillar.title}</h3>
                <p className="text-gray-300 leading-relaxed">{pillar.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
