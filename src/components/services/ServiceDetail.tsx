'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import CTASection from '../CTASection';
import QuoteRequestModal from '../QuoteRequestModal';

// Define the types for the service data
type Benefit = {
  title: string;
  description: string;
  icon: string;
};

type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

type ServiceCategory = {
  title: string;
  description: string;
  image: string;
};

type CTA = {
  title: string;
  description: string;
  buttonText: string;
};

type ServiceData = {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  benefits: Benefit[];
  process: ProcessStep[];
  categories: ServiceCategory[];
  certifications: string[];
  cta: CTA;
};

interface ServiceDetailProps {
  service: ServiceData;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to render the appropriate icon based on the icon name
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'user':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        );
      case 'shield':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        );
      case 'recycle':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        );
      case 'truck':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
        );
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        );
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                {service.title}
              </h1>
              <p className="mb-6 text-xl text-primary">{service.subtitle}</p>
              <p className="mb-8 text-lg text-text-secondary">
                {service.description}
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary"
              >
                Richiedi un preventivo
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] overflow-hidden rounded-xl shadow-xl"
            >
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="mb-12 text-center text-3xl font-bold">
            I vantaggi delle nostre soluzioni
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-border rounded-xl border bg-white p-6 shadow-md"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {renderIcon(benefit.icon)}
                </div>
                <h3 className="mb-3 text-xl font-bold">{benefit.title}</h3>
                <p className="text-text-secondary">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="mb-12 text-center text-3xl font-bold">
            Il nostro processo
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[15px] top-0 h-full w-[2px] transform bg-primary/20 md:left-1/2 md:-translate-x-px"></div>

            <div className="space-y-12">
              {service.process.map((step, index) => (
                <div
                  key={step.title}
                  className="relative grid items-center gap-8 md:grid-cols-2"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 z-10 flex h-8 w-8 transform items-center justify-center rounded-full bg-primary font-bold text-white md:left-1/2 md:-translate-x-1/2">
                    {step.step}
                  </div>

                  <div
                    className={`pl-12 md:pl-0 ${
                      index % 2 === 0
                        ? 'md:pr-12 md:text-right'
                        : 'md:order-2 md:pl-12'
                    }`}
                  >
                    <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                    <p className="text-text-secondary">{step.description}</p>
                  </div>

                  <div className={index % 2 === 0 ? 'md:order-2' : ''}></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Service Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="mb-12 text-center text-3xl font-bold">
            Tipologie di intervento
          </h2>
          <div className="space-y-16">
            {service.categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`grid items-center gap-12 md:grid-cols-2 ${
                  index % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''
                }`}
              >
                <div className="relative h-[300px] overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="mb-4 text-2xl font-bold">{category.title}</h3>
                  <p className="text-lg text-text-secondary">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 rounded-2xl bg-primary/5 p-8 md:p-12"
        >
          <h2 className="mb-10 text-center text-3xl font-bold">
            Certificazioni e autorizzazioni
          </h2>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {service.certifications.map((certification, index) => (
              <motion.div
                key={certification}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center rounded-lg bg-white p-4 shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span className="font-medium">{certification}</span>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* CTA Section */}
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
