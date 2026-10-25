// المسار: scannerplusx-web/src/app/[locale]/privacy/page.tsx
// الوظيفة: واجهة موقع ScannerPlusX والمحتوى متعدد اللغات.
// الدوال: generateMetadata، segment، LocalePrivacy.
import type { Metadata } from "next";
import { PrivacyContent } from "@/components/LegalPages";
import { isLocale, localeAlternates, localePath, siteUrl } from "@/lib/i18n";
import { legalCopy } from "@/lib/legal-copy";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const segment = (await params).locale;
  const locale = isLocale(segment) ? segment : "en";
  const t = legalCopy[locale].privacy;
  return { title: t.title, description: t.intro, alternates: { canonical: `${siteUrl}${localePath(locale, "privacy")}`, languages: localeAlternates("privacy") } };
}

export default async function LocalePrivacy({ params }: { params: Promise<{ locale: string }> }) {
  const segment = (await params).locale;
  return <PrivacyContent locale={isLocale(segment) ? segment : "en"} />;
}
