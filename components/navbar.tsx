"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LanguageSelector } from "@/components/language-selector"
import { useActiveSection } from "@/hooks/use-active-section"
import { translations } from "@/lib/translations"
import Image from "next/image"

interface NavbarProps {
  language: string
  onLanguageChange: (lang: string) => void
}

export function Navbar({ language, onLanguageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const activeSection = useActiveSection()

  // Fallback to 'nl' if language is not valid
  const currentLang = language === "nl" || language === "en" ? language : "nl"
  const t = translations[currentLang]

  const navItems = [
    { name: t.nav.home, href: "#home", id: "home" },
    { name: t.nav.services, href: "#services", id: "services" },
    { name: t.nav.caseStudy, href: "#case-study", id: "case-study" },
    { name: t.nav.faq, href: "#faq", id: "faq" },
    { name: t.nav.contact, href: "#contact", id: "contact" },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {" "}
          {/* Hoogte van navbar verhoogd naar h-24 (96px) */}
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo-60x120.png" // Pad naar uw geüploade logo
              alt="HAVN Logo"
              width={320} // Intrinsieke breedte voor Next.js optimalisatie
              height={160} // Intrinsieke hoogte voor Next.js optimalisatie
              className="h-20 w-auto" // Tailwind class voor de gerenderde hoogte (80px)
              priority
            />
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`transition-colors duration-200 font-light text-sm relative ${
                  activeSection === item.id ? "text-gold" : "text-white hover:text-gold"
                }`}
              >
                {item.name}
                {/* Active indicator */}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold rounded-full" />
                )}
              </button>
            ))}
            <LanguageSelector currentLang={currentLang} onLanguageChange={onLanguageChange} />
            <Button
              className="bg-gold text-black hover:bg-gold/90 text-sm px-4 py-2"
              onClick={() => handleNavClick("#contact")}
            >
              {t.nav.freeConsultation}
            </Button>
          </div>
          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-gold/20">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-left transition-colors text-lg ${
                      activeSection === item.id ? "text-gold" : "text-white hover:text-gold"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <LanguageSelector currentLang={currentLang} onLanguageChange={onLanguageChange} />
                <Button
                  className="bg-gold text-black hover:bg-gold/90 w-full"
                  onClick={() => handleNavClick("#contact")}
                >
                  {t.nav.freeConsultation}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
