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
  title: 'Demo Desmare', // Titolo generico, può essere personalizzato in seguito
  description: 'Sito demo Desmare migrato ad App Router', // Descrizione generica
  metadataBase: new URL('https://demo-desmare.com'), // Base URL per i metadata
  icons: {
    icon: '/favicon.png', // Default favicon
    // You can add additional sizes and formats here
    // apple: '/apple-icon.png',
    // shortcut: '/shortcut-icon.png',
  },
  // Ottimizzazioni per SEO e social sharing
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://demo-desmare.com',
    siteName: 'Demo Desmare',
  },
  // Ottimizzazioni per la cache
  robots: {
    index: true,
    follow: true,
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
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
