// Privacybeleid HAVN Revenue. Feiten (bronnen, bewaartermijn, verwerkers) bevestigd door de eigenaar;
// verwerkers komen overeen met wat de code gebruikt (Vercel, Resend, Airtable, Anthropic, Google Analytics, Calendly, Slack).

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "Wie ik ben",
    body: (
      <>
        <p>
          Dit privacybeleid geldt voor havnrevenue.com en voor de persoonlijke e-mails die ik naar eigenaars van
          vakantieverblijven stuur. Verantwoordelijk voor de verwerking van je gegevens is:
        </p>
        <p className="pl-4 border-l border-gold/40">
          Roel Smits, handelend onder de naam HAVN Revenue
          <br />
          Cra. 54 #1A-9, Medellín, Colombia
          <br />
          RUT: 700.288.175
          <br />
          E-mail: <a href="mailto:info@havnrevenue.com">info@havnrevenue.com</a>
        </p>
      </>
    ),
  },
  {
    title: "Waarom je een e-mail van mij kreeg",
    body: (
      <>
        <p>
          Kreeg je een persoonlijke e-mail van mij over je vakantieverblijf? Dan vond ik je zakelijke contactgegevens
          op een openbare plaats: de website van je verblijf, je Google-bedrijfsprofiel (Google Maps), een openbaar
          toerisme- of beroepsregister, of je openbare vermelding op een boekingsplatform.
        </p>
        <p>
          Ik gebruik daarvoor alleen gegevens die je zelf openbaar maakt als uitbater: de naam van je verblijf, het
          zakelijke e-mailadres en eventueel je naam, de gemeente of regio, en openbare informatie over je verblijf
          zoals het type en de manier waarop gasten kunnen boeken.
        </p>
        <p>
          Ik doe dat op basis van mijn gerechtvaardigd belang (artikel 6.1.f van de AVG/GDPR): ik wil eigenaars van
          kleine vakantieverblijven op een persoonlijke manier laten weten wat ik voor hen kan doen. Ik stuur die
          e-mails zelf vanuit mijn eigen zakelijke mailbox, één voor één, en niet via een mailingprogramma.
        </p>
        <p>
          <strong>Geen interesse? Dat is helemaal in orde.</strong> Antwoord gewoon op mijn e-mail met
          &ldquo;geen interesse&rdquo; of &ldquo;stop&rdquo;, of mail naar{" "}
          <a href="mailto:info@havnrevenue.com">info@havnrevenue.com</a>. Ik verwijder je gegevens dan meteen en
          mail je niet meer. Om dat te garanderen, bewaar ik alleen je e-mailadres op een uitsluitingslijst.
        </p>
        <p>
          Reageer je niet, dan verwijder ik je gegevens uiterlijk 12 maanden na mijn laatste e-mail.
        </p>
      </>
    ),
  },
  {
    title: "Als je zelf contact opneemt",
    body: (
      <>
        <p>Je kunt op verschillende manieren contact met me opnemen. Ik verwerk dan de volgende gegevens:</p>
        <ul>
          <li>
            <strong>Contactformulier:</strong> je naam, e-mailadres, eventueel je telefoonnummer, het type
            verblijf, de platformen die je gebruikt en je bericht. Ik gebruik die om je te antwoorden en je een
            bevestiging te sturen.
          </li>
          <li>
            <strong>Rekentool:</strong> de gegevens die je invult over je verblijf (zoals type, land, prijs per
            nacht, bezetting en platformen) en, als je het rapport aanvraagt, je e-mailadres. Ik gebruik die om je
            het rapport te sturen en om je eventueel op te volgen.
          </li>
          <li>
            <strong>Een gesprek inplannen:</strong> dat loopt via Calendly. Je naam, e-mailadres en wat je daar
            invult, gebruik ik om het gesprek voor te bereiden.
          </li>
          <li>
            <strong>WhatsApp of e-mail:</strong> je nummer of adres en de inhoud van je berichten.
          </li>
        </ul>
        <p>
          De grondslag is je verzoek zelf: ik verwerk deze gegevens om te antwoorden op je vraag en, als je dat
          wilt, een samenwerking voor te bereiden (artikel 6.1.b AVG/GDPR).
        </p>
      </>
    ),
  },
  {
    title: "Websitestatistieken",
    body: (
      <p>
        Ik gebruik Google Analytics om te zien hoe de website gebruikt wordt, bijvoorbeeld welke pagina&apos;s bezocht
        worden. Google Analytics plaatst daarvoor cookies en verwerkt onder meer je IP-adres en browsergegevens.
        Dat gebeurt alleen als je daar bij je bezoek toestemming voor geeft (artikel 6.1.a AVG/GDPR). Weiger je,
        dan wordt Google Analytics niet geladen. Je kunt je keuze altijd wijzigen via &ldquo;Cookie-instellingen&rdquo;
        onderaan elke pagina. Je keuze zelf onthoud ik in je browser, zonder cookie.
      </p>
    ),
  },
  {
    title: "Wie je gegevens nog verwerkt",
    body: (
      <>
        <p>Ik verkoop je gegevens nooit. Voor de werking van de website en mijn opvolging gebruik ik deze diensten:</p>
        <ul>
          <li>
            <strong>Vercel</strong>: hosting van de website
          </li>
          <li>
            <strong>Resend</strong>: verzenden van bevestigingsmails en het rapport van de rekentool
          </li>
          <li>
            <strong>Airtable</strong>: bijhouden van aanvragen en opvolging
          </li>
          <li>
            <strong>Anthropic</strong>: opstellen van het rapport van de rekentool, op basis van de gegevens over je
            verblijf
          </li>
          <li>
            <strong>Google</strong>: websitestatistieken (Google Analytics)
          </li>
          <li>
            <strong>Calendly</strong>: inplannen van gesprekken
          </li>
          <li>
            <strong>Slack</strong>: interne melding wanneer er een nieuwe aanvraag binnenkomt
          </li>
          <li>
            <strong>Mijn e-mailprovider</strong>: versturen en ontvangen van e-mail
          </li>
        </ul>
        <p>
          Sommige van deze diensten verwerken gegevens buiten de Europese Economische Ruimte, onder meer in de
          Verenigde Staten. Ze bieden daarvoor passende waarborgen, zoals de standaardcontractbepalingen van de
          Europese Commissie.
        </p>
      </>
    ),
  },
  {
    title: "Hoe lang ik je gegevens bewaar",
    body: (
      <ul>
        <li>Eigenaars die ik mailde en die niet reageerden: uiterlijk 12 maanden na mijn laatste e-mail.</li>
        <li>Bezwaar gemaakt: meteen verwijderd; alleen je e-mailadres blijft op mijn uitsluitingslijst.</li>
        <li>
          Aanvragen via formulier, rekentool, Calendly of WhatsApp zonder samenwerking: uiterlijk 12 maanden na ons
          laatste contact.
        </li>
        <li>Klanten: zolang we samenwerken, en daarna zolang de wet dat vereist voor mijn boekhouding.</li>
      </ul>
    ),
  },
  {
    title: "Je rechten",
    body: (
      <>
        <p>
          Je kunt me altijd vragen welke gegevens ik over je heb, ze laten verbeteren of verwijderen, de verwerking
          laten beperken, bezwaar maken tegen de verwerking, of je gegevens in een gangbaar formaat ontvangen. Mail
          daarvoor naar <a href="mailto:info@havnrevenue.com">info@havnrevenue.com</a>. Ik antwoord binnen 30
          dagen.
        </p>
        <p>
          Ben je niet tevreden over hoe ik met je gegevens omga, dan kun je een klacht indienen bij de
          Gegevensbeschermingsautoriteit in België (
          <a href="https://www.gegevensbeschermingsautoriteit.be" target="_blank" rel="noopener noreferrer">
            gegevensbeschermingsautoriteit.be
          </a>
          ) of bij de toezichthouder in je eigen land.
        </p>
      </>
    ),
  },
  {
    title: "Wijzigingen",
    body: (
      <p>
        Verandert er iets aan hoe ik met gegevens omga, dan pas ik dit beleid aan. De datum bovenaan toont de
        laatste versie.
      </p>
    ),
  },
]

export function PrivacyPolicy() {
  return (
    <div className="bg-[var(--background)] py-16 lg:py-20">
      <article className="container mx-auto px-4 max-w-2xl">
        <header className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-serif text-black mb-4">Privacybeleid</h1>
          <p className="text-gray-600">Laatst bijgewerkt: 20 oktober 2026</p>
        </header>

        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-serif text-black mb-4">{section.title}</h2>
              <div className="space-y-4 text-gray-700 leading-[1.75] [&_a]:text-gold-ink [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-black [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_strong]:text-black [&_strong]:font-semibold">
                {section.body}
              </div>
            </section>
          ))}
        </div>
      </article>
    </div>
  )
}
