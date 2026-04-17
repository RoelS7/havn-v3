"use client"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [phone, setPhone] = useState("")
const [message, setMessage] = useState("")
const [loading, setLoading] = useState(false)

async function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
  setLoading(true)

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      phone,
      message,
    }),
  })

  if (res.ok) {
    window.location.href = "/thank-you"
  } else {
    alert("Er ging iets mis. Probeer opnieuw.")
    setLoading(false)
  }
}


  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/573127659066?text=Hallo, ik ben geïnteresseerd in een gratis consultatie voor property management.",
      "_blank",
    )
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto mb-16">

      <div className="bg-black text-white rounded-2xl p-10 text-center border border-gold">

        <h3 className="text-3xl font-serif mb-4 text-gold">
          Gratis Revenue Analyse
        </h3>

        <p className="text-lg text-gray-300 mb-6">
          Ontdek hoeveel extra omzet uw accommodatie kan genereren
          met professionele revenue management en platform optimalisatie.
        </p>

        <a
          href="https://calendly.com/smitsro7/consult"
          target="_blank"
          className="inline-block bg-gold text-black px-6 py-3 rounded-lg font-medium hover:bg-gold/90"
        >
          Boek gratis strategiegesprek
        </a>

      </div>

    </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-black mb-4">
            Start Uw <span className="text-gold">Gratis Consultatie</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Klaar om uw revenue te maximaliseren? Neem contact op voor een vrijblijvende consultatie en ontdek hoe ik uw
            accommodatie kan helpen groeien.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-gold/20">
              <CardHeader>
                <CardTitle className="text-2xl text-black font-serif">Vraag Uw Gratis Consultatie Aan</CardTitle>
                <CardDescription className="text-lg">
                  Vertel me over uw accommodatie en ik neem binnen 24 uur contact met u op.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
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
                      requieres
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
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
                    <Label htmlFor="property-type">Type Accommodatie *</Label>
                    <Select>
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
                  <Label htmlFor="current-platforms">Huidige Platforms</Label>
                  <Input id="current-platforms" placeholder="Bijv. Airbnb, Booking.com, Expedia..." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Bericht</Label>
                  <Textarea
                    id="message"
                    placeholder="Vertel me over uw accommodatie, huidige uitdagingen en doelen..."
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="bg-gold text-black hover:bg-gold/90 flex-1"
                  >
                    {loading ? "Versturen..." : "Vraag Gratis Analyse Aan"}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold hover:text-black flex-1 bg-transparent"
                    onClick={handleWhatsApp}
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    WhatsApp Direct
                  </Button>
                </div></form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-2 border-gold/20">
              <CardHeader>
                <CardTitle className="text-xl text-black font-serif">Contact Informatie</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MessageSquare className="h-5 w-5 text-gold mt-1" />
                  <div>
                    <div className="font-medium text-black">WhatsApp</div>
                    <div className="text-gray-600">+57 3127659066</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-gold mt-1" />
                  <div>
                    <div className="font-medium text-black">Email</div>
                    <div className="text-gray-600">projects@ateliersmits.be</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gold mt-1" />
                  <div>
                    <div className="font-medium text-black">Locatie</div>
                    <div className="text-gray-600">Colombia</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-gold mt-1" />
                  <div>
                    <div className="font-medium text-black">Responstijd</div>
                    <div className="text-gray-600">Binnen 24 uur</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black text-white border-2 border-gold/20">
              <CardHeader>
                <CardTitle className="text-xl text-gold font-serif">Waarom Kiezen Voor HAVN?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-gold">✓</span>
                  <span className="text-sm">Gratis consultatie & analyse</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gold">✓</span>
                  <span className="text-sm">Geen langetermijn contracten</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gold">✓</span>
                  <span className="text-sm">Transparante prijzen</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gold">✓</span>
                  <span className="text-sm">Bewezen resultaten</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gold">✓</span>
                  <span className="text-sm">24/7 support</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
