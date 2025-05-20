'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { RefObject, useCallback, useRef, useState } from 'react';
import { useBodyScroll } from '../hooks/useBodyScroll';
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation';
import QuoteRequestModal from './QuoteRequestModal';

// Define service submenu items
const serviceSubmenuItems = [
  { name: 'Demolizioni', href: '/servizi/demolizioni' },
  { name: 'Strip-out', href: '/servizi/strip-out' },
  { name: 'Rifiuti Pericolosi', href: '/servizi/rifiuti-pericolosi' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);

  // Refs for accessibility and event handling
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  const mobileServicesButtonRef = useRef<HTMLButtonElement>(null);

  // Handle body scroll locking
  useBodyScroll(mobileMenuOpen);

  // Handle close dropdown events
  const closeServicesDropdown = useCallback(() => {
    setServicesDropdownOpen(false);
  }, []);

  // Open and close modal with consistent state management
  const openQuoteModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeQuoteModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  // Handle clicks outside dropdown - but don't use this for hover behavior
  // useClickOutside(dropdownRef, closeServicesDropdown);

  // Handle keyboard navigation for desktop dropdown
  useKeyboardNavigation(
    servicesDropdownOpen,
    dropdownMenuRef as RefObject<HTMLElement>,
    closeServicesDropdown,
  );

  // Toggle the services dropdown with keyboard support
  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  // Handle dropdown keyboard events
  const handleDropdownKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
      e.preventDefault();
      setServicesDropdownOpen(true);
      // Focus first menu item on next tick
      setTimeout(() => {
        const firstItem = dropdownMenuRef.current?.querySelector('a');
        (firstItem as HTMLElement)?.focus();
      }, 10);
    }
  };

  // Mobile menu toggle with keyboard support
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Toggle mobile services dropdown
  const toggleMobileServices = () => {
    setMobileServicesExpanded(!mobileServicesExpanded);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-white/85 backdrop-blur-lg">
        <div className="container-custom">
          <nav
            className="flex items-center justify-between py-6"
            aria-label="Main Navigation"
          >
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold tracking-tight">
                Desmare
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden flex-1 items-center justify-center md:flex">
              <div className="flex items-center space-x-12">
                <Link
                  href="/chi-siamo"
                  className="text-text-secondary transition-colors hover:text-text"
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
                    className="flex items-center gap-1 text-text-secondary transition-colors hover:text-text"
                    onKeyDown={handleDropdownKeyDown}
                    aria-expanded={servicesDropdownOpen}
                    aria-haspopup="true"
                    aria-controls="services-dropdown"
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
                        servicesDropdownOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
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
                        className="absolute left-0 z-50 mt-2 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        id="services-dropdown"
                        ref={dropdownMenuRef}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="services-menu-button"
                        onMouseEnter={() => setServicesDropdownOpen(true)}
                        onMouseLeave={() => setServicesDropdownOpen(false)}
                      >
                        {serviceSubmenuItems.map((item, index) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary focus:outline-none"
                            role="menuitem"
                            onClick={closeServicesDropdown}
                            tabIndex={0}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Link
                  href="/collabora"
                  className="text-text-secondary transition-colors hover:text-text"
                >
                  Collabora con noi
                </Link>

                <Link
                  href="/contatti"
                  className="text-text-secondary transition-colors hover:text-text"
                >
                  Contatti
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <button
                onClick={openQuoteModal}
                className="btn btn-primary"
                aria-label="Richiedi un preventivo"
                aria-haspopup="dialog"
              >
                Richiedi un preventivo
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    mobileMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5'
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
            className="fixed inset-0 z-40 bg-bg/60 backdrop-blur-md md:hidden"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Keep the original header visible and just add close button */}
            <div className="container-custom flex justify-end border-b border-white/10 py-6">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-bg"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                  aria-hidden="true"
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
              <nav
                className="flex flex-col space-y-5 py-8"
                aria-label="Mobile Navigation"
              >
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none"
                >
                  Home
                </Link>
                <Link
                  href="/chi-siamo"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none"
                >
                  Chi Siamo
                </Link>

                {/* Services dropdown for mobile */}
                <div className="w-full space-y-2" ref={mobileDropdownRef}>
                  <button
                    ref={mobileServicesButtonRef}
                    className="flex w-full items-center justify-between text-left text-lg font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none"
                    onClick={toggleMobileServices}
                    aria-expanded={mobileServicesExpanded}
                    aria-controls="mobile-services-dropdown"
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
                        mobileServicesExpanded ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {mobileServicesExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3 overflow-hidden pl-4"
                        id="mobile-services-dropdown"
                        role="region"
                      >
                        {serviceSubmenuItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-lg text-text-secondary transition-colors hover:text-primary focus:text-primary focus:outline-none"
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
                  className="text-lg font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none"
                >
                  Progetti
                </Link>
                <Link
                  href="/gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none"
                >
                  Gallery
                </Link>
                <Link
                  href="/contatti"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none"
                >
                  Contatti
                </Link>

                <div className="w-full max-w-xs pt-4">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openQuoteModal();
                    }}
                    className="btn btn-primary w-full py-3 text-center"
                    aria-haspopup="dialog"
                  >
                    Richiedi un preventivo
                  </button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <QuoteRequestModal isOpen={isModalOpen} onClose={closeQuoteModal} />
    </>
  );
}
