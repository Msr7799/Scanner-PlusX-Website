import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const localEnv = join(process.cwd(), ".env.local");
const localConfig = existsSync(localEnv) ? readFileSync(localEnv, "utf8") : "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || localConfig.match(/^NEXT_PUBLIC_SITE_URL\s*=\s*["']?([^\s"']+)["']?\s*$/m)?.[1];
if (siteUrl && /^https:\/\//.test(siteUrl)) {
  const base = siteUrl.replace(/\/$/, "");
  const pages = ["", "/privacy", "/support"];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map((path) => `\n  <url><loc>${base}${path}</loc></url>`).join("")}\n</urlset>\n`;
  writeFileSync(join(process.cwd(), "out", "sitemap.xml"), sitemap);
  writeFileSync(join(process.cwd(), "out", "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`);
  console.log("Created sitemap.xml and robots.txt for the configured site URL.");
}
