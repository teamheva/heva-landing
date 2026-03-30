"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Check, ArrowRight, Truck, Headphones } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

const LANG_OPTIONS = [
  { code: "et" as const, flag: "🇪🇪", label: "Eesti" },
  { code: "en" as const, flag: "🇬🇧", label: "English" },
];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [hevaDropdownOpen, setHevaDropdownOpen] = useState(false);
  const [mobileHevaOpen, setMobileHevaOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const hevaDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
      if (hevaDropdownRef.current && !hevaDropdownRef.current.contains(e.target as Node)) {
        setHevaDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 260);
  };

  const currentLang = LANG_OPTIONS.find(l => l.code === lang)!;
  const supportLabel = lang === "et" ? "Klienditugi" : "Support";

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          mobileOpen
            ? "bg-white/95 backdrop-blur-xl border-b border-[#e5e7eb]/80"
            : scrolled
            ? "bg-white/92 backdrop-blur-xl border-b border-[#e5e7eb]/60"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full grid grid-cols-[1fr_auto_1fr] items-center" style={{ height: "68px" }}>
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center flex-shrink-0" aria-label={t.nav.ariaHome}>
              <div className="relative w-[114px] h-[36px] sm:w-[164px] sm:h-[54px] sm:-ml-[2px]">
                <Image
                  src="/logo-blue.png"
                  alt="Heva logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label={t.nav.ariaMain}>
            {t.nav.links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-[#374151] rounded-full hover:bg-[#f7f8fc] hover:text-[#0f1117] transition-colors duration-150 cursor-pointer whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}

            {/* Heva dropdown */}
            <div ref={hevaDropdownRef} className="relative">
              <button
                onClick={() => setHevaDropdownOpen(!hevaDropdownOpen)}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full hover:bg-[#f7f8fc] hover:text-[#0f1117] transition-colors duration-150 cursor-pointer whitespace-nowrap ${hevaDropdownOpen ? "bg-[#f7f8fc] text-[#0f1117]" : "text-[#374151]"}`}
              >
                {t.nav.hevaDropdown.label}
                <ChevronDown size={13} className={`text-[#9ca3af] transition-transform duration-200 ${hevaDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {hevaDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="absolute left-0 top-full mt-2 bg-white rounded-2xl overflow-hidden z-50 min-w-[160px]"
                    style={{
                      boxShadow: "0 4px 24px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.06)",
                      border: "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    {t.nav.hevaDropdown.links.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setHevaDropdownOpen(false)}
                        className="block px-4 py-2.5 text-sm text-[#374151] hover:bg-[#f7f8fc] hover:text-[#025bff] transition-colors cursor-pointer"
                      >
                        {item.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center justify-end gap-2">
            {/* Support button */}
            <Link
              href="/support"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-[#f7f8fc] transition-colors duration-150 text-[#374151] hover:text-[#0f1117]"
              aria-label={supportLabel}
            >
              <Headphones size={16} />
              <span className="text-[12px] font-semibold hidden lg:inline">{supportLabel}</span>
            </Link>

            {/* Language dropdown */}
            <div ref={langDropdownRef} className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-[#f7f8fc] transition-colors duration-150 cursor-pointer"
                aria-label="Language selector"
              >
                <span className="text-base leading-none">{currentLang.flag}</span>
                <span className="text-[12px] font-semibold text-[#374151]">{currentLang.code.toUpperCase()}</span>
                <ChevronDown
                  size={12}
                  className={`text-[#9ca3af] transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="absolute right-0 top-full mt-2 bg-white rounded-2xl overflow-hidden z-50 min-w-[148px]"
                    style={{
                      boxShadow: "0 4px 24px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.06)",
                      border: "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    {LANG_OPTIONS.map((option) => (
                      <button
                        key={option.code}
                        onClick={() => { setLang(option.code); setLangDropdownOpen(false); }}
                        className={`w-full flex items-center gap-2.5 px-4 py-2.5 hover:bg-[#f7f8fc] transition-colors cursor-pointer ${
                          lang === option.code ? "text-[#025bff]" : "text-[#374151]"
                        }`}
                      >
                        <span className="text-lg leading-none">{option.flag}</span>
                        <span className="text-sm font-medium">{option.label}</span>
                        {lang === option.code && <Check size={13} className="ml-auto text-[#025bff]" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="w-px h-4 bg-[#e5e7eb]" />

            <button className="btn-primary px-5 py-2 text-sm font-semibold text-white rounded-full cursor-pointer whitespace-nowrap">
              {t.nav.start}
            </button>
          </div>

          {/* Mobile: support + hamburger */}
          <div className="md:hidden flex items-center justify-end gap-1 col-start-3">
            <Link
              href="/support"
              className="p-2 rounded-xl transition-colors text-[#0f1117] hover:bg-[#f7f8fc]"
              aria-label={supportLabel}
            >
              <Headphones size={20} />
            </Link>
            <button
              className="p-2 rounded-xl transition-colors cursor-pointer text-[#0f1117] hover:bg-[#f7f8fc]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? t.nav.ariaClose : t.nav.ariaOpen}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="fixed inset-0 z-40 bg-white flex flex-col overflow-y-auto"
          >
            <div className="h-[68px] flex-shrink-0" />

            {/* Nav links */}
            <div className="flex-1 flex flex-col px-6 pt-6">
              {t.nav.links.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.24, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left py-4 text-[1.5rem] font-bold text-[#0f1117] hover:text-[#025bff] transition-colors duration-150 cursor-pointer border-b border-[#f0f0f4]"
                >
                  {link.label}
                </motion.button>
              ))}

              {/* Heva expandable section */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + t.nav.links.length * 0.04, duration: 0.24, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              >
                <button
                  onClick={() => setMobileHevaOpen(!mobileHevaOpen)}
                  className="w-full flex items-center justify-between py-4 text-[1.5rem] font-bold text-[#0f1117] hover:text-[#025bff] transition-colors duration-150 cursor-pointer border-b border-[#f0f0f4]"
                >
                  {t.nav.hevaDropdown.label}
                  <ChevronDown size={20} className={`text-[#9ca3af] transition-transform duration-200 ${mobileHevaOpen ? "rotate-180 text-[#025bff]" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileHevaOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                      className="overflow-hidden border-b border-[#f0f0f4]"
                    >
                      {t.nav.hevaDropdown.links.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-3 pl-4 text-[1.1rem] font-medium text-[#6b7280] hover:text-[#025bff] transition-colors duration-150"
                        >
                          {item.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Bottom actions */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.28, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="px-6 pb-10 pt-6 flex flex-col gap-3"
            >
              <button
                className="w-full flex items-center justify-center gap-2 py-4 text-[15px] font-bold text-white rounded-full cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #025bff 0%, #1a71ff 100%)",
                  boxShadow: "0 4px 20px rgba(2,91,255,0.35)",
                }}
              >
                {t.hero.ctaOrder}
                <ArrowRight size={18} />
              </button>

              <button
                className="w-full flex items-center justify-center gap-2 py-4 text-[15px] font-bold text-[#0f1117] rounded-full border border-[#c5cad4] cursor-pointer transition-all duration-200 hover:border-[#025bff] hover:text-[#025bff] hover:-translate-y-0.5 bg-white"
                style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.09)" }}
              >
                <Truck size={17} />
                {t.howItWorks.ctaDriver}
              </button>

              {/* App store buttons */}
              <div className="flex gap-2.5">
                <button
                  className="flex-1 flex items-center gap-3 px-4 py-3.5 rounded-2xl cursor-pointer transition-all duration-200 hover:-translate-y-[2px]"
                  style={{
                    background: "linear-gradient(150deg, #1a1a2e 0%, #0f1117 100%)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.07)",
                  }}
                  aria-label="App Store"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0 text-white">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[9px] text-white/45 font-medium leading-none tracking-[0.1em] uppercase">{t.hero.downloadOn}</p>
                    <p className="text-[13px] font-bold text-white leading-tight mt-[2px]">App Store</p>
                  </div>
                </button>
                <button
                  className="flex-1 flex items-center gap-3 px-4 py-3.5 rounded-2xl cursor-pointer transition-all duration-200 hover:-translate-y-[2px]"
                  style={{
                    background: "linear-gradient(150deg, #1a1a2e 0%, #0f1117 100%)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.07)",
                  }}
                  aria-label="Google Play"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none">
                    <path d="M3.18 1.03C2.47 1.42 2 2.17 2 3.06v17.88c0 .89.47 1.64 1.18 2.03l.1.06 10.02-10.02v-.23L3.28.97l-.1.06z" fill="#4FC3F7" />
                    <path d="M16.64 16.36l-3.34-3.34v-.24l3.34-3.34.07.04 3.96 2.25c1.13.64 1.13 1.69 0 2.34l-3.96 2.25-.07.04z" fill="#FFD54F" />
                    <path d="M16.71 16.32L13.3 12.9 3.18 23.01c.37.4.94.44 1.59.08l11.94-6.77" fill="#F48FB1" />
                    <path d="M16.71 7.68L4.77.91C4.12.55 3.55.59 3.18.99l10.12 10.11 3.41-3.42z" fill="#69F0AE" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[9px] text-white/45 font-medium leading-none tracking-[0.1em] uppercase">{t.hero.availableOn}</p>
                    <p className="text-[13px] font-bold text-white leading-tight mt-[2px]">Google Play</p>
                  </div>
                </button>
              </div>

              {/* Language selector */}
              <div className="flex items-center justify-center pt-1">
                <div className="flex items-center gap-1 bg-[#f7f8fc] rounded-full p-1">
                  {LANG_OPTIONS.map((option) => (
                    <button
                      key={option.code}
                      onClick={() => setLang(option.code)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                        lang === option.code
                          ? "bg-[#025bff] text-white"
                          : "text-[#9ca3af] hover:text-[#374151]"
                      }`}
                    >
                      <span>{option.flag}</span>
                      <span>{option.code.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
