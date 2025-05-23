import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Ottimizzazione per il caricamento dei font
});

export const metadata: Metadata = {
  metadataBase: new URL('https://desmare.it'),
  title: {
    default: 'Desmare | Professional Demolition and Environmental Services',
    template: '%s | Desmare',
  },
  description:
    'Professional demolition, strip-out, and environmental services with a focus on sustainability and regulatory compliance.',
  keywords: [
    'demolition services',
    'strip-out services',
    'waste management',
    'environmental services',
    'asbestos removal',
  ],
  authors: [{ name: 'Desmare' }],
  creator: 'Desmare',
  publisher: 'Desmare',
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
    locale: 'it_IT',
    url: 'https://desmare.it',
    title: 'Desmare - Servizi di Demolizione Professionali',
    description:
      'Servizi professionali di demolizione, strip-out e gestione rifiuti con un approccio sostenibile e conforme alle normative.',
    siteName: 'Desmare',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desmare - Servizi di Demolizione Professionali',
    description:
      'Servizi professionali di demolizione, strip-out e gestione rifiuti con un approccio sostenibile e conforme alle normative.',
  },
  alternates: {
    canonical: 'https://desmare.it',
  },
  other: {
    'theme-color': '#08A045',
    'msapplication-TileColor': '#08A045',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={inter.variable}>
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
