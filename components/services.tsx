import { Button } from "@/components/ui/button"
import { Settings, Link, TrendingUp, Zap, FileText, Users, ArrowRight } from "lucide-react"
import { translations } from "@/lib/translations"

interface ServicesProps {
  language: string
}

export function Services({ language }: ServicesProps) {
  const currentLang = language === "nl" || language === "en" ? language : "nl"
  const t = translations[currentLang]

  const icons = [Settings, Link, TrendingUp, Zap, FileText, Users]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif text-black mb-4">{t.services.title}</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {t.services.items.map((item, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-white border border-gray-100 hover:border-gold/50 transition-colors"
              >
                <Icon className="h-6 w-6 text-gold flex-shrink-0" />
                <span className="text-black font-medium text-sm lg:text-base">{item}</span>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-black text-gold hover:bg-gray-900 text-lg px-8">
            {t.services.cta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
