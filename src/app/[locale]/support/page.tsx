// المسار: scannerplusx-web/src/app/[locale]/support/page.tsx
// الوظيفة: واجهة موقع ScannerPlusX والمحتوى متعدد اللغات.
// الدوال: generateMetadata، segment، LocaleSupport.
import type { Metadata } from "next";
import { SupportContent } from "@/components/LegalPages";
import { isLocale, localeAlternates, localePath, siteUrl } from "@/lib/i18n";
import { legalCopy } from "@/lib/legal-copy";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const segment = (await params).locale;
  const locale = isLocale(segment) ? segment : "en";
  const t = legalCopy[locale].support;
  return { title: t.title, description: t.intro, alternates: { canonical: `${siteUrl}${localePath(locale, "support")}`, languages: localeAlternates("support") } };
}

export default async function LocaleSupport({ params }: { params: Promise<{ locale: string }> }) {
  const segment = (await params).locale;
  return <SupportContent locale={isLocale(segment) ? segment : "en"} />;
}
