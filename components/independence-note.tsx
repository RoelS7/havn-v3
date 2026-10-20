import { translations } from "@/lib/translations"

interface IndependenceNoteProps {
  language: string
}

export function IndependenceNote({ language }: IndependenceNoteProps) {
  const currentLang = (language === "nl" || language === "en" || language === "es") ? language : "nl"
  const t = translations[currentLang]

  return (
    <section className="bg-[#F5EFE6] pt-24 px-4 sm:px-6">
      <div className="relative max-w-3xl mx-auto text-center rounded-2xl border border-[#E8DFD0] bg-white px-8 py-10 sm:px-12 shadow-[0_1px_2px_rgba(15,25,35,0.04),0_24px_48px_-28px_rgba(184,146,92,0.3)]">
        <div aria-hidden="true" className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        <h2 className="font-serif text-2xl sm:text-3xl text-[#0F1923] mb-4">{t.independence.title}</h2>
        <p className="text-base sm:text-lg text-[#3A4A5A] leading-relaxed">{t.independence.text}</p>
      </div>
    </section>
  )
}
