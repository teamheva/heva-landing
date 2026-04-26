import type { SubpageConfig } from "@/components/SubpageLayout";
import type { Lang } from "@/lib/translations";

type Bundle = { et: SubpageConfig; en: SubpageConfig };

/* ── Hakka kulleriks ────────────────────────────────────────── */
export const becomeCourier: Bundle = {
  et: {
    eyebrow: "Hakka kulleriks",
    title: "Sinu sõiduk.",
    titleAccent: "Sinu tingimustel.",
    lead: "Kasuta oma kaubikut, võta tellimusi siis, kui sulle sobib. Iganädalased väljamaksed, ilma vahendajateta.",
    stats: [
      { value: "1-2 min", label: "tellimuse leid" },
      { value: "24 h", label: "verifitseerimine" },
      { value: "€0", label: "registreerimistasu" },
      { value: "Iga reede", label: "väljamaksed" },
    ],
    benefits: [
      "Vali tellimused oma marsruudil",
      "Iganädalased väljamaksed pangakontole",
      "Tööta millal tahad - miinimumtunde pole",
      "Kasuta oma kaubikut, furgooni või veoautot",
      "Läbipaistev komisjonitasu",
    ],
    points: [
      { title: "Täida ankeet", body: "Vajad ID-d, juhiluba ja sõiduki andmeid. Kulub 2 minutit." },
      { title: "Oota verifitseerimist", body: "Kuni 24 tundi. Kinnituse saadame e-mailile." },
      { title: "Võta tellimusi vastu", body: "Vali endale sobivad tellimused ja alusta sõitu." },
    ],
    faq: [
      { q: "Kas pean olema FIE või ettevõte?", a: "Ei kohustuslikult. Aitame sul registreerumisel sobiva tegutsemisvormi valida." },
      { q: "Millised sõidukid sobivad?", a: "Kaubikud, furgoonid ja veoautod kuni 3,5 tonni." },
      { q: "Millal väljamakseid tehakse?", a: "Iga reede otse pangakontole koos nädala aruandega." },
      { q: "Kas saan sõita ka öösel?", a: "Jah. Öistel tellimustel on sageli kõrgem tariif." },
    ],
    formTopic: "Registreerumine: Hakka kulleriks",
    formTitle: "Alusta registreerumist",
    formSub: "Jäta kontakt ja saadame sulle onboardingu juhised tunni jooksul.",
    formMessagePlaceholder: "Milline on sinu sõiduk ja eelistatud piirkond?",
  },
  en: {
    eyebrow: "Become a courier",
    title: "Your vehicle.",
    titleAccent: "Your terms.",
    lead: "Use your own van and take jobs when it suits you. Weekly payouts, no middlemen.",
    stats: [
      { value: "1-2 min", label: "order match" },
      { value: "24 h", label: "verification" },
      { value: "€0", label: "sign-up fee" },
      { value: "Every Fri", label: "payouts" },
    ],
    benefits: [
      "Pick orders on your route",
      "Weekly payouts to your bank",
      "Work whenever you want - no minimum hours",
      "Use your own van, panel van or truck",
      "Transparent commission",
    ],
    points: [
      { title: "Fill the form", body: "ID, driver's licence and vehicle info. Takes 2 minutes." },
      { title: "Wait for verification", body: "Up to 24 hours. Confirmation by email." },
      { title: "Accept orders", body: "Pick the ones that fit your day." },
    ],
    faq: [
      { q: "Do I need to be a sole trader?", a: "Not necessarily. We help you choose the right setup during signup." },
      { q: "Which vehicles work?", a: "Vans, panel vans and trucks up to 3.5 tonnes." },
      { q: "When are payouts?", a: "Every Friday, directly to your bank, with a full report." },
      { q: "Can I drive at night?", a: "Yes. Night orders often carry higher rates." },
    ],
    formTopic: "Signup: Become a courier",
    formTitle: "Start signup",
    formSub: "Leave your contact - we'll send onboarding details within the hour.",
    formMessagePlaceholder: "What's your vehicle and preferred region?",
  },
};

