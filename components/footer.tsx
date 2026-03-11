import Link from "next/link"
import { MessageSquare, Mail, Linkedin, Shield, FileText } from "lucide-react"
import { translations } from "@/lib/translations"

interface FooterProps {
  language: string
}

export function Footer({ language }: FooterProps) {
  const currentLang = language === "nl" || language === "en" ? language : "nl"
  const t = translations[currentLang]

  return (
    <footer className="bg-black text-white py-12 border-t border-gold/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-gold">HAVN</h3>
            <p className="text-gray-400 text-sm">{t.footer.description}</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-gold transition-colors">
                <MessageSquare className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">{t.footer.services}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="#services" className="hover:text-gold transition-colors">
                  Platform Optimalisatie
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-gold transition-colors">
                  Revenue Management
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-gold transition-colors">
                  Guest Experience
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-gold transition-colors">
                  Analytics
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">{t.footer.packages}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="#pricing" className="hover:text-gold transition-colors">
                  Basic Pakket
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-gold transition-colors">
                  Growth Pakket
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-gold transition-colors">
                  Full Management
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-gold transition-colors">
                  Persoonlijke Offerte
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">{t.footer.contact}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>WhatsApp: +32 123 456 789</li>
              <li>Email: info@havn.be</li>
              <li>België</li>
              <li>
                <Link href="#contact" className="hover:text-gold transition-colors">
                  Gratis Consultatie
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-gold transition-colors flex items-center">
                  <Shield className="h-4 w-4 mr-1" />
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-gold transition-colors flex items-center">
                  <FileText className="h-4 w-4 mr-1" />
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold transition-colors">
                  GDPR Compliance
                </Link>
              </li>
              <li className="text-xs text-gray-500">BTW: BE0123.456.789</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p className="text-sm">&copy; 2024 HAVN. {t.footer.rights}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-gold transition-colors text-sm">
              {currentLang === "nl" ? "NL" : "EN"}
            </Link>
            <Link href="#" className="hover:text-gold transition-colors text-sm">
              {currentLang === "nl" ? "EN" : "NL"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
