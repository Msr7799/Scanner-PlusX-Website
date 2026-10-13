import type { Metadata } from "next";
import Script from "next/script";
import "../globals.css";
import { homeCopy, localeAlternates } from "@/lib/i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
const validAdsenseClient = adsenseClient && /^ca-pub-\d{16}$/.test(adsenseClient);

export const metadata: Metadata = {
  title: { default: "ScannerPlusX | Scan and organize documents", template: "%s | ScannerPlusX" },
  description: homeCopy.en.heroBody,
  applicationName: "ScannerPlusX",
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  alternates: { canonical: siteUrl || undefined, languages: localeAlternates() },
  openGraph: { title: "ScannerPlusX", description: homeCopy.en.heroBody, type: "website", locale: "en_US", images: siteUrl ? [`${siteUrl}/images/scanner-brand.webp`] : undefined },
  twitter: { card: "summary_large_image", images: siteUrl ? [`${siteUrl}/images/scanner-brand.webp`] : undefined },
  icons: { icon: "/icon.png" },
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
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
          />
        )}
      </body>
    </html>
  );
}
