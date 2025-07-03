'use client';

import { heroContent } from '@/content/hero';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import QuoteRequestModal from './QuoteRequestModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const getAcronymColor = (acronym: string) => {
    if (!hoveredService) return 'text-primary';

    const hoveredAcronym = heroContent.title.services.find(
      (service) => service.name.toLowerCase() === hoveredService.toLowerCase(),
    )?.acronym;

    return acronym === hoveredAcronym ? 'text-primary' : 'text-text';
  };

  const getCurrentImages = () => {
    if (!hoveredService) return heroContent.images.default;

    const serviceKey = hoveredService.toLowerCase();
    return (
      heroContent.images[serviceKey as keyof typeof heroContent.images] ||
      heroContent.images.default
    );
  };

  const currentImages = getCurrentImages();

  return (
    <section
      className="relative min-h-[calc(100vh-80px)] overflow-hidden py-12 lg:py-0"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div className="container-custom relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-6 text-balance text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              <motion.span
                className={`transition-colors duration-100 ${getAcronymColor('De')}`}
              >
                De
              </motion.span>
              <motion.span
                className={`transition-colors duration-100 ${getAcronymColor('Sma')}`}
              >
                .Sma
              </motion.span>
              <motion.span
                className={`transition-colors duration-100 ${getAcronymColor('Re')}`}
              >
                .Re.
              </motion.span>
            </h1>

            <h2 className="mb-6 text-balance text-3xl font-bold leading-tight sm:text-5xl lg:text-5xl">
              {heroContent.title.subtitle}{' '}
              {heroContent.title.services.map((service, index) => (
                <span key={service.name}>
                  <Link
                    href={service.href}
                    className="text-default underline transition-colors duration-100 hover:text-primary/80"
                    onMouseEnter={() => setHoveredService(service.name)}
                    onMouseLeave={() => setHoveredService(null)}
                    onFocus={() => setHoveredService(service.name)}
                    onBlur={() => setHoveredService(null)}
                  >
                    {service.name}
                  </Link>
                  {index < heroContent.title.services.length - 1 && (
                    <span>
                      {index === heroContent.title.services.length - 2
                        ? ' e '
                        : ', '}
                    </span>
                  )}
                  {index === heroContent.title.services.length - 1 && '.'}
                </span>
              ))}
            </h2>

            <p className="mb-8 max-w-lg text-lg text-text-secondary">
              {heroContent.description}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary px-8 py-3 text-lg"
              >
                {heroContent.cta.primary}
              </button>
              <Link
                href="/servizi"
                className="btn border border-primary/20 px-8 py-3 text-center text-lg transition-colors hover:bg-primary/5"
              >
                {heroContent.cta.secondary}
              </Link>
            </div>

            {/* <div className="mt-12 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 overflow-hidden rounded-full border-2 border-bg"
                  >
                    <div className="h-full w-full bg-primary/20"></div>
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-text-secondary">
                  {heroContent.testimonials.text}
                </p>
              </div>
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-primary/10 blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-primary/10 blur-2xl"></div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-36 overflow-hidden rounded-2xl shadow-xl sm:h-56">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${currentImages[0]}-${hoveredService || 'default'}`}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={currentImages[0]}
                        alt="Servizi di demolizione"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="relative h-36 overflow-hidden rounded-2xl shadow-xl sm:h-44">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${currentImages[1]}-${hoveredService || 'default'}`}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{
                        duration: 0.4,
                        ease: 'easeInOut',
                        delay: 0.1,
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={currentImages[1]}
                        alt="Recupero materiali"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="relative h-36 overflow-hidden rounded-2xl shadow-xl sm:h-44">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${currentImages[2]}-${hoveredService || 'default'}`}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{
                        duration: 0.4,
                        ease: 'easeInOut',
                        delay: 0.2,
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={currentImages[2]}
                        alt="Smaltimento rifiuti"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="relative h-36 overflow-hidden rounded-2xl shadow-xl sm:h-56">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${currentImages[3]}-${hoveredService || 'default'}`}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{
                        duration: 0.4,
                        ease: 'easeInOut',
                        delay: 0.3,
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={currentImages[3]}
                        alt="Attrezzature specializzate"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <QuoteRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
