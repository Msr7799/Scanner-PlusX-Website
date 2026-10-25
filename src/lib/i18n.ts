// المسار: scannerplusx-web/src/lib/i18n.ts
// الوظيفة: واجهة موقع ScannerPlusX والمحتوى متعدد اللغات.
// الدوال: isLocale، localePath، localeAlternates.
export const locales = ["en", "ar", "es", "fr", "de", "hi"] as const;
export type Locale = (typeof locales)[number];
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://scanner-plusx.vercel.app").replace(/\/$/, "");
export const playUrl = process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL?.startsWith("https://play.google.com/store/apps/details?id=com.scannerplusx.app")
  ? process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL
  : "https://play.google.com/store/apps/details?id=com.scannerplusx.app";

export const languageNames: Record<Locale, string> = {
  ar: "العربية", en: "English", es: "Español", fr: "Français", de: "Deutsch", hi: "हिन्दी",
};

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}

export function localePath(locale: Locale, page: "" | "privacy" | "support" = ""): string {
  return `${locale === "en" ? "" : `/${locale}`}${page ? `/${page}` : ""}` || "/";
}

export function localeAlternates(page: "" | "privacy" | "support" = "") {
  return {
    ...Object.fromEntries(locales.map((locale) => [locale, `${siteUrl}${localePath(locale, page)}`])),
    "x-default": `${siteUrl}${localePath("en", page)}`,
  };
}

type HomeCopy = {
  nav: [string, string, string, string]; menuOpen: string; menuClose: string;
  playSoon: string; playDownload: string; playHint: string; discover: string;
  heroBadge: string; heroLine1: string; heroLine2: string; heroBody: string;
  heroPills: [string, string, string]; artAlt: string; readyShare: string; pdfReady: string;
  featuresEyebrow: string; featuresLine1: string; featuresLine2: string; featuresBody: string;
  cards: [{ title: string; text: string }, { title: string; text: string }, { title: string; text: string }];
  workflowEyebrow: string; workflowTitle: string; workflowBody: string;
  steps: [{ title: string; text: string }, { title: string; text: string }, { title: string; text: string }];
  privacyEyebrow: string; privacyLine1: string; privacyLine2: string; privacyBody: string; privacyLink: string;
  privacyCards: [string, string, string]; developerEyebrow: string; developerTitle: string; developerBody: string;
  ctaEyebrow: string; ctaTitle: string; ctaBody: string;
  footerBody: string; footerSite: string; footerInfo: string; footerContact: string; footerEmail: string; footerSlogan: string; support: string;
};

