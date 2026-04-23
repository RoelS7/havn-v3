"use client"

import { useState, useEffect } from "react"

export function useLanguage() {
  const [language, setLanguage] = useState<string>("nl")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const savedLang = localStorage.getItem("havn-language")
    // Update: "es" toegevoegd aan de toegestane talen bij het laden
    if (savedLang && (savedLang === "nl" || savedLang === "en" || savedLang === "es")) {
      setLanguage(savedLang)
    }
    setIsLoaded(true)
  }, [])

  const changeLanguage = (newLang: string) => {
    // Update: "es" toegevoegd aan de toegestane talen bij het wijzigen
    if (newLang === "nl" || newLang === "en" || newLang === "es") {
      setLanguage(newLang)
      localStorage.setItem("havn-language", newLang)
    }
  }

  return { language, changeLanguage, isLoaded }
}