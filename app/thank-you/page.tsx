"use client"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"

export default function ThankYou() {
  const { language, changeLanguage, isLoaded } = useLanguage()

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-gold text-2xl font-serif">Loading...</div>
      </div>
    )
  }

  const t = translations[language]

  const content = {
    nl: {
      title: "Bedankt voor uw aanvraag",
      subtitle: "Uw bericht is goed ontvangen. U kan hieronder meteen een gratis strategiegesprek boeken zodat we uw accommodatie kunnen analyseren.",
      back: "← Terug naar home",
    },
    en: {
      title: "Thank you for your request",
      subtitle: "Your message has been received. You can book a free strategy call below so we can analyze your accommodation.",
      back: "← Back to home",
    },
    es: {
      title: "Gracias por su solicitud",
      subtitle: "Hemos recibido su mensaje. Puede reservar una asesoría estratégica gratuita a continuación para analizar su propiedad.",
      back: "← Volver al inicio",
    },
  }

  const c = content[language]

  return (
    <>
      <Navbar language={language} onLanguageChange={changeLanguage} />
      <section className="py-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-serif mb-6">{c.title}</h1>
          <p className="text-lg text-gray-600">{c.subtitle}</p>
          <Link
            href="/"
            className="inline-block mt-6 px-6 py-3 border border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
          >
            {c.back}
          </Link>
        </div>
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://calendly.com/smitsro7/consult"
            width="100%"
            height="700"
            className="rounded-xl border"
          />
        </div>
      </section>
    </>
  )
}