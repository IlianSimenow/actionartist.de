# SEO pflegen und prüfen

Die Website bleibt statisch und benötigt kein CMS. Öffne `seo-editor.html` lokal im Browser, lade `config/seo.json`, wähle eine Seite und bearbeite Titel, Beschreibung und Suchbegriffe. Lade die JSON-Datei herunter und ersetze damit `config/seo.json`. Alternativ lässt sie sich direkt auf GitHub bearbeiten. Codex kann dieselbe Datei künftig für dich pflegen.

Danach `npm run build`, Änderungen committen und pushen. Vercel muss den Build ausführen und `dist` veröffentlichen (in vercel.json festgelegt). Nur site/ hochzuladen genügt nicht: Metadaten, Sitemap und robots.txt entstehen beim Build. Der Editor wird nicht öffentlich ausgeliefert und braucht keine Zugangsdaten. Er zeigt eine ungefähre Vorschau; Google kann Titel und Beschreibung verändern oder kürzen. Suchbegriffe sind redaktionelle Vorschläge ohne behauptete Suchvolumen, keine Meta-Keywords und keine Rankinggarantie.

## Priorität nach Nutzen und Aufwand

1. Hoher Nutzen / geringer Aufwand: individuelle Metadaten für alle 18 Seiten, kanonische www-Adressen, Sitemap, robots.txt, gegenseitige Sprachverknüpfungen. Im Build umgesetzt.
2. Hoher Nutzen / geringer bis mittlerer Aufwand: sichtbare Positionierung der Startseite und deutschen Leistungsseite, HTML-Links zu Geschichte und Sprachen, komprimierte Bilder, Bildgrößen und verzögertes Laden. Umgesetzt.
3. Mittlerer Nutzen / geringer Aufwand: belegte WebPage-, WebSite- und Person-Daten. Umgesetzt, ohne erfundene Bewertungen, Preise oder Veranstaltungen.
4. Hoher Nutzen / externer Kontozugriff: Search Console verifizieren, Sitemap einreichen und Indexierung beobachten. Vom Inhaber auszuführen.
5. Später: Suchanfragen und Core Web Vitals mit realen Nutzerdaten bewerten; historische URLs aus Search Console auf passende 301-Weiterleitungen prüfen. Keine pauschalen Weiterleitungen auf die Startseite.

## Search Console verbinden

1. https://search.google.com/search-console öffnen und mit deinem Google-Konto anmelden.
2. Property hinzufügen, Typ „Domain“, `actionartist.de` eingeben.
3. Den von Google angezeigten TXT-Eintrag bei deinem DNS-Anbieter ergänzen, andere Einträge belassen. Anschließend in Search Console bestätigen. Der DNS-Anbieter muss nicht derselbe wie der Website-Host sein.
4. Unter „Sitemaps“ `https://www.actionartist.de/sitemap.xml` einreichen, sobald diese live HTTP 200 liefert.
5. Mit der URL-Prüfung Startseite und wichtige Leistungsseiten testen, gegebenenfalls Indexierung beantragen. Anschließend Seitenindexierung, Suchanfragen und Core Web Vitals verfolgen.

Die Einreichung garantiert keine Indexierung. Für die alternative URL-Präfix-Property muss die exakte Adresse `https://www.actionartist.de/` bestätigt werden, etwa mit einer von Google bereitgestellten HTML-Datei in site/ und erneutem Build.

Offizielle Hilfen:
- https://support.google.com/webmasters/answer/9008080
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/appearance/title-link
- https://developers.google.com/search/docs/appearance/snippet

## Prüfung vom 23.09.2026

Vorher: Homepage und Leistungsseite HTTP 200; HTTP/non-www leiten auf HTTPS/www weiter; robots.txt und sitemap.xml HTTP 404. Homepage ohne X-Robots-Tag-Sperre. Hosting-Header: Vercel. Individuelle Beschreibungen fehlten auf Unterseiten.

Nachher lokal: Build erfolgreich, 442 lokale HTML-/CSS-Dateiverweise geprüft; 18 eindeutige Titel und Beschreibungen, Canonicals, Sprachpaare und Sitemap-Einträge erzeugt. 36 Browserprüfungen (18 Seiten bei 375 und 1280 Pixeln): keine JavaScript-Fehler, keine horizontale Überbreite, je eine H1, Bild-alt-Attribute vorhanden, JSON-LD parsebar; mobiles Menü öffnet. Vorhandene Bildbeschreibungen wurden erhalten; keine nicht belegten Bildmotive ergänzt. 32 WebP-Varianten sparen zusammen 8.604.888 Bytes gegenüber den entsprechenden Originalen (keine einzelne Seitenladezeit).

Einzelne öffentliche Abrufe lagen in dieser Umgebung bei ca. 0,09–0,35 Sekunden; das ist kein Lighthouse-Score und keine Core-Web-Vitals-Messung. Echtes Google-Indexierungsverhalten erfordert Search Console. Die Vorschau ersetzt keine Prüfung der tatsächlichen Suchergebnisse.
