"use client";

import { motion } from "framer-motion";
import { MapPin, Zap, Shield, Receipt, Clock, Building2 } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const features = [
  {
    icon: MapPin,
    title: "Reaalajas jälgimine",
    description: "Näed vedajat kaardil kogu teekonna vältel. Ei mingit arvamist — täpne asukoht iga hetk.",
    color: "#025bff",
    bg: "#e8f0ff",
  },
  {
    icon: Zap,
    title: "Kiire ühendus",
    description: "Vedaja leitakse keskmiselt 8 minutiga. Meie algoritm valib lähima ja sobivaima sõiduki.",
    color: "#f59e0b",
    bg: "#fef3c7",
  },
  {
    icon: Shield,
    title: "Kindel ja turvaline",
    description: "Kõik vedajad on kontrollitud ja sertifitseeritud. Kaup on kindlustatud iga tellimuse jooksul.",
    color: "#10b981",
    bg: "#d1fae5",
  },
  {
    icon: Receipt,
    title: "Läbipaistev hinnastamine",
    description: "Hind arvutatakse enne tellimist — peidetud kulud puuduvad. Maksad täpselt nii palju, kui näed.",
    color: "#8b5cf6",
    bg: "#ede9fe",
  },
  {
    icon: Clock,
    title: "Töötab ööpäev läbi",
    description: "Tellimusi saab esitada 24/7, ka nädalavahetusel ja pühadel. Heva ei maga kunagi.",
    color: "#ef4444",
    bg: "#fee2e2",
  },
  {
    icon: Building2,
    title: "Ettevõtetele",
    description: "Arved, aruanded ja meeskonnakontod ühes kohas. Integreerib olemasolevate tööriistadega.",
    color: "#06b6d4",
    bg: "#cffafe",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 sm:py-32 bg-white"
      aria-labelledby="features-title"
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
            Omadused
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            id="features-title"
            className="text-4xl sm:text-5xl font-bold text-[#0f1117] tracking-tight mb-4"
          >
            Miks Heva?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-[#6b7280] max-w-xl mx-auto">
            Ehitasime platvormi, mida soovisime ise kasutada — lihtne, kiire ja usaldusväärne.
          </motion.p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="group relative p-8 rounded-3xl border border-[#e5e7eb] bg-white hover:shadow-[0_8px_40px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Hover background effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
                style={{ background: `radial-gradient(ellipse 80% 80% at 0% 0%, ${feature.bg}80, transparent 70%)` }}
              />

              <div className="relative">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: feature.bg }}
                >
                  <feature.icon size={22} style={{ color: feature.color }} />
                </div>

                <h3 className="text-lg font-bold text-[#0f1117] mb-2.5">{feature.title}</h3>
                <p className="text-[#6b7280] leading-relaxed text-sm">{feature.description}</p>

                {/* Hover arrow */}
                <div className="mt-4 flex items-center gap-1 text-[#025bff] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span>Loe rohkem</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7h9M8 4l3.5 3L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
