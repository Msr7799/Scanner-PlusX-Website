import type { Metadata } from "next";
import { localeAlternates, localePath, playUrl, siteUrl, type Locale } from "./i18n";

export const seoCopy: Record<Locale, { title: string; description: string; keywords: string[] }> = {
  en: {
    title: "ScannerPlusX: PDF Scanner, OCR & Document Tools for Android",
    description: "Scan documents, passports and whiteboards on Android. Edit and sign PDFs, extract text with OCR, translate, merge and compress files with ScannerPlusX.",
    keywords: ["document scanner", "PDF scanner Android", "OCR scanner", "passport scanner", "whiteboard scanner", "PDF editor", "sign PDF", "merge PDF", "ScannerPlusX"],
  },
  ar: {
    title: "ScannerPlusX | ماسح مستندات وPDF وOCR للأندرويد",
    description: "امسح المستندات وجوازات السفر والسبورة على أندرويد. حرّر ملفات PDF ووقّعها، واستخرج النص بتقنية OCR وترجمه وادمج الملفات واضغطها مع ScannerPlusX.",
    keywords: ["ماسح مستندات", "ماسح PDF", "تصوير المستندات", "استخراج النص OCR", "مسح جواز السفر", "مسح السبورة", "توقيع PDF", "دمج PDF", "ScannerPlusX"],
  },
  es: {
    title: "ScannerPlusX: escáner PDF, OCR y herramientas Android",
    description: "Escanea documentos, pasaportes y pizarras en Android. Edita y firma PDF, extrae texto con OCR, traduce, une y comprime archivos con ScannerPlusX.",
    keywords: ["escáner de documentos", "escáner PDF", "OCR Android", "escanear pasaporte", "escanear pizarra", "firmar PDF", "unir PDF", "ScannerPlusX"],
  },
  fr: {
    title: "ScannerPlusX : scanner PDF, OCR et outils Android",
    description: "Numérisez documents, passeports et tableaux sur Android. Modifiez et signez des PDF, extrayez le texte par OCR, traduisez, fusionnez et compressez vos fichiers.",
    keywords: ["scanner de documents", "scanner PDF", "OCR Android", "numériser passeport", "scanner tableau blanc", "signer PDF", "fusionner PDF", "ScannerPlusX"],
  },
  de: {
    title: "ScannerPlusX: PDF Scanner, OCR und Dokument Tools für Android",
    description: "Scanne Dokumente, Pässe und Whiteboards mit Android. Bearbeite und unterschreibe PDFs, erkenne Text per OCR, übersetze, verbinde und komprimiere Dateien.",
    keywords: ["Dokumentenscanner", "PDF Scanner", "OCR Android", "Pass scannen", "Whiteboard scannen", "PDF unterschreiben", "PDF zusammenführen", "ScannerPlusX"],
  },
  hi: {
    title: "ScannerPlusX: Android PDF स्कैनर, OCR और दस्तावेज़ टूल",
    description: "Android पर दस्तावेज़, पासपोर्ट और व्हाइटबोर्ड स्कैन करें। PDF संपादित और हस्ताक्षर करें, OCR से टेक्स्ट निकालें, अनुवाद, मर्ज और कंप्रेस करें।",
    keywords: ["दस्तावेज़ स्कैनर", "PDF स्कैनर", "OCR स्कैनर", "पासपोर्ट स्कैन", "व्हाइटबोर्ड स्कैन", "PDF हस्ताक्षर", "PDF मिलाएँ", "ScannerPlusX"],
  },
};

export function homeMetadata(locale: Locale): Metadata {
  const { title, description, keywords } = seoCopy[locale];
  const url = `${siteUrl}${localePath(locale)}`;
  const image = `${siteUrl}/images/app/feature-overview.jpg`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url, languages: localeAlternates() },
    robots: { index: true, follow: true },
    openGraph: { title, description, type: "website", url, siteName: "ScannerPlusX", locale, images: [{ url: image, width: 1024, height: 500, alt: "ScannerPlusX document tools" }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export function appJsonLd(locale: Locale) {
  const { description } = seoCopy[locale];
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "ScannerPlusX",
    description,
    operatingSystem: "Android",
    applicationCategory: "BusinessApplication",
    inLanguage: locale,
    url: `${siteUrl}${localePath(locale)}`,
    image: `${siteUrl}/images/app/feature-overview.jpg`,
    downloadUrl: playUrl,
    installUrl: playUrl,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Person", name: "Mohamed Alromaihi" },
  };
}
