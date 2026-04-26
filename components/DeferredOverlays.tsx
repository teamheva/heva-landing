"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const CookieBanner = dynamic(() => import("./CookieBanner"), { ssr: false });
const ChatWidget = dynamic(() => import("./ChatWidget"), { ssr: false });

export default function DeferredOverlays() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const idle = (window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback;
    if (idle) {
      const id = idle(() => setReady(true), { timeout: 2500 });
      return () => {
        const cancel = (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback;
        cancel?.(id);
      };
    }
    const t = setTimeout(() => setReady(true), 1500);
    return () => clearTimeout(t);
  }, []);

  if (!ready) return null;
  return (
    <>
      <CookieBanner />
      <ChatWidget />
    </>
  );
}
