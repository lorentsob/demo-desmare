'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPreview() {
  return (
    <section className="bg-primary/5 py-20">
      <div className="container-custom">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Chi Siamo</h2>
            <p className="mb-6 text-lg text-text-secondary">
              Desmare è una giovane azienda specializzata in demolizioni,
              smaltimento di rifiuti e recupero materiali. La nostra missione è
              fornire servizi professionali che uniscono efficienza, sicurezza e
              sostenibilità.
            </p>
            {/* <p className="mb-8 text-lg text-text-secondary">
              Ci impegniamo a garantire che i materiali di scarto vengano
              gestiti in modo responsabile, massimizzando il riutilizzo e il
              riciclo e minimizzando i rifiuti destinati alle discariche.
            </p> */}

            <Link
              href="/chi-siamo"
              className="btn btn-primary inline-flex items-center"
            >
              Scopri di più su di noi
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/images/img/facade-dismantling-workers-metal-cutting.jpg"
                alt="Team Desmare"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 -z-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl"></div>
            <div className="absolute -left-5 -top-5 -z-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
