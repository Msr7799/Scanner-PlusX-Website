import { readFileSync } from "node:fs";
import { join } from "node:path";

const out = join(process.cwd(), "out");
const expected = new Map([
  ["app-ads.txt", "google.com, pub-2259594031936212, DIRECT, f08c47fec0942fa0"],
  ["ads.txt", "google.com, pub-2259594031936212, DIRECT, f08c47fec0942fa0"],
  ["google4b335da91bc6f3c2.html", "google-site-verification: google4b335da91bc6f3c2.html"],
]);

for (const [file, content] of expected) {
  const actual = readFileSync(join(out, file), "utf8").trim();
  if (actual !== content) throw new Error(`${file} does not contain the required root-route content`);
}

const sitemap = readFileSync(join(out, "sitemap.xml"), "utf8");
for (const route of ["/ar", "/es", "/fr", "/de", "/hi", "/privacy", "/support"]) {
  if (!sitemap.includes(`${route}</loc>`)) {
    throw new Error(`sitemap.xml is missing ${route}`);
  }
}

console.log("Verified root ad files, Google site verification, and localized sitemap.");
