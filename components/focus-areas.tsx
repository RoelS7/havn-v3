import { Tag, CalendarCheck, Globe, Clock } from "lucide-react"
import { translations } from "@/lib/translations"

interface FocusAreasProps {
  language: string
}

export function FocusAreas({ language }: FocusAreasProps) {
  const currentLang = (language === "nl" || language === "en" || language === "es") ? language : "nl"
  const t = translations[currentLang]
  const icons = [Tag, CalendarCheck, Globe, Clock]

  return (
    <section className="py-20 bg-[var(--muted)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif text-black mb-4 text-balance">
            {t.focus.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {t.focus.items.map((item, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className="luxury-card group text-center p-8 rounded-2xl border border-gray-100 hover:border-gold transition-[color,background-color,border-color,box-shadow,transform] duration-300 hover:shadow-xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-6 group-hover:bg-gold/20 transition-colors">
                  <Icon className="h-8 w-8 text-gold" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium text-black mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
