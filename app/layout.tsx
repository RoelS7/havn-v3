import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Montserrat } from "next/font/google"
import "./globals.css"

// Optimized font loading with display swap
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "HAVN - Direct Bookings. Less Commission. More Revenue.",
  description:
    "HAVN helps vacation rentals generate direct bookings, reduce OTA commissions and maximize revenue — through professional booking systems, automation and smart pricing.",
  authors: [{ name: "HAVN Direct Bookings. Less Commission. More Revenue." }],
  creator: "HAVN",
  publisher: "HAVN",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.havn.be"),
  alternates: {
    canonical: "/",
    languages: {
      "nl-BE": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "HAVN - Direct Bookings. Less Commission. More Revenue.",
    description: "HAVN helps vacation rentals generate direct bookings, reduce OTA commissions and maximize revenue — through professional booking systems, automation and smart pricing.",
    url: "https://www.havn.be",
    siteName: "HAVN - Direct Bookings. Less Commission. More Revenue.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HAVN - Direct Bookings. Less Commission. More Revenue.",
      },
    ],
    locale: "nl_BE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HAVN - Direct Bookings. Less Commission. More Revenue.",
    description: "HAVN helps vacation rentals generate direct bookings, reduce OTA commissions and maximize revenue — through professional booking systems, automation and smart pricing.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme color */}
        <meta name="theme-color" content="#b8925c" />
      </head>
      <body className={`${montserrat.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  )
}
