import { translations } from "@/lib/translations"

interface HowItWorksProps {
  language: string
}

export function HowItWorks({ language }: HowItWorksProps) {
  const currentLang = language === "nl" || language === "en" ? language : "nl"
  const t = translations[currentLang]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif text-black mb-4">
            {t.howItWorks.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {t.howItWorks.steps.map((step, index) => (
            <div 
              key={index} 
              className="relative luxury-card group p-10 rounded-3xl border border-gray-100 hover:border-gold transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gold text-black text-3xl font-bold mb-8 group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <h3 className="text-2xl font-medium text-black mb-5">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>

              {/* Verbindingslijn */}
              {index < t.howItWorks.steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gold/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}