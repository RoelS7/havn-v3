import Link from "next/link"
import { MessageSquare, Mail, Shield } from "lucide-react"
import { translations } from "@/lib/translations"
import { CALENDLY_URL } from "@/lib/constants"
import { OPEN_CONSENT_EVENT } from "@/components/cookie-consent"

interface FooterProps {
  language: string
}

export function Footer({ language }: FooterProps) {
// UPDATE: Nu ook "es" toevoegen aan de toegestane talen
  const currentLang = (language === "nl" || language === "en" || language === "es") ? language : "nl"
  const t = translations[currentLang]

  return (
    <footer className="bg-black text-white py-12 border-t border-gold/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-gold">HAVN</h3>
            <p className="text-gray-400 text-sm">{t.footer.description}</p>
            <div className="flex -ml-3">
              <a href="https://wa.me/32456791365" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-11 w-11 items-center justify-center rounded-full text-gray-400 hover:text-gold active:text-gold/80 transition-colors">
                <MessageSquare className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="mailto:info@havnrevenue.com" aria-label="E-mail info@havnrevenue.com" className="flex h-11 w-11 items-center justify-center rounded-full text-gray-400 hover:text-gold active:text-gold/80 transition-colors">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">{t.footer.services}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="#services" className="inline-block py-1 hover:text-gold active:text-gold/80 transition-colors">
                  {{ nl: "Directe boekingen", en: "Direct bookings", es: "Reservas directas" }[currentLang]}
                </Link>
              </li>
              <li>
                <Link href="#services" className="inline-block py-1 hover:text-gold active:text-gold/80 transition-colors">
                  {{ nl: "Prijsstrategie", en: "Pricing strategy", es: "Estrategia de precios" }[currentLang]}
                </Link>
              </li>
              <li>
                <Link href="#services" className="inline-block py-1 hover:text-gold active:text-gold/80 transition-colors">
                  {{ nl: "Automatisatie", en: "Automation", es: "Automatización" }[currentLang]}
                </Link>
              </li>
              <li>
                <Link href="#services" className="inline-block py-1 hover:text-gold active:text-gold/80 transition-colors">
                  Google Hotels
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">{t.footer.packages}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block py-1 hover:text-gold active:text-gold/80 transition-colors">
                  {{ nl: "Plan een gesprek", en: "Schedule a call", es: "Agenda una conversación" }[currentLang]}
                </a>
              </li>
              <li>
                <Link href="#pricing" className="inline-block py-1 hover:text-gold active:text-gold/80 transition-colors">
                  {{ nl: "Pakketten & prijzen", en: "Packages & pricing", es: "Paquetes y precios" }[currentLang]}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">{t.footer.contact}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>WhatsApp: +32 456 79 13 65</li>
              <li>Email: info@havnrevenue.com</li>
              <li>{t.contact.info.locationValue}</li>
              <li>
                <Link href="#contact" className="inline-block py-1 hover:text-gold active:text-gold/80 transition-colors">
                  {{ nl: "Stuur een bericht", en: "Send a message", es: "Envía un mensaje" }[currentLang]}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">{{ nl: "Juridisch", en: "Legal", es: "Legal" }[currentLang]}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/privacy-policy" className="inline-flex items-center py-1 hover:text-gold active:text-gold/80 transition-colors">
                  <Shield className="h-4 w-4 mr-1" aria-hidden="true" />
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
                  className="inline-block py-1 text-left hover:text-gold active:text-gold/80 transition-colors"
                >
                  {{ nl: "Cookie-instellingen", en: "Cookie settings", es: "Configuración de cookies" }[currentLang]}
                </button>
              </li>
              <li className="text-xs text-gray-400">RUT: 700.288.175</li>
              <li className="text-xs text-gray-400">Cra. 54 #1A-9, Medellín</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p className="text-sm">&copy; 2026 HAVN. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
