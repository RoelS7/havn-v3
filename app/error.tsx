"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, RefreshCw, Home, MessageSquare } from "lucide-react"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="mb-8">
          <AlertTriangle className="h-24 w-24 text-gold mx-auto mb-6" />
          <h1 className="text-4xl font-serif text-gold mb-4">Er is iets misgegaan</h1>
          <p className="text-xl text-gray-300 mb-8">
            We hebben een onverwachte fout ondervonden. Ons team is automatisch op de hoogte gesteld.
          </p>
        </div>

        <Card className="bg-gray-900 border-2 border-gold/20 mb-8">
          <CardHeader>
            <CardTitle className="text-gold font-serif">Wat kunt u doen?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Button onClick={reset} className="w-full bg-gold text-black hover:bg-gold/90">
                <RefreshCw className="mr-2 h-4 w-4" />
                Probeer Opnieuw
              </Button>
              <Button
                variant="outline"
                className="w-full border-gold text-gold hover:bg-gold hover:text-black bg-transparent"
                onClick={() => (window.location.href = "/")}
              >
                <Home className="mr-2 h-4 w-4" />
                Terug naar Home
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h3 className="text-xl font-serif text-gold">Alternatieve Opties</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <a href="/#services" className="block p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
              <h4 className="font-medium text-gold mb-1">Onze Services</h4>
              <p className="text-sm text-gray-400">Bekijk wat we voor u kunnen doen</p>
            </a>
            <a href="/#contact" className="block p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
              <h4 className="font-medium text-gold mb-1">Direct Contact</h4>
              <p className="text-sm text-gray-400">Neem contact op voor hulp</p>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 mb-4">Blijft het probleem bestaan? Laat het ons weten:</p>
          <Button
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-black bg-transparent"
            onClick={() =>
              window.open(
                `https://wa.me/32123456789?text=Hallo, ik ondervind een technisch probleem op jullie website. Error: ${error.message}`,
                "_blank",
              )
            }
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Meld Probleem
          </Button>
        </div>

        <div className="mt-8">
          <a href="/" className="text-2xl font-serif text-gold hover:text-gold/80 transition-colors">
            HAVN
          </a>
          <p className="text-sm text-gray-500 mt-2">Property Management Specialist</p>
        </div>
      </div>
    </div>
  )
}
