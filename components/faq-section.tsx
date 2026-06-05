"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, HelpCircle } from "lucide-react"
import { translations } from "@/lib/translations"

interface FAQSectionProps {
  language: string
}

export function FAQSection({ language }: FAQSectionProps) {
  const currentLang = (language === "nl" || language === "en" || language === "es") ? language : "nl"
  const t = translations[currentLang]

  const [openItems, setOpenItems] = useState<number[]>([0])
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const faqData = [
    {
      question: {
      nl: "Hoe snel zie ik resultaten?",
      en: "How quickly will I see results?",
      es: "¿Qué tan pronto veré resultados?"
      }[currentLang],
      answer: {
      nl: "De technische implementatie is meestal binnen enkele weken afgerond. Directe boekingen kunnen onmiddellijk binnenkomen zodra het systeem live staat. Verbeteringen in bezetting, prijsstrategie en opbrengst worden doorgaans zichtbaar binnen de eerste 2 tot 3 maanden.",
      en: "Technical implementation is usually completed within a few weeks. Direct bookings can start coming in as soon as the system goes live. Improvements in occupancy, pricing strategy and revenue are typically visible within the first 2 to 3 months.",
      es: "La implementación técnica suele completarse en unas pocas semanas. Las reservas directas pueden comenzar a llegar tan pronto como el sistema esté activo. Las mejoras en ocupación, estrategia de precios e ingresos suelen ser visibles dentro de los primeros 2 o 3 meses."
      }[currentLang],
      category: "algemeen",
      },
      {
      question: {
      nl: "Wat kost jullie service?",
      en: "What does your service cost?",
      es: "¿Cuánto cuesta su servicio?"
      }[currentLang],
      answer: {
      nl: "HAVN werkt met vaste pakketten voor directe boekingen, automatisatie en revenue optimalisatie. De meeste projecten vallen binnen HAVN Launch, Growth of Scale. Tijdens een gratis strategiegesprek bekijken we welk pakket het beste aansluit bij jouw accommodatie.",
      en: "HAVN works with fixed packages for direct bookings, automation and revenue optimization. Most projects fit within HAVN Launch, Growth or Scale. During a free strategy call we determine which package best suits your property.",
      es: "HAVN trabaja con paquetes fijos para reservas directas, automatización y optimización de ingresos. La mayoría de los proyectos encajan en HAVN Launch, Growth o Scale. Durante una llamada estratégica gratuita determinamos qué paquete se adapta mejor a su propiedad."
      }[currentLang],
      category: "pricing",
      },
      {
      question: {
      nl: "Moet ik langetermijncontracten tekenen?",
      en: "Do I need to sign long-term contracts?",
      es: "¿Tengo que firmar contratos a largo plazo?"
      }[currentLang],
      answer: {
      nl: "Nee. Onze implementatiepakketten zijn eenmalige projecten. Enkel wanneer je kiest voor HAVN Platform of HAVN Revenue geldt een maandelijks abonnement dat op elk moment kan worden stopgezet.",
      en: "No. Our implementation packages are one-time projects. Only HAVN Platform and HAVN Revenue are recurring monthly services that can be cancelled at any time.",
      es: "No. Nuestros paquetes de implementación son proyectos únicos. Solo HAVN Platform y HAVN Revenue son servicios mensuales recurrentes que pueden cancelarse en cualquier momento."
      }[currentLang],
      category: "pricing",
      },
      {
      question: {
      nl: "Heb ik een nieuwe website nodig?",
      en: "Do I need a new website?",
      es: "¿Necesito un nuevo sitio web?"
      }[currentLang],
      answer: {
      nl: "Niet noodzakelijk. In veel gevallen kunnen we directe boekingen integreren in een bestaande website. Alleen wanneer de huidige website technisch beperkt is of niet meer aansluit bij je doelstellingen, bekijken we samen een nieuwe oplossing.",
      en: "Not necessarily. In many cases we can integrate direct bookings into an existing website. Only when the current website is technically limited or no longer supports your goals do we consider a new solution.",
      es: "No necesariamente. En muchos casos podemos integrar reservas directas en un sitio web existente. Solo cuando el sitio actual es técnicamente limitado o ya no cumple sus objetivos consideramos una nueva solución."
      }[currentLang],
      category: "services",
      },
      {
      question: {
      nl: "Werkt HAVN ook met bestaande websites?",
      en: "Does HAVN work with existing websites?",
      es: "¿HAVN funciona con sitios web existentes?"
      }[currentLang],
      answer: {
      nl: "Ja. HAVN kan zowel bestaande websites uitbreiden als volledig nieuwe websites ontwikkelen. Het doel blijft hetzelfde: meer directe boekingen genereren via je eigen kanaal.",
      en: "Yes. HAVN can enhance existing websites or develop entirely new ones. The goal remains the same: generating more direct bookings through your own channel.",
      es: "Sí. HAVN puede mejorar sitios web existentes o desarrollar nuevos. El objetivo sigue siendo el mismo: generar más reservas directas a través de su propio canal."
      }[currentLang],
      category: "services",
      },
      {
      question: {
      nl: "Waarom zou ik directe boekingen stimuleren?",
      en: "Why should I encourage direct bookings?",
      es: "¿Por qué debería fomentar las reservas directas?"
      }[currentLang],
      answer: {
      nl: "Directe boekingen zorgen voor meer controle, minder afhankelijkheid van OTA's zoals Booking.com en Airbnb, en lagere commissiekosten. Daardoor blijft er meer opbrengst over per reservering.",
      en: "Direct bookings provide more control, reduce dependence on OTAs such as Booking.com and Airbnb, and lower commission costs. This means more revenue remains from every reservation.",
      es: "Las reservas directas ofrecen más control, reducen la dependencia de OTAs como Booking.com y Airbnb, y disminuyen las comisiones. Esto deja más ingresos por cada reserva."
      }[currentLang],
      category: "algemeen",
      },
      {
      question: {
      nl: "Wat is Google Hotels?",
      en: "What is Google Hotels?",
      es: "¿Qué es Google Hotels?"
      }[currentLang],
      answer: {
      nl: "Google Hotels toont jouw accommodatie rechtstreeks in de hotelresultaten van Google. Gasten kunnen prijzen vergelijken en rechtstreeks doorklikken naar jouw website om te reserveren, wat extra directe boekingen kan opleveren.",
      en: "Google Hotels displays your property directly in Google's hotel search results. Guests can compare prices and book directly through your website, generating additional direct bookings.",
      es: "Google Hotels muestra su alojamiento directamente en los resultados hoteleros de Google. Los huéspedes pueden comparar precios y reservar directamente a través de su sitio web, generando más reservas directas."
      }[currentLang],
      category: "services",
      },
      {
      question: {
      nl: "Moet ik Booking.com verlaten?",
      en: "Should I leave Booking.com?",
      es: "¿Debería abandonar Booking.com?"
      }[currentLang],
      answer: {
      nl: "Nee. OTA's zoals Booking.com blijven belangrijke verkoopkanalen. HAVN helpt je om minder afhankelijk te worden van commissies door daarnaast ook directe boekingen via je eigen website te stimuleren.",
      en: "No. OTAs such as Booking.com remain valuable sales channels. HAVN helps you become less dependent on commissions by increasing direct bookings through your own website.",
      es: "No. Las OTAs como Booking.com siguen siendo canales de venta importantes. HAVN le ayuda a depender menos de las comisiones aumentando las reservas directas a través de su propio sitio web."
      }[currentLang],
      category: "services",
      },
      {
      question: {
      nl: "Werkt HAVN ook met kleine accommodaties of starters?",
      en: "Does HAVN also work with small properties or beginners?",
      es: "¿HAVN también trabaja con propiedades pequeñas o principiantes?"
      }[currentLang],
      answer: {
      nl: "Ja. HAVN werkt met B&B's, vakantiewoningen, appartementen en kleine hospitality operators. Zowel starters als ervaren hosts kunnen profiteren van betere systemen, automatisatie en directe boekingen.",
      en: "Yes. HAVN works with B&Bs, vacation rentals, apartments and small hospitality operators. Both beginners and experienced hosts can benefit from better systems, automation and direct bookings.",
      es: "Sí. HAVN trabaja con B&Bs, alquileres vacacionales, apartamentos y pequeños operadores de hospitalidad. Tanto principiantes como anfitriones experimentados pueden beneficiarse de mejores sistemas, automatización y reservas directas."
      }[currentLang],
      category: "algemeen",
      },
      {
      question: {
      nl: "Wat gebeurt er tijdens het gratis strategiegesprek?",
      en: "What happens during the free strategy call?",
      es: "¿Qué sucede durante la llamada estratégica gratuita?"
      }[currentLang],
      answer: {
      nl: "Tijdens het gesprek bekijken we jouw huidige setup, website, boekingskanalen en grootste uitdagingen. Je krijgt concrete inzichten en aanbevelingen, ongeacht of je daarna met HAVN verderwerkt.",
      en: "During the call we review your current setup, website, booking channels and biggest challenges. You'll receive concrete insights and recommendations regardless of whether you continue with HAVN afterwards.",
      es: "Durante la llamada revisamos su configuración actual, sitio web, canales de reserva y principales desafíos. Recibirá recomendaciones concretas independientemente de si continúa trabajando con HAVN después."
      }[currentLang],
      category: "algemeen",
      },
  ]

  const categories = [
    { key: "all", label: { nl: "Alle", en: "All", es: "Todos" }[currentLang] },
    { key: "algemeen", label: { nl: "Algemeen", en: "General", es: "General" }[currentLang] },
    { key: "services", label: { nl: "Services", en: "Services", es: "Servicios" }[currentLang] },
    { key: "pricing", label: { nl: "Prijzen", en: "Pricing", es: "Precios" }[currentLang] }
  ]

  const filteredFAQs = activeCategory === "all"
    ? faqData
    : faqData.filter((faq) => faq.category === activeCategory)

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <HelpCircle className="h-16 w-16 text-gold mx-auto mb-4" />
          <h2 className="text-4xl font-serif text-black mb-4">
            {{ nl: "Veelgestelde ", en: "Frequently Asked ", es: "Preguntas " }[currentLang]}
            <span className="text-gold">{{ nl: "Vragen", en: "Questions", es: "Frecuentes" }[currentLang]}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            {{
              nl: "Vind snel antwoorden op de meest gestelde vragen",
              en: "Find quick answers to the most frequently asked questions",
              es: "Encuentre respuestas rápidas a las preguntas más comunes"
            }[currentLang]}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.key}
              variant={activeCategory === category.key ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.key)}
              className={activeCategory === category.key ? "bg-gold text-black" : "border-gold text-gold hover:bg-gold hover:text-black"}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <Card key={index} className="luxury-card border border-gray-100 hover:border-gold transition-all duration-300">
              <CardHeader className="cursor-pointer" onClick={() => toggleItem(index)}>
                <CardTitle className="flex items-center justify-between text-lg">
                  <span className="text-left pr-8">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 text-gold transition-transform ${openItems.includes(index) ? "rotate-180" : ""}`} />
                </CardTitle>
              </CardHeader>
              {openItems.includes(index) && (
                <CardContent className="pt-0 pb-8">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
