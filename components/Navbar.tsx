"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 flex-shrink-0">
      <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
    </svg>
  );
}

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 260);
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full grid grid-cols-[1fr_auto_1fr] items-center" style={{ height: "68px" }}>
          {/* Logo — left */}
          <div className="flex items-center">
            <a
              href="/"
              className="flex items-center flex-shrink-0"
              aria-label={t.nav.ariaHome}
            >
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

          {/* Desktop Nav — true center column */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label={t.nav.ariaMain}
          >
            {t.nav.links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-[#0f1117] rounded-full hover:bg-[#f7f8fc] transition-colors duration-150 cursor-pointer whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop Right — right column */}
          <div className="hidden md:flex items-center justify-end gap-3">
            {/* Language toggle */}
            <div className="flex items-center gap-1 text-[12px] font-medium">
              <button
                onClick={() => setLang("et")}
                className={`transition-colors duration-150 cursor-pointer ${lang === "et" ? "text-[#0f1117]" : "text-[#9ca3af] hover:text-[#6b7280]"}`}
                aria-label="Eesti keel"
              >ET</button>
              <span className="text-[#d1d5db] select-none">/</span>
              <button
                onClick={() => setLang("en")}
                className={`transition-colors duration-150 cursor-pointer ${lang === "en" ? "text-[#0f1117]" : "text-[#9ca3af] hover:text-[#6b7280]"}`}
                aria-label="English"
              >EN</button>
            </div>

            <div className="w-px h-4 bg-[#e5e7eb]" />

            <button className="text-sm font-medium text-[#6b7280] hover:text-[#0f1117] transition-colors duration-150 cursor-pointer whitespace-nowrap">
              {t.nav.login}
            </button>

            <button className="btn-primary px-5 py-2 text-sm font-semibold text-white rounded-full cursor-pointer whitespace-nowrap">
              {t.nav.start}
            </button>
          </div>

          {/* Mobile: hamburger */}
          <div className="md:hidden flex items-center justify-end col-start-3">
            <button
              className="p-2 rounded-xl text-[#0f1117] hover:bg-[#f7f8fc] transition-colors cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? t.nav.ariaClose : t.nav.ariaOpen}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu — fullscreen */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="fixed inset-0 z-40 bg-[#0a0a0f] flex flex-col"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-5 h-[68px] border-b border-white/[0.06] flex-shrink-0">
              <div className="relative w-[100px] h-[32px]">
                <Image
                  src="/logo-footer.png"
                  alt="Heva"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <button
                className="p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
                onClick={() => setMobileOpen(false)}
                aria-label={t.nav.ariaClose}
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex-1 flex flex-col justify-center px-6 gap-1">
              {t.nav.links.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left py-4 text-[2rem] font-bold text-white/90 hover:text-white hover:text-[#025bff] transition-colors duration-150 cursor-pointer border-b border-white/[0.06] last:border-0"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            {/* Bottom actions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="px-6 pb-10 flex flex-col gap-3"
            >
              <button className="btn-primary w-full py-4 text-base font-semibold text-white rounded-2xl cursor-pointer">
                {t.nav.start}
              </button>

              <div className="flex gap-2">
                <button
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-white/[0.07] text-white rounded-2xl cursor-pointer"
                  aria-label="App Store"
                >
                  <AppleIcon />
                  <span className="text-[13px] font-semibold">App Store</span>
                </button>
                <button
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-white/[0.07] text-white rounded-2xl cursor-pointer"
                  aria-label="Google Play"
                >
                  <PlayIcon />
                  <span className="text-[13px] font-semibold">Google Play</span>
                </button>
              </div>

              <div className="flex items-center justify-between pt-1">
                <button className="text-sm font-medium text-white/40 cursor-pointer">
                  {t.nav.login}
                </button>
                <div className="flex items-center gap-1 bg-white/[0.06] rounded-full p-1">
                  {(["et", "en"] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={`px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                        lang === l
                          ? "bg-white text-[#0f1117]"
                          : "text-white/40"
                      }`}
                    >
                      {l.toUpperCase()}
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
