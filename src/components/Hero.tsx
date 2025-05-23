'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import QuoteRequestModal from './QuoteRequestModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div className="container-custom relative z-10 py-8 sm:py-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Soluzioni professionali per{' '}
              <span className="text-primary">demolizioni</span> e{' '}
              <span className="text-primary">recupero materiali</span>
            </h1>
            <p className="mb-8 max-w-lg text-xl text-text-secondary">
              Affidati a Desmare per servizi di demolizione, smaltimento e
              recupero rifiuti. La nostra esperienza garantisce sicurezza,
              efficienza e rispetto dell'ambiente.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary px-8 py-3 text-lg"
              >
                Richiedi un preventivo
              </button>
              <Link
                href="/servizi"
                className="btn border border-primary/20 px-8 py-3 text-lg transition-colors hover:bg-primary/5"
              >
                Scopri i servizi
              </Link>
            </div>

            <div className="mt-12 flex items-center">
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
                  Valutazione media 4.9/5 dai nostri clienti
                </p>
              </div>
            </div>
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
                  <Image
                    src="/images/horizontal-1.jpg"
                    alt="Servizi di demolizione"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-36 overflow-hidden rounded-2xl shadow-xl sm:h-44">
                  <Image
                    src="/images/horizontal-4.jpg"
                    alt="Recupero materiali"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="relative h-36 overflow-hidden rounded-2xl shadow-xl sm:h-44">
                  <Image
                    src="/images/horizontal-2.jpg"
                    alt="Smaltimento rifiuti"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-36 overflow-hidden rounded-2xl shadow-xl sm:h-56">
                  <Image
                    src="/images/horizontal-3.jpg"
                    alt="Attrezzature specializzate"
                    fill
                    className="object-cover"
                  />
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
