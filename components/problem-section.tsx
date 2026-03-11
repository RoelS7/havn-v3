import { Clock, TrendingDown, Layers } from "lucide-react"
import { translations } from "@/lib/translations"

interface ProblemSectionProps {
  language: string
}

export function ProblemSection({ language }: ProblemSectionProps) {
  const currentLang = language === "nl" || language === "en" ? language : "nl"
  const t = translations[currentLang]

  const icons = [Clock, TrendingDown, Layers]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif text-black mb-4 text-balance">
            {t.problem.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.problem.items.map((item, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg border border-gray-100 hover:border-gold/50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-6">
                  <Icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-medium text-black mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
