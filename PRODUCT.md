# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: owners and operators of small vacation rentals in Belgium (Flanders) and the Netherlands: vacation homes, B&Bs, guesthouses and small hotels, typically 1–10 units. They run the property themselves next to everything else, depend on Booking.com and Airbnb for most reservations, and lose 15–25% commission per booking. They visit the site to judge whether HAVN can get them more direct bookings and less admin, and whether a free call is worth their time.

Secondary: English- and Spanish-speaking owners (the site ships NL, EN, ES; one client is in Medellín, Colombia). Dutch is the default and leading language; EN and ES are supporting translations.

## Product Purpose

HAVN builds and runs the rental infrastructure that lets small accommodations take bookings directly: a direct booking website/engine, channel sync with OTAs, online payments, automated guest communication, Google Hotels presence and revenue (pricing) optimisation. Success for the owner: a larger share of direct bookings, less commission paid to OTAs, less manual admin. Success for the site: a qualified owner books a free strategy call (strategiegesprek).

## Positioning

A done-for-you service, not a software subscription the owner must configure: HAVN analyses, sets up and keeps optimising the owner's system, then bundles licence, hosting and support in one monthly fee. Aimed at independent small properties that are too small for an in-house revenue manager.

## Operating Context

- Owners evaluate on mobile and desktop, often in the evening after operational work.
- Conversion path: free strategy call booked via Calendly (`https://calendly.com/smitsro7/consult`). All "Gratis strategiegesprek" calls to action lead there. The contact form and WhatsApp (+32 473 35 85 81) are secondary channels.
- Pricing model: one-time implementation packages (HAVN Launch, HAVN Growth, HAVN Multi-Property) quoted per project ("op maat"), plus monthly HAVN Platform (€79 / €129 / quote by size) and optional HAVN Revenue (€179 / €299 / quote).
- A revenue calculator on the homepage estimates commission paid to OTAs.
- Blog is served from a separate app under `/blog`.

## Capabilities and Constraints

- Next.js on Vercel, auto-deployed from `main` of `RoelS7/havn-v3`; live at https://www.havnrevenue.com.
- Contact: info@havnrevenue.com (general/legal/privacy), roel@havnrevenue.com.
- Implementation package prices stay "op maat" (custom quote); do not publish starting prices.
- Google Analytics is installed.

## Brand Commitments

- Name: HAVN. Tagline in logo: "Direct Bookings. Less Commission. More Revenue."
- Logo: `public/logo-60x120.png`.
- Voice: direct, practical, owner-to-owner Dutch (Flemish usage such as "automatisatie" is intentional).

## Evidence on Hand

- Case study: De Hoeveschuur, Millen (BE): direct booking system, payments, automated guest communication, calendar sync. Image `public/images/hoeveschuur-foto.webp`. Owner quote exists; the owner is named "Dieter, uitbater De Hoeveschuur" in the Dutch copy.
- Case study: Casa Clandestina Guest House, Medellín (CO). Images `public/images/cc-home.jpg`, `public/images/ccc-foto.webp`. No owner quote.
- No quantified results (percentages, hours saved, commission saved), no client logos, no reviews, no press. Future work must not invent numbers, names, quotes or counts. Qualitative results only until the owner supplies data.

## Product Principles

1. One clear next step: every persuasive moment points to the free strategy call.
2. Honest proof over impressive proof: show real properties and real words; never fabricate metrics.
3. Speak to the independent owner's pain (commission, admin, dependency) in their own language before explaining features.
4. Transparent where possible: monthly fees are public; custom work is clearly explained as custom.

## Accessibility & Inclusion

Target WCAG 2.2 AA: text contrast, keyboard focus, labelled controls, 44px touch targets, reduced-motion support.
