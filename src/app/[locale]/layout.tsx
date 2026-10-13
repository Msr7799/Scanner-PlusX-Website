import type { Metadata } from "next";
import Script from "next/script";
import { isLocale, type Locale } from "@/lib/i18n";
import "../globals.css";

const localizedLocales = ["en", "es", "fr", "de", "hi"] as const;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
const validAdsenseClient = adsenseClient && /^ca-pub-\d{16}$/.test(adsenseClient);

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedLocales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: { default: "ScannerPlusX", template: "%s | ScannerPlusX" },
  applicationName: "ScannerPlusX",
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  icons: { icon: "/icon.png" },
};

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale: segment } = await params;
  const locale: Locale = isLocale(segment) ? segment : "en";
  return <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
    <body className="antialiased">
      {children}
      {validAdsenseClient && <Script id="adsense-loader" async strategy="afterInteractive" src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`} crossOrigin="anonymous" />}
    </body>
  </html>;
}
