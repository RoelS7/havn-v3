"use client"

import { useState, useEffect } from "react"
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

  const currentLang = (language === "nl" || language === "en" || language === "es") ? language : "nl"
  const t = translations[currentLang]

  // We voegen 'isExternal: true' toe aan de blog, en herstellen pricing met een fallback-naam
  const navItems = [
    { name: t.nav.home, href: "#home", id: "home" },
    { name: t.nav.services, href: "#services", id: "services" },
    { name: t.nav.pricing || "Pricing", href: "#pricing", id: "pricing" }, // Fallback toegevoegd voor als de vertaling mist
    { name: t.nav.caseStudy, href: "#case-study", id: "case-study" },
    { name: t.nav.blog || "Blog", href: "/blog", id: "blog", isExternal: true },
    { name: t.nav.faq, href: "#faq", id: "faq" },
    { name: t.nav.contact, href: "#contact", id: "contact" },
  ]

  // Deze functie handelt het scrollen af
  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? "bg-black/95 backdrop-blur-md py-3 shadow-md"
        : "bg-black/80 py-3 lg:py-5"
    }`}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-gradient-to-r from-transparent via-[#b8925c]/70 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-24">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <Image
              src="/logo-60x120.png"
              alt="HAVN Logo"
              width={320}
              height={160}
              className="h-14 lg:h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              // CHECK: Als het de blog is, renderen we een echte link in plaats van een scroll-button
              item.isExternal ? (
                <Link
                  key={item.id}
                  href={item.href}
                  className="cursor-pointer transition-all duration-300 font-light text-sm tracking-wide text-white/80 hover:text-gold"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`cursor-pointer transition-all duration-300 font-light text-sm tracking-wide relative ${
                    activeSection === item.id
                      ? "text-gold"
                      : "text-white/80 hover:text-gold"
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-gold rounded-full" />
                  )}
                </button>
              )
            ))}

            <LanguageSelector currentLang={currentLang} onLanguageChange={onLanguageChange} />

            <Button
              className="bg-gold text-black hover:bg-gold/90 text-sm px-4 py-2"
              onClick={() => handleNavClick("#contact")}
            >
              {t.nav.freeConsultation}
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5 text-white" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-black/95 backdrop-blur-xl border-none p-8 w-[280px] max-w-[85vw]"
              >
                <div className="flex flex-col gap-8 mt-12 px-2">
                  {navItems.map((item) => (
                    // Mobiele CHECK: Echte link voor de blog, buttons voor de rest
                    item.isExternal ? (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-left text-lg tracking-wide text-white/80 hover:text-gold transition-all"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.href)}
                        className={`text-left text-lg tracking-wide transition-all ${
                          activeSection === item.id
                            ? "text-gold"
                            : "text-white/80 hover:text-gold"
                        }`}
                      >
                        {item.name}
                      </button>
                    )
                  ))}

                  <LanguageSelector currentLang={currentLang} onLanguageChange={onLanguageChange} />

                  <Button
                    className="bg-gold text-black hover:bg-gold/90 text-sm px-4 py-2
                               transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:scale-[1.02]"
                    onClick={() => handleNavClick("#contact")}
                  >
                    {t.nav.freeConsultation}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </nav>
  )
}