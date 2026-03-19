"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

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
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 flex-shrink-0"
            aria-label="Heva avaleht"
          >
            <div className="relative w-[90px] h-[32px]">
              <Image
                src="/logo.jpg"
                alt="Heva logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
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

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-3">
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

            <button className="px-4 py-2 text-sm font-medium text-[#0f1117] hover:text-[#025bff] transition-colors duration-150 cursor-pointer">
              Logi sisse
            </button>

            <button className="btn-primary px-5 py-2.5 text-sm font-semibold text-white rounded-full cursor-pointer">
              Alusta
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-xl text-[#0f1117] hover:bg-[#f7f8fc] transition-colors cursor-pointer"
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
