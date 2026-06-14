// All site content, ported verbatim from the original DC component.

export const EMAIL = 'post' + '@' + 'langhustannklinikk' + '.no'
export const MAILTO = 'mailto:' + EMAIL
export const PHONE_TEL = '+4764917250'
export const PHONE_DISPLAY = '64 91 72 50'

export const nav = [
  { t: 'Tjenester', h: '#tjenester' },
  { t: 'Om oss', h: '#om-oss' },
  { t: 'Priser', h: '#priser' },
  { t: 'Tannhelse', h: '#tannhelse' },
  { t: 'Kontakt', h: '#kontakt' },
]

export const heroChips = ['Man–fre 08:00–15:45', 'Gratis parkering', 'Trygt ved tannlegeskrekk']

export const fearPoints = [
  { icon: 'chat', t: 'Uforpliktende gratis konsultasjon for din tannlegeskrekk' },
  { icon: 'heartHand', t: 'Vi finner årsaken sammen, i et avslappet og rolig miljø' },
  { icon: 'plan', t: 'Felles behandlingsplan i ditt tempo – eventuelt med psykolog' },
  { icon: 'shield', t: 'Alltid fokus på smertefri og behagelig behandling' },
  { icon: 'control', t: 'Du har full kontroll på situasjonen hele veien' },
]

export const services = [
  { icon: 'smile', title: 'Allmenn tannbehandling', desc: 'Undersøkelse, rens og oppfølging for hele familien.' },
  { icon: 'drop', title: 'Hvite fyllinger', desc: 'Tannfargede fyllinger som er nesten usynlige.' },
  { icon: 'root', title: 'Rotfylling', desc: 'Skånsom behandling av betente tenner.' },
  { icon: 'crown', title: 'Kroner, broer & proteser', desc: 'Varige løsninger for skadde eller tapte tenner.' },
  { icon: 'sparkle', title: 'Estetisk tannbehandling', desc: 'Porselensfasader og reparasjoner i plast.' },
  { icon: 'sparkle', title: 'Tannbleking', desc: 'Tryggere, hvitere smil med profesjonell bleking.' },
  { icon: 'heartHand', title: 'Tannkjøttsbehandling', desc: 'Behandling av gingivitt og periodontitt.' },
  { icon: 'align', title: 'Tannregulering', desc: 'Clear Aligners – nesten usynlig tannregulering.' },
]

export const omStats = [
  { n: '3', l: 'Moderne behandlingsrom' },
  { n: '20+', l: 'Års erfaring i teamet' },
  { n: 'Gratis', l: 'Parkering for besøkende' },
]

export const team = [
  {
    id: 'nhung', name: 'Nhung Le-Hansen', role: 'Tannlege & praksiseier', img: '/assets/team-3.png',
    lead: 'Praksiseier, utdannet ved Det odontologiske fakultet i Oslo.',
    tags: ['Tannlegeskrekk', 'Inman Aligner', 'Implantatprotetikk'],
    bio: [
      'Nhung Le-Hansen er praksiseier og utdannet ved Det odontologiske fakultet i Oslo. Hun har tidligere arbeidet som frivillig tannlege for Kirkens Bymisjon, assistenttannlege ved Smestad Tannklinikk og som tannlege i den offentlige tannhelsetjenesten i Oslo.',
      'Hun er sertifisert for behandling med Inman Aligner, og har omfattende erfaring med pasienter med tannlegeskrekk og periodontitt (tannkjøttsykdom).',
      'Nhung har spesialkompetanse innen implantatprotetikk og er godkjent for implantatprotetisk behandling med refusjon fra Helfo.',
    ],
  },
  {
    id: 'erland', name: 'Erland Furuseth Jensen', role: 'Tannlege', img: '/assets/team-1.png',
    lead: 'Tannlege utdannet i Poznań, med bred klinisk erfaring.',
    tags: ['Implantatprotetikk', 'Søvnapné-skinner', 'NTF'],
    bio: [
      'Erland er utdannet ved det odontologiske fakultetet i Poznań, Polen. Han har tidligere arbeidet som tannlege i både Florø og Hamar før han vendte tilbake til Oslo.',
      'Han har solid erfaring og bred kunnskap innen tannlegeutstyr, etter å ha vært involvert i import og salg av dentalprodukter. Erland er sekretær i Oslo Tannlegeforening og varamedlem til hovedstyret i Den norske tannlegeforening (NTF).',
      'Han har spesialkompetanse innen implantatprotetikk og har gjennomført det odontologiske søvnkurset ved Haukeland universitetssjukehus, og kan dermed fremstille snorke- og behandlingsskinner for søvnapné.',
    ],
  },
  {
    id: 'randi', name: 'Randi Løvoll', role: 'Tannhelsesekretær', img: '/assets/team-2.png',
    lead: 'Autorisert tannhelsesekretær med over 20 års erfaring.',
    tags: ['Pasientkoordinering', 'Hygiene', 'Service'],
    bio: [
      'Randi er autorisert tannhelsesekretær med over 20 års erfaring. Hun har tidligere arbeidet tett med spesialister innen endodonti (rotfylling) og oral kirurgi, og har bred kompetanse innen pasientbehandling.',
      'Hun er en sentral del av klinikkens drift, kjent for sitt blide vesen og gode serviceinnstilling. Randi håndterer henvendelser på telefon og e-post, og sørger for at rutiner for hygiene, pasientkoordinering og administrasjon holder høy standard.',
    ],
  },
]

