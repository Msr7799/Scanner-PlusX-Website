import type { MetadataRoute } from "next";
import { localeAlternates, localePath, locales } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (!siteUrl) return [];

  const pages = ["", "privacy", "support"] as const;
  return pages.flatMap((page) => locales.map((locale) => ({
    url: `${siteUrl}${localePath(locale, page)}`,
    lastModified: new Date("2026-10-13"),
    changeFrequency: page ? "monthly" as const : "weekly" as const,
    priority: page ? 0.5 : 1,
    alternates: { languages: localeAlternates(page) },
  })));
}
