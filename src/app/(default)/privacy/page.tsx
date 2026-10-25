// المسار: scannerplusx-web/src/app/(default)/privacy/page.tsx
// الوظيفة: واجهة موقع ScannerPlusX والمحتوى متعدد اللغات.
// الدوال: PrivacyPage.
import type { Metadata } from "next";
import { PrivacyContent } from "@/components/LegalPages";
import { legalCopy } from "@/lib/legal-copy";
import { localeAlternates, siteUrl } from "@/lib/i18n";

export const metadata: Metadata = {
  title: legalCopy.en.privacy.title,
  description: legalCopy.en.privacy.intro,
  alternates: {
    canonical: `${siteUrl}/privacy`,
    languages: localeAlternates("privacy"),
  },
};

export default function PrivacyPage() {
  return <PrivacyContent locale="en" />;
}
