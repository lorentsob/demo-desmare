"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import QuoteRequestModal from "@/components/QuoteRequestModal";
import { useState } from "react";
import CTASection from "../CTASection";

// Define the service categories according to the instructions
const serviceCategories = [
  {
    id: "demolizioni",
    title: "Demolizioni chiavi in mano",
    description:
      "Servizi completi di demolizione per qualsiasi struttura con un unico referente, dalla pianificazione alla consegna del sito. Gestiamo l'intero processo eliminando complessità e stress per il cliente.",
    image: "/images/horizontal-1.jpg",
    link: "/servizi/demolizioni",
    features: [
      "Demolizioni civili",
      "Demolizioni industriali",
      "Demolizioni speciali",
      "Gestione completa del progetto",
      "Unico punto di contatto",
      "Conformità normativa garantita",
    ],
  },
  {
    id: "strip-out",
    title: "Strip-out",
    description:
      "Eseguiamo lavori precisi di strip-out per preparare gli spazi alla ristrutturazione o riqualificazione, minimizzando l'impatto sulle strutture adiacenti e garantendo la massima efficienza.",
    image: "/images/horizontal-2.jpg",
    link: "/servizi/strip-out",
    features: [
      "Rimozione di elementi non strutturali",
      "Preparazione per ristrutturazioni",
      "Minimizzazione dei disturbi",
      "Preservazione degli elementi da mantenere",
      "Recupero di materiali riutilizzabili",
      "Pulizia completa post-intervento",
    ],
  },
  {
    id: "rifiuti-pericolosi",
    title: "Rifiuti pericolosi e bonifica ambientale",
    description:
      "Ci occupiamo della gestione sicura e conforme di rifiuti pericolosi, incluso l'amianto, con un focus sulla sicurezza, la conformità normativa e la tutela dell'ambiente.",
    image: "/images/horizontal-3.jpg",
    link: "/servizi/rifiuti-pericolosi",
    features: [
      "Bonifica amianto",
      "Gestione rifiuti pericolosi",
      "Analisi e caratterizzazione",
      "Conformità normativa",
      "Certificazioni complete",
      "Soluzioni rispettose dell'ambiente",
    ],
  },
];

export default function ServicesLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState("");

  const openQuoteModal = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
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
        <div className="space-y-24 mb-24">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div
                className={`relative h-[400px] rounded-xl overflow-hidden shadow-xl ${
                  index % 2 === 1 ? "md:order-2" : ""
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
                <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                <p className="text-lg text-text-secondary mb-6">
                  {category.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-0.5"
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

                <div className="flex flex-col sm:flex-row gap-4">
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

        {/* Value Proposition Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-accent/5 rounded-2xl p-8 md:p-12 text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Perché scegliere Desmare?</h2>
          <p className="text-lg text-text-secondary mb-10 max-w-3xl mx-auto">
            Desmare si distingue per esperienza, affidabilità e impegno verso la
            sostenibilità. Ci assumiamo la responsabilità completa del progetto,
            garantendo tranquillità e risultati eccellenti.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-accent"
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
              </div>
              <h3 className="text-xl font-bold mb-2">Efficienza</h3>
              <p className="text-text-secondary text-center">
                Ottimizziamo ogni fase del processo per tempi e costi ridotti
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-accent"
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
              </div>
              <h3 className="text-xl font-bold mb-2">Sicurezza</h3>
              <p className="text-text-secondary text-center">
                Protocolli avanzati e formazione continua per operare in
                sicurezza
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Sostenibilità</h3>
              <p className="text-text-secondary text-center">
                Massimizziamo il recupero dei materiali e minimizziamo l'impatto
                ambientale
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Conformità</h3>
              <p className="text-text-secondary text-center">
                Rispetto rigoroso di tutte le normative ambientali e di
                sicurezza
              </p>
            </div>
          </div>
        </motion.div>

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
