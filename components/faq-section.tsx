"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, MessageSquare, HelpCircle } from "lucide-react"
import { translations } from "@/lib/translations"

interface FAQSectionProps {
  language: string
}

export function FAQSection({ language }: FAQSectionProps) {
  const currentLang = language === "nl" || language === "en" ? language : "nl"
  const t = translations[currentLang]

  const [openItems, setOpenItems] = useState<number[]>([0]) // Eerste item open
  const [activeCategory, setActiveCategory] = useState<string>("all")

  // === ALLE OORSPRONKELIJKE VRAGEN EN ANTWOORDEN ===
  const faqData = [
    {
      question: currentLang === "nl" ? "Hoe snel zie ik resultaten?" : "How quickly will I see results?",
      answer: currentLang === "nl"
        ? "De meeste klanten zien binnen 2-4 weken de eerste verbeteringen in hun bezettingsgraad en binnen 2-3 maanden significante revenue groei."
        : "Most clients see initial improvements in occupancy within 2-4 weeks and significant revenue growth within 2-3 months.",
      category: "algemeen",
    },
    {
      question: currentLang === "nl" ? "Wat kost jullie service?" : "What does your service cost?",
      answer: currentLang === "nl"
        ? "Onze prijzen zijn transparant en afhankelijk van het gekozen pakket. We werken met een combinatie van een maandelijkse fee en een percentage van uw revenue. Neem contact op voor een persoonlijke offerte."
        : "Our prices are transparent and depend on the chosen package. We work with a combination of monthly fee and percentage of your revenue. Contact us for a personal quote.",
      category: "pricing",
    },
    {
      question: currentLang === "nl" ? "Moet ik langetermijn contracten tekenen?" : "Do I need to sign long-term contracts?",
      answer: currentLang === "nl"
        ? "Nee, alle onze pakketten zijn maandelijks opzegbaar. We geloven in resultaten, niet in het vastzetten van klanten."
        : "No, all our packages are monthly cancellable. We believe in results, not in locking in customers.",
      category: "algemeen",
    },
    {
      question: currentLang === "nl" ? "Welke platforms beheren jullie?" : "Which platforms do you manage?",
      answer: currentLang === "nl"
        ? "We beheren alle grote platforms: Airbnb, Booking.com, Expedia, Hotels.com, Vrbo en meer."
        : "We manage all major platforms: Airbnb, Booking.com, Expedia, Hotels.com, Vrbo and more.",
      category: "services",
    },
    {
      question: currentLang === "nl" ? "Hoe werkt de communicatie met gasten?" : "How does guest communication work?",
      answer: currentLang === "nl"
        ? "We bieden 24/7 gastcommunicatie in meerdere talen. Van eerste contact tot check-out, wij regelen alles."
        : "We offer 24/7 guest communication in multiple languages. From first contact to check-out, we handle everything.",
      category: "services",
    },
    {
      question: currentLang === "nl" ? "Wat gebeurt er als ik stop met jullie service?" : "What happens if I stop using your service?",
      answer: currentLang === "nl"
        ? "Bij opzegging krijgt u binnen 30 dagen alle toegangen en data overgedragen. We zorgen voor een soepele overgang."
        : "Upon cancellation, you receive all access and data transferred within 30 days. We ensure a smooth transition.",
      category: "algemeen",
    },
    {
      question: currentLang === "nl" ? "Hoe optimaliseren jullie mijn prijzen?" : "How do you optimize my pricing?",
      answer: currentLang === "nl"
        ? "We gebruiken geavanceerde algoritmes die rekening houden met seizoenen, lokale events, concurrentie, vraag en aanbod."
        : "We use advanced algorithms that consider seasons, local events, competition, supply and demand.",
      category: "technisch",
    },
    {
      question: currentLang === "nl" ? "Krijg ik inzicht in de resultaten?" : "Do I get insight into the results?",
      answer: currentLang === "nl"
        ? "Ja, u krijgt maandelijkse rapportages met alle belangrijke metrics. Ook heeft u 24/7 toegang tot ons dashboard."
        : "Yes, you receive monthly reports with all important metrics. You also have 24/7 access to our dashboard.",
      category: "services",
    },
    {
      question: currentLang === "nl" ? "Wat als mijn accommodatie unieke eisen heeft?" : "What if my accommodation has unique requirements?",
      answer: currentLang === "nl"
        ? "Elke accommodatie is anders. We maken altijd een persoonlijke strategie die past bij uw specifieke situatie."
        : "Every accommodation is different. We always create a personal strategy that fits your specific situation.",
      category: "services",
    },
    {
      question: currentLang === "nl" ? "Hoe zit het met de beveiliging van mijn gegevens?" : "How about the security of my data?",
      answer: currentLang === "nl"
        ? "We nemen privacy en beveiliging zeer serieus. Alle data wordt versleuteld opgeslagen en we zijn GDPR-compliant."
        : "We take privacy and security very seriously. All data is stored encrypted and we are GDPR-compliant.",
      category: "technisch",
    },
  ]

  const categories = [
    { key: "all", label: currentLang === "nl" ? "Alle" : "All" },
    { key: "algemeen", label: currentLang === "nl" ? "Algemeen" : "General" },
    { key: "services", label: currentLang === "nl" ? "Services" : "Services" },
    { key: "pricing", label: currentLang === "nl" ? "Prijzen" : "Pricing" },
    { key: "technisch", label: currentLang === "nl" ? "Technisch" : "Technical" },
  ]

  const filteredFAQs = activeCategory === "all" 
    ? faqData 
    : faqData.filter((faq) => faq.category === activeCategory)

  const toggleItem = (index: number) => {
    setOpenItems((prev) => 
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <HelpCircle className="h-16 w-16 text-gold mx-auto mb-4" />
          <h2 className="text-4xl font-serif text-black mb-4">
            {currentLang === "nl" ? "Veelgestelde " : "Frequently Asked "}
            <span className="text-gold">{currentLang === "nl" ? "Vragen" : "Questions"}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            {currentLang === "nl"
              ? "Vind snel antwoorden op de meest gestelde vragen"
              : "Find quick answers to the most frequently asked questions"}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.key}
              variant={activeCategory === category.key ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.key)}
              className={
                activeCategory === category.key
                  ? "bg-gold text-black hover:bg-gold/90"
                  : "border-gold text-gold hover:bg-gold hover:text-black"
              }
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <Card
              key={`${activeCategory}-${index}`}
              className="luxury-card border border-gray-100 hover:border-gold transition-all duration-300"
            >
              <CardHeader
                className="cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <CardTitle className="flex items-center justify-between text-lg">
                  <span className="text-left pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gold flex-shrink-0 transition-transform duration-200 ${
                      openItems.includes(index) ? "rotate-180" : ""
                    }`}
                  />
                </CardTitle>
              </CardHeader>
              {openItems.includes(index) && (
                <CardContent className="pt-0 pb-8">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <Card className="max-w-2xl mx-auto border-2 border-gold/20 bg-black text-white">
            <CardContent className="p-10">
              <MessageSquare className="h-12 w-12 text-gold mx-auto mb-6" />
              <h3 className="text-2xl font-serif mb-4">
                {currentLang === "nl" ? "Nog vragen?" : "Still have questions?"}
              </h3>
              <p className="text-gray-300 mb-8">
                {currentLang === "nl"
                  ? "Ons team staat klaar om al uw vragen te beantwoorden."
                  : "Our team is ready to answer all your questions."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gold text-black hover:bg-gold/90 text-lg px-10 py-6">
                  {currentLang === "nl" ? "Gratis Consultatie" : "Free Consultation"}
                </Button>
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-black text-lg px-10 py-6"
                  onClick={() => window.open("https://wa.me/573127659066?text=Hallo, ik heb een vraag over HAVN.", "_blank")}
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}