export const inmanBenefits = [
  'Nesten usynlige, gjennomsiktige skinner',
  'Avtakbare – spis, puss og bruk tanntråd som vanlig',
  'Langt mindre ubehag enn tradisjonell regulering',
  'Skreddersydd digital behandlingsplan',
]

export const inman = [
  { id: 'i1', q: 'Slik fungerer det', body: ['Vi tar digitale avtrykk av tennene dine og lager en 3D-modell av tannsettet. Basert på denne planen produseres et sett med skreddersydde skinner som du bytter ut omtrent hver andre uke.', 'Hver skinne flytter tennene gradvis mot ønsket posisjon – trinn for trinn, frem mot sluttresultatet.'] },
  { id: 'i2', q: 'Fordeler', body: ['Skinnene er nesten usynlige, noe de fleste setter pris på i hverdagen. Du tar dem ut når du spiser, børster og bruker tanntråd, så tannhygienen er enkel å ivareta gjennom hele behandlingen.', 'De fleste opplever også langt mindre ubehag enn med tradisjonell regulering.'] },
  { id: 'i3', q: 'Hvem passer Clear Aligners for?', body: ['Clear Aligners kan behandle et bredt spekter av tannstillingsavvik – fra lette trangstillinger og mellomrom til mer komplekse bitt- og stillingsproblemer.', 'Under en konsultasjon hos oss går vi gjennom tannsettet ditt og forteller deg om Clear Aligners er riktig løsning for deg.'] },
  { id: 'i4', q: 'Behandlingstid', body: ['Behandlingstiden varierer fra person til person, men de fleste behandlinger tar mellom 6 og 18 måneder.', 'Resultatet avhenger mye av at du bruker skinnene konsekvent – minimum 20–22 timer i døgnet.'] },
]

