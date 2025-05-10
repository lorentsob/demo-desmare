"use client"

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import QuoteRequestModal from "./QuoteRequestModal";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="border-b border-white/10 sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container-custom">
          <nav className="flex items-center justify-between py-6">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold tracking-tight">
                Desmare
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/chi-siamo"
                className="text-text-secondary hover:text-foreground transition-colors"
              >
                Chi Siamo
              </Link>
              <Link
                href="/servizi"
                className="text-text-secondary hover:text-foreground transition-colors"
              >
                Servizi
              </Link>
              <Link
                href="/progetti"
                className="text-text-secondary hover:text-foreground transition-colors"
              >
                Progetti
              </Link>
              <Link
                href="/gallery"
                className="text-text-secondary hover:text-foreground transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/contatti"
                className="text-text-secondary hover:text-foreground transition-colors"
              >
                Contatti
              </Link>
            </div>

            <div className="hidden md:block">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary"
              >
                Richiedi un preventivo
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                  }
                />
              </svg>
            </button>
          </nav>

          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden py-4 pb-6"
            >
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-text-secondary hover:text-foreground transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/chi-siamo"
                  className="text-text-secondary hover:text-foreground transition-colors"
                >
                  Chi Siamo
                </Link>
                <Link
                  href="/servizi"
                  className="text-text-secondary hover:text-foreground transition-colors"
                >
                  Servizi
                </Link>
                <Link
                  href="/progetti"
                  className="text-text-secondary hover:text-foreground transition-colors"
                >
                  Progetti
                </Link>
                <Link
                  href="/gallery"
                  className="text-text-secondary hover:text-foreground transition-colors"
                >
                  Gallery
                </Link>
                <Link
                  href="/contatti"
                  className="text-text-secondary hover:text-foreground transition-colors"
                >
                  Contatti
                </Link>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="btn btn-primary inline-block w-full text-center"
                >
                  Richiedi un preventivo
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </header>

      <QuoteRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
