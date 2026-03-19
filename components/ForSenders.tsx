"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Package, Clock, MapPin } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const benefits = [
  "Sisesta tellimus 2 minutiga",
  "Kohene hinnapakkumine, üllatusi pole",
  "Reaalajas jälgimine ja teavitused",
  "Arved automaatselt e-mailile",
  "Ettevõtte konto koos aruannetega",
];

export default function ForSenders() {
  return (
    <section
      id="for-senders"
      className="py-24 sm:py-32 bg-white"
      aria-labelledby="senders-title"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p variants={fadeInUp} className="text-sm font-semibold text-[#025bff] uppercase tracking-widest mb-3">
              Saatjatele
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              id="senders-title"
              className="text-4xl sm:text-5xl font-bold text-[#0f1117] tracking-tight mb-5"
            >
              Üks platvorm,<br />
              <span className="text-[#025bff]">kõik veod.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[#6b7280] leading-relaxed mb-8 max-w-lg">
              Pallettidest mööblini, ehitusmaterjalidest toidukaubani — Heva lahendab kõik
              veovajadused. Kiirelt, läbipaistvalt, usaldusväärselt.
            </motion.p>

            {/* Benefits */}
            <motion.ul variants={stagger} className="space-y-3.5 mb-10">
              {benefits.map((benefit) => (
                <motion.li
                  key={benefit}
                  variants={fadeInUp}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e8f0ff] flex items-center justify-center">
                    <Check size={13} className="text-[#025bff]" strokeWidth={2.5} />
                  </div>
                  <span className="text-[#0f1117] font-medium">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              <button className="btn-primary flex items-center gap-2 px-7 py-4 text-base font-semibold text-white rounded-full">
                Alusta tasuta
                <ArrowRight size={18} />
              </button>
              <button className="flex items-center gap-2 px-7 py-4 text-base font-semibold text-[#6b7280] hover:text-[#025bff] transition-colors duration-200 cursor-pointer">
                Vaata hinnakiri
              </button>
            </motion.div>
          </motion.div>

          {/* Right — UI Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            aria-hidden="true"
          >
            {/* Background glow */}
            <div
              className="absolute inset-0 rounded-3xl blur-2xl opacity-10 scale-95"
              style={{ background: "radial-gradient(circle, #025bff 0%, transparent 70%)" }}
            />

            {/* Order card mockup */}
            <div className="relative bg-white rounded-3xl border border-[#e5e7eb] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-6 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-wide">Uus tellimus</p>
                  <h3 className="text-lg font-bold text-[#0f1117] mt-0.5">Veotellimus #2847</h3>
                </div>
                <div className="px-3 py-1.5 bg-[#d1fae5] rounded-full">
                  <span className="text-xs font-bold text-[#065f46]">✓ Kinnitatud</span>
                </div>
              </div>

              {/* Route */}
              <div className="bg-[#f7f8fc] rounded-2xl p-4 mb-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="mt-1 flex flex-col items-center gap-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#025bff]" />
                    <div className="w-0.5 h-8 bg-[#e5e7eb]" />
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-[#025bff]" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-2">
                      <p className="text-[10px] font-medium text-[#6b7280] uppercase">Peale</p>
                      <p className="text-sm font-semibold text-[#0f1117]">Tallinn, Ülemiste City</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-medium text-[#6b7280] uppercase">Maha</p>
                      <p className="text-sm font-semibold text-[#0f1117]">Tartu, Emajõe 5</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details grid */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { icon: Package, label: "Kaup", value: "8 pallet" },
                  { icon: Clock, label: "Aeg", value: "Täna 14:00" },
                  { icon: MapPin, label: "Kaugus", value: "185 km" },
                ].map((item) => (
                  <div key={item.label} className="bg-[#f7f8fc] rounded-xl p-3 text-center">
                    <item.icon size={14} className="text-[#025bff] mx-auto mb-1" />
                    <p className="text-[9px] text-[#6b7280] font-medium uppercase">{item.label}</p>
                    <p className="text-xs font-bold text-[#0f1117] mt-0.5">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="flex items-center justify-between p-4 bg-[#e8f0ff] rounded-2xl mb-4">
                <div>
                  <p className="text-xs text-[#6b7280] font-medium">Koguhind (koos km-iga)</p>
                  <p className="text-2xl font-bold text-[#0f1117] mt-0.5">€ 187.50</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-[#6b7280]">Vedaja</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="w-6 h-6 rounded-full bg-[#025bff] flex items-center justify-center">
                      <span className="text-[8px] font-bold text-white">AV</span>
                    </div>
                    <span className="text-xs font-semibold text-[#0f1117]">Andres V.</span>
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div>
                <div className="flex justify-between text-xs font-medium text-[#6b7280] mb-1.5">
                  <span>Tellimuse olek</span>
                  <span>66%</span>
                </div>
                <div className="h-2 bg-[#e5e7eb] rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-[#025bff] rounded-full" style={{ transition: "width 1s ease" }} />
                </div>
                <div className="flex justify-between text-[10px] text-[#6b7280] mt-1">
                  <span>Kinnitatud</span>
                  <span className="font-semibold text-[#025bff]">Teel →</span>
                  <span>Kohale</span>
                </div>
              </div>
            </div>

            {/* Floating notification */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 glass-card rounded-2xl px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
            >
              <p className="text-[10px] text-[#6b7280] font-medium">SMS teavitus</p>
              <p className="text-xs font-bold text-[#0f1117] mt-0.5">Vedaja on 5 min kaugusel 📍</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
