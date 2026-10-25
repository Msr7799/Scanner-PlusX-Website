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

type Feature = { eyebrow: string; title: string; description: string; points: [string, string, string] };
type HomeCopy = {
  nav: [string, string, string, string]; menuOpen: string; menuClose: string;
  playSoon: string; playDownload: string; playHint: string; discover: string;
  heroBadge: string; heroLine1: string; heroLine2: string; heroBody: string;
  heroPills: [string, string, string]; artAlt: string; readyShare: string; pdfReady: string;
  featuresEyebrow: string; featuresLine1: string; featuresLine2: string; featuresBody: string;
  cards: [{ title: string; text: string }, { title: string; text: string }, { title: string; text: string }];
  showcaseEyebrow: string; showcaseLine1: string; showcaseLine2: string; showcaseBody: string; showcaseLabel: string;
  features: [Feature, Feature, Feature];
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
    heroBadge: "تجربة مسح مستندات مصممة لتنجز أكثر", heroLine1: "مستنداتك،", heroLine2: "بطريقة أذكى.",
    heroBody: "امسح، حسّن، نظّم وشارك. كل ما تحتاجه للتعامل مع الورق وملفات PDF في تطبيق واحد أنيق وسهل.",
    heroPills: ["مسح وتحرير", "أدوات PDF", "واجهة عربية"], artAlt: "رسم لجهاز يمسح مستندًا", readyShare: "جاهز للمشاركة", pdfReady: "ملف PDF واضح ومرتب",
    featuresEyebrow: "ما الذي يميّز ScannerPlusX", featuresLine1: "من لقطة سريعة إلى", featuresLine2: "عمل مكتمل.",
    featuresBody: "تجربة متصلة تجعل المستندات أسهل في التصوير، المعالجة، والرجوع إليها.",
    cards: [{ title: "التقاط بوضوح", text: "اضبط الصفحة وحسّن القراءة قبل إنشاء المستند." }, { title: "نص قابل للبحث", text: "استخرج النص من الصفحات واعثر على ما تحتاجه." }, { title: "مكتبة منظمة", text: "اجمع ملفاتك المهمة وارجع إليها بسرعة." }],
    showcaseEyebrow: "تعرّف على الأدوات", showcaseLine1: "المزيد من الإنجاز.", showcaseLine2: "بخطوات أقل.", showcaseBody: "اختر الميزة التي تحتاجها وشاهد كيف يساعدك التطبيق في يومك.", showcaseLabel: "مميزات التطبيق",
    features: [
      { eyebrow: "01 / التصوير الذكي", title: "من الورق إلى ملف واضح.", description: "صوّر الصفحة، اضبط حدودها وحسّن وضوحها قبل الحفظ. صُممت رحلة المسح لتبقى سريعة حتى مع المستندات متعددة الصفحات.", points: ["تصحيح القص والمنظور", "تحسين الصورة والفلاتر", "مسح صفحة أو دفعة كاملة"] },
      { eyebrow: "02 / مكتبتك", title: "كل مستند في مكانه.", description: "اجمع ملفاتك في مكتبة واضحة، افتح صفحاتها مجددًا، وابحث في النص المستخرج من الصور عندما تحتاج معلومة بسرعة.", points: ["تنظيم الملفات والمجلدات", "استخراج النص والبحث", "وصول سريع للمستندات"] },
      { eyebrow: "03 / إنجاز أكثر", title: "أدوات PDF في متناولك.", description: "راجع الملفات، وقّع عليها، وحوّلها أو شاركها من مسار واحد بدل التنقل بين تطبيقات كثيرة.", points: ["توقيع المستندات", "التحويل والمشاركة", "تحرير صفحات PDF"] },
    ],
    workflowEyebrow: "سير عمل بسيط", workflowTitle: "ثلاث خطوات. مستند جاهز.", workflowBody: "ابدأ بصورة، وأنهِ العمل بملف منظم وقابل للمشاركة.",
    steps: [{ title: "التقط", text: "وجّه الكاميرا إلى المستند أو استورد ملفًا موجودًا." }, { title: "حسّن", text: "راجع القص، اضبط الصفحات واستخرج النص عند الحاجة." }, { title: "احفظ وشارك", text: "احتفظ بالملف داخل مكتبتك أو صدّره للمشاركة." }],
    privacyEyebrow: "الثقة تبدأ بالوضوح", privacyLine1: "ملفاتك مهمة.", privacyLine2: "وأنت من يقرر.", privacyBody: "المسح والحفظ الأساسيان يتمان على جهازك. الميزات المتصلة مثل المزامنة وأدوات الذكاء الاصطناعي تعمل عند اختيار استخدامها. تعرّف على التفاصيل في سياسة الخصوصية.", privacyLink: "اقرأ سياسة الخصوصية",
    privacyCards: ["تحكم بالخصوصية", "خيارات واضحة", "مستنداتك، قرارك"], developerEyebrow: "صُنع بعناية", developerTitle: "تطوير محمد الرميحي", developerBody: "تطبيق يركز على تجربة مستندات واضحة وعملية. تابع أعمال المطور وتواصل معه عبر GitHub.",
    ctaEyebrow: "جاهز للخطوة التالية؟", ctaTitle: "خلّ مستنداتك جاهزة معك.", ctaBody: "التقط فكرة، وثّق ورقة، وارجع لكل شيء في مكان واحد.",
    footerBody: "مسح المستندات، تنظيمها وإنجاز المزيد من مكان واحد.", footerSite: "الموقع", footerInfo: "معلومات", footerContact: "تواصل", footerEmail: "البريد الإلكتروني", footerSlogan: "صُمّم ليجعل العمل بالمستندات أبسط.", support: "الدعم",
  },
  en: {
    nav: ["Features", "How it works", "Privacy", "Developer"], menuOpen: "Open menu", menuClose: "Close menu",
    playSoon: "Coming soon on Google Play", playDownload: "Get it on Google Play", playHint: "The link will be available when the app is published on Google Play", discover: "Explore features",
    heroBadge: "Document scanning made for getting more done", heroLine1: "Your documents,", heroLine2: "made smarter.",
    heroBody: "Scan, enhance, organize, and share. Everything you need for paper and PDFs in one polished, easy-to-use app.",
    heroPills: ["Scan and edit", "PDF tools", "Six languages"], artAlt: "Illustration of a device scanning a document", readyShare: "Ready to share", pdfReady: "A clear, organized PDF",
    featuresEyebrow: "Why ScannerPlusX", featuresLine1: "From a quick capture to", featuresLine2: "finished work.",
    featuresBody: "A connected workflow that makes documents easier to capture, process, and find again.",
    cards: [{ title: "Capture clearly", text: "Straighten the page and improve readability before saving." }, { title: "Searchable text", text: "Extract text from pages and find what you need." }, { title: "Organized library", text: "Keep important files together and return to them quickly." }],
    showcaseEyebrow: "Explore the tools", showcaseLine1: "Get more done.", showcaseLine2: "In fewer steps.", showcaseBody: "Choose a feature and see how it helps with your everyday work.", showcaseLabel: "App features",
    features: [
      { eyebrow: "01 / Smart capture", title: "From paper to a clear file.", description: "Capture a page, adjust its edges, and improve clarity before saving. The scanning flow stays fast even for multiple pages.", points: ["Crop and perspective correction", "Image enhancement and filters", "Single or batch scanning"] },
      { eyebrow: "02 / Your library", title: "Every document in its place.", description: "Keep files in a clear library, reopen their pages, and search extracted text whenever you need a detail quickly.", points: ["Organize files and folders", "Text extraction and search", "Quick access to documents"] },
      { eyebrow: "03 / Do more", title: "PDF tools within reach.", description: "Review, sign, convert, or share files in one workflow instead of switching between apps.", points: ["Sign documents", "Convert and share", "Edit PDF pages"] },
    ],
    workflowEyebrow: "A simple workflow", workflowTitle: "Three steps. One ready document.", workflowBody: "Start with an image and finish with an organized file ready to share.",
    steps: [{ title: "Capture", text: "Point your camera at a document or import an existing file." }, { title: "Refine", text: "Check the crop, arrange pages, and extract text when needed." }, { title: "Save and share", text: "Keep it in your library or export it to share." }],
    privacyEyebrow: "Trust begins with clarity", privacyLine1: "Your files matter.", privacyLine2: "You decide.", privacyBody: "Basic scanning and saving happen on your device. Connected features such as sync and AI tools run when you choose to use them. See the privacy policy for details.", privacyLink: "Read the privacy policy",
    privacyCards: ["Privacy control", "Clear choices", "Your documents, your choice"], developerEyebrow: "Made with care", developerTitle: "Developed by Mohamed Alromaihi", developerBody: "An app focused on a clear, practical document experience. Follow the developer's work and connect on GitHub.",
    ctaEyebrow: "Ready for the next step?", ctaTitle: "Keep your documents ready wherever you are.", ctaBody: "Capture an idea, document a page, and find everything in one place.",
    footerBody: "Scan, organize, and do more with documents in one place.", footerSite: "Website", footerInfo: "Information", footerContact: "Contact", footerEmail: "Email", footerSlogan: "Designed to make document work simpler.", support: "Support",
  },
  es: {
    nav: ["Funciones", "Cómo funciona", "Privacidad", "Desarrollador"], menuOpen: "Abrir menú", menuClose: "Cerrar menú",
    playSoon: "Próximamente en Google Play", playDownload: "Descargar en Google Play", playHint: "El enlace estará disponible cuando la aplicación se publique en Google Play", discover: "Explorar funciones",
    heroBadge: "Escaneo de documentos pensado para hacer más", heroLine1: "Tus documentos,", heroLine2: "de forma más inteligente.",
    heroBody: "Escanea, mejora, organiza y comparte. Todo lo que necesitas para papel y PDF en una aplicación elegante y fácil de usar.",
    heroPills: ["Escanear y editar", "Herramientas PDF", "Seis idiomas"], artAlt: "Ilustración de un dispositivo escaneando un documento", readyShare: "Listo para compartir", pdfReady: "Un PDF claro y ordenado",
    featuresEyebrow: "Por qué ScannerPlusX", featuresLine1: "De una captura rápida a", featuresLine2: "un trabajo terminado.",
    featuresBody: "Un flujo completo para capturar, procesar y volver a encontrar tus documentos.",
    cards: [{ title: "Captura con claridad", text: "Endereza la página y mejora la lectura antes de guardar." }, { title: "Texto que puedes buscar", text: "Extrae texto de las páginas y encuentra lo que necesitas." }, { title: "Biblioteca organizada", text: "Reúne tus archivos importantes y accede a ellos rápidamente." }],
    showcaseEyebrow: "Descubre las herramientas", showcaseLine1: "Haz más.", showcaseLine2: "En menos pasos.", showcaseBody: "Elige una función y descubre cómo te ayuda cada día.", showcaseLabel: "Funciones de la aplicación",
    features: [
      { eyebrow: "01 / Captura inteligente", title: "Del papel a un archivo claro.", description: "Captura una página, ajusta sus bordes y mejora su nitidez antes de guardarla, incluso al escanear varias páginas.", points: ["Corrección de recorte y perspectiva", "Mejoras y filtros de imagen", "Escaneo individual o por lotes"] },
      { eyebrow: "02 / Tu biblioteca", title: "Cada documento en su lugar.", description: "Guarda tus archivos en una biblioteca clara, vuelve a abrirlos y busca en el texto extraído cuando necesites un dato.", points: ["Organiza archivos y carpetas", "Extrae y busca texto", "Acceso rápido a documentos"] },
      { eyebrow: "03 / Más posibilidades", title: "Herramientas PDF a mano.", description: "Revisa, firma, convierte y comparte archivos desde un mismo lugar.", points: ["Firma documentos", "Convierte y comparte", "Edita páginas PDF"] },
    ],
    workflowEyebrow: "Un proceso sencillo", workflowTitle: "Tres pasos. Un documento listo.", workflowBody: "Empieza con una imagen y termina con un archivo ordenado para compartir.",
    steps: [{ title: "Captura", text: "Enfoca un documento con la cámara o importa un archivo." }, { title: "Mejora", text: "Revisa el recorte, ordena las páginas y extrae texto si lo necesitas." }, { title: "Guarda y comparte", text: "Consérvalo en tu biblioteca o expórtalo." }],
    privacyEyebrow: "La confianza empieza con claridad", privacyLine1: "Tus archivos importan.", privacyLine2: "Tú decides.", privacyBody: "El escaneo y guardado básicos se realizan en tu dispositivo. Las funciones conectadas, como la sincronización y la IA, funcionan cuando eliges usarlas. Consulta la política de privacidad.", privacyLink: "Leer la política de privacidad",
    privacyCards: ["Control de privacidad", "Opciones claras", "Tus documentos, tu decisión"], developerEyebrow: "Hecho con cuidado", developerTitle: "Desarrollado por Mohamed Alromaihi", developerBody: "Una experiencia documental clara y práctica. Sigue al desarrollador y contacta con él en GitHub.",
    ctaEyebrow: "¿Listo para el siguiente paso?", ctaTitle: "Ten tus documentos listos contigo.", ctaBody: "Captura una idea, documenta una página y encuentra todo en un solo lugar.",
    footerBody: "Escanea, organiza y haz más con tus documentos en un solo lugar.", footerSite: "Sitio", footerInfo: "Información", footerContact: "Contacto", footerEmail: "Correo electrónico", footerSlogan: "Diseñado para simplificar el trabajo con documentos.", support: "Ayuda",
  },
  fr: {
    nav: ["Fonctionnalités", "Fonctionnement", "Confidentialité", "Développeur"], menuOpen: "Ouvrir le menu", menuClose: "Fermer le menu",
    playSoon: "Bientôt sur Google Play", playDownload: "Télécharger sur Google Play", playHint: "Le lien sera disponible après la publication sur Google Play", discover: "Découvrir les fonctionnalités",
    heroBadge: "La numérisation pensée pour en faire plus", heroLine1: "Vos documents,", heroLine2: "plus intelligemment.",
    heroBody: "Numérisez, améliorez, organisez et partagez. Tout pour vos documents papier et PDF dans une application élégante et simple.",
    heroPills: ["Numériser et modifier", "Outils PDF", "Six langues"], artAlt: "Illustration d'un appareil numérisant un document", readyShare: "Prêt à partager", pdfReady: "Un PDF clair et bien rangé",
    featuresEyebrow: "Pourquoi ScannerPlusX", featuresLine1: "D'une capture rapide à", featuresLine2: "un travail terminé.",
    featuresBody: "Un parcours complet pour capturer, traiter et retrouver facilement vos documents.",
    cards: [{ title: "Capture nette", text: "Redressez la page et améliorez sa lisibilité avant de l'enregistrer." }, { title: "Texte recherchable", text: "Extrayez le texte des pages et trouvez ce dont vous avez besoin." }, { title: "Bibliothèque organisée", text: "Regroupez vos fichiers importants et retrouvez-les rapidement." }],
    showcaseEyebrow: "Découvrez les outils", showcaseLine1: "Faites-en plus.", showcaseLine2: "En moins d'étapes.", showcaseBody: "Choisissez une fonction et voyez comment elle vous aide chaque jour.", showcaseLabel: "Fonctionnalités de l'application",
    features: [
      { eyebrow: "01 / Capture intelligente", title: "Du papier au fichier net.", description: "Photographiez une page, ajustez ses bords et améliorez sa netteté avant l'enregistrement, même pour plusieurs pages.", points: ["Correction du cadrage", "Amélioration et filtres", "Numérisation simple ou multiple"] },
      { eyebrow: "02 / Votre bibliothèque", title: "Chaque document à sa place.", description: "Classez vos fichiers, rouvrez leurs pages et recherchez le texte extrait dès que vous avez besoin d'une information.", points: ["Classement des fichiers", "Extraction et recherche de texte", "Accès rapide aux documents"] },
      { eyebrow: "03 / Allez plus loin", title: "Les outils PDF à portée de main.", description: "Consultez, signez, convertissez et partagez vos fichiers depuis un seul endroit.", points: ["Signature de documents", "Conversion et partage", "Modification des pages PDF"] },
    ],
    workflowEyebrow: "Un parcours simple", workflowTitle: "Trois étapes. Un document prêt.", workflowBody: "Partez d'une image et obtenez un fichier organisé, prêt à partager.",
    steps: [{ title: "Capturez", text: "Visez le document avec l'appareil photo ou importez un fichier." }, { title: "Améliorez", text: "Vérifiez le cadrage, organisez les pages et extrayez le texte si nécessaire." }, { title: "Enregistrez", text: "Gardez le fichier dans la bibliothèque ou exportez-le." }],
    privacyEyebrow: "La confiance commence par la clarté", privacyLine1: "Vos fichiers comptent.", privacyLine2: "Vous décidez.", privacyBody: "La numérisation et l'enregistrement de base se font sur votre appareil. La synchronisation et les outils d'IA fonctionnent quand vous choisissez de les utiliser. Consultez la politique de confidentialité.", privacyLink: "Lire la politique de confidentialité",
    privacyCards: ["Contrôle de la confidentialité", "Choix transparents", "Vos documents, votre choix"], developerEyebrow: "Créé avec soin", developerTitle: "Développé par Mohamed Alromaihi", developerBody: "Une expérience documentaire claire et pratique. Suivez le travail du développeur et contactez-le sur GitHub.",
    ctaEyebrow: "Prêt pour la suite ?", ctaTitle: "Gardez vos documents prêts avec vous.", ctaBody: "Capturez une idée, documentez une page et retrouvez tout au même endroit.",
    footerBody: "Numérisez, organisez et faites-en plus au même endroit.", footerSite: "Site", footerInfo: "Informations", footerContact: "Contact", footerEmail: "E-mail", footerSlogan: "Conçu pour simplifier le travail documentaire.", support: "Assistance",
  },
  de: {
    nav: ["Funktionen", "So funktioniert es", "Datenschutz", "Entwickler"], menuOpen: "Menü öffnen", menuClose: "Menü schließen",
    playSoon: "Bald bei Google Play", playDownload: "Bei Google Play herunterladen", playHint: "Der Link ist nach der Veröffentlichung bei Google Play verfügbar", discover: "Funktionen entdecken",
    heroBadge: "Dokumentenscans für mehr Produktivität", heroLine1: "Deine Dokumente,", heroLine2: "einfach smarter.",
    heroBody: "Scannen, verbessern, organisieren und teilen. Alles für Papier und PDF in einer eleganten, einfach zu bedienenden App.",
    heroPills: ["Scannen und bearbeiten", "PDF-Werkzeuge", "Sechs Sprachen"], artAlt: "Illustration eines Geräts beim Scannen eines Dokuments", readyShare: "Bereit zum Teilen", pdfReady: "Eine klare, geordnete PDF",
    featuresEyebrow: "Das bietet ScannerPlusX", featuresLine1: "Von der schnellen Aufnahme zur", featuresLine2: "fertigen Arbeit.",
    featuresBody: "Ein durchgehender Ablauf, mit dem sich Dokumente leichter erfassen, bearbeiten und wiederfinden lassen.",
    cards: [{ title: "Klar erfassen", text: "Seite ausrichten und Lesbarkeit vor dem Speichern verbessern." }, { title: "Durchsuchbarer Text", text: "Text aus Seiten extrahieren und Gesuchtes finden." }, { title: "Geordnete Bibliothek", text: "Wichtige Dateien sammeln und schnell wieder öffnen." }],
    showcaseEyebrow: "Werkzeuge entdecken", showcaseLine1: "Mehr erledigen.", showcaseLine2: "Mit weniger Schritten.", showcaseBody: "Wähle eine Funktion und erfahre, wie sie dich im Alltag unterstützt.", showcaseLabel: "App-Funktionen",
    features: [
      { eyebrow: "01 / Intelligente Aufnahme", title: "Vom Papier zur klaren Datei.", description: "Seite aufnehmen, Ränder anpassen und die Qualität vor dem Speichern verbessern – auch bei mehreren Seiten.", points: ["Zuschnitt und Perspektive", "Bildverbesserung und Filter", "Einzel- oder Stapelscan"] },
      { eyebrow: "02 / Deine Bibliothek", title: "Jedes Dokument an seinem Platz.", description: "Dateien übersichtlich sammeln, Seiten erneut öffnen und extrahierten Text durchsuchen, wenn du etwas schnell brauchst.", points: ["Dateien und Ordner ordnen", "Texterkennung und Suche", "Schneller Dokumentzugriff"] },
      { eyebrow: "03 / Mehr Möglichkeiten", title: "PDF-Werkzeuge griffbereit.", description: "Dateien ansehen, unterschreiben, umwandeln und teilen – alles an einem Ort.", points: ["Dokumente unterschreiben", "Umwandeln und teilen", "PDF-Seiten bearbeiten"] },
    ],
    workflowEyebrow: "Einfacher Ablauf", workflowTitle: "Drei Schritte. Ein fertiges Dokument.", workflowBody: "Aus einem Bild wird eine geordnete Datei zum Teilen.",
    steps: [{ title: "Aufnehmen", text: "Kamera auf das Dokument richten oder eine Datei importieren." }, { title: "Verbessern", text: "Zuschnitt prüfen, Seiten ordnen und bei Bedarf Text erfassen." }, { title: "Speichern und teilen", text: "In der Bibliothek behalten oder zum Teilen exportieren." }],
    privacyEyebrow: "Vertrauen beginnt mit Klarheit", privacyLine1: "Deine Dateien sind wichtig.", privacyLine2: "Du entscheidest.", privacyBody: "Einfaches Scannen und Speichern findet auf deinem Gerät statt. Verbundene Funktionen wie Synchronisierung und KI-Werkzeuge laufen, wenn du sie auswählst. Einzelheiten stehen in der Datenschutzerklärung.", privacyLink: "Datenschutzerklärung lesen",
    privacyCards: ["Datenschutz steuern", "Klare Optionen", "Deine Dokumente, deine Entscheidung"], developerEyebrow: "Mit Sorgfalt entwickelt", developerTitle: "Entwickelt von Mohamed Alromaihi", developerBody: "Eine App für einen klaren, praktischen Umgang mit Dokumenten. Entdecke die Arbeit des Entwicklers auf GitHub.",
    ctaEyebrow: "Bereit für den nächsten Schritt?", ctaTitle: "Halte deine Dokumente unterwegs bereit.", ctaBody: "Idee festhalten, Seite dokumentieren und alles an einem Ort wiederfinden.",
    footerBody: "Dokumente scannen, ordnen und mehr erledigen – an einem Ort.", footerSite: "Website", footerInfo: "Informationen", footerContact: "Kontakt", footerEmail: "E-Mail", footerSlogan: "Entwickelt, um Dokumentenarbeit einfacher zu machen.", support: "Hilfe",
  },
  hi: {
    nav: ["विशेषताएँ", "यह कैसे काम करता है", "गोपनीयता", "डेवलपर"], menuOpen: "मेन्यू खोलें", menuClose: "मेन्यू बंद करें",
    playSoon: "जल्द ही Google Play पर", playDownload: "Google Play से डाउनलोड करें", playHint: "ऐप प्रकाशित होने पर Google Play लिंक उपलब्ध होगा", discover: "विशेषताएँ देखें",
    heroBadge: "ज़्यादा काम के लिए बनाया गया दस्तावेज़ स्कैनर", heroLine1: "आपके दस्तावेज़,", heroLine2: "और स्मार्ट तरीके से।",
    heroBody: "स्कैन करें, बेहतर बनाएँ, व्यवस्थित करें और साझा करें। कागज़ और PDF के लिए ज़रूरी सब कुछ एक सुंदर, आसान ऐप में।",
    heroPills: ["स्कैन और संपादन", "PDF टूल", "छह भाषाएँ"], artAlt: "दस्तावेज़ स्कैन करते उपकरण का चित्र", readyShare: "साझा करने के लिए तैयार", pdfReady: "साफ़ और व्यवस्थित PDF",
    featuresEyebrow: "ScannerPlusX क्यों चुनें", featuresLine1: "एक तेज़ स्कैन से", featuresLine2: "पूरा काम तक।",
    featuresBody: "दस्तावेज़ कैप्चर करने, सँवारने और फिर से खोजने के लिए एक सहज तरीका।",
    cards: [{ title: "साफ़ कैप्चर", text: "सहेजने से पहले पेज सीधा करें और पढ़ने में आसान बनाएँ।" }, { title: "खोजने योग्य टेक्स्ट", text: "पेज से टेक्स्ट निकालें और ज़रूरी जानकारी खोजें।" }, { title: "व्यवस्थित लाइब्रेरी", text: "ज़रूरी फ़ाइलें एक साथ रखें और जल्दी खोलें।" }],
    showcaseEyebrow: "टूल देखें", showcaseLine1: "ज़्यादा काम करें।", showcaseLine2: "कम चरणों में।", showcaseBody: "अपनी ज़रूरत की सुविधा चुनें और देखें कि यह रोज़ कैसे मदद करती है।", showcaseLabel: "ऐप की विशेषताएँ",
    features: [
      { eyebrow: "01 / स्मार्ट कैप्चर", title: "कागज़ से साफ़ फ़ाइल तक।", description: "पेज कैप्चर करें, किनारे ठीक करें और सहेजने से पहले स्पष्टता बढ़ाएँ। कई पेज स्कैन करना भी आसान है।", points: ["क्रॉप और परिप्रेक्ष्य सुधार", "तस्वीर सुधार और फ़िल्टर", "एकल या बैच स्कैन"] },
      { eyebrow: "02 / आपकी लाइब्रेरी", title: "हर दस्तावेज़ सही जगह।", description: "फ़ाइलें व्यवस्थित रखें, पेज दोबारा खोलें और ज़रूरत पड़ने पर निकाले गए टेक्स्ट में खोजें।", points: ["फ़ाइल और फ़ोल्डर व्यवस्थित करें", "टेक्स्ट निकालें और खोजें", "दस्तावेज़ जल्दी खोलें"] },
      { eyebrow: "03 / और भी काम", title: "PDF टूल आपकी पहुँच में।", description: "फ़ाइलें देखें, हस्ताक्षर करें, बदलें और साझा करें—एक ही जगह से।", points: ["दस्तावेज़ों पर हस्ताक्षर", "बदलें और साझा करें", "PDF पेज संपादित करें"] },
    ],
    workflowEyebrow: "सरल तरीका", workflowTitle: "तीन चरण। दस्तावेज़ तैयार।", workflowBody: "तस्वीर से शुरू करें और साझा करने योग्य व्यवस्थित फ़ाइल पाएँ।",
    steps: [{ title: "कैप्चर करें", text: "कैमरा दस्तावेज़ की ओर करें या मौजूदा फ़ाइल आयात करें।" }, { title: "बेहतर बनाएँ", text: "क्रॉप जाँचें, पेज व्यवस्थित करें और ज़रूरत हो तो टेक्स्ट निकालें।" }, { title: "सहेजें और साझा करें", text: "लाइब्रेरी में रखें या साझा करने के लिए निर्यात करें।" }],
    privacyEyebrow: "भरोसा स्पष्टता से शुरू होता है", privacyLine1: "आपकी फ़ाइलें महत्वपूर्ण हैं।", privacyLine2: "फ़ैसला आपका है।", privacyBody: "बुनियादी स्कैन और सेव आपके डिवाइस पर होते हैं। सिंक और AI जैसे ऑनलाइन टूल तभी चलते हैं जब आप उन्हें चुनते हैं। विवरण गोपनीयता नीति में देखें।", privacyLink: "गोपनीयता नीति पढ़ें",
    privacyCards: ["गोपनीयता नियंत्रण", "स्पष्ट विकल्प", "आपके दस्तावेज़, आपका फ़ैसला"], developerEyebrow: "ध्यान से बनाया गया", developerTitle: "मोहम्मद अलरोमैही द्वारा विकसित", developerBody: "दस्तावेज़ों के लिए स्पष्ट और व्यावहारिक अनुभव। डेवलपर का काम देखें और GitHub पर संपर्क करें।",
    ctaEyebrow: "अगले चरण के लिए तैयार?", ctaTitle: "अपने दस्तावेज़ हमेशा तैयार रखें।", ctaBody: "विचार कैप्चर करें, पेज सुरक्षित करें और सब कुछ एक जगह पाएँ।",
    footerBody: "दस्तावेज़ स्कैन करें, व्यवस्थित करें और एक जगह से ज़्यादा काम करें।", footerSite: "वेबसाइट", footerInfo: "जानकारी", footerContact: "संपर्क", footerEmail: "ईमेल", footerSlogan: "दस्तावेज़ों का काम आसान बनाने के लिए डिज़ाइन किया गया।", support: "सहायता",
  },
};
