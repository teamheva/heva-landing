"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const testimonials = [
  {
    quote:
      "Tellisin 8 palleti liigutamise — vedaja oli kohal 12 minutiga. Protsess oli täiesti sujuv, null paberimajandust. Kindlasti kasutan uuesti.",
    name: "Marko T.",
    role: "Väikeettevõtja",
    location: "Tallinn",
    initials: "MT",
    color: "#025bff",
    rating: 5,
  },
  {
    quote:
      "Lõpuks ometi midagi, mis töötab nagu Bolt aga kaubale. Kasutan iga nädal oma e-poe tellimuste toimetamiseks. Säästab tunde aega.",
    name: "Liis K.",
    role: "E-poe omanik",
    location: "Tartu",
    initials: "LK",
    color: "#8b5cf6",
    rating: 5,
  },
  {
    quote:
      "Täidan tühisõite, mis enne lihtsalt kaduma läksid. Lisatulu ilma lisatööta — äpp näitab kohe, mis tellimused on minu marsruudil.",
    name: "Andres V.",
    role: "Kutsuline vedaja",
    location: "Pärnu",
    initials: "AV",
    color: "#10b981",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} tärni 5-st`}>
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={14} className="fill-[#025bff] text-[#025bff]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 sm:py-32 bg-[#f7f8fc]"
      aria-labelledby="testimonials-title"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14 sm:mb-16"
        >
          <motion.p variants={fadeInUp} className="text-sm font-semibold text-[#025bff] uppercase tracking-widest mb-3">
            Arvustused
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            id="testimonials-title"
            className="text-4xl sm:text-5xl font-bold text-[#0f1117] tracking-tight mb-4"
          >
            Mida ütlevad<br />meie kasutajad
          </motion.h2>
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2">
            <StarRating count={5} />
            <span className="text-sm font-semibold text-[#0f1117]">4.9</span>
            <span className="text-sm text-[#6b7280]">· 200+ arvustust</span>
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
          {testimonials.map((t) => (
            <motion.article
              key={t.name}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-7 border border-[#e5e7eb] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Quote */}
              <blockquote className="mt-4 mb-6 flex-1">
                <p className="text-[#0f1117] leading-relaxed font-medium">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-[#e5e7eb]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ background: t.color }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0f1117]">{t.name}</p>
                  <p className="text-xs text-[#6b7280]">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom trust indicators */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-4"
        >
          {[
            "🏆 Eesti parim startup 2025",
            "🔒 ISO 27001 sertifitseeritud",
            "⚡ Üle 10 000 tellimuse täidetud",
          ].map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-sm font-medium text-[#6b7280]">
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
