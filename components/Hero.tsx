"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Truck, Star } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { useEffect, useState } from "react";

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0 text-white">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none">
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
      className={`group flex items-center gap-2.5 px-3.5 py-[9px] rounded-xl transition-all duration-300 cursor-pointer hover:-translate-y-[2px]${className ? ` ${className}` : ""}`}
      style={{
        background: "linear-gradient(150deg, #1a1a2e 0%, #0f1117 100%)",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.07)",
      }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 28px rgba(2,91,255,0.32), 0 2px 12px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.07)")}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.07)")}
      aria-label={store}
    >
      {icon === "apple" ? <AppleIcon /> : <GooglePlayIcon />}
      <div className="text-left">
        <p className="text-[8px] text-white/45 font-medium leading-none tracking-[0.1em] uppercase">{label}</p>
        <p className="text-[12px] font-bold text-white leading-tight mt-[2px]">{store}</p>
      </div>
    </a>
  );
}

const LAUNCH_MS = new Date("2026-03-20T00:00:00Z").getTime();

function computeStats() {
  const now = Date.now();
  const elapsed = Math.max(0, now - LAUNCH_MS);
  const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
  const thirtyMinIntervals = Math.floor(elapsed / (1000 * 60 * 30));
  return { drivers: 10 + days, trips: thirtyMinIntervals };
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.10 } },
};

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;
  const [stats, setStats] = useState({ drivers: 10, trips: 0 });

  useEffect(() => {
    setStats(computeStats());
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
      aria-label={h.h1Line1}
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-hero-bg" />
      <div className="gradient-mesh" style={{
        WebkitMaskImage: "linear-gradient(to bottom, black 35%, transparent 75%)",
        maskImage: "linear-gradient(to bottom, black 35%, transparent 75%)",
      }} />
      <div
        className="absolute inset-0 dot-pattern opacity-40"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 88%)",
          maskImage: "linear-gradient(to bottom, black 55%, transparent 88%)",
        }}
      />

      {/* Decorative blobs */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.035] pointer-events-none"
        style={{ background: "radial-gradient(circle, #025bff 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #025bff 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left - Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-[40px] sm:text-[56px] lg:text-[68px] leading-[1.0] tracking-[-0.03em] text-[#0f1117] mb-7"
              style={{ fontFamily: "var(--font-dm-serif), serif" }}
            >
              {h.h1Line1}
              <br />
              <span className="text-[#025bff]">{h.h1Highlight}</span> {h.h1Line2}
              <br />
              {h.h1Line3}
            </motion.h1>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-3 mb-7 w-full sm:w-auto">
              {/* Row 1: action buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
                <Link
                  href="/klientidele"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-[10px] text-[13.5px] font-bold text-white rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #025bff 0%, #1a71ff 100%)",
                    boxShadow: "0 4px 20px rgba(2,91,255,0.38), 0 1px 3px rgba(0,0,0,0.12)",
                  }}
                  aria-label={h.ctaOrder}
                >
                  {h.ctaOrder}
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/kulleritele"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-[10px] text-[13.5px] font-bold text-[#0f1117] rounded-full border border-[#d1d5db] hover:border-[#025bff] hover:text-[#025bff] transition-all duration-200 cursor-pointer bg-white/80 hover:-translate-y-0.5"
                  style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
                  aria-label={h.ctaDriver}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(2,91,255,0.18), 0 1px 4px rgba(0,0,0,0.06)")}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)")}
                >
                  <Truck size={15} />
                  {h.ctaDriver}
                </Link>
              </div>

              {/* Row 2: store buttons */}
              <div className="flex items-center gap-2">
                <StoreButton label={h.downloadOn} store="App Store" icon="apple" className="flex-1 sm:flex-none" />
                <StoreButton label={h.availableOn} store="Google Play" icon="play" className="flex-1 sm:flex-none" />
              </div>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["MK", "LT", "AV", "KP"].map((initials, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: `hsl(${220 + i * 12}, 80%, ${45 + i * 5}%)` }}
                    aria-hidden="true"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-[#025bff] text-[#025bff]" />
                  ))}
                </div>
                <span className="text-sm font-medium text-[#6b7280]">
                  <strong className="text-[#0f1117]">4.9</strong> · 200+ {h.reviews}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - App mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="relative flex justify-center lg:justify-center"
            aria-hidden="true"
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-[38px] blur-3xl opacity-20 scale-95"
                style={{ background: "linear-gradient(135deg, #025bff, #4d8fff)" }}
              />
              <div
                className="float-card relative w-[248px] sm:w-[265px] h-[498px] sm:h-[530px] rounded-[38px] bg-white overflow-hidden"
                style={{
                  boxShadow: "0 0 0 10px #1c1c2e, 0 0 0 12px #2a2a40, 0 40px 80px rgba(0,0,0,0.28), 0 8px 24px rgba(0,0,0,0.12)",
                }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-6 bg-[#1c1c2e] rounded-b-[18px] z-20" />
                <div className="flex justify-between items-center px-7 pt-10 pb-2">
                  <span className="text-[11px] font-semibold text-[#0f1117]">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="flex gap-0.5 items-end h-3">
                      {[3, 5, 7, 9].map((ht, i) => (
                        <div key={i} className="w-1 rounded-sm bg-[#0f1117]" style={{ height: ht }} />
                      ))}
                    </div>
                    <div className="w-4 h-2.5 rounded-sm border border-[#0f1117] relative">
                      <div className="absolute left-0.5 top-0.5 bottom-0.5 w-3/4 bg-[#025bff] rounded-sm" />
                    </div>
                  </div>
                </div>
                <div className="px-5 pb-3">
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <p className="text-[10px] font-medium text-[#6b7280]">{h.mockupWelcome}</p>
                      <p className="text-sm font-bold text-[#0f1117]">Marko Kask</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#025bff] flex items-center justify-center">
                      <span className="text-[11px] font-bold text-white">MK</span>
                    </div>
                  </div>
                </div>
                <div className="mx-4 rounded-2xl overflow-hidden h-[165px] sm:h-[180px] relative bg-[#e8f0ff]">
                  <div className="absolute inset-0">
                    <div className="absolute top-1/3 left-0 right-0 h-px bg-[#c5d8ff] opacity-80" />
                    <div className="absolute top-2/3 left-0 right-0 h-px bg-[#c5d8ff] opacity-60" />
                    <div className="absolute left-1/3 top-0 bottom-0 w-px bg-[#c5d8ff] opacity-80" />
                    <div className="absolute left-2/3 top-0 bottom-0 w-px bg-[#c5d8ff] opacity-60" />
                    <div className="absolute top-[45%] left-0 right-0 h-[3px] bg-white opacity-90 rounded-full" />
                    <div className="absolute left-[48%] top-0 bottom-0 w-[3px] bg-white opacity-90 rounded-full" />
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 260 200">
                      <path d="M 40 140 Q 70 100 130 90 Q 180 80 220 60" stroke="#025bff" strokeWidth="3" fill="none" strokeDasharray="6 3" strokeLinecap="round" />
                    </svg>
                    <div className="absolute left-[12px] bottom-[45px] flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-[#025bff] border-2 border-white shadow-md" />
                      <div className="w-0.5 h-2 bg-[#025bff]" />
                    </div>
                    <div className="absolute right-[20px] top-[35px]">
                      <MapPin size={18} className="text-[#025bff] fill-[#025bff]" strokeWidth={0} />
                    </div>
                    <div
                      className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-lg"
                      style={{ left: "42%", top: "36%", animation: "truckMove 2.5s ease-in-out alternate infinite" }}
                    >
                      <Truck size={16} className="text-[#025bff]" />
                    </div>
                  </div>
                </div>
                <div className="mx-4 mt-3">
                  <div className="bg-[#025bff] rounded-2xl px-4 py-3 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-medium text-blue-200">{h.mockupDriverEnRoute}</p>
                      <p className="text-sm font-bold text-white">{h.mockupDriverEta}</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-white">AV</span>
                    </div>
                  </div>
                </div>
                <div className="mx-4 mt-3 grid grid-cols-2 gap-2">
                  <div className="bg-[#f7f8fc] rounded-xl p-3">
                    <p className="text-[9px] text-[#6b7280] font-medium">{h.mockupPickup}</p>
                    <p className="text-xs font-bold text-[#0f1117] mt-0.5 truncate">{h.mockupPickupValue}</p>
                  </div>
                  <div className="bg-[#f7f8fc] rounded-xl p-3">
                    <p className="text-[9px] text-[#6b7280] font-medium">{h.mockupDropoff}</p>
                    <p className="text-xs font-bold text-[#0f1117] mt-0.5 truncate">{h.mockupDropoffValue}</p>
                  </div>
                </div>
                <div className="mx-4 mt-3">
                  <div className="h-1 bg-[#f7f8fc] rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-[#025bff] rounded-full" />
                  </div>
                  <p className="text-center text-[10px] text-[#6b7280] mt-1.5 font-medium">{h.mockupTimeLeft}</p>
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#1c1c2e] rounded-full" />
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="float-card-slow absolute -right-4 sm:-right-8 top-16 glass-card rounded-2xl px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#e8f0ff] flex items-center justify-center">
                    <Truck size={15} className="text-[#025bff]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-[#6b7280]">{h.mockupNearbyLabel}</p>
                    <p className="text-sm font-bold text-[#0f1117]">{h.mockupNearbyCount}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="float-card absolute -left-4 sm:-left-12 bottom-28 glass-card rounded-2xl px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#dcfce7] flex items-center justify-center">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-[#6b7280]">{h.mockupDelivered}</p>
                    <p className="text-sm font-bold text-[#0f1117]">{h.mockupDeliveredValue}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mt-14 sm:mt-16 rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.75)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.95)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.04), 0 1px 6px rgba(2,91,255,0.06)",
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#e5e7eb]/70">
            {/* Drivers - live */}
            <div className="flex flex-col items-center sm:items-start px-4 py-4 sm:px-6 sm:py-5">
              <div className="flex items-end gap-2 sm:gap-2.5 mb-1.5">
                <span className="text-[1.45rem] sm:text-[1.9rem] font-bold text-[#0f1117] tabular-nums leading-none">{stats.drivers}</span>
                <span className="flex items-center gap-1 px-2 py-[3px] rounded-full text-[10px] font-bold text-[#10b981] mb-[3px]"
                  style={{ background: "rgba(16,185,129,0.1)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] inline-block" style={{ animation: "blink 2s ease-in-out infinite" }} />
                  Live
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-[#9ca3af] font-semibold uppercase tracking-wider">{h.statsDriversLabel}</p>
            </div>
            {/* Response */}
            <div className="flex flex-col items-center sm:items-start px-4 py-4 sm:px-6 sm:py-5">
              <span className="text-[1.45rem] sm:text-[1.9rem] font-bold text-[#0f1117] leading-none mb-1.5">{h.statsResponseValue}</span>
              <p className="text-[10px] sm:text-[11px] text-[#9ca3af] font-semibold uppercase tracking-wider">{h.statsResponseLabel}</p>
            </div>
            {/* Trips - live */}
            <div className="flex flex-col items-center sm:items-start px-4 py-4 sm:px-6 sm:py-5">
              <div className="flex items-end gap-2 sm:gap-2.5 mb-1.5">
                <span className="text-[1.45rem] sm:text-[1.9rem] font-bold text-[#0f1117] tabular-nums leading-none">{stats.trips.toLocaleString("et-EE")}</span>
                <span className="flex items-center gap-1 px-2 py-[3px] rounded-full text-[10px] font-bold text-[#10b981] mb-[3px]"
                  style={{ background: "rgba(16,185,129,0.1)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] inline-block" style={{ animation: "blink 2s ease-in-out infinite" }} />
                  Live
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-[#9ca3af] font-semibold uppercase tracking-wider">{h.statsTripsLabel}</p>
            </div>
            {/* Coverage */}
            <div className="flex flex-col items-center sm:items-start px-4 py-4 sm:px-6 sm:py-5">
              <span className="text-[1.45rem] sm:text-[1.9rem] font-bold text-[#0f1117] leading-none mb-1.5 truncate">{h.statsCoverageValue}</span>
              <p className="text-[10px] sm:text-[11px] text-[#9ca3af] font-semibold uppercase tracking-wider">{h.statsCoverageLabel}</p>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
