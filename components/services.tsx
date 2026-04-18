import { Button } from "@/components/ui/button"
import { Settings, Link as LinkIcon, TrendingUp, Zap, FileText, Users, ArrowRight } from "lucide-react"
import { translations } from "@/lib/translations"

interface ServicesProps {
  language: string
}

export function Services({ language }: ServicesProps) {
  const currentLang = language === "nl" || language === "en" ? language : "nl"
  const t = translations[currentLang]
  const icons = [Settings, LinkIcon, TrendingUp, Zap, FileText, Users]

  return (
    <div className="pb-12">   {/* Geen extra section tag meer, want die zit in page.tsx */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif text-black mb-4">
            {t.services.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {t.services.items.map((item, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-gray-100 hover:border-gold transition-all duration-300 luxury-card"
              >
                <Icon className="h-7 w-7 text-gold flex-shrink-0" />
                <span className="text-black font-medium text-base">{item}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}