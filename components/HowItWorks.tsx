"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const nums = ["01", "02", "03"];

export default function HowItWorks() {
  const { t } = useLanguage();
  const s = t.howItWorks;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="bg-[#0c0e12] py-20 sm:py-28"
      aria-labelledby="how-title"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-[11px] font-semibold text-[#025bff] uppercase tracking-[0.15em] mb-4"
          >
            {s.eyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.07 }}
            id="how-title"
            className="text-3xl sm:text-[2.5rem] font-bold text-white tracking-tight leading-[1.15] max-w-sm"
          >
            {s.h2}
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col">
          {s.steps.map((step, i) => (
            <div key={nums[i]}>
              {/* Animated divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.13 }}
                style={{ transformOrigin: "left" }}
                className="h-px bg-white/10"
              />

              {/* Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.13 + 0.1 }}
                className="py-8 sm:py-10 grid grid-cols-[56px_1fr] sm:grid-cols-[96px_1fr_1.4fr] gap-x-6 sm:gap-x-14 items-start group"
              >
                {/* Number */}
                <span className="text-[2rem] sm:text-[2.75rem] font-bold tabular-nums leading-none text-white/10 group-hover:text-white/20 transition-colors duration-300 pt-0.5">
                  {nums[i]}
                </span>

                {/* Title */}
                <h3 className="text-[1.05rem] sm:text-[1.2rem] font-bold text-white leading-snug pt-0.5">
                  {step.title}
                </h3>

                {/* Description — desktop only in col 3, mobile below */}
                <p className="hidden sm:block text-[13px] text-white/45 leading-relaxed pt-1">
                  {step.description}
                </p>
              </motion.div>

              {/* Mobile description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.13 + 0.2 }}
                className="sm:hidden text-[12.5px] text-white/45 leading-relaxed pb-8 pl-[62px] -mt-4"
              >
                {step.description}
              </motion.p>
            </div>
          ))}

          {/* Last divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: s.steps.length * 0.13 }}
            style={{ transformOrigin: "left" }}
            className="h-px bg-white/10"
          />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6"
        >
          <button className="btn-primary px-7 py-3.5 text-[14px] font-semibold text-white rounded-full">
            {s.cta}
          </button>
          <p className="text-[12px] text-white/30">{s.ctaSub}</p>
        </motion.div>

      </div>
    </section>
  );
}
