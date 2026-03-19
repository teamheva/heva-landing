"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Truck, Star } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const stats = [
  { value: "500+", label: "Aktiivset vedajat" },
  { value: "15 min", label: "Keskmine reageerimisaeg" },
  { value: "98%", label: "Tellimusi täidetud" },
  { value: "Üle-Eestiline", label: "Katvus" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
      aria-label="Peakangelane"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-hero-bg" />
      <div className="gradient-mesh" />
      <div className="absolute inset-0 dot-pattern opacity-40" />

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

          {/* Left — Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg mb-7" style={{ border: "1px solid rgba(2,91,255,0.2)", background: "rgba(2,91,255,0.04)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#025bff]" style={{ animation: "blink 2s ease-in-out infinite" }} />
                <span className="text-[11px] font-semibold text-[#025bff] tracking-[0.08em] uppercase">
                  Nüüd saadaval Eestis
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-[56px] sm:text-[72px] lg:text-[84px] leading-[1.0] tracking-[-0.03em] text-[#0f1117] mb-6"
              style={{ fontFamily: "var(--font-dm-serif), serif" }}
            >
              Kaup kohale.
              <br />
              <span className="text-[#025bff]">Lihtsalt</span> ja
              <br />
              kiiresti.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-[#6b7280] leading-relaxed max-w-[480px] mb-8"
            >
              Heva ühendab sind lähima vaba vedajaga minutitega.
              <br className="hidden sm:block" />
              Kaubasaatjatele ja vedajatele — üks äpp, null bürokraatiat.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              <button
                className="btn-primary flex items-center gap-2 px-7 py-4 text-base font-semibold text-white rounded-full"
                aria-label="Telli vedu"
              >
                Telli vedu
                <ArrowRight size={18} />
              </button>
              <button
                className="flex items-center gap-2 px-7 py-4 text-base font-semibold text-[#0f1117] rounded-full border border-[#e5e7eb] hover:border-[#025bff] hover:text-[#025bff] transition-all duration-200 cursor-pointer bg-white/80"
                aria-label="Saa vedajaks"
              >
                <Truck size={18} />
                Saa vedajaks
              </button>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mt-8">
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
                  <strong className="text-[#0f1117]">4.9</strong> · 200+ arvustust
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — App mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="relative flex justify-center lg:justify-end"
            aria-hidden="true"
          >
            <div className="relative">
              {/* Glow behind phone */}
              <div
                className="absolute inset-0 rounded-[48px] blur-3xl opacity-20 scale-95"
                style={{ background: "linear-gradient(135deg, #025bff, #4d8fff)" }}
              />

              {/* Phone shell */}
              <div
                className="float-card relative w-[280px] sm:w-[300px] h-[560px] sm:h-[600px] rounded-[44px] bg-white overflow-hidden"
                style={{
                  boxShadow:
                    "0 0 0 10px #1c1c2e, 0 0 0 12px #2a2a40, 0 40px 80px rgba(0,0,0,0.28), 0 8px 24px rgba(0,0,0,0.12)",
                }}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[110px] h-7 bg-[#1c1c2e] rounded-b-[20px] z-20" />

                {/* Status bar */}
                <div className="flex justify-between items-center px-7 pt-10 pb-2">
                  <span className="text-[11px] font-semibold text-[#0f1117]">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="flex gap-0.5 items-end h-3">
                      {[3, 5, 7, 9].map((h, i) => (
                        <div key={i} className="w-1 rounded-sm bg-[#0f1117]" style={{ height: h }} />
                      ))}
                    </div>
                    <div className="w-4 h-2.5 rounded-sm border border-[#0f1117] relative">
                      <div className="absolute left-0.5 top-0.5 bottom-0.5 w-3/4 bg-[#025bff] rounded-sm" />
                    </div>
                  </div>
                </div>

                {/* App header */}
                <div className="px-5 pb-3">
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <p className="text-[10px] font-medium text-[#6b7280]">Tere tulemast</p>
                      <p className="text-sm font-bold text-[#0f1117]">Marko Kask</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#025bff] flex items-center justify-center">
                      <span className="text-[11px] font-bold text-white">MK</span>
                    </div>
                  </div>
                </div>

                {/* Map area */}
                <div className="mx-4 rounded-2xl overflow-hidden h-[200px] sm:h-[220px] relative bg-[#e8f0ff]">
                  {/* Fake map grid */}
                  <div className="absolute inset-0">
                    {/* Streets */}
                    <div className="absolute top-1/3 left-0 right-0 h-px bg-[#c5d8ff] opacity-80" />
                    <div className="absolute top-2/3 left-0 right-0 h-px bg-[#c5d8ff] opacity-60" />
                    <div className="absolute left-1/3 top-0 bottom-0 w-px bg-[#c5d8ff] opacity-80" />
                    <div className="absolute left-2/3 top-0 bottom-0 w-px bg-[#c5d8ff] opacity-60" />
                    <div className="absolute top-1/6 left-0 right-0 h-px bg-[#d5e4ff] opacity-50" />
                    <div className="absolute left-1/6 top-0 bottom-0 w-px bg-[#d5e4ff] opacity-50" />
                    {/* Main roads */}
                    <div className="absolute top-[45%] left-0 right-0 h-[3px] bg-white opacity-90 rounded-full" />
                    <div className="absolute left-[48%] top-0 bottom-0 w-[3px] bg-white opacity-90 rounded-full" />
                    {/* Route line */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 260 200">
                      <path
                        d="M 40 140 Q 70 100 130 90 Q 180 80 220 60"
                        stroke="#025bff"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray="6 3"
                        strokeLinecap="round"
                      />
                    </svg>
                    {/* Start pin */}
                    <div className="absolute left-[12px] bottom-[45px] flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-[#025bff] border-2 border-white shadow-md" />
                      <div className="w-0.5 h-2 bg-[#025bff]" />
                    </div>
                    {/* End pin */}
                    <div className="absolute right-[20px] top-[35px]">
                      <MapPin size={18} className="text-[#025bff] fill-[#025bff]" strokeWidth={0} />
                    </div>
                    {/* Truck icon */}
                    <div
                      className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-lg"
                      style={{ left: "42%", top: "36%", animation: "truckMove 2.5s ease-in-out alternate infinite" }}
                    >
                      <Truck size={16} className="text-[#025bff]" />
                    </div>
                  </div>
                </div>

                {/* Status card */}
                <div className="mx-4 mt-3">
                  <div className="bg-[#025bff] rounded-2xl px-4 py-3 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-medium text-blue-200">Vedaja on teel</p>
                      <p className="text-sm font-bold text-white">Andres V. · 8 min</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-white">AV</span>
                    </div>
                  </div>
                </div>

                {/* Quick stats */}
                <div className="mx-4 mt-3 grid grid-cols-2 gap-2">
                  <div className="bg-[#f7f8fc] rounded-xl p-3">
                    <p className="text-[9px] text-[#6b7280] font-medium">Pealelaadimiskoht</p>
                    <p className="text-xs font-bold text-[#0f1117] mt-0.5 truncate">Tallinn, Ülemiste</p>
                  </div>
                  <div className="bg-[#f7f8fc] rounded-xl p-3">
                    <p className="text-[9px] text-[#6b7280] font-medium">Mahalaadimine</p>
                    <p className="text-xs font-bold text-[#0f1117] mt-0.5 truncate">Tartu, Annelinn</p>
                  </div>
                </div>

                {/* Bottom button */}
                <div className="mx-4 mt-3">
                  <div className="h-1 bg-[#f7f8fc] rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-[#025bff] rounded-full" />
                  </div>
                  <p className="text-center text-[10px] text-[#6b7280] mt-1.5 font-medium">2 tundi 40 min jäänud</p>
                </div>

                {/* Home indicator */}
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
                    <p className="text-[10px] font-medium text-[#6b7280]">Vedajaid lähedal</p>
                    <p className="text-sm font-bold text-[#0f1117]">12 vedajat</p>
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
                    <p className="text-[10px] font-medium text-[#6b7280]">Kaup toimetatud</p>
                    <p className="text-sm font-bold text-[#0f1117]">14:32 · Tartu</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="relative border-t border-[#e5e7eb] bg-white/80 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 sm:gap-x-12">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-baseline gap-2.5">
                <span
                  className="text-xl sm:text-2xl font-bold text-[#0f1117] tracking-tight"
                  style={{ fontFamily: "var(--font-dm-serif), serif" }}
                >
                  {stat.value}
                </span>
                <span className="text-xs text-[#9ca3af] font-medium">{stat.label}</span>
                {i < stats.length - 1 && (
                  <span className="ml-4 sm:ml-8 text-[#d1d5db] select-none">·</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
