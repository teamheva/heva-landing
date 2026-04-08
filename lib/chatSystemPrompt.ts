import fs from "fs";
import path from "path";
import type { Lang } from "./translations";

// Read all .md files from knowledge/ folder at startup
const knowledgeDir = path.join(process.cwd(), "knowledge");
let knowledgeBase = "";

try {
  const files = fs.readdirSync(knowledgeDir).filter((f) => f.endsWith(".md")).sort();
  knowledgeBase = files
    .map((f) => fs.readFileSync(path.join(knowledgeDir, f), "utf-8"))
    .join("\n\n---\n\n");
} catch {
  knowledgeBase = "(Knowledge base not found)";
}

const rules: Record<Lang, string> = {
  et: `## Reeglid
- Vasta ALATI eesti keeles
- Lühikesed vastused: 2–4 lauset
- Ära leiuta hindu ega numbreid mida sa ei tea
- Kui sa ei tea vastust või ei ole kindel, ütle et võtke ühendust toega: info@heva.me või +372 510 0017
- Ära ütle "platvorm ei täpsusta" vms — kui sa ei tea, suuna lihtsalt toe poole
- Ole sõbralik ja abivalmis
- Ära vasta küsimustele mis ei ole Hevaga seotud`,
  en: `## Rules
- ALWAYS reply in English
- Short answers: 2–4 sentences
- Never invent prices or numbers you don't know
- If you don't know the answer, tell the user to contact support: info@heva.me or +372 510 0017
- Never say "the platform doesn't specify" or similar — just direct to support
- Be friendly and helpful
- Do not answer questions unrelated to Heva`,
};

const intro: Record<Lang, string> = {
  et: "Sa oled Heva abiline — sõbralik vestlusrobot Heva kaubavedu platvormil.\n\nSiin on info mida sa tead:",
  en: "You are Heva's assistant — a friendly chatbot on the Heva freight delivery platform.\n\nHere is what you know:",
};

export function getChatSystemPrompt(lang: Lang): string {
  return `${intro[lang]}\n\n${knowledgeBase}\n\n${rules[lang]}`;
}
