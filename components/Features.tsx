"use client";

import { motion } from "framer-motion";
import { MapPin, Zap, Shield, Receipt, Clock, Building2, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const featureIcons: LucideIcon[] = [MapPin, Zap, Shield, Receipt, Clock, Building2];

type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
};

function FeatureCard({ feature }: { feature: FeatureItem }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex flex-col gap-3 rounded-2xl p-5 bg-white border border-[#eaecf0] hover:border-[#d1d5db] transition-colors duration-200 cursor-default"
    >
      {/* Icon + title */}
      <div className="flex items-center gap-2.5">
        <feature.icon size={17} strokeWidth={2.25} className="text-[#025bff] flex-shrink-0" />
        <h3 className="text-[14px] font-semibold text-[#0f1117] leading-snug">{feature.title}</h3>
      </div>

      {/* Description */}
      <p className="text-[13px] text-[#6b7280] leading-relaxed">{feature.description}</p>

      {/* Stat */}
      {feature.stat && (
        <div className="flex items-baseline gap-1.5 pt-1 mt-auto">
          <span className="text-[15px] font-bold text-[#0f1117] leading-none">{feature.stat}</span>
          <span className="text-[11px] text-[#9ca3af] uppercase tracking-wide font-medium">{feature.statLabel}</span>
        </div>
      )}
    </motion.div>
  );
}

export default function Features() {
  const { t } = useLanguage();
  const f = t.features;

  const features: FeatureItem[] = f.items.map((item, i) => ({
    icon: featureIcons[i],
    ...item,
  }));

  return (
    <section
      id="features"
      className="py-20 sm:py-28 bg-[#f9fafb]"
      aria-labelledby="features-title"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-10 sm:mb-12"
        >
          <motion.p variants={fadeInUp} className="text-xs font-semibold text-[#025bff] uppercase tracking-widest mb-3">
            {f.eyebrow}
          </motion.p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <motion.h2
              variants={fadeInUp}
              id="features-title"
              className="text-3xl sm:text-4xl font-bold text-[#0f1117] tracking-tight max-w-sm leading-tight"
            >
              {f.h2}
            </motion.h2>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
