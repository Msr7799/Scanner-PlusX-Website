import Link from "next/link";
import InfoShell from "./InfoShell";
import { termsCopy } from "@/lib/terms-copy";
import { localePath, type Locale } from "@/lib/i18n";

export default function TermsContent({ locale }: { locale: Locale }) {
  const t = termsCopy[locale];
  return <InfoShell locale={locale} page="terms" eyebrow={t.eyebrow} title={t.title} intro={t.intro}>
    <p className="text-xs text-[#9da1b7]">{t.updated}</p>
    {t.sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.body}</p></section>)}
    <section>
      <h2>{t.resources}</h2>
      <ul>
        <li><a href="https://play.google.com/store/account/subscriptions" target="_blank" rel="noopener noreferrer">{t.manage}</a></li>
        <li><a href="https://support.google.com/googleplay/answer/15574908" target="_blank" rel="noopener noreferrer">{t.refunds}</a></li>
        <li><Link href={localePath(locale, "privacy")}>{t.privacy}</Link></li>
        <li><Link href={localePath(locale, "support")}>{t.support}</Link></li>
      </ul>
    </section>
    <p>{t.contact}: <a href="mailto:alromaihi2224@gmail.com?subject=ScannerPlusX%20Terms">alromaihi2224@gmail.com</a></p>
  </InfoShell>;
}
