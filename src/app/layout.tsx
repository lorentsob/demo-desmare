import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { metadataConfig } from '@/content/metadata';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Ottimizzazione per il caricamento dei font
});

export const metadata: Metadata = {
  metadataBase: new URL(metadataConfig.defaults.baseUrl),
  title: {
    default: metadataConfig.pages.home.title,
    template: `%s ${metadataConfig.defaults.separator} ${metadataConfig.defaults.siteName}`,
  },
  description: metadataConfig.defaults.description,
  keywords: [
    'demolition services',
    'strip-out services',
    'waste management',
    'environmental services',
    'asbestos removal',
  ],
  authors: [{ name: metadataConfig.defaults.siteName }],
  creator: metadataConfig.defaults.siteName,
  publisher: metadataConfig.defaults.siteName,
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     'max-video-preview': -1,
  //     'max-image-preview': 'large',
  //     'max-snippet': -1,
  //   },
  // },
  openGraph: {
    type: 'website',
    locale: metadataConfig.defaults.locale,
    url: metadataConfig.defaults.baseUrl,
    title: 'Desmare - Servizi di Demolizione Professionali',
    description:
      'Servizi professionali di demolizione, strip-out e gestione rifiuti con un approccio sostenibile e conforme alle normative.',
    siteName: metadataConfig.defaults.siteName,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desmare - Servizi di Demolizione Professionali',
    description:
      'Servizi professionali di demolizione, strip-out e gestione rifiuti con un approccio sostenibile e conforme alle normative.',
  },
  alternates: {
    canonical: metadataConfig.defaults.baseUrl,
  },
  other: {
    'theme-color': metadataConfig.defaults.themeColor,
    'msapplication-TileColor': metadataConfig.defaults.themeColor,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={inter.variable}>
      <head>
        <meta name="apple-mobile-web-app-title" content="Desmare" />
      </head>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen" role="main" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
