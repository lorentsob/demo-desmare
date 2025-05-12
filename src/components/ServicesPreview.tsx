"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: "demolizioni",
    title: "Demolizioni",
    description:
      "Eseguiamo servizi di demolizione controllata per strutture di qualsiasi dimensione, garantendo sicurezza e minimizzando l'impatto ambientale.",
    image: "/images/horizontal-1.jpg",
  },
  {
    id: "smaltimento",
    title: "Smaltimento",
    description:
      "Offriamo servizi completi di smaltimento di rifiuti edili e industriali, assicurando il rispetto di tutte le normative ambientali vigenti.",
    image: "/images/horizontal-2.jpg",
  },
  {
    id: "recupero",
    title: "Recupero di Rifiuti",
    description:
      "Siamo specializzati nel recupero e riciclo di materiali da demolizione, contribuendo all'economia circolare e alla riduzione dell'impatto ambientale.",
    image: "/images/horizontal-3.jpg",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            I Nostri Servizi
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text-secondary"
          >
            Offriamo soluzioni professionali e sostenibili per demolizioni,
            smaltimento e recupero di rifiuti.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-card border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-text-secondary mb-4">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/servizi"
            className="btn btn-primary inline-flex items-center"
          >
            Scopri tutti i servizi
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
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
        </div>
      </div>
    </section>
  );
}
