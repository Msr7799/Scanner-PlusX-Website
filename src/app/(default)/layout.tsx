// المسار: scannerplusx-web/src/app/(default)/layout.tsx
// الوظيفة: واجهة موقع ScannerPlusX والمحتوى متعدد اللغات.
// الدوال: RootLayout.
import type { Metadata } from "next";
import Script from "next/script";
import "../globals.css";
import { homeCopy, localeAlternates, siteUrl } from "@/lib/i18n";

const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-2259594031936212";
const validAdsenseClient = adsenseClient && /^ca-pub-\d{16}$/.test(adsenseClient);

export const metadata: Metadata = {
  title: { default: "ScannerPlusX | Scan and organize documents", template: "%s | ScannerPlusX" },
  description: homeCopy.en.heroBody,
  applicationName: "ScannerPlusX",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl, languages: localeAlternates() },
  openGraph: { title: "ScannerPlusX", description: homeCopy.en.heroBody, type: "website", locale: "en_US", images: [`${siteUrl}/images/app/feature-overview.png`] },
  twitter: { card: "summary_large_image", images: [`${siteUrl}/images/app/feature-overview.png`] },
  icons: { icon: "/icon.png" },
  other: { "google-adsense-account": "ca-pub-2259594031936212" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr">
      <body className="antialiased">
        {children}
        {validAdsenseClient && (
          <Script
            id="adsense-loader"
            async
            strategy="lazyOnload"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
          />
        )}
      </body>
    </html>
  );
}
