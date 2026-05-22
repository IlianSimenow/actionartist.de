import { ui, defaultLang } from './ui';
import type { Lang, UiKey } from './ui';

// ─── Lang detection ──────────────────────────────────────────────────────────

/**
 * Extract the locale from an Astro URL pathname.
 * e.g. /de/credits/ → 'de'    /en/biography/ → 'en'
 */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (segment in ui) return segment as Lang;
  return defaultLang;
}

// ─── Translation helper ──────────────────────────────────────────────────────

/**
 * Returns a t() function scoped to the given lang.
 * Falls back to defaultLang if a key is missing in the requested locale.
 *
 * Usage in .astro files:
 *   const t = useTranslations(lang);
 *   t('nav.bio')
 */
export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return (ui[lang] as Record<string, string>)[key]
      ?? (ui[defaultLang] as Record<string, string>)[key]
      ?? key;
  };
}

// ─── URL helpers ─────────────────────────────────────────────────────────────

/**
 * Translate a path from one locale to another.
 * e.g. translatePath('/de/biographie/', 'en') → '/en/biography/'
 */
const pathMap: Record<string, Record<Lang, string>> = {
  '/biographie/': { de: '/biographie/', en: '/biography/' },
  '/biography/':  { de: '/biographie/', en: '/biography/' },
  '/skills/':     { de: '/skills/',     en: '/skills/' },
  '/credits/':    { de: '/credits/',    en: '/credits/' },
  '/galerie/':    { de: '/galerie/',    en: '/gallery/' },
  '/gallery/':    { de: '/galerie/',    en: '/gallery/' },
  '/video/':      { de: '/video/',      en: '/video/' },
  '/partner/':    { de: '/partner/',    en: '/partners/' },
  '/partners/':   { de: '/partner/',    en: '/partners/' },
  '/kontakt/':    { de: '/kontakt/',    en: '/contact/' },
  '/contact/':    { de: '/kontakt/',    en: '/contact/' },
  '/impressum/':  { de: '/impressum/',  en: '/legal-notice/' },
  '/legal-notice/': { de: '/impressum/', en: '/legal-notice/' },
};

/**
 * Returns the equivalent URL in the target language.
 * Strips the locale prefix, looks up the slug, re-adds the target prefix.
 */
export function translatePath(pathname: string, targetLang: Lang): string {
  // Strip leading locale segment: /en/biography/ → /biography/  (DE has no prefix)
  const withoutLocale = pathname.replace(/^\/(de|en)/, '') || '/';
  const mapped = pathMap[withoutLocale]?.[targetLang] ?? withoutLocale;
  // DE has no prefix; EN gets /en prefix
  return targetLang === 'de' ? mapped : `/${targetLang}${mapped}`;
}

/**
 * Returns the alternate-language URL for the current page.
 * Useful for the lang switcher and hreflang tags.
 */
export function getAlternateLangUrl(url: URL, targetLang: Lang): string {
  return translatePath(url.pathname, targetLang);
}

// ─── Route slugs per locale ──────────────────────────────────────────────────

export const routes: Record<Lang, Record<string, string>> = {
  de: {
    biography:    'biographie',
    skills:       'skills',
    credits:      'credits',
    gallery:      'galerie',
    video:        'video',
    partners:     'partner',
    contact:      'kontakt',
    legal:        'impressum',
    knowledge:    'wissen',
  },
  en: {
    biography:    'biography',
    skills:       'skills',
    credits:      'credits',
    gallery:      'gallery',
    video:        'video',
    partners:     'partners',
    contact:      'contact',
    legal:        'legal-notice',
    knowledge:    'knowledge',
  },
};

/**
 * Build a localised href for a named route.
 * e.g. routeHref('biography', 'en') → '/en/biography/'
 */
export function routeHref(name: keyof typeof routes['de'], lang: Lang): string {
  return `/${lang}/${routes[lang][name]}/`;
}
