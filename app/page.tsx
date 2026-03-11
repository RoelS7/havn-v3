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
        <section id="home">
          <Hero language={language} />
        </section>
        <ProblemSection language={language} />
        <SolutionSection language={language} />
        <section id="services">
          <Services language={language} />
        </section>
        <HowItWorks language={language} />
        <CaseStudy language={language} />
        <FinalCta language={language} />
        <section id="faq">
          <FAQSection language={language} />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer language={language} />
    </>
  )
}
