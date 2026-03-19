"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

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

const navLinks = [
  { label: "Kuidas töötab", href: "#how-it-works" },
  { label: "Vedajatele", href: "#for-drivers" },
  { label: "Ettevõtetele", href: "#features" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<"ET" | "EN">("ET");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 flex items-center" style={{ height: "68px" }}>
          {/* Logo — left third */}
          <div className="flex-1 flex items-center">
            <a
              href="/"
              className="flex items-center flex-shrink-0"
              aria-label="Heva avaleht"
            >
              <div className="relative w-[158px] h-[54px]" style={{ marginLeft: "-6px" }}>
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

          {/* Desktop Nav — absolute center */}
          <nav
            className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2"
            aria-label="Peamenüü"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-[#0f1117] rounded-full hover:bg-[#f7f8fc] transition-colors duration-150 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop Right — right third */}
          <div className="flex-1 hidden md:flex items-center justify-end gap-2.5">
            {/* Language toggle */}
            <div className="flex items-center gap-0.5 bg-[#f7f8fc] rounded-full p-1">
              {(["ET", "EN"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-150 ${
                    lang === l
                      ? "bg-white text-[#0f1117] shadow-[0_1px_4px_rgba(0,0,0,0.1)]"
                      : "text-[#6b7280] hover:text-[#0f1117]"
                  }`}
                  aria-label={`Vaheta keel: ${l}`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* App store buttons */}
            <div className="flex items-center gap-1.5">
              <button
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0f1117] text-white rounded-xl hover:bg-[#1e293b] transition-colors duration-150 cursor-pointer"
                aria-label="Laadi alla App Store'ist"
              >
                <AppleIcon />
                <span className="hidden lg:block text-[11px] font-semibold leading-none">App Store</span>
              </button>
              <button
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0f1117] text-white rounded-xl hover:bg-[#1e293b] transition-colors duration-150 cursor-pointer"
                aria-label="Laadi alla Google Play'st"
              >
                <PlayIcon />
                <span className="hidden lg:block text-[11px] font-semibold leading-none">Google Play</span>
              </button>
            </div>

            <button className="px-4 py-2 text-sm font-medium text-[#0f1117] hover:text-[#025bff] transition-colors duration-150 cursor-pointer">
              Logi sisse
            </button>

            <button className="btn-primary px-5 py-2.5 text-sm font-semibold text-white rounded-full cursor-pointer">
              Alusta
            </button>
          </div>

          {/* Mobile hamburger — right side on mobile */}
          <button
            className="md:hidden p-2 rounded-xl text-[#0f1117] hover:bg-[#f7f8fc] transition-colors cursor-pointer ml-auto"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Sulge menüü" : "Ava menüü"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-[#e5e7eb] shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
          >
            <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 text-base font-medium text-[#0f1117] rounded-xl hover:bg-[#f7f8fc] transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}

              <div className="h-px bg-[#e5e7eb] my-2" />

              <div className="flex items-center gap-3 px-2">
                <div className="flex items-center gap-0.5 bg-[#f7f8fc] rounded-full p-1">
                  {(["ET", "EN"] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                        lang === l
                          ? "bg-white text-[#0f1117] shadow-sm"
                          : "text-[#6b7280]"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
                <button className="text-sm font-medium text-[#6b7280] px-2 cursor-pointer">
                  Logi sisse
                </button>
              </div>

              <button className="btn-primary w-full mt-2 py-3 text-sm font-semibold text-white rounded-2xl cursor-pointer">
                Alusta
              </button>

              <div className="h-px bg-[#e5e7eb] my-2" />

              {/* App store buttons — mobile */}
              <div className="flex gap-2 px-1">
                <button
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#0f1117] text-white rounded-2xl hover:bg-[#1e293b] transition-colors cursor-pointer"
                  aria-label="Laadi alla App Store'ist"
                >
                  <AppleIcon />
                  <span className="text-[13px] font-semibold">App Store</span>
                </button>
                <button
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#0f1117] text-white rounded-2xl hover:bg-[#1e293b] transition-colors cursor-pointer"
                  aria-label="Laadi alla Google Play'st"
                >
                  <PlayIcon />
                  <span className="text-[13px] font-semibold">Google Play</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
