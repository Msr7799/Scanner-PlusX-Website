import toolAtlas from "../../public/images/app/tool-icons-dark.json";
import TutorialVideo from "./TutorialVideo";
import premiumAtlas from "../../public/images/app/premium-icons-dark.json";
import { playUrl, type Locale } from "@/lib/i18n";

const toolIds = [
  "document_scanner", "registry_BATCH", "registry_ID_CARDS", "registry_WHITEBOARD",
  "ocr", "translation", "image_enhancement", "registry_COUNT",
  "pdf_editor", "signature", "merge_pdf", "compress_pdf",
] as const;

const extraIds = [
  "split_pdf", "image_to_pdf", "pdf_to_image", "registry_TO_WORD", "registry_TO_EXCEL",
  "registry_TO_PPT", "registry_SLIDES", "registry_SCAN_CODE", "registry_FORMULA",
  "registry_QUESTION", "registry_ID_PHOTO", "registry_RESTORE_PHOTO",
] as const;

type Copy = {
  navTools: string; navTutorials: string; navPremium: string;
  toolsEyebrow: string; toolsTitle: string; toolsIntro: string;
  toolText: [string, string][]; extraTitle: string; extraText: string; extraNames: string[];
  demosEyebrow: string; demosTitle: string; demosIntro: string; demoNames: [string, string, string]; demoAlt: [string, string, string];
  demoDescriptions: [string, string, string];
  premiumEyebrow: string; premiumTitle: string; premiumIntro: string;
  premiumBenefits: [string, string, string]; monthly: string; yearly: string;
  premiumNote: string; playCta: string;
};

