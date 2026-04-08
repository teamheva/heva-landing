"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronDown, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { localePath } from "@/lib/translations";
import { supportContent, SLUGS } from "@/lib/supportData";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function SupportCategoryPage() {
  const { lang } = useLanguage();
  const c = supportContent[lang];
  const params = useParams();
  const slug = params.slug as string;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const category = c.categories.find((cat) => cat.slug === slug);
  const supportBase = localePath("/support", lang);

  if (!category) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-[18px] font-bold text-[#0f1117] mb-4">404</p>
          <Link href={supportBase} className="text-[14px] text-[#025bff] hover:underline">
            {c.backToSupport}
          </Link>
        </div>
      </main>
    );
  }

  const Icon = category.icon;

  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <div className="pt-32 pb-8 sm:pt-40 sm:pb-10 bg-white">
        <div className="max-w-2xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <Link
              href={supportBase}
              className="inline-flex items-center gap-1.5 text-[13px] text-[#9ca3af] hover:text-[#025bff] transition-colors duration-150 mb-6"
            >
              <ArrowLeft size={14} />
              {c.backToSupport}
            </Link>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(2,91,255,0.08)" }}
              >
                <Icon size={20} className="text-[#025bff]" strokeWidth={1.75} />
              </div>
              <h1
                className="text-[1.8rem] sm:text-[2.4rem] font-bold text-[#0f1117] tracking-tight leading-[1.1]"
                style={{ fontFamily: "var(--font-dm-serif), serif" }}
              >
                {category.title}
              </h1>
            </div>
            <p className="text-[14px] text-[#6b7280] mt-2">{category.desc}</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-5 sm:px-8">

        {/* FAQ list */}
        <section className="py-4 sm:py-6">
          <div className="divide-y divide-[#f0f0f4]">
            {category.faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03, ease }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between py-4 text-left cursor-pointer group"
                  >
                    <span className={`text-[14.5px] font-semibold pr-6 transition-colors duration-150 ${isOpen ? "text-[#025bff]" : "text-[#0f1117] group-hover:text-[#025bff]"}`}>
                      {faq.q}
                    </span>
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
                      {faq.a}
                    </motion.p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>

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
          <Link href={supportBase} className="text-[13px] text-[#9ca3af] hover:text-[#025bff] transition-colors duration-150">
            {c.backToSupport}
          </Link>
        </div>

      </div>
    </main>
  );
}
