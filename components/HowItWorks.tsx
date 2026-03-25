"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { ArrowUpRight } from "lucide-react";

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
      aria-labelledby="how-title"
      className="relative py-20 sm:py-32 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 60% 40% at 5% 50%, rgba(2,91,255,0.05) 0%, transparent 70%), #f7f8fc",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-[11px] font-semibold text-[#025bff] uppercase tracking-[0.15em] mb-4"
            >
              {s.eyebrow}
            </motion.p>
            <motion.h2
              id="how-title"
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.07 }}
              className="text-[2.2rem] sm:text-[3rem] font-bold text-[#0f1117] tracking-tight leading-[1.1] max-w-sm"
            >
              {s.h2}
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[13px] text-[#9ca3af] max-w-[220px] leading-relaxed hidden sm:block pb-1"
          >
            {s.sub}
          </motion.p>
        </div>

        {/* Steps */}
        <div className="flex flex-col">
          {s.steps.map((step, i) => (
            <div key={nums[i]}>
              {/* Divider — draws in left to right */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: i * 0.16 }}
                style={{ transformOrigin: "left" }}
                className="h-px bg-[#e0e3ea]"
              />

              {/* Row */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.16 + 0.08 }}
                className="group flex items-center gap-6 sm:gap-10 py-7 sm:py-9 cursor-default"
              >
                {/* Number with glow on hover */}
                <span
                  className="text-[3rem] sm:text-[4.5rem] font-bold leading-none tabular-nums flex-shrink-0 w-[72px] sm:w-[110px] text-[#025bff] group-hover:drop-shadow-[0_0_24px_rgba(2,91,255,0.5)] transition-all duration-300"
                  style={{ fontFamily: "var(--font-dm-serif), serif" }}
                >
                  {nums[i]}
                </span>

                {/* Dot */}
                <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#d1d5db] flex-shrink-0 group-hover:bg-[#025bff] group-hover:scale-125 transition-all duration-300" />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-[1.05rem] sm:text-[1.2rem] font-bold text-[#0f1117] mb-1.5 leading-snug group-hover:text-[#025bff] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-[#8a919e] leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>

                {/* Arrow — slides in on hover */}
                <div className="hidden sm:flex flex-shrink-0 w-9 h-9 rounded-full items-center justify-center border border-transparent text-[#d1d5db] group-hover:border-[#025bff] group-hover:text-[#025bff] group-hover:bg-[#025bff]/5 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                  <ArrowUpRight size={15} />
                </div>
              </motion.div>
            </div>
          ))}

          {/* Last divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: s.steps.length * 0.16 }}
            style={{ transformOrigin: "left" }}
            className="h-px bg-[#e0e3ea]"
          />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6"
        >
          <button className="btn-primary px-7 py-3.5 text-[14px] font-semibold text-white rounded-full">
            {s.cta}
          </button>
          <p className="text-[12px] text-[#b0b8c4]">{s.ctaSub}</p>
        </motion.div>

      </div>
    </section>
  );
}
