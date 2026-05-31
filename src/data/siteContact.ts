/**
 * prompt: load contact data from ilian and addresses (personalized data) from .env
 */
import {
  CONTACT_NAME,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  CONTACT_EMAIL,
  CONTACT_STREET,
  CONTACT_POSTAL,
  CONTACT_CITY,
  CONTACT_COUNTRY_DE,
  CONTACT_COUNTRY_EN,
} from 'astro:env/server';
import type { Lang } from '../i18n/ui';

/** Site-wide contact + address from .env (public server vars) */
export function getSiteContact() {
  return {
    name: CONTACT_NAME,
    phone: CONTACT_PHONE,
    phoneTel: CONTACT_PHONE_TEL,
    email: CONTACT_EMAIL,
    street: CONTACT_STREET,
    postal: CONTACT_POSTAL,
    city: CONTACT_CITY,
    countryDe: CONTACT_COUNTRY_DE,
    countryEn: CONTACT_COUNTRY_EN,
    addressInline: `${CONTACT_STREET} · ${CONTACT_POSTAL} ${CONTACT_CITY}`,
  };
}

/** Multi-line address for contact / legal pages */
export function getAddressLines(lang: Lang) {
  const c = getSiteContact();
  return {
    line1: c.street,
    line2: `${c.postal} ${c.city}`,
    line3: lang === 'de' ? c.countryDe : c.countryEn,
  };
}

/** Split display name for footer wordmark (Ilian + Simeonow) */
export function getContactNameParts() {
  const parts = CONTACT_NAME.trim().split(/\s+/);
  return {
    given: parts[0] ?? CONTACT_NAME,
    family: parts.slice(1).join(' ') || '',
  };
}
