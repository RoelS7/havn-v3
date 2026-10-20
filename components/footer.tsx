import Link from "next/link"
import { MessageSquare, Mail, Shield, FileText } from "lucide-react"
import { translations } from "@/lib/translations"

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
              <a href="https://wa.me/32473358581" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-11 w-11 items-center justify-center rounded-full text-gray-400 hover:text-gold active:text-gold/80 transition-colors">
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
                  Direct Booking Setup
                </Link>
              </li>
              <li>
                <Link href="#services" className="inline-block py-1 hover:text-gold active:text-gold/80 transition-colors">
                  Revenue Growth
                </Link>
              </li>
              <li>
                <Link href="#services" className="inline-block py-1 hover:text-gold active:text-gold/80 transition-colors">
                  Automation
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
                <Link href="#pricing" className="inline-block py-1 hover:text-gold active:text-gold/80 transition-colors">
                  Persoonlijke Offerte
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">{t.footer.contact}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>WhatsApp: +32 473 358 581</li>
              <li>Email: info@havnrevenue.com</li>
              <li>België / Colombia / Globaal</li>
              <li>
                <Link href="#contact" className="inline-block py-1 hover:text-gold active:text-gold/80 transition-colors">
                  Gratis Consultatie
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/privacy-policy" className="inline-flex items-center py-1 hover:text-gold active:text-gold/80 transition-colors">
                  <Shield className="h-4 w-4 mr-1" aria-hidden="true" />
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="inline-flex items-center py-1 hover:text-gold active:text-gold/80 transition-colors">
                  <FileText className="h-4 w-4 mr-1" aria-hidden="true" />
                  {t.footer.terms}
                </Link>
              </li>
              <li className="text-xs text-gray-400">RUT: 700.288.175</li>
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
