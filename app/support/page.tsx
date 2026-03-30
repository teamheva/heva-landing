"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search, Truck, Package, Smartphone, CreditCard,
  UserCheck, HelpCircle, ArrowRight, Mail, Phone,
  Headphones, ChevronDown, ChevronUp,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

const content = {
  et: {
    eyebrow: "Klienditugi",
    h1: "Kuidas saame aidata?",
    searchPlaceholder: "Otsi abi siit...",
    categoriesTitle: "Vali teema",
    categories: [
      {
        icon: Truck,
        title: "Kulleritele",
        desc: "Registreerimine, tellimuste haldus, väljamaksed ja kontoga seotud küsimused.",
        color: "#025bff",
        bg: "#e8f0ff",
      },
      {
        icon: Package,
        title: "Tellijatele",
        desc: "Veotellimused, jälgimine kaardil, arved ja tarne info.",
        color: "#8b5cf6",
        bg: "#f3f0ff",
      },
      {
        icon: Smartphone,
        title: "Rakendus",
        desc: "iOS ja Android äpi kasutamine, tõrked ja uuendused.",
        color: "#0891b2",
        bg: "#e0f5ff",
      },
      {
        icon: CreditCard,
        title: "Arved ja maksed",
        desc: "Maksmise viisid, arvete allalaadimine, tagasimaksed.",
        color: "#059669",
        bg: "#dcfce7",
      },
      {
        icon: UserCheck,
        title: "Konto ja verifitseerimine",
        desc: "Konto loomine, dokumendid, verifitseerimine ja turvalisus.",
        color: "#d97706",
        bg: "#fef3c7",
      },
      {
        icon: HelpCircle,
        title: "Üldküsimused",
        desc: "Teenuse tingimused, hinnakiri, katvus ja muu info.",
        color: "#6b7280",
        bg: "#f3f4f6",
      },
    ],
    faqTitle: "Korduma kippuvad küsimused",
    faqs: [
      {
        q: "Kui kiiresti leitakse kuller?",
        a: "Lähim vaba kuller reageerib tavaliselt 1–2 minuti jooksul. Kõige kiirema vastuse tagab tellimuse esitamine tööpäeval tippajal.",
      },
      {
        q: "Kuidas maksta veoteenuse eest?",
        a: "Makse toimub automaatselt äpi kaudu pärast tarne lõpetamist. Aktsepteerime kõiki suuremaid krediit- ja deebetkaarte.",
      },
      {
        q: "Kuidas saada kulleriks?",
        a: "Registreeri end kulleri profiilina äpis, laadi üles nõutud dokumendid ja läbi verifitseerimine. Protsess võtab kuni 24 tundi.",
      },
      {
        q: "Kas kaup on kindlustatud?",
        a: "Jah, kõik saadetised on veo ajal kindlustatud. Kindlustuse täpsemad tingimused on saadaval meie kasutustingimustes.",
      },
    ],
    contactTitle: "Võta meiega ühendust",
    contactSub: "Meeskond vastab tööpäeviti kl 9–18.",
    emailLabel: "E-post",
    email: "tugi@heva.me",
    phoneLabel: "Telefon",
    phone: "+372 5000 0000",
    responseTime: "Vastame ~2 tunni jooksul",
    backHome: "← Tagasi avaleht",
  },
  en: {
    eyebrow: "Customer Support",
    h1: "How can we help?",
    searchPlaceholder: "Search for help here...",
    categoriesTitle: "Choose a topic",
    categories: [
      {
        icon: Truck,
        title: "For couriers",
        desc: "Registration, order management, payouts and account questions.",
        color: "#025bff",
        bg: "#e8f0ff",
      },
      {
        icon: Package,
        title: "For senders",
        desc: "Delivery orders, real-time tracking, invoices and delivery info.",
        color: "#8b5cf6",
        bg: "#f3f0ff",
      },
      {
        icon: Smartphone,
        title: "Application",
        desc: "Using the iOS and Android app, troubleshooting and updates.",
        color: "#0891b2",
        bg: "#e0f5ff",
      },
      {
        icon: CreditCard,
        title: "Billing & payments",
        desc: "Payment methods, downloading invoices, refunds.",
        color: "#059669",
        bg: "#dcfce7",
      },
      {
        icon: UserCheck,
        title: "Account & verification",
        desc: "Account creation, documents, verification and security.",
        color: "#d97706",
        bg: "#fef3c7",
      },
      {
        icon: HelpCircle,
        title: "General questions",
        desc: "Terms of service, pricing, coverage and other info.",
        color: "#6b7280",
        bg: "#f3f4f6",
      },
    ],
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        q: "How quickly is a courier found?",
        a: "The nearest available courier typically responds within 1–2 minutes. The fastest response is guaranteed on weekdays during peak hours.",
      },
      {
        q: "How do I pay for the delivery?",
        a: "Payment is processed automatically through the app after the delivery is completed. We accept all major credit and debit cards.",
      },
      {
        q: "How do I become a courier?",
        a: "Register as a courier in the app, upload the required documents and go through verification. The process takes up to 24 hours.",
      },
      {
        q: "Is the cargo insured?",
        a: "Yes, all shipments are insured during transit. Detailed insurance terms are available in our terms of service.",
      },
    ],
    contactTitle: "Get in touch",
    contactSub: "Our team responds on weekdays 9–18.",
    emailLabel: "Email",
    email: "support@heva.me",
    phoneLabel: "Phone",
    phone: "+372 5000 0000",
    responseTime: "We reply within ~2 hours",
    backHome: "← Back to home",
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export default function SupportPage() {
  const { lang } = useLanguage();
  const c = content[lang];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#f7f8fc]">
      {/* Hero area */}
      <div
        className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0a0f1e 0%, #0d1535 50%, #0a0a0f 100%)" }}
      >
        <div className="absolute inset-0 dot-pattern opacity-[0.08]" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(2,91,255,0.18) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="flex items-center justify-center gap-2 mb-5"
          >
            <div className="w-9 h-9 rounded-xl bg-[#025bff]/20 flex items-center justify-center">
              <Headphones size={18} className="text-[#60a5fa]" />
            </div>
            <span className="text-[13px] font-semibold text-[#60a5fa] uppercase tracking-widest">{c.eyebrow}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="text-[2.4rem] sm:text-[3.2rem] font-bold text-white tracking-tight leading-[1.1] mb-8"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            {c.h1}
          </motion.h1>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="relative max-w-xl mx-auto"
          >
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b7280]" />
              <input
                type="text"
                placeholder={c.searchPlaceholder}
                className="w-full pl-12 pr-5 py-4 rounded-2xl text-[15px] text-[#0f1117] placeholder-[#9ca3af] outline-none transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.97)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.2), 0 1px 4px rgba(0,0,0,0.1)",
                  border: "1.5px solid transparent",
                }}
                onFocus={e => (e.currentTarget.style.borderColor = "#025bff")}
                onBlur={e => (e.currentTarget.style.borderColor = "transparent")}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-[11px] font-bold text-[#9ca3af] uppercase tracking-[0.14em] mb-6"
        >
          {c.categoriesTitle}
        </motion.p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {c.categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                variants={fadeInUp}
              >
                <a
                  href="#"
                  className="group flex flex-col gap-4 p-5 bg-white rounded-2xl border border-[#e5e7eb] hover:border-[#025bff]/30 hover:shadow-[0_8px_32px_rgba(2,91,255,0.1)] transition-all duration-200 cursor-pointer h-full"
                  style={{ textDecoration: "none" }}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: cat.bg }}
                    >
                      <Icon size={20} style={{ color: cat.color }} />
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-[#d1d5db] group-hover:text-[#025bff] group-hover:translate-x-0.5 transition-all duration-200 mt-1"
                    />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-[#0f1117] mb-1.5 group-hover:text-[#025bff] transition-colors duration-200">
                      {cat.title}
                    </h3>
                    <p className="text-[13px] text-[#6b7280] leading-relaxed">{cat.desc}</p>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* FAQ */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 pb-12 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[11px] font-bold text-[#9ca3af] uppercase tracking-[0.14em] mb-6">{c.faqTitle}</p>
          <div className="space-y-2">
            {c.faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer hover:bg-[#fafafa] transition-colors duration-150"
                >
                  <span className="text-[14.5px] font-semibold text-[#0f1117] pr-4">{faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp size={16} className="text-[#025bff] flex-shrink-0" />
                    : <ChevronDown size={16} className="text-[#9ca3af] flex-shrink-0" />
                  }
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-[13.5px] text-[#6b7280] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Contact section */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 pb-16 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0d1535 0%, #0a0a0f 100%)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="p-7 sm:p-10">
            <p className="text-[11px] font-bold text-[#60a5fa] uppercase tracking-[0.14em] mb-2">{c.contactTitle}</p>
            <p className="text-white/60 text-[13.5px] mb-8">{c.contactSub}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <a
                href={`mailto:${c.email}`}
                className="group flex items-center gap-4 p-5 rounded-2xl cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(2,91,255,0.15)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
              >
                <div className="w-11 h-11 rounded-xl bg-[#025bff]/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={19} className="text-[#60a5fa]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.1em]">{c.emailLabel}</p>
                  <p className="text-[15px] font-bold text-white mt-0.5">{c.email}</p>
                  <p className="text-[11px] text-white/40 mt-0.5">{c.responseTime}</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${c.phone.replace(/\s/g, "")}`}
                className="group flex items-center gap-4 p-5 rounded-2xl cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(2,91,255,0.15)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
              >
                <div className="w-11 h-11 rounded-xl bg-[#025bff]/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={19} className="text-[#60a5fa]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.1em]">{c.phoneLabel}</p>
                  <p className="text-[15px] font-bold text-white mt-0.5">{c.phone}</p>
                  <p className="text-[11px] text-white/40 mt-0.5">9:00–18:00</p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-[13px] text-[#6b7280] hover:text-[#025bff] transition-colors duration-150">
            {c.backHome}
          </Link>
        </div>
      </div>
    </main>
  );
}