export const priceGroups = [
  { id: 'pg-kons', group: 'Konsultasjon', rows: [
    { name: 'Undersøkelse inkl. hygiene, 2 rtg.-bilder, puss og rens', price: '1 365 kr' },
    { name: 'Akutt konsultasjon: undersøkelse og akuttbehandling, timepris', price: 'fra 1 600 kr' },
    { name: 'Tannrøntgen pr. stk.', price: '105 kr' },
    { name: 'OPG panorama-røntgen', price: '895 kr' },
    { name: 'Bedøvelse pr. stk.', price: '195 kr' },
    { name: 'Airflow', price: '200 kr' },
    { name: 'Hygienetillegg', price: '200 kr' },
  ] },
  { id: 'pg-fyll', group: 'Fyllinger', rows: [
    { name: 'Midlertidig fylling', price: 'fra 800 kr' },
    { name: 'Tannfarget fylling – 1 flate', price: 'fra 1 060 kr' },
    { name: 'Tannfarget fylling – 2 flater', price: 'fra 1 485 kr' },
    { name: 'Tannfarget fylling – 3 flater', price: 'fra 2 015 kr' },
    { name: 'Tannfarget fylling – 4 flater', price: 'fra 2 175 kr' },
    { name: 'Rotfylling – 1–2 rotkanaler', price: 'fra 4 880–5 840 kr' },
    { name: 'Rotfylling – 3–4 rotkanaler', price: 'fra 5 840–6 900 kr' },
    { name: 'Hygienetillegg rotfylling', price: '375 kr' },
    { name: 'Sendoline (maskinell rotfylling)', price: '375 kr' },
  ] },
  { id: 'pg-andre', group: 'Andre behandlinger', rows: [
    { name: 'Ukomplisert fjerning av tann', price: 'fra 1 315 kr' },
    { name: 'Kirurgisk fjerning av retinert tann / dyptliggende rot, egenbetaling etter trygderefusjon', price: 'fra 2 000 kr' },
    { name: 'Etterkontroll, fjerning av veke/sutur', price: '450 kr' },
    { name: 'Kirurgisk hygienetillegg', price: '445 kr' },
    { name: 'Krone inkl. tanntekniker', price: 'fra 7 980 kr' },
    { name: 'Laminat inkl. tanntekniker', price: 'fra 8 300 kr' },
    { name: 'Onlay/Overlay inkl. tanntekniker', price: 'fra 7 400 kr' },
    { name: 'Implantatkrone u/tanntekniker', price: '8 620 kr' },
    { name: 'Protese u/tanntekniker', price: 'fra 12 500 kr' },
    { name: 'Tannbleking over- og underkjeve inkl. blekemiddel', price: '3 730 kr' },
    { name: 'Tannbleking pr. kjeve inkl. blekemiddel', price: '2 550 kr' },
    { name: 'Tannregulering – Air Smile', price: 'fra 22 000–27 000 kr' },
  ] },
]

export const priceNotes = [
  'Vi tar forbehold om at pris på større inngrep kan avvike noe iht. prislisten.',
  'Hygienetillegg kommer i tillegg ved behandlinger.',
  'Studenter får 15 % studentrabatt ved undersøkelse og konserverende behandling hos tannlegen.',
]

export const akutt = [
  { id: 'a1', q: 'Tannverk eller akutt smerte', body: ['Er du redd for å gå til tannlegen? Du er ikke alene – og vi er fokusert på smertefri behandling der du er komfortabel hele veien.', 'Får du akutt tannverk, ta kontakt med oss så raskt som mulig. Jo tidligere vi ser på det, desto mer skånsom blir som regel behandlingen.'] },
  { id: 'a2', q: 'Knekt en tann', body: ['En brukket tann skyldes oftest traume – fra biting på noe hardt til slag mot ansiktet. Tannråte kan også svekke tannen slik at den knekker ved normal bruk.', 'En brukket tann regnes som en nødsituasjon – ta kontakt med oss med en gang. Selv uten smerte kan det være skade på tann eller røtter du ikke kjenner. I mange tilfeller kan behandlingen dekkes av Helfo eller hjemforsikring.'] },
  { id: 'a3', q: 'Tannskade', body: ['Har du skadet en tann bør du oppsøke tannlege umiddelbart – det er også et krav fra Helfo og forsikringsselskap for å få behandling dekket.', 'I dag finnes flere effektive behandlinger for å reparere tannskade, som fylling, krone og bro. Ta kontakt for en time.'] },
  { id: 'a4', q: 'Tannbyll', body: ['Mistenker du en tannbyll bør du oppsøke tannlege så snart som mulig. Uten behandling blir tilstanden gjerne verre, og du kan miste tannen.', 'Vanlige symptomer: bankende tannpine, hevelse i tannkjøtt og ansikt, ømhet, feber og generell uvelhet. Tannlegen vil normalt drenere pusset, noe som gir rask lindring.'] },
  { id: 'a5', q: 'Mistet en tannfylling', body: ['En fylling kan løsne på grunn av nytt hull under fyllingen eller stor belastning. Ofte kjenner du ising fra tannen når fyllingen er borte.', 'Kontakt oss for en time. Er skaden liten kan tannen repareres med ny fylling; er den større kan krone eller porselensinnlegg være bedre. Vent ikke for lenge – ubehandlet kan det gi nerve- og rotskade.'] },
]

