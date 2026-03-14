async function getLeads() {

  const res = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      },
      cache: "no-store",
    }
  )

  const data = await res.json()
  return data.records
}

export default async function AdminPage() {

  const leads = await getLeads()

  return (
    <div className="max-w-5xl mx-auto py-20">

      <h1 className="text-3xl font-serif mb-10">
        HAVN Leads
      </h1>

      <div className="space-y-6">
        {leads.map((lead: any) => (
          <div key={lead.id} className="border p-6 rounded-lg">

            <p><b>Name:</b> {lead.fields.Name}</p>
            <p><b>Email:</b> {lead.fields.Email}</p>
            <p><b>Phone:</b> {lead.fields.Phone}</p>
            <p><b>Message:</b> {lead.fields.Message}</p>

          </div>
        ))}
      </div>

    </div>
  )
}