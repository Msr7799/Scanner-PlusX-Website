// المسار: scannerplusx-web/src/app/[locale]/page.tsx
// الوظيفة: واجهة موقع ScannerPlusX والمحتوى متعدد اللغات.
// الدوال: generateMetadata، segment، LocaleHome.
import type { Metadata } from "next";
import Landing from "@/components/Landing";
import { isLocale } from "@/lib/i18n";
import { appJsonLd, homeMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const segment = (await params).locale;
  const locale = isLocale(segment) ? segment : "en";
  return homeMetadata(locale);
}

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const segment = (await params).locale;
  const locale = isLocale(segment) ? segment : "en";
  return <><Landing locale={locale} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd(locale)).replace(/</g, "\\u003c") }} /></>;
}