export const productCopy: Record<Locale, Copy> = {
  en: {
    navTools: "Tools", navTutorials: "Tutorials", navPremium: "Premium",
    toolsEyebrow: "BUILT INTO THE APP", toolsTitle: "The right tool for every document", toolsIntro: "Scan, understand, edit, convert, and organize from one Android workspace. These are the real tools and icons used in ScannerPlusX.",
    toolText: [
      ["Document scanner", "Capture pages and save clear digital documents."], ["Batch scanning", "Capture several pages in one session."],
      ["ID and passport scans", "Frame identity documents for a clean copy."], ["Whiteboard scan", "Turn board notes into a readable document."],
      ["OCR text", "Read text from an image or scanned page."], ["Translate text", "Translate extracted text when needed."],
      ["Image enhancement", "Improve the clarity of scanned images."], ["Count objects", "Count items in an image with a smart tool."],
      ["PDF editor", "Review and edit PDF pages."], ["Signature", "Add a signature to a document."],
      ["Merge PDFs", "Combine PDF files into one."], ["Compress PDF", "Reduce PDF file size for sharing."],
    ],
    extraTitle: "Choose the output you need", extraText: "Split a PDF, turn images into one file, or export content to an office format. The app also includes camera modes for slides, codes, and ID photos.",
    extraNames: ["Split PDF", "Images to PDF", "PDF to images", "To Word", "To Excel", "To PowerPoint", "Slides scan", "QR scanner", "Formulas", "Questions", "ID photo", "Photo restoration"],
    demosEyebrow: "SEE THE WORKFLOW", demosTitle: "Three common scanning tasks", demosIntro: "These short examples show what to frame before you save a whiteboard, passport, or paper document.",
    demoNames: ["Whiteboard scan", "Passport scan", "Single document"],
    demoAlt: ["Animated whiteboard scan tutorial", "Animated passport scan tutorial", "Animated single document scan tutorial"],
    demoDescriptions: ["Keep the full board inside the frame so notes remain readable.", "Align the passport page before capturing the details.", "Check the page edges and readability before exporting the file."],
    premiumEyebrow: "SCANNERPLUSX PREMIUM", premiumTitle: "More room to get things done", premiumIntro: "Premium in the Android app removes ads after the subscription is verified and highlights PDF tools and the advanced editor.",
    premiumBenefits: ["No ads", "PDF tools", "Advanced editor"], monthly: "Monthly plan", yearly: "Yearly plan",
    premiumNote: "Choose and purchase a plan inside the app. Google Play shows your local price, renewal terms, and any eligible trial before payment.", playCta: "View on Google Play",
  },
  ar: {
    navTools: "الأدوات", navTutorials: "الشروحات", navPremium: "الاشتراك",
    toolsEyebrow: "أدوات التطبيق الأصلية", toolsTitle: "أداة مناسبة لكل مستند", toolsIntro: "امسح وافهم وحرّر وحوّل ونظّم من مساحة عمل واحدة على Android. هذه الأدوات تستخدم أيقوناتها الفعلية من ScannerPlusX.",
    toolText: [
      ["ماسح المستندات", "صوّر الصفحات واحفظها كمستندات رقمية واضحة."], ["المسح الدفعي", "التقط عدة صفحات في جلسة واحدة."],
      ["الهوية وجواز السفر", "اضبط إطار مستندات الهوية لنسخة واضحة."], ["مسح السبورة", "حوّل ملاحظات السبورة إلى مستند مقروء."],
      ["التعرف على النص OCR", "اقرأ النص من صورة أو صفحة ممسوحة."], ["ترجمة النص", "ترجم النص المستخرج عند الحاجة."],
      ["تحسين الصور", "حسّن وضوح الصور الممسوحة."], ["عدّ العناصر", "احسب العناصر في الصورة بأداة ذكية."],
      ["محرر PDF", "راجع صفحات PDF وحرّرها."], ["التوقيع", "أضف توقيعًا إلى مستندك."],
      ["دمج PDF", "اجمع ملفات PDF في ملف واحد."], ["ضغط PDF", "قلّل حجم الملف لتسهيل مشاركته."],
    ],
    extraTitle: "اختر الملف الذي تحتاجه", extraText: "قسّم PDF، اجمع الصور في ملف واحد، أو صدّر المحتوى إلى صيغة مكتبية. تتوفر أيضًا أوضاع كاميرا للشرائح والرموز وصور الهوية.",
    extraNames: ["تقسيم PDF", "الصور إلى PDF", "PDF إلى صور", "إلى Word", "إلى Excel", "إلى PowerPoint", "مسح الشرائح", "ماسح QR", "المعادلات", "الأسئلة", "صورة الهوية", "ترميم الصور"],
    demosEyebrow: "شاهد خطوات المسح", demosTitle: "ثلاث مهام شائعة", demosIntro: "أمثلة قصيرة توضّح ما ينبغي ضبطه في إطار الكاميرا قبل حفظ السبورة أو جواز السفر أو الورقة.",
    demoNames: ["مسح السبورة", "مسح جواز السفر", "مسح مستند واحد"],
    demoAlt: ["شرح متحرك لمسح السبورة", "شرح متحرك لمسح جواز السفر", "شرح متحرك لمسح مستند واحد"],
    demoDescriptions: ["ضع السبورة كاملة داخل الإطار لتبقى الملاحظات مقروءة.", "حاذِ صفحة الجواز قبل تصوير بياناتها.", "راجع حدود الصفحة ووضوحها قبل تصدير الملف."],
    premiumEyebrow: "اشتراك SCANNERPLUSX PREMIUM", premiumTitle: "مساحة أوسع للإنجاز", premiumIntro: "يزيل Premium الإعلانات من تطبيق Android بعد التحقق من الاشتراك، ويبرز أدوات PDF والمحرر المتقدم.",
    premiumBenefits: ["بدون إعلانات", "أدوات PDF", "محرر متقدم"], monthly: "خطة شهرية", yearly: "خطة سنوية",
    premiumNote: "اختر الخطة واشترك من داخل التطبيق. يعرض Google Play السعر المحلي وشروط التجديد وأي فترة تجريبية متاحة لك قبل الدفع.", playCta: "افتح صفحة Google Play",
  },
  es: {
    navTools: "Herramientas", navTutorials: "Tutoriales", navPremium: "Premium",
    toolsEyebrow: "HERRAMIENTAS DE LA APP", toolsTitle: "Una herramienta para cada documento", toolsIntro: "Escanea, reconoce, edita, convierte y organiza desde una sola app para Android, con los iconos originales de ScannerPlusX.",
    toolText: [
      ["Escáner de documentos", "Captura páginas y guarda documentos claros."], ["Escaneo por lotes", "Captura varias páginas en una sesión."],
      ["DNI y pasaporte", "Encuadra documentos de identidad."], ["Pizarra", "Convierte notas de la pizarra en documentos."],
      ["Texto OCR", "Lee texto de imágenes y escaneos."], ["Traducción", "Traduce el texto extraído."],
      ["Mejora de imagen", "Aumenta la claridad del escaneo."], ["Contar objetos", "Cuenta elementos de una imagen."],
      ["Editor PDF", "Revisa y edita páginas PDF."], ["Firma", "Añade tu firma a un documento."],
      ["Unir PDF", "Combina varios PDF en uno."], ["Comprimir PDF", "Reduce el tamaño para compartir."],
    ],
    extraTitle: "Elige el archivo que necesitas", extraText: "Divide un PDF, reúne imágenes en un archivo o exporta contenido a formatos de oficina. También hay modos de cámara para diapositivas, códigos y fotos de identidad.",
    extraNames: ["Dividir PDF", "Imágenes a PDF", "PDF a imágenes", "A Word", "A Excel", "A PowerPoint", "Escanear diapositivas", "Escáner QR", "Fórmulas", "Preguntas", "Foto de carnet", "Restaurar fotos"],
    demosEyebrow: "MIRA EL PROCESO", demosTitle: "Tres tareas de escaneo", demosIntro: "Ejemplos breves de lo que conviene encuadrar antes de guardar una pizarra, un pasaporte o un documento.",
    demoNames: ["Pizarra", "Pasaporte", "Documento"], demoAlt: ["Tutorial animado para escanear pizarras", "Tutorial animado para escanear pasaportes", "Tutorial animado para escanear documentos"],
    demoDescriptions: ["Incluye toda la pizarra para que las notas sigan legibles.", "Alinea la página del pasaporte antes de captar sus datos.", "Revisa los bordes y la claridad antes de exportar."],
    premiumEyebrow: "SCANNERPLUSX PREMIUM", premiumTitle: "Más espacio para crear", premiumIntro: "Premium quita anuncios tras verificar la suscripción y destaca las herramientas PDF y el editor avanzado.",
    premiumBenefits: ["Sin anuncios", "Herramientas PDF", "Editor avanzado"], monthly: "Plan mensual", yearly: "Plan anual",
    premiumNote: "Elige y compra el plan dentro de la app. Google Play muestra el precio local y las condiciones antes del pago.", playCta: "Ver en Google Play",
  },
  fr: {
    navTools: "Outils", navTutorials: "Tutoriels", navPremium: "Premium",
    toolsEyebrow: "OUTILS DE L'APPLICATION", toolsTitle: "Un outil pour chaque document", toolsIntro: "Numérisez, reconnaissez, modifiez, convertissez et classez dans une seule application Android avec ses vraies icônes.",
    toolText: [
      ["Scanner de documents", "Capturez des pages nettes."], ["Numérisation par lot", "Capturez plusieurs pages à la fois."],
      ["Identité et passeport", "Cadrez les pièces d'identité."], ["Tableau blanc", "Transformez les notes en document."],
      ["Texte OCR", "Lisez le texte des images et scans."], ["Traduction", "Traduisez le texte extrait."],
      ["Amélioration d'image", "Rendez les scans plus lisibles."], ["Compter les objets", "Comptez les éléments d'une image."],
      ["Éditeur PDF", "Relisez et modifiez les pages PDF."], ["Signature", "Signez vos documents."],
      ["Fusionner des PDF", "Réunissez plusieurs PDF."], ["Compresser un PDF", "Réduisez sa taille pour le partager."],
    ],
    extraTitle: "Choisissez le fichier voulu", extraText: "Divisez un PDF, réunissez des images ou exportez vers un format bureautique. Des modes photo couvrent aussi les diapositives, les codes et les portraits d'identité.",
    extraNames: ["Diviser PDF", "Images vers PDF", "PDF vers images", "Vers Word", "Vers Excel", "Vers PowerPoint", "Scanner des diapos", "Scanner QR", "Formules", "Questions", "Photo d'identité", "Restaurer une photo"],
    demosEyebrow: "VOIR LES ÉTAPES", demosTitle: "Trois tâches courantes", demosIntro: "De courts exemples montrent comment cadrer un tableau, un passeport ou une page avant l'enregistrement.",
    demoNames: ["Tableau blanc", "Passeport", "Document"], demoAlt: ["Tutoriel animé de numérisation du tableau", "Tutoriel animé de numérisation du passeport", "Tutoriel animé de numérisation d'un document"],
    demoDescriptions: ["Gardez tout le tableau dans le cadre pour lire les notes.", "Alignez la page du passeport avant de saisir ses détails.", "Vérifiez les bords et la netteté avant l'export."],
    premiumEyebrow: "SCANNERPLUSX PREMIUM", premiumTitle: "Plus de possibilités", premiumIntro: "Premium supprime les publicités après vérification de l'abonnement et met en avant les outils PDF et l'éditeur avancé.",
    premiumBenefits: ["Sans publicité", "Outils PDF", "Éditeur avancé"], monthly: "Offre mensuelle", yearly: "Offre annuelle",
    premiumNote: "Choisissez et achetez l'offre dans l'application. Google Play affiche le prix local et les conditions avant le paiement.", playCta: "Voir sur Google Play",
  },
  de: {
    navTools: "Werkzeuge", navTutorials: "Anleitungen", navPremium: "Premium",
    toolsEyebrow: "WERKZEUGE DER APP", toolsTitle: "Das passende Werkzeug für jedes Dokument", toolsIntro: "Scannen, erkennen, bearbeiten, umwandeln und ordnen in einer Android App mit den Originalsymbolen von ScannerPlusX.",
    toolText: [
      ["Dokumentenscanner", "Seiten klar aufnehmen und speichern."], ["Stapelscan", "Mehrere Seiten in einem Durchgang scannen."],
      ["Ausweis und Pass", "Ausweisdokumente sauber erfassen."], ["Whiteboard", "Tafelnotizen als Dokument sichern."],
      ["OCR Text", "Text aus Bildern und Scans lesen."], ["Übersetzen", "Erkannten Text übersetzen."],
      ["Bildverbesserung", "Scans lesbarer machen."], ["Objekte zählen", "Elemente im Bild zählen."],
      ["PDF Editor", "PDF Seiten prüfen und bearbeiten."], ["Unterschrift", "Dokumente unterschreiben."],
      ["PDF zusammenführen", "Mehrere PDFs verbinden."], ["PDF komprimieren", "Dateigröße zum Teilen reduzieren."],
    ],
    extraTitle: "Wähle die passende Ausgabedatei", extraText: "Teile ein PDF, fasse Bilder zusammen oder exportiere Inhalte in ein Office-Format. Weitere Kameramodi helfen bei Folien, Codes und Passbildern.",
    extraNames: ["PDF teilen", "Bilder zu PDF", "PDF zu Bildern", "Zu Word", "Zu Excel", "Zu PowerPoint", "Folien scannen", "QR Scanner", "Formeln", "Fragen", "Passfoto", "Fotos restaurieren"],
    demosEyebrow: "ABLAUF ANSEHEN", demosTitle: "Drei häufige Scanaufgaben", demosIntro: "Kurze Beispiele zeigen, worauf du beim Erfassen eines Whiteboards, Passes oder Dokuments achten solltest.",
    demoNames: ["Whiteboard", "Pass", "Dokument"], demoAlt: ["Animierte Whiteboard Anleitung", "Animierte Pass Anleitung", "Animierte Dokument Anleitung"],
    demoDescriptions: ["Nimm die ganze Tafel auf, damit Notizen lesbar bleiben.", "Richte die Passseite vor der Aufnahme aus.", "Prüfe Ränder und Lesbarkeit vor dem Export."],
    premiumEyebrow: "SCANNERPLUSX PREMIUM", premiumTitle: "Mehr Raum für deine Arbeit", premiumIntro: "Premium entfernt Werbung nach bestätigtem Abo und stellt PDF Werkzeuge und den erweiterten Editor vor.",
    premiumBenefits: ["Ohne Werbung", "PDF Werkzeuge", "Erweiterter Editor"], monthly: "Monatsabo", yearly: "Jahresabo",
    premiumNote: "Abo in der App auswählen und kaufen. Google Play zeigt lokale Preise und Bedingungen vor der Zahlung.", playCta: "Bei Google Play ansehen",
  },
  hi: {
    navTools: "टूल", navTutorials: "ट्यूटोरियल", navPremium: "प्रीमियम",
    toolsEyebrow: "ऐप के असली टूल", toolsTitle: "हर दस्तावेज़ के लिए सही टूल", toolsIntro: "ScannerPlusX के मूल आइकन के साथ एक Android ऐप में स्कैन, टेक्स्ट पहचान, संपादन, रूपांतरण और संगठन करें।",
    toolText: [
      ["दस्तावेज़ स्कैनर", "पन्ने स्कैन करके साफ़ दस्तावेज़ सहेजें।"], ["बैच स्कैन", "एक बार में कई पन्ने स्कैन करें।"],
      ["पहचान पत्र और पासपोर्ट", "पहचान दस्तावेज़ सही फ़्रेम में लें।"], ["व्हाइटबोर्ड स्कैन", "बोर्ड के नोट दस्तावेज़ में बदलें।"],
      ["OCR टेक्स्ट", "स्कैन और तस्वीरों से टेक्स्ट पढ़ें।"], ["अनुवाद", "निकाले गए टेक्स्ट का अनुवाद करें।"],
      ["छवि सुधार", "स्कैन की स्पष्टता बढ़ाएँ।"], ["वस्तुओं की गिनती", "तस्वीर में चीज़ें गिनें।"],
      ["PDF संपादक", "PDF पन्ने देखें और संपादित करें।"], ["हस्ताक्षर", "दस्तावेज़ पर हस्ताक्षर करें।"],
      ["PDF मिलाएँ", "कई PDF एक फ़ाइल में जोड़ें।"], ["PDF छोटा करें", "साझा करने के लिए आकार घटाएँ।"],
    ],
    extraTitle: "ज़रूरत की फ़ाइल बनाएँ", extraText: "PDF बाँटें, तस्वीरें एक फ़ाइल में जोड़ें या सामग्री को ऑफिस फ़ॉर्मैट में निर्यात करें। स्लाइड, कोड और ID फ़ोटो के कैमरा मोड भी हैं।",
    extraNames: ["PDF बाँटें", "तस्वीर से PDF", "PDF से तस्वीर", "Word में", "Excel में", "PowerPoint में", "स्लाइड स्कैन", "QR स्कैनर", "सूत्र", "प्रश्न", "ID फ़ोटो", "फ़ोटो सुधार"],
    demosEyebrow: "तरीका देखें", demosTitle: "स्कैन के तीन आम काम", demosIntro: "छोटे उदाहरण बताते हैं कि व्हाइटबोर्ड, पासपोर्ट या पेज सहेजने से पहले फ़्रेम में क्या रखें।",
    demoNames: ["व्हाइटबोर्ड", "पासपोर्ट", "दस्तावेज़"], demoAlt: ["व्हाइटबोर्ड स्कैन का एनिमेटेड ट्यूटोरियल", "पासपोर्ट स्कैन का एनिमेटेड ट्यूटोरियल", "दस्तावेज़ स्कैन का एनिमेटेड ट्यूटोरियल"],
    demoDescriptions: ["नोट पढ़ने योग्य रखने के लिए पूरा बोर्ड फ़्रेम में लें।", "जानकारी कैप्चर करने से पहले पासपोर्ट पेज सीधा रखें।", "निर्यात से पहले पेज के किनारे और स्पष्टता जाँचें।"],
    premiumEyebrow: "SCANNERPLUSX PREMIUM", premiumTitle: "काम के लिए और जगह", premiumIntro: "सदस्यता सत्यापित होने के बाद Premium विज्ञापन हटाता है और PDF टूल तथा उन्नत संपादक देता है।",
    premiumBenefits: ["बिना विज्ञापन", "PDF टूल", "उन्नत संपादक"], monthly: "मासिक योजना", yearly: "वार्षिक योजना",
    premiumNote: "ऐप के अंदर योजना चुनें। भुगतान से पहले Google Play स्थानीय कीमत और शर्तें दिखाता है।", playCta: "Google Play पर देखें",
  },
};

