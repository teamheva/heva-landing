import {
  Truck, Package, Smartphone, CreditCard,
  UserCheck, HelpCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type FAQ = { q: string; a: string };
export type Category = {
  slug: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  faqs: FAQ[];
};

export type SupportContent = {
  h1: string;
  backHome: string;
  contactLabel: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  hours: string;
  backToSupport: string;
  categories: Category[];
};

export const supportContent: Record<"et" | "en", SupportContent> = {
  et: {
    h1: "Kuidas saame aidata?",
    backHome: "Tagasi avalehele",
    backToSupport: "Tagasi",
    contactLabel: "Kontakt",
    emailLabel: "E-post",
    email: "info@heva.me",
    phoneLabel: "Telefon",
    phone: "+372 510 0017",
    hours: "Tööpäeviti 9–18",
    categories: [
      {
        slug: "couriers",
        icon: Truck, title: "Kulleritele", desc: "Registreerumine, tellimuste haldus ja väljamaksed.",
        faqs: [
          { q: "Kuidas Heva kulleriks saada?", a: "Laadi alla Heva Juhi rakendus, registreeru oma andmetega, laadi üles vajalikud dokumendid (isikut tõendav dokument, juhiluba, sõiduki info), oota kontrollimist ja kinnitamist. Kui kinnitatud, mine võrku ja hakka tellimusi vastu võtma." },
          { q: "Milliseid dokumente on vaja?", a: "Kehtiv juhiluba, sõiduki registreerimistunnistus, isikut tõendav dokument, kindlustusdokumentatsioon ning muud Eesti seadusest tulenevad kaubaveonõuded." },
          { q: "Millised sõidukid on aktsepteeritud?", a: "Auto — sõiduautod väiksematele vedudele. Kaubik — tavaline kaubaveauto. Pikk Kaubik — pikendatud kaubaveauto suurele kaubale. Sinu sõiduk kategoriseeritakse registreerimisel." },
          { q: "Kas registreerimistasu on?", a: "Ei. Heva kulleriks registreerumine on tasuta." },
          { q: "Kuidas tellimusi saan?", a: "Kui oled juhi rakenduses võrgus, pakutakse sulle tellimusi automaatselt, arvestades sinu lähedust pealelaadimiskohale, sõidukitüüpi, praegust marsruuti ja saadavust." },
          { q: "Kas saan valida, milliseid tellimusi vastu võtta?", a: "Jah. Tellimuse pakkumisel näed detaile (koht, hind) ning saad vastu võtta või keelduda. Pidev keeldumine võib siiski mõjutada sinu prioriteeti dispetšerijärjekorras." },
          { q: "Kuidas raha teenin?", a: "Teenid iga lõpetatud veo eest. Sinu teenistus põhineb tellimuse hinnal ja sinu tasumudelil (komisjonipõhine protsent või fikseeritud summa tellimuse kohta)." },
          { q: "Millal mulle makstakse?", a: "Heva töötleb juhtide väljamakseid igal nädalal. Sinu teenistus koguneb rakendusesisesse rahakotti ja väljamakseid töödeldakse regulaarsel graafil sinu pangakontole." },
          { q: "Kas on tasusid või komisjone?", a: "Heva võtab iga lõpetatud veo eest teenuskomisjoni. Täpne protsent kommunikeeritakse läbipaistvalt registreerumisel ja on alati nähtav sinu teenistuse ülevaates." },
          { q: "Kas saan töötada millal tahan?", a: "Jah. Heva annab sulle täieliku ajapaindlikkuse. Mine võrku, kui tahad töötada, mine välja, kui ei taha. Ei mingeid miinimumtunde, ei kohustuslikke vahetusi." },
          { q: "Kas saan vedusid teha oma marsruudi kõrvalt?", a: "Absoluutselt — see on üks Heva põhifunktsioone. Meie süsteem näitab sulle tellimusi sinu marsruudi lähedal, et saaksid teenida ka siis, kui juba sõidad oma sihtkohta." },
          { q: "Kas pean kohaletoimetamist tõendama?", a: "Jah. Sõltuvalt tellimusest: foto kohale toimetatud kaubast, saaja allkiri ja/või kohaletoimetamise märkused." },
        ],
      },
      {
        slug: "senders",
        icon: Package, title: "Tellijatele", desc: "Veotellimused, jälgimine kaardil ja arved.",
        faqs: [
          { q: "Kuidas kontot luua?", a: "Laadi alla Heva rakendus või külasta meie veebiportaali. Registreeru telefoninumbriga, kinnita see ja oled valmis esimest tellimust esitama. Ärikontosid saab seadistada ka arveldusvõimalustega." },
          { q: "Kas saan registreeruda ettevõttena?", a: "Jah. Heva toetab nii era- kui ärikontosid. Ärikontodele on saadaval lisafunktsioonid nagu arveldamine, arveldusperioodid ja mitme meeskonnaliikme haldamine." },
          { q: "Kuidas tellimust esitada?", a: "Ava Heva rakendus, sisesta pealelaadimise ja kohaletoimetamise aadressid, vali sobiv sõidukitüüp, näe hinda koheselt ja kinnita — juht määratakse minutitega." },
          { q: "Millised sõidukitüübid on saadaval?", a: "Auto — väiksematele pakkidele. Kaubik — keskmise suurusega kaubale ja mööblile. Pikk Kaubik — suuremale kaubale ja mahukatele esemetele." },
          { q: "Milliseid teenuseid Heva pakub?", a: "Vedu — kohene vedu, juht saadetakse kohe teele. Ettebroneerimine — planeeri vedu kindlale kuupäevale ja kellaajale ette." },
          { q: "Kas saan tellimusele lisanõudeid lisada?", a: "Jah. Saad lisada valikuid nagu abiline laadimiseks/mahalaadimiseks, õrna kauba käitlemine ning kindlad ajaaknad pealelaadimiseks või kohaletoimetamiseks." },
          { q: "Kas saan ühes tellimuses mitmele aadressile saata?", a: "Jah. Heva toetab mitme sihtkohaga tellimusi. Lisa mitu kohaletoimetamise aadressi ja süsteem optimeerib marsruudi automaatselt." },
          { q: "Kas saan oma vedu reaalajas jälgida?", a: "Jah. 100% reaalajas nähtavus. Kui juht on tellimuse vastu võtnud, saad kogu teekonda kaardil jälgida — pealelaadimisest kohaletoimetamiseni." },
          { q: "Milliseid tellimuse staatuseid näen?", a: "Ootel — tellimus esitatud. Vastu võetud — juht määratud. Peale laaditud — kaup kogutud. Teel — kohaletoimetamisel. Kohale toimetatud — edukalt lõpetatud. Saad teavitusi igal etapil." },
          { q: "Kas saan tellimuse tühistada?", a: "Jah, saad tellimuse tühistada enne kauba pealelaadimist. Tühistamispoliitika ja võimalikud tasud kuvatakse rakenduses selgelt enne tühistamise kinnitamist." },
          { q: "Mis siis, kui mu kaup on kahjustatud?", a: "Kõik Heva veod on täielikult kindlustatud. Kui su kaup on transpordi käigus kahjustatud, võta meie tugimeeskonnaga kohe ühendust. Algatame kindlustusnõude protsessi." },
        ],
      },
      {
        slug: "app",
        icon: Smartphone, title: "Rakendus", desc: "iOS ja Android äp, tõrked ja uuendused.",
        faqs: [
          { q: "Kust Heva rakendust alla laadida?", a: "Heva on saadaval nii App Store'is (iOS) kui Google Play's (Android). Kulleritele on eraldi Heva Juhi rakendus." },
          { q: "Kuidas parooli lähtestada?", a: "Kasuta sisselogimisekraanil \"Unustasin parooli\" valikut. Saad lähtestamise lingi SMS-i, e-posti või tõuketeatise kaudu." },
          { q: "Kuidas kontot luua?", a: "Laadi alla Heva rakendus, registreeru telefoninumbriga ja kinnita see. Ärikontosid saab seadistada ka arveldusvõimalustega." },
          { q: "Mis siis, kui rakendus ei tööta?", a: "Proovi rakendus sulgeda ja uuesti avada. Veendu, et sul on uusim versioon. Kui probleem püsib, võta ühendust meie tugimeeskonnaga." },
        ],
      },
      {
        slug: "billing",
        icon: CreditCard, title: "Arved ja maksed", desc: "Makseviisid, arvete allalaadimine ja tagasimaksed.",
        faqs: [
          { q: "Kuidas hinda arvutatakse?", a: "Hinnakujundus koosneb kolmest komponendist: sõidualustustasu (fikseeritud tasu sõidu alustamisel), laadimisaeg ja minutihind stardist sihtpunktini. Lõpphind sõltub valitud sõidukitüübist. Täpset hinda näed enne tellimuse kinnitamist." },
          { q: "Kas on peidetud tasusid?", a: "Ei. €0 peidetud kulusid. Hind, mida näed tellimuse esitamisel, on hind, mida maksad. Kõik lisatasud on selgelt enne kinnitamist näidatud." },
          { q: "Millised maksemeetodid on aktsepteeritud?", a: "Rakendusesisene makse (krediit-/deebetkaart), pangaülekanne (ärikontodele) ja arvepõhine arveldamine (ärikontodele kinnitatud krediidiga)." },
          { q: "Kuidas arveldamine ärikontodele töötab?", a: "Ärikliendid saavad valida perioodilise arveldamise. Arved genereeritakse vastavalt arveldusperioodile (iganädalane, kahenädalane või igakuine) ja neid saab alla laadida või e-postiga vastu võtta." },
          { q: "Kas saan tellimuse andmeid eksportida?", a: "Ärikliendid saavad eksportida tellimusnimekirju CSV-formaadis koos filtreeritud andmete ja kohandatud veergudega raamatupidamise ja aruandluse eesmärgil." },
          { q: "Kuidas toimib kulleri väljamakse?", a: "Teenistus koguneb rakendusesisesse rahakotti. Väljamakseid töödeldakse igal nädalal sinu pangakontole. Mine rahakoti sektsiooni, sisesta summa ja esita taotlus." },
        ],
      },
      {
        slug: "account",
        icon: UserCheck, title: "Konto", desc: "Konto loomine, dokumendid ja verifitseerimine.",
        faqs: [
          { q: "Kuidas kontot luua?", a: "Laadi alla Heva rakendus või külasta veebiportaali. Registreeru telefoninumbriga, kinnita see ja oled valmis. Ärikontosid saab seadistada arveldusvõimalustega." },
          { q: "Kuidas uuendada sõiduki- või isikuandmeid?", a: "Saad oma andmeid uuendada juhi rakenduse kaudu. Mõned muudatused (nagu sõidukitüüp) võivad vajada meie meeskonna poolt taaskontrollimist." },
          { q: "Kuidas oma kontot kustutada?", a: "Võta ühendust Heva toega, et taotleda konto kustutamist. Kontol peab olema nullsaldo ja ühtegi aktiivset tellimust enne kustutamist." },
          { q: "Kuidas parooli lähtestada?", a: "Kasuta sisselogimisekraanil \"Unustasin parooli\" valikut. Saad lähtestamise lingi SMS-i, e-posti või tõuketeatise kaudu." },
        ],
      },
      {
        slug: "general",
        icon: HelpCircle, title: "Üldküsimused", desc: "Heva, katvus, turvalisus ja muud küsimused.",
        faqs: [
          { q: "Mis on Heva?", a: "Heva on Eesti kaubavedu platvorm, mis ühendab reaalajas ettevõtted ja eraisikud, kes vajavad kauba transporti, saadaval olevate autojuhtidega. Sa esitad tellimuse, lähedal olev juht võtab selle vastu ja sa jälgid kogu protsessi reaalajas." },
          { q: "Kus Heva tegutseb?", a: "Heva katab 100% Eestist. Olenemata sellest, kas saadad kaupa Tallinna sees või Tartust Pärnusse — me katame sind. Meie tsoonipõhine süsteem tagab, et sinu piirkonnas on alati juht saadaval." },
          { q: "Kui kiiresti saan juhi?", a: "Meie keskmine reageerimisaeg on 1–2 minutit. Meie dispetšerialgoritm ühendab su tellimuse automaatselt parima saadaval oleva juhiga." },
          { q: "Kas Heva on saadaval 24/7?", a: "Jah. Saad esitada tellimusi ja jälgida vedusid ööpäevaringselt, 365 päeva aastas." },
          { q: "Kas minu saadetis on kindlustatud?", a: "Jah. Iga Heva kaudu tehtud vedu on kaetud täieliku kindlustusega. Sinu kaup on kaitstud pealelaadimisest kuni kohaletoimetamiseni." },
          { q: "Kuidas Heva turvalisust tagab?", a: "Täielik kindlustus igal veol, kontrollitud juhid (iga kuller kontrollitakse enne aktiveerimist), reaalajas jälgimine, kohaletoimetamise tõend (foto, allkiri, märkused) ja hindamissüsteem pidevaks kvaliteedi jälgimiseks." },
          { q: "Kuidas Heva toega ühendust võtta?", a: "Rakendusesisene tugi (saadaval nii kliendi- kui kullerirakenduses), e-post info@heva.me ning telefon tööpäeviti." },
        ],
      },
    ],
  },
  en: {
    h1: "How can we help?",
    backHome: "Back to home",
    backToSupport: "Back",
    contactLabel: "Contact",
    emailLabel: "Email",
    email: "info@heva.me",
    phoneLabel: "Phone",
    phone: "+372 510 0017",
    hours: "Weekdays 9–18",
    categories: [
      {
        slug: "couriers",
        icon: Truck, title: "For couriers", desc: "Registration, order management and payouts.",
        faqs: [
          { q: "How do I become a Heva courier?", a: "Download the Heva Driver app, register with your details, upload required documents (ID, driving licence, vehicle info), wait for verification and approval. Once approved, go online and start accepting orders." },
          { q: "What documents are required?", a: "Valid driving licence, vehicle registration certificate, identity document, insurance documentation and other commercial freight transport requirements under Estonian law." },
          { q: "What vehicles are accepted?", a: "Car — passenger cars for smaller deliveries. Van — standard cargo van. Long Van — extended cargo van for large cargo. Your vehicle is categorised during registration." },
          { q: "Is there a registration fee?", a: "No. Registering as a Heva courier is free." },
          { q: "How do I receive orders?", a: "When you're online in the driver app, orders are offered to you automatically based on your proximity to the pickup, vehicle type, current route and availability." },
          { q: "Can I choose which orders to accept?", a: "Yes. When an order is offered, you see the details (location, price) and can accept or decline. Persistent declining may affect your dispatch queue priority." },
          { q: "How do I earn money?", a: "You earn for every completed delivery. Your earnings are based on the order price and your payment model (commission-based percentage or fixed amount per order)." },
          { q: "When do I get paid?", a: "Heva processes driver payouts every week. Your earnings accumulate in the in-app wallet and payouts are processed on a regular schedule to your bank account." },
          { q: "Are there fees or commissions?", a: "Heva charges a service commission for each completed delivery. The exact percentage is communicated transparently during registration and is always visible in your earnings overview." },
          { q: "Can I work whenever I want?", a: "Yes. Heva gives you complete schedule flexibility. Go online when you want to work, go offline when you don't. No minimum hours, no mandatory shifts." },
          { q: "Can I make deliveries alongside my planned route?", a: "Absolutely — this is one of Heva's core features. Our system shows you orders near your route, so you can earn even when you're already driving to your destination." },
          { q: "Do I need to provide proof of delivery?", a: "Yes. Depending on the order: a photo of the delivered cargo, recipient's signature and/or delivery notes." },
        ],
      },
      {
        slug: "senders",
        icon: Package, title: "For senders", desc: "Delivery orders, real-time tracking and invoices.",
        faqs: [
          { q: "How do I create an account?", a: "Download the Heva app or visit our web portal. Register with your phone number, verify it and you're ready to place your first order. Business accounts can be set up with invoicing options." },
          { q: "Can I register as a business?", a: "Yes. Heva supports both personal and business accounts. Business accounts get access to additional features like invoicing, billing periods and multi-team member management." },
          { q: "How do I place an order?", a: "Open the Heva app, enter pickup and delivery addresses, select a vehicle type, see the price instantly and confirm — a driver is assigned within minutes." },
          { q: "What vehicle types are available?", a: "Car — for smaller packages. Van — for medium-sized cargo and furniture. Long Van — for larger cargo and bulky items." },
          { q: "What services does Heva offer?", a: "Delivery — instant delivery, driver dispatched right away. Pre-booking — schedule a delivery for a specific date and time in advance." },
          { q: "Can I add special requirements to my order?", a: "Yes. You can add options like loading/unloading assistance, fragile cargo handling, and specific time windows for pickup or delivery." },
          { q: "Can I send to multiple addresses in one order?", a: "Yes. Heva supports multi-destination orders. Add multiple delivery addresses to one order and the system automatically optimises the route." },
          { q: "Can I track my delivery in real-time?", a: "Yes. 100% real-time visibility. Once a driver accepts your order, you can track the entire journey on the map — from pickup to delivery." },
          { q: "What order statuses will I see?", a: "Pending — order placed. Accepted — driver assigned. Picked up — cargo collected. En route — on the way. Delivered — successfully completed. You receive notifications at each stage." },
          { q: "Can I cancel an order?", a: "Yes, you can cancel an order before cargo pickup. Cancellation policy and any applicable fees are clearly shown in the app before confirming the cancellation." },
          { q: "What if my cargo is damaged?", a: "All Heva deliveries are fully insured. If your cargo is damaged during transport, contact our support team immediately. We'll initiate the insurance claim process." },
        ],
      },
      {
        slug: "app",
        icon: Smartphone, title: "Application", desc: "iOS and Android app, troubleshooting and updates.",
        faqs: [
          { q: "Where can I download the Heva app?", a: "Heva is available on both the App Store (iOS) and Google Play (Android). Couriers have a separate Heva Driver app." },
          { q: "How do I reset my password?", a: "Use the \"Forgot password\" option on the login screen. You'll receive a reset link via SMS, email or push notification." },
          { q: "How do I create an account?", a: "Download the Heva app, register with your phone number and verify it. Business accounts can also be set up with invoicing options." },
          { q: "What if the app isn't working?", a: "Try closing and reopening the app. Make sure you have the latest version. If the problem persists, contact our support team." },
        ],
      },
      {
        slug: "billing",
        icon: CreditCard, title: "Billing & payments", desc: "Payment methods, invoices and refunds.",
        faqs: [
          { q: "How is the price calculated?", a: "Pricing consists of three components: trip start fee (fixed fee when the trip begins), loading time and per-minute rate from start to destination. The final price depends on the selected vehicle type. You see the exact price before confirming the order." },
          { q: "Are there hidden fees?", a: "No. €0 hidden costs. The price you see when placing an order is the price you pay. All surcharges are clearly shown before confirmation." },
          { q: "What payment methods are accepted?", a: "In-app payment (credit/debit card), bank transfer (for business accounts) and invoice-based billing (for business accounts with approved credit)." },
          { q: "How does billing for business accounts work?", a: "Business clients can choose periodic billing instead of per-order payments. Invoices are generated according to the billing period (weekly, biweekly or monthly) and can be downloaded or received by email." },
          { q: "Can I export my order data?", a: "Business clients can export order lists in CSV format with filtered data and custom columns for accounting and reporting purposes." },
          { q: "How do courier payouts work?", a: "Earnings accumulate in the in-app wallet. Payouts are processed weekly to your bank account. Go to the Wallet section, enter the amount and submit a request." },
        ],
      },
      {
        slug: "account",
        icon: UserCheck, title: "Account", desc: "Account creation, documents and verification.",
        faqs: [
          { q: "How do I create an account?", a: "Download the Heva app or visit the web portal. Register with your phone number, verify it and you're ready. Business accounts can be set up with invoicing options." },
          { q: "How do I update vehicle or personal details?", a: "You can update your details through the driver app. Some changes (like vehicle type) may require re-verification by our team." },
          { q: "How do I delete my account?", a: "Contact Heva support to request account deletion. Note that the account must have a zero balance and no active orders before deletion." },
          { q: "How do I reset my password?", a: "Use the \"Forgot password\" option on the login screen. You'll receive a reset link via SMS, email or push notification." },
        ],
      },
      {
        slug: "general",
        icon: HelpCircle, title: "General", desc: "Heva, coverage, safety and other questions.",
        faqs: [
          { q: "What is Heva?", a: "Heva is an Estonian freight delivery platform that connects businesses and individuals who need cargo transport with available drivers in real-time. You place an order, a nearby driver accepts it, and you track the entire process in real-time." },
          { q: "Where does Heva operate?", a: "Heva covers 100% of Estonia. Whether you're sending cargo within Tallinn or from Tartu to Pärnu — we've got you covered. Our zone-based system ensures a driver is always available in your area." },
          { q: "How quickly can I get a driver?", a: "Our average response time is 1–2 minutes. Our dispatch algorithm automatically matches your order with the best available driver." },
          { q: "Is Heva available 24/7?", a: "Yes. You can place orders and track deliveries around the clock, 365 days a year." },
          { q: "Is my shipment insured?", a: "Yes. Every delivery made through Heva is covered by full insurance. Your cargo is protected from pickup to delivery." },
          { q: "How does Heva ensure safety?", a: "Full insurance on every delivery, verified drivers (every courier is checked before activation), real-time tracking, proof of delivery (photo, signature, notes) and a rating system for continuous quality monitoring." },
          { q: "How do I contact Heva support?", a: "In-app support (available in both the customer and courier apps), email at info@heva.me, and phone on weekdays." },
        ],
      },
    ],
  },
};

export const SLUGS = ["couriers", "senders", "app", "billing", "account", "general"] as const;
