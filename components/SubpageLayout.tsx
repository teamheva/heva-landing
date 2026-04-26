"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Check } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { localePath } from "@/lib/translations";
import ContactForm from "./ContactForm";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

type Stat = { value: string; label: string };
type Point = { title: string; body: string };
type FaqItem = { q: string; a: string };

export type SubpageConfig = {
  /** Uppercase label shown above the title. */
  eyebrow: string;
  /** H1. */
  title: string;
  /** One short line of color-accented title (rendered after the main title). */
  titleAccent?: string;
  /** Lead paragraph under the title. */
  lead: string;
  /** Optional small feature stats shown under the hero. */
  stats?: Stat[];
  /** Benefit bullets shown as a check-list. */
  benefits?: string[];
  /** 3-up content columns with title + body. */
  points?: Point[];
  /** Collapsible FAQ. */
  faq?: FaqItem[];
  /** Topic string included in the contact form email. */
  formTopic: string;
  /** Show company field. */
  formShowCompany?: boolean;
  /** Custom message placeholder override. */
  formMessagePlaceholder?: string;
  /** Form section eyebrow/title overrides. */
  formEyebrow?: string;
  formTitle?: string;
  formSub?: string;
};

export default function SubpageLayout({ config }: { config: SubpageConfig }) {
  const { lang, t } = useLanguage();
  const f = t.contactForm;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(180deg, #eef3ff 0%, #f5f8ff 40%, #ffffff 100%)"
        }} />
        <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
            className="flex items-center gap-1.5 text-[12px] text-[#6b7280] mb-5"
          >
            <Link href={localePath("/", lang)} className="hover:text-[#025bff] transition-colors">
              {lang === "et" ? "Avaleht" : "Home"}
            </Link>
            <ChevronRight size={12} />
            <span className="text-[#025bff] font-semibold">{config.eyebrow}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease }}
            className="text-[11px] font-bold text-[#025bff] uppercase tracking-[0.14em] mb-4"
          >
            {config.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease }}
            className="text-[2.2rem] sm:text-[3.4rem] font-bold text-[#0f1117] leading-[1.05] tracking-tight"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            {config.title}
            {config.titleAccent && (
              <>
                <br />
                <span className="text-[#025bff]">{config.titleAccent}</span>
              </>
            )}
          </motion.h1>

          {config.lead && config.lead.trim() && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease }}
              className="mt-6 text-[16px] sm:text-[18px] text-[#5b6475] max-w-2xl leading-relaxed"
            >
              {config.lead}
            </motion.p>
          )}

          {/* Stats row */}
          {config.stats && config.stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl"
            >
              {config.stats.map((s, i) => (
                <div key={i} className="border-l-2 border-[#025bff] pl-3">
                  <p className="text-[1.4rem] sm:text-[1.7rem] font-bold text-[#0f1117] tabular-nums leading-none">
                    {s.value}
                  </p>
                  <p className="text-[10.5px] sm:text-[11px] font-semibold text-[#9ca3af] uppercase tracking-[0.1em] mt-1.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Benefits + Points */}
        {(config.benefits?.length || config.points?.length) && (
          <section className="pb-12 sm:pb-16 grid lg:grid-cols-2 gap-10 lg:gap-16">
            {config.benefits && config.benefits.length > 0 && (
              <div>
                <p className="text-[11px] font-bold text-[#025bff] uppercase tracking-[0.14em] mb-4">
                  {lang === "et" ? "Mida sa saad" : "What you get"}
                </p>
                <ul className="space-y-3.5">
                  {config.benefits.map((b, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.04, ease }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#e8f0ff] flex items-center justify-center mt-0.5">
                        <Check size={12} className="text-[#025bff]" strokeWidth={3} />
                      </div>
                      <span className="text-[14.5px] text-[#0f1117] leading-relaxed">{b}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {config.points && config.points.length > 0 && (
              <div>
                <p className="text-[11px] font-bold text-[#025bff] uppercase tracking-[0.14em] mb-4">
                  {lang === "et" ? "Kuidas see käib" : "How it works"}
                </p>
                <div className="space-y-5">
                  {config.points.map((p, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05, ease }}
                      className="relative pl-10"
                    >
                      <div className="absolute left-0 top-0 w-7 h-7 rounded-full bg-[#025bff] text-white flex items-center justify-center text-[12px] font-bold">
                        {i + 1}
                      </div>
                      <h3 className="text-[15px] font-bold text-[#0f1117] mb-1">{p.title}</h3>
                      <p className="text-[13.5px] text-[#5b6475] leading-relaxed">{p.body}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* FAQ */}
        {config.faq && config.faq.length > 0 && (
          <section className="pb-12 sm:pb-16 border-t border-[#e5e8ee] pt-12 sm:pt-16">
            <p className="text-[11px] font-bold text-[#025bff] uppercase tracking-[0.14em] mb-5">
              {lang === "et" ? "Korduvad küsimused" : "FAQ"}
            </p>
            <div className="divide-y divide-[#e5e8ee]">
              {config.faq.map((item, i) => (
                <details key={i} className="group py-4">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="text-[15px] font-semibold text-[#0f1117] group-hover:text-[#025bff] transition-colors">
                      {item.q}
                    </span>
                    <ChevronRight
                      size={16}
                      className="text-[#9ca3af] transition-transform duration-200 group-open:rotate-90"
                    />
                  </summary>
                  <p className="text-[13.5px] text-[#5b6475] leading-relaxed mt-3 pr-8">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Contact form */}
        <section className="pb-20 border-t border-[#e5e8ee] pt-12 sm:pt-16">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <div>
              <p className="text-[11px] font-bold text-[#025bff] uppercase tracking-[0.14em] mb-3">
                {config.formEyebrow ?? f.eyebrow}
              </p>
              <h2
                className="text-[1.7rem] sm:text-[2.1rem] font-bold text-[#0f1117] leading-[1.1] tracking-tight mb-3"
                style={{ fontFamily: "var(--font-dm-serif), serif" }}
              >
                {config.formTitle ?? f.title}
              </h2>
              <p className="text-[14.5px] text-[#5b6475] leading-relaxed">
                {config.formSub ?? f.sub}
              </p>
              <div className="mt-6 space-y-2 text-[13px] text-[#5b6475]">
                <p><span className="font-semibold text-[#0f1117]">E-post:</span> info@heva.me</p>
                <p><span className="font-semibold text-[#0f1117]">Tel:</span> +372 510 0017</p>
                <p><span className="font-semibold text-[#0f1117]">{lang === "et" ? "Tööaeg" : "Hours"}:</span> E-R 9-18</p>
              </div>
            </div>

            <div
              className="bg-white rounded-3xl p-6 sm:p-8"
              style={{ border: "1px solid #e5e8ee", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}
            >
              <ContactForm
                topic={config.formTopic}
                showCompany={config.formShowCompany}
                messagePlaceholder={config.formMessagePlaceholder}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