type Atlas = { width: number; height: number; regions: Record<string, { x: number; y: number; width: number; height: number }> };

function AtlasIcon({ name, premium = false, size = 58 }: { name: string; premium?: boolean; size?: number }) {
  const atlas = (premium ? premiumAtlas : toolAtlas) as Atlas;
  const region = atlas.regions[name];
  if (!region) return null;
  const scale = size / region.width;
  return <span aria-hidden="true" className="inline-block shrink-0" style={{ width: size, height: size, backgroundImage: `url(/images/app/${premium ? "premium-icons-dark.png" : "tool-icons-dark.webp"})`, backgroundRepeat: "no-repeat", backgroundSize: `${atlas.width * scale}px ${atlas.height * scale}px`, backgroundPosition: `${-region.x * scale}px ${-region.y * scale}px` }} />;
}

export default function ProductHighlights({ locale }: { locale: Locale }) {
  const t = productCopy[locale];
  const tutorials = ["whiteboard-scan", "passport-single-scan", "single-document-passport"];

  return <>
    <section id="tools" className="container-wide scroll-mt-24 py-20 lg:py-28">
      <div className="max-w-3xl"><span className="eyebrow">{t.toolsEyebrow}</span><h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">{t.toolsTitle}</h2><p className="mt-5 text-base leading-8 text-[#a6a9bd]">{t.toolsIntro}</p></div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {toolIds.map((id, i) => <article key={id} className="surface glow-card rounded-[24px] p-5 transition hover:-translate-y-1 hover:border-[#8c80ff]/35"><AtlasIcon name={id} /><h3 className="mt-4 text-lg font-semibold">{t.toolText[i][0]}</h3><p className="mt-2 text-sm leading-7 text-[#a6a9bd]">{t.toolText[i][1]}</p></article>)}
      </div>
      <div className="mt-8 rounded-[30px] border border-white/10 bg-[#111629] p-6 lg:p-9">
        <h3 className="text-2xl font-bold">{t.extraTitle}</h3>
        <p className="mt-3 max-w-3xl leading-8 text-[#a6a9bd]">{t.extraText}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {extraIds.map((id, i) => <li key={id} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#d4d8ea]">{t.extraNames[i]}</li>)}
        </ul>
      </div>
    </section>

    <section id="tutorials" className="scroll-mt-24 bg-[#0d1020] py-20 lg:py-28">
      <div className="container-wide">
        <div className="max-w-3xl"><span className="eyebrow">{t.demosEyebrow}</span><h2 className="mt-4 text-4xl font-bold md:text-5xl">{t.demosTitle}</h2><p className="mt-5 leading-8 text-[#a6a9bd]">{t.demosIntro}</p></div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((name, i) => <figure key={name} className="surface overflow-hidden rounded-[26px]"><div className="relative aspect-[4/5] overflow-hidden bg-black"><TutorialVideo name={name} alt={t.demoAlt[i]} /></div><figcaption className="p-5"><strong className="block text-lg">{t.demoNames[i]}</strong><span className="mt-2 block text-sm leading-7 text-[#a6a9bd]">{t.demoDescriptions[i]}</span></figcaption></figure>)}
        </div>
      </div>
    </section>

    <section id="premium" className="container-wide scroll-mt-24 py-20 lg:py-28">
      <div className="overflow-hidden rounded-[32px] border border-[#7972e7]/30 bg-gradient-to-br from-[#1d2450] to-[#0f1428] p-7 lg:p-12">
        <span className="eyebrow">{t.premiumEyebrow}</span>
        <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">{t.premiumTitle}</h2>
        <p className="mt-5 max-w-3xl leading-8 text-[#c3c8df]">{t.premiumIntro}</p>
        <div className="mt-7 grid gap-3 sm:grid-cols-3">{(["no_ads", "document", "sparkle"] as const).map((icon, i) => <div key={icon} className="rounded-2xl border border-white/10 bg-white/5 p-4"><AtlasIcon name={icon} premium size={40} /><span className="mt-2 block text-sm font-semibold">{t.premiumBenefits[i]}</span></div>)}</div>
        <div className="mt-7 flex flex-wrap gap-3"><span className="rounded-full border border-[#a59dff]/35 px-4 py-2 text-sm">{t.monthly}</span><span className="rounded-full border border-[#a59dff]/35 px-4 py-2 text-sm">{t.yearly}</span></div>
        <p className="mt-5 max-w-3xl text-xs leading-6 text-[#aeb4d1]">{t.premiumNote}</p>
        <a href={playUrl} target="_blank" rel="noopener noreferrer" className="glow-button mt-7 inline-flex rounded-2xl bg-[#5c66e8] px-6 py-3 font-semibold text-white transition hover:bg-[#737cf5]">{t.playCta}</a>
      </div>
    </section>
  </>;
}
