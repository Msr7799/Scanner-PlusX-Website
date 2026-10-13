"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft, ArrowRight, ArrowUpLeft, BookOpenText, Camera, Check,
  Cloud, Download, FileCheck2, FilePenLine, FileSearch,
  Layers3, LockKeyhole, Mail, Menu, ScanLine, ShieldCheck,
  Smartphone, Sparkles, X,
} from "lucide-react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import AdSenseUnit from "./AdSenseUnit";
import LanguageSwitcher from "./LanguageSwitcher";
import { homeCopy, localePath, type Locale } from "@/lib/i18n";

const playUrl = process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL?.startsWith("https://play.google.com/store/apps/details?id=")
  ? process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL
  : null;

const features = [
  { id: "scan", image: "/images/feature-scan.webp", icon: Camera },
  { id: "organize", image: "/images/feature-library.webp", icon: FileSearch },
  { id: "pdf", image: "/images/scanner-brand.webp", icon: FilePenLine },
] as const;

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function PlayButton({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const t = homeCopy[locale];
  const classes = `glow-button shine inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-l from-[#7161f8] to-[#435edc] font-semibold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b8aaff] ${compact ? "px-5 py-3 text-sm" : "px-7 py-4 text-base"}`;
  if (!playUrl) return <span className={`${classes} cursor-default opacity-70`} title={t.playHint}><Smartphone size={19} /> {t.playSoon}</span>;
  return <a className={classes} href={playUrl} target="_blank" rel="noopener noreferrer" aria-label={t.playDownload}><Download size={19} /> {t.playDownload} <ArrowUpLeft size={17} /></a>;
}

export default function Landing({ locale = "ar" }: { locale?: Locale }) {
  const t = homeCopy[locale];
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const selected = features[activeFeature];
  const selectedCopy = t.features[activeFeature];
  const reduce = useReducedMotion();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;
  const closeMenu = () => setMenuOpen(false);

  return <div className="site-shell" lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
    <header className="absolute inset-x-0 top-0 z-40 border-b border-white/7">
      <div className="container-wide flex h-[82px] items-center justify-between gap-3 lg:gap-6">
        <Link href={localePath(locale)} className="flex items-center gap-3" aria-label="ScannerPlusX">
          <span className="relative size-11 overflow-hidden rounded-[13px] border border-white/15 bg-black"><Image src="/images/scanner-icon-art.webp" alt="" fill className="object-cover" sizes="44px" priority /></span>
          <span className="text-[19px] font-bold tracking-tight" dir="ltr">Scanner<span className="text-[#a79aff]">PlusX</span></span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-[#b8bbd0] xl:flex" aria-label={t.menuOpen}>
          <a className="transition hover:text-white" href="#features">{t.nav[0]}</a>
          <a className="transition hover:text-white" href="#how-it-works">{t.nav[1]}</a>
          <a className="transition hover:text-white" href="#privacy">{t.nav[2]}</a>
          <a className="transition hover:text-white" href="#developer">{t.nav[3]}</a>
        </nav>
        <div className="hidden items-center gap-3 lg:flex"><LanguageSwitcher locale={locale} /><PlayButton locale={locale} compact /></div>
        <button className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/15 text-white lg:hidden" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? t.menuClose : t.menuOpen} aria-expanded={menuOpen}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </div>
      {menuOpen && <nav className="glass absolute inset-x-4 top-[88px] rounded-2xl p-5 lg:hidden" aria-label={t.menuOpen}><div className="flex flex-col gap-4 text-sm text-white"><LanguageSwitcher locale={locale} /><a onClick={closeMenu} href="#features">{t.nav[0]}</a><a onClick={closeMenu} href="#how-it-works">{t.nav[1]}</a><a onClick={closeMenu} href="#privacy">{t.nav[2]}</a><a onClick={closeMenu} href="#developer">{t.nav[3]}</a><div className="pt-2"><PlayButton locale={locale} compact /></div></div></nav>}
    </header>

    <main>
      <section className="hero-backdrop relative min-h-[780px] pt-[146px] pb-24 lg:min-h-[810px] lg:pt-[170px]">
        <div className="grid-texture pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="hero-orb pointer-events-none absolute top-[180px] left-[8%] size-72 rounded-full bg-[#5b40d8]" aria-hidden="true" />
        <div className="container-wide relative grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-8">
          <div className="relative z-10 max-w-[640px]">
            <Reveal><div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#6f63db]/35 bg-[#5048a9]/15 px-4 py-2 text-[12px] font-semibold text-[#d1c8ff]"><Sparkles size={14} /> {t.heroBadge} <span className="size-1 rounded-full bg-[#bdaaff]" /> Android</div></Reveal>
            <Reveal delay={.08}><h1 className="text-[clamp(3.25rem,6.7vw,6.4rem)] font-bold leading-[1.22] tracking-[-.055em]">{t.heroLine1}<br /><span className="text-gradient">{t.heroLine2}</span></h1></Reveal>
            <Reveal delay={.17}><p className="mt-8 max-w-[560px] text-lg leading-[2] text-[#b3b7ca] sm:text-[20px]">{t.heroBody}</p></Reveal>
            <Reveal delay={.24}><div className="mt-9 flex flex-wrap items-center gap-4"><PlayButton locale={locale} /><a href="#features" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-6 py-4 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/5">{t.discover} <Arrow size={17} /></a></div></Reveal>
            <Reveal delay={.3}><div className="mt-12 flex flex-wrap gap-5 text-xs text-[#8d91a8]">{t.heroPills.map((item) => <span key={item} className="flex items-center gap-2"><Check size={15} className="text-[#8d82ff]" /> {item}</span>)}</div></Reveal>
          </div>
          <div className="relative mx-auto w-full max-w-[650px] lg:max-w-none" aria-label={t.artAlt}>
            <div className="absolute inset-[17%] rounded-full bg-gradient-to-l from-[#7d4af6]/35 via-[#147fc5]/15 to-[#e25285]/20 blur-[70px]" />
            <motion.div initial={reduce ? false : { opacity: 0, scale: .88, rotate: -4 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="float-slow relative aspect-square"><Image src="/images/scanner-brand.webp" alt={t.artAlt} fill className="object-contain drop-shadow-[0_45px_60px_rgba(0,0,0,.48)]" sizes="(max-width: 1024px) 90vw, 52vw" priority /></motion.div>
            <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .7, duration: .7 }} className="glass glow-card absolute bottom-[13%] right-0 flex items-center gap-3 rounded-2xl px-4 py-3 sm:right-[2%]"><span className="grid size-10 place-items-center rounded-xl bg-[#6e62f8]/20 text-[#b2a8ff]"><FileCheck2 size={20} /></span><span><strong className="block text-sm">{t.readyShare}</strong><small className="text-[11px] text-[#9ba0b7]">{t.pdfReady}</small></span></motion.div>
          </div>
        </div>
        <div className="container-wide relative mt-12"><div className="fine-divider" /></div>
      </section>

      <section id="features" className="container-wide scroll-mt-20 py-20 lg:py-28">
        <Reveal className="max-w-2xl"><span className="eyebrow">{t.featuresEyebrow}</span><h2 className="mt-4 text-4xl font-bold leading-[1.45] tracking-tight md:text-5xl">{t.featuresLine1} <span className="text-gradient-hot">{t.featuresLine2}</span></h2><p className="mt-5 text-base leading-8 text-[#a6a9bd]">{t.featuresBody}</p></Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {t.cards.map((item, i) => {
            const Icon = [ScanLine, BookOpenText, Layers3][i];
            return <Reveal key={item.title} delay={i * .08}><div className="surface glow-card group h-full rounded-[28px] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/25"><span className="mb-8 grid size-14 place-items-center rounded-[18px] border border-white/10 bg-white/[.035]" style={{ color: ["#b899ff", "#73d8fc", "#ffb27e"][i] }}><Icon size={27} strokeWidth={1.7} /></span><h3 className="text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-8 text-[#9fa3ba]">{item.text}</p></div></Reveal>;
          })}
        </div>
      </section>

      <section className="relative py-14 lg:py-24"><div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111326] to-transparent" /><div className="container-wide relative grid gap-10 lg:grid-cols-[.44fr_.56fr] lg:gap-16">
        <div><Reveal><span className="eyebrow">{t.showcaseEyebrow}</span><h2 className="mt-4 text-4xl font-bold leading-[1.45] md:text-5xl">{t.showcaseLine1}<br /><span className="text-gradient">{t.showcaseLine2}</span></h2><p className="mt-5 leading-8 text-[#a6a9bd]">{t.showcaseBody}</p></Reveal><div className="mt-10 space-y-3" role="tablist" aria-label={t.showcaseLabel}>{features.map((feature, index) => <button key={feature.id} type="button" role="tab" aria-selected={activeFeature === index} aria-controls="feature-panel" onClick={() => setActiveFeature(index)} className={`flex w-full items-center gap-4 rounded-2xl border p-5 text-start transition ${activeFeature === index ? "border-[#8d7cff]/45 bg-[#8272fa]/12 text-white" : "border-white/8 bg-white/[.025] text-[#9fa3b9] hover:border-white/20"}`}><span className={`grid size-11 shrink-0 place-items-center rounded-xl ${activeFeature === index ? "bg-[#7768ef]/25 text-[#b8adff]" : "bg-white/5"}`}><feature.icon size={21} /></span><span className="flex-1"><span className="block text-xs text-[#9189d8]">{t.features[index].eyebrow}</span><strong className="mt-1 block text-base">{t.features[index].title}</strong></span><Arrow size={17} /></button>)}</div></div>
        <div id="feature-panel" role="tabpanel" className="surface glow-card relative flex min-h-[560px] flex-col overflow-hidden rounded-[34px] border-white/15 p-7 sm:p-10"><div className="absolute -left-28 -top-20 size-72 rounded-full bg-[#5d4bda]/20 blur-[80px]" /><AnimatePresence mode="wait"><motion.div key={selected.id} initial={reduce ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -15 }} transition={{ duration: .35 }} className="relative flex h-full flex-col"><div className="relative mx-auto aspect-square w-full max-w-[370px] flex-1"><Image src={selected.image} alt="" fill className="feature-image object-contain" sizes="(max-width: 1024px) 80vw, 32vw" /></div><div className="mt-auto"><h3 className="text-2xl font-semibold">{selectedCopy.title}</h3><p className="mt-3 max-w-[500px] text-sm leading-8 text-[#adb0c2]">{selectedCopy.description}</p><div className="mt-5 flex flex-wrap gap-2">{selectedCopy.points.map(point => <span key={point} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-[#c7c8d7]">{point}</span>)}</div></div></motion.div></AnimatePresence></div>
      </div></section>

      <section id="how-it-works" className="container-wide scroll-mt-20 py-24 lg:py-32"><Reveal className="text-center"><span className="eyebrow">{t.workflowEyebrow}</span><h2 className="mt-4 text-4xl font-bold md:text-5xl">{t.workflowTitle}</h2><p className="mx-auto mt-5 max-w-xl leading-8 text-[#a6a9bd]">{t.workflowBody}</p></Reveal><div className="relative mt-16 grid gap-5 md:grid-cols-3"><div className="absolute left-[16%] right-[16%] top-8 hidden border-t border-dashed border-[#58546f] md:block" />{t.steps.map((step, i) => {
        const Icon = [Camera, Sparkles, Cloud][i];
        return <Reveal key={step.title} delay={i * .1} className="relative text-center"><div className="mx-auto grid size-16 place-items-center rounded-[20px] border border-[#796bee]/45 bg-[#201f3e] text-[#b5aaff] shadow-[0_0_30px_rgba(106,83,255,.16)]"><Icon size={25} /></div><span className="mt-7 block text-xs font-bold tracking-[.2em] text-[#8680d2]">0{i + 1}</span><h3 className="mt-2 text-xl font-semibold">{step.title}</h3><p className="mx-auto mt-3 max-w-[290px] text-sm leading-8 text-[#9da1b8]">{step.text}</p></Reveal>;
      })}</div></section>

      <AdSenseUnit locale={locale} />

      <section id="privacy" className="container-wide scroll-mt-20 py-12 lg:py-24"><div className="surface relative grid items-center gap-10 overflow-hidden rounded-[34px] p-8 lg:grid-cols-[1fr_.7fr] lg:p-14"><div className="absolute -left-20 -bottom-24 size-80 rounded-full bg-[#4a72d8]/15 blur-[85px]" /><Reveal className="relative"><span className="eyebrow">{t.privacyEyebrow}</span><h2 className="mt-4 text-4xl font-bold leading-[1.45]">{t.privacyLine1}<br /><span className="text-gradient">{t.privacyLine2}</span></h2><p className="mt-5 max-w-xl leading-8 text-[#afb2c5]">{t.privacyBody}</p><Link href={localePath(locale, "privacy")} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#b7adff] hover:text-white">{t.privacyLink} <Arrow size={17} /></Link></Reveal><div className="relative mx-auto grid w-full max-w-[360px] grid-cols-2 gap-4"><div className="surface float-slow rounded-2xl p-5"><LockKeyhole className="text-[#ac9dff]" /><span className="mt-5 block text-sm font-semibold">{t.privacyCards[0]}</span></div><div className="surface float-slower mt-12 rounded-2xl p-5"><ShieldCheck className="text-[#79d8ec]" /><span className="mt-5 block text-sm font-semibold">{t.privacyCards[1]}</span></div><div className="surface col-span-2 rounded-2xl p-5"><div className="flex items-center justify-between"><div><span className="text-xs text-[#a4a7bd]">ScannerPlusX</span><strong className="mt-1 block text-base">{t.privacyCards[2]}</strong></div><FileCheck2 className="text-[#b6aaff]" size={30} /></div></div></div></div></section>

      <section id="developer" className="container-wide scroll-mt-20 py-20"><Reveal><div className="grid items-center gap-8 rounded-[32px] border border-white/10 bg-[#111322] p-8 md:grid-cols-[auto_1fr_auto] md:p-10"><div className="relative size-24 overflow-hidden rounded-[24px] border border-white/15 bg-black"><Image src="/images/scanner-icon-art.webp" alt="ScannerPlusX" fill className="object-cover" sizes="96px" /></div><div><span className="eyebrow">{t.developerEyebrow}</span><h2 className="mt-2 text-2xl font-semibold">{t.developerTitle}</h2><p className="mt-2 max-w-2xl text-sm leading-7 text-[#a8abbe]">{t.developerBody}</p></div><a href="https://github.com/msr7799" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold transition hover:bg-white/5"><FaGithub size={20} /> @msr7799 <ArrowUpLeft size={16} /></a></div></Reveal></section>

      <section className="container-wide pb-24"><div className="relative overflow-hidden rounded-[36px] border border-[#8578fb]/30 bg-gradient-to-l from-[#302d73] via-[#202149] to-[#11172f] px-8 py-16 text-center sm:px-12"><div className="absolute -right-16 -top-28 size-72 rounded-full bg-[#8d5dff]/25 blur-[60px]" /><div className="absolute -bottom-36 left-0 size-72 rounded-full bg-[#287dd8]/20 blur-[70px]" /><Reveal className="relative"><span className="eyebrow">{t.ctaEyebrow}</span><h2 className="mx-auto mt-4 max-w-2xl text-4xl font-bold leading-[1.45] md:text-5xl">{t.ctaTitle}</h2><p className="mx-auto mt-4 max-w-xl leading-8 text-[#c3c5db]">{t.ctaBody}</p><div className="mt-8"><PlayButton locale={locale} /></div></Reveal></div></section>
    </main>

    <footer className="border-t border-white/10 bg-[#090a13] py-12"><div className="container-wide"><div className="flex flex-col justify-between gap-10 md:flex-row"><div><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-[#6757da]/20 text-[#b9adff]"><ScanLine size={23} /></span><strong className="text-lg" dir="ltr">ScannerPlusX</strong></div><p className="mt-3 max-w-xs text-sm leading-7 text-[#969ab0]">{t.footerBody}</p></div><div className="flex flex-wrap gap-x-12 gap-y-8 text-sm"><div className="flex flex-col gap-3"><strong>{t.footerSite}</strong><a className="text-[#9da0b5] hover:text-white" href="#features">{t.nav[0]}</a><a className="text-[#9da0b5] hover:text-white" href="#how-it-works">{t.nav[1]}</a></div><div className="flex flex-col gap-3"><strong>{t.footerInfo}</strong><Link className="text-[#9da0b5] hover:text-white" href={localePath(locale, "privacy")}>{t.nav[2]}</Link><Link className="text-[#9da0b5] hover:text-white" href={localePath(locale, "support")}>{t.support}</Link></div><div className="flex flex-col gap-3"><strong>{t.footerContact}</strong><a className="inline-flex items-center gap-2 text-[#9da0b5] hover:text-white" href="https://github.com/msr7799" target="_blank" rel="noopener noreferrer"><FaGithub size={16} /> GitHub</a><a className="inline-flex items-center gap-2 text-[#9da0b5] hover:text-white" href="mailto:alromaihi2224@gmail.com"><Mail size={16} /> {t.footerEmail}</a></div></div></div><div className="fine-divider my-9" /><div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#787d96]"><span>© {new Date().getFullYear()} ScannerPlusX — Mohamed Alromaihi</span><span>{t.footerSlogan}</span></div></div></footer>
  </div>;
}
