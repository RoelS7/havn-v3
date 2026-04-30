"use client"
import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Quote, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { translations } from "@/lib/translations"

interface CaseStudyProps {
  language: string
}

export function CaseStudy({ language }: CaseStudyProps) {
  const currentLang = (language === "nl" || language === "en" || language === "es") ? language : "nl"
  const t = translations[currentLang]

  const [currentIndex, setCurrentIndex] = useState(0)

  const cases = [
    {
      image: "/images/hoeveschuur-foto.webp",
      imageAlt: "De Hoeveschuur — Millen, België",
      title: {
        nl: "De Hoeveschuur – Automatisatie van een vakantieverblijf",
        en: "De Hoeveschuur – Automation of a vacation rental",
        es: "De Hoeveschuur – Automatización de una estancia vacacional",
      }[currentLang],
      location: {
        nl: "Millen, België",
        en: "Millen, Belgium",
        es: "Millen, Bélgica",
      }[currentLang],
      description: {
        nl: "Voor De Hoeveschuur hebben we het volledige verhuursysteem geoptimaliseerd zodat de eigenaar minder tijd kwijt is aan administratie en het verblijf professioneler kan beheren.",
        en: "For De Hoeveschuur, we optimized the entire rental system so the owner spends less time on administration and can manage the property more professionally.",
        es: "Para De Hoeveschuur, optimizamos todo el sistema de gestión para que el propietario dedique menos tiempo a la administración y pueda gestionar la propiedad de manera más profesional.",
      }[currentLang],
      optimizedTitle: {
        nl: "Wat werd geoptimaliseerd",
        en: "What was optimized",
        es: "Qué fue optimizado",
      }[currentLang],
      optimizedItems: {
        nl: [
          "Configuratie van het reserveringssysteem",
          "Automatisatie van gastcommunicatie",
          "Optimalisatie van operationele workflows",
          "Ontwerp en ontwikkeling van de website",
          "Rapportering en inzichten voor de eigenaar",
        ],
        en: [
          "Configuration of the reservation system",
          "Automation of guest communication",
          "Optimization of operational workflows",
          "Design and development of the website",
          "Reporting and insights for the owner",
        ],
        es: [
          "Configuración del sistema de reservas",
          "Automatización de la comunicación con huéspedes",
          "Optimización de los flujos de trabajo operativos",
          "Diseño y desarrollo del sitio web",
          "Informes e información para el propietario",
        ],
      }[currentLang],
      resultTitle: {
        nl: "Resultaat",
        en: "Result",
        es: "Resultado",
      }[currentLang],
      resultItems: {
        nl: [
          "Sterk verminderde administratieve workload",
          "Automatische communicatie met gasten",
          "Professioneel reserveringssysteem",
          "Meer inzicht in boekingen en prestaties",
        ],
        en: [
          "Strongly reduced administrative workload",
          "Automatic communication with guests",
          "Professional reservation system",
          "More insight into bookings and performance",
        ],
        es: [
          "Carga administrativa fuertemente reducida",
          "Comunicación automática con los huéspedes",
          "Sistema de reservas profesional",
          "Mayor visibilidad sobre reservas y rendimiento",
        ],
      }[currentLang],
      quote: {
        nl: "HAVN heeft ons enorm veel tijd bespaard en onze verhuur veel professioneler gemaakt.",
        en: "HAVN has saved us an enormous amount of time and made our rental much more professional.",
        es: "HAVN nos ha ahorrado muchísimo tiempo y ha hecho nuestra gestión mucho más profesional.",
      }[currentLang],
      quoteAuthor: "Eigenaar, De Hoeveschuur",
    },
    {
      image: "/images/cc-home.jpg",
      imageAlt: "Casa Clandestina Guest House — Medellín, Colombia",
      title: {
        nl: "Casa Clandestina Guest House – Professionele opstart in Medellín",
        en: "Casa Clandestina Guest House – Professional launch in Medellín",
        es: "Casa Clandestina Guest House – Lanzamiento profesional en Medellín",
      }[currentLang],
      location: "Medellín, Colombia",
      description: {
        nl: "Voor Casa Clandestina Guest House in het hart van Medellín zorgden we voor een volledige professionele opstart op Airbnb, inclusief channel manager en geautomatiseerde prijsstrategie via Beds24.",
        en: "For Casa Clandestina Guest House in the heart of Medellín, we provided a complete professional launch on Airbnb, including channel manager and automated pricing strategy via Beds24.",
        es: "Para Casa Clandestina Guest House en el corazón de Medellín, realizamos un lanzamiento profesional completo en Airbnb, incluyendo channel manager y estrategia de precios automatizada con Beds24.",
      }[currentLang],
      optimizedTitle: {
        nl: "Wat werd opgezet",
        en: "What was set up",
        es: "Qué fue implementado",
      }[currentLang],
      optimizedItems: {
        nl: [
          "Professionele Airbnb listing setup en optimalisatie",
          "Integratie van Beds24 als channel manager",
          "Dynamische prijsstrategie op basis van vraag en seizoen",
          "Automatisatie van check-in instructies en gastberichten",
          "Synchronisatie van kalenders over meerdere platformen",
        ],
        en: [
          "Professional Airbnb listing setup and optimization",
          "Integration of Beds24 as channel manager",
          "Dynamic pricing strategy based on demand and season",
          "Automation of check-in instructions and guest messages",
          "Calendar synchronization across multiple platforms",
        ],
        es: [
          "Configuración y optimización profesional del anuncio en Airbnb",
          "Integración de Beds24 como channel manager",
          "Estrategia de precios dinámica basada en demanda y temporada",
          "Automatización de instrucciones de check-in y mensajes a huéspedes",
          "Sincronización de calendarios en múltiples plataformas",
        ],
      }[currentLang],
      resultTitle: {
        nl: "Resultaat",
        en: "Result",
        es: "Resultado",
      }[currentLang],
      resultItems: {
        nl: [
          "Hogere bezettingsgraad in de eerste maanden",
          "Geoptimaliseerde prijzen per dag en seizoen",
          "Minder manueel werk voor de eigenaar",
          "Professionele gastervaring vanaf dag één",
        ],
        en: [
          "Higher occupancy rate in the first months",
          "Optimized pricing per day and season",
          "Less manual work for the owner",
          "Professional guest experience from day one",
        ],
        es: [
          "Mayor tasa de ocupación en los primeros meses",
          "Precios optimizados por día y temporada",
          "Menos trabajo manual para el propietario",
          "Experiencia de huésped profesional desde el primer día",
        ],
      }[currentLang],
      quote: {
        nl: "Dankzij HAVN draaien onze boekingen op automatische piloot. We hoeven ons niet meer bezig te houden met de dagelijkse operatie.",
        en: "Thanks to HAVN, our bookings run on autopilot. We no longer have to worry about the daily operations.",
        es: "Gracias a HAVN, nuestras reservas funcionan en piloto automático. Ya no tenemos que preocuparnos por las operaciones diarias.",
      }[currentLang],
      quoteAuthor: "Eigenaar, Casa Clandestina Guest House",
    },
  ]

  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length)
  }

  const prevCase = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length)
  }

  const current = cases[currentIndex]

  return (
    <section id="case-study" className="py-20 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif text-black mb-4">
            {t.caseStudy.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            {t.caseStudy.subtitle}
          </p>
        </div>

        <Card className="max-w-5xl mx-auto border-2 border-gold/20 overflow-hidden luxury-card">
          {/* Foto bovenaan - landscape */}
          <div className="relative h-[380px] md:h-[460px] w-full">
            <Image
              src={current.image}
              alt={current.imageAlt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Slider pijltjes */}
            <button
              onClick={prevCase}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextCase}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <CardContent className="p-8 lg:p-12">
            <div className="flex items-center gap-2 text-gold mb-4">
              <MapPin className="h-5 w-5" />
              <span className="font-light">{current.location}</span>
            </div>

            <h3 className="text-3xl font-serif font-medium text-black mb-6">
              {current.title}
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              {current.description}
            </p>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-lg font-semibold text-black mb-4">
                  {current.optimizedTitle}
                </h4>
                <ul className="space-y-3">
                  {current.optimizedItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-black mb-4">
                  {current.resultTitle}
                </h4>
                <ul className="space-y-3">
                  {current.resultItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-10 mt-10">
              <div className="flex items-start gap-4">
                <Quote className="h-8 w-8 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-600 italic text-lg leading-relaxed mb-2">
                    "{current.quote}"
                  </p>
                  <p className="text-sm text-gray-500">{current.quoteAuthor}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}