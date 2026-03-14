export const dynamic = "force-dynamic"

import { Resend } from "resend"

export async function POST(req: Request) {

  const resendApiKey = process.env.RESEND_API_KEY

  if (!resendApiKey) {
    return Response.json(
      { error: "RESEND_API_KEY missing" },
      { status: 500 }
    )
  }

  const resend = new Resend(resendApiKey)

  const { name, email, phone, message } = await req.json()

  try {

    // MAIL NAAR JOU
    await resend.emails.send({
      from: "HAVN <projects@ateliersmits.be>",
      to: ["projects@ateliersmits.be"],
      subject: "Nieuwe aanvraag via HAVN website",
      html: `
        <h2>Nieuwe aanvraag</h2>
        <p><b>Naam:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Telefoon:</b> ${phone}</p>
        <p><b>Bericht:</b><br/>${message}</p>
      `,
    })

    // BEVESTIGINGSMAIL NAAR KLANT
    await resend.emails.send({
      from: "HAVN <projects@ateliersmits.be>",
      to: [email],
      subject: "We hebben uw aanvraag ontvangen",
      html: `
        <h2>Bedankt voor uw aanvraag</h2>

        <p>Beste ${name},</p>

        <p>Bedankt voor uw interesse in HAVN.</p>

        <p>U kan hieronder meteen een gratis strategiegesprek boeken:</p>

        <p>
          <a href="https://calendly.com/smitsro7/consult"
          style="background:#c8a96a;color:black;padding:12px 20px;text-decoration:none;border-radius:6px;">
          Boek een gratis consultatie
          </a>
        </p>

        <p>Of ik neem binnen 24 uur contact met u op.</p>

        <p>Met vriendelijke groet,<br/>
        Roel Smits<br/>
        HAVN</p>
      `,
    })

    // SLACK NOTIFICATIE
    if (process.env.SLACK_WEBHOOK) {
      await fetch(process.env.SLACK_WEBHOOK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: `Nieuwe HAVN lead 🚀
Naam: ${name}
Email: ${email}
Telefoon: ${phone}
Bericht: ${message}`
        })
      })
    }

    // AIRTABLE CRM
    if (process.env.AIRTABLE_API_KEY) {
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
      )
    }

    return Response.json({ success: true })

  } catch (error) {

    console.error(error)

    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    )

  }

}