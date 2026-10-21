import type { Locale } from "./i18n";

type AccountDeletionCopy = {
  title: string;
  body: string;
  action: string;
  details: string;
};

export const accountDeletionCopy: Record<Locale, AccountDeletionCopy> = {
  ar: {
    title: "طلب حذف حساب ScannerPlusX",
    body: "يمكنك طلب حذف حسابك والبيانات السحابية المرتبطة به دون الحاجة إلى تثبيت التطبيق. أرسل طلبًا إلى البريد الإلكتروني أدناه من عنوان البريد المرتبط بحسابك، أو اذكر عنوان الحساب وطريقة تسجيل الدخول المستخدمة. سنتحقق من ملكية الحساب قبل تنفيذ الحذف. لا ترسل كلمة مرور أو مستندات شخصية.",
    action: "إرسال طلب حذف الحساب",
    details: "إذا كان التطبيق متاحًا لديك، يمكنك أيضًا فتح الملف الشخصي واختيار حذف الحساب والبيانات. لحذف الملفات المحفوظة محليًا على جهازك، استخدم خيار الحذف داخل التطبيق؛ لا يمكن حذف ملفات الجهاز عبر طلب البريد الإلكتروني.",
  },
  en: {
    title: "Request deletion of your ScannerPlusX account",
    body: "You can request deletion of your account and associated cloud data without installing the app. Email us from the address linked to your account, or include your account email and sign-in method. We will verify account ownership before deletion. Do not send passwords or personal documents.",
    action: "Email an account deletion request",
    details: "If you have the app, you can also open Profile and select Delete account and data. To delete files stored locally on your device, use the option in the app; an email request cannot remove files from your device.",
  },
  es: {
    title: "Solicitar la eliminación de tu cuenta de ScannerPlusX",
    body: "Puedes solicitar la eliminación de tu cuenta y los datos asociados en la nube sin instalar la aplicación. Escríbenos desde el correo vinculado a tu cuenta o indica el correo de la cuenta y el método de inicio de sesión. Verificaremos que la cuenta te pertenece antes de eliminarla. No envíes contraseñas ni documentos personales.",
    action: "Enviar solicitud de eliminación de cuenta",
    details: "Si tienes la aplicación, también puedes abrir Perfil y elegir Eliminar cuenta y datos. Para borrar archivos guardados en tu dispositivo, usa la opción de la aplicación; una solicitud por correo no puede borrar archivos del dispositivo.",
  },
  fr: {
    title: "Demander la suppression de votre compte ScannerPlusX",
    body: "Vous pouvez demander la suppression de votre compte et des données cloud associées sans installer l’application. Écrivez-nous depuis l’adresse liée à votre compte, ou indiquez l’adresse du compte et votre méthode de connexion. Nous vérifierons que le compte vous appartient avant de le supprimer. N’envoyez ni mot de passe ni document personnel.",
    action: "Envoyer une demande de suppression de compte",
    details: "Si vous avez l’application, ouvrez le profil et choisissez Supprimer le compte et les données. Pour effacer les fichiers stockés sur votre appareil, utilisez l’option de l’application ; une demande par e-mail ne peut pas effacer ces fichiers.",
  },
  de: {
    title: "Löschung deines ScannerPlusX-Kontos beantragen",
    body: "Du kannst die Löschung deines Kontos und der zugehörigen Cloud-Daten beantragen, ohne die App zu installieren. Schreibe uns von der mit deinem Konto verknüpften E-Mail-Adresse oder nenne die Konto-Adresse und deine Anmeldemethode. Wir prüfen vor der Löschung, ob das Konto dir gehört. Sende keine Passwörter oder persönlichen Dokumente.",
    action: "Anfrage zur Kontolöschung senden",
    details: "Wenn du die App hast, kannst du im Profil Konto und Daten löschen wählen. Dateien auf deinem Gerät löschst du über die App; eine E-Mail-Anfrage kann keine Dateien auf dem Gerät entfernen.",
  },
  hi: {
    title: "अपना ScannerPlusX खाता हटाने का अनुरोध करें",
    body: "ऐप इंस्टॉल किए बिना भी आप अपना खाता और उससे जुड़ा क्लाउड डेटा हटाने का अनुरोध कर सकते हैं। खाते से जुड़े ईमेल पते से हमें लिखें, या खाते का ईमेल और साइन-इन का तरीका बताएं। हटाने से पहले हम खाते का स्वामित्व सत्यापित करेंगे। पासवर्ड या निजी दस्तावेज़ न भेजें।",
    action: "खाता हटाने का अनुरोध ईमेल करें",
    details: "अगर आपके पास ऐप है, तो प्रोफ़ाइल खोलकर खाता और डेटा हटाएं चुन सकते हैं। अपने डिवाइस पर सहेजी गई फ़ाइलें ऐप से हटाएं; ईमेल अनुरोध से डिवाइस की फ़ाइलें नहीं हटाई जा सकतीं।",
  },
};
