# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: owners of small vacation rentals in Belgium (Flanders) and the Netherlands: B&B's, vacation homes, guesthouses and small hotels, typically 1–10 units. They run the property themselves and depend on Booking.com and Airbnb for many reservations. Most arrive on the site from a personal e-mail from Roel, so the site must continue that tone.

Secondary: English- and Spanish-speaking owners (the site ships NL, EN, ES; one client is in Medellín, Colombia). Dutch (as spoken in Flanders) is the default and leading language; EN and ES are faithful translations.

## Product Purpose

HAVN Revenue is an independent advisor for small vacation rentals. Core idea: more return from a property, not necessarily more guests. Roel analyses (Quick Scan), advises what comes first and what can wait, and where it fits also implements (booking module, pricing strategy, revenue management). Success for the site: an owner books a no-obligation call via Calendly.

## Positioning

Independent: starts from the owner's business, not from a tool. Receives no commission from booking platforms. Installs a system only when it delivers a return in that owner's situation; sometimes the advice is to keep what works.

## Operating Context

- Primary conversion: "Plan een vrijblijvend gesprek" via Calendly (`https://calendly.com/smitsro7/consult`, constant in `lib/constants.ts`). Secondary: contact form and WhatsApp (+32 456 79 13 65).
- Pricing: implementation packages HAVN Launch, Growth, Multi-Property are quoted per project ("op maat"); monthly HAVN Platform €79 / €129 / quote and optional HAVN Revenue €179 / €299 / quote. The pricing section copy and prices are fixed by the owner; do not change them without explicit request.
- A revenue calculator estimates OTA commission; its +20% figure is labelled as an indicative scenario, not a promise.
- Blog is served from a separate app under `/blog`.
- Google Analytics loads only after cookie consent (`components/cookie-consent.tsx`).

## Capabilities and Constraints

- Next.js on Vercel, auto-deployed from `main` of `RoelS7/havn-v3`; live at https://www.havnrevenue.com.
- Controller: Roel Smits, handelend onder de naam HAVN Revenue, Cra. 54 #1A-9, Medellín, Colombia, RUT 700.288.175. Contact info@havnrevenue.com.
- Processors in use: Vercel, Resend, Airtable, Anthropic (calculator report), Google Analytics, Calendly, Slack, own mailbox.
- No terms & conditions page (removed on purpose; the old template did not match the service).

## Brand Commitments

- Name: HAVN / HAVN Revenue. Logo: `public/logo-60x120.png`.
- Visual design (colors, fonts, layout, images, animations) is approved; refine only on request.
- Voice: calm, respectful, honest, no sales talk. Flemish Dutch, address the visitor with je/jij/jouw (never u/uw), first person singular ("ik", not "we"; "we samen" is fine for owner + Roel).
- No result promises: no percentages, no timelines for results, no invented figures, client counts or testimonials.

## Evidence on Hand

- Case study: De Hoeveschuur, Millen (BE): booking system, automated guest communication, workflows, website. Owner quote available (attributed as "Eigenaar, De Hoeveschuur").
- Case study: Casa Clandestina Guest House, Medellín (CO). Key insight text, no owner quote.
- No quantified results, logos, reviews or press. Do not fabricate.

## Product Principles

1. One clear next step: a no-obligation conversation.
2. Honest over impressive: real properties, real words, no promises.
3. Start from the owner's situation and return, not from tools or features.
4. Transparent where possible: monthly prices public; custom work explained as custom.

## Accessibility & Inclusion

Target WCAG 2.2 AA: text contrast, keyboard focus, labelled controls, 44px touch targets, reduced-motion support.
