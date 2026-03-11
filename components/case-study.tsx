import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CheckCircle, Quote, MapPin } from "lucide-react"
import { translations } from "@/lib/translations"

interface CaseStudyProps {
  language: string
}

export function CaseStudy({ language }: CaseStudyProps) {
  const currentLang = language === "nl" || language === "en" ? language : "nl"
  const t = translations[currentLang]

  return (
    <section id="case-study" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif text-black mb-4">
            {t.caseStudy.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            {t.caseStudy.subtitle}
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border-2 border-gold/20 overflow-hidden">
          <CardHeader className="bg-black text-white p-8">
            <h3 className="text-2xl lg:text-3xl font-serif font-medium mb-2">
              {t.caseStudy.card.title}
            </h3>
            <div className="flex items-center gap-2 text-gold">
              <MapPin className="h-5 w-5" />
              <span className="font-light">{t.caseStudy.card.location}</span>
            </div>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              {t.caseStudy.card.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-black mb-4">
                  {t.caseStudy.card.optimizedTitle}
                </h4>
                <ul className="space-y-3">
                  {t.caseStudy.card.optimizedItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-black mb-4">
                  {t.caseStudy.card.resultTitle}
                </h4>
                <ul className="space-y-3">
                  {t.caseStudy.card.resultItems.map((item, index) => (
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
                <Quote className="h-8 w-8 text-gold flex-shrink-0" />
                <p className="text-gray-600 italic text-lg leading-relaxed">
                  "{t.caseStudy.card.quote}"
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
