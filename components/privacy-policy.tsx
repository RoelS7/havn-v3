import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, FileText } from "lucide-react"

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-gold mx-auto mb-4" />
          <h1 className="text-4xl font-serif text-black mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Laatst bijgewerkt: 15 maart 2024</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <FileText className="h-6 w-6 text-gold mr-2" />
                Algemene Informatie
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                HAVN ("wij", "ons", "onze") respecteert uw privacy en zet zich in voor de bescherming van uw
                persoonlijke gegevens. Deze privacy policy legt uit hoe wij uw informatie verzamelen, gebruiken en
                beschermen.
              </p>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Contactgegevens:</h4>
                <p>
                  HAVN Property Management
                  <br />
                  België
                  <br />
                  Email: privacy@havn.be
                  <br />
                  Telefoon: +32 123 456 789
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Eye className="h-6 w-6 text-gold mr-2" />
                Welke Gegevens Verzamelen Wij
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-medium">Persoonlijke Gegevens:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Naam en contactgegevens (email, telefoon)</li>
                <li>Bedrijfsinformatie en accommodatiedetails</li>
                <li>Communicatie en correspondentie</li>
                <li>Betalingsinformatie (verwerkt door beveiligde derde partijen)</li>
              </ul>

              <h4 className="font-medium mt-6">Technische Gegevens:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>IP-adres en browserinformatie</li>
                <li>Website gebruiksstatistieken (via Google Analytics)</li>
                <li>Cookies en vergelijkbare technologieën</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Lock className="h-6 w-6 text-gold mr-2" />
                Hoe Wij Uw Gegevens Gebruiken
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Wij gebruiken uw gegevens voor:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Het leveren van onze property management services</li>
                <li>Communicatie over uw account en services</li>
                <li>Verbetering van onze website en services</li>
                <li>Marketing (alleen met uw toestemming)</li>
                <li>Naleving van wettelijke verplichtingen</li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <p className="text-sm">
                  <strong>Rechtsgrondslag:</strong> Wij verwerken uw gegevens op basis van contractuele noodzaak,
                  gerechtvaardigd belang, en uw toestemming waar vereist.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Uw Rechten (GDPR)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Onder de GDPR heeft u de volgende rechten:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h5 className="font-medium">Toegang & Correctie</h5>
                  <p className="text-sm text-gray-600">Recht op inzage en correctie van uw gegevens</p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-medium">Verwijdering</h5>
                  <p className="text-sm text-gray-600">Recht op verwijdering ("recht om vergeten te worden")</p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-medium">Beperking</h5>
                  <p className="text-sm text-gray-600">Recht op beperking van verwerking</p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-medium">Overdraagbaarheid</h5>
                  <p className="text-sm text-gray-600">Recht op gegevensoverdraagbaarheid</p>
                </div>
              </div>

              <div className="bg-gold/10 p-4 rounded-lg">
                <p className="text-sm">
                  Om uw rechten uit te oefenen, neem contact op via <strong>privacy@havn.be</strong>. Wij reageren
                  binnen 30 dagen.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Beveiliging & Bewaring</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-medium">Beveiligingsmaatregelen:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>SSL-encryptie voor alle datatransmissie</li>
                <li>Beveiligde servers en regelmatige backups</li>
                <li>Toegangscontrole en authenticatie</li>
                <li>Regelmatige beveiligingsaudits</li>
              </ul>

              <h4 className="font-medium mt-6">Bewaartermijnen:</h4>
              <p className="text-gray-600">
                Wij bewaren uw gegevens niet langer dan noodzakelijk voor de doeleinden waarvoor ze zijn verzameld, of
                zoals vereist door de wet (maximaal 7 jaar voor boekhoudkundige gegevens).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Cookies & Tracking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Onze website gebruikt cookies voor:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  <strong>Essentiële cookies:</strong> Voor basisfunctionaliteit
                </li>
                <li>
                  <strong>Analytische cookies:</strong> Google Analytics voor websitestatistieken
                </li>
                <li>
                  <strong>Functionele cookies:</strong> Taalvoorkeuren en instellingen
                </li>
              </ul>

              <p className="text-sm text-gray-600">
                U kunt cookies beheren via uw browserinstellingen. Het uitschakelen van cookies kan de functionaliteit
                beïnvloeden.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Contact & Klachten</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Voor vragen over deze privacy policy of uw gegevens:</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p>
                  <strong>Email:</strong> privacy@havn.be
                  <br />
                  <strong>Telefoon:</strong> +32 123 456 789
                  <br />
                  <strong>Responstijd:</strong> Binnen 48 uur
                </p>
              </div>

              <p className="text-sm text-gray-600">
                U heeft ook het recht om een klacht in te dienen bij de Belgische Gegevensbeschermingsautoriteit (GBA)
                als u van mening bent dat wij uw gegevens niet correct verwerken.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
