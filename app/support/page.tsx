"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search, Truck, Package, Smartphone, CreditCard,
  UserCheck, HelpCircle, Mail, Phone, ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

const content = {
  et: {
    h1: "Kuidas saame aidata?",
    searchPlaceholder: "Otsi abi siit...",
    categories: [
      { icon: Truck,      title: "Kulleritele",      desc: "Registreerimine, tellimuste haldus ja väljamaksed." },
      { icon: Package,    title: "Tellijatele",      desc: "Veotellimused, jälgimine kaardil ja arved." },
      { icon: Smartphone, title: "Rakendus",         desc: "iOS ja Android äp, tõrked ja uuendused." },
      { icon: CreditCard, title: "Arved ja maksed",  desc: "Makseviisid, arvete allalaadimine ja tagasimaksed." },
      { icon: UserCheck,  title: "Konto",            desc: "Konto loomine, dokumendid ja verifitseerimine." },
      { icon: HelpCircle, title: "Üldküsimused",     desc: "Hinnad, katvus ja muud küsimused." },
    ],
    faqs: [
      { q: "Kui kiiresti leitakse kuller?",   a: "Lähim vaba kuller reageerib tavaliselt 1–2 minuti jooksul." },
      { q: "Kuidas maksta veoteenuse eest?",  a: "Makse toimub automaatselt äpi kaudu pärast tarne lõpetamist. Aktsepteerime kõiki suuremaid kaarte." },
      { q: "Kuidas saada kulleriks?",         a: "Registreeri end äpis, laadi üles nõutud dokumendid ja läbi verifitseerimine — kuni 24 tundi." },
      { q: "Kas kaup on kindlustatud?",       a: "Jah, kõik saadetised on veo ajal kindlustatud. Täpsemad tingimused kasutustingimustes." },
    ],
    contactLabel: "Kontakt",
    emailLabel: "E-post",
    email: "tugi@heva.me",
    phoneLabel: "Telefon",
    phone: "+372 5000 0000",
    hours: "Tööpäeviti 9–18",
    backHome: "Tagasi avalehele",
  },
  en: {
    h1: "How can we help?",
    searchPlaceholder: "Search for help...",
    categories: [
      { icon: Truck,      title: "For couriers",      desc: "Registration, order management and payouts." },
      { icon: Package,    title: "For senders",       desc: "Delivery orders, real-time tracking and invoices." },
      { icon: Smartphone, title: "Application",       desc: "iOS and Android app, troubleshooting and updates." },
      { icon: CreditCard, title: "Billing & payments",desc: "Payment methods, invoices and refunds." },
      { icon: UserCheck,  title: "Account",           desc: "Account creation, documents and verification." },
      { icon: HelpCircle, title: "General",           desc: "Pricing, coverage and other questions." },
    ],
    faqs: [
      { q: "How quickly is a courier found?",  a: "The nearest available courier typically responds within 1–2 minutes." },
      { q: "How do I pay for the delivery?",   a: "Payment is processed automatically through the app after delivery. We accept all major cards." },
      { q: "How do I become a courier?",       a: "Register in the app, upload the required documents and complete verification — up to 24 hours." },
      { q: "Is the cargo insured?",            a: "Yes, all shipments are insured during transit. See our terms of service for details." },
    ],
    contactLabel: "Contact",
    emailLabel: "Email",
    email: "support@heva.me",
    phoneLabel: "Phone",
    phone: "+372 5000 0000",
    hours: "Weekdays 9–18",
    backHome: "Back to home",
  },
};

export default function SupportPage() {
  const { lang } = useLanguage();
  const c = content[lang];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white">

      {/* Hero — white background */}
      <div className="pt-32 pb-12 sm:pt-40 sm:pb-14 bg-white">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="text-[2.2rem] sm:text-[3rem] font-bold text-[#0f1117] tracking-tight leading-[1.1] mb-7"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            {c.h1}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="relative"
          >
            <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
            <input
              type="text"
              placeholder={c.searchPlaceholder}
              className="w-full pl-11 pr-5 py-4 rounded-2xl text-[15px] text-[#0f1117] placeholder-[#9ca3af] bg-white outline-none focus:border-[#025bff] transition-colors duration-150"
              style={{
                border: "1.5px solid #d1d5db",
                boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
              }}
              onFocus={e => (e.currentTarget.style.borderColor = "#025bff")}
              onBlur={e => (e.currentTarget.style.borderColor = "#d1d5db")}
            />
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Categories */}
        <section className="py-10 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {c.categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.a
                  key={cat.title}
                  href="#"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  className="group flex items-start gap-4 p-5 bg-white rounded-2xl hover:bg-[#fafbff] transition-all duration-200 cursor-pointer"
                  style={{
                    border: "1.5px solid #e5e7eb",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "#025bff")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "#e5e7eb")}
                >
                  <Icon size={18} className="text-[#025bff] mt-0.5 flex-shrink-0" strokeWidth={1.75} />
                  <div className="min-w-0">
                    <p className="text-[14px] font-bold text-[#0f1117] mb-1 group-hover:text-[#025bff] transition-colors duration-150">{cat.title}</p>
                    <p className="text-[12.5px] text-[#6b7280] leading-relaxed">{cat.desc}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 sm:py-12">
          <div className="divide-y divide-[#f0f0f4]">
            {c.faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-4 text-left cursor-pointer group"
                >
                  <span className="text-[14.5px] font-semibold text-[#0f1117] pr-6 group-hover:text-[#025bff] transition-colors duration-150">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-[#9ca3af] flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180 text-[#025bff]" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <p className="text-[13.5px] text-[#6b7280] leading-relaxed pb-4">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="py-10 sm:py-12">
          <p className="text-[13px] font-semibold text-[#0f1117] mb-4">{c.contactLabel}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={`mailto:${c.email}`}
              className="group flex items-center gap-4 p-5 bg-white rounded-2xl transition-all duration-200 cursor-pointer"
              style={{ border: "1.5px solid #e5e7eb", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#025bff")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "#e5e7eb")}
            >
              <Mail size={18} className="text-[#025bff] flex-shrink-0" strokeWidth={1.75} />
              <div>
                <p className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wide">{c.emailLabel}</p>
                <p className="text-[14px] font-bold text-[#0f1117] mt-0.5 group-hover:text-[#025bff] transition-colors duration-150">{c.email}</p>
              </div>
            </a>
            <a
              href={`tel:${c.phone.replace(/\s/g, "")}`}
              className="group flex items-center gap-4 p-5 bg-white rounded-2xl transition-all duration-200 cursor-pointer"
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
            </a>
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
