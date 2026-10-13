import Link from "next/link";
import InfoShell from "./InfoShell";
import { legalCopy } from "@/lib/legal-copy";
import { localePath, type Locale } from "@/lib/i18n";

const email = "alromaihi2224@gmail.com";

export function PrivacyContent({ locale }: { locale: Locale }) {
  const t = legalCopy[locale].privacy;
  return <InfoShell locale={locale} page="privacy" eyebrow={t.eyebrow} title={t.title} intro={t.intro}>
    {t.sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.body}</p></section>)}
    <p><a href={`mailto:${email}`}>{email}</a></p>
  </InfoShell>;
}

export function SupportContent({ locale }: { locale: Locale }) {
  const t = legalCopy[locale].support;
  return <InfoShell locale={locale} page="support" eyebrow={t.eyebrow} title={t.title} intro={t.intro}>
    <section><h2>{t.contact.title}</h2><p>{t.contact.body}</p><p className="mt-3"><a href={`mailto:${email}?subject=ScannerPlusX%20Support`}>{email}</a></p></section>
    <section><h2>{t.faqTitle}</h2><ul>{t.faq.map((item) => <li key={item.title}><strong className="text-white">{item.title}</strong> {item.body}</li>)}</ul></section>
    <section><h2>{t.linksTitle}</h2><p>{t.linksBody}</p><div className="mt-3 flex flex-wrap gap-5"><Link href={localePath(locale, "privacy")}>{legalCopy[locale].privacy.title}</Link><a href="https://github.com/msr7799" target="_blank" rel="noopener noreferrer">{t.github}</a></div></section>
  </InfoShell>;
}
