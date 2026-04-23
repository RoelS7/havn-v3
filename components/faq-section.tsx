"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, MessageSquare, HelpCircle } from "lucide-react"
import { translations } from "@/lib/translations"
import Link from "next/link"

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
        nl: "Onze prijzen zijn transparant en afhankelijk van het gekozen pakket. We werken met een combinatie van een maandelijkse fee en een percentage van uw revenue.",
        en: "Our prices are transparent and depend on the chosen package. We work with a combination of monthly fee and percentage of your revenue.",
        es: "Nuestros precios son transparentes y dependen del paquete elegido. Trabajamos con una combinación de cuota mensual y porcentaje de ingresos."
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
        nl: "Nee, alle onze pakketten zijn maandelijks opzegbaar. We geloven in resultaten, niet in het vastzetten van klanten.",
        en: "No, all our packages are monthly cancellable. We believe in results, not in locking in customers.",
        es: "No, todos nuestros paquetes se pueden cancelar mensualmente. Creemos en los resultados, no en retener a los clientes por contrato."
      }[currentLang],
      category: "algemeen",
    },
    {
      question: {
        nl: "Welke platforms beheren jullie?",
        en: "Which platforms do you manage?",
        es: "¿Qué plataformas gestionan?"
      }[currentLang],
      answer: {
        nl: "We beheren alle grote platforms: Airbnb, Booking.com, Expedia, Hotels.com, Vrbo en meer.",
        en: "We manage all major platforms: Airbnb, Booking.com, Expedia, Hotels.com, Vrbo and more.",
        es: "Gestionamos todas las plataformas principales: Airbnb, Booking.com, Expedia, Hotels.com, Vrbo y más."
      }[currentLang],
      category: "services",
    },
    {
      question: {
        nl: "Hoe werkt de communicatie met gasten?",
        en: "How does guest communication work?",
        es: "¿Cómo funciona la comunicación con los huéspedes?"
      }[currentLang],
      answer: {
        nl: "We bieden 24/7 gastcommunicatie in meerdere talen. Van eerste contact tot check-out, wij regelen alles.",
        en: "We offer 24/7 guest communication in multiple languages. From first contact to check-out, we handle everything.",
        es: "Ofrecemos comunicación con los huéspedes 24/7 en varios idiomas. Desde el primer contacto hasta el check-out, lo gestionamos todo."
      }[currentLang],
      category: "services",
    }
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