import { Button } from "@/components/ui/button"
import { Settings, Link as LinkIcon, TrendingUp, Zap, FileText, Users, ArrowRight } from "lucide-react"
import { translations } from "@/lib/translations"
import Link from "next/link"


interface ServicesProps {
  language: string
}

export function Services({ language }: ServicesProps) {
  const currentLang = language === "nl" || language === "en" ? language : "nl"
  const t = translations[currentLang]
  const icons = [Settings, LinkIcon, TrendingUp, Zap, FileText, Users]

  return (
    <div id="services" className="pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif text-black mb-4">
            {t.services.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {t.services.items.map((item, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className="group flex items-center gap-5 p-8 rounded-3xl bg-white border border-gray-100 
                           hover:border-gold hover:shadow-xl transition-all duration-300 luxury-card"
              >
                <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-2xl bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <Icon className="h-7 w-7 text-gold" />
                </div>
                <span className="text-black font-medium text-lg leading-tight">{item}</span>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg bg-black text-gold hover:bg-gray-900 text-lg px-10 py-7 rounded-2xl"
          >
            <Link href="https://calendly.com/smitsro7/consult">
            {t.services.cta}
            <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}