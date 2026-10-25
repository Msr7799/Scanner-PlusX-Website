// المسار: scannerplusx-web/src/app/(default)/support/page.tsx
// الوظيفة: واجهة موقع ScannerPlusX والمحتوى متعدد اللغات.
// الدوال: SupportPage.
import type { Metadata } from "next";
import { SupportContent } from "@/components/LegalPages";
import { legalCopy } from "@/lib/legal-copy";
import { localeAlternates, siteUrl } from "@/lib/i18n";

export const metadata: Metadata = {
  title: legalCopy.en.support.title,
  description: legalCopy.en.support.intro,
  alternates: {
    canonical: `${siteUrl}/support`,
    languages: localeAlternates("support"),
  },
};

export default function SupportPage() {
  return <SupportContent locale="en" />;
}
