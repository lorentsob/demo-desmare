'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// In a real implementation, these would be actual client/partner logos
const clients = [
  { name: 'Cosedil Spa', logo: '/aziende/cosedil.png' },
  { name: 'Sposato Costruzioni Srl', logo: '/aziende/sposato.png' },
  { name: 'Polygon Italia Srl', logo: '/aziende/polygon.png' },
  { name: 'Superconti', logo: '/aziende/superconti.png' },
  { name: 'Progeco Srl', logo: '/aziende/progeco.png' },
];

export default function ClientLogosSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Calcola la larghezza totale di un set di loghi
  const singleSetWidth = clients.length * (192 + 128); // (w-48 + mx-16) per ogni logo

  return (
    <section className="bg-bg-primary border-t border-ui-border py-20">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center text-4xl font-bold text-text"
        >
          Con chi abbiamo lavorato
        </motion.h2>

        <div className="relative overflow-hidden">
          {/* Logo Slider */}
          <motion.div
            className="flex"
            animate={{
              x: [0, -singleSetWidth],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 20,
                ease: 'linear',
              },
            }}
          >
            {/* Triplica i loghi per un loop più fluido */}
            {[...clients, ...clients, ...clients].map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="mx-16 flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-24 w-48">
                  <Image
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-6 w-48 whitespace-nowrap text-center text-lg font-medium text-text-secondary">
                  {client.name}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Overlays */}
          <div className="from-bg-primary pointer-events-none absolute inset-y-0 left-0 w-48 bg-gradient-to-r to-transparent" />
          <div className="from-bg-primary pointer-events-none absolute inset-y-0 right-0 w-48 bg-gradient-to-l to-transparent" />
        </div>
      </div>
    </section>
  );
}
