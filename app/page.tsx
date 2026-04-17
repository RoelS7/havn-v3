"use client"
import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
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
        <ProblemSection language={language} />

        {/* 3. Oplossing */}
        <SolutionSection language={language} />

        {/* 4. Diensten */}
        <section id="services">
          <Services language={language} />
        </section>

        {/* 5. Revenue Calculator - VERPLAATST NAAR BOVEN (belangrijke lead magnet) */}
        <RevenueCalculator />

        {/* 6. Hoe het werkt */}
        <HowItWorks language={language} />

        {/* 7. Case Study */}
        <CaseStudy language={language} />

        {/* 8. Final CTA */}
        <FinalCta language={language} />

        {/* 9. FAQ */}
        <section id="faq">
          <FAQSection language={language} />
        </section>

        {/* 10. Contact */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer language={language} />
    </>
  )
}