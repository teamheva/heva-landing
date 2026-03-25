"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

function FeatureCell({
  title,
  description,
  stat,
  statLabel,
}: {
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex flex-col sm:flex-col gap-0 pt-6 sm:pt-7 border-t border-[#e5e7eb]"
    >
      {/* Mobile: stat left, text right — Desktop: stacked */}
      <div className="flex sm:flex-col gap-4 sm:gap-3">
        {/* Stat block */}
        {stat && (
          <div className="flex-shrink-0 w-[88px] sm:w-auto flex flex-col sm:flex-row sm:items-baseline sm:gap-2 gap-0.5">
            <span className="text-[1.75rem] sm:text-[2rem] font-bold tracking-tight text-[#0f1117] leading-none tabular-nums whitespace-nowrap">
              {stat}
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold text-[#b0b8c4] uppercase tracking-widest leading-tight">
              {statLabel}
            </span>
          </div>
        )}

        {/* Text block */}
        <div className="flex flex-col gap-1.5 sm:gap-2 min-w-0 pt-0.5 sm:pt-0">
          <h3 className="text-[14px] sm:text-[14.5px] font-semibold text-[#0f1117] leading-snug">
            {title}
          </h3>
          <p className="text-[12.5px] sm:text-[13px] text-[#8a919e] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const { t } = useLanguage();
  const f = t.features;

  return (
    <section
      id="features"
      className="py-20 sm:py-28 bg-white"
      aria-labelledby="features-title"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 sm:mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-semibold text-[#025bff] uppercase tracking-widest mb-3"
          >
            {f.eyebrow}
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            id="features-title"
            className="text-4xl sm:text-5xl font-bold text-[#0f1117] tracking-tight leading-tight max-w-md"
          >
            {f.h2}
          </motion.h2>
        </motion.div>

        {/* Grid — 1-col mobile, 2-col tablet, 3-col desktop */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 sm:gap-x-12 sm:gap-y-10"
        >
          {f.items.map((item) => (
            <FeatureCell
              key={item.title}
              title={item.title}
              description={item.description}
              stat={item.stat}
              statLabel={item.statLabel}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
