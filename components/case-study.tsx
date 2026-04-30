import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CheckCircle, Quote, MapPin } from "lucide-react"
import { translations } from "@/lib/translations"

interface CaseStudyProps {
  language: string
}

export function CaseStudy({ language }: CaseStudyProps) {
  const currentLang = (language === "nl" || language === "en" || language === "es") ? language : "nl"
  const t = translations[currentLang]

  const cases = [
    {
      image: "public/images/hoeveschuur-foto.webp",
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
      image: "public/images/cc-home.jpg",
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
    {
      image: "public/images/ccc-foto.webp",
      imageAlt: "Casa Clandestina Campestre — San Rafael, Colombia",
      title: {
        nl: "Casa Clandestina Campestre – Van lokale verhuur naar internationaal platform",
        en: "Casa Clandestina Campestre – From local rental to international platform",
        es: "Casa Clandestina Campestre – De alquiler local a plataforma internacional",
      }[currentLang],
      location: "San Rafael, Colombia",
      description: {
        nl: "Casa Clandestina Campestre is een sfeervol landelijk verblijf in San Rafael. We hielpen de eigenaar om het volledige verhuurbeheer te professionaliseren en internationaal zichtbaar te maken via meerdere platformen.",
        en: "Casa Clandestina Campestre is a charming rural property in San Rafael. We helped the owner professionalize the entire rental management and gain international visibility across multiple platforms.",
        es: "Casa Clandestina Campestre es una encantadora propiedad rural en San Rafael. Ayudamos al propietario a profesionalizar toda la gestión de alquiler y ganar visibilidad internacional en múltiples plataformas.",
      }[currentLang],
      optimizedTitle: {
        nl: "Wat werd opgezet",
        en: "What was set up",
        es: "Qué fue implementado",
      }[currentLang],
      optimizedItems: {
        nl: [
          "Volledige Airbnb setup en professionele fotostrategie",
          "Beds24 channel manager voor multi-platform beheer",
          "Dynamische prijsstrategie afgestemd op het Colombiaanse marktseizoen",
          "Geautomatiseerde gastcommunicatie in meerdere talen",
          "Koppeling met Booking.com en andere internationale platformen",
        ],
        en: [
          "Complete Airbnb setup and professional photo strategy",
          "Beds24 channel manager for multi-platform management",
          "Dynamic pricing strategy tailored to the Colombian market season",
          "Automated guest communication in multiple languages",
          "Connection with Booking.com and other international platforms",
        ],
        es: [
          "Configuración completa de Airbnb y estrategia fotográfica profesional",
          "Channel manager Beds24 para gestión en múltiples plataformas",
          "Estrategia de precios dinámica adaptada a la temporada del mercado colombiano",
          "Comunicación automatizada con huéspedes en varios idiomas",
          "Conexión con Booking.com y otras plataformas internacionales",
        ],
      }[currentLang],
      resultTitle: {
        nl: "Resultaat",
        en: "Result",
        es: "Resultado",
      }[currentLang],
      resultItems: {
        nl: [
          "Internationaal zichtbaar op meerdere boekingsplatformen",
          "Bezettingsgraad gestegen in de eerste kwartaal",
          "Volledig geautomatiseerd reserveringsbeheer",
          "Eigenaar focust op gastvrijheid in plaats van administratie",
        ],
        en: [
          "Internationally visible on multiple booking platforms",
          "Occupancy rate increased in the first quarter",
          "Fully automated reservation management",
          "Owner focuses on hospitality instead of administration",
        ],
        es: [
          "Visible internacionalmente en múltiples plataformas de reservas",
          "Tasa de ocupación aumentada en el primer trimestre",
          "Gestión de reservas completamente automatizada",
          "El propietario se enfoca en la hospitalidad en lugar de la administración",
        ],
      }[currentLang],
      quote: {
        nl: "HAVN heeft ons verblijf op de kaart gezet. Gasten uit heel de wereld vinden ons nu en de boekingen lopen vanzelf.",
        en: "HAVN put our property on the map. Guests from all over the world now find us and bookings run automatically.",
        es: "HAVN puso nuestra propiedad en el mapa. Huéspedes de todo el mundo nos encuentran ahora y las reservas se gestionan solas.",
      }[currentLang],
      quoteAuthor: "Eigenaar, Casa Clandestina Campestre",
    },
  ]

  return (
    <section id="case-study" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif text-black mb-4">
            {t.caseStudy.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            {t.caseStudy.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {cases.map((c, i) => (
            <Card key={i} className="border-2 border-gold/20 overflow-hidden">

              {/* Foto */}
              <div className="relative w-full h-64 md:h-80 overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl md:text-2xl font-serif font-medium text-white mb-1">
                    {c.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gold">
                    <MapPin className="h-4 w-4" />
                    <span className="font-light text-sm">{c.location}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-8 space-y-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {c.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-4">
                      {c.optimizedTitle}
                    </h4>
                    <ul className="space-y-3">
                      {c.optimizedItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-4">
                      {c.resultTitle}
                    </h4>
                    <ul className="space-y-3">
                      {c.resultItems.map((item, index) => (
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
                    <div>
                      <p className="text-gray-600 italic text-lg leading-relaxed mb-2">
                        "{c.quote}"
                      </p>
                      <p className="text-sm text-gray-400">{c.quoteAuthor}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}