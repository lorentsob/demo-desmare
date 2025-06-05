'use client';

import QuoteRequestModal from '@/components/QuoteRequestModal';
import { servicesContent } from '@/content/services';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import CTASection from '../CTASection';
import ValuePro from '../ValuePro';

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
            className="mb-6 text-balance text-4xl font-bold md:text-5xl"
          >
            {servicesContent.landing.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-balance text-2xl text-text-secondary"
          >
            {servicesContent.landing.subtitle}
          </motion.p>
        </div>

        {/* Service Categories */}
        <div className="mb-24 space-y-24">
          {servicesContent.landing.categories.map((category, index) => (
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
