// @ts-nocheck
"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ArrowUp } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { getChatTranslations } from "@/lib/chatTranslations";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* Typing dots animation */
function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-1 py-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-[6px] h-[6px] rounded-full bg-[#025bff]/50"
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* Bot avatar */
function BotAvatar() {
  return (
    <div
      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
      style={{
        background: "linear-gradient(135deg, #025bff 0%, #1a71ff 100%)",
      }}
    >
      <span className="text-[11px] font-bold text-white leading-none">H</span>
    </div>
  );
}

export default function ChatWidget() {
  const { lang } = useLanguage();
  const ct = getChatTranslations(lang);
  const [open, setOpen] = useState(false);
  const [cookieVisible, setCookieVisible] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const langRef = useRef(lang);
  langRef.current = lang;

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/chat",
        body: () => ({ lang: langRef.current }),
      }),
    [],
  );

  const { messages, sendMessage, status, error } = useChat({ transport });

  const isLoading = status === "submitted" || status === "streaming";

  // Check cookie banner visibility
  useEffect(() => {
    const check = () => {
      const consent = localStorage.getItem("cookie-consent");
      setCookieVisible(!consent);
    };
    check();
    const interval = setInterval(check, 1000);
    return () => clearInterval(interval);
  }, []);

  // Lock body scroll on mobile when chat is open
  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

  // Auto-scroll on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, status]);

  // Focus input when panel opens
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  // Escape to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  const onSubmit = useCallback(
    (e?: React.FormEvent) => {
      e?.preventDefault();
      const text = input.trim();
      if (!text || isLoading) return;
      setInput("");
      sendMessage({ text });
    },
    [input, isLoading, sendMessage],
  );

  const sendSuggestion = useCallback(
    (text: string) => {
      if (isLoading) return;
      sendMessage({ text });
    },
    [isLoading, sendMessage],
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        onSubmit();
      }
    },
    [onSubmit],
  );

  const bottomOffset = cookieVisible ? 96 : 20;
  const hasMessages = messages.length > 0;

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, ease }}
            onClick={() => setOpen(true)}
            className="fixed right-5 z-50 w-[56px] h-[56px] rounded-full flex items-center justify-center cursor-pointer transition-[bottom] duration-300 group"
            style={{
              bottom: bottomOffset,
              background: "linear-gradient(135deg, #025bff 0%, #1a71ff 100%)",
              boxShadow:
                "0 4px 24px rgba(2,91,255,0.35), 0 0 0 0 rgba(2,91,255,0)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 6px 28px rgba(2,91,255,0.45), 0 0 0 4px rgba(2,91,255,0.12)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 4px 24px rgba(2,91,255,0.35), 0 0 0 0 rgba(2,91,255,0)";
              e.currentTarget.style.transform = "scale(1)";
            }}
            aria-label={ct.buttonLabel}
          >
            <MessageCircle size={24} className="text-white" strokeWidth={2.2} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease }}
            className="fixed inset-0 z-50 flex flex-col sm:inset-auto sm:right-5 sm:bottom-5 sm:w-[380px] sm:h-[min(560px,calc(100vh-40px))] sm:rounded-2xl overflow-hidden"
            style={{
              boxShadow:
                "0 25px 65px -5px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.06)",
              background: "#f8f9fb",
              touchAction: "pan-y",
              overscrollBehavior: "contain",
            }}
            role="dialog"
            aria-label={ct.title}
          >
            {/* Header */}
            <div
              className="relative flex items-center gap-3 px-5 flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, #025bff 0%, #1a71ff 100%)",
                paddingTop: "max(16px, env(safe-area-inset-top, 16px))",
                paddingBottom: 16,
              }}
            >
              {/* Bot icon in header */}
              <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-sm">
                <MessageCircle size={18} className="text-white" strokeWidth={2.2} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[15px] font-semibold text-white leading-tight">
                  {ct.title}
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-[6px] h-[6px] rounded-full bg-emerald-300 animate-pulse" />
                  <p className="text-[11.5px] text-white/70 leading-tight">
                    {ct.subtitle}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                aria-label={ct.close}
              >
                <X size={18} strokeWidth={2.5} />
              </button>
            </div>

            {/* Messages area */}
            <div
              className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 space-y-4"
              style={{ WebkitOverflowScrolling: "touch" } as React.CSSProperties}
            >
              {/* Greeting message */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1, ease }}
                className="flex items-start gap-2.5"
              >
                <BotAvatar />
                <div
                  className="max-w-[80%] rounded-2xl rounded-tl-md px-3.5 py-2.5 text-[13.5px] leading-relaxed text-[#1a1d26] bg-white"
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
                  }}
                >
                  {ct.greeting}
                </div>
              </motion.div>

              {/* Suggestion chips — show only before any user messages */}
              {!hasMessages && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.25, ease }}
                  className="flex flex-wrap gap-2 pl-[38px]"
                >
                  {ct.suggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => sendSuggestion(s)}
                      className="px-3 py-1.5 rounded-full text-[12.5px] font-medium text-[#025bff] bg-white cursor-pointer transition-all hover:bg-[#025bff] hover:text-white"
                      style={{
                        boxShadow:
                          "0 1px 3px rgba(0,0,0,0.06), 0 0 0 1px rgba(2,91,255,0.15)",
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </motion.div>
              )}

              {/* Conversation messages */}
              {messages.map((msg, i) => {
                const text = (msg.parts ?? [])
                  .filter((p: any) => p.type === "text")
                  .map((p: any) => p.text)
                  .join("");
                if (!text) return null;
                const isUser = msg.role === "user";
                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, ease }}
                    className={`flex ${isUser ? "justify-end" : "items-start gap-2.5"}`}
                  >
                    {!isUser && <BotAvatar />}
                    <div
                      className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-[13.5px] leading-relaxed whitespace-pre-wrap ${
                        isUser
                          ? "rounded-tr-md text-white"
                          : "rounded-tl-md text-[#1a1d26] bg-white"
                      }`}
                      style={
                        isUser
                          ? {
                              background:
                                "linear-gradient(135deg, #025bff 0%, #1a71ff 100%)",
                              boxShadow:
                                "0 2px 8px rgba(2,91,255,0.2)",
                            }
                          : {
                              boxShadow:
                                "0 1px 3px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
                            }
                      }
                    >
                      {text}
                    </div>
                  </motion.div>
                );
              })}

              {/* Typing indicator */}
              {isLoading &&
                (messages.length === 0 ||
                  messages[messages.length - 1].role === "user") && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-2.5"
                  >
                    <BotAvatar />
                    <div
                      className="rounded-2xl rounded-tl-md px-3.5 py-2.5 bg-white"
                      style={{
                        boxShadow:
                          "0 1px 3px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
                      }}
                    >
                      <TypingDots />
                    </div>
                  </motion.div>
                )}

              {/* Error */}
              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-start gap-2.5"
                >
                  <BotAvatar />
                  <div
                    className="max-w-[80%] rounded-2xl rounded-tl-md px-3.5 py-2.5 text-[13px] text-red-600 bg-red-50"
                    style={{
                      boxShadow:
                        "0 1px 3px rgba(0,0,0,0.04), 0 0 0 1px rgba(239,68,68,0.15)",
                    }}
                  >
                    {ct.errorGeneric}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div
              className="flex-shrink-0 bg-white px-3.5 pt-2.5 sm:rounded-b-2xl"
              style={{
                paddingBottom: "max(14px, env(safe-area-inset-bottom, 14px))",
              }}
            >
              <form
                onSubmit={onSubmit}
                className="flex items-end gap-2"
                style={{
                  background: "#f2f3f7",
                  borderRadius: 20,
                  padding: "10px 10px 10px 18px",
                  border: "1.5px solid #025bff",
                }}
              >
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder={ct.placeholder}
                  rows={1}
                  className="flex-1 resize-none text-[16px] text-[#1a1d26] placeholder-[#a0a4ae] bg-transparent leading-[1.5] max-h-[100px] overflow-y-auto"
                  style={{
                    fieldSizing: "content",
                    outline: "none",
                    border: "none",
                    WebkitTapHighlightColor: "transparent",
                    caretColor: "#025bff",
                    padding: "3px 0",
                    fontSize: 16,
                  } as React.CSSProperties}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="flex items-center justify-center flex-shrink-0 cursor-pointer transition-all duration-200 disabled:cursor-not-allowed"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 12,
                    background:
                      input.trim() && !isLoading
                        ? "linear-gradient(135deg, #025bff 0%, #1a71ff 100%)"
                        : "#dfe1e7",
                    boxShadow:
                      input.trim() && !isLoading
                        ? "0 2px 10px rgba(2,91,255,0.3)"
                        : "none",
                    opacity: input.trim() && !isLoading ? 1 : 0.5,
                  }}
                  aria-label={ct.send}
                >
                  <ArrowUp
                    size={17}
                    strokeWidth={2.5}
                    className="text-white"
                  />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
