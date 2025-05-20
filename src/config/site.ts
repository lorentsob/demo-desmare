export const siteConfig = {
  name: 'Desmare',
  description: 'Servizi di demolizione e bonifica ambientale',
  contact: {
    email: 'test@desmare.it', // Email di test - da aggiornare con quella ufficiale
    phone: '+39 123 456 7890', // Numero di test - da aggiornare con quello ufficiale
    address: 'Via Esempio 123, 20100 Milano', // Indirizzo di test - da aggiornare con quello ufficiale
    piva: '12345678901', // Partita IVA di test
    pec: 'pec@desmare.it', // PEC di test
    rea: 'MI-123456', // Registro delle Imprese
    capitaleSociale: '10.000,00', // Capitale sociale
  },
  social: {
    linkedin: 'https://linkedin.com/company/desmare',
    facebook: 'https://facebook.com/desmare',
  },
  seo: {
    title: 'Desmare - Servizi di demolizione e bonifica ambientale',
    description:
      'Servizi professionali di demolizione, bonifica ambientale e gestione rifiuti speciali. Operiamo in tutta Italia con certificazioni e autorizzazioni.',
    keywords:
      'demolizioni, bonifica ambientale, rifiuti speciali, smaltimento rifiuti, demolizioni industriali',
  },
  legal: {
    companyName: 'Desmare Srl',
    vatNumber: 'IT12345678901',
    rea: 'MI-123456',
    registeredOffice: 'Via Esempio 123, 20100 Milano',
  },
  // Altre configurazioni globali possono essere aggiunte qui
} as const;

// Tipo per la configurazione
export type SiteConfig = typeof siteConfig;
