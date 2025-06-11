# Elias Scho - Webentwickler Portfolio

Eine moderne, responsive Website für Webentwicklungs-Dienstleistungen, optimiert für Kleinunternehmer.

## Features

- **Responsive Design**: Funktioniert perfekt auf Desktop, Tablet und Mobile
- **Moderne UI**: Attraktives Design mit sanften Animationen und Übergängen
- **Referenz-Carousel**: Interaktive Präsentation von Projekten mit Touch-Support
- **Kontaktformular**: Vollständig funktionsfähig mit Netlify Forms Integration
- **SEO-optimiert**: Strukturiert für bessere Suchmaschinenplatzierung
- **Performance**: Optimiert für schnelle Ladezeiten

## Technologien

- HTML5
- CSS3 (mit modernen Features wie Grid, Flexbox, CSS Variables)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts (Inter)
- Netlify Forms für Formular-Handling

## Struktur

```
EliasScho.de/
├── index.html          # Hauptseite
├── thank-you.html      # Danke-Seite nach Formular-Übermittlung
├── styles.css          # Hauptstyles
├── script.js           # JavaScript-Funktionalität
├── netlify.toml        # Netlify-Konfiguration
└── README.md           # Diese Datei
```

## Deployment auf Netlify

### Option 1: Drag & Drop (Einfachste Methode)

1. Öffnen Sie [netlify.com](https://netlify.com) und melden Sie sich an
2. Ziehen Sie den gesamten Projektordner in das Deployment-Feld
3. Ihre Website ist sofort live!

### Option 2: Git-Integration (Empfohlen für kontinuierliche Updates)

1. Pushen Sie das Projekt zu einem Git-Repository (GitHub, GitLab, Bitbucket)
2. Verbinden Sie Ihr Netlify-Konto mit Ihrem Git-Provider
3. Erstellen Sie eine neue Site aus Ihrem Repository
4. Netlify deployt automatisch bei jedem Push

### Git-Befehle für ersten Push:

```bash
# Git initialisieren (falls noch nicht geschehen)
git init

# Alle Dateien hinzufügen
git add .

# Ersten Commit erstellen
git commit -m "Initial commit: Elias Scho Portfolio Website"

# Remote Repository hinzufügen (ersetzen Sie URL mit Ihrer Repository-URL)
git remote add origin https://github.com/IhrUsername/EliasScho.de.git

# Push zum Repository
git push -u origin main
```

## Anpassungen

### Kontaktinformationen ändern

Bearbeiten Sie in `index.html` die Kontaktdetails in der Kontakt-Sektion:

```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>ihre-email@domain.de</span>
</div>
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <span>+49 123 456 7890</span>
</div>
```

### Referenzen anpassen

Bearbeiten Sie die Projekt-Slides im Portfolio-Bereich von `index.html`. Ändern Sie Titel, Beschreibungen und verwendete Technologien.

### Farben anpassen

Die Hauptfarben können in `styles.css` geändert werden. Suchen Sie nach:
- `#2563eb` (Primärfarbe - Blau)
- `#667eea` und `#764ba2` (Gradient-Farben)

### Texte personalisieren

Passen Sie alle Texte in `index.html` an Ihre persönlichen Informationen und Dienstleistungen an.

## Formular-Funktionalität

Das Kontaktformular nutzt Netlify Forms und funktioniert automatisch nach dem Deployment auf Netlify. Features:

- Spam-Schutz integriert
- Automatische E-Mail-Benachrichtigungen möglich
- Submissions im Netlify Dashboard einsehbar
- Weiterleitung zur Danke-Seite nach erfolgreicher Übermittlung

## Browser-Unterstützung

- Chrome (neueste 2 Versionen)
- Firefox (neueste 2 Versionen)
- Safari (neueste 2 Versionen)
- Edge (neueste 2 Versionen)
- iOS Safari
- Chrome Mobile

## Performance-Features

- Optimierte CSS mit minimalen HTTP-Requests
- Lazy Loading für bessere Performance
- Komprimierte Assets
- Caching-Header für statische Assets
- Responsive Images

## SEO-Features

- Semantic HTML5 Tags
- Meta-Tags für Social Media
- Strukturierte Daten
- Optimierte Ladezeiten
- Mobile-First Design

## Support

Bei Fragen zur Anpassung oder Problemen beim Deployment, können Sie gerne Kontakt aufnehmen.

## Lizenz

Dieses Projekt steht unter der MIT-Lizenz - Details in der LICENSE-Datei.
