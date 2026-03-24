"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} / 5`}>
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={14} className="fill-[#025bff] text-[#025bff]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t } = useLanguage();
  const s = t.testimonials;

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-28 bg-[#f7f8fc]"
      aria-labelledby="testimonials-title"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.p variants={fadeInUp} className="text-sm font-semibold text-[#025bff] uppercase tracking-widest mb-3">
            {s.eyebrow}
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            id="testimonials-title"
            className="text-4xl sm:text-5xl font-bold text-[#0f1117] tracking-tight mb-4"
          >
            {s.h2a}<br />{s.h2b}
          </motion.h2>
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2">
            <StarRating count={5} />
            <span className="text-sm font-semibold text-[#0f1117]">4.9</span>
            <span className="text-sm text-[#6b7280]">· 200+ {s.reviews}</span>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-5"
        >
          {s.items.map((item) => (
            <motion.article
              key={item.name}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-5 sm:p-7 border border-[#e5e7eb] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <StarRating count={item.rating} />

              {/* Quote */}
              <blockquote className="mt-4 mb-6 flex-1">
                <p className="text-[#0f1117] leading-relaxed font-medium">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-[#e5e7eb]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ background: item.color }}
                  aria-hidden="true"
                >
                  {item.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0f1117]">{item.name}</p>
                  <p className="text-xs text-[#6b7280]">
                    {item.role} · {item.location}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
