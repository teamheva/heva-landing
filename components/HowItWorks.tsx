"use client";

import { motion } from "framer-motion";
import { Package, Navigation, CheckCircle, type LucideIcon } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const steps: { number: string; icon: LucideIcon; title: string; description: string }[] = [
  {
    number: "01",
    icon: Package,
    title: "Sisesta kaup",
    description:
      "Märgi peale- ja mahalaadimiskoht, kauba mõõtmed ja aeg. Hind kuvatakse kohe — üllatusi pole.",
  },
  {
    number: "02",
    icon: Navigation,
    title: "Vedaja tuleb",
    description:
      "Lähim saadaolev vedaja võtab tellimuse vastu. Näed teda kaardil reaalajas ja saad teavituse.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Kaup kohale",
    description:
      "Saad kinnituse, arve ja hinnangu. Makse toimub automaatselt äpis — käsitsi ülekandeid pole.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 sm:py-32 bg-[#f7f8fc]"
      aria-labelledby="how-title"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.p variants={fadeInUp} className="text-sm font-semibold text-[#025bff] uppercase tracking-widest mb-3">
            Protsess
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            id="how-title"
            className="text-4xl sm:text-5xl font-bold text-[#0f1117] tracking-tight mb-4"
          >
            Kolm sammu, null peavalu
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-[#6b7280] max-w-xl mx-auto">
            Lihtsaim viis kaupa vedada. Tellimisest toimetamiseni — kõik ühes äpis.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 relative"
        >
          {/* Connector lines (desktop only) */}
          <div className="hidden md:block absolute top-[52px] left-[calc(33.3%+16px)] right-[calc(33.3%+16px)] h-[2px]">
            <div
              className="w-full h-full"
              style={{
                background: "repeating-linear-gradient(90deg, #025bff 0px, #025bff 6px, transparent 6px, transparent 14px)",
                opacity: 0.25,
              }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="relative bg-white rounded-3xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.05)] border border-[#e5e7eb] hover:shadow-[0_8px_40px_rgba(2,91,255,0.08)] hover:border-[#c5d8ff] transition-all duration-300 group"
            >
              {/* Step number + icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-[#e8f0ff] flex items-center justify-center group-hover:bg-[#025bff] transition-colors duration-300">
                    <step.icon
                      size={22}
                      className="text-[#025bff] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                </div>
                <span
                  className="text-5xl font-bold text-[#f0f5ff] group-hover:text-[#e8f0ff] transition-colors duration-300 leading-none"
                  style={{ fontFamily: "var(--font-dm-serif), serif" }}
                >
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#0f1117] mb-3">{step.title}</h3>
              <p className="text-[#6b7280] leading-relaxed">{step.description}</p>

              {/* Arrow on mobile */}
              {i < steps.length - 1 && (
                <div className="md:hidden flex justify-center mt-6">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-4 bg-[#e5e7eb]" />
                    <div className="w-2 h-2 border-r-2 border-b-2 border-[#025bff] rotate-45 -mt-1" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mt-12"
        >
          <button className="btn-primary px-8 py-4 text-base font-semibold text-white rounded-full inline-flex items-center gap-2">
            Proovi tasuta
          </button>
          <p className="text-sm text-[#6b7280] mt-3">Registreerimine võtab alla 2 minuti</p>
        </motion.div>
      </div>
    </section>
  );
}
