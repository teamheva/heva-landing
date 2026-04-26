"use client";

import Link from "next/link";
import { m as motion } from "framer-motion";
import { ChevronRight, Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { localePath } from "@/lib/translations";
import ContactForm from "./ContactForm";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const APP_LINKS = {
  customer: {
    apple: "https://apps.apple.com/ee/app/heva-client/id6762511309",
    google: "https://play.google.com/store/apps/details?id=me.heva.customer&pcampaignid=web_share",
  },
  driver: {
    apple: "https://apps.apple.com/ee/app/heva-driver/id6762511457",
    google: "https://play.google.com/store/apps/details?id=me.heva.driver&pcampaignid=web_share",
  },
} as const;

function AppleIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 384 512" fill="white" aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#00d4ff" d="M3.6 2.4c-.4.4-.6.9-.6 1.5v16.2c0 .6.2 1.1.6 1.5l9.4-9.6L3.6 2.4z" />
      <path fill="#ffce00" d="M16.8 8.5l-3.8 3.5 3.8 3.5 4.5-2.5c1.2-.7 1.2-2.4 0-3.1l-4.5-1.4z" />
      <path fill="#ff3a44" d="M3.6 2.4l9.4 9.6 3.8-3.5L4.7 2.1c-.4-.2-.8-.1-1.1.3z" />
      <path fill="#00f176" d="M13 12l-9.4 9.6c.3.4.7.5 1.1.3l12.1-6.4-3.8-3.5z" />
    </svg>
  );
}

function StoreButtons({ appType, lang }: { appType: "customer" | "driver"; lang: "et" | "en" }) {
  const links = APP_LINKS[appType];
  const downloadOn = lang === "et" ? "Lae alla" : "Download on the";
  const availableOn = lang === "et" ? "Saadaval" : "Get it on";

  const Btn = ({ href, label, store, Icon }: { href: string; label: string; store: string; Icon: () => React.JSX.Element }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all duration-300 hover:-translate-y-[2px]"
      style={{
        background: "linear-gradient(150deg, #1a1a2e 0%, #0f1117 100%)",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.07)",
      }}
      aria-label={store}
    >
      <Icon />
      <div className="text-left">
        <p className="text-[8.5px] text-white/50 font-medium leading-none tracking-[0.1em] uppercase">{label}</p>
        <p className="text-[13px] font-bold text-white leading-tight mt-[2px]">{store}</p>
      </div>
    </a>
  );

  return (
    <div className="flex flex-wrap gap-2.5">
      <Btn href={links.apple} label={downloadOn} store="App Store" Icon={AppleIcon} />
      <Btn href={links.google} label={availableOn} store="Google Play" Icon={GooglePlayIcon} />
    </div>
  );
}

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
  /** Primary CTA label shown in the hero (e.g. "Telli vedu"). */
  ctaLabel?: string;
  /** Where the primary CTA links to (defaults to "#contact" anchor). */
  ctaHref?: string;
  /** When set, renders App Store + Google Play buttons in the hero with the matching app's links. */
  appType?: "customer" | "driver";
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

          {/* CTA + store buttons */}
          {(config.ctaLabel || config.appType) && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              {config.ctaLabel && (
                <a
                  href={config.ctaHref ?? "#contact"}
                  className="inline-flex items-center gap-2 px-5 py-[11px] text-[14px] font-bold text-white rounded-full transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #025bff 0%, #1a71ff 100%)",
                    boxShadow: "0 4px 14px rgba(2,91,255,0.32), inset 0 1px 0 rgba(255,255,255,0.18)",
                  }}
                >
                  {config.ctaLabel}
                  <ArrowRight size={15} />
                </a>
              )}
              {config.appType && <StoreButtons appType={config.appType} lang={lang} />}
            </motion.div>
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
        <section id="contact" className="pb-20 border-t border-[#e5e8ee] pt-12 sm:pt-16 scroll-mt-24">
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
