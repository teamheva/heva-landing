"use client";

import { m as motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Truck, Package, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const stepIcons = [Package, Truck, CheckCircle];

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
      className="relative py-16 sm:py-24 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 50% -10%, rgba(2,91,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, ease }}
            className="text-sm font-semibold text-[#025bff] uppercase tracking-widest mb-3"
          >
            {s.eyebrow}
          </motion.p>
          <motion.h2
            id="how-title"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease, delay: 0.06 }}
            className="text-4xl sm:text-[3rem] font-bold text-[#0f1117] tracking-tight leading-tight"
          >
            {s.h2}
          </motion.h2>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-3 gap-0 sm:gap-8 mb-10 sm:mb-12">
          {s.steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease, delay: 0.2 + i * 0.12 }}
                className="relative flex sm:flex-col gap-5 sm:gap-4 py-6 sm:py-0 border-b sm:border-b-0 border-[#f0f0f4] last:border-0"
              >
                {/* Connector line between steps (desktop only) */}
                {i < 2 && (
                  <div className="hidden sm:block absolute top-[22px] left-[calc(50%+28px)] right-[-50%] h-px"
                    style={{ background: "linear-gradient(90deg, rgba(2,91,255,0.2) 0%, transparent 100%)" }} />
                )}

                {/* Icon + number */}
                <div className="flex-shrink-0 flex items-center gap-3 sm:flex-col sm:items-start sm:gap-3">
                  <div className="relative">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: i === 0
                          ? "linear-gradient(135deg, #e8f0ff, #d0e2ff)"
                          : i === 1
                          ? "linear-gradient(135deg, #025bff, #1a71ff)"
                          : "linear-gradient(135deg, #dcfce7, #bbf7d0)",
                      }}
                    >
                      <Icon
                        size={20}
                        className={i === 1 ? "text-white" : i === 0 ? "text-[#025bff]" : "text-[#059669]"}
                      />
                    </div>
                    <span
                      className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 rounded-full text-[9px] font-bold flex items-center justify-center text-white"
                      style={{
                        background: "#025bff",
                        width: "18px",
                        height: "18px",
                        lineHeight: "18px",
                        textAlign: "center",
                      }}
                    >
                      {i + 1}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 sm:pt-1">
                  <h3 className="text-[17px] sm:text-[18px] font-bold text-[#0f1117] leading-snug mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-[13.5px] text-[#6b7280] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <Link
            href="/klientidele"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 text-[15px] font-bold text-white rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #025bff 0%, #1a71ff 100%)",
              boxShadow: "0 4px 20px rgba(2,91,255,0.35), 0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            {s.ctaOrder}
            <ArrowRight size={17} />
          </Link>
          <Link
            href="/kulleritele"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 text-[15px] font-bold text-[#0f1117] rounded-full border border-[#d1d5db] hover:border-[#025bff] hover:text-[#025bff] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer bg-white"
            style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(2,91,255,0.18), 0 1px 4px rgba(0,0,0,0.05)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.05)")}
          >
            <Truck size={17} />
            {s.ctaDriver}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
