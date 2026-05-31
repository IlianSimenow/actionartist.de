// @ts-check
import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  adapter: vercel(),
  site: 'https://actionartist.de',
  integrations: [sitemap()],
  // Resend contact form — server secrets loaded from .env.local / Vercel env
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret' }),
      CONTACT_TO_EMAIL: envField.string({ context: 'server', access: 'secret' }),
      RESEND_DELIVERY_EMAIL: envField.string({ context: 'server', access: 'secret', optional: true }),
      RESEND_FROM_EMAIL: envField.string({ context: 'server', access: 'secret', optional: true, default: 'Kontakt <onboarding@resend.dev>' }),
      // Public contact + address — shown on site pages
      CONTACT_NAME: envField.string({ context: 'server', access: 'public', default: 'Ilian Simeonow' }),
      CONTACT_PHONE: envField.string({ context: 'server', access: 'public', default: '+49 (0)176 / 303 101 42' }),
      CONTACT_PHONE_TEL: envField.string({ context: 'server', access: 'public', default: '+4917630310142' }),
      CONTACT_EMAIL: envField.string({ context: 'server', access: 'public', default: 'actionartist@web.de' }),
      CONTACT_STREET: envField.string({ context: 'server', access: 'public', default: 'Deubner Str 40c' }),
      CONTACT_POSTAL: envField.string({ context: 'server', access: 'public', default: '01159' }),
      CONTACT_CITY: envField.string({ context: 'server', access: 'public', default: 'Dresden' }),
      CONTACT_COUNTRY_DE: envField.string({ context: 'server', access: 'public', default: 'Deutschland' }),
      CONTACT_COUNTRY_EN: envField.string({ context: 'server', access: 'public', default: 'Germany' }),
    },
  },
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
