'use client';

import { motion } from 'framer-motion';

const stats = [
  {
    value: '10+',
    label: 'Anni di esperienza',
    description: 'Nel settore delle demolizioni e del recupero materiali',
  },
  {
    value: '250+',
    label: 'Progetti completati',
    description: 'In tutta Italia per aziende e privati',
  },
  {
    value: '85%',
    label: 'Tasso di recupero',
    description: 'Dei materiali dalle nostre demolizioni',
  },
  {
    value: '30+',
    label: 'Professionisti',
    description: 'Che lavorano nella nostra squadra',
  },
];

export default function StatsSection() {
  return (
    <section className="border-t border-white/10 py-20">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-3xl font-bold md:text-4xl"
          >
            La nostra esperienza in numeri
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text-secondary"
          >
            Desmare offre servizi professionali con l'obiettivo di unire
            efficienza, sicurezza e sostenibilità ambientale in ogni progetto.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="rounded-xl bg-primary/5 p-6 text-center"
            >
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                  />
                </svg>
              </div>
              <div className="mb-2 text-4xl font-bold lg:text-5xl">
                {stat.value}
              </div>
              <div className="mb-2 text-xl font-medium">{stat.label}</div>
              <p className="text-text-secondary">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
