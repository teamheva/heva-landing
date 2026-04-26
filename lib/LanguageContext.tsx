"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { translations, type Lang, type Translations } from "./translations";

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "et",
  setLang: () => {},
  t: translations.et,
});

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  initialLang: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  // On mount: restore saved language preference, or fall back to browser language
  useEffect(() => {
    const saved = localStorage.getItem("heva-lang") as Lang | null;
    if (saved === "et" || saved === "en") {
      setLangState(saved);
      document.documentElement.lang = saved;
      return;
    }
    const browser = navigator.language.toLowerCase();
    const detected: Lang = browser.startsWith("et") ? "et" : "en";
    setLangState(detected);
    document.documentElement.lang = detected;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("heva-lang", l);
    document.documentElement.lang = l;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] as Translations }}>
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
