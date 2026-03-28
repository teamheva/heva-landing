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

        {/* Card grid — same style as stats bar */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-px rounded-2xl overflow-hidden"
          style={{
            background: "rgba(220, 224, 238, 0.55)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.04), 0 1px 6px rgba(2,91,255,0.05)",
            border: "1px solid rgba(255,255,255,0.9)",
          }}
        >
          {f.items.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="group flex flex-col px-5 py-5 sm:px-6 sm:py-6 bg-white/90 hover:bg-[#f7f8fc]/90 transition-colors duration-300 cursor-default min-h-[8rem] sm:min-h-[9rem]"
            >
              {item.stat && (
                <>
                  <span className="block text-[2rem] sm:text-[2.3rem] font-bold tabular-nums text-[#0f1117] leading-none mb-1 group-hover:text-[#025bff] transition-colors duration-300">
                    {item.stat}
                  </span>
                  <span className="block text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-[#c0c8d4] mb-2.5 group-hover:text-[#93b4f5] transition-colors duration-300">
                    {item.statLabel}
                  </span>
                </>
              )}
              <p className="text-[13px] sm:text-[14px] font-semibold text-[#0f1117] leading-snug">
                {item.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
