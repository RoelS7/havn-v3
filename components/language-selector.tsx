"use client"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface LanguageSelectorProps {
  currentLang: string
  onLanguageChange: (lang: string) => void
}

export function LanguageSelector({ currentLang, onLanguageChange }: LanguageSelectorProps) {
  const languages = [
    { code: "nl", name: "Nederlands" },
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
  ]
  const label = { nl: "Taal kiezen", en: "Choose language", es: "Elegir idioma" }[currentLang] ?? "Taal kiezen"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" aria-label={`${label}: ${currentLang.toUpperCase()}`} className="min-h-11 text-white hover:text-gold hover:bg-white/10 active:bg-white/15">
          <Globe className="h-4 w-4 mr-2" aria-hidden="true" />
          {currentLang.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black border-gold/20">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => onLanguageChange(lang.code)}
            lang={lang.code}
            aria-current={lang.code === currentLang ? "true" : undefined}
            className={`min-h-11 cursor-pointer hover:bg-gray-900 focus:bg-gray-900 ${lang.code === currentLang ? "text-gold" : "text-white hover:text-gold focus:text-gold"}`}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}