/* ── Hakka ärikliendiks ─────────────────────────────────────── */
export const becomeBusiness: Bundle = {
  et: {
    eyebrow: "Hakka ärikliendiks",
    title: "Regulaarsed veod.",
    titleAccent: "Üks arve kuus.",
    lead: "Heva äriklient saab lepingulised hinnad, kuuarve ja prioriteetse toe.",
    stats: [
      { value: "Kuuarve", label: "üks koht" },
      { value: "-15%", label: "mahusoodustus" },
      { value: "API", label: "integratsioon" },
      { value: "Prio", label: "klienditugi" },
    ],
    benefits: [
      "Lepingulised hinnad mahu järgi",
      "Üks kuuarve kõigi vedude eest",
      "Kontohaldur ja prioriteetne tugi",
      "API-integratsioon e-poe või ERP-ga",
      "Regulaarsete marsruutide automaatika",
    ],
    points: [
      { title: "Jäta päring", body: "Vastame tunni jooksul." },
      { title: "Saa pakkumine", body: "Kohandatud sinu mahule - allkirjastame digitaalselt." },
      { title: "Alusta tellimist", body: "Ärikonto, API-võtmed ja kuupõhine aruandlus." },
    ],
    faq: [
      { q: "Milline on vähim käive?", a: "Tingimused algavad umbes 10 tellimusest kuus. Vaatame iga juhtumit eraldi." },
      { q: "Kas saate teha kohandatud marsruute?", a: "Jah - korduvad veoringid ja planeeritud tarneakendega." },
      { q: "Kuidas arveldamine käib?", a: "Kuuarve e-mailile (PDF + XML), maksetähtaeg 14 päeva." },
      { q: "Kas andmed on turvalised?", a: "Jah. Euroopas hostitud, GDPR-nõuetekohased." },
    ],
    formTopic: "Registreerumine: Ärikliendiks",
    formShowCompany: true,
    formTitle: "Võta ärimüügiga ühendust",
    formSub: "Kirjelda lühidalt oma veovajadust ja meie kontohaldur teeb pakkumise.",
    formMessagePlaceholder: "Nt: 2x nädalas 1 aluse vedu Tallinnast Sauele.",
  },
  en: {
    eyebrow: "Become a business client",
    title: "Regular shipments.",
    titleAccent: "One monthly invoice.",
    lead: "Heva business accounts get contract rates, monthly invoicing and priority support.",
    stats: [
      { value: "Monthly", label: "invoicing" },
      { value: "-15%", label: "bulk rate" },
      { value: "API", label: "integration" },
      { value: "Prio", label: "support" },
    ],
    benefits: [
      "Volume-based contract rates",
      "One monthly invoice for all shipments",
      "Dedicated account manager",
      "API integration with your e-shop or ERP",
      "Automated setup for recurring routes",
    ],
    points: [
      { title: "Get in touch", body: "We reply within an hour." },
      { title: "Receive a quote", body: "Tailored to your volume - signed digitally." },
      { title: "Start ordering", body: "Business account, API keys and monthly reports." },
    ],
    faq: [
      { q: "What's the minimum volume?", a: "Business terms apply from ~10 orders per month. We review each case." },
      { q: "Can you do custom routes?", a: "Yes - recurring runs and scheduled time windows." },
      { q: "How does billing work?", a: "Monthly invoice by email (PDF + XML), 14-day payment terms." },
      { q: "Is my data secure?", a: "Yes. Hosted in Europe, GDPR-compliant." },
    ],
    formTopic: "Signup: Business client",
    formShowCompany: true,
    formTitle: "Contact business sales",
    formSub: "Tell us briefly what cargo delivery you need; our account manager will prepare a quote.",
    formMessagePlaceholder: "E.g. 2x weekly, 1 pallet, Tallinn to Saue.",
  },
};

