"use client";
// المسار: scannerplusx-web/src/components/LanguageSwitcher.tsx
// الوظيفة: واجهة موقع ScannerPlusX والمحتوى متعدد اللغات.
// الدوال: LanguageSwitcher.

import { Globe2 } from "lucide-react";
import { languageNames, localePath, locales, type Locale } from "@/lib/i18n";

export default function LanguageSwitcher({ locale, page = "" }: { locale: Locale; page?: "" | "privacy" | "support" }) {
  return <label className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white">
    <Globe2 size={17} aria-hidden="true" />
    <span className="sr-only">Language / اللغة</span>
    <select value={locale} onChange={(event) => window.location.assign(localePath(event.target.value as Locale, page))} aria-label="Language / اللغة" className="max-w-24 cursor-pointer bg-transparent text-sm outline-none [color-scheme:dark] sm:max-w-none">
      {locales.map((item) => <option key={item} value={item}>{languageNames[item]}</option>)}
    </select>
  </label>;
}
