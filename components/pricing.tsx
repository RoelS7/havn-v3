import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Crown, Zap } from "lucide-react"

export function Pricing() {
  const pricingPlans = [
    {
      name: "Basic",
      icon: Zap,
      description: "Perfect voor starters die hun eerste stappen willen zetten",
      features: [
        "Profieloptimalisatie op alle platforms",
        "Basis platformbeheer",
        "Maandelijkse rapportage",
        "Email ondersteuning",
        "Setup van 2 platforms",
      ],
      popular: false,
    },
    {
      name: "Growth",
      icon: Star,
      description: "Ideaal voor accommodaties die willen groeien en optimaliseren",
      features: [
        "Alles van Basic pakket",
        "Dynamische prijsstrategie",
        "24/7 communicatiebeheer",
        "Geavanceerde analytics",
        "Review management",
        "Seizoensoptimalisatie",
        "WhatsApp ondersteuning",
      ],
      popular: true,
    },
    {
      name: "Full Management",
      icon: Crown,
      description: "Complete service voor maximale revenue en zorgeloze ervaring",
      features: [
        "Alles van Growth pakket",
        "Persoonlijke account manager",
        "Wekelijkse strategiesessies",
        "Concurrentieanalyse",
        "Marketing campagnes",
        "Uitbreidingsadvies",
        "Priority support",
        "Maandelijkse optimalisatie",
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">
            Transparante <span className="text-gold">Prijzen</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Kies het pakket dat perfect past bij uw accommodatie en ambities. Alle pakketten zijn maandelijks opzegbaar
            en zonder verborgen kosten.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "border-gold bg-gray-900 shadow-2xl shadow-gold/20"
                  : "border-gray-700 bg-gray-800 hover:border-gold/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gold text-black px-4 py-1 rounded-full text-sm font-medium">Meest Populair</div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <plan.icon className={`h-12 w-12 ${plan.popular ? "text-gold" : "text-gray-400"}`} />
                </div>
                <CardTitle className="text-2xl font-serif text-white mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-gray-300 text-base">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Button
                    className={`w-full text-lg py-6 ${
                      plan.popular
                        ? "bg-gold text-black hover:bg-gold/90"
                        : "bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-black"
                    }`}
                    size="lg"
                  >
                    Vraag Persoonlijke Offerte
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 space-y-4">
          <p className="text-gray-400">Niet zeker welk pakket het beste bij u past? Laten we het samen bespreken.</p>
          <Button
            size="lg"
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-black bg-transparent"
          >
            Plan Gratis Kennismakingsgesprek
          </Button>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-serif text-gold">30 Dagen</div>
            <div className="text-sm text-gray-400">Geld-terug-garantie</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-serif text-gold">24/7</div>
            <div className="text-sm text-gray-400">Support beschikbaar</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-serif text-gold">Geen</div>
            <div className="text-sm text-gray-400">Langetermijn contracten</div>
          </div>
        </div>
      </div>
    </section>
  )
}