/* ── Liitu autopargiga ──────────────────────────────────────── */
export const becomeFleet: Bundle = {
  et: {
    eyebrow: "Liitu autopargiga",
    title: "Too oma autopark",
    titleAccent: "Hevasse.",
    lead: "",
    benefits: [
      "Halda juhte, sõidukeid ja vahetusi ühest kohast",
      "Parem komisjonitasu alates 3 sõidukist",
      "Stabiilne tellimuste voog",
      "Automaatne juhtide ja sõidukite verifitseerimine",
    ],
    points: [
      { title: "Esita päring", body: "Sõidukite arv, tüübid ja juhtide arv." },
      { title: "Saa partnerleping", body: "Kohandatud tariif." },
      { title: "Liida sõidukid äppi", body: "Paari päevaga juhid liituvad." },
    ],
    formTopic: "Registreerumine: Autopargi partner",
    formShowCompany: true,
    formTitle: "Liitu autopargi partnerina",
    formSub: "Kirjelda oma autoparki ja meie ärimüük võtab ühendust samal päeval.",
    formMessagePlaceholder: "Nt: 5 kaubikut, 2 furgooni, 8 juhti.",
  },
  en: {
    eyebrow: "Join as a fleet partner",
    title: "Bring your fleet",
    titleAccent: "onto Heva.",
    lead: "",
    benefits: [
      "Manage drivers, vehicles and shifts in one place",
      "Better commission starting at 3 vehicles",
      "Stable order flow",
      "Automatic driver and vehicle verification",
    ],
    points: [
      { title: "Submit inquiry", body: "Vehicle count, types and driver count." },
      { title: "Get the agreement", body: "Tailored rate." },
      { title: "Onboard vehicles", body: "Your drivers join within a couple of days." },
    ],
    formTopic: "Signup: Fleet partner",
    formShowCompany: true,
    formTitle: "Join as a fleet partner",
    formSub: "Describe your fleet - our business team replies the same day.",
    formMessagePlaceholder: "E.g. 5 vans, 2 panel vans, 8 drivers.",
  },
};

/* ── Kuidas töötab ──────────────────────────────────────────── */
export const howItWorks: Bundle = {
  et: {
    eyebrow: "Kuidas töötab",
    title: "Lihtsam kui telefonikõne.",
    titleAccent: "Kõik ühes äpis.",
    lead: "Sisesta marsruut äpis. Lähim vaba kuller võtab tellimuse 1-2 minutiga. Jälgid reaalajas.",
    points: [
      { title: "Sisesta vedu", body: "Peale- ja mahalaadimiskoht, kauba tüüp. Hind kohe nähtav." },
      { title: "Kuller võtab töö", body: "Tavaliselt 1-2 minutiga. Näed teda kaardil." },
      { title: "Jälgi ja saa kätte", body: "Reaalajas kaart. Makse ja arve automaatselt." },
    ],
    benefits: [
      "Hind teada enne tellimist",
      "Reaalajas jälgimine kaardil",
      "Maksed äpi kaudu",
      "Arve e-mailile kohe peale tarnet",
      "Kaks suunda: klient hindab kullerit, kuller hindab klienti",
      "Kõik kullerid verifitseeritud",
    ],
    formTopic: "Küsimus: Kuidas töötab",
    formTitle: "Kas tekkis küsimusi?",
    formSub: "Kirjuta julgelt - vastame tööpäeviti tunni jooksul.",
  },
  en: {
    eyebrow: "How it works",
    title: "Simpler than a phone call.",
    titleAccent: "All in one app.",
    lead: "Enter the route in the app. The nearest available courier accepts in 1-2 minutes. You track live.",
    points: [
      { title: "Enter the shipment", body: "Pickup and drop-off, cargo type. Price shown instantly." },
      { title: "Courier accepts", body: "Usually within 1-2 minutes. You see them on the map." },
      { title: "Track and receive", body: "Live map. Payment and invoice are automatic." },
    ],
    benefits: [
      "Price known before booking",
      "Real-time tracking on the map",
      "Payments in-app",
      "Invoice emailed right after delivery",
      "Two-way rating - client rates courier, courier rates client",
      "All couriers verified",
    ],
    formTopic: "Question: How it works",
    formTitle: "Got a question?",
    formSub: "Write us - we reply within an hour on business days.",
  },
};

