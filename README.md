# Elias Scho Business Website - Redesign 2025

**Modern, DSGVO-konforme Website für Elias Scho**
[eliasscho.de](https://eliasscho.de)

---

## 📋 Projektübersicht

Dies ist eine komplette Neugestaltung der Website von Elias Scho mit Fokus auf:

- ✅ **DSGVO/GDPR-Konformität** (Deutsche Datenschutzanforderungen)
- ✅ **Barrierefreiheit** (BITV 2.0 / WCAG 2.1 AA)
- ✅ **Moderne Technologie** (Astro, Tailwind CSS)
- ✅ **Performance** (Ladezeit <3s)
- ✅ **SEO-Optimierung**

---

## 🚀 Technologie-Stack

| Technologie | Version | Zweck |
|-------------|---------|-------|
| **Astro** | 5.x | Static Site Generator |
| **Tailwind CSS** | 4.x | Styling |
| **JavaScript** | Vanilla | Interaktivität |
| **Netlify** | - | Hosting & Forms |

---

## 📁 Projektstruktur

```
new-site/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── Logo.png
│   ├── Creativeportfolio.png
│   ├── Business.png
│   ├── Architect.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # Hauptlayout mit Cookie-Banner
│   ├── pages/
│   │   ├── index.astro           # Startseite
│   │   ├── impressum.astro       # Impressum (legal)
│   │   ├── datenschutz.astro     # Datenschutzerklärung
│   │   ├── cookie-einstellungen.astro  # Cookie-Einstellungen
│   │   └── danke.astro           # Danke-Seite (nach Formular)
│   └── styles/
│       └── global.css            # Globale Styles
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Installation

### Voraussetzungen

- Node.js 18.x oder höher
- npm oder pnpm

### Schritte

```bash
# In das Projektverzeichnis wechseln
cd new-site

# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Website wird unter http://localhost:4321 angezeigt
```

---

## 🏗️ Build & Deployment

### Lokaler Build

```bash
# Produktionsbuild erstellen
npm run build

# Vorschau des Builds
npm run preview
```

### Deployment auf Netlify

#### Option 1: Drag & Drop (Einfachste Methode)

1. Build erstellen: `npm run build`
2. Auf [netlify.com](https://netlify.com) einloggen
3. Den `dist/` Ordner in das Deployment-Feld ziehen
4. Website ist sofort live!

#### Option 2: Git-Integration (Empfohlen)

1. Repository auf GitHub/GitLab pushen
2. Auf Netlify mit Git-Provider verbinden
3. Repository auswählen
4. Build-Einstellungen:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Deploy!

#### Option 3: Netlify CLI

```bash
# Netlify CLI installieren
npm install -g netlify-cli

# Einloggen
netlify login

# Deploy
netlify deploy --prod
```

### Netlify Konfiguration

Erstelle eine `netlify.toml` im Projektroot:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-owner"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains"

[[forms]]
  name = "contact"
  action = "/danke"
```

---

## ⚖️ Rechtliche Anforderungen (DSGVO)

### Implementierte Features

#### 1. Impressum (§ 5 TMG)
- ✅ Vollständiger Name und Adresse
- ✅ Kontaktinformationen (Telefon, E-Mail)
- ✅ EU-Streitschlichtungsplattform verlinkt
- ✅ Haftungsausschlüsse

#### 2. Datenschutzerklärung (Art. 13, 14 DSGVO)
- ✅ Verantwortlicher benannt
- ✅ Verarbeitungszwecke dokumentiert
- ✅ Rechtsgrundlagen angegeben (Art. 6 DSGVO)
- ✅ Speicherdauern definiert
- ✅ Benutzerrechte vollständig aufgelistet
- ✅ Aufsichtsbehörde benannt
- ✅ SSL/TLS-Verschlüsselung erwähnt

#### 3. Cookie-Consent (§ 25 TTDSG)
- ✅ Cookie-Banner bei erstem Besuch
- ✅ Granulare Einwilligungen (Essentiell, Funktional, Analytics, Marketing)
- ✅ Einfache Widerrufsmöglichkeit
- ✅ Cookie-Einstellungen Seite
- ✅ Dokumentation der Einwilligung (localStorage)

#### 4. Barrierefreiheit (BITV 2.0 / WCAG 2.1 AA)
- ✅ Skip-Links für Screen Reader
- ✅ Semantisches HTML
- ✅ ARIA-Labels
- ✅ Tastaturnavigation
- ✅ Fokus-Indikatoren
- ✅ Alt-Texte für Bilder
- ✅ Ausreichende Farbkontraste

#### 5. Kontaktformular
- ✅ Double Opt-in für Datenschutz
- ✅ Hinweis auf Datenschutzerklärung
- ✅ Honeypot-Feld für Spam-Schutz
- ✅ SSL-Verschlüsselung

---

## 🎨 Anpassungen

### Farben ändern

In `src/styles/global.css`:

```css
:root {
  --color-primary: #000000;      /* Hauptfarbe */
  --color-secondary: #333333;    /* Sekundärfarbe */
  --color-accent: #2563eb;       /* Akzentfarbe */
  --color-background: #ffffff;   /* Hintergrund */
  --color-background-alt: #f9fafb; /* Alternativer Hintergrund */
}
```

### Texte anpassen

Alle Texte befinden sich in den `.astro` Dateien im `src/pages/` Verzeichnis.

### Bilder austauschen

Bilder im `public/` Verzeichnis ersetzen:
- `Logo.png` - Profilbild
- `Creativeportfolio.png` - Projekt 1
- `Business.png` - Projekt 2
- `Architect.png` - Projekt 3

**Wichtig:** Bilder für Performance optimieren (WebP, <200KB)!

---

## 🔧 Konfiguration

### SEO-Einstellungen

In `src/layouts/Layout.astro` anpassen:

```javascript
const siteUrl = 'https://eliasscho.de';  // Deine Domain
```

### Kontaktformular

Das Formular verwendet Netlify Forms. Einstellungen in `src/pages/index.astro`:

```html
<form 
  name="contact" 
  method="POST" 
  data-netlify="true"
  action="/danke"
>
```

### Google Fonts (DSGVO-konform)

Aktuell werden Google Fonts extern geladen. Für volle DSGVO-Konformität:

1. Fonts herunterladen: [google-webfonts-helper](https://gwfh.mranftl.com/fonts)
2. Lokal im `public/fonts/` Verzeichnis speichern
3. In `global.css` einbinden:

```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}
```

---

## 📊 Performance-Optimierung

### Bilder optimieren

```bash
# Mit Sharp (Node.js)
npm install -g sharp

# Bild komprimieren
sharp input.png -resize 800 -quality 80 output.jpg
```

### Empfohlene Bildgrößen

| Bildtyp | Max. Breite | Format | Max. Größe |
|---------|-------------|--------|------------|
| Profilbild | 400px | WebP/JPG | 100 KB |
| Projektbilder | 1200px | WebP/JPG | 200 KB |
| Thumbnails | 400px | WebP/JPG | 50 KB |

### Lazy Loading

Alle Bilder verwenden bereits `loading="lazy"`.

---

## 🔍 SEO-Checkliste

- ✅ Meta-Titel und -Beschreibungen
- ✅ Open Graph Tags (Social Media)
- ✅ Twitter Card Tags
- ✅ Strukturierte Daten (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Semantisches HTML
- ✅ Mobile-First Design
- ✅ Schnelle Ladezeiten

---

## 🧪 Testing

### Lokales Testing

```bash
# Entwicklungsserver
npm run dev

# Build-Vorschau
npm run build
npm run preview
```

### Browser-Tests

Teste in folgenden Browsern:
- Chrome (neueste Version)
- Firefox (neueste Version)
- Safari (neueste Version)
- Edge (neueste Version)
- Mobile Browser (iOS Safari, Chrome Mobile)

### Accessibility Testing

Tools:
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) (in Chrome DevTools)
- [WAVE](https://wave.webaim.org/) Browser Extension
- [NVDA](https://www.nvaccess.org/) Screen Reader (kostenlos)

### DSGVO-Compliance Testing

1. **Cookie-Test:**
   - Browser-Cache leeren
   - Inkognito-Modus öffnen
   - Website besuchen
   - Prüfen: Cookie-Banner erscheint
   - Prüfen: Keine Cookies vor Einwilligung

2. **Impressum-Test:**
   - Alle Pflichtangaben vorhanden?
   - EU-ODR-Link funktioniert?

3. **Datenschutz-Test:**
   - Alle Verarbeitungszwecke dokumentiert?
   - Benutzerrechte vollständig?

---

## 📈 Analytics (Optional - DSGVO-konform)

### Matomo Integration

Matomo ist eine DSGVO-konforme Alternative zu Google Analytics.

1. **Matomo Cloud oder Self-Hosted einrichten**

2. **Tracking-Code in `Layout.astro` einfügen:**

```astro
<!-- Nach <body> -->
<script type="text/javascript">
  var _paq = window._paq = window._paq || [];
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//YOUR-MATOMO-DOMAIN/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; 
    s.parentNode.insertBefore(g,s);
  })();
</script>
```

3. **Cookie-Consent beachten:**
   - Matomo nur nach Einwilligung laden
   - IP-Anonymisierung aktivieren
   - Do-Not-Track respektieren

---

## 🚨 Häufige Probleme

### Build-Fehler

```bash
# Cache leeren
rm -rf node_modules .astro dist
npm install
npm run build
```

### Netlify Forms funktionieren nicht

- Stelle sicher, dass `data-netlify="true"` im Formular ist
- `name` Attribut muss gesetzt sein
- Hidden Input `form-name` muss vorhanden sein

### Cookie-Banner erscheint nicht

- LocalStorage leeren: `localStorage.clear()`
- Browser-Cache leeren
- Inkognito-Modus testen

---

## 📝 Wartung

### Regelmäßige Aufgaben

**Monatlich:**
- [ ] Backup erstellen
- [ ] Abhängigkeiten updaten: `npm update`
- [ ] Broken Links prüfen

**Jährlich:**
- [ ] Impressum aktualisieren
- [ ] Datenschutzerklärung prüfen
- [ ] SSL-Zertifikat prüfen (Netlify erneuert automatisch)

---

## 📞 Support

Bei Fragen oder Problemen:

**Elias Scho**  
E-Mail: kontakt@eliasscho.de  
Telefon: +49 176 418 155 22

---

## 📄 Lizenzen

- **Code:** MIT License
- **Design:** © 2025 Elias Scho. Alle Rechte vorbehalten.
- **Bilder:** Nur mit Genehmigung verwendbar

---

## 🔗 Nützliche Links

- [Astro Dokumentation](https://docs.astro.build/)
- [Tailwind CSS Dokumentation](https://tailwindcss.com/docs)
- [Netlify Dokumentation](https://docs.netlify.com/)
- [DSGVO-Texte von eRecht24](https://www.e-recht24.de/)
- [BITV 2.0 Checkliste](https://www.bitvtest.de/)

---

**Erstellt:** 10. März 2025  
**Version:** 1.0.0  
**Letzte Aktualisierung:** 10. März 2025
