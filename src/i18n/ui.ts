export const languages = {
  de: 'Deutsch',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'de';

// ─── All UI strings, keyed by locale ────────────────────────────────────────

export const ui = {
  de: {
    // Nav
    'nav.bio':      'Biographie',
    'nav.skills':   'Skills',
    'nav.credits':  'Credits',
    'nav.galerie':  'Galerie',
    'nav.video':    'Video',
    'nav.partner':  'Partner',
    'nav.kontakt':  'Kontakt',
    'nav.sedcard':  '↓ Sedcard PDF',

    // Hero
    'hero.eyebrow':  'Stuntman · Artist · Dresden, Deutschland',
    'hero.role':     'Kaskadeur · Action Artist · Schauspieler · Zauberer',
    'hero.cta.reel': 'Showreel ansehen',
    'hero.cta.credits': 'Credits & Referenzen',
    'hero.side':     'Stuntman · Kaskadeur · Action Artist · Schauspieler',

    // Stats
    'stats.experience': 'Jahre Erfahrung',
    'stats.productions': 'Produktionen',
    'stats.disciplines': 'Stunt-Disziplinen',
    'stats.countries':   'Länder',

    // Sedcard bar
    'sedcard.text': 'Sedcard & Vita als PDF herunterladen',
    'sedcard.btn':  '↓ Sedcard & Vita PDF',

    // Section labels
    'label.about':      '// Über mich',
    'label.productions': '// Letzte Produktionen',
    'label.credits':    '// Credits & Referenzen',
    'label.skills':     '// Fertigkeiten',
    'label.gallery':    '// Galerie',
    'label.video':      '// Showreel & Videos',
    'label.partner':    '// Partner & Kollegen',
    'label.wissen':     '// Wissenswertes',
    'label.contact':    '// Buchung & Kontakt',

    // Section headings
    'heading.about':       'Kaskadeur\naus Leidenschaft.',
    'heading.productions': 'Aktuelles &\nNeuigkeiten.',
    'heading.credits':     'Ausgewählte\nProduktionen.',
    'heading.skills':      'Stunt, Artistik\n& mehr.',
    'heading.gallery':     'Fotos aus\nProduktion & Show.',
    'heading.video':       'Sehen ist\nGlauben.',
    'heading.partner':     'Einmal mit\nProfis.',
    'heading.wissen':      'Mehr erfahren.',
    'heading.contact':     'Buchen Sie\nIlian.',

    // "See all" links
    'link.allCredits':     'Alle Credits ansehen →',
    'link.allPhotos':      'Alle Fotos ansehen →',
    'link.allVideos':      'Alle Videos ansehen →',
    'link.readBio':        'Biographie lesen →',
    'link.allSkills':      'Alle Skills ansehen →',
    'link.readArticle':    'Artikel lesen →',

    // Credits tabs
    'credits.tab.stunt':    'Stuntman',
    'credits.tab.actor':    'Schauspieler',
    'credits.tab.artist':   'Artist',
    'credits.tab.clients':  'Weitere Kunden',
    'credits.more':         '+38 weitere',
    'credits.allLink':      'Vollständige Credits →',

    // Skills categories
    'skills.cat.artistik':  'Artistik / X-treme Artistik',
    'skills.cat.stunt':     'Stunt',
    'skills.cat.equipment': 'Eigenes Equipment',

    // Contact
    'contact.sub':     'Stuntkoordinator · Kampfchoreograph\nAction-Darsteller · Artist · Zauberer',
    'contact.send':    'Anfrage senden',
    'contact.phone':   'Telefon',
    'contact.email':   'E-Mail',
    'contact.address': 'Adresse',

    // Footer
    'footer.brand.text': 'Stuntman, Kaskadeur, Artist und Schauspieler aus Dresden. Über 23 Jahre Erfahrung in Film, Fernsehen, Theater und Show — international.',
    'footer.col.nav':      'Navigation',
    'footer.col.wissen':   'Wissenswertes',
    'footer.col.legal':    'Downloads & Rechtliches',
    'footer.copy':         '© 2024 Ilian Simeonow · Stuntman & Artist · Heiligenhaus, Germany',
    'footer.impressum':    'Impressum',
    'footer.datenschutz':  'Datenschutz',
    'footer.sitemap':      'Sitemap',

    // Page titles
    'page.home.title':       'Ilian Simeonow — Stuntman & Artist aus Dresden',
    'page.bio.title':        'Biographie — Ilian Simeonow',
    'page.skills.title':     'Skills & Fertigkeiten — Ilian Simeonow',
    'page.credits.title':    'Credits & Referenzen — Ilian Simeonow',
    'page.galerie.title':    'Galerie — Ilian Simeonow',
    'page.video.title':      'Showreel & Videos — Ilian Simeonow',
    'page.partner.title':    'Partner — Ilian Simeonow',
    'page.kontakt.title':    'Kontakt — Ilian Simeonow',
    'page.impressum.title':  'Impressum — Ilian Simeonow',
    'page.wissen.title':     'Wissenswertes — Ilian Simeonow',

    // Meta descriptions
    'meta.home':    'Ilian Simeonow — Stuntman, Kaskadeur, Artist und Schauspieler aus Dresden. 23+ Jahre Erfahrung in Film, Fernsehen und Theater. Jetzt buchen.',
    'meta.bio':     'Biographie von Ilian Simeonow: diplomierter Artist der Staatlichen Ballettschule Berlin, Trampolin-Kaskadeur und internationaler Stuntman.',
    'meta.skills':  'Alle Stunt- und Artistik-Fertigkeiten von Ilian Simeonow: Fechten, Highfall, Globe of Speed, Kampfchoreographie und mehr.',
    'meta.credits': '46+ Produktionen: Kinofilme, Opern, Open-Air-Theater und TV-Produktionen. Vollständige Credits von Ilian Simeonow.',
  },

  en: {
    // Nav
    'nav.bio':      'Biography',
    'nav.skills':   'Skills',
    'nav.credits':  'Credits',
    'nav.galerie':  'Gallery',
    'nav.video':    'Video',
    'nav.partner':  'Partners',
    'nav.kontakt':  'Contact',
    'nav.sedcard':  '↓ Sedcard PDF',

    // Hero
    'hero.eyebrow':  'Stuntman · Artist · Dresden, Germany',
    'hero.role':     'Stunt Performer · Action Artist · Actor · Magician',
    'hero.cta.reel': 'Watch Showreel',
    'hero.cta.credits': 'Credits & References',
    'hero.side':     'Stuntman · Stunt Performer · Action Artist · Actor',

    // Stats
    'stats.experience':  'Years Experience',
    'stats.productions': 'Productions',
    'stats.disciplines': 'Stunt Disciplines',
    'stats.countries':   'Countries',

    // Sedcard bar
    'sedcard.text': 'Download Sedcard & CV as PDF',
    'sedcard.btn':  '↓ Sedcard & CV PDF',

    // Section labels
    'label.about':       '// About',
    'label.productions': '// Recent Productions',
    'label.credits':     '// Credits & References',
    'label.skills':      '// Skills',
    'label.gallery':     '// Gallery',
    'label.video':       '// Showreel & Videos',
    'label.partner':     '// Partners & Colleagues',
    'label.wissen':      '// Knowledge',
    'label.contact':     '// Booking & Contact',

    // Section headings
    'heading.about':       'Stunt Performer\nby Passion.',
    'heading.productions': 'Recent\nProductions.',
    'heading.credits':     'Selected\nProductions.',
    'heading.skills':      'Stunts, Acrobatics\n& More.',
    'heading.gallery':     'Photos from\nProduction & Show.',
    'heading.video':       'Seeing is\nBelieving.',
    'heading.partner':     'Working with\nProfessionals.',
    'heading.wissen':      'Learn More.',
    'heading.contact':     'Book\nIlian.',

    // "See all" links
    'link.allCredits':  'View all credits →',
    'link.allPhotos':   'View all photos →',
    'link.allVideos':   'View all videos →',
    'link.readBio':     'Read biography →',
    'link.allSkills':   'View all skills →',
    'link.readArticle': 'Read article →',

    // Credits tabs
    'credits.tab.stunt':   'Stunt Performer',
    'credits.tab.actor':   'Actor',
    'credits.tab.artist':  'Artist',
    'credits.tab.clients': 'Further Clients',
    'credits.more':        '+38 more',
    'credits.allLink':     'Full credits →',

    // Skills categories
    'skills.cat.artistik':  'Acrobatics / X-treme Artistry',
    'skills.cat.stunt':     'Stunt',
    'skills.cat.equipment': 'Own Equipment',

    // Contact
    'contact.sub':     'Stunt Coordinator · Fight Choreographer\nAction Performer · Artist · Magician',
    'contact.send':    'Send Enquiry',
    'contact.phone':   'Phone',
    'contact.email':   'E-Mail',
    'contact.address': 'Address',

    // Footer
    'footer.brand.text': 'Stuntman, stunt performer, artist and actor based in Dresden. 23+ years of experience in film, television, theatre and live shows — internationally.',
    'footer.col.nav':     'Navigation',
    'footer.col.wissen':  'Knowledge',
    'footer.col.legal':   'Downloads & Legal',
    'footer.copy':        '© 2024 Ilian Simeonow · Stuntman & Artist · Heiligenhaus, Germany',
    'footer.impressum':   'Legal Notice',
    'footer.datenschutz': 'Privacy Policy',
    'footer.sitemap':     'Sitemap',

    // Page titles
    'page.home.title':      'Ilian Simeonow — Stuntman & Artist from Dresden',
    'page.bio.title':       'Biography — Ilian Simeonow',
    'page.skills.title':    'Skills — Ilian Simeonow',
    'page.credits.title':   'Credits & References — Ilian Simeonow',
    'page.galerie.title':   'Gallery — Ilian Simeonow',
    'page.video.title':     'Showreel & Videos — Ilian Simeonow',
    'page.partner.title':   'Partners — Ilian Simeonow',
    'page.kontakt.title':   'Contact — Ilian Simeonow',
    'page.impressum.title': 'Legal Notice — Ilian Simeonow',
    'page.wissen.title':    'Knowledge — Ilian Simeonow',

    // Meta descriptions
    'meta.home':    'Ilian Simeonow — stuntman, stunt performer, artist and actor from Dresden. 23+ years in film, TV and theatre. Available for bookings.',
    'meta.bio':     'Biography of Ilian Simeonow: graduate of the State Ballet School Berlin, trampoline stunt performer and international stuntman.',
    'meta.skills':  'Ilian Simeonow\'s full range of stunt and acrobatic skills: fencing, high falls, Globe of Speed, fight choreography and more.',
    'meta.credits': '46+ productions: feature films, opera, open-air theatre and TV. Full credits of Ilian Simeonow.',
  },
} as const;

export type UiKey = keyof typeof ui[typeof defaultLang];
