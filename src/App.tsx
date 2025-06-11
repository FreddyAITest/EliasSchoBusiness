import './index.css';

function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <span className="font-bold text-xl text-gray-900">Elias Scho</span>
        <div className="space-x-6 hidden md:flex">
          <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#leistungen" className="hover:text-blue-600 transition-colors">Leistungen</a>
          <a href="#seo" className="hover:text-blue-600 transition-colors">SEO</a>
          <a href="#referenzen" className="hover:text-blue-600 transition-colors">Referenzen</a>
          <a href="#kontakt" className="hover:text-blue-600 transition-colors">Kontakt</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          SEO-Websites für Dienstleister
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 mb-8">
          Moderne Webentwicklung & gezielte Suchmaschinenoptimierung für kleine und mittlere Unternehmen.
        </p>
        <a href="#kontakt" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors">Kostenlose Beratung</a>
      </div>
    </section>
  );
}

function Leistungen() {
  return (
    <section id="leistungen" className="py-20 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Leistungen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 shadow text-center">
            <div className="mb-3 text-blue-600 text-3xl">🌐</div>
            <h3 className="font-semibold text-lg mb-2">Webentwicklung</h3>
            <p>Individuelle, schnelle und sichere Websites für Ihr Unternehmen.</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 shadow text-center">
            <div className="mb-3 text-blue-600 text-3xl">🔍</div>
            <h3 className="font-semibold text-lg mb-2">SEO-Optimierung</h3>
            <p>OnPage- und technische SEO für bessere Google-Rankings.</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 shadow text-center">
            <div className="mb-3 text-blue-600 text-3xl">📈</div>
            <h3 className="font-semibold text-lg mb-2">Beratung & Analyse</h3>
            <p>Strategie, Analyse und persönliche Beratung für Ihren Online-Erfolg.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SEOSection() {
  return (
    <section id="seo" className="py-20 bg-gray-50 text-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">SEO für Dienstleister</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Wir helfen Ihnen, Ihre Website gezielt für Suchmaschinen zu optimieren – damit Sie von Ihrer Zielgruppe gefunden werden und Ihre Reichweite nachhaltig steigern.
        </p>
        <ul className="grid md:grid-cols-2 gap-6 text-base text-gray-800">
          <li>✓ Keyword-Analyse & Content-Optimierung</li>
          <li>✓ Technisches SEO (Pagespeed, Struktur, Mobilfreundlichkeit)</li>
          <li>✓ Lokale Sichtbarkeit für Dienstleister</li>
          <li>✓ Beratung zu Google My Business & Branchenverzeichnissen</li>
        </ul>
      </div>
    </section>
  );
}

function Referenzen() {
  return (
    <section id="referenzen" className="py-20 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Referenzen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl p-6 shadow text-center">
            <div className="mb-3 text-blue-600 text-3xl">🏢</div>
            <h3 className="font-semibold text-lg mb-2">Steuerberater-Website</h3>
            <p>Modernes Redesign, Top Google-Rankings, 2024</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 shadow text-center">
            <div className="mb-3 text-blue-600 text-3xl">🏬</div>
            <h3 className="font-semibold text-lg mb-2">Firmenpräsenz Einzelhandel</h3>
            <p>Mobile-First, Conversion-Optimierung, 2023</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 shadow text-center">
            <div className="mb-3 text-blue-600 text-3xl">💼</div>
            <h3 className="font-semibold text-lg mb-2">Business-Website Berater</h3>
            <p>Schnelle Ladezeiten, Beratung, 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Kontakt() {
  return (
    <section id="kontakt" className="py-20 bg-gray-50 text-gray-900">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Kontakt</h2>
        <form className="bg-white rounded-xl shadow p-8 space-y-4">
          <div>
            <label className="block mb-1 font-medium" htmlFor="name">Name</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2" type="text" id="name" name="name" required />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="email">E-Mail</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2" type="email" id="email" name="email" required />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="message">Nachricht</label>
            <textarea className="w-full border border-gray-300 rounded px-3 py-2" id="message" name="message" rows={4} required></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Absenden</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 font-bold text-lg">Elias Scho</div>
        <div className="text-gray-400 text-sm">© {new Date().getFullYear()} Elias Scho. Alle Rechte vorbehalten.</div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Leistungen />
        <SEOSection />
        <Referenzen />
        <Kontakt />
      </main>
      <Footer />
    </div>
  );
}

export default App
