// المسار: scannerplusx-web/src/app/sitemap.ts
// الوظيفة: واجهة موقع ScannerPlusX والمحتوى متعدد اللغات.
// الدوال: sitemap.
import type { MetadataRoute } from "next";
import { localeAlternates, localePath, locales, siteUrl } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "privacy", "support"] as const;
  return pages.flatMap((page) => locales.map((locale) => ({
    url: `${siteUrl}${localePath(locale, page)}`,
    changeFrequency: page ? "monthly" as const : "weekly" as const,
    priority: page ? 0.5 : 1,
    alternates: { languages: localeAlternates(page) },
  })));
}
