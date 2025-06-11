# Elias Scho - SEO-Websites für Unternehmen

Eine moderne, mobile-optimierte Unternehmenswebsite spezialisiert auf SEO-optimierte Business-Websites.

## 🚀 Features

- **Mobile-First Design**: Vollständig responsive und für mobile Geräte optimiert
- **SEO-Optimiert**: Strukturierte Daten, Meta-Tags und suchmaschinenfreundliche URLs
- **Moderne Navigation**: Animierte Mobile-Navigation mit Hamburger-Menü
- **Business-Fokus**: Spezialisiert auf Unternehmenswebsites ohne E-Commerce
- **DSGVO-Konform**: Vollständige Impressum- und Datenschutzseiten
- **Performance**: Schnelle Ladezeiten und optimierte Bilder
- **Accessibility**: Barrierefreie Bedienung und screenreader-freundlich

## 📱 Mobile Optimierung

- **Responsive Navigation**: Hamburger-Menü mit Slide-Animation
- **Touch-Optimiert**: Große Buttons und Touch-Targets (min. 44px)
- **Mobile Typography**: Optimierte Schriftgrößen für kleine Bildschirme
- **Viewport Meta-Tag**: Korrekte Darstellung auf allen Geräten
- **Mobile Performance**: Optimierte Bilder und CSS für mobile Verbindungen

## 🛠️ Technologien

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS, Custom Mobile-First CSS
- **Responsive**: Mobile-First Approach mit Breakpoints
- **SEO**: Schema.org Structured Data, OpenGraph
- **Performance**: Optimierte Assets und Lazy Loading
- **Fonts**: Google Fonts (Inter)

## 📁 Projektstruktur

```
EliasScho.de/
├── index.html          # Haupt-HTML-Datei
├── styles.css          # Custom CSS Styles
├── scripts.js          # JavaScript Funktionalität
├── README.md           # Projekt-Dokumentation
└── .gitignore          # Git Ignore Datei
```

## 🚀 Installation & Setup

### Lokale Entwicklung

1. Repository klonen:
```bash
git clone https://github.com/yourusername/EliasScho.de.git
cd EliasScho.de
```

2. Lokalen Server starten (optional):
```bash
# Mit Python
python -m http.server 8000

# Mit Node.js (http-server)
npx http-server

# Mit Live Server (VS Code Extension)
# Rechtsklick auf index.html -> "Open with Live Server"
```

3. Website im Browser öffnen:
```
http://localhost:8000
```

### GitHub Pages Deployment

1. Repository auf GitHub erstellen
2. Code hochladen:
```bash
git init
git add .
git commit -m "Initial commit: Modern portfolio website"
git branch -M main
git remote add origin https://github.com/yourusername/EliasScho.de.git
git push -u origin main
```

3. GitHub Pages aktivieren:
   - Gehe zu Repository Settings
   - Scrolle zu "Pages" Sektion
   - Wähle "Deploy from a branch"
   - Wähle "main" branch und "/ (root)" folder
   - Klicke "Save"

4. Website ist live unter:
```
https://yourusername.github.io/EliasScho.de/
```

## 🎨 Anpassung

### Farben ändern
Die Hauptfarben können in der Tailwind-Konfiguration im `<head>` der `index.html` angepasst werden:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          // ... weitere Farben
        }
      }
    }
  }
}
```

### Inhalte anpassen
- **Name & Titel**: Suche nach "Elias Schöneberger" in `index.html`
- **Skills**: Bearbeite die Skill-Sektionen und Prozentangaben
- **Projekte**: Füge eigene Projekte in der Projekt-Sektion hinzu
- **Kontaktdaten**: Aktualisiere E-Mail, Telefon und Social Media Links

### Animationen anpassen
Animationen können in `styles.css` und `scripts.js` angepasst werden:

```css
/* Neue Animation hinzufügen */
@keyframes customAnimation {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.custom-animation {
  animation: customAnimation 2s ease-in-out infinite;
}
```

## 📱 Browser-Unterstützung

- ✅ Chrome (88+)
- ✅ Firefox (85+)
- ✅ Safari (14+)
- ✅ Edge (88+)
- ✅ Mobile Browsers

## 🔧 Erweiterte Features

### Service Worker (PWA)
Um die Website als Progressive Web App zu konfigurieren, erstelle eine `sw.js` Datei:

```javascript
// sw.js
const CACHE_NAME = 'portfolio-v1';
const urlsToCache = [
  '/',
  '/styles.css',
  '/scripts.js',
  // weitere Assets
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});
```

### Contact Form Backend
Für ein funktionierendes Kontaktformular können Services wie:
- [Netlify Forms](https://www.netlify.com/products/forms/)
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)

verwendet werden.

## 📊 Performance Optimierung

- **Bilder**: WebP Format verwenden
- **CSS**: Critical CSS inline laden
- **JavaScript**: Code splitting implementieren
- **Caching**: Service Worker für Offline-Funktionalität

## 🐛 Troubleshooting

### Häufige Probleme

1. **Animationen funktionieren nicht**
   - Überprüfe ob AOS korrekt geladen wird
   - Kontrolliere Browser-Konsole auf Fehler

2. **Particles.js lädt nicht**
   - Überprüfe Internetverbindung (CDN)
   - Lokale Kopie der Library verwenden

3. **Mobile Ansicht Probleme**
   - Viewport Meta-Tag überprüfen
   - Responsive Breakpoints testen

## 📄 Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Siehe [LICENSE](LICENSE) Datei für Details.

## 🤝 Beitragen

1. Fork das Repository
2. Erstelle einen Feature Branch (`git checkout -b feature/amazing-feature`)
3. Committe deine Änderungen (`git commit -m 'Add amazing feature'`)
4. Push zum Branch (`git push origin feature/amazing-feature`)
5. Öffne einen Pull Request

## 📞 Kontakt

- **Email**: elias@schoeneberger.de
- **LinkedIn**: [linkedin.com/in/elias-schoeneberger](https://linkedin.com/in/elias-schoeneberger)
- **GitHub**: [github.com/yourusername](https://github.com/yourusername)

---

**Erstellt mit ❤️ und modernen Web-Technologien**
