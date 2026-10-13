import type { Metadata } from "next";
import { PrivacyContent } from "@/components/LegalPages";
import { legalCopy } from "@/lib/legal-copy";
import { localeAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: legalCopy.en.privacy.title,
  description: legalCopy.en.privacy.intro,
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")}/privacy` : undefined,
    languages: localeAlternates("privacy"),
  },
};

export default function PrivacyPage() {
  return <PrivacyContent locale="en" />;
}
