"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <Button
        onClick={scrollToTop}
        size="icon"
        className="bg-gold text-black hover:bg-gold/90 shadow-lg hover:shadow-xl transition-all duration-200 rounded-full w-12 h-12 opacity-90 hover:opacity-100"
        aria-label="Scroll naar boven"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  )
}
