import Landing from "@/components/Landing";
import type { Metadata } from "next";
import { localeAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  alternates: { canonical: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, ""), languages: localeAlternates() },
};

export default function Home() {
  return <Landing locale="ar" />;
}
