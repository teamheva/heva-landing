"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, TrendingUp, Euro, Map } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const benefits = [
  "Vali tellimused, mis sobivad sinu marsruudiga",
  "Väljamaksed iganädalaselt, otse kontole",
  "Ei mingit vahendajat ega käsitsi läbirääkimist",
  "Näe tulusaid piirkondi kaardil",
  "Tugi eesti keeles ööpäevaringselt",
];

const earningsData = [
  { day: "E", height: 60, amount: "€210" },
  { day: "T", height: 80, amount: "€285" },
  { day: "K", height: 55, amount: "€190" },
  { day: "N", height: 95, amount: "€340" },
  { day: "R", height: 100, amount: "€365" },
  { day: "L", height: 70, amount: "€250" },
  { day: "P", height: 40, amount: "€140" },
];

export default function ForDrivers() {
  return (
    <section
      id="for-drivers"
      className="py-24 sm:py-32 bg-[#0a0a0f] overflow-hidden relative"
      aria-labelledby="drivers-title"
    >
      {/* Background elements */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(2,91,255,0.12) 0%, transparent 70%)",
          transform: "translate(-30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(2,91,255,0.08) 0%, transparent 70%)",
          transform: "translate(30%, 30%)",
        }}
      />
      <div className="absolute inset-0 dot-pattern opacity-[0.12]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Earnings mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="relative order-2 lg:order-1"
            aria-hidden="true"
          >
            <div
              className="relative rounded-3xl p-6 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #141428 0%, #1a1a35 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">See nädal</p>
                  <p className="text-3xl font-bold text-white mt-1">€ 1,780</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <TrendingUp size={13} className="text-[#34d399]" />
                    <span className="text-xs font-semibold text-[#34d399]">+24% eelmisest nädalast</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#025bff]/20 flex items-center justify-center">
                  <Euro size={22} className="text-[#025bff]" />
                </div>
              </div>

              {/* Bar chart */}
              <div className="mb-6">
                <div className="flex items-end gap-2 h-[100px]">
                  {earningsData.map((d, i) => (
                    <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${d.height}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                        className="w-full rounded-lg"
                        style={{
                          background: d.height >= 90 ? "#025bff" : d.height >= 70 ? "rgba(2,91,255,0.55)" : "rgba(2,91,255,0.25)",
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 mt-1.5">
                  {earningsData.map((d) => (
                    <div key={d.day} className="flex-1 text-center text-[10px] font-medium text-gray-500">{d.day}</div>
                  ))}
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Tellimusi", value: "24" },
                  { label: "Kilomeetrid", value: "1,240" },
                  { label: "Hinne", value: "4.97 ★" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl p-3 text-center"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <p className="text-base font-bold text-white">{s.value}</p>
                    <p className="text-[10px] text-gray-500 font-medium mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Recent order */}
              <div
                className="mt-4 flex items-center justify-between p-3 rounded-xl"
                style={{ background: "rgba(2,91,255,0.12)", border: "1px solid rgba(2,91,255,0.2)" }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#025bff]/30 flex items-center justify-center">
                    <Map size={14} className="text-[#60a5fa]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Tallinn → Pärnu</p>
                    <p className="text-[10px] text-gray-500">126 km · 8 pallet</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-[#60a5fa]">€ 195</span>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-5 -right-5"
            >
              <div
                className="rounded-2xl px-4 py-3"
                style={{
                  background: "linear-gradient(135deg, #025bff, #3b82f6)",
                  boxShadow: "0 8px 24px rgba(2,91,255,0.4)",
                }}
              >
                <p className="text-[10px] font-medium text-blue-200">Väljamakse reedel</p>
                <p className="text-base font-bold text-white">€ 1,780 →</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="order-1 lg:order-2"
          >
            <motion.p variants={fadeInUp} className="text-sm font-semibold text-[#60a5fa] uppercase tracking-widest mb-3">
              Vedajatele
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              id="drivers-title"
              className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5"
            >
              Täida tühisõite.
              <br />
              <span className="text-[#60a5fa]">Teenid rohkem,</span>
              <br />
              planeerid ise.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-400 leading-relaxed mb-8 max-w-lg">
              Heva sobib professionaalsetele vedajatele, kes tahavad oma laadimist optimeerida
              ja tühisõite tasuvaks muuta — ilma vahendajate ja bürokraatiata.
            </motion.p>

            {/* Benefits */}
            <motion.ul variants={stagger} className="space-y-3.5 mb-10">
              {benefits.map((benefit) => (
                <motion.li
                  key={benefit}
                  variants={fadeInUp}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#025bff]/20 flex items-center justify-center">
                    <Check size={13} className="text-[#60a5fa]" strokeWidth={2.5} />
                  </div>
                  <span className="text-gray-300 font-medium">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              <button
                className="flex items-center gap-2 px-7 py-4 text-base font-semibold text-white rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
                aria-label="Registreeru vedajaks"
              >
                Registreeru vedajaks
                <ArrowRight size={18} />
              </button>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-sm text-gray-500 mt-4">
              Verifitseerimine võtab tavaliselt 24–48 tundi
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
