# Action Artist

Aktuelle deutsche und englische Website aus dem Codex-Projekt.
Die unveränderten Website-Dateien liegen in `site/`.

## Build

Node.js 22 oder neuer. Keine externen Paketabhängigkeiten erforderlich.

```sh
npm run build
```

Alternativ direkt: `node scripts/build.mjs`.
Der Build prüft lokale HTML- und CSS-Dateiverweise und kopiert die Website nach `dist/`.
Der Inhalt von `dist/` kann auf einem statischen Webserver veröffentlicht werden.
Die Website benötigt keine Serverfunktionen oder Umgebungsvariablen.

Der vorherige Repository-Stand ist im Branch `backup/vor-website-austausch-2026-09-23` gesichert.

## SEO
Metadaten in config/seo.json pflegen oder seo-editor.html lokal öffnen. Anleitung: SEO-ANLEITUNG.md. Der Build erzeugt SEO-Tags, Sitemap und robots.txt in dist/. Vercel-Konfiguration liegt in vercel.json.
