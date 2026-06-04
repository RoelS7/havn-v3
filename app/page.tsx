"use client"
import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
import {PricingSection} from "@/components/PricingSection"
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
  const { language, changeLanguage, isLoaded } = useLanguage()

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-gold text-2xl font-serif">Loading...</div>
      </div>
    )
  }

  return (
    <>
      <Navbar language={language} onLanguageChange={changeLanguage} />
      <ScrollToTop />
      <main>
        {/* 1. Hero */}
        <section id="home">
          <Hero language={language} />
        </section>
        {/* 2. Probleem */}
        <section className="bg-[var(--background)]">
          <ProblemSection language={language} />
        </section>
        {/* 3. Oplossing */}
        <section className="bg-[var(--background)]">
          <SolutionSection language={language} />
        </section>
        {/* 4. Services */}
        <section id="services" className="bg-[var(--background)] py-20">
          <Services language={language} />
        </section>
        {/* 5. Hoe het werkt */}
        <section className="bg-[var(--muted)]">
          <HowItWorks language={language} />
        </section>
        {/* 6. Pakketten */}
        <PricingSection />
        {/* 7. Case Study */}
        <section className="bg-[var(--background)]">
          <CaseStudy language={language} />
        </section>
        {/* 8. Revenue Calculator - na case study, vertrouwen is opgebouwd */}
        <section className="bg-[var(--muted)] pb-20">
          <div className="max-w-4xl mx-auto px-4">
            <RevenueCalculator language={language} key={`calc-${language}`} />
          </div>
        </section>
        {/* 9. Final CTA - zwart voor impact */}
        <section className="bg-black text-white">
          <FinalCta language={language} />
        </section>
        {/* 10. FAQ */}
        <section id="faq" className="bg-[var(--muted)]">
          <FAQSection language={language} />
        </section>
        {/* 11. Contact */}
        <section id="contact" className="bg-[var(--background)]">
          <Contact language={language} />
        </section>
      </main>
      <Footer language={language} />
    </>
  )
}