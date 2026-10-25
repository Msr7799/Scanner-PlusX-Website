// المسار: scannerplusx-web/src/app/(default)/page.tsx
// الوظيفة: واجهة موقع ScannerPlusX والمحتوى متعدد اللغات.
// الدوال: Home.
import Landing from "@/components/Landing";
import type { Metadata } from "next";
import { appJsonLd, homeMetadata } from "@/lib/seo";

export const metadata: Metadata = homeMetadata("en");

export default function Home() {
  return <><Landing locale="en" /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd("en")).replace(/</g, "\\u003c") }} /></>;
}
