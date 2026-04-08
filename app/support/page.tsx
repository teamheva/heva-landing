"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Search, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { localePath } from "@/lib/translations";
import { supportContent } from "@/lib/supportData";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function SupportPage() {
  const { lang } = useLanguage();
  const c = supportContent[lang];
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  // Search across all categories
  const searchResults = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (q.length < 2) return null;
    const results: { catTitle: string; catSlug: string; q: string; a: string }[] = [];
    for (const cat of c.categories) {
      for (const faq of cat.faqs) {
        if (faq.q.toLowerCase().includes(q) || faq.a.toLowerCase().includes(q)) {
          results.push({ catTitle: cat.title, catSlug: cat.slug, q: faq.q, a: faq.a });
        }
      }
    }
    return results;
  }, [search, c.categories]);

  const noResults = lang === "et" ? "Tulemusi ei leitud" : "No results found";
  const searchPlaceholder = lang === "et" ? "Otsi küsimust..." : "Search questions...";
  const searchResultsLabel = lang === "et" ? "tulemust" : "results";

  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <div className="pt-32 pb-8 sm:pt-40 sm:pb-10 bg-white">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="text-[2.2rem] sm:text-[3rem] font-bold text-[#0f1117] tracking-tight leading-[1.1]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            {c.h1}
          </motion.h1>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15, ease }}
            className="mt-8 relative max-w-md mx-auto"
          >
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af] pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full pl-11 pr-4 py-3 rounded-2xl text-[14px] text-[#0f1117] placeholder-[#9ca3af] bg-[#f7f8fc] outline-none transition-shadow focus:ring-2 focus:ring-[#025bff]/20 focus:bg-white"
              style={{ border: "1.5px solid #e5e7eb" }}
            />
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Search results */}
        {searchResults !== null ? (
          <section className="py-6 sm:py-8">
            {searchResults.length === 0 ? (
              <p className="text-center text-[14px] text-[#9ca3af] py-8">{noResults}</p>
            ) : (
              <>
                <p className="text-[12px] text-[#9ca3af] mb-4">{searchResults.length} {searchResultsLabel}</p>
                <div className="divide-y divide-[#f0f0f4]">
                  {searchResults.map((r, i) => {
                    const key = `${r.catSlug}-${i}`;
                    const isOpen = openFaq === key;
                    return (
                      <div key={key}>
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : key)}
                          className="w-full flex items-center justify-between py-4 text-left cursor-pointer group"
                        >
                          <div className="pr-4">
                            <span className="text-[10px] font-semibold text-[#025bff] uppercase tracking-wide">{r.catTitle}</span>
                            <p className={`text-[14.5px] font-semibold mt-0.5 transition-colors duration-150 ${isOpen ? "text-[#025bff]" : "text-[#0f1117] group-hover:text-[#025bff]"}`}>{r.q}</p>
                          </div>
                          <ChevronDown
                            size={16}
                            className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#025bff]" : "text-[#9ca3af]"}`}
                          />
                        </button>
                        {isOpen && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, ease }}
                            className="text-[13.5px] text-[#6b7280] leading-relaxed pb-4"
                          >
                            {r.a}
                          </motion.p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </section>
        ) : (
          /* Categories grid */
          <section className="py-6 sm:py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {c.categories.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <motion.div
                    key={cat.slug}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.04, ease }}
                  >
                    <Link
                      href={`${localePath("/support", lang)}/${cat.slug}`}
                      className="group flex items-start gap-4 p-5 h-full bg-white rounded-2xl transition-all duration-200 cursor-pointer text-left block"
                      style={{
                        border: "1.5px solid #e5e7eb",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = "#025bff")}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = "#e5e7eb")}
                    >
                      <Icon size={18} className="text-[#025bff] mt-0.5 flex-shrink-0" strokeWidth={1.75} />
                      <div className="min-w-0">
                        <p className="text-[14px] font-bold mb-1 transition-colors duration-150 text-[#0f1117] group-hover:text-[#025bff]">{cat.title}</p>
                        <p className="text-[12.5px] text-[#6b7280] leading-relaxed">{cat.desc}</p>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </section>
        )}

        {/* Contact */}
        <section className="py-10 sm:py-12">
          <p className="text-[13px] font-semibold text-[#0f1117] mb-4">{c.contactLabel}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div
              className="group flex items-center gap-4 p-5 bg-white rounded-2xl transition-all duration-200"
              style={{ border: "1.5px solid #e5e7eb", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#025bff")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "#e5e7eb")}
            >
              <Mail size={18} className="text-[#025bff] flex-shrink-0" strokeWidth={1.75} />
              <div>
                <p className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wide">{c.emailLabel}</p>
                <p className="text-[14px] font-bold text-[#0f1117] mt-0.5 group-hover:text-[#025bff] transition-colors duration-150">{c.email}</p>
              </div>
            </div>
            <div
              className="group flex items-center gap-4 p-5 bg-white rounded-2xl transition-all duration-200"
              style={{ border: "1.5px solid #e5e7eb", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#025bff")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "#e5e7eb")}
            >
              <Phone size={18} className="text-[#025bff] flex-shrink-0" strokeWidth={1.75} />
              <div>
                <p className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wide">{c.phoneLabel}</p>
                <p className="text-[14px] font-bold text-[#0f1117] mt-0.5 group-hover:text-[#025bff] transition-colors duration-150">{c.phone}</p>
                <p className="text-[11px] text-[#9ca3af] mt-0.5">{c.hours}</p>
              </div>
            </div>
          </div>
        </section>

        <div className="pb-14">
          <Link href="/" className="text-[13px] text-[#9ca3af] hover:text-[#025bff] transition-colors duration-150">
            {c.backHome}
          </Link>
        </div>

      </div>
    </main>
  );
}
