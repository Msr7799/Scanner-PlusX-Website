import type { Locale } from "./i18n";

type Section = { title: string; body: string };
type LegalCopy = {
  home: string; privacy: { eyebrow: string; title: string; intro: string; sections: Section[] };
  support: { eyebrow: string; title: string; intro: string; contact: Section; faqTitle: string; faq: Section[]; linksTitle: string; linksBody: string; github: string };
};

export const legalCopy: Record<Locale, LegalCopy> = {
  ar: {
    home: "الرئيسية",
    privacy: { eyebrow: "الشفافية والخصوصية", title: "سياسة الخصوصية", intro: "آخر تحديث: 13 أكتوبر 2026. تشرح هذه الصفحة كيفية التعامل مع البيانات في تطبيق ScannerPlusX وموقعه.", sections: [
      { title: "المستندات على جهازك", body: "تُحفظ الملفات التي تمسحها وتستوردها في مساحة التطبيق على جهازك. تتم وظائف الحفظ، تحسين الصورة الأساسي، واستخراج النص المحلي على الجهاز. لا تتطلب هذه العمليات مشاركة المستندات مع الموقع." },
      { title: "الحساب والمزامنة الاختيارية", body: "إذا أنشأت حسابًا، تُستخدم خدمات Firebase لتسجيل الدخول. عند اختيار المزامنة السحابية، تُرفع المستندات والبيانات اللازمة إلى خدمات ScannerPlusX المبنية على Cloudflare. إيقاف المزامنة يوقف الرفع اللاحق، ويمكن إدارة النسخ السحابية من التطبيق." },
      { title: "أدوات الذكاء الاصطناعي والبحث", body: "عند استخدام أداة متصلة بالإنترنت، قد يُرسل النص أو الصورة التي اخترتها إلى خدمة ScannerPlusX لمعالجتها باستخدام Gemini. وقد تُرسل استعلامات البحث الذكي وسياقها المختار إلى Tavily. المسح المحلي لا يعتمد على هذه الميزات." },
      { title: "الإعلانات والتشخيص", body: "يستخدم تطبيق Android خدمات Google AdMob للإعلانات ورسائل الموافقة عبر UMP. تتوفر خيارات خصوصية الإعلانات في التطبيق عندما تتطلبها الخدمة. تستخدم نسخة الإصدار Firebase Crashlytics لتشخيص الأعطال، وقد تُفعّل التحليلات حسب إعدادات الإصدار. إذا فُعّلت إعلانات الموقع، ستستخدم Google AdSense وخيارات الموافقة اللازمة." },
      { title: "الأذونات", body: "يطلب التطبيق إذن الكاميرا لمسح المستندات. اختيار الملفات يتم عبر أدوات Android المخصصة. يمكنك إدارة الأذونات من إعدادات الجهاز." },
      { title: "حذف الحساب والبيانات", body: "يتوفر خيار حذف الحساب والبيانات من شاشة الملف الشخصي داخل التطبيق. يزيل الحساب والنسخ السحابية والملفات المحلية وفق خطوات الحذف المعروضة. إذا واجهت مشكلة، راسلنا عبر البريد الإلكتروني أدناه." },
      { title: "الموقع والتواصل", body: "الموقع التعريفي لا يطلب رفع مستنداتك. قد يستقبل مزوّد الاستضافة بيانات الطلب التقنية اللازمة لعرض الصفحات. للاستفسارات المتعلقة بالخصوصية، راسلنا على العنوان أدناه." },
    ] },
    support: { eyebrow: "نحن هنا للمساعدة", title: "دعم ScannerPlusX", intro: "إذا واجهت مشكلة في المسح أو فتح PDF أو تسجيل الدخول، أرسل وصفًا واضحًا للمشكلة لنتمكن من مساعدتك.", contact: { title: "التواصل", body: "راسل المطور محمد الرميحي على البريد أدناه. اذكر إصدار التطبيق، نوع جهاز Android، والخطوات التي أدت إلى المشكلة. لا ترسل مستندات شخصية أو كلمات مرور." }, faqTitle: "أسئلة شائعة", faq: [
      { title: "أين أجد مستنداتي؟", body: "افتح المكتبة داخل التطبيق للوصول إلى الملفات المحفوظة." },
      { title: "هل أحتاج حسابًا للمسح؟", body: "وظائف المسح المحلية متاحة على الجهاز؛ الحساب يستخدم للميزات المتصلة مثل المزامنة." },
      { title: "كيف أحذف حسابي؟", body: "افتح الملف الشخصي واختر حذف الحساب والبيانات، ثم اتبع التعليمات." },
      { title: "كيف أعدّل خيارات الإعلانات؟", body: "افتح خيارات خصوصية الإعلانات من الملف الشخصي عندما تكون متاحة لمنطقتك." },
    ], linksTitle: "روابط مفيدة", linksBody: "اقرأ سياسة الخصوصية لمعرفة المزيد عن معالجة البيانات، أو زر صفحة المطور على GitHub.", github: "صفحة المطور على GitHub" },
  },
  en: {
    home: "Home",
    privacy: { eyebrow: "Transparency and privacy", title: "Privacy policy", intro: "Last updated: October 13, 2026. This page explains how the ScannerPlusX app and website handle data.", sections: [
      { title: "Documents on your device", body: "Scanned and imported files are stored in the app's space on your device. Saving, basic image enhancement, and local text extraction happen on the device. These actions do not require sending documents to the website." },
      { title: "Account and optional sync", body: "Firebase is used for sign-in if you create an account. If you choose cloud sync, the documents and data needed for syncing are uploaded to ScannerPlusX services built on Cloudflare. Turning sync off stops future uploads; cloud copies can be managed in the app." },
      { title: "AI tools and search", body: "When you choose an online tool, selected text or images may be sent to ScannerPlusX for processing with Gemini. Smart search queries and selected context may be sent to Tavily. Local scanning does not depend on these features." },
      { title: "Ads and diagnostics", body: "The Android app uses Google AdMob for ads and UMP for related consent messages. Ad privacy choices appear in the app where required. Release builds use Firebase Crashlytics to diagnose crashes; analytics may be enabled by release settings. If website ads are enabled, they will use Google AdSense and applicable consent options." },
      { title: "Permissions", body: "The app requests camera permission to scan documents. File selection uses Android's file tools. You can manage permissions in device settings." },
      { title: "Deleting account and data", body: "The profile screen offers a Delete account and data option. It removes account data, cloud copies, and local files according to the steps shown in the app. If you need help, email us below." },
      { title: "Website and contact", body: "This informational website does not ask you to upload documents. The hosting provider may receive technical request data needed to display pages. For privacy questions, email us below." },
    ] },
    support: { eyebrow: "We're here to help", title: "ScannerPlusX support", intro: "If scanning, opening a PDF, or signing in does not work, send a clear description so we can help.", contact: { title: "Contact", body: "Email developer Mohamed Alromaihi below. Include the app version, Android device model, and steps that led to the issue. Do not send personal documents or passwords." }, faqTitle: "Frequently asked questions", faq: [
      { title: "Where are my documents?", body: "Open the library in the app to find saved files." },
      { title: "Do I need an account to scan?", body: "Local scanning works on the device. An account is used for connected features such as sync." },
      { title: "How do I delete my account?", body: "Open your profile, choose Delete account and data, and follow the instructions." },
      { title: "How do I change ad choices?", body: "Open ad privacy choices from your profile when they are available in your region." },
    ], linksTitle: "Useful links", linksBody: "Read the privacy policy for more on data handling, or visit the developer's GitHub profile.", github: "Developer on GitHub" },
  },
  es: {
    home: "Inicio",
    privacy: { eyebrow: "Transparencia y privacidad", title: "Política de privacidad", intro: "Última actualización: 13 de octubre de 2026. Esta página explica cómo la aplicación y el sitio ScannerPlusX tratan los datos.", sections: [
      { title: "Documentos en tu dispositivo", body: "Los archivos escaneados e importados se guardan en el espacio de la aplicación en tu dispositivo. El guardado, la mejora básica de imágenes y la extracción local de texto se realizan allí. Estas acciones no requieren enviar documentos al sitio web." },
      { title: "Cuenta y sincronización opcional", body: "Si creas una cuenta, Firebase gestiona el acceso. Si activas la sincronización, los documentos y datos necesarios se suben a los servicios de ScannerPlusX basados en Cloudflare. Desactivarla detiene las futuras subidas; puedes administrar las copias en la aplicación." },
      { title: "Herramientas de IA y búsqueda", body: "Al usar una herramienta en línea, el texto o las imágenes seleccionados pueden enviarse a ScannerPlusX para procesarse con Gemini. Las consultas de búsqueda inteligente y su contexto seleccionado pueden enviarse a Tavily. El escaneo local no depende de estas funciones." },
      { title: "Publicidad y diagnóstico", body: "La aplicación Android usa Google AdMob para anuncios y UMP para los mensajes de consentimiento. Las opciones de privacidad publicitaria aparecen cuando corresponde. Las versiones publicadas usan Firebase Crashlytics para diagnosticar fallos; los análisis pueden activarse según la configuración. Si se habilitan anuncios en el sitio, se usarán Google AdSense y las opciones de consentimiento necesarias." },
      { title: "Permisos", body: "La aplicación solicita permiso de cámara para escanear documentos. La selección de archivos usa las herramientas de Android. Puedes administrar los permisos desde los ajustes del dispositivo." },
      { title: "Eliminar cuenta y datos", body: "En el perfil encontrarás la opción para eliminar la cuenta y los datos. El proceso elimina datos de la cuenta, copias en la nube y archivos locales según los pasos mostrados. Si necesitas ayuda, escríbenos abajo." },
      { title: "Sitio web y contacto", body: "Este sitio informativo no solicita subir documentos. El proveedor de alojamiento puede recibir datos técnicos necesarios para mostrar las páginas. Para consultas de privacidad, escríbenos abajo." },
    ] },
    support: { eyebrow: "Estamos para ayudarte", title: "Ayuda de ScannerPlusX", intro: "Si tienes problemas al escanear, abrir un PDF o iniciar sesión, envía una descripción clara para que podamos ayudarte.", contact: { title: "Contacto", body: "Escribe al desarrollador Mohamed Alromaihi. Indica la versión de la aplicación, el modelo de Android y los pasos previos al problema. No envíes documentos personales ni contraseñas." }, faqTitle: "Preguntas frecuentes", faq: [
      { title: "¿Dónde están mis documentos?", body: "Abre la biblioteca de la aplicación para encontrar los archivos guardados." },
      { title: "¿Necesito una cuenta para escanear?", body: "El escaneo local funciona en el dispositivo. La cuenta se usa para funciones conectadas, como la sincronización." },
      { title: "¿Cómo elimino mi cuenta?", body: "Abre tu perfil, elige eliminar la cuenta y los datos, y sigue las instrucciones." },
      { title: "¿Cómo cambio las opciones de anuncios?", body: "Abre las opciones de privacidad publicitaria desde tu perfil cuando estén disponibles en tu región." },
    ], linksTitle: "Enlaces útiles", linksBody: "Lee la política de privacidad para saber más sobre los datos o visita el perfil de GitHub del desarrollador.", github: "Desarrollador en GitHub" },
  },
  fr: {
    home: "Accueil",
    privacy: { eyebrow: "Transparence et confidentialité", title: "Politique de confidentialité", intro: "Dernière mise à jour : 13 octobre 2026. Cette page explique comment l'application et le site ScannerPlusX traitent les données.", sections: [
      { title: "Documents sur votre appareil", body: "Les fichiers numérisés et importés sont enregistrés dans l'espace de l'application sur votre appareil. L'enregistrement, l'amélioration simple des images et l'extraction locale du texte s'y font. Ces opérations ne nécessitent pas l'envoi de documents au site." },
      { title: "Compte et synchronisation facultative", body: "Si vous créez un compte, Firebase sert à la connexion. Si vous activez la synchronisation, les documents et données nécessaires sont envoyés aux services ScannerPlusX basés sur Cloudflare. La désactivation arrête les futurs transferts ; les copies en ligne se gèrent dans l'application." },
      { title: "Outils d'IA et recherche", body: "Si vous utilisez un outil en ligne, le texte ou les images choisis peuvent être envoyés à ScannerPlusX pour être traités avec Gemini. Les requêtes de recherche intelligente et leur contexte choisi peuvent être transmis à Tavily. La numérisation locale n'en dépend pas." },
      { title: "Publicités et diagnostic", body: "L'application Android utilise Google AdMob pour la publicité et UMP pour les messages de consentement. Les choix de confidentialité publicitaire s'affichent si nécessaire. Les versions publiées utilisent Firebase Crashlytics pour diagnostiquer les plantages ; l'analyse peut être activée selon les paramètres. Si des publicités sont activées sur le site, elles utiliseront Google AdSense et les choix de consentement requis." },
      { title: "Autorisations", body: "L'application demande l'accès à l'appareil photo pour numériser. Le choix des fichiers utilise les outils Android. Vous pouvez gérer les autorisations dans les réglages de l'appareil." },
      { title: "Suppression du compte et des données", body: "L'écran de profil propose la suppression du compte et des données. Cette procédure supprime les données du compte, les copies en ligne et les fichiers locaux selon les étapes affichées. En cas de problème, écrivez-nous ci-dessous." },
      { title: "Site et contact", body: "Ce site d'information ne demande pas de téléverser vos documents. L'hébergeur peut recevoir les données techniques nécessaires pour afficher les pages. Pour toute question sur la confidentialité, écrivez-nous ci-dessous." },
    ] },
    support: { eyebrow: "Nous sommes là pour vous aider", title: "Assistance ScannerPlusX", intro: "Si la numérisation, l'ouverture d'un PDF ou la connexion pose problème, décrivez précisément la situation pour obtenir de l'aide.", contact: { title: "Contact", body: "Écrivez au développeur Mohamed Alromaihi. Indiquez la version de l'application, le modèle Android et les étapes ayant mené au problème. N'envoyez ni document personnel ni mot de passe." }, faqTitle: "Questions fréquentes", faq: [
      { title: "Où sont mes documents ?", body: "Ouvrez la bibliothèque de l'application pour retrouver les fichiers enregistrés." },
      { title: "Faut-il un compte pour numériser ?", body: "La numérisation locale fonctionne sur l'appareil. Le compte sert aux fonctions connectées, comme la synchronisation." },
      { title: "Comment supprimer mon compte ?", body: "Ouvrez votre profil, choisissez la suppression du compte et des données, puis suivez les instructions." },
      { title: "Comment modifier les choix publicitaires ?", body: "Ouvrez les choix de confidentialité publicitaire dans votre profil s'ils sont disponibles dans votre région." },
    ], linksTitle: "Liens utiles", linksBody: "Lisez la politique de confidentialité pour en savoir plus sur les données, ou consultez le profil GitHub du développeur.", github: "Développeur sur GitHub" },
  },
  de: {
    home: "Startseite",
    privacy: { eyebrow: "Transparenz und Datenschutz", title: "Datenschutzerklärung", intro: "Stand: 13. Oktober 2026. Diese Seite erklärt, wie die ScannerPlusX-App und -Website mit Daten umgehen.", sections: [
      { title: "Dokumente auf deinem Gerät", body: "Gescannte und importierte Dateien liegen im App-Speicher deines Geräts. Speichern, einfache Bildverbesserung und lokale Texterkennung erfolgen dort. Dafür müssen keine Dokumente an die Website gesendet werden." },
      { title: "Konto und optionale Synchronisierung", body: "Wenn du ein Konto erstellst, wird Firebase zur Anmeldung verwendet. Bei aktivierter Cloud-Synchronisierung werden benötigte Dokumente und Daten an ScannerPlusX-Dienste auf Cloudflare übertragen. Nach dem Abschalten gibt es keine weiteren Uploads; Cloud-Kopien lassen sich in der App verwalten." },
      { title: "KI-Werkzeuge und Suche", body: "Bei der Nutzung eines Online-Werkzeugs können ausgewählte Texte oder Bilder zur Verarbeitung mit Gemini an ScannerPlusX gesendet werden. Suchanfragen und ausgewählter Kontext können an Tavily gehen. Lokales Scannen ist davon unabhängig." },
      { title: "Werbung und Diagnose", body: "Die Android-App verwendet Google AdMob für Anzeigen und UMP für Einwilligungshinweise. Datenschutzoptionen für Werbung erscheinen, wo nötig. Veröffentlichte Versionen nutzen Firebase Crashlytics zur Fehlerdiagnose; Analysen können je nach Einstellungen aktiviert sein. Falls Website-Werbung eingeschaltet wird, verwendet sie Google AdSense und erforderliche Einwilligungsoptionen." },
      { title: "Berechtigungen", body: "Zum Scannen fragt die App nach Kamerazugriff. Dateien werden mit Android-Werkzeugen ausgewählt. Berechtigungen lassen sich in den Geräteeinstellungen verwalten." },
      { title: "Konto und Daten löschen", body: "Im Profil gibt es eine Option zum Löschen von Konto und Daten. Dabei werden Kontodaten, Cloud-Kopien und lokale Dateien gemäß den angezeigten Schritten entfernt. Bei Problemen erreichst du uns per E-Mail unten." },
      { title: "Website und Kontakt", body: "Diese Informationsseite fordert keinen Dokumenten-Upload an. Der Hostinganbieter kann technische Anfragedaten erhalten, die zur Anzeige nötig sind. Für Datenschutzfragen schreibe uns unten." },
    ] },
    support: { eyebrow: "Wir helfen dir", title: "ScannerPlusX-Hilfe", intro: "Wenn Scannen, PDF-Öffnen oder Anmelden nicht klappt, beschreibe das Problem möglichst genau.", contact: { title: "Kontakt", body: "Schreibe Entwickler Mohamed Alromaihi. Nenne die App-Version, dein Android-Gerät und die Schritte vor dem Problem. Sende keine persönlichen Dokumente oder Passwörter." }, faqTitle: "Häufige Fragen", faq: [
      { title: "Wo finde ich meine Dokumente?", body: "Öffne die Bibliothek in der App, um gespeicherte Dateien zu finden." },
      { title: "Brauche ich zum Scannen ein Konto?", body: "Lokales Scannen funktioniert auf dem Gerät. Ein Konto wird für verbundene Funktionen wie die Synchronisierung verwendet." },
      { title: "Wie lösche ich mein Konto?", body: "Öffne dein Profil, wähle Konto und Daten löschen und folge den Anweisungen." },
      { title: "Wie ändere ich Werbeoptionen?", body: "Öffne die Datenschutzoptionen für Werbung im Profil, wenn sie in deiner Region verfügbar sind." },
    ], linksTitle: "Nützliche Links", linksBody: "Lies die Datenschutzerklärung für weitere Informationen oder besuche das GitHub-Profil des Entwicklers.", github: "Entwickler auf GitHub" },
  },
  hi: {
    home: "होम",
    privacy: { eyebrow: "पारदर्शिता और गोपनीयता", title: "गोपनीयता नीति", intro: "अंतिम अपडेट: 13 अक्टूबर 2026। यह पेज बताता है कि ScannerPlusX ऐप और वेबसाइट डेटा कैसे संभालते हैं।", sections: [
      { title: "आपके डिवाइस पर दस्तावेज़", body: "स्कैन और आयात की गई फ़ाइलें आपके डिवाइस पर ऐप की जगह में सहेजी जाती हैं। सेव करना, सामान्य तस्वीर सुधार और स्थानीय टेक्स्ट निकालना डिवाइस पर होता है। इसके लिए वेबसाइट पर दस्तावेज़ भेजने की ज़रूरत नहीं है।" },
      { title: "खाता और वैकल्पिक सिंक", body: "खाता बनाने पर साइन-इन के लिए Firebase का उपयोग होता है। क्लाउड सिंक चुनने पर ज़रूरी दस्तावेज़ और डेटा Cloudflare पर आधारित ScannerPlusX सेवाओं को भेजे जाते हैं। सिंक बंद करने से आगे के अपलोड रुकते हैं; क्लाउड कॉपी ऐप में प्रबंधित की जा सकती हैं।" },
      { title: "AI टूल और खोज", body: "ऑनलाइन टूल चुनने पर चयनित टेक्स्ट या तस्वीर Gemini से प्रोसेस करने के लिए ScannerPlusX को भेजी जा सकती है। स्मार्ट खोज और चुना गया संदर्भ Tavily को भेजा जा सकता है। स्थानीय स्कैन इन सुविधाओं पर निर्भर नहीं है।" },
      { title: "विज्ञापन और त्रुटि जाँच", body: "Android ऐप विज्ञापनों के लिए Google AdMob और सहमति संदेशों के लिए UMP उपयोग करता है। जहाँ आवश्यक हो, विज्ञापन गोपनीयता विकल्प ऐप में दिखते हैं। रिलीज़ संस्करण क्रैश जाँच के लिए Firebase Crashlytics उपयोग करते हैं; सेटिंग के अनुसार एनालिटिक्स चालू हो सकता है। वेबसाइट पर विज्ञापन चालू होने पर Google AdSense और आवश्यक सहमति विकल्प उपयोग होंगे।" },
      { title: "अनुमतियाँ", body: "स्कैन के लिए ऐप कैमरा अनुमति माँगता है। फ़ाइल चयन Android के टूल से होता है। आप डिवाइस सेटिंग में अनुमतियाँ बदल सकते हैं।" },
      { title: "खाता और डेटा हटाना", body: "प्रोफ़ाइल में खाता और डेटा हटाने का विकल्प है। ऐप में दिखाए गए चरणों के अनुसार खाता डेटा, क्लाउड कॉपी और स्थानीय फ़ाइलें हटती हैं। मदद चाहिए तो नीचे ईमेल करें।" },
      { title: "वेबसाइट और संपर्क", body: "यह जानकारी देने वाली वेबसाइट दस्तावेज़ अपलोड करने को नहीं कहती। होस्टिंग प्रदाता पेज दिखाने के लिए ज़रूरी तकनीकी अनुरोध डेटा पा सकता है। गोपनीयता संबंधी प्रश्नों के लिए नीचे ईमेल करें।" },
    ] },
    support: { eyebrow: "हम मदद के लिए हैं", title: "ScannerPlusX सहायता", intro: "स्कैन, PDF खोलने या साइन-इन में समस्या हो तो स्पष्ट विवरण भेजें ताकि हम मदद कर सकें।", contact: { title: "संपर्क", body: "डेवलपर मोहम्मद अलरोमैही को नीचे ईमेल करें। ऐप संस्करण, Android डिवाइस और समस्या आने से पहले के चरण बताएँ। निजी दस्तावेज़ या पासवर्ड न भेजें।" }, faqTitle: "अक्सर पूछे जाने वाले प्रश्न", faq: [
      { title: "मेरे दस्तावेज़ कहाँ हैं?", body: "सहेजी गई फ़ाइलें देखने के लिए ऐप की लाइब्रेरी खोलें।" },
      { title: "क्या स्कैन के लिए खाते की ज़रूरत है?", body: "स्थानीय स्कैन डिवाइस पर काम करता है। सिंक जैसी ऑनलाइन सुविधाओं के लिए खाता उपयोग होता है।" },
      { title: "अपना खाता कैसे हटाऊँ?", body: "प्रोफ़ाइल खोलें, खाता और डेटा हटाएँ चुनें और निर्देशों का पालन करें।" },
      { title: "विज्ञापन विकल्प कैसे बदलूँ?", body: "आपके क्षेत्र में उपलब्ध होने पर प्रोफ़ाइल से विज्ञापन गोपनीयता विकल्प खोलें।" },
    ], linksTitle: "उपयोगी लिंक", linksBody: "डेटा के बारे में जानने के लिए गोपनीयता नीति पढ़ें या डेवलपर का GitHub पेज देखें।", github: "GitHub पर डेवलपर" },
  },
};
