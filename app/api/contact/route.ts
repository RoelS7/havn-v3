import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      console.error("CRITICAL: RESEND_API_KEY missing in process.env");
      return new Response(JSON.stringify({ error: "Server config error" }), { status: 500 });
    }

    const resend = new Resend(resendApiKey);
    const body = await req.json();
    const { name, email, phone, message, propertyType, currentPlatforms } = body;

    if (!name || !email) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    // 1. MAIL NAAR JOU
    await resend.emails.send({
      from: "HAVN <projects@ateliersmits.be>",
      to: ["projects@ateliersmits.be"],
      subject: `Nieuwe lead: ${name}`,
      html: `
        <h2>Nieuwe lead via website</h2>
        <p><b>Naam:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Telefoon:</b> ${phone}</p>
        <p><b>Type:</b> ${propertyType}</p>
        <p><b>Platforms:</b> ${currentPlatforms}</p>
        <p><b>Bericht:</b><br/>${message}</p>
      `,
    });

    // 2. BEVESTIGING NAAR KLANT
    await resend.emails.send({
      from: "HAVN <projects@ateliersmits.be>",
      to: [email],
      subject: "We hebben uw aanvraag ontvangen",
      html: `
        <h2>Bedankt voor uw aanvraag, ${name}</h2>
        <p>We hebben je bericht goed ontvangen en nemen binnen 24 uur contact met je op.</p>
        <p>Je kan ook direct een gesprek inplannen via: <a href="https://calendly.com/smitsro7/consult">Calendly</a></p>
        <p>Met vriendelijke groet,<br/>Roel - HAVN</p>
      `,
    });

    // 3. SLACK NOTIFICATIE (Alleen als webhook bestaat)
    if (process.env.SLACK_WEBHOOK) {
      await fetch(process.env.SLACK_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `🚀 Nieuwe Lead: ${name} (${email})\nBericht: ${message}`
        })
      });
    }

    // 4. AIRTABLE (Alleen als keys bestaan)
    if (process.env.AIRTABLE_API_KEY && process.env.AIRTABLE_BASE_ID) {
      await fetch(
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
    }

    return new Response(JSON.stringify({ success: true }), { 
      status: 200, 
      headers: { 'Content-Type': 'application/json' } 
    });

  } catch (error: any) {
    console.error("FULL API ERROR:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}