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
        {/* 1. Hero (Ivory/Zwart afhankelijk van je CSS) */}
        <section id="home" className={bgLight}>
          <Hero language={language} />
        </section>

        {/* 2. Probleem (Beige) */}
        <div className={bgAlt}>
          <ProblemSection language={language} />
        </div>

        {/* 3. Oplossing (Ivory) */}
        <div className={bgLight}>
          <SolutionSection language={language} />
        </div>

        {/* 4. Diensten & Calculator (Beige) */}
        <section id="services" className={bgAlt}>
          <Services language={language} />
          <RevenueCalculator />
        </section>

        {/* 5. Hoe het werkt (Ivory) */}
        <div className={bgLight}>
          <HowItWorks language={language} />
        </div>

        {/* 6. Case Study (Beige) */}
        <div className={bgAlt}>
          <CaseStudy language={language} />
        </div>

        {/* 7. Final CTA (Ivory) */}
        <div className={bgLight}>
          <FinalCta language={language} />
        </div>

        {/* 8. FAQ (Beige) */}
        <section id="faq" className={bgAlt}>
          <FAQSection language={language} />
        </section>

        {/* 9. Contact (Ivory) */}
        <section id="contact" className={bgLight}>
          <Contact />
        </section>
      </main>

      <Footer language={language} />
    </>
  )
}