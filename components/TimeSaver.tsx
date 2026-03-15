"use client"

import { useState } from "react"

export default function TimeSaver(){

const [hours,setHours] = useState(6)

const saved = hours * 52 * 0.7

return(

<div className="bg-gray-50 p-10 rounded-xl max-w-2xl mx-auto mt-16">

<h2 className="text-2xl font-bold mb-6">
Revenue Management Time Saver
</h2>

<label className="block text-sm font-medium mb-2">
How many hours per week do you spend adjusting hotel prices?
</label>

<input
type="number"
value={hours}
onChange={(e)=>setHours(Number(e.target.value))}
className="border p-3 w-full"
/>

<p className="mt-4">
Hours spent weekly adjusting prices
</p>

<p className="mt-6 text-xl">
Estimated time saved per year with automated revenue management:
</p>

<p className="text-3xl font-bold text-green-600">
{Math.round(saved)} hours
</p>

</div>

)

}