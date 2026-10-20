import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { translations } from "@/lib/translations"
import { CALENDLY_URL } from "@/lib/constants"

interface HeroProps {
  language: string
}

export function Hero({ language }: HeroProps) {
  // UPDATE: Nu ook "es" toevoegen aan de toegestane talen
  const currentLang = (language === "nl" || language === "en" || language === "es") ? language : "nl"
  const t = translations[currentLang]

  return (
    <section id="home" className="min-h-screen bg-black text-white flex items-center pt-24">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-medium leading-tight text-balance">
              {t.hero.title}
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed font-light">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 relative z-20">
              <Button 
                asChild 
                size="lg" 
                className="duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_10px_24px_-10px_rgba(184,146,92,0.6)] bg-gold text-black hover:bg-gold/90 text-base lg:text-lg px-6 lg:px-8 h-12"
              >
                <Link href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="duration-300 hover:-translate-y-0.5 active:translate-y-0 border-gold text-gold hover:bg-gold hover:text-black text-base lg:text-lg px-6 lg:px-8 h-12 bg-transparent"
              >
                <Link href="#calculator">
                  {t.hero.secondaryCta}
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-col gap-3 pt-2">
              {t.hero.valueBullets.map((bullet, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-300 text-sm lg:text-base">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/images/hero-pic-1.webp"
                alt="Stijlvolle slaapkamer in vakantieverblijf"
                width={600}
                height={400}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="rounded-lg shadow-2xl object-cover w-full max-h-[300px] lg:max-h-[450px]"
              />
            </div>
            <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-full h-full bg-gold/20 rounded-lg -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  )
}