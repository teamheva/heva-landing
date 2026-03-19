"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="fixed bottom-5 left-5 right-5 sm:left-auto sm:right-5 sm:max-w-[440px] z-50"
          role="dialog"
          aria-label="Küpsiste nõusolek"
          aria-live="polite"
        >
          <div
            className="rounded-2xl p-5"
            style={{
              background: "#0a0a0f",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03)",
            }}
          >
            <div className="flex items-start gap-3">
              {/* Icon */}
              <div className="w-9 h-9 rounded-xl bg-[#025bff]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Cookie size={16} className="text-[#60a5fa]" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white mb-1">Kasutame küpsiseid</p>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  Kasutame küpsiseid parema kogemuse tagamiseks ja kasutusstatistika mõõtmiseks.{" "}
                  <a href="#" className="text-[#60a5fa] hover:underline">
                    Loe lähemalt
                  </a>
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={decline}
                    className="px-4 py-2 text-xs font-semibold text-gray-400 border border-white/10 rounded-xl hover:border-white/20 hover:text-white transition-all duration-150 cursor-pointer"
                    aria-label="Lükka küpsised tagasi"
                  >
                    Lükka tagasi
                  </button>
                  <button
                    onClick={accept}
                    className="btn-primary flex-1 px-4 py-2 text-xs font-semibold text-white rounded-xl cursor-pointer"
                    aria-label="Nõustu küpsistega"
                  >
                    Nõustun
                  </button>
                </div>
              </div>

              {/* Close */}
              <button
                onClick={decline}
                className="text-gray-600 hover:text-gray-400 transition-colors cursor-pointer flex-shrink-0 mt-0.5"
                aria-label="Sulge küpsiste teade"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
