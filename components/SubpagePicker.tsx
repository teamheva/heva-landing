"use client";

import SubpageLayout, { type SubpageConfig } from "./SubpageLayout";
import { useLanguage } from "@/lib/LanguageContext";

/** Picks the language-appropriate config from a bundle and renders the subpage. */
export default function SubpagePicker({ bundle }: { bundle: { et: SubpageConfig; en: SubpageConfig } }) {
  const { lang } = useLanguage();
  return <SubpageLayout config={bundle[lang]} />;
}
