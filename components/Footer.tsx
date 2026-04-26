"use client";

import Link from "next/link";
import Image from "next/image";
import { m as motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const SOCIAL = [
  { Icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { Icon: InstagramIcon, href: "#", label: "Instagram" },
  { Icon: FacebookIcon, href: "#", label: "Facebook" },
];

export default function Footer() {
  const { lang, t } = useLanguage();
  const f = t.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0f] text-white relative overflow-hidden" role="contentinfo">
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(2,91,255,0.07) 0%, transparent 70%)" }}
      />
      <div className="absolute inset-0 dot-pattern opacity-[0.04]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* ── Tagline block ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="pt-14 sm:pt-20 pb-10 sm:pb-14"
        >
          <h2
            className="text-[1.9rem] sm:text-[2.5rem] lg:text-[2.8rem] font-bold leading-[1.08] tracking-tight max-w-3xl"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            {f.tagline.split(".")[0]}.
            <br />
            <span className="text-white/70">{f.tagline.split(".").slice(1).join(".").trim()}</span>
          </h2>
        </motion.div>

        {/* ── Columns ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="py-10 sm:py-14 grid grid-cols-2 sm:grid-cols-3 md:flex md:justify-between gap-x-6 gap-y-10 sm:gap-x-10 sm:gap-y-10"
        >
          {f.columns.map((col, i) => {
            const isLast = i === f.columns.length - 1;
            return (
              <div key={col.title} className={isLast ? "md:text-right" : ""}>
                <p className="text-[10.5px] font-bold text-white uppercase tracking-[0.16em] mb-4">
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[13.5px] text-white/65 hover:text-white transition-colors duration-150 leading-relaxed"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </motion.div>

        {/* ── Address + social ── */}
        <div className="py-8 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3">
            <div className="relative w-[90px] h-[28px]">
              <Image src="/logo-footer.png" alt="Heva" fill className="object-contain object-left" />
            </div>
            <p className="text-[12.5px] text-white/55 leading-relaxed max-w-xs">
              HeVa Technology OÜ
              <br />
              Pärnu mnt 158/1, 11317 Tallinn, Eesti
              <br />
              {lang === "et" ? "Reg. kood" : "Reg. code"}: 17448087
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-end md:text-right">
            <p className="text-[10.5px] font-bold text-white/60 uppercase tracking-[0.16em]">
              {lang === "et" ? "Võta ühendust" : "Get in touch"}
            </p>
            <div className="flex flex-col gap-1 text-[13px] md:items-end">
              <a href="mailto:info@heva.me" className="text-white/75 hover:text-white transition-colors">info@heva.me</a>
              <a href="tel:+37251000017" className="text-white/75 hover:text-white transition-colors">+372 510 0017</a>
              <span className="text-white/45 text-[12px]">
                {lang === "et" ? "E-R 9-18" : "Mon-Fri 9-18"}
              </span>
            </div>
            <div className="flex items-center gap-1 -ml-3 md:ml-0 md:-mr-3 mt-2">
              {SOCIAL.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="py-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
          <p className="text-[11px] text-white/40">
            © {year} HeVa Technology OÜ. {f.rights}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {f.legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[11px] text-white/40 hover:text-white/70 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
