"use client";

import { useEffect, useRef } from "react";
import type { Locale } from "@/lib/i18n";

declare global {
  interface Window { adsbygoogle?: Record<string, unknown>[] }
}

const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
const slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ID;
const configured = !!client && !!slot && /^ca-pub-\d{16}$/.test(client) && /^\d{10}$/.test(slot);

const adLabel: Record<Locale, string> = {
  ar: "إعلان", en: "Advertisement", es: "Publicidad", fr: "Publicité", de: "Werbung", hi: "विज्ञापन",
};

export default function AdSenseUnit({ locale }: { locale: Locale }) {
  const requested = useRef(false);

  useEffect(() => {
    if (!configured || requested.current) return;
    requested.current = true;
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch { /* Ad blockers or an unapproved site may prevent a request. */ }
  }, []);

  if (!configured) return null;

  return (
    <aside className="container-wide my-12" aria-label={adLabel[locale]}>
      <span className="mb-3 block text-center text-[11px] text-[#8589a3]">{adLabel[locale]}</span>
      <ins className="adsbygoogle block min-h-[100px]" data-ad-client={client} data-ad-slot={slot} data-ad-format="auto" data-full-width-responsive="true" />
    </aside>
  );
}
