"use client"

import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"

export default function RevenueCalculator() {

const { language } = useLanguage()

const [rooms,setRooms] = useState(20)
const [adr,setAdr] = useState(120)
const [occupancy,setOccupancy] = useState(60)
const [email,setEmail] = useState("")
const [result,setResult] = useState<number | null>(null)
const benchmarkRevenue = rooms * adr * 0.68 * 365
const [loading,setLoading] = useState(false)

const text = {
nl: {
title: "Hotel Revenue Calculator",
rooms: "Aantal kamers",
adr: "Gemiddelde kamerprijs (€)",
occ: "Bezettingsgraad (%)",
calculate: "Bereken",
result: "Geschatte jaarlijkse omzet",
increase: "Potentiële stijging met optimalisatie",
email: "Email voor volledige analyse",
cta: "Ontvang volledige analyse",
based: "Gebaseerd op gemiddelde optimalisaties van 10–20%"
},
en: {
title: "Hotel Revenue Calculator",
rooms: "Number of rooms",
adr: "Average nightly rate (€)",
occ: "Occupancy rate (%)",
calculate: "Calculate",
result: "Estimated yearly revenue",
increase: "Potential increase with optimization",
email: "Email for full analysis",
cta: "Get full revenue analysis",
based: "Based on average optimization improvements of 10–20%"
},
es: {
title: "Calculadora de ingresos hoteleros",
rooms: "Número de habitaciones",
adr: "Tarifa promedio por noche (€)",
occ: "Ocupación (%)",
calculate: "Calcular",
result: "Ingresos anuales estimados",
increase: "Aumento potencial con optimización",
email: "Email para análisis completo",
cta: "Recibir análisis completo",
based: "Basado en mejoras promedio de optimización de 10–20%"
}
}[language || "en"]


function calculate(){

const revenue = rooms * adr * (occupancy/100) * 365

setResult(revenue)

}


async function submitLead(){

if(!email) return

setLoading(true)

await fetch("/api/calculator-lead",{
method:"POST",
headers:{ "Content-Type":"application/json"},
body:JSON.stringify({
rooms,
adr,
occupancy,
email,
revenue: result,
language
})
})

setLoading(false)

}


return(

<div className="bg-white p-10 rounded-xl shadow-xl max-w-2xl mx-auto">

<h2 className="text-2xl font-bold mb-6">
{text.title}
</h2>

<div className="space-y-4">

<label className="block text-sm font-medium">
{text.rooms}
</label>

<input
type="number"
min="1"
value={rooms}
onChange={(e)=>setRooms(Number(e.target.value))}
className="border p-3 w-full"
/>

<label className="block text-sm font-medium">
{text.adr}
</label>

<input
type="number"
min="10"
value={adr}
onChange={(e)=>setAdr(Number(e.target.value))}
className="border p-3 w-full"
/>

<label className="block text-sm font-medium">
{text.occ}
</label>

<input
type="number"
min="1"
max="100"
value={occupancy}
onChange={(e)=>setOccupancy(Number(e.target.value))}
className="border p-3 w-full"
/>

<button
onClick={calculate}
className="bg-black text-white px-6 py-3 rounded mt-4 w-full">
{text.calculate}
</button>

{result !== null && (

<div className="mt-6">

<p className="text-lg">
{text.result}
</p>

<p className="text-3xl font-bold">
€{Math.round(result).toLocaleString()}
</p>

<p className="mt-4">
{text.increase}
</p>

<p className="text-2xl font-semibold text-green-600">
€{Math.round(result * 0.18).toLocaleString()}
</p>

<p className="text-sm mt-2">
{text.based}
</p>

<p className="mt-4 text-lg">
Hotels like yours generate on average:
</p>

<p className="text-2xl font-semibold">
€{Math.round(benchmarkRevenue).toLocaleString()}
</p>

<p className="text-sm mt-2">
Your potential revenue gap:
</p>

<p className="text-xl text-green-600 font-semibold">
€{Math.round(benchmarkRevenue - result).toLocaleString()}
</p>

<input
type="email"
placeholder={text.email}
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="border p-3 w-full mt-4"
/>

<button
onClick={submitLead}
disabled={!email || loading}
className="bg-[#c8a96a] px-6 py-3 rounded mt-3 w-full disabled:opacity-50">

{loading ? "..." : text.cta}

</button>

</div>

)}

</div>

</div>

)

}