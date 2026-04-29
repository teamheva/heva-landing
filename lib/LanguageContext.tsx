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

  // On mount: only restore an explicit saved preference. Otherwise keep the
  // server-rendered initialLang (IP/geo-based) so visitors from Estonia see
  // Estonian regardless of their browser language setting.
  useEffect(() => {
    const saved = localStorage.getItem("heva-lang") as Lang | null;
    if (saved === "et" || saved === "en") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
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
