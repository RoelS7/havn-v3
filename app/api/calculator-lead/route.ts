export async function POST(req:Request){

const data = await req.json()

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
Email:data.email,
Rooms:data.rooms,
ADR:data.adr,
Occupancy:data.occupancy,
Revenue:data.revenue,
Source:"Calculator"
}
})
}
)

return Response.json({success:true})

}