import { Metadata } from 'next';

const defaults = {
  siteName: 'Desmare',
  separator: '|',
  description: 'Soluzioni professionali per demolizioni e recupero materiali',
  baseUrl: 'https://desmare.it',
  locale: 'it_IT',
  themeColor: '#08A045',
};

type PageMetadata = {
  title: string;
  description: string;
  keywords?: string[];
  openGraph?: {
    images?: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
  };
};

export const metadataConfig = {
  defaults,
  pages: {
    home: {
      title:
        'Desmare - Servizi Professionali di Demolizione e Gestione Ambientale',
      description:
        'Servizi professionali di demolizione, strip-out, gestione rifiuti e bonifica amianto. Soluzioni sostenibili e conformi alle normative per progetti di demolizione e riqualificazione.',
      keywords: [
        'demolizioni professionali',
        'gestione rifiuti',
        'bonifica amianto',
        'strip-out',
        'riqualificazione ambientale',
      ],
      openGraph: {
        images: [
          {
            url: '/images/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Desmare - Servizi Professionali di Demolizione',
          },
        ],
      },
    },
    services: {
      title: 'Servizi',
      description:
        'Soluzioni complete e integrate per demolizioni, strip-out e bonifica ambientale. Servizi professionali e sostenibili.',
      keywords: [
        'servizi demolizione',
        'recupero materiali',
        'gestione rifiuti',
        'bonifica ambientale',
      ],
    },
    'services/demolizioni': {
      title: 'Demolizioni',
      description:
        "Soluzioni complete per demolizioni civili e industriali. Gestiamo l'intero processo, dal progetto alla gestione rifiuti, con un unico punto di contatto.",
      keywords: [
        'demolizioni civili',
        'demolizioni industriali',
        'demolizioni controllate',
        'gestione rifiuti',
      ],
    },
    'services/strip-out': {
      title: 'Strip-out',
      description:
        'Servizi di strip-out di precisione per la preparazione degli spazi alla ristrutturazione o riqualificazione, con minimo impatto sulle strutture adiacenti.',
      keywords: [
        'strip-out',
        'ristrutturazione',
        'riqualificazione',
        'rimozione elementi',
      ],
    },
    'services/bonifiche': {
      title: 'Bonifiche Ambientali',
      description:
        "Gestione sicura e conforme di bonifiche ambientali e materiali speciali, incluso amianto. Servizi specializzati con focus su sicurezza e tutela dell'ambiente.",
      keywords: [
        'bonifica amianto',
        'bonifiche ambientali',
        'gestione materiali speciali',
        'bonifica ambientale',
      ],
    },
    'chi-siamo': {
      title: 'Chi Siamo',
      description:
        'Scopri la storia di Desmare, la nostra missione e i valori che ci guidano nel settore delle demolizioni e della gestione ambientale.',
      keywords: [
        'chi siamo',
        'storia aziendale',
        'missione',
        'valori aziendali',
        'team professionale',
      ],
    },
    contatti: {
      title: 'Contatti',
      description:
        'Contattaci per informazioni, preventivi o consulenze sui nostri servizi di demolizione e gestione ambientale.',
      keywords: [
        'contatti',
        'preventivi',
        'informazioni',
        'consulenza',
        'richiesta preventivo',
      ],
    },
    progetti: {
      title: 'Progetti',
      description:
        'Esplora i nostri progetti di demolizione e gestione ambientale. Case history e realizzazioni che testimoniano la nostra esperienza.',
      keywords: [
        'progetti realizzati',
        'case history',
        'lavori completati',
        'portfolio',
        'realizzazioni',
      ],
    },
    gallery: {
      title: 'Gallery',
      description:
        'Galleria fotografica dei nostri lavori di demolizione e gestione ambientale. Immagini dei progetti realizzati.',
      keywords: [
        'galleria fotografica',
        'foto progetti',
        'immagini lavori',
        'portfolio fotografico',
      ],
    },
    collabora: {
      title: 'Collabora con Noi',
      description:
        'Unisciti al nostro team di professionisti nel settore delle demolizioni e della bonifica ambientale. Opportunità di crescita e ambiente di lavoro sicuro.',
      keywords: [
        'lavora con noi',
        'carriere',
        'opportunità lavorative',
        'posizioni aperte',
        'team professionale',
      ],
    },
    'coming-soon': {
      title: 'Prossimamente',
      description:
        'Pagina in costruzione. Torna presto per scoprire le novità di Desmare.',
      keywords: ['in costruzione', 'prossimamente', 'novità', 'aggiornamenti'],
    },
  } as Record<string, PageMetadata>,
};

export function generateMetadata(
  page: keyof typeof metadataConfig.pages,
): Metadata {
  const pageMetadata = metadataConfig.pages[page];
  const title = pageMetadata.title;

  const metadata: Metadata = {
    title,
    description: pageMetadata.description,
    metadataBase: new URL(metadataConfig.defaults.baseUrl),
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        {
          rel: 'mask-icon',
          url: '/safari-pinned-tab.svg',
          color: metadataConfig.defaults.themeColor,
        },
      ],
    },
    manifest: '/site.webmanifest',
    openGraph: {
      title,
      description: pageMetadata.description,
      url: `${metadataConfig.defaults.baseUrl}/${page === 'home' ? '' : page}`,
      siteName: metadataConfig.defaults.siteName,
      locale: metadataConfig.defaults.locale,
      type: 'website',
      ...(pageMetadata.openGraph?.images && {
        images: pageMetadata.openGraph.images,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: pageMetadata.description,
    },
    alternates: {
      canonical: `${metadataConfig.defaults.baseUrl}/${page === 'home' ? '' : page}`,
    },
    other: {
      'theme-color': metadataConfig.defaults.themeColor,
      'msapplication-TileColor': metadataConfig.defaults.themeColor,
      'msapplication-config': '/browserconfig.xml',
    },
  };

  if (pageMetadata.keywords) {
    metadata.keywords = pageMetadata.keywords;
  }

  return metadata;
}
