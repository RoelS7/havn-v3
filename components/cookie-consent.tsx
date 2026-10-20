"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { GoogleAnalytics } from "@next/third-parties/google"

const CONSENT_KEY = "havn-consent"
// Footer-link "Cookie-instellingen" stuurt dit event om de keuze opnieuw te tonen
export const OPEN_CONSENT_EVENT = "havn:open-consent"

type Consent = "granted" | "denied" | null

const copy = {
  nl: {
    text: "Ik gebruik Google Analytics om te zien hoe deze site gebruikt wordt. Dat plaatst cookies. Mag dat?",
    accept: "Accepteren",
    decline: "Weigeren",
    more: "Privacybeleid",
    label: "Cookietoestemming",
  },
  en: {
    text: "I use Google Analytics to see how this site is used. It places cookies. Is that okay?",
    accept: "Accept",
    decline: "Decline",
    more: "Privacy policy",
    label: "Cookie consent",
  },
  es: {
    text: "Uso Google Analytics para ver cómo se usa este sitio. Eso coloca cookies. ¿Te parece bien?",
    accept: "Aceptar",
    decline: "Rechazar",
    more: "Política de privacidad",
    label: "Consentimiento de cookies",
  },
}

function readStorage(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

export function CookieConsent({ gaId }: { gaId: string }) {
  const [consent, setConsent] = useState<Consent>(null)
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState<keyof typeof copy>("nl")

  useEffect(() => {
    const saved = readStorage(CONSENT_KEY)
    if (saved === "granted" || saved === "denied") setConsent(saved)
    else setOpen(true)
    const savedLang = readStorage("havn-language")
    if (savedLang === "en" || savedLang === "es") setLang(savedLang)

    const reopen = () => {
      const current = readStorage("havn-language")
      setLang(current === "en" || current === "es" ? current : "nl")
      setOpen(true)
    }
    window.addEventListener(OPEN_CONSENT_EVENT, reopen)
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen)
  }, [])

  const choose = (value: "granted" | "denied") => {
    try {
      localStorage.setItem(CONSENT_KEY, value)
    } catch {}
    // Bij intrekken: pagina herladen zodat het reeds geladen GA-script verdwijnt
    if (consent === "granted" && value === "denied") {
      window.location.reload()
      return
    }
    setConsent(value)
    setOpen(false)
  }

  const t = copy[lang]

  return (
    <>
      {consent === "granted" && <GoogleAnalytics gaId={gaId} />}
      {open && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label={t.label}
          className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-2xl border border-gold/30 bg-black/95 px-5 py-4 text-white shadow-[0_24px_48px_-20px_rgba(0,0,0,0.7)] backdrop-blur-md sm:px-6 sm:py-5"
        >
          <p className="text-sm leading-relaxed text-gray-200">
            {t.text}{" "}
            <Link href="/privacy-policy" className="text-gold underline underline-offset-4 hover:text-white">
              {t.more}
            </Link>
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => choose("denied")}
              className="min-h-11 flex-1 rounded-lg border border-gold/60 px-4 text-sm font-medium text-gold transition-colors hover:bg-gold/10 active:bg-gold/20"
            >
              {t.decline}
            </button>
            <button
              type="button"
              onClick={() => choose("granted")}
              className="min-h-11 flex-1 rounded-lg border border-gold bg-gold px-4 text-sm font-medium text-black transition-colors hover:bg-gold/90 active:bg-gold/80"
            >
              {t.accept}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
