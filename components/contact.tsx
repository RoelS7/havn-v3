"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, Mail, MapPin, Clock } from "lucide-material"
import { MessageSquare as MessageIcon, Mail as MailIcon, MapPin as MapIcon, Clock as ClockIcon } from "lucide-react"
import { translations } from "@/lib/translations"

interface ContactProps {
  language: string
}

export function Contact({ language }: ContactProps) {
  // Bepaal de taal en haal de juiste vertalingen op
  const currentLang = language === "nl" || language === "en" || language === "es" ? language : "nl"
  const t = translations[currentLang]

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

    try {
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
        throw new Error("Failed")
      }
    } catch (error) {
      alert(currentLang === "nl" ? "Er ging iets mis. Probeer het opnieuw." : "Something went wrong. Please try again.")
      setLoading(false)
    }
  }

  const handleWhatsApp = () => {
    const whatsappText = currentLang === "nl" 
      ? "Hallo, ik ben geïnteresseerd in een gratis consultatie voor property management."
      : "Hello, I am interested in a free consultation for property management."
    
    window.open(
      `https://wa.me/573127659066?text=${encodeURIComponent(whatsappText)}`,
      "_blank"
    )
  }

  return (
    <section id="contact" className="py-20 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-black mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Linkerzijde: Formulier */}
          <div className="lg:col-span-2">
            <Card className="luxury-card border border-gold/20">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-black">
                  {t.contact.form.title}
                </CardTitle>
                <CardDescription className="text-lg">
                  {t.contact.form.subtitle}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t.contact.form.name}</Label>
                      <Input
                        id="name"
                        placeholder={t.contact.form.placeholders.name}
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t.contact.form.email}</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t.contact.form.placeholders.email}
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t.contact.form.phone}</Label>
                      <Input
                        id="phone"
                        placeholder={t.contact.form.placeholders.phone}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="property-type">{t.contact.form.propertyType}</Label>
                      <Select onValueChange={setPropertyType} value={propertyType}>
                        <SelectTrigger>
                          <SelectValue placeholder={t.contact.form.placeholders.selectType} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bnb">{t.contact.form.propertyTypes.bnb}</SelectItem>
                          <SelectItem value="vacation-rental">{t.contact.form.propertyTypes.vacationRental}</SelectItem>
                          <SelectItem value="small-hotel">{t.contact.form.propertyTypes.smallHotel}</SelectItem>
                          <SelectItem value="apartment">{t.contact.form.propertyTypes.apartment}</SelectItem>
                          <SelectItem value="other">{t.contact.form.propertyTypes.other}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="platforms">{t.contact.form.platforms}</Label>
                    <Input
                      id="platforms"
                      placeholder={t.contact.form.placeholders.platforms}
                      value={currentPlatforms}
                      onChange={(e) => setCurrentPlatforms(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t.contact.form.message}</Label>
                    <Textarea
                      id="message"
                      placeholder={t.contact.form.placeholders.message}
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
                      className="bg-gold text-black hover:bg-gold/90 flex-1 text-lg py-7 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      {loading ? "..." : t.contact.form.submit}
                    </Button>

                    <Button
                      type="button"
                      size="lg"
                      variant="outline"
                      className="border-gold text-gold hover:bg-gold hover:text-black flex-1 text-lg py-7 transition-all duration-300 hover:-translate-y-0.5"
                      onClick={handleWhatsApp}
                    >
                      <MessageIcon className="mr-2 h-5 w-5" />
                      {t.contact.form.whatsapp}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Rechterzijde: Info & Waarom HAVN */}
          <div className="space-y-8">
            <Card className="luxury-card border border-gold/20">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-black">{t.contact.info.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <MessageIcon className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <div className="font-medium">{t.contact.info.whatsapp}</div>
                    <div className="text-gray-600">+57 312 765 9066</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MailIcon className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <div className="font-medium">{t.contact.info.email}</div>
                    <div className="text-gray-600">projects@ateliersmits.be</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapIcon className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <div className="font-medium">{t.contact.info.location}</div>
                    <div className="text-gray-600">{t.contact.info.locationValue}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ClockIcon className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <div className="font-medium">{t.contact.info.responseTime}</div>
                    <div className="text-gray-600">{t.contact.info.responseValue}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black text-white border-2 border-gold/20">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-gold">
                  {t.contact.whyChoose.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                {t.contact.whyChoose.points.map((point: string, index: number) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-gold text-xl">✓</span>
                    <span>{point}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}