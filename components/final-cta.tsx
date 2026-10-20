import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { translations } from "@/lib/translations"
import Link from "next/link"
import { CALENDLY_URL } from "@/lib/constants"


interface FinalCtaProps {
  language: string
}

export function FinalCta({ language }: FinalCtaProps) {
// UPDATE: Nu ook "es" toevoegen aan de toegestane talen
  const currentLang = (language === "nl" || language === "en" || language === "es") ? language : "nl"
  const t = translations[currentLang]

  return (
    <section className="py-24 bg-black surface-ink text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-serif mb-8 text-balance">
            {t.finalCta.title}
          </h2>
          <Button 
              asChild
              size="lg" 
              className="btn-sheen duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_10px_24px_-10px_rgba(184,146,92,0.6)] bg-gold text-black hover:bg-gold/90 text-lg px-8 h-12">
              <Link href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              {t.finalCta.button}
            <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
