"use client"

import { useState, useEffect } from "react"

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("home")

  useEffect(() => {
    // GEFIXT: "case-study" in kleine letters met streepje, en dubbele "pricing" verwijderd
    const sections = [
      "home", 
      "services", 
      "pricing", 
      "case-study", // <-- Matcht nu exact met id="case-study"
      "testimonials", 
      "about", 
      "faq", 
      "contact"
    ]

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger wanneer de sectie goed in beeld scrollt
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          if (sections.includes(sectionId)) {
            setActiveSection(sectionId)
          }
        }
      })
    }, observerOptions)

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  return activeSection
}