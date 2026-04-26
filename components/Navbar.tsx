"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Check, ArrowRight, Headphones, Truck, Building2, Warehouse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { localePath } from "@/lib/translations";

const LANG_OPTIONS = [
  { code: "et" as const, flag: "🇪🇪", label: "Eesti" },
  { code: "en" as const, flag: "🇬🇧", label: "English" },
];

const REGISTER_ICONS = [Truck, Building2, Warehouse];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [hevaDropdownOpen, setHevaDropdownOpen] = useState(false);
  const [registerDropdownOpen, setRegisterDropdownOpen] = useState(false);
  const [mobileHevaOpen, setMobileHevaOpen] = useState(false);
  const [mobileRegisterOpen, setMobileRegisterOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const hevaDropdownRef = useRef<HTMLDivElement>(null);
  const registerDropdownRef = useRef<HTMLDivElement>(null);

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
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) setLangDropdownOpen(false);
      if (hevaDropdownRef.current && !hevaDropdownRef.current.contains(e.target as Node)) setHevaDropdownOpen(false);
      if (registerDropdownRef.current && !registerDropdownRef.current.contains(e.target as Node)) setRegisterDropdownOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const currentLang = LANG_OPTIONS.find(l => l.code === lang)!;
  const supportLabel = lang === "et" ? "Klienditugi" : "Support";
  const supportHref = localePath("/support", lang);
  const registerItems = t.nav.registerDropdown.items;

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
            <Link href="/" className="flex items-center flex-shrink-0" aria-label={t.nav.ariaHome}>
              <div className="relative w-[114px] h-[36px] sm:w-[164px] sm:h-[54px] sm:-ml-[2px]">
                <Image src="/logo-blue.png" alt="Heva logo" fill className="object-contain object-left" priority />
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label={t.nav.ariaMain}>
            {t.nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#374151] rounded-full hover:bg-[#f7f8fc] hover:text-[#0f1117] transition-colors duration-150 cursor-pointer whitespace-nowrap"
              >
                {link.label}
              </Link>
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
                    className="absolute left-0 top-full mt-2 bg-white rounded-2xl overflow-hidden z-50 min-w-[180px]"
                    style={{
                      boxShadow: "0 4px 24px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.06)",
                      border: "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    {t.nav.hevaDropdown.links.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setHevaDropdownOpen(false)}
                        className="block px-4 py-2.5 text-sm text-[#374151] hover:bg-[#f7f8fc] hover:text-[#025bff] transition-colors cursor-pointer"
                      >
                        {item.label}
                      </Link>
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
              href={supportHref}
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
                <ChevronDown size={12} className={`text-[#9ca3af] transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""}`} />
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

            {/* Register dropdown */}
            <div ref={registerDropdownRef} className="relative">
              <button
                onClick={() => setRegisterDropdownOpen(!registerDropdownOpen)}
                className="btn-primary flex items-center gap-1 px-5 py-2 text-sm font-semibold text-white rounded-full cursor-pointer whitespace-nowrap"
                aria-label={t.nav.registerDropdown.label}
                aria-expanded={registerDropdownOpen}
              >
                {t.nav.registerDropdown.label}
                <ChevronDown size={13} className={`transition-transform duration-200 ${registerDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {registerDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="absolute right-0 top-full mt-2 bg-white rounded-2xl overflow-hidden z-50 w-[320px]"
                    style={{
                      boxShadow: "0 12px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
                      border: "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    <div className="p-2">
                      {registerItems.map((item, i) => {
                        const Icon = REGISTER_ICONS[i] ?? Truck;
                        return (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setRegisterDropdownOpen(false)}
                            className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-[#f7f8fc] transition-colors cursor-pointer group"
                          >
                            <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#e8f0ff] flex items-center justify-center group-hover:bg-[#025bff] transition-colors">
                              <Icon size={16} className="text-[#025bff] group-hover:text-white transition-colors" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[13px] font-semibold text-[#0f1117] group-hover:text-[#025bff] transition-colors">{item.label}</p>
                              <p className="text-[11.5px] text-[#6b7280] mt-0.5 leading-relaxed">{item.sub}</p>
                            </div>
                            <ArrowRight size={14} className="flex-shrink-0 text-[#9ca3af] group-hover:text-[#025bff] group-hover:translate-x-0.5 transition-all mt-2" />
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile: support + hamburger */}
          <div className="md:hidden flex items-center justify-end gap-1 col-start-3">
            <Link
              href={supportHref}
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
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.24, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-left py-4 text-[1.5rem] font-bold text-[#0f1117] hover:text-[#025bff] transition-colors duration-150 cursor-pointer border-b border-[#f0f0f4]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
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
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-3 pl-4 text-[1.1rem] font-medium text-[#6b7280] hover:text-[#025bff] transition-colors duration-150"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Register expandable section */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + (t.nav.links.length + 1) * 0.04, duration: 0.24, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              >
                <button
                  onClick={() => setMobileRegisterOpen(!mobileRegisterOpen)}
                  className="w-full flex items-center justify-between py-4 text-[1.5rem] font-bold text-[#025bff] transition-colors duration-150 cursor-pointer border-b border-[#f0f0f4]"
                >
                  {t.nav.registerDropdown.label}
                  <ChevronDown size={20} className={`text-[#025bff] transition-transform duration-200 ${mobileRegisterOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileRegisterOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                      className="overflow-hidden border-b border-[#f0f0f4]"
                    >
                      {registerItems.map((item, i) => {
                        const Icon = REGISTER_ICONS[i] ?? Truck;
                        return (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-start gap-3 py-3 pl-4"
                          >
                            <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#e8f0ff] flex items-center justify-center">
                              <Icon size={16} className="text-[#025bff]" />
                            </div>
                            <div>
                              <p className="text-[1rem] font-semibold text-[#0f1117]">{item.label}</p>
                              <p className="text-[12px] text-[#6b7280] mt-0.5">{item.sub}</p>
                            </div>
                          </Link>
                        );
                      })}
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
              {/* Language selector */}
              <div className="flex items-center justify-center">
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
