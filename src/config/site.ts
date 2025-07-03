export const siteConfig = {
  name: 'De.sma.re',
  description: 'Servizi di demolizione e bonifica ambientale',
  contact: {
    email: 'info@desmare.it',
    phone: '+39 329 634 3220',
    address: 'Piazzale Giotto 13, Perugia 06121 (PG)',
    piva: '03962600544',
    pec: 'desmare@pec.it',
  },
  social: {
    linkedin: 'https://linkedin.com/company/desmare',
    facebook: 'https://facebook.com/desmare',
  },
  seo: {
    title: 'De.sma.re - Servizi di demolizione e bonifica ambientale',
    description:
      'Servizi professionali di demolizione, bonifica ambientale e gestione rifiuti speciali. Operiamo in tutta Italia con certificazioni e autorizzazioni.',
    keywords:
      'demolizioni, bonifica ambientale, rifiuti speciali, smaltimento rifiuti, demolizioni industriali',
  },
  legal: {
    companyName: 'De.sma.re Recycling service di Antonio Boschi',
    vatNumber: 'IT03962600544',
    rea: 'PG-123456', // Da verificare il codice REA specifico
    registeredOffice: 'Piazzale Giotto 13, Perugia',
  },
  // Altre configurazioni globali possono essere aggiunte qui
} as const;

// Tipo per la configurazione
export type SiteConfig = typeof siteConfig;
