import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Gift, Zap } from "lucide-react"

interface LimitedOfferProps {
  language: string
}

export function LimitedOffer({ language }: LimitedOfferProps) {
  const currentLang = language === "nl" || language === "en" ? language : "nl"

  return (
    <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-gold bg-gray-900 shadow-2xl shadow-gold/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-yellow-400 to-gold"></div>

            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <Badge className="bg-gold text-black px-4 py-2 text-lg font-medium">
                  {currentLang === "nl" ? "BEPERKTE TIJD" : "LIMITED TIME"}
                </Badge>
              </div>
              <CardTitle className="text-3xl font-serif text-white mb-4">
                {currentLang === "nl" ? "Exclusieve Lanceringsaanbieding" : "Exclusive Launch Offer"}
              </CardTitle>
              <p className="text-xl text-gray-300">
                {currentLang === "nl"
                  ? "Start vandaag en profiteer van onze introductievoorwaarden"
                  : "Start today and benefit from our introductory terms"}
              </p>
            </CardHeader>

            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Gift className="h-8 w-8 text-gold mt-1" />
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">
                        {currentLang === "nl" ? "30 Dagen Gratis Proberen" : "30 Days Free Trial"}
                      </h3>
                      <p className="text-gray-300">
                        {currentLang === "nl"
                          ? "Volledige toegang tot alle services zonder risico. Geen setup kosten."
                          : "Full access to all services without risk. No setup costs."}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Zap className="h-8 w-8 text-gold mt-1" />
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">
                        {currentLang === "nl" ? "25% Korting Eerste 6 Maanden" : "25% Discount First 6 Months"}
                      </h3>
                      <p className="text-gray-300">
                        {currentLang === "nl"
                          ? "Exclusieve korting voor vroege klanten. Bespaar honderden euro's."
                          : "Exclusive discount for early customers. Save hundreds of euros."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Users className="h-8 w-8 text-gold mt-1" />
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">
                        {currentLang === "nl" ? "Beperkt tot 12 Klanten" : "Limited to 12 Clients"}
                      </h3>
                      <p className="text-gray-300">
                        {currentLang === "nl"
                          ? "We nemen slechts 12 nieuwe klanten aan dit jaar voor persoonlijke service."
                          : "We only accept 12 new clients this year for personal service."}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-8 w-8 text-gold mt-1" />
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">
                        {currentLang === "nl" ? "Actie Eindigt 31 Maart" : "Offer Ends March 31st"}
                      </h3>
                      <p className="text-gray-300">
                        {currentLang === "nl"
                          ? "Deze voorwaarden zijn alleen geldig voor aanmeldingen vóór 31 maart."
                          : "These terms are only valid for registrations before March 31st."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-6 border-t border-gold/20">
                <div className="mb-6">
                  <div className="text-4xl font-serif text-gold mb-2">
                    8 {currentLang === "nl" ? "plekken over" : "spots left"}
                  </div>
                  <div className="text-gray-400">
                    {currentLang === "nl"
                      ? "van de 12 beschikbare plekken dit jaar"
                      : "of the 12 available spots this year"}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gold text-black hover:bg-gold/90 text-lg px-8 py-4">
                    {currentLang === "nl" ? "Claim Uw Plek Nu" : "Claim Your Spot Now"}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold hover:text-black text-lg px-8 py-4 bg-transparent"
                  >
                    {currentLang === "nl" ? "Meer Informatie" : "More Information"}
                  </Button>
                </div>

                <p className="text-sm text-gray-400 mt-4">
                  {currentLang === "nl"
                    ? "Geen verborgen kosten • Maandelijks opzegbaar • 30 dagen geld-terug-garantie"
                    : "No hidden costs • Monthly cancellable • 30-day money-back guarantee"}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
