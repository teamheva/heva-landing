"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
  const { t } = useLanguage();
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

        {/* ── Tagline + Nav ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="pt-14 sm:pt-20 pb-12 sm:pb-14 flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-20"
        >
          {/* Tagline */}
          <div className="flex-1">
            <h2
              className="text-[2.6rem] sm:text-[3.4rem] lg:text-[4rem] font-bold leading-[1.06] tracking-tight"
              style={{ fontFamily: "var(--font-dm-serif), serif" }}
            >
              <span className="text-white">{f.tagline.split(".")[0]}.</span>
              <br />
              <span className="text-white/30">{f.tagline.split(".").slice(1).join(".").trim()}</span>
            </h2>
          </div>

          {/* Nav columns */}
          <div className="flex gap-10 sm:gap-14">
            {f.columns.map((col) => (
              <div key={col.title}>
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.14em] mb-4">
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[13px] text-gray-500 hover:text-white transition-colors duration-150"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Bottom bar ── */}
        <div
          className="py-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          {/* Logo then social below on mobile; side by side on desktop */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <div className="relative w-[90px] h-[28px]">
              <Image src="/logo-footer.png" alt="Heva" fill className="object-contain object-left" />
            </div>
            <div className="flex items-center gap-0.5 -ml-2">
              {SOCIAL.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Each on its own line on mobile; inline row on desktop */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-1.5 sm:gap-x-3 sm:gap-y-1">
            <p className="text-[11px] text-gray-600">© {year} HeVa Technology OÜ.</p>
            {f.legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[11px] text-gray-600 hover:text-gray-400 transition-colors"
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
