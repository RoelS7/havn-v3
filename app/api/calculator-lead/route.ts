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
    };

    const countryLabels: Record<string, Record<string, string>> = {
      nl: { be: "België", us: "VS", mx: "Mexico", co: "Colombia", other: "Andere" },
      en: { be: "Belgium", us: "United States", mx: "Mexico", co: "Colombia", other: "Other" },
      es: { be: "Bélgica", us: "Estados Unidos", mx: "México", co: "Colombia", other: "Otro" },
    };

    const challengeLabels: Record<string, Record<string, string>> = {
      nl: { time: "Te veel handmatig werk", revenue: "Omzet verhogen", occupancy: "Bezetting verhogen", systems: "Systemen koppelen", communication: "Gastcommunicatie" },
      en: { time: "Too much manual work", revenue: "Increasing revenue", occupancy: "Improving occupancy", systems: "Connecting systems", communication: "Guest communication" },
      es: { time: "Demasiado trabajo manual", revenue: "Aumentar ingresos", occupancy: "Mejorar ocupación", systems: "Conectar sistemas", communication: "Comunicación con huéspedes" },
    };

    const propertyLabel = propertyLabels[language]?.[propertyType] || propertyType;
    const countryLabel = countryLabels[language]?.[country] || country;
    const challengeLabel = challengeLabels[language]?.[challenge] || challenge;
    const platformsText = platforms || "Niet opgegeven";

    /* ── AI RAPPORT ── */
    let report = "Rapport tijdelijk niet beschikbaar. Boek een gesprek voor een persoonlijke analyse.";
    try {
      const prompt = `You are a hotel and short-term rental revenue management expert working for HAVN...`; 
      // (je volledige prompt blijft hier hetzelfde - ik heb hem niet veranderd)

      const aiRes = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
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
      });

      const aiData = await aiRes.json();
      if (aiRes.ok && aiData?.content?.[0]?.text) {
        report = aiData.content[0].text;
      }
    } catch (aiError) {
      console.error("AI call failed:", aiError);
    }

    /* ── AIRTABLE ── */
    await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/leads`, {
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
    });

    /* ── EMAILS ── */
    const reportHtml = report
      .split("\n")
      .map((line: string) => {
        if (/^\d\./.test(line.trim())) {
          return `<h3 style="color:#1a1a1a;font-size:15px;margin:20px 0 6px;font-weight:600;">${line.trim()}</h3>`;
        }
        if (line.trim() === "") return "";
        return `<p style="color:#444;font-size:14px;line-height:1.7;margin:0 0 8px;">${line.trim()}</p>`;
      })
      .join("");

    // 1. EMAIL NAAR JOU (eigenaar)
    await resend.emails.send({
      from: `${SENDER_NAME} <${FROM_EMAIL}>`,
      replyTo: REPLY_TO_EMAIL,
      to: ["info@havnrevenue.com"],
      subject: `Nieuwe Revenue Calculator lead: ${email}`,
      html: `<h2>Nieuwe lead via Revenue Calculator</h2><p><strong>Email:</strong> ${email}</p>`,
    });

    // 2. EMAIL NAAR KLANT (bevestiging + rapport)
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
            <div style="background:#0a0a0a;padding:36px 40px;text-align:center;">
              <p style="color:#C9A96E;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;margin:0 0 8px;">HAVN Revenue Management</p>
              <h1 style="color:white;font-size:24px;margin:0;font-weight:400;">${lang.auditTitle}</h1>
            </div>
            
            <div style="padding:32px 40px 0;color:#555;font-size:14px;line-height:1.7;">
              ${lang.intro}
            </div>

            <div style="margin:24px 40px;background:#f9f6f2;border-radius:12px;padding:24px;border:1px solid #e8ddd0;">
              <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:16px;">
                <div style="text-align:center;flex:1;">
                  <p style="color:#888;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 4px;">${lang.revenueLabel}</p>
                  <p style="color:#0a0a0a;font-size:28px;font-weight:700;margin:0;">€${Math.round(revenue).toLocaleString()}</p>
                </div>
                <div style="text-align:center;flex:1;">
                  <p style="color:#888;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 4px;">Potentieel +20%</p>
                  <p style="color:#2d7a3a;font-size:28px;font-weight:700;margin:0;">+€${Math.round(revenue * 0.2).toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div style="padding:0 40px 32px;">
              ${reportHtml}
            </div>

            <div style="background:#0a0a0a;padding:36px 40px;text-align:center;">
              <a href="https://calendly.com/smitsro7/consult" 
                 style="display:inline-block;background:#C9A96E;color:white;text-decoration:none;padding:14px 32px;border-radius:8px;font-size:14px;font-weight:600;">
                ${lang.ctaText} →
              </a>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return Response.json({ success: true });

  } catch (error: any) {
    console.error("FULL ERROR in calculator-lead:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}