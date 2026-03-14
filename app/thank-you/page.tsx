export default function ThankYou() {
  return (
    <section className="py-20">

      <div className="max-w-3xl mx-auto text-center mb-12">

        <h1 className="text-4xl font-serif mb-6">
          Bedankt voor uw aanvraag
        </h1>

        <p className="text-lg text-gray-600">
          Uw bericht is goed ontvangen.  
          U kan hieronder meteen een gratis strategiegesprek boeken zodat we uw accommodatie kunnen analyseren.
        </p>

      </div>

      <div className="max-w-4xl mx-auto">

        <iframe
          src="https://calendly.com/smitsro7/consult"
          width="100%"
          height="700"
          className="rounded-xl border"
        />

      </div>

    </section>
  )
}