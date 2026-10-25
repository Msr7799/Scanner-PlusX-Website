import { readFileSync } from "node:fs";
import { join } from "node:path";

const out = join(process.cwd(), "out");
const vercel = JSON.parse(readFileSync(join(process.cwd(), "vercel.json"), "utf8"));
if (!vercel.rewrites?.some(({ source, destination }) => source === "/google4b335da91bc6f3c2.html" && destination === "/google4b335da91bc6f3c2.txt")) {
  throw new Error("Vercel must serve the Google verification path from the static text file");
}
const expected = new Map([
  ["app-ads.txt", "google.com, pub-2259594031936212, DIRECT, f08c47fec0942fa0"],
  ["ads.txt", "google.com, pub-2259594031936212, DIRECT, f08c47fec0942fa0"],
  ["google4b335da91bc6f3c2.txt", "google-site-verification: google4b335da91bc6f3c2.html"],
]);

for (const [file, content] of expected) {
  const actual = readFileSync(join(out, file), "utf8").trim();
  if (actual !== content) throw new Error(`${file} does not contain the required root-route content`);
}
const verificationSource = readFileSync(join(process.cwd(), "google4b335da91bc6f3c2.html"), "utf8").trim();
if (verificationSource !== expected.get("google4b335da91bc6f3c2.txt")) {
  throw new Error("The root Google verification file differs from the deployed route content");
}

const sitemap = readFileSync(join(out, "sitemap.xml"), "utf8");
const sitemapStyle = readFileSync(join(out, "sitemap.xsl"), "utf8");
if (!sitemap.includes('<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>') || !sitemapStyle.includes('select="/sm:urlset/sm:url"')) {
  throw new Error("sitemap.xml must link to the exported sitemap stylesheet");
}
for (const [path, contentType] of [["/sitemap.xml", "application/xml; charset=utf-8"], ["/sitemap.xsl", "text/xsl; charset=utf-8"]]) {
  if (!vercel.headers?.some(({ source, headers }) => source === path && headers?.some(({ key, value }) => key.toLowerCase() === "content-type" && value === contentType))) {
    throw new Error(`Vercel must serve ${path} with ${contentType}`);
  }
}
const home = readFileSync(join(out, "index.html"), "utf8");
const amp = readFileSync(join(out, "amp"), "utf8");
if (!home.includes('rel="amphtml"') || !home.includes('data-ad-slot="6595279533"')) {
  throw new Error("The homepage is missing its AMP link or AdSense unit");
}
if (!amp.includes('custom-element="amp-ad"') || !amp.includes('custom-element="amp-auto-ads"') || !amp.includes('data-ad-slot="6595279533"')) {
  throw new Error("The AMP page is missing its required ad components or slot");
}
const robots = readFileSync(join(out, "robots.txt"), "utf8");
if (!robots.includes("Sitemap:") || !robots.includes("/sitemap.xml")) {
  throw new Error("robots.txt is missing the sitemap route");
}
if ((sitemap.match(/<loc>/g) ?? []).length !== 18) {
  throw new Error("sitemap.xml must contain the 18 canonical localized pages");
}
for (const route of ["/ar", "/es", "/fr", "/de", "/hi", "/privacy", "/support"]) {
  if (!sitemap.includes(`${route}</loc>`)) {
    throw new Error(`sitemap.xml is missing ${route}`);
  }
}

console.log("Verified root ad files, Google site verification, and localized sitemap.");
