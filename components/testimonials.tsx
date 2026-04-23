import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"
import { translations } from "@/lib/translations"

interface TestimonialsProps {
  language: string
}

export function Testimonials({ language }: TestimonialsProps) {
  const currentLang = (language === "nl" || language === "en" || language === "es") ? language : "nl"
  const t = translations[currentLang]

  const testimonials = [
    {
      name: "Marie Dubois",
      property: "Villa Serenity, Brugge",
      rating: 5,
      text: {
        nl: "Dankzij HAVN is onze revenue met 47% gestegen in slechts 4 maanden. De professionele aanpak en 24/7 support maken het verschil.",
        en: "Thanks to HAVN, our revenue increased by 47% in just 4 months. The professional approach and 24/7 support make all the difference.",
        es: "Gracias a HAVN, nuestros ingresos aumentaron un 47% en solo 4 meses. El enfoque profesional y el soporte 24/7 marcan la diferencia."
      }[currentLang],
      image: "/placeholder.svg?height=80&width=80",
      results: {
        nl: "+47% Revenue",
        en: "+47% Revenue",
        es: "+47% Ingresos"
      }[currentLang],
    },
    {
      name: "Jan Vermeulen",
      property: "Cozy Loft Antwerpen",
      rating: 5,
      text: {
        nl: "Eindelijk kan ik met een gerust hart op vakantie. HAVN regelt alles perfect en mijn gasten zijn nog tevredener dan voorheen.",
        en: "Finally I can go on vacation with peace of mind. HAVN handles everything perfectly and my guests are even more satisfied than before.",
        es: "Finalmente puedo irme de vacaciones con tranquilidad. HAVN gestiona todo perfectamente y mis huéspedes están más satisfechos que antes."
      }[currentLang],
      image: "/placeholder.svg?height=80&width=80",
      results: {
        nl: "100% Bezetting",
        en: "100% Occupancy",
        es: "100% Ocupación"
      }[currentLang],
    },
    {
      name: "Sophie Laurent",
      property: "B&B Le Charme, Gent",
      rating: 5,
      text: {
        nl: "De dynamische prijsstrategie heeft onze winst verdubbeld. Ik had nooit gedacht dat zoveel optimalisatie mogelijk was.",
        en: "The dynamic pricing strategy doubled our profit. I never thought so much optimization was possible.",
        es: "La estrategia de precios dinámicos duplicó nuestras ganancias. Nunca imaginé que fuera posible tanta optimización."
      }[currentLang],
      image: "/placeholder.svg?height=80&width=80",
      results: {
        nl: "+120% Winst",
        en: "+120% Profit",
        es: "+120% Ganancias"
      }[currentLang],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-black mb-4">
            {{
              nl: "Wat Onze Klanten Zeggen",
              en: "What Our Clients Say",
              es: "Lo Que Dicen Nuestros Clientes"
            }[currentLang]}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            {{
              nl: "Ontdek hoe eigenaren van B&B's en hotels hun revenue maximaliseren met onze professionele service",
              en: "Discover how B&B and hotel owners maximize their revenue with our professional service",
              es: "Descubre cómo los dueños de propiedades maximizan sus ingresos con nuestro servicio profesional"
            }[currentLang]}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 border-transparent hover:border-gold transition-all duration-300 relative"
            >
              <CardHeader className="text-center pb-4">
                <div className="absolute top-4 right-4 bg-gold text-black px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.results}
                </div>
                <Quote className="h-8 w-8 text-gold mx-auto mb-4" />
                <div className="flex justify-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center justify-center space-x-3 pt-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="text-left">
                    <div className="font-medium text-black">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.property}</div>
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