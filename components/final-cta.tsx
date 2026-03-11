import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { translations } from "@/lib/translations"

interface FinalCtaProps {
  language: string
}

export function FinalCta({ language }: FinalCtaProps) {
  const currentLang = language === "nl" || language === "en" ? language : "nl"
  const t = translations[currentLang]

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-serif mb-8 text-balance">
            {t.finalCta.title}
          </h2>
          <Button size="lg" className="bg-gold text-black hover:bg-gold/90 text-lg px-8">
            {t.finalCta.button}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
