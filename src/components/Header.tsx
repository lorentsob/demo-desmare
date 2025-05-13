"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import QuoteRequestModal from "./QuoteRequestModal";

// Define service submenu items
const serviceSubmenuItems = [
  { name: "Demolizioni", href: "/servizi/demolizioni" },
  { name: "Strip-out", href: "/servizi/strip-out" },
  { name: "Rifiuti Pericolosi", href: "/servizi/rifiuti-pericolosi" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="border-b border-white/10 sticky top-0 z-50 bg-background/85 backdrop-blur-lg">
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

              {/* Services dropdown for desktop */}
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <Link
                  href="/servizi"
                  className="text-text-secondary hover:text-foreground transition-colors flex items-center gap-1"
                >
                  Servizi
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </Link>

                {/* Dropdown menu */}
                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                    >
                      {serviceSubmenuItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-accent"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

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
              aria-label="Toggle menu"
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
        </div>
      </header>

      {/* Mobile menu - semi-transparent background with blur */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 md:hidden z-40 bg-background/60 backdrop-blur-md"
          >
            {/* Keep the original header visible and just add close button */}
            <div className="container-custom border-b border-white/10 py-6 flex justify-end">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="focus:outline-none"
                aria-label="Close menu"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile menu content */}
            <div className="container-custom overflow-y-auto">
              <nav className="flex flex-col space-y-5 py-8">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium hover:text-accent transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/chi-siamo"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium hover:text-accent transition-colors"
                >
                  Chi Siamo
                </Link>

                {/* Services dropdown for mobile */}
                <div className="space-y-2 w-full">
                  <button
                    className="flex justify-between items-center w-full text-left text-lg font-medium hover:text-accent transition-colors"
                    onClick={() =>
                      setMobileServicesExpanded(!mobileServicesExpanded)
                    }
                  >
                    <span>Servizi</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-200 ${
                        mobileServicesExpanded ? "rotate-180" : ""
                      }`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {mobileServicesExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-4 space-y-3 overflow-hidden"
                      >
                        <Link
                          href="/servizi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-lg text-text-secondary hover:text-accent transition-colors"
                        >
                          Tutti i servizi
                        </Link>
                        {serviceSubmenuItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-lg text-text-secondary hover:text-accent transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/progetti"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium hover:text-accent transition-colors"
                >
                  Progetti
                </Link>
                <Link
                  href="/gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium hover:text-accent transition-colors"
                >
                  Gallery
                </Link>
                <Link
                  href="/contatti"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium hover:text-accent transition-colors"
                >
                  Contatti
                </Link>

                <div className="pt-4 w-full max-w-xs">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setIsModalOpen(true);
                    }}
                    className="btn btn-primary w-full text-center py-3"
                  >
                    Richiedi un preventivo
                  </button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <QuoteRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