export const tannhelse = [
  { id: 't1', q: 'Plakk', body: ['Plakk er et mykt, hvitt bakteriebelegg som naturlig dannes på tennene gjennom dagen.', 'Daglig tannpuss fjerner belegget og gir glatte tenner igjen. Får plakket ligge, kan det føre til gingivitt og karies.'] },
  { id: 't2', q: 'Tannstein', body: ['Tannstein dannes når plakk ikke pusses vekk og forkalkes av mineraler i spyttet til en hard masse.', 'Tannstein lar seg ikke fjerne med vanlig puss – det krever hjelp fra tannlegen. Ubehandlet kan det føre til gingivitt og periodontitt.'] },
  { id: 't3', q: 'Gingivitt', body: ['Gingivitt er en reversibel betennelse i tannkjøttet som oppstår når bakteriebelegg får ligge over tid og irritere tannkjøttet.', 'Tegnet er blødende tannkjøtt. Med god munnhygiene forsvinner betennelsen uten varige skader – men ubehandlet kan den utvikle seg til periodontitt.'] },
  { id: 't4', q: 'Periodontitt', body: ['Periodontitt er en betennelse i tennenes festeapparat (kjeveben og fibre), forårsaket av bakterier i plakk og tannstein.', 'Skadene kan ikke gjenopprettes, men kan stoppes med rens hos tannlegen og god hjemmehygiene. Betennelsen er ofte smertefri – derfor er jevnlige tannlegebesøk viktig for tidlig diagnose.'] },
  { id: 't5', q: 'Karies', body: ['Når plakk får ligge, produserer bakteriene syre som løser opp tannsubstansen og gir hull.', 'I emaljen kan prosessen stoppes med god munnhygiene. Når karies når dentinet må tannlegen behandle, og når den når pulpa kjennes det ofte som tannpine.'] },
  { id: 't6', q: 'Rotfylling', body: ['Når bakterier når tannens hulrom (pulpa) der nerver og årer ligger, kan det oppstå en infeksjon – etter karies, slag, skade eller store fyllinger.', 'Ved rotfylling renser tannlegen ut hulrommet med spesielle instrumenter og væsker, og lukker roten med fyllingsmasse. Tannen avsluttes med fylling eller krone.'] },
  { id: 't7', q: 'Syreskader', body: ['Syreskader er tap av tannsubstans ved kjemisk påvirkning – uten bakterier – fra sure drikker, mat eller magesyre med pH under 4,5.', 'Emaljen mykes opp og etses bort, og skadene er irreversible. Drikk vann mellom måltider, begrens sur drikke, unngå pussing rett etter sure måltider, bruk myk børste og husk fluor hver dag.'] },
]

export const reviews = [
  { q: 'Fantastisk – spesielt for deg som er litt redd! Rolige, tålmodige og veldig profesjonelle. De tar seg tid til å forklare hva som skal skje, og sørger for at du føler deg trygg hele veien.', name: 'Marius H.', tag: 'Google · Lokal guide' },
  { q: 'Utrolig fornøyd med alle besøk her – god forklaring underveis, dyktig utførelse, og ikke minst blide og hyggelige.', name: 'Ingrid S.', tag: 'Google' },
  { q: 'Trivelige og rene lokaler, topp moderne utstyr og kjempegod service. Det er derfor jeg kommer tilbake.', name: 'Thomas B.', tag: 'Google' },
  { q: 'Jeg har hatt tannlegeskrekk i mange år, men her følte jeg meg trygg fra første øyeblikk. Anbefales på det varmeste!', name: 'Camilla R.', tag: 'Google' },
  { q: 'Veldig dyktig og imøtekommende tannlege. Forklarer alt grundig og presser ingenting på deg. Helt topp.', name: 'Henrik L.', tag: 'Google · Lokal guide' },
  { q: 'Best tannlege jeg har vært hos. Profesjonell, ærlig om hva som faktisk trengs, og rettferdige priser.', name: 'Anette K.', tag: 'Google' },
  { q: 'Fikk akutt time på kort varsel da jeg hadde sterke smerter. Rask og skånsom behandling – tusen takk!', name: 'Ole-Martin D.', tag: 'Google' },
  { q: 'Hyggelig personale som tar seg god tid. Jeg gruer meg ikke lenger til å gå til tannlegen.', name: 'Sara N.', tag: 'Google' },
]

export const days = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag']
export const timeslots = ['08:00–10:00', '10:00–13:00', '13:00–15:45']
export const purposes = ['Undersøkelse / Behandlingsplanlegging', 'Akutt / Hastetime', 'Annet']
