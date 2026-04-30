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
        nl: "De meeste klanten zien binnen 2-4 weken de eerste verbeteringen in hun bezettingsgraad en binnen 2-3 maanden significante revenue groei.",
        en: "Most clients see initial improvements in occupancy within 2-4 weeks and significant revenue growth within 2-3 months.",
        es: "La mayoría de los clientes ven mejoras iniciales en la ocupación en 2-4 semanas y un crecimiento significativo de los ingresos en 2-3 meses."
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
        nl: "Omdat elke accommodatie anders is, werken we altijd met een persoonlijke offerte. Tijdens een gratis strategiegesprek bekijken we samen uw situatie en maken we een voorstel op maat. Er zijn geen verborgen kosten.",
        en: "Because every property is different, we always work with a personalized quote. During a free strategy call, we look at your situation together and create a tailored proposal. There are no hidden costs.",
        es: "Debido a que cada propiedad es diferente, siempre trabajamos con una cotización personalizada. Durante una llamada estratégica gratuita, analizamos su situación juntos y elaboramos una propuesta a medida. No hay costos ocultos."
      }[currentLang],
      category: "pricing",
    },
    {
      question: {
        nl: "Moet ik langetermijn contracten tekenen?",
        en: "Do I need to sign long-term contracts?",
        es: "¿Tengo que firmar contratos a largo plazo?"
      }[currentLang],
      answer: {
        nl: "Nee. We geloven in resultaten, niet in het vastzetten van klanten. Alles verloopt op basis van vertrouwen en bewezen meerwaarde.",
        en: "No. We believe in results, not in locking in customers. Everything is based on trust and proven value.",
        es: "No. Creemos en los resultados, no en retener a los clientes por contrato. Todo se basa en la confianza y el valor demostrado."
      }[currentLang],
      category: "algemeen",
    },
    {
      question: {
        nl: "Welke platforms optimaliseren jullie?",
        en: "Which platforms do you optimize?",
        es: "¿Qué plataformas optimizan?"
      }[currentLang],
      answer: {
        nl: "We werken met alle grote platforms: Airbnb, Booking.com, Expedia, Vrbo en meer. Daarnaast helpen we ook bij het opzetten van directe boekingen via uw eigen website, wat commissiekosten bespaart.",
        en: "We work with all major platforms: Airbnb, Booking.com, Expedia, Vrbo and more. We also help set up direct bookings through your own website, saving commission costs.",
        es: "Trabajamos con todas las plataformas principales: Airbnb, Booking.com, Expedia, Vrbo y más. También ayudamos a configurar reservas directas a través de su propio sitio web, ahorrando costos de comisión."
      }[currentLang],
      category: "services",
    },
    {
      question: {
        nl: "Wat is dynamische prijsstrategie en waarom is het belangrijk?",
        en: "What is dynamic pricing and why does it matter?",
        es: "¿Qué es la fijación de precios dinámica y por qué es importante?"
      }[currentLang],
      answer: {
        nl: "Dynamische prijsstrategie betekent dat uw kamerprijzen automatisch worden aangepast op basis van vraag, seizoen, lokale events en concurrentie. Hosts die dit goed toepassen verdienen gemiddeld 20-30% meer dan hosts met vaste prijzen.",
        en: "Dynamic pricing means your room rates are automatically adjusted based on demand, season, local events and competition. Hosts who apply this well earn an average of 20-30% more than hosts with fixed rates.",
        es: "La fijación de precios dinámica significa que las tarifas de su propiedad se ajustan automáticamente según la demanda, la temporada, los eventos locales y la competencia. Los anfitriones que aplican esto correctamente ganan un promedio de 20-30% más que los que tienen precios fijos."
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
        nl: "Ja. We werken met B&B's, vakantiewoningen, appartementen en kleine hotels — zowel met ervaren hosts als met mensen die net beginnen. Een gratis strategiegesprek is altijd de eerste stap.",
        en: "Yes. We work with B&Bs, vacation rentals, apartments and small hotels — both with experienced hosts and people just starting out. A free strategy call is always the first step.",
        es: "Sí. Trabajamos con B&Bs, alquileres vacacionales, apartamentos y pequeños hoteles, tanto con anfitriones experimentados como con personas que recién comienzan. Una llamada estratégica gratuita es siempre el primer paso."
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
        nl: "In 30 minuten bekijken we uw huidige setup, identificeren we de grootste opportuniteiten en bespreken we hoe HAVN u concreet kan helpen. Geen verkooppraatje — gewoon een eerlijk gesprek over wat er beter kan.",
        en: "In 30 minutes we review your current setup, identify the biggest opportunities and discuss how HAVN can concretely help you. No sales pitch — just an honest conversation about what can be improved.",
        es: "En 30 minutos revisamos su configuración actual, identificamos las mayores oportunidades y discutimos cómo HAVN puede ayudarle concretamente. Sin discurso de ventas, solo una conversación honesta sobre lo que se puede mejorar."
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
