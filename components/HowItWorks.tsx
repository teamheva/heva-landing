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
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-12 sm:mb-16">
          <div>
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
              className="text-[1.85rem] sm:text-[2.4rem] font-bold text-white tracking-tight leading-[1.1]"
            >
              {s.h2}
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[12.5px] leading-relaxed hidden sm:block pb-0.5"
            style={{ color: "rgba(255,255,255,0.32)" }}
          >
            {s.sub}
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Horizontal connector line — desktop only */}
          <div className="hidden sm:block absolute top-[18px] inset-x-0 h-px overflow-hidden">
            {/* Base track */}
            <div
              className="absolute inset-0"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
            {/* Animated fill */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.9, ease, delay: 0.3 }}
              style={{
                transformOrigin: "left",
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, rgba(2,91,255,0.55), rgba(2,91,255,0.22), rgba(2,91,255,0.55))",
              }}
            />
            {/* Flowing dot */}
            <motion.div
              initial={{ x: "0%", opacity: 0 }}
              animate={
                inView ? { x: "100%", opacity: [0, 1, 1, 0] } : {}
              }
              transition={{ duration: 1.6, ease: "linear", delay: 1.1 }}
              className="absolute top-[-3px] w-[7px] h-[7px] rounded-full"
              style={{
                background: "#025bff",
                boxShadow: "0 0 10px rgba(2,91,255,0.9)",
              }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {s.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, ease, delay: 0.18 + i * 0.1 }}
                className="group relative"
              >
                {/* Number badge */}
                <div className="relative w-[36px] h-[36px] mb-5">
                  {/* Mask: hides the connector line behind the badge */}
                  <div
                    className="absolute rounded-full bg-[#0a0a0f]"
                    style={{ inset: "-4px" }}
                  />
                  {/* Border ring */}
                  <div
                    className="absolute inset-0 rounded-full transition-all duration-500 group-hover:scale-110"
                    style={{
                      border: "1px solid rgba(2,91,255,0.35)",
                    }}
                  />
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      boxShadow:
                        "0 0 16px rgba(2,91,255,0.5), inset 0 0 8px rgba(2,91,255,0.1)",
                      border: "1px solid rgba(2,91,255,0.7)",
                    }}
                  />
                  {/* Number */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <span
                      className="font-mono text-[11px] font-bold leading-none"
                      style={{ color: "#025bff" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Divider on mobile */}
                <div
                  className="sm:hidden h-px mb-5"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                />

                <h3
                  className="text-[14.5px] font-semibold mb-2 leading-snug transition-colors duration-300"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[12.5px] leading-relaxed"
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
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5"
        >
          <button className="btn-primary px-6 py-3 text-[13.5px] font-semibold text-white rounded-full">
            {s.cta}
          </button>
          <p
            className="text-[11.5px]"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            {s.ctaSub}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