/* ── Kulleritele (üldinfo) ──────────────────────────────────── */
export const forCouriers: Bundle = {
  et: {
    eyebrow: "Kulleritele",
    title: "Sinu sõiduk.",
    titleAccent: "Sinu kalender.",
    lead: "Heva on kulleritele tehtud - ilma vahendajate ja miinimumtundideta. Kasuta äppi, kui sulle sobib.",
    benefits: [
      "Ava äpp oma tingimustel",
      "Iganädalased väljamaksed",
      "Läbipaistev komisjonitasu",
      "Tellimused sinu marsruudil",
      "Kaks suunda: klient hindab sind, sina hindad klienti",
    ],
    points: [
      { title: "Registreeru", body: "2 minutit - ID, juhiluba, sõiduki andmed." },
      { title: "Verifitseerimine", body: "Kuni 24 tundi." },
      { title: "Võta tellimusi vastu", body: "Vali need, mis sobivad." },
    ],
    formTopic: "Hakka kulleriks",
    formTitle: "Hakka Heva kulleriks",
    formSub: "Jäta kontakt - saadame onboardingu juhised tunni jooksul.",
    formMessagePlaceholder: "Milline on sinu sõiduk ja eelistatud piirkond?",
  },
  en: {
    eyebrow: "For couriers",
    title: "Your vehicle.",
    titleAccent: "Your calendar.",
    lead: "Heva is built for couriers - no middlemen, no minimum hours. Use the app when it suits you.",
    benefits: [
      "App open on your terms",
      "Weekly payouts",
      "Transparent commission",
      "Orders on your route",
      "Two-way rating",
    ],
    points: [
      { title: "Sign up", body: "2 minutes - ID, licence, vehicle info." },
      { title: "Verification", body: "Up to 24 hours." },
      { title: "Accept orders", body: "Pick what fits." },
    ],
    formTopic: "Become a courier",
    formTitle: "Become a Heva courier",
    formSub: "Leave your contact - we'll send onboarding details within the hour.",
    formMessagePlaceholder: "What's your vehicle and preferred region?",
  },
};

/* ── Klientidele ────────────────────────────────────────────── */
export const forSenders: Bundle = {
  et: {
    eyebrow: "Klientidele",
    title: "Üks platvorm.",
    titleAccent: "Kõik veod.",
    lead: "Pole vaja helistada, pole vaja oodata.",
    benefits: [
      "Hinda näed enne tellimist",
      "Tellimus 30 sekundiga",
      "Reaalajas jälgimine kaardil",
      "Automaatne arve e-mailile",
      "Planeeri ette kuni 7 päeva",
    ],
    points: [
      { title: "Kirjelda vedu", body: "Alguspunkt, sihtpunkt, kauba maht." },
      { title: "Kinnita hind", body: "Näed kogu hinda - peidetud kulusid pole." },
      { title: "Vaata reaalajas", body: "SMS enne kohaletoimetamist." },
    ],
    formTopic: "Hakka kliendiks",
    formTitle: "Hakka Heva kliendiks",
    formSub: "Jäta kontakt - teeme sulle tutvumispakkumise.",
  },
  en: {
    eyebrow: "For senders",
    title: "One platform.",
    titleAccent: "All shipments.",
    lead: "From pallets to furniture, boxes to appliances - Heva delivers. Don't call, don't wait.",
    benefits: [
      "Price shown before booking",
      "Order in 30 seconds",
      "Live map tracking",
      "Invoice emailed automatically",
      "Schedule up to 7 days ahead",
    ],
    points: [
      { title: "Describe the shipment", body: "From, to, cargo size." },
      { title: "Confirm the price", body: "Total shown - no hidden costs." },
      { title: "Watch in real time", body: "SMS before arrival." },
    ],
    formTopic: "Become a client",
    formTitle: "Become a Heva client",
    formSub: "Leave your contact - we'll prepare a trial offer.",
  },
};

