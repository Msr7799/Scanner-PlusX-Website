// المسار: scannerplusx-web/src/app/[locale]/layout.tsx
// الوظيفة: واجهة موقع ScannerPlusX والمحتوى متعدد اللغات.
// الدوال: generateStaticParams، LocaleLayout.
import type { Metadata } from "next";
import Script from "next/script";
import { isLocale, siteUrl, type Locale } from "@/lib/i18n";
import "../globals.css";

const localizedLocales = ["en", "ar", "es", "fr", "de", "hi"] as const;
const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-2259594031936212";
const validAdsenseClient = adsenseClient && /^ca-pub-\d{16}$/.test(adsenseClient);

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedLocales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: { default: "ScannerPlusX", template: "%s | ScannerPlusX" },
  applicationName: "ScannerPlusX",
  metadataBase: new URL(siteUrl),
  icons: { icon: "/icon.png" },
  other: { "google-adsense-account": "ca-pub-2259594031936212" },
};

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale: segment } = await params;
  const locale: Locale = isLocale(segment) ? segment : "en";
  return <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
    <body className="antialiased">
      {children}
      {validAdsenseClient && <Script id="adsense-loader" async strategy="lazyOnload" src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`} crossOrigin="anonymous" />}
    </body>
  </html>;
}
