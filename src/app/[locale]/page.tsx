import type { Metadata } from "next";
import Landing from "@/components/Landing";
import { homeCopy, isLocale, localeAlternates, localePath } from "@/lib/i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const segment = (await params).locale;
  const locale = isLocale(segment) ? segment : "en";
  const t = homeCopy[locale];
  return {
    title: `${t.heroLine1} ${t.heroLine2}`,
    description: t.heroBody,
    alternates: { canonical: siteUrl ? `${siteUrl}${localePath(locale)}` : undefined, languages: localeAlternates() },
    openGraph: { title: "ScannerPlusX", description: t.heroBody, type: "website", locale, images: siteUrl ? [`${siteUrl}/images/scanner-brand.webp`] : undefined },
    twitter: { card: "summary_large_image", images: siteUrl ? [`${siteUrl}/images/scanner-brand.webp`] : undefined },
  };
}

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const segment = (await params).locale;
  return <Landing locale={isLocale(segment) ? segment : "en"} />;
}
