import { Shield, Lock, Award, CheckCircle, Star, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: "SSL Beveiligd",
      description: "256-bit encryptie",
      color: "text-green-500",
    },
    {
      icon: Lock,
      title: "GDPR Compliant",
      description: "Privacy gegarandeerd",
      color: "text-blue-500",
    },
    {
      icon: Award,
      title: "Gecertificeerd",
      description: "Property Management",
      color: "text-gold",
    },
    {
      icon: CheckCircle,
      title: "Geverifieerd",
      description: "Google Reviews 4.9★",
      color: "text-green-500",
    },
    {
      icon: Star,
      title: "Top Rated",
      description: "Airbnb Superhost Partner",
      color: "text-gold",
    },
    {
      icon: Users,
      title: "50+ Klanten",
      description: "Tevreden eigenaren",
      color: "text-blue-500",
    },
  ]

  return (
    <section className="py-12 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-lg font-medium text-gray-600 mb-2">Vertrouwd door eigenaren in heel België</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge, index) => (
            <Card key={index} className="border-gray-200 hover:border-gold/50 transition-colors">
              <CardContent className="p-4 text-center">
                <badge.icon className={`h-8 w-8 mx-auto mb-2 ${badge.color}`} />
                <div className="text-sm font-medium text-gray-900">{badge.title}</div>
                <div className="text-xs text-gray-500">{badge.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-1 text-green-500" />
              Beveiligd
            </div>
            <div className="flex items-center">
              <Lock className="h-4 w-4 mr-1 text-blue-500" />
              Privacy
            </div>
            <div className="flex items-center">
              <Award className="h-4 w-4 mr-1 text-gold" />
              Gecertificeerd
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
