import type { Metadata } from "next";
import { PrivacyContent } from "@/components/LegalPages";
import { isLocale, localeAlternates, localePath } from "@/lib/i18n";
import { legalCopy } from "@/lib/legal-copy";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const segment = (await params).locale;
  const locale = isLocale(segment) ? segment : "en";
  const t = legalCopy[locale].privacy;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return { title: t.title, description: t.intro, alternates: { canonical: siteUrl ? `${siteUrl}${localePath(locale, "privacy")}` : undefined, languages: localeAlternates("privacy") } };
}

export default async function LocalePrivacy({ params }: { params: Promise<{ locale: string }> }) {
  const segment = (await params).locale;
  return <PrivacyContent locale={isLocale(segment) ? segment : "en"} />;
}
