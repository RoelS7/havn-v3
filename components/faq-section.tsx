"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
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
      nl: "Hoe snel je resultaat ziet, hangt af van je seizoen en van wat we aanpakken. Een prijsaanpassing merk je vaak al bij de volgende boekingen; een nieuwe reservatieflow heeft wat tijd nodig. Ik beloof geen cijfers, wel een eerlijk beeld.",
      en: "How quickly you see results depends on your season and on what we tackle. You often notice a price adjustment with the very next bookings; a new booking flow needs some time. I don't promise figures, but I do give you an honest picture.",
      es: "La rapidez con la que veas resultados depende de tu temporada y de lo que abordemos. Un ajuste de precios a menudo se nota ya en las siguientes reservas; un nuevo flujo de reservas necesita algo de tiempo. No prometo cifras, pero sí una imagen honesta."
      }[currentLang],
      category: "algemeen",
      },
      {
      question: {
      nl: "Wat kost het?",
      en: "What does it cost?",
      es: "¿Cuánto cuesta?"
      }[currentLang],
      answer: {
      nl: "De maandelijkse diensten, HAVN Platform en HAVN Revenue, hebben vaste prijzen die je op deze pagina ziet. De implementatiepakketten (HAVN Launch, Growth en Multi-Property) zijn maatwerk: in een vrijblijvend gesprek bekijk ik wat jouw verblijf nodig heeft, en daarna krijg je een offerte.",
      en: "The monthly services, HAVN Platform and HAVN Revenue, have fixed prices that you can see on this page. The implementation packages (HAVN Launch, Growth and Multi-Property) are tailored: in a no-obligation call I look at what your property needs, and you then receive a quote.",
      es: "Los servicios mensuales, HAVN Platform y HAVN Revenue, tienen precios fijos que ves en esta página. Los paquetes de implementación (HAVN Launch, Growth y Multi-Property) son a medida: en una conversación sin compromiso veo qué necesita tu alojamiento, y después recibes una propuesta."
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
      nl: "Nee. Mijn implementatiepakketten zijn eenmalige projecten. Alleen als je kiest voor HAVN Platform of HAVN Revenue loopt er een maandelijks abonnement, dat je op elk moment kunt stopzetten.",
      en: "No. My implementation packages are one-time projects. Only if you choose HAVN Platform or HAVN Revenue is there a monthly subscription, which you can stop at any time.",
      es: "No. Mis paquetes de implementación son proyectos únicos. Solo si eliges HAVN Platform o HAVN Revenue hay una suscripción mensual, que puedes cancelar en cualquier momento."
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
      nl: "Niet noodzakelijk. Vaak kan ik directe boekingen integreren in je bestaande website. Alleen als die technisch te beperkt is of niet meer past bij wat je wilt, bekijken we samen een nieuwe oplossing.",
      en: "Not necessarily. I can often integrate direct bookings into your existing website. Only if it is technically too limited or no longer fits what you want do we look at a new solution together.",
      es: "No necesariamente. A menudo puedo integrar las reservas directas en tu sitio web actual. Solo si es técnicamente demasiado limitado o ya no encaja con lo que quieres, buscamos juntos una nueva solución."
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
      nl: "Ja. Ik kan een bestaande website uitbreiden of een nieuwe bouwen. Het doel blijft hetzelfde: dat gasten rechtstreeks bij jou kunnen boeken.",
      en: "Yes. I can extend an existing website or build a new one. The goal stays the same: that guests can book directly with you.",
      es: "Sí. Puedo ampliar un sitio web existente o crear uno nuevo. El objetivo sigue siendo el mismo: que los huéspedes puedan reservar directamente contigo."
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
      es: "Las reservas directas te dan más control, reducen la dependencia de OTA como Booking.com y Airbnb, y disminuyen las comisiones. Así queda más ingreso por cada reserva."
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
      en: "Google Hotels displays your property directly in Google's hotel search results. Guests can compare prices and click through to your website to book, which can bring in additional direct bookings.",
      es: "Google Hotels muestra tu alojamiento directamente en los resultados hoteleros de Google. Los huéspedes pueden comparar precios y pasar directamente a tu sitio web para reservar, lo que puede generar reservas directas adicionales."
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
      nl: "Nee. OTA's zoals Booking.com blijven belangrijke verkoopkanalen. Ik help je om er minder afhankelijk van te worden, door daarnaast ook rechtstreekse boekingen via je eigen website mogelijk te maken.",
      en: "No. OTAs such as Booking.com remain important sales channels. I help you become less dependent on them by also making direct bookings possible through your own website.",
      es: "No. Las OTA como Booking.com siguen siendo canales de venta importantes. Te ayudo a depender menos de ellas, haciendo posible también la reserva directa a través de tu propio sitio web."
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
      nl: "Ja. Ik werk met B&B's, vakantiewoningen, appartementen en kleine hotels, zowel met starters als met ervaren eigenaars.",
      en: "Yes. I work with B&Bs, holiday homes, apartments and small hotels, with both beginners and experienced owners.",
      es: "Sí. Trabajo con B&B, casas vacacionales, apartamentos y pequeños hoteles, tanto con principiantes como con propietarios con experiencia."
      }[currentLang],
      category: "algemeen",
      },
      {
      question: {
      nl: "Wat gebeurt er tijdens het eerste gesprek?",
      en: "What happens during the first conversation?",
      es: "¿Qué pasa en la primera conversación?"
      }[currentLang],
      answer: {
      nl: "We overlopen samen je huidige situatie: je prijzen, hoe gasten reserveren, je kanalen en waar je tegenaan loopt. Je krijgt een eerlijke eerste inschatting, ook als je daarna niet met mij verder werkt.",
      en: "Together we go over your current situation: your prices, how guests book, your channels and what you are running into. You get an honest first assessment, even if you don't continue working with me afterwards.",
      es: "Repasamos juntos tu situación actual: tus precios, cómo reservan los huéspedes, tus canales y con qué te encuentras. Recibes una primera valoración honesta, aunque después no sigas trabajando conmigo."
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
          <h2 className="text-3xl lg:text-4xl font-serif text-black mb-4">
            {{ nl: "Veelgestelde vragen", en: "Frequently asked questions", es: "Preguntas frecuentes" }[currentLang]}
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
              onClick={() => {
                setActiveCategory(category.key)
                setOpenItems([])
              }}
              aria-pressed={activeCategory === category.key}
              className={`min-h-11 px-5 active:scale-[0.97] ${activeCategory === category.key ? "bg-gold text-black hover:bg-gold/90" : "border-gold text-gold-ink bg-transparent hover:bg-gold hover:text-black"}`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <Card key={faq.question} className="luxury-card border border-gray-100 hover:border-gold transition-[border-color,transform,box-shadow] duration-300">
              <CardHeader>
                <h3 className="text-lg font-semibold">
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={openItems.includes(index)}
                    aria-controls={`faq-answer-${index}`}
                    className="flex w-full items-center justify-between text-left rounded-md min-h-11"
                  >
                    <span className="pr-8">{faq.question}</span>
                    <ChevronDown aria-hidden="true" className={`h-5 w-5 flex-shrink-0 text-gold-ink transition-transform duration-200 ${openItems.includes(index) ? "rotate-180" : ""}`} />
                  </button>
                </h3>
              </CardHeader>
              {openItems.includes(index) && (
                <CardContent id={`faq-answer-${index}`} className="pt-0 pb-8">
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
