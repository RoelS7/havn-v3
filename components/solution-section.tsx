import { Settings, TrendingUp, Zap } from "lucide-react"
import { translations } from "@/lib/translations"

interface SolutionSectionProps {
  language: string
}

export function SolutionSection({ language }: SolutionSectionProps) {
// UPDATE: Nu ook "es" toevoegen aan de toegestane talen
  const currentLang = (language === "nl" || language === "en" || language === "es") ? language : "nl"
  const t = translations[currentLang]
  const icons = [Settings, TrendingUp, Zap]

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif mb-4 text-balance text-white">
            {t.solution.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.solution.pillars.map((pillar, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className="group relative text-center p-8 rounded-2xl bg-white/5 border border-gold/30 
                           hover:border-gold hover:bg-white/10 transition-all duration-300 
                           hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Icon container */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full 
                                bg-gold/10 group-hover:bg-gold/20 transition-colors mb-6">
                  <Icon className="h-8 w-8 text-gold" />
                </div>

                {/* Titel */}
                <h3 className="text-xl font-medium text-gold mb-4">
                  {pillar.title}
                </h3>

                {/* Beschrijving */}
                <p className="text-gray-300 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Subtiele gouden underline op hover */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 h-0.5 w-8 bg-gold/40 
                                group-hover:w-12 group-hover:bg-gold transition-all duration-300" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}