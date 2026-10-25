import { localeAlternates, localePath, locales, siteUrl } from "@/lib/i18n";

export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  })[character] ?? character);
}

export function GET() {
  const pages = ["", "privacy", "support"] as const;
  const entries = pages.flatMap((page) => locales.map((locale) => {
    const url = `${siteUrl}${localePath(locale, page)}`;
    const alternates = Object.entries(localeAlternates(page)).map(([language, href]) =>
      `    <xhtml:link rel="alternate" hreflang="${escapeXml(language)}" href="${escapeXml(href)}" />`,
    );
    return [
      "  <url>",
      `    <loc>${escapeXml(url)}</loc>`,
      ...alternates,
      `    <changefreq>${page ? "monthly" : "weekly"}</changefreq>`,
      `    <priority>${page ? "0.5" : "1"}</priority>`,
      "  </url>",
    ].join("\n");
  }));

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    "</urlset>",
    "",
  ].join("\n");

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
