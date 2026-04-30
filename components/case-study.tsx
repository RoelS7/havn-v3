import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CheckCircle, Quote, MapPin } from "lucide-react"
import Image from "next/image"
import { translations } from "@/lib/translations"

interface CaseStudyProps {
  language: string
}

export function CaseStudy({ language }: CaseStudyProps) {
  const currentLang = language === "nl" || language === "en" || language === "es" ? language : "nl"
  const t = translations[currentLang]

  return (
    <section id="case-study" className="py-20 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif text-black mb-4">
            {t.caseStudy.title || "Resultaten in de praktijk"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            {t.caseStudy.subtitle || "Concrete voorbeelden van hoe HAVN eigenaars helpt om meer revenue te genereren"}
          </p>
        </div>

        <Card className="max-w-5xl mx-auto border-2 border-gold/20 overflow-hidden luxury-card">
          <div className="grid lg:grid-cols-2">
            {/* Foto */}
            <div className="relative h-96 lg:h-auto">
              <Image
                src="/images/hoeveschuur-foto.webp"
                alt="De Hoeveschuur"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-gold mb-4">
                <MapPin className="h-5 w-5" />
                <span className="font-light">Riemst, België</span>
              </div>

              <h3 className="text-3xl font-serif font-medium text-black mb-6">
                {t.caseStudy.card.title || "De Hoeveschuur"}
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {t.caseStudy.card.description}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-lg font-semibold text-black mb-4">
                    {t.caseStudy.card.optimizedTitle || "Wat we optimaliseerden"}
                  </h4>
                  <ul className="space-y-3">
                    {t.caseStudy.card.optimizedItems?.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-black mb-4">
                    {t.caseStudy.card.resultTitle || "Resultaten"}
                  </h4>
                  <ul className="space-y-3">
                    {t.caseStudy.card.resultItems?.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <div className="flex items-start gap-4">
                  <Quote className="h-8 w-8 text-gold flex-shrink-0 mt-1" />
                  <p className="text-gray-600 italic text-lg leading-relaxed">
                    "{t.caseStudy.card.quote}"
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-4">- Eigenaars De Hoeveschuur</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}