/* ── Meist ──────────────────────────────────────────────────── */
export const about: Bundle = {
  et: {
    eyebrow: "Meist",
    title: "Saada kaupa",
    titleAccent: "nagu taksot.",
    lead: "Kaubavedu, nagu see olema peab - kiire, läbipaistev ja lihtne.",
    benefits: [
      "Eestis loodud, Eestile keskendunud",
      "Meeskond veo- ja tarkvaraalase taustaga",
      "Kullerid, kliendid ja autopargid ühel platvormil",
      "GDPR-nõuetekohane",
      "iOS, Android ja veebirakendus",
    ],
    points: [
      { title: "Missioon", body: "Teha kaubavedu sama lihtsaks kui takso tellimine." },
      { title: "Visioon", body: "Olla Eestis eelistatuim tellitav kaubaveoteenus." },
      { title: "Väärtused", body: "Kiirus. Usaldus. Läbipaistvus." },
    ],
    formTopic: "Ettevõtte üldpäring",
    formTitle: "Võta meiega ühendust",
    formSub: "Küsimused, partnerlus või meedia - kirjuta siia ja suuname õige inimeseni.",
  },
  en: {
    eyebrow: "About",
    title: "Send cargo",
    titleAccent: "like a taxi.",
    lead: "Freight delivery, the way it should be - fast, transparent, simple.",
    benefits: [
      "Estonia-based, Estonia-focused",
      "Team with freight and software background",
      "Couriers, clients and fleets on one platform",
      "GDPR-compliant",
      "iOS, Android and web",
    ],
    points: [
      { title: "Mission", body: "Make freight delivery as simple as booking a taxi." },
      { title: "Vision", body: "Be the preferred on-demand freight service in Estonia." },
      { title: "Values", body: "Speed. Trust. Transparency." },
    ],
    formTopic: "General inquiry",
    formTitle: "Get in touch",
    formSub: "Questions, partnerships or media - write here and we'll route it.",
  },
};

/* ── Karjäär ────────────────────────────────────────────────── */
export const careers: Bundle = {
  et: {
    eyebrow: "Karjäär",
    title: "Ehita meiega",
    titleAccent: "kaubaveo tulevikku.",
    lead: "Otsime inimesi, kes tahavad päriselt midagi muuta. Avatud kohad operatsioonides, tootes ja inseneerias.",
    benefits: [
      "Kaugtöö või Tallinna kontor",
      "Sporditoetus ja tervisepakett",
      "Konkurentsivõimeline palk",
      "Paindlik tööaeg",
      "Väike meeskond, mõjutad tootekurssi",
    ],
    points: [
      { title: "Avatud kohad", body: "Operations Lead · iOS insener · Growth turundaja · Support." },
      { title: "Intervjuu", body: "Vestlus asutajaga, praktiline ülesanne, tiimi tutvumine." },
      { title: "Liitumine", body: "Hakkame tööle." },
    ],
    formTopic: "Karjäär: avalduse esitamine",
    formTitle: "Saada CV ja motivatsioonikiri",
    formSub: " ",
    formMessagePlaceholder: "Millisele kohale kandideerid ja miks? Lisa LinkedIni või CV link.",
  },
  en: {
    eyebrow: "Careers",
    title: "Build the future",
    titleAccent: "of freight with us.",
    lead: "We're looking for people who want to change something real. Open roles in operations, product and engineering.",
    benefits: [
      "Remote or Tallinn office",
      "Sports benefit and health package",
      "Competitive salary",
      "Flexible hours",
      "Small team, shape the product",
    ],
    points: [
      { title: "Open roles", body: "Operations Lead · iOS engineer · Growth marketer · Support." },
      { title: "Interview", body: "Call with founder, practical task, team intro." },
      { title: "Joining", body: "Let's get to work." },
    ],
    formTopic: "Careers: application",
    formTitle: "Send CV and cover letter",
    formSub: " ",
    formMessagePlaceholder: "Which role and why? Include LinkedIn or CV link.",
  },
};

