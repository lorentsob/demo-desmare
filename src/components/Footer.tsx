"use client";

import Link from "next/link";
import { useState } from "react";
import QuoteRequestModal from "./QuoteRequestModal";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="py-16 border-t border-white/10">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight mb-6 inline-block"
            >
              Desmare
            </Link>
            <p className="text-text-secondary mt-4 max-w-xs">
              Soluzioni professionali per demolizioni, smaltimento e recupero
              materiali con attenzione alla sostenibilità.
            </p>

            <div className="mt-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary"
              >
                Richiedi un preventivo
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Link utili</h4>

            <Link
              href="/servizi#demolizioni"
              className="text-text-secondary hover:text-foreground transition-colors"
            >
              <h4 className="font-medium mb-4">Per i professionisti</h4>
            </Link>
            <Link
              href="/"
              className="text-text-secondary hover:text-foreground transition-colors"
            >
              <h4 className="font-medium mb-4">Certificazioni</h4>
            </Link>

            {/* <ul className="space-y-3">
              <li>
                <Link
                  href="/servizi#demolizioni"
                  className="text-text-secondary hover:text-foreground transition-colors"
                >
                  Demolizioni
                </Link>
              </li>
              <li>
                <Link
                  href="/servizi#smaltimento"
                  className="text-text-secondary hover:text-foreground transition-colors"
                >
                  Smaltimento
                </Link>
              </li>
              <li>
                <Link
                  href="/servizi#recupero"
                  className="text-text-secondary hover:text-foreground transition-colors"
                >
                  Recupero Rifiuti
                </Link>
              </li>
              <li>
                <Link
                  href="/progetti"
                  className="text-text-secondary hover:text-foreground transition-colors"
                >
                  Progetti Realizzati
                </Link>
              </li>
            </ul> */}
          </div>

          <div>
            <h4 className="font-medium mb-4">Azienda</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/chi-siamo"
                  className="text-text-secondary hover:text-foreground transition-colors"
                >
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-text-secondary hover:text-foreground transition-colors"
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
              className="text-text-foreground hover:text-foreground transition-colors"
            >
              <h4 className="font-medium mb-4">Contatti</h4>
            </Link>

            <ul className="space-y-3">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-accent mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
                  className="text-text-secondary hover:text-foreground transition-colors"
                >
                  info@desmare.it
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-accent mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
                  className="text-text-secondary hover:text-foreground transition-colors"
                >
                  +39 0123 456789
                </a>
              </li>
              {/* <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-accent mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <address className="text-text-secondary not-italic">
                  Via Roma 123, 00100 Roma
                </address>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between pt-8 border-t border-white/10">
          <div className="text-text-secondary text-sm">
            © {new Date().getFullYear()} Desmare Srl. Tutti i diritti riservati.
          </div>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/termini-e-condizioni"
              className="text-text-secondary hover:text-foreground transition-colors text-sm"
            >
              Termini e Condizioni
            </Link>
            <Link
              href="/privacy"
              className="text-text-secondary hover:text-foreground transition-colors text-sm"
            >
              Privacy
            </Link>
            <Link
              href="/cookie"
              className="text-text-secondary hover:text-foreground transition-colors text-sm"
            >
              Cookie
            </Link>
          </div>
        </div>
      </div>

      <QuoteRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </footer>
  );
}
