import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Demo Desmare', // Titolo generico, può essere personalizzato in seguito
  description: 'Sito demo Desmare migrato ad App Router', // Descrizione generica
  icons: {
    icon: '/favicon.png', // Default favicon
    // You can add additional sizes and formats here
    // apple: '/apple-icon.png',
    // shortcut: '/shortcut-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
