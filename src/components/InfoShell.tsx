// المسار: scannerplusx-web/src/components/InfoShell.tsx
// الوظيفة: واجهة موقع ScannerPlusX والمحتوى متعدد اللغات.
// الدوال: InfoShell.
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import LanguageSwitcher from "./LanguageSwitcher";
import { homeCopy, localePath, type Locale } from "@/lib/i18n";
import { legalCopy } from "@/lib/legal-copy";

export default function InfoShell({ locale, page, eyebrow, title, intro, children }: { locale: Locale; page: "privacy" | "support"; eyebrow: string; title: string; intro: string; children: React.ReactNode }) {
  const t = homeCopy[locale];
  const Back = locale === "ar" ? ArrowRight : ArrowLeft;
  return <div className="min-h-screen bg-[#080911]" lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
    <header className="border-b border-white/10"><div className="container-wide flex h-20 items-center justify-between gap-3"><Link href={localePath(locale)} className="flex items-center gap-3"><span className="relative size-10 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black"><Image src="/images/scanner-icon-art.webp" alt="" fill className="object-cover" sizes="40px" /></span><strong dir="ltr">ScannerPlusX</strong></Link><div className="flex items-center gap-3"><LanguageSwitcher locale={locale} page={page} /><Link href={localePath(locale)} className="inline-flex items-center gap-2 text-sm text-[#b8afff] hover:text-white"><Back size={17} /><span className="hidden sm:inline">{legalCopy[locale].home}</span></Link></div></div></header>
    <main className="container-wide py-20"><div className="mx-auto max-w-3xl"><span className="eyebrow">{eyebrow}</span><h1 className="mt-5 text-4xl font-bold leading-[1.4] md:text-5xl">{title}</h1><p className="mt-5 text-base leading-9 text-[#a9adc2]">{intro}</p><div className="mt-12 space-y-9 text-sm leading-8 text-[#bdc0cf] [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_a]:text-[#b5abff] [&_a:hover]:text-white [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:ps-6">{children}</div></div></main>
    <footer className="border-t border-white/10"><div className="container-wide flex flex-wrap items-center justify-between gap-5 py-8 text-xs text-[#9296ad]"><span>© {new Date().getFullYear()} ScannerPlusX — Mohamed Alromaihi</span><div className="flex items-center gap-6"><Link href={localePath(locale, "privacy")}>{t.nav[2]}</Link><Link href={localePath(locale, "support")}>{t.support}</Link><a href="https://github.com/msr7799" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub size={17} /></a><a href="mailto:alromaihi2224@gmail.com" aria-label={t.footerEmail}><Mail size={17} /></a></div></div></footer>
  </div>;
}
