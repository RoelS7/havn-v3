import { Resend } from "resend";
export const dynamic = "force-dynamic";

// === CONFIGURATIE ===
const FROM_EMAIL = process.env.FROM_EMAIL || "info@havnrevenue.com";
const REPLY_TO_EMAIL = process.env.REPLY_TO_EMAIL || "info@havnrevenue.com";
const SENDER_NAME = "HAVN - Revenue Optimalisatie";   // Dit kun je makkelijk aanpassen
// =====================

export async function POST(req: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("CRITICAL: RESEND_API_KEY missing in process.env");
      return new Response(JSON.stringify({ error: "Server config error" }), { status: 500 });
    }

    const resend = new Resend(resendApiKey);
    const body = await req.json();
    const { name, email, phone, message, propertyType, currentPlatforms, language } = body;

    if (!name || !email) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    /* ── VERTALINGEN ── */
    const t: Record<string, {
      subjectToClient: string
      thankYouTitle: string
      thankYouIntro: string
      receivedMsg: string
      bookCall: string
      greeting: string
      internalSubject: string
      labelName: string
      labelEmail: string
      labelPhone: string
      labelType: string
      labelPlatforms: string
      labelMessage: string
      labelSource: string
    }> = {
      nl: {
        subjectToClient: `Bedankt voor uw aanvraag, ${name}`,
        thankYouTitle: "Aanvraag ontvangen",
        thankYouIntro: `Bedankt voor uw interesse in HAVN, ${name}.`,
        receivedMsg: "We hebben uw aanvraag goed ontvangen en nemen binnen 24 uur persoonlijk contact met u op voor een gratis strategiegesprek.",
        bookCall: "Plan direct een gesprek in",
        greeting: "Met vriendelijke groet,",
        internalSubject: `🚀 Nieuwe lead: ${name}`,
        labelName: "Naam",
        labelEmail: "Email",
        labelPhone: "Telefoon",
        labelType: "Type accommodatie",
        labelPlatforms: "Platforms",
        labelMessage: "Bericht",
        labelSource: "Bron",
      },
      en: {
        subjectToClient: `Thank you for your request, ${name}`,
        thankYouTitle: "Request received",
        thankYouIntro: `Thank you for your interest in HAVN, ${name}.`,
        receivedMsg: "We have received your request and will personally contact you within 24 hours for a free strategy call.",
        bookCall: "Book a call directly",
        greeting: "Kind regards,",
        internalSubject: `🚀 New lead: ${name}`,
        labelName: "Name",
        labelEmail: "Email",
        labelPhone: "Phone",
        labelType: "Property type",
        labelPlatforms: "Platforms",
        labelMessage: "Message",
        labelSource: "Source",
      },
      es: {
        subjectToClient: `Gracias por su solicitud, ${name}`,
        thankYouTitle: "Solicitud recibida",
        thankYouIntro: `Gracias por su interés en HAVN, ${name}.`,
        receivedMsg: "Hemos recibido su solicitud y nos pondremos en contacto personalmente en menos de 24 horas para una asesoría gratuita.",
        bookCall: "Agendar una llamada directamente",
        greeting: "Un cordial saludo,",
        internalSubject: `🚀 Nuevo lead: ${name}`,
        labelName: "Nombre",
        labelEmail: "Correo",
        labelPhone: "Teléfono",
        labelType: "Tipo de propiedad",
        labelPlatforms: "Plataformas",
        labelMessage: "Mensaje",
        labelSource: "Fuente",
      },
    }

    const lang = t[language] || t.nl

    /* ── MAIL NAAR KLANT ── */
    await resend.emails.send({
      from: `${SENDER_NAME} <${FROM_EMAIL}>`,
      to: [email],
      replyTo: REPLY_TO_EMAIL,
      subject: lang.subjectToClient,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="margin:0;padding:0;background:#f5f0eb;font-family:Georgia,serif;">
          <div style="max-width:600px;margin:40px auto;background:white;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

            <!-- Header -->
            <div style="background:#0a0a0a;padding:36px 40px;text-align:center;">
              <p style="color:#C9A96E;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;margin:0 0 8px;">HAVN Revenue Management</p>
              <h1 style="color:white;font-size:24px;margin:0;font-weight:400;">${lang.thankYouTitle}</h1>
            </div>

            <!-- Body -->
            <div style="padding:40px 40px 32px;">
              <p style="color:#1a1a1a;font-size:18px;margin:0 0 16px;">${lang.thankYouIntro}</p>
              <p style="color:#555;font-size:14px;line-height:1.8;margin:0 0 32px;">${lang.receivedMsg}</p>

              <!-- Divider -->
              <div style="display:flex;align-items:center;gap:12px;margin:0 0 32px;">
                <div style="flex:1;height:1px;background:#f0ebe4;"></div>
                <div style="width:6px;height:6px;border-radius:50%;background:#C9A96E;"></div>
                <div style="flex:1;height:1px;background:#f0ebe4;"></div>
              </div>

              <!-- Summary box -->
              <div style="background:#f9f6f2;border-radius:12px;padding:24px;border:1px solid #e8ddd0;margin-bottom:32px;">
                ${phone ? `<p style="margin:0 0 10px;font-size:13px;color:#888;">📞 ${phone}</p>` : ""}
                ${propertyType ? `<p style="margin:0 0 10px;font-size:13px;color:#888;">🏠 ${propertyType}</p>` : ""}
                ${currentPlatforms ? `<p style="margin:0 0 10px;font-size:13px;color:#888;">📱 ${currentPlatforms}</p>` : ""}
                ${message ? `<p style="margin:0;font-size:13px;color:#888;line-height:1.7;border-top:1px solid #e8ddd0;padding-top:12px;margin-top:${phone || propertyType || currentPlatforms ? "12px" : "0"};">"${message}"</p>` : ""}
              </div>

              <!-- CTA -->
              <div style="text-align:center;">
                <a href="https://calendly.com/smitsro7/consult"
                  style="display:inline-block;background:#C9A96E;color:white;text-decoration:none;padding:14px 32px;border-radius:8px;font-size:14px;font-weight:600;letter-spacing:0.05em;">
                  ${lang.bookCall} →
                </a>
              </div>
            </div>

            <!-- Footer -->
            <div style="background:#0a0a0a;padding:28px 40px;text-align:center;">
              <p style="color:#aaa;font-size:13px;margin:0 0 4px;">${lang.greeting}</p>
              <p style="color:#C9A96E;font-size:14px;font-weight:600;margin:0 0 16px;">Roel — HAVN</p>
              <p style="color:#555;font-size:11px;margin:0;">info@havnrevenue.com</p>
            </div>

          </div>
        </body>
        </html>
      `,
    });

    /* ── MAIL NAAR JOU (intern) ── */
    await resend.emails.send({
      from: `${SENDER_NAME} <${FROM_EMAIL}>`,
      to: ["info@havnrevenue.com"],
      replyTo: REPLY_TO_EMAIL,
      subject: lang.internalSubject,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="margin:0;padding:0;background:#f5f0eb;font-family:Georgia,serif;">
          <div style="max-width:600px;margin:40px auto;background:white;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

            <!-- Header -->
            <div style="background:#0a0a0a;padding:28px 40px;text-align:center;">
              <p style="color:#C9A96E;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;margin:0 0 6px;">HAVN — Nieuwe Lead</p>
              <h1 style="color:white;font-size:20px;margin:0;font-weight:400;">${name}</h1>
            </div>

            <!-- Lead details -->
            <div style="padding:32px 40px;">
              <table style="width:100%;border-collapse:collapse;">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0ebe4;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.05em;width:35%;">${lang.labelName}</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f0ebe4;font-size:14px;color:#1a1a1a;font-weight:600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0ebe4;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.05em;">${lang.labelEmail}</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f0ebe4;font-size:14px;color:#1a1a1a;">
                    <a href="mailto:${email}" style="color:#C9A96E;text-decoration:none;">${email}</a>
                  </td>
                </tr>
                ${phone ? `
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0ebe4;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.05em;">${lang.labelPhone}</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f0ebe4;font-size:14px;color:#1a1a1a;">${phone}</td>
                </tr>` : ""}
                ${propertyType ? `
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0ebe4;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.05em;">${lang.labelType}</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f0ebe4;font-size:14px;color:#1a1a1a;">${propertyType}</td>
                </tr>` : ""}
                ${currentPlatforms ? `
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0ebe4;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.05em;">${lang.labelPlatforms}</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f0ebe4;font-size:14px;color:#1a1a1a;">${currentPlatforms}</td>
                </tr>` : ""}
                <tr>
                  <td style="padding:10px 0;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.05em;">${lang.labelSource}</td>
                  <td style="padding:10px 0;font-size:14px;color:#1a1a1a;">Website (${language?.toUpperCase() || "NL"})</td>
                </tr>
              </table>

              ${message ? `
              <div style="margin-top:24px;background:#f9f6f2;border-radius:12px;padding:20px;border:1px solid #e8ddd0;">
                <p style="font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 10px;">${lang.labelMessage}</p>
                <p style="font-size:14px;color:#444;line-height:1.7;margin:0;">${message}</p>
              </div>` : ""}

              <!-- Quick actions -->
              <div style="margin-top:28px;display:flex;gap:12px;flex-wrap:wrap;">
                <a href="mailto:${email}"
                  style="display:inline-block;background:#0a0a0a;color:white;text-decoration:none;padding:12px 24px;border-radius:8px;font-size:13px;font-weight:600;">
                  Reply →
                </a>
                <a href="https://calendly.com/smitsro7/consult"
                  style="display:inline-block;background:transparent;color:#C9A96E;text-decoration:none;padding:12px 24px;border-radius:8px;font-size:13px;font-weight:600;border:1px solid #C9A96E;">
                  Calendly →
                </a>
              </div>
            </div>

          </div>
        </body>
        </html>
      `,
    });

    /* ── SLACK ── */
    if (process.env.SLACK_WEBHOOK) {
      await fetch(process.env.SLACK_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `🚀 Nieuwe Lead: ${name} (${email})\nBericht: ${message}`
        })
      });
    }

    /* ── AIRTABLE ── */
    console.log("AIRTABLE KEY PREVIEW:", process.env.AIRTABLE_API_KEY?.slice(0, 10));
    if (process.env.AIRTABLE_API_KEY && process.env.AIRTABLE_BASE_ID && process.env.AIRTABLE_TABLE) {
      const airtableRes = await fetch(
        `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: {
              Name: name,
              Email: email,
              Phone: phone,
              Message: message,
              Source: "Website",
            },
          }),
        }
      );
      if (!airtableRes.ok) {
        const errBody = await airtableRes.json();
        console.error("AIRTABLE ERROR:", airtableRes.status, JSON.stringify(errBody));
      } else {
        console.log("AIRTABLE SUCCESS: rij aangemaakt");
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error: any) {
    console.error("FULL API ERROR:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}