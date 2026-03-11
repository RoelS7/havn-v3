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
  title: "HAVN - Property Management Specialist voor B&B en Hotels",
  description:
    "Maximaliseer uw revenue met professioneel beheer van Airbnb, Booking.com en andere platforms. Property management specialist voor B&B's, vakantiewoningen en kleine hotels.",
  keywords:
    "property management, airbnb beheer, booking.com optimalisatie, revenue management, B&B beheer, hotel management, vakantiewoning verhuur",
  authors: [{ name: "HAVN Property Management" }],
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
    title: "HAVN - Property Management Specialist",
    description: "Maximaliseer uw revenue met professioneel beheer van Airbnb, Booking.com en andere platforms.",
    url: "https://www.havn.be",
    siteName: "HAVN Property Management",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HAVN Property Management",
      },
    ],
    locale: "nl_BE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HAVN - Property Management Specialist",
    description: "Maximaliseer uw revenue met professioneel beheer van Airbnb, Booking.com en andere platforms.",
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
