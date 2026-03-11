import { Button } from "@/components/ui/button"
import { Award, Users, TrendingUp, Clock } from "lucide-react"
import Image from "next/image"

export function About() {
  const stats = [
    {
      icon: Award,
      number: "5+",
      label: "Jaar Ervaring",
    },
    {
      icon: Users,
      number: "50+",
      label: "Tevreden Klanten",
    },
    {
      icon: TrendingUp,
      number: "30%",
      label: "Gemiddelde Revenue Groei",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support",
    },
  ]

  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-serif">
                Over <span className="text-gold">HAVN</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                Als ervaren property management specialist help ik eigenaren van B&B's, vakantiewoningen en kleine
                hotels om hun revenue te maximaliseren door professioneel beheer van online platforms.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                Met jarenlange ervaring in zowel hospitality als digital marketing, combineer ik technische expertise
                met diepgaande kennis van de toeristische sector. Van Airbnb optimalisatie tot complete revenue
                management strategieën - ik zorg ervoor dat uw accommodatie het maximale potentieel behaalt.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-gold">Mijn Aanpak</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Data-gedreven beslissingen voor optimale pricing
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Persoonlijke service met focus op uw specifieke doelen
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Transparante rapportage en continue optimalisatie
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Proactieve communicatie en 24/7 guest support
                </li>
              </ul>
            </div>

            <Button size="lg" className="bg-gold text-black hover:bg-gold/90 text-lg px-8">
              Laten we kennismaken
            </Button>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Professional Portrait"
                width={400}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gold/20 rounded-lg -z-10"></div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-900 rounded-lg border border-gold/20">
                  <stat.icon className="h-8 w-8 text-gold mx-auto mb-3" />
                  <div className="text-3xl font-serif text-gold mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
