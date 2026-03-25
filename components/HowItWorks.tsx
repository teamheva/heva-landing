"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

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
      className="relative py-16 sm:py-24 overflow-hidden bg-[#0a0a0f]"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Blue glow — bottom center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 115%, rgba(2,91,255,0.11) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease }}
            className="text-[10px] font-mono font-semibold text-[#025bff] uppercase tracking-[0.2em] mb-3"
          >
            {s.eyebrow}
          </motion.p>
          <motion.h2
            id="how-title"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: 0.06 }}
            className="text-[2rem] sm:text-[2.75rem] font-bold text-white tracking-tight leading-[1.1]"
          >
            {s.h2}
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">

          {/* Horizontal connector — desktop only, centered on 44px badge */}
          <div className="hidden sm:block absolute top-[22px] inset-x-0 h-px overflow-hidden">
            <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.05)" }} />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.9, ease, delay: 0.3 }}
              style={{
                transformOrigin: "left",
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, rgba(2,91,255,0.55), rgba(2,91,255,0.2), rgba(2,91,255,0.55))",
              }}
            />
            {/* Flowing dot */}
            <motion.div
              initial={{ x: "0%", opacity: 0 }}
              animate={inView ? { x: "100%", opacity: [0, 1, 1, 0] } : {}}
              transition={{ duration: 1.6, ease: "linear", delay: 1.1 }}
              className="absolute top-[-3px] w-[7px] h-[7px] rounded-full"
              style={{ background: "#025bff", boxShadow: "0 0 10px rgba(2,91,255,0.9)" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
            {s.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, ease, delay: 0.18 + i * 0.1 }}
                className="group relative"
              >
                {/* Number badge — 44px, masks connector line */}
                <div className="relative w-[44px] h-[44px] mb-6">
                  <div
                    className="absolute rounded-full bg-[#0a0a0f]"
                    style={{ inset: "-5px" }}
                  />
                  <div
                    className="absolute inset-0 rounded-full transition-all duration-500"
                    style={{ border: "1px solid rgba(2,91,255,0.35)" }}
                  />
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      boxShadow: "0 0 18px rgba(2,91,255,0.55), inset 0 0 8px rgba(2,91,255,0.12)",
                      border: "1px solid rgba(2,91,255,0.75)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <span
                      className="font-mono text-[12px] font-bold leading-none"
                      style={{ color: "#025bff" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Mobile divider */}
                <div
                  className="sm:hidden h-px mb-6"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                />

                {/* Title — big and dominant */}
                <h3
                  className="text-[1.25rem] sm:text-[1.4rem] font-bold mb-2.5 leading-snug tracking-tight transition-colors duration-300 group-hover:text-white"
                  style={{ color: "rgba(255,255,255,0.92)" }}
                >
                  {step.title}
                </h3>

                {/* Description — short and muted */}
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.32)" }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease, delay: 0.6 }}
          className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5"
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
