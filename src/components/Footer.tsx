'use client';

import Link from 'next/link';
import { useState } from 'react';
import QuoteRequestModal from './QuoteRequestModal';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer
      className="border-t border-white/10 py-16"
      role="contentinfo"
      aria-label="Informazioni di contatto e navigazione secondaria"
    >
      <div className="container-custom">
        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2">
            <Link
              href="/"
              className="mb-6 inline-block text-2xl font-bold tracking-tight"
              aria-label="Desmare - Vai alla home page"
            >
              Desmare
            </Link>
            <p className="mt-4 max-w-xs text-text-secondary">
              Soluzioni professionali per demolizioni, smaltimento e recupero
              materiali con attenzione alla sostenibilità.
            </p>

            <div className="mt-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary"
                aria-label="Richiedi un preventivo"
                aria-haspopup="dialog"
              >
                Richiedi un preventivo
              </button>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-medium" id="footer-link-utili">
              Link utili
            </h4>

            <Link
              href="/servizi#demolizioni"
              className="text-text-secondary transition-colors hover:text-foreground"
              aria-labelledby="footer-per-i-professionisti"
            >
              <h4 className="mb-4 font-medium" id="footer-per-i-professionisti">
                Per i professionisti
              </h4>
            </Link>
            <Link
              href="/"
              className="text-text-secondary transition-colors hover:text-foreground"
              aria-labelledby="footer-certificazioni"
            >
              <h4 className="mb-4 font-medium" id="footer-certificazioni">
                Certificazioni
              </h4>
            </Link>
          </div>

          <div>
            <h4 className="mb-4 font-medium" id="footer-azienda">
              Azienda
            </h4>
            <ul className="space-y-3" aria-labelledby="footer-azienda">
              <li>
                <Link
                  href="/chi-siamo"
                  className="text-text-secondary transition-colors hover:text-foreground"
                >
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-text-secondary transition-colors hover:text-foreground"
                >
                  Gallery
                </Link>
              </li>
              <li></li>
            </ul>
          </div>

          <div>
            <Link
              href="/contatti"
              className="text-text-foreground transition-colors hover:text-foreground"
              aria-labelledby="footer-contatti"
            >
              <h4 className="mb-4 font-medium" id="footer-contatti">
                Contatti
              </h4>
            </Link>

            <ul className="space-y-3" aria-labelledby="footer-contatti">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@desmare.it"
                  className="text-text-secondary transition-colors hover:text-foreground"
                  aria-label="Email: info@desmare.it"
                >
                  info@desmare.it
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+390123456789"
                  className="text-text-secondary transition-colors hover:text-foreground"
                  aria-label="Telefono: +39 0123 456789"
                >
                  +39 0123 456789
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between border-t border-white/10 pt-8 md:flex-row md:items-center">
          <div className="text-sm text-text-secondary">
            © {new Date().getFullYear()} Desmare Srl. Tutti i diritti
            riservati.
          </div>

          <nav aria-label="Pagine legali">
            <div className="mt-4 flex space-x-6 md:mt-0">
              <Link
                href="/termini-e-condizioni"
                className="text-sm text-text-secondary transition-colors hover:text-foreground"
              >
                Termini e Condizioni
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-text-secondary transition-colors hover:text-foreground"
              >
                Privacy
              </Link>
              <Link
                href="/cookie"
                className="text-sm text-text-secondary transition-colors hover:text-foreground"
              >
                Cookie
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <QuoteRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </footer>
  );
}
