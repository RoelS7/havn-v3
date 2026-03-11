"use client"

import { useState, useEffect } from "react"

export function useLanguage() {
  const [language, setLanguage] = useState<string>("nl")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const savedLang = localStorage.getItem("havn-language")
    if (savedLang && (savedLang === "nl" || savedLang === "en")) {
      setLanguage(savedLang)
    }
    setIsLoaded(true)
  }, [])

  const changeLanguage = (newLang: string) => {
    if (newLang === "nl" || newLang === "en") {
      setLanguage(newLang)
      localStorage.setItem("havn-language", newLang)
    }
  }

  return { language, changeLanguage, isLoaded }
}
