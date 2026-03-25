import LegalPage from "@/components/LegalPage";

const et = {
  title: "Kasutustingimused",
  updated: "Uuendatud märts 2026",
  intro:
    "Käesolevad kasutustingimused reguleerivad HeVa Technology OÜ platvormi kasutamist. Platvormi kasutades nõustud nende tingimustega. Kui sa ei nõustu, palun ära kasuta platvormi.",
  sections: [
    {
      title: "1. Teenuse kirjeldus",
      body: [
        "Heva on digitaalne platvorm, mis ühendab kaubasaatjad (edaspidi 'klient') ja vedajad (edaspidi 'vedaja'). HeVa Technology OÜ on vahendaja — leping veo teostamiseks sõlmitakse kliendi ja vedaja vahel.",
      ],
    },
    {
      title: "2. Registreerimine ja konto",
      body: [
        "Platvormi kasutamiseks tuleb luua konto. Oled vastutav konto turvalisuse eest ning pead viivitamata teavitama volitamata kasutusest aadressil info@heva.me.",
        "Konto loomiseks pead olema vähemalt 18-aastane. Ettevõtte nimel registreerudes kinnitad, et sul on õigus seda teha.",
      ],
    },
    {
      title: "3. Kliendi kohustused",
      body: [
        "Klient kohustub esitama täpset infot kauba kohta (mõõtmed, kaal, sisu), olema peale- ja mahalaadimiskohas kokkulepitud ajal kättesaadav ning tasuma teenuse eest vastavalt kuvatud hinnale.",
        "Keelatud on vedada ohtlikke aineid, ebaseaduslikke kaupu ning esemeid, mille vedu on seadusega keelatud.",
      ],
    },
    {
      title: "4. Vedaja kohustused",
      body: [
        "Vedaja kohustub aktsepteeritud tellimust täitma kokkulepitud tingimustel, hoolitsema kauba eest veotranspordi ajal ning omama kehtivat juhiluba ja sõiduki kindlustust.",
      ],
    },
    {
      title: "5. Maksed",
      body: [
        "Hind kuvatakse enne tellimuse kinnitamist. Makse toimub automaatselt platvormi kaudu. Vedaja saab väljamakse platvormi poolt kehtestatud graafiku alusel.",
      ],
    },
    {
      title: "6. Vastutuse piiramine",
      body: [
        "HeVa Technology OÜ vahendab teenust ega vastuta vedaja tegevuse, viivituste ega kauba kahjustumise eest, välja arvatud juhul, kui see tuleneb Heva otsesest hooletusest.",
        "HeVa Technology OÜ vastutus on piiratud platvormi kaudu makstud teenustasuga konkreetse tellimuse eest.",
      ],
    },
    {
      title: "7. Tingimuste muutmine",
      body: [
        "HeVa Technology OÜ-l on õigus tingimusi muuta, teavitades kasutajaid e-posti teel vähemalt 14 päeva ette. Platvormi edasine kasutamine pärast muutuste jõustumist loetakse nõustumiseks.",
      ],
    },
    {
      title: "8. Kohaldatav õigus",
      body: [
        "Tingimustele kohaldatakse Eesti Vabariigi õigust. Vaidlused lahendatakse Harju Maakohtus.",
      ],
    },
  ],
};

const en = {
  title: "Terms of Service",
  updated: "Updated March 2026",
  intro:
    "These terms of service govern your use of the HeVa Technology OÜ platform. By using the platform, you agree to these terms. If you do not agree, please do not use the platform.",
  sections: [
    {
      title: "1. Service description",
      body: [
        "Heva is a digital platform connecting cargo senders ('customer') and carriers ('driver'). HeVa Technology OÜ acts as an intermediary — the contract for transport is concluded between the customer and the driver.",
      ],
    },
    {
      title: "2. Registration and account",
      body: [
        "To use the platform, you must create an account. You are responsible for the security of your account and must immediately notify unauthorised use at info@heva.me.",
        "You must be at least 18 years old to register. If registering on behalf of a company, you confirm you have the authority to do so.",
      ],
    },
    {
      title: "3. Customer obligations",
      body: [
        "The customer agrees to provide accurate information about the cargo (dimensions, weight, contents), be available at the pickup and drop-off location at the agreed time, and pay for the service at the displayed price.",
        "It is prohibited to transport hazardous substances, illegal goods, or items whose transport is prohibited by law.",
      ],
    },
    {
      title: "4. Driver obligations",
      body: [
        "The driver agrees to fulfil accepted orders under agreed conditions, take care of the cargo during transport, and hold a valid driving licence and vehicle insurance.",
      ],
    },
    {
      title: "5. Payments",
      body: [
        "The price is displayed before confirming an order. Payment is processed automatically through the platform. Drivers receive payouts according to the platform's payment schedule.",
      ],
    },
    {
      title: "6. Limitation of liability",
      body: [
        "HeVa Technology OÜ acts as an intermediary and is not liable for the driver's actions, delays or cargo damage, except where resulting from Heva's direct negligence.",
        "HeVa Technology OÜ's liability is limited to the service fee paid through the platform for the specific order.",
      ],
    },
    {
      title: "7. Changes to terms",
      body: [
        "HeVa Technology OÜ reserves the right to modify these terms, notifying users by email at least 14 days in advance. Continued use of the platform after changes take effect constitutes acceptance.",
      ],
    },
    {
      title: "8. Governing law",
      body: [
        "These terms are governed by the laws of the Republic of Estonia. Disputes shall be resolved in Harju County Court.",
      ],
    },
  ],
};

export const metadata = {
  title: "Kasutustingimused | Heva",
};

export default function TermsPage() {
  return <LegalPage et={et} en={en} />;
}
