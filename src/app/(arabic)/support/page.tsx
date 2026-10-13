import type { Metadata } from "next";
import { SupportContent } from "@/components/LegalPages";
import { legalCopy } from "@/lib/legal-copy";
import { localeAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: legalCopy.ar.support.title,
  description: legalCopy.ar.support.intro,
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")}/support` : undefined,
    languages: localeAlternates("support"),
  },
};

export default function SupportPage() {
  return <SupportContent locale="ar" />;
}
