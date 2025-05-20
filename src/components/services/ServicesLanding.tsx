'use client';

import QuoteRequestModal from '@/components/QuoteRequestModal';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import CTASection from '../CTASection';
import ValuePro from '../ValuePro';

// Define the service categories according to the instructions
const serviceCategories = [
  {
    id: 'demolizioni',
    title: 'Demolizioni chiavi in mano',
    description:
      "Servizi completi di demolizione per qualsiasi struttura con un unico referente, dalla pianificazione alla consegna del sito. Gestiamo l'intero processo eliminando complessità e stress per il cliente.",
    image: '/images/horizontal-1.jpg',
    link: '/servizi/demolizioni',
    features: [
      'Demolizioni civili',
      'Demolizioni industriali',
      'Demolizioni speciali',
      'Gestione completa del progetto',
      'Unico punto di contatto',
      'Conformità normativa garantita',
    ],
  },
  {
    id: 'strip-out',
    title: 'Strip-out',
    description:
      "Eseguiamo lavori precisi di strip-out per preparare gli spazi alla ristrutturazione o riqualificazione, minimizzando l'impatto sulle strutture adiacenti e garantendo la massima efficienza.",
    image: '/images/horizontal-2.jpg',
    link: '/servizi/strip-out',
    features: [
      'Rimozione di elementi non strutturali',
      'Preparazione per ristrutturazioni',
      'Minimizzazione dei disturbi',
      'Preservazione degli elementi da mantenere',
      'Recupero di materiali riutilizzabili',
      'Pulizia completa post-intervento',
    ],
  },
  {
    id: 'rifiuti-pericolosi',
    title: 'Rifiuti pericolosi e bonifica ambientale',
    description:
      "Ci occupiamo della gestione sicura e conforme di rifiuti pericolosi, incluso l'amianto, con un focus sulla sicurezza, la conformità normativa e la tutela dell'ambiente.",
    image: '/images/horizontal-3.jpg',
    link: '/servizi/rifiuti-pericolosi',
    features: [
      'Bonifica amianto',
      'Gestione rifiuti pericolosi',
      'Analisi e caratterizzazione',
      'Conformità normativa',
      'Certificazioni complete',
      "Soluzioni rispettose dell'ambiente",
    ],
  },
];

export default function ServicesLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState('');

  const openQuoteModal = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        {/* Page Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-4xl font-bold md:text-5xl"
          >
            Soluzioni complete per demolizione e gestione ambientale
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-text-secondary"
          >
            Offriamo servizi chiavi in mano, dalla demolizione alla gestione dei
            rifiuti, con un unico referente per tutto il progetto.
          </motion.p>
        </div>

        {/* Service Categories */}
        <div className="mb-24 space-y-24">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid items-center gap-12 md:grid-cols-2"
            >
              <div
                className={`relative h-[400px] overflow-hidden rounded-xl shadow-xl ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-bold">{category.title}</h2>
                <p className="mb-6 text-lg text-text-secondary">
                  {category.description}
                </p>

                <ul className="mb-8 space-y-3">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-3 mt-0.5 h-6 w-6 flex-shrink-0 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href={category.link} className="btn btn-primary">
                    Scopri di più
                  </Link>
                  <button
                    onClick={() => openQuoteModal(category.id)}
                    className="btn btn-outline"
                  >
                    Richiedi preventivo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <ValuePro />
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <CTASection />
        </motion.div>
      </div>

      <QuoteRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
