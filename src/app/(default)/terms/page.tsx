import type { Metadata } from "next";
import TermsContent from "@/components/TermsContent";
import { termsCopy } from "@/lib/terms-copy";
import { localeAlternates, siteUrl } from "@/lib/i18n";

export const metadata: Metadata = {
  title: termsCopy.en.title,
  description: termsCopy.en.intro,
  alternates: { canonical: `${siteUrl}/terms`, languages: localeAlternates("terms") },
};

export default function TermsPage() {
  return <TermsContent locale="en" />;
}
