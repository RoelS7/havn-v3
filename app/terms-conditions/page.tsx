import type { Metadata } from "next"
import Link from "next/link"
import { TermsConditions } from "@/components/terms-conditions"

export const metadata: Metadata = {
  title: "Algemene Voorwaarden | HAVN",
  alternates: { canonical: "/terms-conditions" },
}

export default function Page() {
  return (
    <main>
      <div className="container mx-auto px-4 max-w-4xl pt-8">
        <Link href="/" className="inline-flex min-h-11 items-center text-sm text-gold-ink hover:underline underline-offset-4">
          ← HAVN
        </Link>
      </div>
      <TermsConditions />
    </main>
  )
}
