"use client";

import { motion } from "framer-motion";
import { MapPin, Zap, Shield, Receipt, Clock, Building2, type LucideIcon } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bg: string;
  stat?: string;
  statLabel?: string;
  wide?: boolean;
};

const features: Feature[] = [
  {
    icon: MapPin,
    title: "Reaalajas jälgimine",
    description: "Näed vedajat kaardil kogu teekonna vältel. Ei mingit arvamist — täpne asukoht iga hetk.",
    color: "#025bff",
    bg: "rgba(2,91,255,0.035)",
    stat: "100%",
    statLabel: "Nähtavus",
    wide: true,
  },
  {
    icon: Zap,
    title: "Kiire ühendus",
    description: "Vedaja leitakse keskmiselt 8 minutiga.",
    color: "#d97706",
    bg: "rgba(217,119,6,0.035)",
    stat: "8 min",
    statLabel: "Keskmine aeg",
  },
  {
    icon: Shield,
    title: "Kindel ja turvaline",
    description: "Kõik vedajad kontrollitud, kaup kindlustatud.",
    color: "#059669",
    bg: "rgba(5,150,105,0.035)",
    stat: "100%",
    statLabel: "Kindlustatud",
  },
  {
    icon: Receipt,
    title: "Läbipaistev hinnastamine",
    description: "Hind arvutatakse enne tellimist — peidetud kulud puuduvad. Maksad täpselt nii palju, kui näed.",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.035)",
    stat: "€0",
    statLabel: "Peidetud kulusid",
    wide: true,
  },
  {
    icon: Clock,
    title: "Töötab 24/7",
    description: "Tellimusi saab esitada iga päev, ka riiklikel pühadel.",
    color: "#dc2626",
    bg: "rgba(220,38,38,0.035)",
    stat: "24/7",
    statLabel: "Saadaval",
  },
  {
    icon: Building2,
    title: "Ettevõtetele",
    description: "Arved, aruanded ja meeskonnakontod ühes kohas.",
    color: "#0891b2",
    bg: "rgba(8,145,178,0.035)",
    stat: "1 koht",
    statLabel: "Kõik arved",
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`group relative rounded-2xl overflow-hidden transition-all duration-300 cursor-default ${
        feature.wide ? "md:col-span-2" : "col-span-1"
      }`}
      style={{
        background: feature.bg,
        border: "1px solid rgba(0,0,0,0.07)",
      }}
    >
      {/* Top accent — on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
        style={{ background: feature.color }}
      />

      <div className={`flex h-full p-7 sm:p-8 gap-6 ${feature.wide ? "flex-col sm:flex-row" : "flex-col"}`}>
        {/* Main content */}
        <div className={`flex flex-col justify-between ${feature.wide ? "sm:flex-1" : "flex-1"}`}>
          {/* Icon */}
          <div style={{ color: feature.color }}>
            <feature.icon size={26} strokeWidth={1.75} />
          </div>

          <div className="mt-10">
            <h3 className="text-[17px] font-bold text-[#0f1117] mb-2 leading-snug">{feature.title}</h3>
            <p className="text-sm text-[#6b7280] leading-relaxed">{feature.description}</p>
          </div>
        </div>

        {/* Stat */}
        {feature.stat && (
          <div
            className={`flex items-end gap-2 ${
              feature.wide
                ? "sm:flex-col sm:items-end sm:justify-end sm:min-w-[120px]"
                : "mt-6 border-t border-black/[0.05] pt-5"
            }`}
          >
            <span
              className={`font-bold leading-none tracking-tight ${
                feature.wide ? "text-5xl sm:text-6xl sm:text-right" : "text-3xl"
              }`}
              style={{
                color: feature.color,
                fontFamily: "var(--font-dm-serif), serif",
                opacity: 0.8,
              }}
            >
              {feature.stat}
            </span>
            <span
              className={`text-[10px] font-semibold text-[#9ca3af] uppercase tracking-widest ${
                feature.wide ? "sm:text-right" : ""
              }`}
            >
              {feature.statLabel}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 sm:py-32 bg-white"
      aria-labelledby="features-title"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header — left-aligned, split */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14 sm:mb-16"
        >
          <motion.p variants={fadeInUp} className="text-sm font-semibold text-[#025bff] uppercase tracking-widest mb-4">
            Miks Heva
          </motion.p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <motion.h2
              variants={fadeInUp}
              id="features-title"
              className="text-4xl sm:text-5xl font-bold text-[#0f1117] tracking-tight max-w-sm leading-tight"
            >
              Ehitatud kiiruse ja selguse jaoks.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[15px] text-[#6b7280] max-w-xs leading-relaxed">
              Iga omadus on disainitud nii, et tellida saaks kiiremini ja töötada selgemalt.
            </motion.p>
          </div>
        </motion.div>

        {/* Bento grid — alternating wide/narrow */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
