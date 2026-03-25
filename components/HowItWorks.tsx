"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const Rule = ({ delay }: { delay: number }) => (
  <motion.div
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ duration: 0.75, ease, delay }}
    style={{ transformOrigin: "left", height: "1px", background: "rgba(255,255,255,0.07)" }}
  />
);

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
      className="relative py-20 sm:py-28 overflow-hidden bg-[#0a0a0f]"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.028) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Blue glow bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 120%, rgba(2,91,255,0.09) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, ease }}
            className="text-sm font-semibold text-[#60a5fa] uppercase tracking-widest mb-3"
          >
            {s.eyebrow}
          </motion.p>
          <motion.h2
            id="how-title"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease, delay: 0.06 }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            {s.h2}
          </motion.h2>
        </div>

        {/* Steps — editorial numbered rows */}
        <div>
          {/* Top rule */}
          {inView && <Rule delay={0.22} />}

          {s.steps.map((step, i) => (
            <div key={i}>
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease, delay: 0.28 + i * 0.12 }}
                className="relative grid grid-cols-[44px_1fr] sm:grid-cols-[68px_1fr] items-start py-8 sm:py-11"
              >

                {/* Step number */}
                <div className="pt-[6px] sm:pt-[11px]">
                  <span
                    className="font-mono text-[11px] font-semibold leading-none"
                    style={{ color: "rgba(2,91,255,0.6)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title + description */}
                <div>
                  <h3
                    className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight mb-3 text-white"
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[13px] sm:text-[14px] leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>

              {/* Rule after each row */}
              {inView && <Rule delay={0.32 + i * 0.12} />}
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease, delay: 0.75 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5"
        >
          <button className="btn-primary px-6 py-3 text-[13.5px] font-semibold text-white rounded-full">
            {s.cta}
          </button>
          <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.25)" }}>
            {s.ctaSub}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
