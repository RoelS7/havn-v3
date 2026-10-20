import type { Metadata } from "next"
import Link from "next/link"
import { PrivacyPolicy } from "@/components/privacy-policy"

export const metadata: Metadata = {
  title: "Privacybeleid | HAVN",
  alternates: { canonical: "/privacy-policy" },
}

export default function Page() {
  return (
    <main>
      <div className="container mx-auto px-4 max-w-2xl pt-8">
        <Link href="/" className="inline-flex min-h-11 items-center text-sm text-gold-ink hover:underline underline-offset-4">
          ← HAVN
        </Link>
      </div>
      <PrivacyPolicy />
    </main>
  )
}