export const homeCopy: Record<Locale, HomeCopy> = {
  ar: {
    nav: ["المميزات", "كيف يعمل", "الخصوصية", "المطور"], menuOpen: "فتح القائمة", menuClose: "إغلاق القائمة",
    playSoon: "قريبًا على Google Play", playDownload: "تحميل من Google Play", playHint: "يُفعّل الرابط عند نشر التطبيق على Google Play", discover: "اكتشف المميزات",
    heroBadge: "مسح المستندات وأدوات PDF على Android", heroLine1: "من الورق إلى PDF.", heroLine2: "كل خطوة في مكان واحد.",
    heroBody: "صوّر إيصالًا أو عقدًا أو سبورة، أو استورد ملفًا موجودًا. صحّح حدود الصفحة، استخرج النص عند الحاجة، ثم احفظ المستند ونظّمه أو شاركه بصيغة PDF.",
    heroPills: ["قص وتحسين الصفحات", "استخراج النص OCR", "تنظيم وتصدير PDF"], artAlt: "لوحة تعرض أدوات ScannerPlusX لمسح المستندات والتعرف على النص وتحرير PDF", readyShare: "من الالتقاط إلى الملف النهائي", pdfReady: "نظرة على أدوات التطبيق للمستندات والصور وPDF.",
    featuresEyebrow: "ما الذي يمكنك فعله؟", featuresLine1: "ابدأ بالمستند.", featuresLine2: "واختر ما تحتاجه.",
    featuresBody: "بدل إعادة تصوير الورقة أو التنقل بين الملفات، أكمل العمل على الصفحة نفسها خطوة بخطوة.",
    cards: [{ title: "صفحة أسهل للقراءة", text: "اضبط حدود الورقة وحسّن صورتها قبل حفظ نسخة رقمية." }, { title: "معلومة يمكنك نسخها", text: "استخرج النص من صورة أو مستند ممسوح لتستخدمه دون إعادة كتابته." }, { title: "ملفات يسهل الرجوع إليها", text: "احتفظ بالمستندات في مكتبة منظمة وافتحها عندما تحتاجها." }],
    workflowEyebrow: "سير عمل بسيط", workflowTitle: "ثلاث خطوات. مستند جاهز.", workflowBody: "ابدأ بالكاميرا أو بملف موجود، ثم راجع الصفحات قبل حفظها أو تصديرها.",
    steps: [{ title: "التقط", text: "وجّه الكاميرا إلى المستند أو استورد ملفًا موجودًا." }, { title: "حسّن", text: "راجع القص، اضبط الصفحات واستخرج النص عند الحاجة." }, { title: "احفظ وشارك", text: "احتفظ بالملف داخل مكتبتك أو صدّره للمشاركة." }],
    privacyEyebrow: "الثقة تبدأ بالوضوح", privacyLine1: "ملفاتك مهمة.", privacyLine2: "وأنت من يقرر.", privacyBody: "المسح والحفظ الأساسيان يتمان على جهازك. الميزات المتصلة مثل المزامنة وأدوات الذكاء الاصطناعي تعمل عند اختيار استخدامها. تعرّف على التفاصيل في سياسة الخصوصية.", privacyLink: "اقرأ سياسة الخصوصية",
    privacyCards: ["تحكم بالخصوصية", "خيارات واضحة", "مستنداتك، قرارك"], developerEyebrow: "صُنع بعناية", developerTitle: "تطوير محمد الرميحي", developerBody: "تطبيق يركز على تجربة مستندات واضحة وعملية. تابع أعمال المطور وتواصل معه عبر GitHub.",
    ctaEyebrow: "جاهز للخطوة التالية؟", ctaTitle: "خلّ مستنداتك جاهزة معك.", ctaBody: "جرّب مسح ورقة، استخراج نصها، وتجهيز PDF لمشاركته من هاتفك.",
    footerBody: "مسح المستندات، تنظيمها وإنجاز المزيد من مكان واحد.", footerSite: "الموقع", footerInfo: "معلومات", footerContact: "تواصل", footerEmail: "البريد الإلكتروني", footerSlogan: "صُمّم ليجعل العمل بالمستندات أبسط.", support: "الدعم",
  },
  en: {
    nav: ["Features", "How it works", "Privacy", "Developer"], menuOpen: "Open menu", menuClose: "Close menu",
    playSoon: "Coming soon on Google Play", playDownload: "Get it on Google Play", playHint: "The link will be available when the app is published on Google Play", discover: "Explore features",
    heroBadge: "Document scanning and PDF tools for Android", heroLine1: "From paper to PDF.", heroLine2: "Finish it on your phone.",
    heroBody: "Capture a receipt, contract, or whiteboard—or import a file. Adjust the page edges, extract text when needed, then save, organize, or share the finished PDF.",
    heroPills: ["Crop and enhance pages", "Extract text with OCR", "Organize and export PDFs"], artAlt: "Overview of ScannerPlusX tools for scanning documents, recognizing text, and editing PDFs", readyShare: "From capture to finished file", pdfReady: "A look at the app's document, image, and PDF tools.",
    featuresEyebrow: "What can you do?", featuresLine1: "Start with a document.", featuresLine2: "Choose what comes next.",
    featuresBody: "Work through each page without retaking the photo or moving between scattered files.",
    cards: [{ title: "Make pages readable", text: "Adjust the edges and improve a page before saving a digital copy." }, { title: "Reuse the words", text: "Extract text from a photo or scan instead of typing it again." }, { title: "Find files again", text: "Keep documents in an organized library and reopen them when needed." }],
    workflowEyebrow: "A simple workflow", workflowTitle: "Three steps. One ready document.", workflowBody: "Start with the camera or an existing file, then review the pages before saving or exporting.",
    steps: [{ title: "Capture", text: "Point your camera at a document or import an existing file." }, { title: "Refine", text: "Check the crop, arrange pages, and extract text when needed." }, { title: "Save and share", text: "Keep it in your library or export it to share." }],
    privacyEyebrow: "Trust begins with clarity", privacyLine1: "Your files matter.", privacyLine2: "You decide.", privacyBody: "Basic scanning and saving happen on your device. Connected features such as sync and AI tools run when you choose to use them. See the privacy policy for details.", privacyLink: "Read the privacy policy",
    privacyCards: ["Privacy control", "Clear choices", "Your documents, your choice"], developerEyebrow: "Made with care", developerTitle: "Developed by Mohamed Alromaihi", developerBody: "An app focused on a clear, practical document experience. Follow the developer's work and connect on GitHub.",
    ctaEyebrow: "Ready for the next step?", ctaTitle: "Keep your documents ready wherever you are.", ctaBody: "Scan a page, extract its text, and prepare a PDF to share from your phone.",
    footerBody: "Scan, organize, and do more with documents in one place.", footerSite: "Website", footerInfo: "Information", footerContact: "Contact", footerEmail: "Email", footerSlogan: "Designed to make document work simpler.", support: "Support",
  },
  es: {
    nav: ["Funciones", "Cómo funciona", "Privacidad", "Desarrollador"], menuOpen: "Abrir menú", menuClose: "Cerrar menú",
    playSoon: "Próximamente en Google Play", playDownload: "Descargar en Google Play", playHint: "El enlace estará disponible cuando la aplicación se publique en Google Play", discover: "Explorar funciones",
    heroBadge: "Escáner de documentos y herramientas PDF para Android", heroLine1: "Del papel al PDF.", heroLine2: "Termina el trabajo en tu móvil.",
    heroBody: "Fotografía un recibo, contrato o pizarra, o importa un archivo. Ajusta los bordes, extrae el texto si lo necesitas y guarda, organiza o comparte el PDF terminado.",
    heroPills: ["Recorta y mejora páginas", "Extrae texto con OCR", "Organiza y exporta PDF"], artAlt: "Resumen de las herramientas de ScannerPlusX para escanear documentos, reconocer texto y editar PDF", readyShare: "De la captura al archivo final", pdfReady: "Herramientas para documentos, imágenes y PDF.",
    featuresEyebrow: "¿Qué puedes hacer?", featuresLine1: "Empieza con un documento.", featuresLine2: "Elige el siguiente paso.",
    featuresBody: "Trabaja con cada página sin repetir la foto ni perder archivos entre varias aplicaciones.",
    cards: [{ title: "Páginas legibles", text: "Ajusta los bordes y mejora la imagen antes de guardar una copia digital." }, { title: "Texto reutilizable", text: "Extrae texto de una foto o escaneo sin volver a escribirlo." }, { title: "Archivos a mano", text: "Guarda tus documentos en una biblioteca organizada y vuelve a abrirlos cuando quieras." }],
    workflowEyebrow: "Un proceso sencillo", workflowTitle: "Tres pasos. Un documento listo.", workflowBody: "Empieza con la cámara o un archivo y revisa las páginas antes de guardar o exportar.",
    steps: [{ title: "Captura", text: "Enfoca un documento con la cámara o importa un archivo." }, { title: "Mejora", text: "Revisa el recorte, ordena las páginas y extrae texto si lo necesitas." }, { title: "Guarda y comparte", text: "Consérvalo en tu biblioteca o expórtalo." }],
    privacyEyebrow: "La confianza empieza con claridad", privacyLine1: "Tus archivos importan.", privacyLine2: "Tú decides.", privacyBody: "El escaneo y guardado básicos se realizan en tu dispositivo. Las funciones conectadas, como la sincronización y la IA, funcionan cuando eliges usarlas. Consulta la política de privacidad.", privacyLink: "Leer la política de privacidad",
    privacyCards: ["Control de privacidad", "Opciones claras", "Tus documentos, tu decisión"], developerEyebrow: "Hecho con cuidado", developerTitle: "Desarrollado por Mohamed Alromaihi", developerBody: "Una experiencia documental clara y práctica. Sigue al desarrollador y contacta con él en GitHub.",
    ctaEyebrow: "¿Listo para el siguiente paso?", ctaTitle: "Ten tus documentos listos contigo.", ctaBody: "Escanea una página, extrae su texto y prepara un PDF para compartir desde el móvil.",
    footerBody: "Escanea, organiza y haz más con tus documentos en un solo lugar.", footerSite: "Sitio", footerInfo: "Información", footerContact: "Contacto", footerEmail: "Correo electrónico", footerSlogan: "Diseñado para simplificar el trabajo con documentos.", support: "Ayuda",
  },
  fr: {
    nav: ["Fonctionnalités", "Fonctionnement", "Confidentialité", "Développeur"], menuOpen: "Ouvrir le menu", menuClose: "Fermer le menu",
    playSoon: "Bientôt sur Google Play", playDownload: "Télécharger sur Google Play", playHint: "Le lien sera disponible après la publication sur Google Play", discover: "Découvrir les fonctionnalités",
    heroBadge: "Numérisation et outils PDF sur Android", heroLine1: "Du papier au PDF.", heroLine2: "Terminez sur votre téléphone.",
    heroBody: "Photographiez un reçu, un contrat ou un tableau, ou importez un fichier. Ajustez les bords, extrayez le texte si besoin, puis enregistrez, classez ou partagez le PDF final.",
    heroPills: ["Recadrer et améliorer", "Extraire le texte par OCR", "Classer et exporter des PDF"], artAlt: "Aperçu des outils ScannerPlusX pour numériser, reconnaître le texte et modifier des PDF", readyShare: "De la capture au fichier final", pdfReady: "Des outils pour les documents, les images et les PDF.",
    featuresEyebrow: "Que pouvez-vous faire ?", featuresLine1: "Partez d'un document.", featuresLine2: "Choisissez la suite.",
    featuresBody: "Travaillez sur chaque page sans reprendre la photo ni disperser vos fichiers entre plusieurs applications.",
    cards: [{ title: "Des pages lisibles", text: "Ajustez les bords et améliorez l'image avant d'enregistrer une copie numérique." }, { title: "Du texte réutilisable", text: "Extrayez le texte d'une photo ou d'un scan sans le retaper." }, { title: "Des fichiers faciles à retrouver", text: "Classez les documents dans une bibliothèque et rouvrez-les au besoin." }],
    workflowEyebrow: "Un parcours simple", workflowTitle: "Trois étapes. Un document prêt.", workflowBody: "Partez de l'appareil photo ou d'un fichier, puis vérifiez les pages avant de les enregistrer ou de les exporter.",
    steps: [{ title: "Capturez", text: "Visez le document avec l'appareil photo ou importez un fichier." }, { title: "Améliorez", text: "Vérifiez le cadrage, organisez les pages et extrayez le texte si nécessaire." }, { title: "Enregistrez", text: "Gardez le fichier dans la bibliothèque ou exportez-le." }],
    privacyEyebrow: "La confiance commence par la clarté", privacyLine1: "Vos fichiers comptent.", privacyLine2: "Vous décidez.", privacyBody: "La numérisation et l'enregistrement de base se font sur votre appareil. La synchronisation et les outils d'IA fonctionnent quand vous choisissez de les utiliser. Consultez la politique de confidentialité.", privacyLink: "Lire la politique de confidentialité",
    privacyCards: ["Contrôle de la confidentialité", "Choix transparents", "Vos documents, votre choix"], developerEyebrow: "Créé avec soin", developerTitle: "Développé par Mohamed Alromaihi", developerBody: "Une expérience documentaire claire et pratique. Suivez le travail du développeur et contactez-le sur GitHub.",
    ctaEyebrow: "Prêt pour la suite ?", ctaTitle: "Gardez vos documents prêts avec vous.", ctaBody: "Numérisez une page, extrayez son texte et préparez un PDF à partager depuis votre téléphone.",
    footerBody: "Numérisez, organisez et faites-en plus au même endroit.", footerSite: "Site", footerInfo: "Informations", footerContact: "Contact", footerEmail: "E-mail", footerSlogan: "Conçu pour simplifier le travail documentaire.", support: "Assistance",
  },
  de: {
    nav: ["Funktionen", "So funktioniert es", "Datenschutz", "Entwickler"], menuOpen: "Menü öffnen", menuClose: "Menü schließen",
    playSoon: "Bald bei Google Play", playDownload: "Bei Google Play herunterladen", playHint: "Der Link ist nach der Veröffentlichung bei Google Play verfügbar", discover: "Funktionen entdecken",
    heroBadge: "Dokumentenscanner und PDF-Werkzeuge für Android", heroLine1: "Vom Papier zum PDF.", heroLine2: "Alles auf deinem Smartphone.",
    heroBody: "Fotografiere einen Beleg, Vertrag oder ein Whiteboard – oder importiere eine Datei. Passe die Seitenränder an, erkenne bei Bedarf Text und speichere, ordne oder teile das fertige PDF.",
    heroPills: ["Seiten zuschneiden und verbessern", "Text mit OCR erfassen", "PDFs ordnen und exportieren"], artAlt: "Übersicht der ScannerPlusX Werkzeuge zum Scannen, Erkennen von Text und Bearbeiten von PDFs", readyShare: "Von der Aufnahme zur fertigen Datei", pdfReady: "Werkzeuge für Dokumente, Bilder und PDFs.",
    featuresEyebrow: "Was kannst du tun?", featuresLine1: "Starte mit einem Dokument.", featuresLine2: "Wähle den nächsten Schritt.",
    featuresBody: "Bearbeite jede Seite, ohne sie erneut zu fotografieren oder Dateien in mehreren Apps zu suchen.",
    cards: [{ title: "Lesbare Seiten", text: "Passe die Ränder an und verbessere das Bild, bevor du es digital speicherst." }, { title: "Text weiterverwenden", text: "Erkenne Text aus einem Foto oder Scan, statt ihn abzutippen." }, { title: "Dateien wiederfinden", text: "Bewahre Dokumente in einer geordneten Bibliothek auf und öffne sie bei Bedarf erneut." }],
    workflowEyebrow: "Einfacher Ablauf", workflowTitle: "Drei Schritte. Ein fertiges Dokument.", workflowBody: "Beginne mit der Kamera oder einer vorhandenen Datei und prüfe die Seiten vor dem Speichern oder Exportieren.",
    steps: [{ title: "Aufnehmen", text: "Kamera auf das Dokument richten oder eine Datei importieren." }, { title: "Verbessern", text: "Zuschnitt prüfen, Seiten ordnen und bei Bedarf Text erfassen." }, { title: "Speichern und teilen", text: "In der Bibliothek behalten oder zum Teilen exportieren." }],
    privacyEyebrow: "Vertrauen beginnt mit Klarheit", privacyLine1: "Deine Dateien sind wichtig.", privacyLine2: "Du entscheidest.", privacyBody: "Einfaches Scannen und Speichern findet auf deinem Gerät statt. Verbundene Funktionen wie Synchronisierung und KI-Werkzeuge laufen, wenn du sie auswählst. Einzelheiten stehen in der Datenschutzerklärung.", privacyLink: "Datenschutzerklärung lesen",
    privacyCards: ["Datenschutz steuern", "Klare Optionen", "Deine Dokumente, deine Entscheidung"], developerEyebrow: "Mit Sorgfalt entwickelt", developerTitle: "Entwickelt von Mohamed Alromaihi", developerBody: "Eine App für einen klaren, praktischen Umgang mit Dokumenten. Entdecke die Arbeit des Entwicklers auf GitHub.",
    ctaEyebrow: "Bereit für den nächsten Schritt?", ctaTitle: "Halte deine Dokumente unterwegs bereit.", ctaBody: "Scanne eine Seite, erkenne ihren Text und bereite ein PDF zum Teilen auf deinem Smartphone vor.",
    footerBody: "Dokumente scannen, ordnen und mehr erledigen – an einem Ort.", footerSite: "Website", footerInfo: "Informationen", footerContact: "Kontakt", footerEmail: "E-Mail", footerSlogan: "Entwickelt, um Dokumentenarbeit einfacher zu machen.", support: "Hilfe",
  },
  hi: {
    nav: ["विशेषताएँ", "यह कैसे काम करता है", "गोपनीयता", "डेवलपर"], menuOpen: "मेन्यू खोलें", menuClose: "मेन्यू बंद करें",
    playSoon: "जल्द ही Google Play पर", playDownload: "Google Play से डाउनलोड करें", playHint: "ऐप प्रकाशित होने पर Google Play लिंक उपलब्ध होगा", discover: "विशेषताएँ देखें",
    heroBadge: "Android पर दस्तावेज़ स्कैन और PDF टूल", heroLine1: "कागज़ से PDF तक।", heroLine2: "सब कुछ फ़ोन पर।",
    heroBody: "रसीद, अनुबंध या व्हाइटबोर्ड की तस्वीर लें, या फ़ाइल आयात करें। पेज के किनारे ठीक करें, ज़रूरत हो तो टेक्स्ट निकालें, फिर तैयार PDF को सहेजें, व्यवस्थित करें या साझा करें।",
    heroPills: ["पेज क्रॉप और सुधारें", "OCR से टेक्स्ट निकालें", "PDF व्यवस्थित और निर्यात करें"], artAlt: "ScannerPlusX के दस्तावेज़ स्कैन, टेक्स्ट पहचान और PDF संपादन टूल का परिचय", readyShare: "कैप्चर से तैयार फ़ाइल तक", pdfReady: "दस्तावेज़, तस्वीर और PDF के लिए ऐप के टूल।",
    featuresEyebrow: "आप क्या कर सकते हैं?", featuresLine1: "दस्तावेज़ से शुरू करें।", featuresLine2: "अगला काम चुनें।",
    featuresBody: "हर पेज पर काम करें, बिना दोबारा तस्वीर लेने या अलग-अलग ऐप में फ़ाइल ढूँढ़ने के।",
    cards: [{ title: "पढ़ने योग्य पेज", text: "डिजिटल कॉपी सहेजने से पहले किनारे ठीक करें और तस्वीर साफ़ करें।" }, { title: "फिर इस्तेमाल करने योग्य टेक्स्ट", text: "फ़ोटो या स्कैन से टेक्स्ट निकालें, ताकि उसे दोबारा टाइप न करना पड़े।" }, { title: "आसानी से मिलने वाली फ़ाइलें", text: "दस्तावेज़ व्यवस्थित लाइब्रेरी में रखें और ज़रूरत पर फिर खोलें।" }],
    workflowEyebrow: "सरल तरीका", workflowTitle: "तीन चरण। दस्तावेज़ तैयार।", workflowBody: "कैमरे या मौजूदा फ़ाइल से शुरू करें, फिर सहेजने या निर्यात करने से पहले पेज जाँचें।",
    steps: [{ title: "कैप्चर करें", text: "कैमरा दस्तावेज़ की ओर करें या मौजूदा फ़ाइल आयात करें।" }, { title: "बेहतर बनाएँ", text: "क्रॉप जाँचें, पेज व्यवस्थित करें और ज़रूरत हो तो टेक्स्ट निकालें।" }, { title: "सहेजें और साझा करें", text: "लाइब्रेरी में रखें या साझा करने के लिए निर्यात करें।" }],
    privacyEyebrow: "भरोसा स्पष्टता से शुरू होता है", privacyLine1: "आपकी फ़ाइलें महत्वपूर्ण हैं।", privacyLine2: "फ़ैसला आपका है।", privacyBody: "बुनियादी स्कैन और सेव आपके डिवाइस पर होते हैं। सिंक और AI जैसे ऑनलाइन टूल तभी चलते हैं जब आप उन्हें चुनते हैं। विवरण गोपनीयता नीति में देखें।", privacyLink: "गोपनीयता नीति पढ़ें",
    privacyCards: ["गोपनीयता नियंत्रण", "स्पष्ट विकल्प", "आपके दस्तावेज़, आपका फ़ैसला"], developerEyebrow: "ध्यान से बनाया गया", developerTitle: "मोहम्मद अलरोमैही द्वारा विकसित", developerBody: "दस्तावेज़ों के लिए स्पष्ट और व्यावहारिक अनुभव। डेवलपर का काम देखें और GitHub पर संपर्क करें।",
    ctaEyebrow: "अगले चरण के लिए तैयार?", ctaTitle: "अपने दस्तावेज़ हमेशा तैयार रखें।", ctaBody: "फ़ोन से पेज स्कैन करें, उसका टेक्स्ट निकालें और साझा करने के लिए PDF तैयार करें।",
    footerBody: "दस्तावेज़ स्कैन करें, व्यवस्थित करें और एक जगह से ज़्यादा काम करें।", footerSite: "वेबसाइट", footerInfo: "जानकारी", footerContact: "संपर्क", footerEmail: "ईमेल", footerSlogan: "दस्तावेज़ों का काम आसान बनाने के लिए डिज़ाइन किया गया।", support: "सहायता",
  },
};
