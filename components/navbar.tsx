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
import { CALENDLY_URL } from "@/lib/constants"

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
    { name: t.nav.caseStudy, href: "#case-study", id: "case-study" },
    { name: t.nav.pricing, href: "#pricing", id: "pricing" },
    { name: t.nav.blog || "Blog", href: "/blog", id: "blog", isExternal: true },
    { name: t.nav.faq, href: "#faq", id: "faq" },
    { name: t.nav.contact, href: "#contact", id: "contact" },
  ]

  // Deze functie handelt het scrollen af (zonder animatie bij 'verminderde beweging')
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    const element = document.querySelector(href)
    if (!element) return
    e.preventDefault()
    setIsOpen(false)
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    element.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" })
    history.replaceState(null, "", href)
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
    <nav aria-label={{ nl: "Hoofdmenu", en: "Main menu", es: "Menú principal" }[currentLang]} className={`fixed top-0 left-0 right-0 w-full z-50 transition-[background-color,padding,box-shadow] duration-300 ${
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
              className={`h-14 w-auto transition-[height] duration-300 ${
                  scrolled ? "lg:h-20" : "lg:h-35"
                }`}
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
                  className="py-2 transition-colors duration-200 font-light text-sm tracking-wide text-white/80 hover:text-gold active:text-gold/80"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  aria-current={activeSection === item.id ? "location" : undefined}
                  className={`py-2 transition-colors duration-200 font-light text-sm tracking-wide relative active:text-gold/80 ${
                    activeSection === item.id
                      ? "text-gold"
                      : "text-white/80 hover:text-gold"
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <span aria-hidden="true" className="absolute -bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-gold rounded-full" />
                  )}
                </a>
              )
            ))}

            <LanguageSelector currentLang={currentLang} onLanguageChange={onLanguageChange} />

            <Button asChild className="btn-sheen bg-gold text-black hover:bg-gold/90 active:scale-[0.98] text-sm px-4 py-2">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                {t.nav.freeConsultation}
              </a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="flex items-center justify-center w-11 h-11 rounded-lg bg-white/10 hover:bg-white/20 active:bg-white/25 transition-colors"
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
                        className="py-1 text-left text-lg tracking-wide text-white/80 hover:text-gold transition-colors"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        key={item.id}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        aria-current={activeSection === item.id ? "location" : undefined}
                        className={`py-1 text-left text-lg tracking-wide transition-colors ${
                          activeSection === item.id
                            ? "text-gold"
                            : "text-white/80 hover:text-gold"
                        }`}
                      >
                        {item.name}
                      </a>
                    )
                  ))}

                  <LanguageSelector currentLang={currentLang} onLanguageChange={onLanguageChange} />

                  <Button asChild size="lg" className="bg-gold text-black hover:bg-gold/90 active:scale-[0.98] text-sm">
                    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                      {t.nav.freeConsultation}
                    </a>
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