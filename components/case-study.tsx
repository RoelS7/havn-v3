import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CheckCircle, Quote, MapPin } from "lucide-react"
import { translations } from "@/lib/translations"
import Image from "next/image"

interface CaseStudyProps {
  language: string
}

export function CaseStudy({ language }: CaseStudyProps) {
  const currentLang = language === "nl" || language === "en" || language === "es" ? language : "nl"
  const t = translations[currentLang]

  const cases = [
    {
      id: "hoeveschuur",
      title: t.caseStudy.cases.hoeveschuur.title || "De Hoeveschuur",
      location: "Riemst, België",
      image: "/images/hoeveschuur-foto.webp",
      description: t.caseStudy.cases.hoeveschuur.description || "Volledige automatisering en revenue optimalisatie van een premium vakantieverblijf in België.",
      optimized: t.caseStudy.cases.hoeveschuur.optimized || [
        "Beds24 channel manager + kalender sync",
        "Dynamische prijsstrategie",
        "Automatische gastcommunicatie",
        "Review optimalisatie"
      ],
      results: t.caseStudy.cases.hoeveschuur.results || [
        "+34% revenue in eerste 6 maanden",
        "Bezettingsgraad van 61% → 89%",
        "Significant minder administratie"
      ],
      quote: t.caseStudy.cases.hoeveschuur.quote || "Dankzij HAVN hebben we eindelijk tijd voor onszelf terwijl de revenue fors is gestegen.",
      quoteAuthor: "Eigenaars De Hoeveschuur"
    },
    {
      id: "clandestina-guest",
      title: "Casa Clandestina Guest House",
      location: "Medellín, Colombia",
      image: "/images/cc-home.jpg",
      description: "Opzet en optimalisatie van een populaire guest house in Medellín met focus op automatisering en directe boekingen.",
      optimized: [
        "Volledige Beds24 implementatie",
        "Airbnb + Booking.com optimalisatie",
        "Dynamische prijsstrategie",
        "Automatische check-in/out communicatie"
      ],
      results: [
        "+41% revenue in eerste jaar",
        "Directe boekingen via eigen website +28%",
        "90%+ bezettingsgraad in hoogseizoen"
      ],
      quote: "Roel heeft ons van een chaotische guest house naar een professioneel en winstgevend businessmodel geholpen.",
      quoteAuthor: "Eigenaars Casa Clandestina"
    },
    {
      id: "clandestina-campestre",
      title: "Casa Clandestina Campestre",
      location: "San Rafael, Colombia",
      image: "/images/ccc-foto.webp",
      description: "Automatisering en revenue management voor een rustieke finca in de bergen van San Rafael.",
      optimized: [
        "Beds24 channel manager setup",
        "Dynamische pricing gebaseerd op seizoen en events",
        "Gastcommunicatie automatisering",
        "Professionele listing optimalisatie"
      ],
      results: [
        "+37% gemiddelde kamerprijs",
        "Bezettingsgraad gestegen naar 82%",
        "Significant minder no-shows"
      ],
      quote: "De automatisering heeft ons enorm veel tijd bespaard en de inkomsten sterk verhoogd.",
      quoteAuthor: "Eigenaars Casa Clandestina Campestre"
    }
  ]

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

        <div className="space-y-16">
          {cases.map((caseStudy, index) => (
            <Card key={caseStudy.id} className="luxury-card overflow-hidden border border-gold/20">
              <div className="grid lg:grid-cols-2">
                {/* Foto */}
                <div className="relative h-80 lg:h-full min-h-[320px]">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-2 text-gold mb-4">
                    <MapPin className="h-5 w-5" />
                    <span className="font-light">{caseStudy.location}</span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-serif font-medium text-black mb-6">
                    {caseStudy.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-8">
                    {caseStudy.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-black mb-4">Wat we optimaliseerden</h4>
                      <ul className="space-y-3">
                        {caseStudy.optimized.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-black mb-4">Resultaten</h4>
                      <ul className="space-y-3">
                        {caseStudy.results.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-gray-200">
                    <div className="flex items-start gap-4">
                      <Quote className="h-8 w-8 text-gold flex-shrink-0 mt-1" />
                      <p className="text-gray-600 italic">
                        "{caseStudy.quote}"
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">- {caseStudy.quoteAuthor}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}