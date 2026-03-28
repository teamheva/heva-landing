"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

function FeatureItem({
  title,
  stat,
  statLabel,
}: {
  title: string;
  stat?: string;
  statLabel?: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group py-6 sm:py-7 border-t-2 border-[#ebebf0] hover:border-[#025bff] transition-all duration-300 cursor-default"
    >
      {stat && (
        <>
          <span className="block text-[2rem] sm:text-[2.3rem] font-bold tabular-nums text-[#0f1117] leading-none mb-1 group-hover:text-[#025bff] transition-colors duration-300">
            {stat}
          </span>
          <span className="block text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-[#c0c8d4] mb-3 group-hover:text-[#93b4f5] transition-colors duration-300">
            {statLabel}
          </span>
        </>
      )}
      <p className="text-[14px] sm:text-[15px] font-semibold text-[#0f1117] leading-snug">
        {title}
      </p>
    </motion.div>
  );
}

export default function Features() {
  const { t } = useLanguage();
  const f = t.features;

  return (
    <section
      id="features"
      className="py-16 sm:py-24 relative overflow-hidden"
      aria-labelledby="features-title"
    >
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-10 sm:mb-14"
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
            className="text-4xl sm:text-[3rem] font-bold text-[#0f1117] tracking-tight leading-tight max-w-lg"
          >
            {f.h2}
          </motion.h2>
        </motion.div>

        {/* Grid — 2 cols mobile, 3 cols desktop */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-0 sm:gap-x-12"
        >
          {f.items.map((item) => (
            <FeatureItem
              key={item.title}
              title={item.title}
              stat={item.stat}
              statLabel={item.statLabel}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
