// Klaro Cookie Consent Configuration for eliasscho.de
var klaroConfig = {
  version: 1,
  elementID: 'klaro',
  storageMethod: 'cookie',
  storageName: 'klaro',
  cookieDomain: '.eliasscho.de',
  cookieExpiresAfterDays: 365,
  privacyPolicy: '/datenschutz',

  // German language as default
  lang: 'de',

  // Translations
  translations: {
    de: {
      consentModal: {
        title: 'Datenschutz-Einstellungen',
        description:
          'Hier können Sie einsehen und anpassen, welche Dienste wir auf dieser Website nutzen. Einige sind essenziell für den Betrieb der Website, andere helfen uns, die Website zu verbessern. Weitere Informationen finden Sie in unserer {privacyPolicy}.',
      },
      consentNotice: {
        title: 'Cookie-Einstellungen',
        description:
          'Wir nutzen Cookies und ähnliche Technologien, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Sie können Ihre Einstellungen jederzeit anpassen. {learnMore}',
        learnMore: 'Mehr erfahren',
        changeDescription: 'Es gab Änderungen seit Ihrem letzten Besuch.',
      },
      purposes: {
        essential: {
          title: 'Essenziell',
          description: 'Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden.',
        },
        analytics: {
          title: 'Analyse',
          description: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.',
        },
        marketing: {
          title: 'Marketing',
          description: 'Diese Cookies werden verwendet, um Werbung relevanter für Sie zu gestalten.',
        },
        functional: {
          title: 'Funktional',
          description: 'Diese Cookies ermöglichen zusätzliche Funktionalitäten wie Newsletter-Anmeldungen.',
        },
      },
      ok: 'Alle akzeptieren',
      decline: 'Nur essentielle',
      save: 'Speichern',
      acceptAll: 'Alle akzeptieren',
      acceptSelected: 'Auswahl akzeptieren',
      close: 'Schließen',
      privacyPolicy: {
        text: 'Datenschutzerklärung',
        name: 'Datenschutzerklärung',
      },
      poweredBy: '',
    },
  },

  // Services / Apps
  services: [
    {
      name: 'google-fonts',
      title: 'Google Fonts',
      purposes: ['functional'],
      description: 'Schriftarten von Google für eine einheitliche Darstellung.',
      required: false,
      default: true,
    },
    {
      name: 'convertkit',
      title: 'ConvertKit (Kit)',
      purposes: ['functional'],
      description: 'Newsletter-Dienst für den Versand unserer E-Mail-Checkliste.',
      required: false,
      default: false,
    },
    {
      name: 'netlify',
      title: 'Netlify Hosting',
      purposes: ['essential'],
      description: 'Hosting-Dienst für diese Website. Erforderlich für den Betrieb.',
      required: true,
    },
  ],
};
