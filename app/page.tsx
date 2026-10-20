"use client"
import { Hero } from "@/components/hero"
import { FocusAreas } from "@/components/focus-areas"
import { IndependenceNote } from "@/components/independence-note"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
import { PricingSection } from "@/components/PricingSection"
import { FinalCta } from "@/components/final-cta"
import { CaseStudy } from "@/components/case-study"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ScrollToTop } from "@/components/scroll-to-top"
import { FAQSection } from "@/components/faq-section"
import RevenueCalculator from "@/components/RevenueCalculator"
import { useLanguage } from "@/hooks/use-language"

export default function Home() {
  // Rendert meteen in het Nederlands (server-side); een opgeslagen taal wordt na het laden toegepast
  const { language, changeLanguage } = useLanguage()

  return (
    <>
      <Navbar language={language} onLanguageChange={changeLanguage} />
      <ScrollToTop />
      <main>
        {/* 1. Hero (eigen <section id="home">) */}
        <Hero language={language} />
        {/* 1b. Waar ik naar kijk */}
        <FocusAreas language={language} />
        {/* 2. Probleem */}
        <ProblemSection language={language} />
        {/* 3. Oplossing */}
        <SolutionSection language={language} />
        {/* 4. Services */}
        <section id="services" className="bg-[var(--background)] py-20">
          <Services language={language} />
        </section>
        {/* 5. Hoe het werkt */}
        <div id="how-it-works" className="bg-[var(--muted)] scroll-mt-24">
          <HowItWorks language={language} />
        </div>
        {/* 6. Case Study - bewijs vóór de prijzen (eigen <section id="case-study">) */}
        <CaseStudy language={language} />
        {/* 7. Revenue Calculator - maakt de kost van OTA's concreet vóór de pakketten */}
        <section id="calculator" className="bg-[var(--muted)] pb-20 scroll-mt-24">
          <div className="max-w-4xl mx-auto px-4">
            <RevenueCalculator language={language} key={`calc-${language}`} />
          </div>
        </section>
        {/* 8. Pakketten, voorafgegaan door 'Waarom onafhankelijk' */}
        <IndependenceNote language={language} />
        <div id="pricing">
          <PricingSection language={language} />
        </div>
        {/* 9. Final CTA - zwart voor impact */}
        <FinalCta language={language} />
        {/* 10. FAQ */}
        <div id="faq" className="bg-[var(--muted)]">
          <FAQSection language={language} />
        </div>
        {/* 11. Contact (eigen <section id="contact">) */}
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </>
  )
}