/* ── Press ──────────────────────────────────────────────────── */
export const press: Bundle = {
  et: {
    eyebrow: "Press",
    title: "Ajakirjanikele",
    titleAccent: "ja analüütikutele.",
    lead: "Meediapäringutele vastame 24 tunni jooksul. Pressimaterjalid saadame e-mailile.",
    benefits: [
      "Heva logo (PNG, SVG, värviline ja must)",
      "Asutajate fotod (high-res)",
      "Ettevõtte faktileht (PDF)",
      "Uudised ja pressiteated",
      "Intervjuu-aegade broneerimine",
    ],
    points: [
      { title: "Pressimaterjalid", body: "Saada päring - edastame paketi e-mailile." },
      { title: "Intervjuud", body: "Asutajad kommenteerivad kaubaveo, logistika ja platvormide teemasid." },
      { title: "Faktikontroll", body: "Kui mainid konkreetset numbrit, palume see meiega kinnitada." },
    ],
    formTopic: "Press / meedia päring",
    formTitle: "Meediapäring",
    formSub: " ",
  },
  en: {
    eyebrow: "Press",
    title: "For journalists",
    titleAccent: "and analysts.",
    lead: "Media queries answered within 24 hours. Press materials sent by email.",
    benefits: [
      "Heva logo (PNG, SVG, colour and black)",
      "Founders' photos (high-res)",
      "Company factsheet (PDF)",
      "Press releases and news",
      "Interview scheduling",
    ],
    points: [
      { title: "Press kit", body: "Request it - we'll email the package." },
      { title: "Interviews", body: "Founders comment on freight, logistics and platform topics." },
      { title: "Fact check", body: "Verify specific numbers with us before publishing." },
    ],
    formTopic: "Press / media query",
    formTitle: "Media inquiry",
    formSub: " ",
  },
};

/* ── Blogi ──────────────────────────────────────────────────── */
export const blog: Bundle = {
  et: {
    eyebrow: "Blogi",
    title: "Mõtteid kaubaveost",
    titleAccent: "ja meie tootest.",
    lead: "Ametlik blogi on tulemas.",
    benefits: [
      "Tootekeerukus ja disaini-otsused",
      "Logistikatrendid Eestis",
      "Andmelood: nõudluse piigid, kliendivood",
      "Kuidas meie meeskond töötab",
      "Esimesena kuule - telli uudiskiri",
    ],
    formTopic: "Blogi: uudiskirja tellimus",
    formTitle: "Soovid uudiskirja?",
    formSub: "Jäta enda email.",
    formMessagePlaceholder: "Huvitav teema? Kirjuta ettepanek siia.",
  },
  en: {
    eyebrow: "Blog",
    title: "Thoughts on freight",
    titleAccent: "and product.",
    lead: "The official blog is coming.",
    benefits: [
      "Product craft and design decisions",
      "Logistics trends in Estonia",
      "Data stories: demand spikes, client flows",
      "How our team works",
      "Hear it first - join the newsletter",
    ],
    formTopic: "Blog: newsletter subscription",
    formTitle: "Want the newsletter?",
    formSub: "Leave your email.",
    formMessagePlaceholder: "Want a specific topic? Write your suggestion here.",
  },
};

/* ── Kontakt ────────────────────────────────────────────────── */
export const contact: Bundle = {
  et: {
    eyebrow: "Kontakt",
    title: "Räägi meiega.",
    titleAccent: "Otse.",
    lead: "Vastame päringutele tööpäevadel tunni jooksul.",
    benefits: [
      "info@heva.me - üldpäring",
      "tugi@heva.me - klienditugi",
      "aripartnerid@heva.me - äri- ja autopargipartnerlus",
      "meedia@heva.me - press",
      "+372 510 0017 - E-R 9-18",
      "Pärnu mnt 158/1, 11317 Tallinn",
    ],
    formTopic: "Üldpäring",
    formTitle: "Kirjuta julgelt",
    formSub: " ",
  },
  en: {
    eyebrow: "Contact",
    title: "Talk to us.",
    titleAccent: "Directly.",
    lead: "We reply within an hour on business days.",
    benefits: [
      "info@heva.me - general",
      "support@heva.me - customer support",
      "partners@heva.me - business and fleet",
      "media@heva.me - press",
      "+372 510 0017 - Mon-Fri 9-18",
      "Pärnu mnt 158/1, 11317 Tallinn",
    ],
    formTopic: "General inquiry",
    formTitle: "Write to us",
    formSub: " ",
  },
};

export function pick(bundle: Bundle, lang: Lang): SubpageConfig {
  return bundle[lang];
}
