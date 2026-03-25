import LegalPage from "@/components/LegalPage";

const et = {
  title: "Privaatsuspoliitika",
  updated: "Uuendatud märts 2026",
  intro:
    "Heva OÜ (registrikood 12345678, aadress Tallinn, Eesti) töötleb isikuandmeid kooskõlas Euroopa Liidu isikuandmete kaitse üldmäärusega (GDPR) ja Eesti isikuandmete kaitse seadusega. Käesolev privaatsuspoliitika selgitab, milliseid andmeid kogume, miks ja kuidas neid kasutame.",
  sections: [
    {
      title: "1. Kogutavad andmed",
      body: [
        "Kogume järgmisi andmeid: nimi, e-posti aadress, telefoninumber, asukohaandmed (veotellimuse täitmiseks), makseandmed (töödeldakse turvalise makselahenduse kaudu) ning platvormikasutuse andmed (logid, seadme info).",
        "Vedajatelt kogume lisaks: isikukoodi (identiteedi kinnitamiseks), sõiduki andmed ning juhiloa koopia.",
      ],
    },
    {
      title: "2. Andmete töötlemise eesmärk ja õiguslik alus",
      body: [
        "Töötleme andmeid järgmistel eesmärkidel: teenuse osutamine ja lepingu täitmine (GDPR art 6(1)(b)), seaduslike kohustuste täitmine (art 6(1)(c)) ning õigustatud huvi alusel teenuse arendamiseks ja turvalisuse tagamiseks (art 6(1)(f)).",
      ],
    },
    {
      title: "3. Andmete säilitamine",
      body: [
        "Säilitame andmeid nii kaua, kui see on teenuse osutamiseks vajalik, kuid mitte kauem kui 3 aastat pärast viimast teenusekasutust. Raamatupidamisandmeid säilitame seadusest tulenevalt 7 aastat.",
      ],
    },
    {
      title: "4. Andmete edastamine kolmandatele osapooltele",
      body: [
        "Edastame andmeid üksnes teenuse osutamiseks vajalikele partneritele: maksetöötlejad, analüüsiteenused (anonüümitud kujul) ning õiguskaitseasutused seadusest tulenevatel juhtudel. Andmeid ei müüda ega edastata kolmandatele osapooltele turunduslikel eesmärkidel.",
      ],
    },
    {
      title: "5. Sinu õigused",
      body: [
        "Sul on õigus: tutvuda oma andmetega, nõuda andmete parandamist või kustutamist, piirata töötlemist, esitada vastuväiteid ning nõuda andmete ülekandmist.",
        "Õiguste kasutamiseks võta ühendust: support@heva.me. Vastame 30 päeva jooksul. Kaebuse esitamise korral võid pöörduda Andmekaitse Inspektsiooni poole (www.aki.ee).",
      ],
    },
    {
      title: "6. Küpsised",
      body: [
        "Kasutame küpsiseid teenuse toimimiseks ja kasutusstatistika mõõtmiseks. Täpsem info on toodud meie küpsiste poliitikas.",
      ],
    },
    {
      title: "7. Kontakt",
      body: [
        "Privaatsusküsimustes võta ühendust: support@heva.me",
      ],
    },
  ],
};

const en = {
  title: "Privacy Policy",
  updated: "Updated March 2026",
  intro:
    "Heva OÜ (registration code 12345678, address Tallinn, Estonia) processes personal data in accordance with the EU General Data Protection Regulation (GDPR) and Estonian Personal Data Protection Act. This privacy policy explains what data we collect, why, and how we use it.",
  sections: [
    {
      title: "1. Data we collect",
      body: [
        "We collect the following data: name, email address, phone number, location data (for order fulfilment), payment data (processed via a secure payment solution) and platform usage data (logs, device info).",
        "From drivers, we additionally collect: national ID number (for identity verification), vehicle details and a copy of the driving licence.",
      ],
    },
    {
      title: "2. Purpose and legal basis for processing",
      body: [
        "We process data for: providing the service and fulfilling the contract (GDPR art 6(1)(b)), compliance with legal obligations (art 6(1)(c)), and legitimate interests in developing the service and ensuring security (art 6(1)(f)).",
      ],
    },
    {
      title: "3. Data retention",
      body: [
        "We retain data for as long as necessary to provide the service, but no longer than 3 years after the last use. Accounting records are retained for 7 years as required by law.",
      ],
    },
    {
      title: "4. Sharing with third parties",
      body: [
        "We share data only with partners necessary to provide the service: payment processors, analytics services (in anonymised form), and law enforcement where required by law. Data is never sold or shared with third parties for marketing purposes.",
      ],
    },
    {
      title: "5. Your rights",
      body: [
        "You have the right to: access your data, request correction or deletion, restrict processing, object to processing, and request data portability.",
        "To exercise your rights, contact: support@heva.me. We will respond within 30 days. You may also lodge a complaint with the Estonian Data Protection Inspectorate (www.aki.ee).",
      ],
    },
    {
      title: "6. Cookies",
      body: [
        "We use cookies to operate the service and measure usage statistics. More information is available in our Cookie Policy.",
      ],
    },
    {
      title: "7. Contact",
      body: [
        "For privacy-related questions, contact: support@heva.me",
      ],
    },
  ],
};

export const metadata = {
  title: "Privaatsuspoliitika | Heva",
};

export default function PrivacyPage() {
  return <LegalPage et={et} en={en} />;
}
