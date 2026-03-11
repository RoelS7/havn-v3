import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import { translations } from "@/lib/translations"

interface HeroProps {
  language: string
}

export function Hero({ language }: HeroProps) {
  const currentLang = language === "nl" || language === "en" ? language : "nl"
  const t = translations[currentLang]

  return (
    <section id="home" className="min-h-screen bg-black text-white flex items-center pt-24">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6 order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-medium leading-tight text-balance">
              {t.hero.title}
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed font-light">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 relative z-20">
              <Button size="lg" className="bg-gold text-black hover:bg-gold/90 text-base lg:text-lg px-6 lg:px-8">
                {t.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-black text-base lg:text-lg px-6 lg:px-8 bg-transparent"
              >
                {t.hero.secondaryCta}
              </Button>
            </div>
            
            <p className="text-sm text-gray-400 italic pt-2">
              {t.hero.positioning}
            </p>

            <div className="flex flex-col gap-3 pt-2">
              {t.hero.valueBullets.map((bullet, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                  <span className="text-gray-300 text-sm lg:text-base">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative z-10">
              <Image
                src="/images/home-pic-1.webp"
                alt="Stijlvolle slaapkamer in vakantieverblijf"
                width={600}
                height={400}
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
