"use client"

import { Button } from "@/components/ui/button"
import { Settings, Link as LinkIcon, TrendingUp, Zap, FileText, Users, ArrowRight } from "lucide-react"
import { translations } from "@/lib/translations"
import Link from "next/link"
import { motion } from "framer-motion"

interface ServicesProps {
  language: string
}

export function Services({ language }: ServicesProps) {
  const currentLang = language === "nl" || language === "en" ? language : "nl"
  const t = translations[currentLang]

  const icons = [Settings, LinkIcon, TrendingUp, Zap, FileText, Users]

  return (
    <div className="pb-16">
      <div className="container mx-auto px-4">
        
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif text-black mb-4">
            {t.services.title}
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {t.services.items.map((item, index) => {
            const Icon = icons[index]

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04, y: -4 }}
                transition={{ duration: 0.25 }}
                className="group flex items-center gap-5 p-8 rounded-3xl bg-white border border-gray-100 
                           hover:border-gold hover:shadow-xl transition-all duration-300 luxury-card"
              >
                {/* ICON */}
                <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-2xl bg-gold/10 group-hover:bg-gold/20 transition-colors duration-300">
                  <Icon className="h-7 w-7 text-gold transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* TEXT */}
                <span className="text-black font-medium text-lg leading-tight">
                  {item}
                </span>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-black text-gold hover:bg-gray-900 text-lg px-10 py-7 rounded-2xl 
                       transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <Link href="https://calendly.com/smitsro7/consult">
              {t.services.cta}
              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

      </div>
    </div>
  )
}