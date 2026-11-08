import type { Metadata } from "next";
import TermsContent from "@/components/TermsContent";
import { termsCopy } from "@/lib/terms-copy";
import { isLocale, localeAlternates, localePath, siteUrl } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const segment = (await params).locale;
  const locale = isLocale(segment) ? segment : "en";
  const t = termsCopy[locale];
  return { title: t.title, description: t.intro, alternates: { canonical: `${siteUrl}${localePath(locale, "terms")}`, languages: localeAlternates("terms") } };
}

export default async function LocaleTerms({ params }: { params: Promise<{ locale: string }> }) {
  const segment = (await params).locale;
  return <TermsContent locale={isLocale(segment) ? segment : "en"} />;
}
