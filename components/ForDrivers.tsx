"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, TrendingUp, Euro, Map } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const earningsHeights = [60, 80, 55, 95, 100, 70, 40];

export default function ForDrivers() {
  const { t } = useLanguage();
  const d = t.forDrivers;

  return (
    <section
      id="for-drivers"
      className="py-16 sm:py-28 bg-[#0a0a0f] overflow-hidden relative"
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

          {/* Left – Earnings mockup */}
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
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{d.mockupThisWeek}</p>
                  <p className="text-3xl font-bold text-white mt-1">€ 1,780</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <TrendingUp size={13} className="text-[#34d399]" />
                    <span className="text-xs font-semibold text-[#34d399]">{d.mockupTrend}</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#025bff]/20 flex items-center justify-center">
                  <Euro size={22} className="text-[#025bff]" />
                </div>
              </div>

              {/* Bar chart */}
              <div className="mb-6">
                <div className="flex items-end gap-2 h-[100px]">
                  {earningsHeights.map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                        className="w-full rounded-lg"
                        style={{
                          background: height >= 90 ? "#025bff" : height >= 70 ? "rgba(2,91,255,0.55)" : "rgba(2,91,255,0.25)",
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 mt-1.5">
                  {d.mockupDays.map((day) => (
                    <div key={day} className="flex-1 text-center text-[10px] font-medium text-gray-500">{day}</div>
                  ))}
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: d.mockupOrders, value: "24" },
                  { label: d.mockupKm, value: "1,240" },
                  { label: d.mockupRating, value: "4.97 ★" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl p-3 text-center"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <p className="text-base font-bold text-white">{stat.value}</p>
                    <p className="text-[10px] text-gray-500 font-medium mt-0.5">{stat.label}</p>
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
              className="hidden sm:block absolute -top-5 -right-5"
            >
              <div
                className="rounded-2xl px-4 py-3"
                style={{
                  background: "linear-gradient(135deg, #025bff, #3b82f6)",
                  boxShadow: "0 8px 24px rgba(2,91,255,0.4)",
                }}
              >
                <p className="text-[10px] font-medium text-blue-200">{d.mockupPayoutLabel}</p>
                <p className="text-base font-bold text-white">€ 1,780 →</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right – Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="order-1 lg:order-2"
          >
            <motion.p variants={fadeInUp} className="text-sm font-semibold text-[#60a5fa] uppercase tracking-widest mb-3">
              {d.eyebrow}
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              id="drivers-title"
              className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5"
            >
              {d.h2Line1}
              <br />
              <span className="text-[#60a5fa]">{d.h2Highlight}</span>
              <br />
              {d.h2Line2}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-400 leading-relaxed mb-8 max-w-lg">
              {d.sub}
            </motion.p>

            {/* Benefits */}
            <motion.ul variants={stagger} className="space-y-3.5 mb-10">
              {d.benefits.map((benefit) => (
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

            {/* CTA button — prominent */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
              <button
                className="flex items-center gap-2.5 px-8 py-4 text-[15px] font-bold text-white rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #025bff 0%, #1a71ff 100%)",
                  boxShadow: "0 4px 24px rgba(2,91,255,0.45), 0 1px 4px rgba(0,0,0,0.2)",
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 36px rgba(2,91,255,0.55), 0 2px 8px rgba(0,0,0,0.25)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 4px 24px rgba(2,91,255,0.45), 0 1px 4px rgba(0,0,0,0.2)")}
                aria-label={d.cta}
              >
                {d.cta}
                <ArrowRight size={18} />
              </button>
              <p className="text-[12.5px] text-gray-500">{d.ctaSub}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
