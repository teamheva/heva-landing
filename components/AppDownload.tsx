"use client";

import { m as motion } from "framer-motion";
import { Truck, MapPin, Package } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0 text-white">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" fill="none">
      <path d="M3.18 1.03C2.47 1.42 2 2.17 2 3.06v17.88c0 .89.47 1.64 1.18 2.03l.1.06 10.02-10.02v-.23L3.28.97l-.1.06z" fill="#4FC3F7" />
      <path d="M16.64 16.36l-3.34-3.34v-.24l3.34-3.34.07.04 3.96 2.25c1.13.64 1.13 1.69 0 2.34l-3.96 2.25-.07.04z" fill="#FFD54F" />
      <path d="M16.71 16.32L13.3 12.9 3.18 23.01c.37.4.94.44 1.59.08l11.94-6.77" fill="#F48FB1" />
      <path d="M16.71 7.68L4.77.91C4.12.55 3.55.59 3.18.99l10.12 10.11 3.41-3.42z" fill="#69F0AE" />
    </svg>
  );
}

const APP_STORE_URL = "https://apps.apple.com/ee/app/heva-client/id6762511309";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=me.heva.customer&pcampaignid=web_share";

function StoreButton({ label, store, icon, className }: { label: string; store: string; icon: "apple" | "play"; className?: string }) {
  return (
    <a
      href={icon === "apple" ? APP_STORE_URL : GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3.5 px-5 py-[14px] rounded-2xl transition-all duration-300 cursor-pointer hover:-translate-y-[2px]${className ? ` ${className}` : ""}`}
      style={{
        background: "linear-gradient(150deg, #1a1a2e 0%, #0f1117 100%)",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.07)",
      }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 28px rgba(2,91,255,0.32), 0 2px 12px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.07)")}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.07)")}
      aria-label={store}
    >
      {icon === "apple" ? <AppleIcon /> : <GooglePlayIcon />}
      <div className="text-left">
        <p className="text-[9px] text-white/45 font-medium leading-none tracking-[0.1em] uppercase">{label}</p>
        <p className="text-[15px] font-bold text-white leading-tight mt-[3px]">{store}</p>
      </div>
    </a>
  );
}

export default function AppDownload() {
  const { t } = useLanguage();
  const a = t.appDownload;

  return (
    <section
      id="app"
      className="py-16 sm:py-28 relative overflow-hidden"
      aria-labelledby="app-title"
      style={{ background: "linear-gradient(180deg, #e8f0ff 0%, #ffffff 60%)" }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(2,91,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.p variants={fadeInUp} className="text-sm font-semibold text-[#025bff] uppercase tracking-widest mb-3">
            {a.eyebrow}
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            id="app-title"
            className="text-4xl sm:text-5xl font-bold text-[#0f1117] tracking-tight mb-4"
          >
            {a.h2}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-[#6b7280] max-w-md mx-auto mb-8">
            {a.sub}
          </motion.p>

          {/* Download buttons */}
          <motion.div variants={fadeInUp} className="flex gap-3 mb-4 justify-center">
            <StoreButton label={a.downloadOn} store="App Store" icon="apple" />
            <StoreButton label={a.availableOn} store="Google Play" icon="play" />
          </motion.div>

        </motion.div>

        {/* Phone mockups */}
        <div className="flex justify-center items-end gap-6 sm:gap-10">
          {/* Left phone */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -4 }}
            whileInView={{ opacity: 1, y: 0, rotate: -4 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="float-card hidden sm:block"
            aria-hidden="true"
          >
            <div
              className="w-[200px] h-[400px] rounded-[36px] bg-white overflow-hidden relative"
              style={{
                boxShadow: "0 0 0 8px #1c1c2e, 0 0 0 10px #2a2a40, 0 32px 64px rgba(0,0,0,0.22)",
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#1c1c2e] rounded-b-[14px] z-10" />
              <div className="pt-8 px-4">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-xs font-bold text-[#0f1117]">{a.mockupMyOrders}</p>
                  <div className="w-6 h-6 rounded-full bg-[#025bff] flex items-center justify-center">
                    <span className="text-[8px] font-bold text-white">3</span>
                  </div>
                </div>
                {[
                  { from: a.mockupLeftOrder1From, to: a.mockupLeftOrder1To, status: a.mockupStatusEnRoute, color: "#025bff" },
                  { from: a.mockupLeftOrder2From, to: a.mockupLeftOrder2To, status: a.mockupStatusDone, color: "#10b981" },
                ].map((order, i) => (
                  <div key={i} className="mb-3 bg-[#f7f8fc] rounded-xl p-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-[10px] font-bold text-[#0f1117]">{order.from} → {order.to}</p>
                        <p className="text-[9px] text-[#6b7280] mt-0.5">14:00</p>
                      </div>
                      <span
                        className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                        style={{ background: `${order.color}20`, color: order.color }}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
                {/* Map preview */}
                <div className="bg-[#e8f0ff] rounded-xl h-[120px] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-white/40" />
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/40" />
                  </div>
                  <Truck size={24} className="text-[#025bff] relative z-10" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center phone (main) */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="float-card-slow relative z-10"
            aria-hidden="true"
          >
            <div
              className="w-[240px] sm:w-[260px] h-[480px] sm:h-[520px] rounded-[44px] bg-white overflow-hidden relative"
              style={{
                boxShadow: "0 0 0 10px #1c1c2e, 0 0 0 12px #2a2a40, 0 48px 96px rgba(0,0,0,0.3)",
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-7 bg-[#1c1c2e] rounded-b-[20px] z-10" />
              {/* App screen */}
              <div className="h-full bg-[#025bff] flex flex-col">
                {/* Top */}
                <div className="px-5 pt-10 pb-4">
                  <p className="text-xs font-medium text-blue-200 mt-2">{a.mockupHello}</p>
                  <p className="text-xl font-bold text-white mt-1">{a.mockupOrderTitle}</p>
                </div>
                {/* Form card */}
                <div className="mx-3 bg-white rounded-3xl p-4 flex-1">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5 p-3 bg-[#f7f8fc] rounded-xl">
                      <MapPin size={14} className="text-[#025bff] flex-shrink-0" />
                      <div>
                        <p className="text-[9px] text-[#6b7280] font-medium">{a.mockupPickup}</p>
                        <p className="text-xs font-semibold text-[#0f1117]">{a.mockupCenterFrom}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 p-3 bg-[#f7f8fc] rounded-xl">
                      <MapPin size={14} className="text-[#ef4444] flex-shrink-0" />
                      <div>
                        <p className="text-[9px] text-[#6b7280] font-medium">{a.mockupDropoff}</p>
                        <p className="text-xs font-semibold text-[#0f1117]">{a.mockupCenterTo}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 p-3 bg-[#f7f8fc] rounded-xl">
                      <Package size={14} className="text-[#6b7280] flex-shrink-0" />
                      <div>
                        <p className="text-[9px] text-[#6b7280] font-medium">{a.mockupCargo}</p>
                        <p className="text-xs font-semibold text-[#0f1117]">{a.mockupCenterCargo}</p>
                      </div>
                    </div>
                    {/* Price box */}
                    <div className="bg-[#e8f0ff] rounded-xl p-3 flex justify-between items-center">
                      <span className="text-xs text-[#6b7280] font-medium">{a.mockupPrice}</span>
                      <span className="text-lg font-bold text-[#025bff]">{a.mockupCenterPrice}</span>
                    </div>
                    {/* CTA button */}
                    <div className="bg-[#025bff] rounded-2xl p-3.5 text-center">
                      <span className="text-sm font-bold text-white">{a.mockupOrderDriver}</span>
                    </div>
                  </div>
                  {/* Bottom hint */}
                  <p className="text-center text-[9px] text-[#6b7280] mt-3">
                    {a.mockupFindTime}
                  </p>
                </div>
                {/* Bottom nav */}
                <div className="bg-white mx-3 mb-3 rounded-2xl px-2 py-2 flex justify-around">
                  {[a.mockupHome, a.mockupMyTrips, a.mockupAccount].map((item, i) => (
                    <div key={item} className="flex flex-col items-center gap-1">
                      <div className={`w-4 h-1 rounded-full ${i === 0 ? "bg-[#025bff]" : "bg-transparent"}`} />
                      <span className={`text-[9px] font-semibold ${i === 0 ? "text-[#025bff]" : "text-[#6b7280]"}`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right phone */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 4 }}
            whileInView={{ opacity: 1, y: 0, rotate: 4 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="float-card hidden sm:block"
            aria-hidden="true"
          >
            <div
              className="w-[200px] h-[400px] rounded-[36px] bg-white overflow-hidden relative"
              style={{
                boxShadow: "0 0 0 8px #1c1c2e, 0 0 0 10px #2a2a40, 0 32px 64px rgba(0,0,0,0.22)",
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#1c1c2e] rounded-b-[14px] z-10" />
              <div className="pt-8 px-4">
                <p className="text-xs font-bold text-[#0f1117] mb-4">{a.mockupDriverView}</p>
                {/* Earnings summary */}
                <div className="bg-[#025bff] rounded-2xl p-4 mb-3 text-white">
                  <p className="text-[10px] opacity-70">{a.mockupEarningsToday}</p>
                  <p className="text-2xl font-bold">€ 285</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                        <div className="h-full bg-white rounded-full" style={{ width: i < 3 ? "100%" : "60%" }} />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Available order */}
                <div className="bg-[#f7f8fc] rounded-xl p-3 mb-3">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-[10px] font-bold text-[#0f1117]">{a.mockupNewOrder}</p>
                    <span className="text-[9px] font-bold text-[#025bff] bg-[#e8f0ff] px-2 py-0.5 rounded-full">{a.mockupRightOrderPrice}</span>
                  </div>
                  <p className="text-[9px] text-[#6b7280]">{a.mockupRightOrderRoute}</p>
                  <div className="flex gap-1.5 mt-2">
                    <div className="flex-1 py-1.5 bg-[#025bff] rounded-lg text-center text-[9px] font-bold text-white">{a.mockupAccept}</div>
                    <div className="flex-1 py-1.5 bg-[#f0f0f0] rounded-lg text-center text-[9px] font-bold text-[#6b7280]">{a.mockupDecline}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#10b981]" />
                  <p className="text-[10px] text-[#6b7280] font-medium">{a.mockupOnline}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
