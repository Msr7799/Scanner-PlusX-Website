import type { Metadata } from "next";
import { SupportContent } from "@/components/LegalPages";
import { isLocale, localeAlternates, localePath } from "@/lib/i18n";
import { legalCopy } from "@/lib/legal-copy";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const segment = (await params).locale;
  const locale = isLocale(segment) ? segment : "en";
  const t = legalCopy[locale].support;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return { title: t.title, description: t.intro, alternates: { canonical: siteUrl ? `${siteUrl}${localePath(locale, "support")}` : undefined, languages: localeAlternates("support") } };
}

export default async function LocaleSupport({ params }: { params: Promise<{ locale: string }> }) {
  const segment = (await params).locale;
  return <SupportContent locale={isLocale(segment) ? segment : "en"} />;
}
