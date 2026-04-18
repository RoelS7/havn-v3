"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, MessageSquare, HelpCircle } from "lucide-react"

interface FAQSectionProps {
  language: string
}

export function FAQSection({ language }: FAQSectionProps) {
  const currentLang = language === "nl" || language === "en" ? language : "nl"
  const [openItems, setOpenItems] = useState<number[]>([0])
  const [activeCategory, setActiveCategory] = useState<string>("all")

  // Je faqData blijft hetzelfde – ik heb het alleen korter gemaakt voor overzicht
  const faqData = [ /* ... je volledige faqData array hier laten staan ... */ ]

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
    <section className="py-20 bg-[var(--background)]">
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
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gold transition-transform duration-200 ${
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

        {/* CTA Card */}
        <div className="text-center mt-20">
          <Card className="max-w-2xl mx-auto border-2 border-gold/20 bg-black text-white">
            <CardContent className="p-10">
              <MessageSquare className="h-12 w-12 text-gold mx-auto mb-6" />
              <h3 className="text-2xl font-serif mb-4">
                {currentLang === "nl" ? "Nog vragen?" : "Still have questions?"}
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                {currentLang === "nl"
                  ? "Ons team staat klaar om al uw vragen te beantwoorden."
                  : "Our team is ready to answer all your questions."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gold text-black hover:bg-gold/90 text-lg px-8 py-6">
                  {currentLang === "nl" ? "Gratis Consultatie" : "Free Consultation"}
                </Button>
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-black text-lg px-8 py-6"
                  onClick={() => window.open("https://wa.me/32123456789?text=Hallo, ik heb een vraag over HAVN.", "_blank")}
                >
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