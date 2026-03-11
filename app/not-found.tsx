"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ArrowLeft, MessageSquare } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="mb-8">
          <h1 className="text-8xl font-serif text-gold mb-4">404</h1>
          <h2 className="text-3xl font-serif mb-4">Pagina Niet Gevonden</h2>
          <p className="text-xl text-gray-300 mb-8">Sorry, de pagina die u zoekt bestaat niet of is verplaatst.</p>
        </div>

        <Card className="bg-gray-900 border-2 border-gold/20 mb-8">
          <CardHeader>
            <CardTitle className="text-gold font-serif">Wat kunt u doen?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/">
                <Button className="w-full bg-gold text-black hover:bg-gold/90">
                  <Home className="mr-2 h-4 w-4" />
                  Terug naar Home
                </Button>
              </Link>
              <Button
                variant="outline"
                className="w-full border-gold text-gold hover:bg-gold hover:text-black bg-transparent"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Vorige Pagina
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h3 className="text-xl font-serif text-gold">Populaire Pagina's</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <Link href="/#services" className="block p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
              <h4 className="font-medium text-gold mb-1">Property Management</h4>
              <p className="text-sm text-gray-400">Onze professionele services</p>
            </Link>
            <Link href="/#pricing" className="block p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
              <h4 className="font-medium text-gold mb-1">Prijzen</h4>
              <p className="text-sm text-gray-400">Transparante pakketten</p>
            </Link>
            <Link href="/#about" className="block p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
              <h4 className="font-medium text-gold mb-1">Over HAVN</h4>
              <p className="text-sm text-gray-400">Onze expertise en aanpak</p>
            </Link>
            <Link href="/#contact" className="block p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
              <h4 className="font-medium text-gold mb-1">Contact</h4>
              <p className="text-sm text-gray-400">Gratis consultatie</p>
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 mb-4">Hulp nodig? Neem direct contact op:</p>
          <Button
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-black bg-transparent"
            onClick={() =>
              window.open(
                "https://wa.me/32123456789?text=Hallo, ik kan een pagina niet vinden op jullie website.",
                "_blank",
              )
            }
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            WhatsApp Support
          </Button>
        </div>

        <div className="mt-8">
          <Link href="/" className="text-2xl font-serif text-gold hover:text-gold/80 transition-colors">
            HAVN
          </Link>
          <p className="text-sm text-gray-500 mt-2">Property Management Specialist</p>
        </div>
      </div>
    </div>
  )
}
