import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, Mail, TrendingUp, Users, BarChart3 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BlogNewsletterProps {
  language: string
}

export function BlogNewsletter({ language }: BlogNewsletterProps) {
  const currentLang = language === "nl" || language === "en" ? language : "nl"

  const blogPosts = [
    {
      title:
        currentLang === "nl"
          ? "5 Airbnb Pricing Strategieën die Uw Revenue Verdubbelen"
          : "5 Airbnb Pricing Strategies That Double Your Revenue",
      excerpt:
        currentLang === "nl"
          ? "Ontdek de geheimen van dynamische pricing en hoe u uw inkomsten kunt maximaliseren met data-gedreven beslissingen."
          : "Discover the secrets of dynamic pricing and how to maximize your income with data-driven decisions.",
      category: currentLang === "nl" ? "Pricing" : "Pricing",
      date: "15 Maart 2024",
      readTime: "5 min",
      image: "/placeholder.svg?height=200&width=300",
      slug: "airbnb-pricing-strategies",
    },
    {
      title:
        currentLang === "nl"
          ? "Seizoensoptimalisatie: Maximale Bezetting Het Hele Jaar"
          : "Seasonal Optimization: Maximum Occupancy Year-Round",
      excerpt:
        currentLang === "nl"
          ? "Leer hoe u uw accommodatie aantrekkelijk houdt in alle seizoenen en dalperiodes omzet in kansen."
          : "Learn how to keep your accommodation attractive in all seasons and turn low periods into opportunities.",
      category: currentLang === "nl" ? "Optimalisatie" : "Optimization",
      date: "12 Maart 2024",
      readTime: "7 min",
      image: "/placeholder.svg?height=200&width=300",
      slug: "seasonal-optimization",
    },
    {
      title:
        currentLang === "nl"
          ? "Review Management: Van 4.2 naar 4.9 Sterren in 3 Maanden"
          : "Review Management: From 4.2 to 4.9 Stars in 3 Months",
      excerpt:
        currentLang === "nl"
          ? "Een stap-voor-stap gids om uw online reputatie te transformeren en meer boekingen te genereren."
          : "A step-by-step guide to transform your online reputation and generate more bookings.",
      category: currentLang === "nl" ? "Marketing" : "Marketing",
      date: "8 Maart 2024",
      readTime: "6 min",
      image: "/placeholder.svg?height=200&width=300",
      slug: "review-management-guide",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Blog Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-black mb-4">
              {currentLang === "nl" ? "Laatste " : "Latest "}
              <span className="text-gold">Inzichten</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              {currentLang === "nl"
                ? "Praktische tips en strategieën om uw property management naar het volgende niveau te tillen"
                : "Practical tips and strategies to take your property management to the next level"}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="border-2 border-transparent hover:border-gold transition-all duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gold text-black">{post.category}</Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date} • {post.readTime}
                  </div>
                  <CardTitle className="text-xl font-medium text-black group-hover:text-gold transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-gold hover:text-gold/80 font-medium"
                  >
                    {currentLang === "nl" ? "Lees meer" : "Read more"}
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-black bg-transparent"
            >
              {currentLang === "nl" ? "Alle Artikelen" : "All Articles"}
            </Button>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-gold bg-black text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90"></div>
            <div className="relative z-10">
              <CardHeader className="text-center pb-6">
                <Mail className="h-12 w-12 text-gold mx-auto mb-4" />
                <CardTitle className="text-3xl font-serif mb-4">
                  {currentLang === "nl" ? "Property Management Inzichten" : "Property Management Insights"}
                </CardTitle>
                <p className="text-xl text-gray-300">
                  {currentLang === "nl"
                    ? "Ontvang wekelijks exclusieve tips, marktanalyses en strategieën direct in uw inbox"
                    : "Receive weekly exclusive tips, market analyses and strategies directly in your inbox"}
                </p>
              </CardHeader>

              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <TrendingUp className="h-8 w-8 text-gold mx-auto" />
                    <div className="text-lg font-medium">
                      {currentLang === "nl" ? "Markt Updates" : "Market Updates"}
                    </div>
                    <div className="text-sm text-gray-400">
                      {currentLang === "nl" ? "Wekelijkse trends" : "Weekly trends"}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <BarChart3 className="h-8 w-8 text-gold mx-auto" />
                    <div className="text-lg font-medium">{currentLang === "nl" ? "Pricing Tips" : "Pricing Tips"}</div>
                    <div className="text-sm text-gray-400">
                      {currentLang === "nl" ? "Exclusieve strategieën" : "Exclusive strategies"}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Users className="h-8 w-8 text-gold mx-auto" />
                    <div className="text-lg font-medium">{currentLang === "nl" ? "Case Studies" : "Case Studies"}</div>
                    <div className="text-sm text-gray-400">
                      {currentLang === "nl" ? "Echte resultaten" : "Real results"}
                    </div>
                  </div>
                </div>

                <div className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder={currentLang === "nl" ? "uw@email.com" : "your@email.com"}
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 flex-1"
                    />
                    <Button className="bg-gold text-black hover:bg-gold/90 px-6">
                      {currentLang === "nl" ? "Aanmelden" : "Subscribe"}
                    </Button>
                  </div>
                  <p className="text-xs text-gray-400 mt-3 text-center">
                    {currentLang === "nl"
                      ? "Geen spam. Uitschrijven kan altijd. Privacy gegarandeerd."
                      : "No spam. Unsubscribe anytime. Privacy guaranteed."}
                  </p>
                </div>

                <div className="text-center">
                  <Badge className="bg-gold text-black px-4 py-2">
                    {currentLang === "nl" ? "2,500+ Abonnees" : "2,500+ Subscribers"}
                  </Badge>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
