'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import QuoteRequestModal from './QuoteRequestModal';

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-primary p-8 shadow-section md:p-16"
        >
          <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="section-title mb-6 text-white">
              Hai un progetto in mente?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
              Contattaci oggi per una consulenza gratuita e scopri come Desmare
              può offrirti soluzioni sicure, efficienti e sostenibili per le tue
              esigenze di demolizione e recupero materiali.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn bg-white px-8 py-3 text-lg font-medium text-primary transition-colors hover:bg-white/90"
              >
                Richiedi un preventivo
              </button>
              <Link
                href="/contatti"
                className="btn border border-white/30 px-8 py-3 text-lg text-white transition-colors hover:bg-white/10"
              >
                Contattaci
              </Link>
            </div>

            <div className="mt-10 flex items-center justify-center"></div>
          </div>
        </motion.div>
      </div>

      <QuoteRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
