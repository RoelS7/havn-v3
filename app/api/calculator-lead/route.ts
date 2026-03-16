import { Resend } from "resend"

export async function POST(req: Request) {

const resend = new Resend(process.env.RESEND_API_KEY || "")

if(!process.env.RESEND_API_KEY){
console.error("Missing RESEND_API_KEY")
}

try{

/* -----------------------------
DATA VAN CALCULATOR
----------------------------- */

const { rooms, adr, occupancy, email, revenue, language } = await req.json()

/* -----------------------------
VERTALING EMAIL INTRO
----------------------------- */

let subject = ""
let intro = ""

if(language === "nl"){

subject = "Uw gratis hotel revenue analyse"

intro = `
<p>Bedankt voor het gebruiken van onze hotel revenue calculator.</p>
<p>Hieronder vindt u een eerste analyse van uw hotelprestaties.</p>
`

}

else if(language === "es"){

subject = "Su análisis gratuito de ingresos hoteleros"

intro = `
<p>Gracias por usar nuestra calculadora de ingresos hoteleros.</p>
<p>A continuación encontrará un primer análisis de su hotel.</p>
`

}

else{

subject = "Your free hotel revenue analysis"

intro = `
<p>Thank you for using our hotel revenue calculator.</p>
<p>Below you will find a first analysis of your hotel's performance.</p>
`

}

/* -----------------------------
AI REVENUE AUDIT
----------------------------- */

const prompt = `
You are a hotel revenue management expert.

Create a short hotel revenue audit.

Hotel data:

Rooms: ${rooms}
ADR: €${adr}
Occupancy: ${occupancy}%

Estimated yearly revenue: €${revenue}

Provide:

1. Revenue insight
2. Pricing improvement suggestion
3. Occupancy improvement strategy
4. OTA / distribution optimization tip

Limit to 200 words.
`

const ai = await fetch("https://api.openai.com/v1/chat/completions",{

method:"POST",

headers:{
"Content-Type":"application/json",
Authorization:`Bearer ${process.env.OPENAI_API_KEY}`
},

body:JSON.stringify({

model:"gpt-4o-mini",

messages:[
{role:"system",content:"You are a hotel revenue expert"},
{role:"user",content:prompt}
]

})

})

const aiData = await ai.json()

const report = aiData?.choices?.[0]?.message?.content || "AI report unavailable."

/* -----------------------------
AIRTABLE LEAD OPSLAAN
----------------------------- */

await fetch(
`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/leads`,
{
method:"POST",
headers:{
Authorization:`Bearer ${process.env.AIRTABLE_API_KEY}`,
"Content-Type":"application/json"
},
body:JSON.stringify({
fields:{
Email: email,
Rooms: rooms,
ADR: adr,
Occupancy: occupancy,
Revenue: revenue,
Language: language,
Source:"Revenue Calculator"
}
})
}
)

/* -----------------------------
MAIL VERSTUREN
----------------------------- */

await resend.emails.send({

from: "HAVN <projects@ateliersmits.be>",

to: [email],

subject: subject,

html:`

<h2>Hotel Revenue Audit</h2>

${intro}

<p><strong>Estimated yearly revenue:</strong></p>

<h3>€${Math.round(revenue).toLocaleString()}</h3>

<h3>Your AI Revenue Audit</h3>

<p>${report}</p>

<p style="margin-top:30px">

<a href="https://calendly.com/smitsro7/consult"
style="
background:#c8a96a;
padding:12px 20px;
color:white;
text-decoration:none;
border-radius:6px;
">

Book a free revenue strategy call

</a>

</p>

`

})

/* -----------------------------
RESPONSE
----------------------------- */

return Response.json({ success:true })

}

catch(error){

console.error(error)

return Response.json({ success:false })

}

}