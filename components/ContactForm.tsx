"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

type Props = {
  /** Free-form topic prepended to the message (e.g. "Hakka kulleriks"). */
  topic?: string;
  /** Show company field. Default: false. */
  showCompany?: boolean;
  /** Show phone field. Default: true. */
  showPhone?: boolean;
  /** Optional override placeholder for message. */
  messagePlaceholder?: string;
};

type Status = "idle" | "submitting" | "success" | "error";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function ContactForm({
  topic,
  showCompany = false,
  showPhone = true,
  messagePlaceholder,
}: Props) {
  const { t } = useLanguage();
  const f = t.contactForm;
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const fd = new FormData(e.currentTarget);
    const payload = {
      topic: topic ?? "",
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      company: String(fd.get("company") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  const fieldCls =
    "w-full px-4 py-3 rounded-xl text-[14px] text-[#0f1117] placeholder-[#9ca3af] bg-[#f7f8fc] outline-none transition-all focus:ring-2 focus:ring-[#025bff]/20 focus:bg-white border border-[#e5e7eb] focus:border-[#025bff]";

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-[12px] font-semibold text-[#0f1117] mb-1.5">
            {f.nameLabel} <span className="text-[#025bff]">{f.requiredMark}</span>
          </label>
          <input name="name" required placeholder={f.namePlaceholder} className={fieldCls} />
        </div>
        <div>
          <label className="block text-[12px] font-semibold text-[#0f1117] mb-1.5">
            {f.emailLabel} <span className="text-[#025bff]">{f.requiredMark}</span>
          </label>
          <input name="email" type="email" required placeholder={f.emailPlaceholder} className={fieldCls} />
        </div>
      </div>

      {(showPhone || showCompany) && (
        <div className="grid sm:grid-cols-2 gap-3">
          {showPhone && (
            <div>
              <label className="block text-[12px] font-semibold text-[#0f1117] mb-1.5">{f.phoneLabel}</label>
              <input name="phone" type="tel" placeholder={f.phonePlaceholder} className={fieldCls} />
            </div>
          )}
          {showCompany && (
            <div>
              <label className="block text-[12px] font-semibold text-[#0f1117] mb-1.5">{f.companyLabel}</label>
              <input name="company" placeholder={f.companyPlaceholder} className={fieldCls} />
            </div>
          )}
        </div>
      )}

      <div>
        <label className="block text-[12px] font-semibold text-[#0f1117] mb-1.5">
          {f.messageLabel} <span className="text-[#025bff]">{f.requiredMark}</span>
        </label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder={messagePlaceholder ?? f.messagePlaceholder}
          className={`${fieldCls} resize-y`}
        />
      </div>

      <div className="pt-2 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-[11px] text-[#6b7280]">{f.consentLabel}</p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="flex items-center gap-2 px-6 py-3 text-[14px] font-bold text-white rounded-full cursor-pointer transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
          style={{
            background: "linear-gradient(135deg, #025bff 0%, #1a71ff 100%)",
            boxShadow: "0 4px 18px rgba(2,91,255,0.3)",
          }}
        >
          {status === "submitting" ? f.submitting : f.submit}
          {status !== "submitting" && <Send size={14} />}
        </button>
      </div>

      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease }}
          className="flex items-center gap-2 mt-2 px-4 py-3 rounded-xl bg-[#ecfdf5] text-[#065f46] text-[13px] font-medium"
        >
          <CheckCircle2 size={16} /> {f.success}
        </motion.div>
      )}
      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease }}
          className="flex items-center gap-2 mt-2 px-4 py-3 rounded-xl bg-[#fef2f2] text-[#991b1b] text-[13px] font-medium"
        >
          <AlertCircle size={16} /> {f.error}
        </motion.div>
      )}
    </form>
  );
}
