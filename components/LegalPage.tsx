"use client";

import { useLanguage } from "@/lib/LanguageContext";

type Section = {
  title: string;
  body: (string | string[])[];
};

type LegalContent = {
  title: string;
  updated: string;
  intro: string;
  sections: Section[];
};

export default function LegalPage({
  et,
  en,
}: {
  et: LegalContent;
  en: LegalContent;
}) {
  const { lang } = useLanguage();
  const c = lang === "et" ? et : en;

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <p className="text-[11px] font-semibold text-[#025bff] uppercase tracking-[0.15em] mb-4">
          {c.updated}
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0f1117] tracking-tight leading-tight mb-6">
          {c.title}
        </h1>
        <p className="text-[14px] text-[#6b7280] leading-relaxed mb-12 border-b border-[#e5e7eb] pb-10">
          {c.intro}
        </p>

        <div className="flex flex-col gap-10">
          {c.sections.map((s) => (
            <div key={s.title} className="flex flex-col gap-3">
              <h2 className="text-[15px] font-semibold text-[#0f1117]">
                {s.title}
              </h2>
              {s.body.map((item, i) =>
                Array.isArray(item) ? (
                  <ul key={i} className="flex flex-col gap-1.5 pl-4">
                    {item.map((li, j) => (
                      <li
                        key={j}
                        className="text-[13.5px] text-[#6b7280] leading-relaxed list-disc"
                      >
                        {li}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p key={i} className="text-[13.5px] text-[#6b7280] leading-relaxed">
                    {item}
                  </p>
                ),
              )}
            </div>
          ))}
        </div>

        <p className="mt-14 text-[12px] text-[#9ca3af]">
          © {new Date().getFullYear()} HeVa Technology OÜ
        </p>
      </div>
    </main>
  );
}
