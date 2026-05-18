import { Resend } from "resend"

const FROM_EMAIL = process.env.FROM_EMAIL || "info@havnrevenue.com";
const REPLY_TO_EMAIL = process.env.REPLY_TO_EMAIL || "info@havnrevenue.com";
const SENDER_NAME = "HAVN";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY || "");

  try {
    const {
      rooms,
      adr,
      occupancy,
      email,
      revenue,
      language,
      propertyType,
      country,
      platforms,
      challenge,
    } = await req.json();

    /* ── VERTALINGEN ── */
    const translations: Record<string, { 
      subject: string; 
      intro: string; 
      auditTitle: string; 
      revenueLabel: string; 
      ctaText: string 
    }> = {
      nl: {
        subject: "Uw persoonlijk revenue rapport — HAVN",
        intro: `<p>Bedankt voor het invullen van onze revenue calculator.</p>
                <p>Op basis van uw accommodatie hebben we een persoonlijke analyse gemaakt.</p>`,
        auditTitle: "Uw Persoonlijk Revenue Rapport",
        revenueLabel: "Geschatte jaaromzet",
        ctaText: "Plan gratis strategiegesprek",
      },
      es: {
        subject: "Tu informe de ingresos personalizado — HAVN",
        intro: `<p>Gracias por usar nuestra calculadora de ingresos.</p>
                <p>Basado en tu propiedad, hemos preparado un análisis personalizado.</p>`,
        auditTitle: "Tu Informe de Ingresos Personalizado",
        revenueLabel: "Ingresos anuales estimados",
        ctaText: "Agendar llamada estratégica gratuita",
      },
      en: {
        subject: "Your personal revenue report — HAVN",
        intro: `<p>Thank you for using our revenue calculator.</p>
                <p>Based on your property details, we've prepared a personalized analysis.</p>`,
        auditTitle: "Your Personal Revenue Report",
        revenueLabel: "Estimated yearly revenue",
        ctaText: "Book free strategy call",
      },
    };

    const lang = translations[language] || translations.en;
    const writingLanguage = language === "nl" ? "Dutch" : language === "es" ? "Spanish" : "English";

    const propertyLabels: Record<string, Record<string, string>> = {
      nl: { bnb: "B&B", vacation: "Vakantiewoning", apartment: "Appartement", hotel: "Boutique Hotel", villa: "Villa" },
      en: { bnb: "B&B", vacation: "Vacation Rental", apartment: "Apartment", hotel: "Boutique Hotel", villa: "Villa" },
      es: { bnb: "B&B", vacation: "Alquiler Vacacional", apartment: "Apartamento", hotel: "Hotel Boutique", villa: "Villa" },
    }
    const countryLabels: Record<string, Record<string, string>> = {
      nl: { be: "België", us: "VS", mx: "Mexico", co: "Colombia", other: "Andere" },
      en: { be: "Belgium", us: "United States", mx: "Mexico", co: "Colombia", other: "Other" },
      es: { be: "Bélgica", us: "Estados Unidos", mx: "México", co: "Colombia", other: "Otro" },
    }
    const challengeLabels: Record<string, Record<string, string>> = {
      nl: { time: "Te veel handmatig werk", revenue: "Omzet verhogen", occupancy: "Bezetting verhogen", systems: "Systemen koppelen", communication: "Gastcommunicatie" },
      en: { time: "Too much manual work", revenue: "Increasing revenue", occupancy: "Improving occupancy", systems: "Connecting systems", communication: "Guest communication" },
      es: { time: "Demasiado trabajo manual", revenue: "Aumentar ingresos", occupancy: "Mejorar ocupación", systems: "Conectar sistemas", communication: "Comunicación con huéspedes" },
    }

    const propertyLabel = propertyLabels[language]?.[propertyType] || propertyType
    const countryLabel = countryLabels[language]?.[country] || country
    const challengeLabel = challengeLabels[language]?.[challenge] || challenge
    const platformsText = platforms || "not specified"

    /* ── AI RAPPORT ── */
let report = "Report temporarily unavailable. Book a call for a personal analysis."

try {
  console.log("Starting Anthropic call...")
  console.log("API key present:", !!process.env.ANTHROPIC_API_KEY)

  const prompt = `You are a hotel and short-term rental revenue management expert working for HAVN, a premium STR consultancy.

Write a personalized revenue audit report for this property. Be specific, concrete and actionable. Avoid generic advice.

PROPERTY DETAILS:
- Type: ${propertyLabel}
- Market / Country: ${countryLabel}
- Rooms / Units: ${rooms}
- Average Nightly Rate: €${adr}
- Current Occupancy: ${occupancy}%
- Estimated Yearly Revenue: €${Math.round(revenue)}
- Active Platforms: ${platformsText}
- Biggest Challenge: ${challengeLabel}

Write the report in ${writingLanguage}. Structure it as follows:

1. Revenue Snapshot
A 2-3 sentence assessment of their current performance vs market benchmarks for their property type and market. Be honest but encouraging.

2. Biggest Revenue Leak
Based on their biggest challenge (${challengeLabel}), identify the #1 specific thing costing them money right now. Give a concrete example or number if possible.

3. Quick Win (This Month)
One specific action they can take in the next 30 days to see improvement. Be very specific.

4. Pricing Strategy
Specific pricing advice for their property type and market. Include seasonal recommendations relevant to ${countryLabel}.

5. Platform & Distribution
Based on their active platforms (${platformsText}), give specific advice on what is missing or what to improve.

Keep the total to 250-300 words. Write in a professional but approachable tone. Do not use markdown bold in the output — use plain text with numbered sections.`

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 8000)

  const aiRes = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    signal: controller.signal,
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY || "",
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 600,
      messages: [{ role: "user", content: prompt }],
    }),
  })

  clearTimeout(timeout)

  console.log("Anthropic status:", aiRes.status)
  const aiData = await aiRes.json()
  console.log("Anthropic response:", JSON.stringify(aiData).slice(0, 300))

  if (!aiRes.ok) {
    console.error("Anthropic error:", JSON.stringify(aiData))
  } else {
    report = aiData?.content?.[0]?.text || report
    console.log("Report generated, length:", report.length)
  }
} catch (aiError: any) {
  console.error("AI call failed:", aiError?.message || aiError)
}

    /* ── AIRTABLE ── */
    const airtableRes = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/leads`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            Email: email,
            Rooms: rooms,
            ADR: adr,
            Occupancy: occupancy,
            Revenue: revenue,
            Language: language,
            Source: "Revenue Calculator",
            PropertyType: propertyType,
            Country: country,
            Platforms: platforms,
            Challenge: challenge,
          },
        }),
      }
    )
    if (!airtableRes.ok) {
      const err = await airtableRes.json()
      console.error("Airtable error:", JSON.stringify(err))
    }

    /* ── EMAIL ── */
    const reportHtml = report
      .split("\n")
      .map((line: string) => {
        if (/^\d\./.test(line.trim())) {
          return `<h3 style="color:#1a1a1a;font-size:15px;margin:20px 0 6px;font-weight:600;">${line.trim()}</h3>`
        }
        if (line.trim() === "") return ""
        return `<p style="color:#444;font-size:14px;line-height:1.7;margin:0 0 8px;">${line.trim()}</p>`
      })
      .join("")

    await resend.emails.send({
      from: `${SENDER_NAME} <${FROM_EMAIL}>`,
      replyTo: REPLY_TO_EMAIL,
      to: ["info@havnrevenue.com"],
      subject: lang.subject,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="margin:0;padding:0;background:#f5f0eb;font-family:Georgia,serif;">
          <div style="max-width:600px;margin:40px auto;background:white;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

            <!-- Header -->
            <div style="background:#0a0a0a;padding:36px 40px;text-align:center;">
              <p style="color:#C9A96E;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;margin:0 0 8px;">HAVN Revenue Management</p>
              <h1 style="color:white;font-size:24px;margin:0;font-weight:400;">${lang.auditTitle}</h1>
            </div>

            <!-- Intro -->
            <div style="padding:32px 40px 0;color:#555;font-size:14px;line-height:1.7;">
              ${lang.intro}
            </div>

            <!-- Revenue stats -->
            <div style="margin:24px 40px;background:#f9f6f2;border-radius:12px;padding:24px;border:1px solid #e8ddd0;">
              <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:16px;">
                <div style="text-align:center;flex:1;">
                  <p style="color:#888;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 4px;">${lang.revenueLabel}</p>
                  <p style="color:#0a0a0a;font-size:28px;font-weight:700;margin:0;">€${Math.round(revenue).toLocaleString()}</p>
                </div>
                <div style="text-align:center;flex:1;">
                  <p style="color:#888;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 4px;">Potential +20%</p>
                  <p style="color:#2d7a3a;font-size:28px;font-weight:700;margin:0;">+€${Math.round(revenue * 0.2).toLocaleString()}</p>
                </div>
              </div>
              <div style="margin-top:16px;padding-top:16px;border-top:1px solid #e8ddd0;display:flex;flex-wrap:wrap;gap:8px;font-size:12px;color:#888;">
                <span>📍 ${countryLabel}</span>
                <span>·</span>
                <span>🏠 ${propertyLabel}</span>
                <span>·</span>
                <span>🛏 ${rooms} units</span>
                <span>·</span>
                <span>📊 ${occupancy}% bezetting</span>
              </div>
            </div>

            <!-- AI Report -->
            <div style="padding:0 40px 32px;">
              ${reportHtml}
            </div>

            <!-- CTA -->
            <div style="background:#0a0a0a;padding:36px 40px;text-align:center;">
              <p style="color:#aaa;font-size:13px;margin:0 0 20px;">Klaar om dit potentieel te benutten?</p>
              <a href="https://calendly.com/smitsro7/consult"
                style="display:inline-block;background:#C9A96E;color:white;text-decoration:none;padding:14px 32px;border-radius:8px;font-size:14px;font-weight:600;letter-spacing:0.05em;">
                ${lang.ctaText} →
              </a>
              <p style="color:#555;font-size:11px;margin:20px 0 0;">HAVN · info@havnrevenue.com</p>
            </div>

          </div>
        </body>
        </html>
      `,
    })

    // 2. EMAIL NAAR KLANT (mooie volledige versie - jouw originele design)
    await resend.emails.send({
      from: `${SENDER_NAME} <${FROM_EMAIL}>`,
      replyTo: REPLY_TO_EMAIL,
      to: [email],
      subject: lang.subject,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="margin:0;padding:0;background:#f5f0eb;font-family:Georgia,serif;">
          <div style="max-width:600px;margin:40px auto;background:white;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
            <!-- Header -->
            <div style="background:#0a0a0a;padding:36px 40px;text-align:center;">
              <p style="color:#C9A96E;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;margin:0 0 8px;">HAVN Revenue Management</p>
              <h1 style="color:white;font-size:24px;margin:0;font-weight:400;">${lang.auditTitle}</h1>
            </div>
            
            <!-- Intro -->
            <div style="padding:32px 40px 0;color:#555;font-size:14px;line-height:1.7;">
              ${lang.intro}
            </div>

            <!-- Revenue stats -->
            <div style="margin:24px 40px;background:#f9f6f2;border-radius:12px;padding:24px;border:1px solid #e8ddd0;">
              <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:16px;">
                <div style="text-align:center;flex:1;">
                  <p style="color:#888;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 4px;">${lang.revenueLabel}</p>
                  <p style="color:#0a0a0a;font-size:28px;font-weight:700;margin:0;">€${Math.round(revenue).toLocaleString()}</p>
                </div>
                <div style="text-align:center;flex:1;">
                  <p style="color:#888;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 4px;">Potential +20%</p>
                  <p style="color:#2d7a3a;font-size:28px;font-weight:700;margin:0;">+€${Math.round(revenue * 0.2).toLocaleString()}</p>
                </div>
              </div>
            </div>

            <!-- AI Report -->
            <div style="padding:0 40px 32px;">
              ${reportHtml}
            </div>

            <!-- CTA -->
            <div style="background:#0a0a0a;padding:36px 40px;text-align:center;">
              <p style="color:#aaa;font-size:13px;margin:0 0 20px;">Klaar om dit potentieel te benutten?</p>
              <a href="https://calendly.com/smitsro7/consult"
                style="display:inline-block;background:#C9A96E;color:white;text-decoration:none;padding:14px 32px;border-radius:8px;font-size:14px;font-weight:600;letter-spacing:0.05em;">
                ${lang.ctaText} →
              </a>
              <p style="color:#555;font-size:11px;margin:20px 0 0;">HAVN · info@havnrevenue.com</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return Response.json({ success: true })
  } catch (error) {
    console.error("FULL ERROR:", error)
    return Response.json({ success: false })
  }
}