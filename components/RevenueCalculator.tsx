"use client"

import { useState } from "react"

export default function RevenueCalculator() {

const [rooms,setRooms] = useState(20)
const [adr,setAdr] = useState(120)
const [occupancy,setOccupancy] = useState(60)
const [email,setEmail] = useState("")
const [result,setResult] = useState<number | null>(null)

function calculate(){

const revenue = rooms * adr * (occupancy/100) * 365
setResult(revenue)

}

async function submitLead(){

await fetch("/api/calculator-lead",{
method:"POST",
headers:{ "Content-Type":"application/json"},
body:JSON.stringify({
rooms,
adr,
occupancy,
email,
revenue: result
})
})

}

return(

<div className="bg-white p-10 rounded-xl shadow-xl max-w-2xl mx-auto">

<h2 className="text-2xl font-bold mb-6">
Hotel Revenue Calculator
</h2>

<div className="space-y-4">

<label className="block text-sm font-medium">
Number of rooms
</label>

<input
type="number"
value={rooms}
onChange={(e)=>setRooms(Number(e.target.value))}
className="border p-3 w-full"
/>

<label className="block text-sm font-medium">
Average nightly rate (€)
</label>

<input
type="number"
value={adr}
onChange={(e)=>setAdr(Number(e.target.value))}
className="border p-3 w-full"
/>

<label className="block text-sm font-medium">
Occupancy rate (%)
</label>

<input
type="number"
value={occupancy}
onChange={(e)=>setOccupancy(Number(e.target.value))}
className="border p-3 w-full"
/>

<button
onClick={calculate}
className="bg-black text-white px-6 py-3 rounded mt-4">
Calculate
</button>

{result && (

<div className="mt-6">

<p className="text-lg">
Estimated yearly revenue:
</p>

<p className="text-3xl font-bold">
€{Math.round(result).toLocaleString()}
</p>

<p className="mt-4">
Potential increase with optimization:
</p>

<p className="text-2xl font-semibold text-green-600">
€{Math.round(result * 0.18).toLocaleString()}
</p>

<p className="text-sm mt-2">
Based on average revenue optimization improvements of 10–20%.
</p>

<input
type="email"
placeholder="Enter email for full analysis"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="border p-3 w-full mt-4"
/>

<button
onClick={submitLead}
className="bg-[#c8a96a] px-6 py-3 rounded mt-3">
Get full revenue analysis
</button>

</div>

)}

</div>

</div>

)

}