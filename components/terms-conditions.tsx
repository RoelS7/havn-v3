import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale, AlertTriangle, CheckCircle } from "lucide-react"

export function TermsConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <Scale className="h-16 w-16 text-gold mx-auto mb-4" />
          <h1 className="text-4xl font-serif text-black mb-4">Algemene Voorwaarden</h1>
          <p className="text-gray-600">Laatst bijgewerkt: 15 maart 2024</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <FileText className="h-6 w-6 text-gold mr-2" />
                Definities & Toepasselijkheid
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Deze algemene voorwaarden zijn van toepassing op alle diensten verleend door HAVN Property Management
                ("HAVN", "wij", "ons").
              </p>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Definities:</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <strong>Klant:</strong> De natuurlijke of rechtspersoon die gebruik maakt van onze diensten
                  </li>
                  <li>
                    <strong>Accommodatie:</strong> Het onroerend goed dat wordt beheerd
                  </li>
                  <li>
                    <strong>Platforms:</strong> Airbnb, Booking.com, Expedia en andere verhuurplatforms
                  </li>
                  <li>
                    <strong>Services:</strong> Alle door HAVN geleverde property management diensten
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Dienstverlening & Verplichtingen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-medium">Onze Diensten:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Property management en platformbeheer</li>
                <li>Prijsoptimalisatie en revenue management</li>
                <li>Gastcommunicatie en support</li>
                <li>Marketing en promotie</li>
                <li>Rapportage en analytics</li>
              </ul>

              <h4 className="font-medium mt-6">Klantverplichtingen:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Verstrekking van accurate accommodatie-informatie</li>
                <li>Tijdige betaling van facturen</li>
                <li>Naleving van platform-regels en lokale wetgeving</li>
                <li>Toegang verlenen tot benodigde accounts en systemen</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Prijzen & Betalingsvoorwaarden</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Tariefstructuur:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Maandelijks service fee</li>
                    <li>• Percentage van bruto-inkomsten</li>
                    <li>• Setup kosten (indien van toepassing)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Betalingsvoorwaarden:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Betaling binnen 14 dagen</li>
                    <li>• Automatische incasso mogelijk</li>
                    <li>• Late payment fee: 1.5% per maand</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <p className="text-sm">
                  <strong>Prijswijzigingen:</strong> Prijzen kunnen worden aangepast met een opzegtermijn van 30 dagen.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <AlertTriangle className="h-6 w-6 text-gold mr-2" />
                Opzegging & Beëindiging
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-medium">Opzegging door Klant:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Maandelijks opzegbaar met 30 dagen opzegtermijn</li>
                <li>Schriftelijke opzegging vereist</li>
                <li>Geen opzeggingskosten (behalve bij contractbreuk)</li>
              </ul>

              <h4 className="font-medium mt-6">Opzegging door HAVN:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Bij niet-betaling na 2 herinneringen</li>
                <li>Bij schending van voorwaarden</li>
                <li>Met 30 dagen opzegtermijn zonder opgave van reden</li>
              </ul>

              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <p className="text-sm">
                  <strong>Let op:</strong> Bij beëindiging worden alle toegangen en data binnen 30 dagen overgedragen of
                  verwijderd.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Aansprakelijkheid & Garanties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-medium">Onze Garanties:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Service Level</p>
                    <p className="text-sm text-gray-600">99% uptime garantie</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-sm text-gray-600">24 uur voor support</p>
                  </div>
                </div>
              </div>

              <h4 className="font-medium mt-6">Aansprakelijkheidsbeperking:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Aansprakelijkheid beperkt tot betaalde service fees</li>
                <li>Geen aansprakelijkheid voor indirecte schade</li>
                <li>Force majeure uitgesloten</li>
                <li>Klant draagt risico voor platform-wijzigingen</li>
              </ul>

              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <p className="text-sm">
                  <strong>Belangrijke beperking:</strong> HAVN is niet aansprakelijk voor schade door
                  platform-suspensies, marktveranderingen of overmacht.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Intellectueel Eigendom & Vertrouwelijkheid</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-medium">Intellectueel Eigendom:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Alle door HAVN ontwikkelde systemen blijven ons eigendom</li>
                <li>Klant behoudt eigendom van accommodatie-content</li>
                <li>Wederzijds respecteren van merkrechten</li>
              </ul>

              <h4 className="font-medium mt-6">Vertrouwelijkheid:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Wederzijdse geheimhoudingsplicht</li>
                <li>Bescherming van bedrijfsgevoelige informatie</li>
                <li>Geen doorgifte aan derden zonder toestemming</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Geschillenregeling & Toepasselijk Recht</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-medium">Geschillenregeling:</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Eerst overleg tussen partijen</li>
                <li>Mediation via erkende instantie</li>
                <li>Als laatste redmiddel: rechtbank</li>
              </ol>

              <div className="bg-gray-100 p-4 rounded-lg">
                <p>
                  <strong>Toepasselijk Recht:</strong> Belgisch recht
                  <br />
                  <strong>Bevoegde Rechtbank:</strong> Rechtbanken van België
                  <br />
                  <strong>Taal:</strong> Nederlands
                </p>
              </div>

              <h4 className="font-medium mt-6">Contact voor Geschillen:</h4>
              <p className="text-gray-600">
                Email: legal@havn.be
                <br />
                Telefoon: +32 123 456 789
                <br />
                Adres: HAVN Property Management, België
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
