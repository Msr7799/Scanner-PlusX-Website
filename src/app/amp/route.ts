import { playUrl, siteUrl } from "@/lib/i18n";

export const dynamic = "force-static";

const ampBoilerplate = "body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}";

export function GET() {
  const html = `<!doctype html>
<html amp lang="en">
<head>
<meta charset="utf-8">
<script async src="https://cdn.ampproject.org/v0.js"></script>
<script async custom-element="amp-auto-ads" src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"></script>
<script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
<title>ScannerPlusX: PDF Scanner and OCR for Android</title>
<link rel="canonical" href="${siteUrl}/">
<meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
<meta name="description" content="Scan documents, passports and whiteboards. Edit, sign, merge and compress PDFs with ScannerPlusX for Android.">
<style amp-boilerplate>${ampBoilerplate}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
<style amp-custom>
  body{margin:0;background:#080911;color:#f8f8ff;font-family:Arial,sans-serif;line-height:1.65}
  header,main,footer{max-width:900px;margin:auto;padding:24px}
  header{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #35374d}
  a{color:#b9afff}h1{font-size:clamp(2.2rem,7vw,4.5rem);line-height:1.2;margin:28px 0 16px}
  h2{font-size:1.6rem;margin:34px 0 12px}p,li{color:#c2c5d5}ul{padding-left:22px}
  .button{display:inline-block;background:#5c66e8;color:white;text-decoration:none;padding:13px 20px;border-radius:14px;font-weight:700}
  .visual{border-radius:20px;overflow:hidden;margin:30px 0}.ad-space{margin:36px auto;max-width:900px}
  footer{border-top:1px solid #35374d;font-size:.9rem}
</style>
</head>
<body>
<amp-auto-ads type="adsense" data-ad-client="ca-pub-2259594031936212"></amp-auto-ads>
<header><strong>ScannerPlusX</strong><a href="${siteUrl}/">Full website</a></header>
<main>
  <h1>Scan documents. Get more done.</h1>
  <p>Capture paper, passports and whiteboards on Android. Extract text with OCR, edit and sign PDFs, and keep your documents organized.</p>
  <a class="button" href="${playUrl}">Get it on Google Play</a>
  <div class="visual"><amp-img src="${siteUrl}/images/app/feature-overview.png" width="1024" height="500" layout="responsive" alt="ScannerPlusX document scanning and PDF tools"></amp-img></div>
  <h2>Tools in the app</h2>
  <ul><li>Document, passport, batch and whiteboard scanning</li><li>OCR, translation and image enhancement</li><li>PDF editing, signatures, merging, splitting and compression</li></ul>
  <div class="ad-space"><amp-ad width="100vw" height="320" type="adsense" data-ad-client="ca-pub-2259594031936212" data-ad-slot="6595279533" data-auto-format="rspv" data-full-width=""><div overflow=""></div></amp-ad></div>
  <p>Premium plans are available in the Android app. Google Play shows the current price and terms before purchase.</p>
</main>
<footer><a href="${siteUrl}/privacy">Privacy policy</a> · <a href="${siteUrl}/support">Support</a></footer>
</body>
</html>`;

  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } });
}
