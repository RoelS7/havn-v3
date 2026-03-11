import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Star, MapPin } from "lucide-react"
import Image from "next/image"

interface PortfolioProps {
  language: string
}

export function Portfolio({ language }: PortfolioProps) {
  const currentLang = language === "nl" || language === "en" ? language : "nl"

  const portfolioItems = [
    {
      name: "Villa Serenity",
      location: "Brugge, België",
      type: "Luxury Villa",
      image: "/placeholder.svg?height=300&width=400",
      results: {
        revenue: "+47%",
        occupancy: "94%",
        rating: "4.9",
        period: "6 maanden",
      },
      services:
        currentLang === "nl"
          ? ["Full Management", "Dynamische Pricing", "24/7 Support"]
          : ["Full Management", "Dynamic Pricing", "24/7 Support"],
      description:
        currentLang === "nl"
          ? "Luxe villa in het hart van Brugge, getransformeerd van seizoensgebonden naar jaar-rond succes."
          : "Luxury villa in the heart of Bruges, transformed from seasonal to year-round success.",
    },
    {
      name: "Cozy Loft Collection",
      location: "Antwerpen, België",
      type: "Urban Apartments",
      image: "/placeholder.svg?height=300&width=400",
      results: {
        revenue: "+62%",
        occupancy: "89%",
        rating: "4.8",
        period: "8 maanden",
      },
      services:
        currentLang === "nl"
          ? ["Growth Pakket", "Marketing Campagnes", "Review Management"]
          : ["Growth Package", "Marketing Campaigns", "Review Management"],
      description:
        currentLang === "nl"
          ? "Portfolio van 4 moderne lofts, geoptimaliseerd voor zakelijke en leisure gasten."
          : "Portfolio of 4 modern lofts, optimized for business and leisure guests.",
    },
    {
      name: "B&B Le Charme",
      location: "Gent, België",
      type: "Boutique B&B",
      image: "/placeholder.svg?height=300&width=400",
      results: {
        revenue: "+38%",
        occupancy: "91%",
        rating: "4.9",
        period: "5 maanden",
      },
      services:
        currentLang === "nl"
          ? ["Basic Pakket", "Platform Optimalisatie", "Prijsstrategie"]
          : ["Basic Package", "Platform Optimization", "Pricing Strategy"],
      description:
        currentLang === "nl"
          ? "Charmante B&B met 3 kamers, focus op authentieke Gentse ervaring."
          : "Charming B&B with 3 rooms, focused on authentic Ghent experience.",
    },
  ]

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">
            {currentLang === "nl" ? "Ons " : "Our "}
            <span className="text-gold">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            {currentLang === "nl"
              ? "Ontdek hoe we accommodaties transformeren tot winstgevende successen"
              : "Discover how we transform accommodations into profitable successes"}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-2 border-gray-700 hover:border-gold transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gold text-black">{item.type}</Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-white font-serif text-xl">{item.name}</CardTitle>
                <div className="flex items-center text-gray-400">
                  <MapPin className="h-4 w-4 mr-1" />
                  {item.location}
                </div>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gray-800 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-gold mx-auto mb-1" />
                    <div className="text-gold font-medium">{item.results.revenue}</div>
                    <div className="text-xs text-gray-400">Revenue</div>
                  </div>
                  <div className="text-center p-3 bg-gray-800 rounded-lg">
                    <Users className="h-5 w-5 text-gold mx-auto mb-1" />
                    <div className="text-gold font-medium">{item.results.occupancy}</div>
                    <div className="text-xs text-gray-400">{currentLang === "nl" ? "Bezetting" : "Occupancy"}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-gold mr-1" />
                    <span className="text-gold">{item.results.rating}</span>
                  </div>
                  <div className="text-sm text-gray-400">{item.results.period}</div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-gray-400">{currentLang === "nl" ? "Services:" : "Services:"}</div>
                  <div className="flex flex-wrap gap-1">
                    {item.services.map((service, serviceIndex) => (
                      <Badge key={serviceIndex} variant="outline" className="text-xs border-gold text-gold">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            {currentLang === "nl"
              ? "Wilt u ook zulke resultaten? Laten we uw potentieel bespreken."
              : "Want similar results? Let's discuss your potential."}
          </p>
        </div>
      </div>
    </section>
  )
}
