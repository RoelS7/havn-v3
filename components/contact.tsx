"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [currentPlatforms, setCurrentPlatforms] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        propertyType,
        currentPlatforms,
        message,
      }),
    })

    if (res.ok) {
      window.location.href = "/thank-you"
    } else {
      alert("Er ging iets mis. Probeer het opnieuw.")
      setLoading(false)
    }
  }

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/573127659066?text=Hallo, ik ben geïnteresseerd in een gratis consultatie voor property management.",
      "_blank"
    )
  }

  return (
    <section id="contact" className="py-20 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-black mb-4">
            Start Uw <span className="text-gold">Gratis Consultatie</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Klaar om meer rendement te halen uit uw accommodatie? 
            Laat uw gegevens achter en ik neem binnen 24 uur contact met u op.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="luxury-card border border-gold/20">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-black">
                  Vraag Uw Gratis Consultatie Aan
                </CardTitle>
                <CardDescription className="text-lg">
                  Vertel me kort over uw accommodatie en ik maak een persoonlijke analyse.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Naam *</Label>
                      <Input
                        id="name"
                        placeholder="Uw volledige naam"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="uw@email.com"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefoon</Label>
                      <Input
                        id="phone"
                        placeholder="+32 123 456 789"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="property-type">Type accommodatie *</Label>
                      <Select onValueChange={setPropertyType} value={propertyType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecteer type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bnb">B&B</SelectItem>
                          <SelectItem value="vacation-rental">Vakantiewoning</SelectItem>
                          <SelectItem value="small-hotel">Klein Hotel</SelectItem>
                          <SelectItem value="apartment">Appartement</SelectItem>
                          <SelectItem value="other">Andere</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="platforms">Huidige platforms</Label>
                    <Input
                      id="platforms"
                      placeholder="Bijv. Airbnb, Booking.com, Expedia..."
                      value={currentPlatforms}
                      onChange={(e) => setCurrentPlatforms(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Bericht / Opmerkingen</Label>
                    <Textarea
                      id="message"
                      placeholder="Vertel me kort over uw accommodatie, huidige uitdagingen en doelen..."
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                      className="bg-gold text-black hover:bg-gold/90 flex-1 text-lg py-7"
                    >
                      {loading ? "Versturen..." : "Verstuur aanvraag"}
                    </Button>

                    <Button
                      type="button"
                      size="lg"
                      variant="outline"
                      className="border-gold text-gold hover:bg-gold hover:text-black flex-1 text-lg py-7"
                      onClick={handleWhatsApp}
                    >
                      <MessageSquare className="mr-2 h-5 w-5" />
                      WhatsApp Direct
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            <Card className="luxury-card border border-gold/20">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-black">Contact Informatie</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <MessageSquare className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-gray-600">+57 312 765 9066</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-600">projects@ateliersmits.be</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <div className="font-medium">Locatie</div>
                    <div className="text-gray-600">Medellín, Colombia (remote)</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <div className="font-medium">Responstijd</div>
                    <div className="text-gray-600">Binnen 24 uur</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Waarom HAVN sidebar */}
            <Card className="luxury-card border border-gold/20 bg-black text-white">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-gold">Waarom HAVN?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-gold text-xl">✓</span>
                  <span>Persoonlijke aanpak per accommodatie</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gold text-xl">✓</span>
                  <span>Geen langetermijncontracten</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gold text-xl">✓</span>
                  <span>Transparante & eerlijke prijzen</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gold text-xl">✓</span>
                  <span>Bewezen revenue groei</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gold text-xl">✓</span>
                  <span>24/7 gastcommunicatie</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}