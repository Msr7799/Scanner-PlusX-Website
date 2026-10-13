import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const localEnv = join(process.cwd(), ".env.local");
const localConfig = existsSync(localEnv) ? readFileSync(localEnv, "utf8") : "";
const configuredClient = localConfig.match(/^NEXT_PUBLIC_ADSENSE_CLIENT_ID\s*=\s*["']?([^\s"']+)["']?\s*$/m)?.[1];
const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || configuredClient;
if (/^ca-pub-\d{16}$/.test(client ?? "")) {
  const publisher = client.replace(/^ca-/, "");
  writeFileSync(join(process.cwd(), "out", "ads.txt"), `google.com, ${publisher}, DIRECT, f08c47fec0942fa0\n`);
  console.log("Created out/ads.txt for the configured AdSense publisher.");
} else {
  console.log("AdSense client not set; website ads.txt was not generated.");
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || localConfig.match(/^NEXT_PUBLIC_SITE_URL\s*=\s*["']?([^\s"']+)["']?\s*$/m)?.[1];
if (siteUrl && /^https:\/\//.test(siteUrl)) {
  const base = siteUrl.replace(/\/$/, "");
  const pages = ["", "/privacy", "/support"];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map((path) => `\n  <url><loc>${base}${path}</loc></url>`).join("")}\n</urlset>\n`;
  writeFileSync(join(process.cwd(), "out", "sitemap.xml"), sitemap);
  writeFileSync(join(process.cwd(), "out", "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`);
  console.log("Created sitemap.xml and robots.txt for the configured site URL.");
}
