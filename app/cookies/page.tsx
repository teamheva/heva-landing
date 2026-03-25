import LegalPage from "@/components/LegalPage";

const et = {
  title: "Küpsiste poliitika",
  updated: "Uuendatud märts 2026",
  intro:
    "Heva OÜ kasutab veebilehel küpsiseid. Käesolev küpsiste poliitika selgitab, mida küpsised on, milliseid küpsiseid me kasutame ja kuidas nende kasutust hallata.",
  sections: [
    {
      title: "1. Mis on küpsised?",
      body: [
        "Küpsised on väikesed tekstifailid, mida veebileht salvestab sinu seadmesse. Need aitavad veebilehel toimida, meeles pidada eelistusi ja koguda kasutusteabe.",
      ],
    },
    {
      title: "2. Milliseid küpsiseid me kasutame?",
      body: [
        "Hädavajalikud küpsised — tagavad veebilehe põhifunktsionaalsuse (nt keeleeelistuse meeldejätmine). Neid ei saa keelata.",
        "Analüütilised küpsised — mõõdavad veebilehe kasutust anonüümselt (nt külastuste arv, kõige külastatumad lehed). Kasutame Google Analytics teenust.",
      ],
    },
    {
      title: "3. Kuidas küpsiseid hallata?",
      body: [
        "Saad küpsiste kasutusega nõustuda või sellest keelduda meie küpsiste teates. Analüütilised küpsised on valikulised — keeldumisel ei mõjuta see veebilehe kasutamist.",
        "Küpsiseid saab keelata ka brauseri seadetes, kuid see võib mõjutada veebilehe funktsionaalsust.",
      ],
    },
    {
      title: "4. Kontakt",
      body: [
        "Küpsistega seotud küsimuste korral võta ühendust: info@heva.me",
      ],
    },
  ],
};

const en = {
  title: "Cookie Policy",
  updated: "Updated March 2026",
  intro:
    "Heva OÜ uses cookies on its website. This cookie policy explains what cookies are, which cookies we use, and how to manage them.",
  sections: [
    {
      title: "1. What are cookies?",
      body: [
        "Cookies are small text files that a website saves to your device. They help the website function, remember preferences, and collect usage information.",
      ],
    },
    {
      title: "2. Which cookies do we use?",
      body: [
        "Essential cookies — ensure the basic functionality of the website (e.g. remembering language preference). These cannot be disabled.",
        "Analytics cookies — measure website usage anonymously (e.g. number of visits, most visited pages). We use Google Analytics.",
      ],
    },
    {
      title: "3. How to manage cookies?",
      body: [
        "You can accept or decline cookie use in our cookie notice. Analytics cookies are optional — declining them does not affect your use of the website.",
        "Cookies can also be disabled in your browser settings, though this may affect website functionality.",
      ],
    },
    {
      title: "4. Contact",
      body: [
        "For cookie-related questions, contact: info@heva.me",
      ],
    },
  ],
};

export const metadata = {
  title: "Küpsiste poliitika | Heva",
};

export default function CookiesPage() {
  return <LegalPage et={et} en={en} />;
}
