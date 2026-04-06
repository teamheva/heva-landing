import type { Lang } from "./translations";

export type ChatTranslations = {
  buttonLabel: string;
  title: string;
  subtitle: string;
  placeholder: string;
  send: string;
  thinking: string;
  errorGeneric: string;
  errorRateLimit: string;
  close: string;
  greeting: string;
  suggestions: string[];
};

const chatTranslations: Record<Lang, ChatTranslations> = {
  et: {
    buttonLabel: "Ava vestlus",
    title: "HEVA Tugi",
    subtitle: "Vastame sekunditega",
    placeholder: "Kirjuta sõnum...",
    send: "Saada",
    thinking: "Mõtlen...",
    errorGeneric: "Midagi läks valesti. Palun proovi uuesti.",
    errorRateLimit: "Liiga palju päringuid. Palun oota veidi.",
    close: "Sulge vestlus",
    greeting: "Tere! Olen Heva abiline. Kuidas saan aidata?",
    suggestions: [
      "Mis on Heva?",
      "Kuidas saata pakki?",
      "Kuidas saada kulleriks?",
    ],
  },
  en: {
    buttonLabel: "Open chat",
    title: "HEVA Support",
    subtitle: "We reply in seconds",
    placeholder: "Type a message...",
    send: "Send",
    thinking: "Thinking...",
    errorGeneric: "Something went wrong. Please try again.",
    errorRateLimit: "Too many requests. Please wait a moment.",
    close: "Close chat",
    greeting: "Hello! I'm Heva's assistant. How can I help?",
    suggestions: [
      "What is Heva?",
      "How to send a package?",
      "How to become a courier?",
    ],
  },
};

export function getChatTranslations(lang: Lang): ChatTranslations {
  return chatTranslations[lang];
}
