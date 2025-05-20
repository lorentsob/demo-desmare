"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import QuoteRequestModal from "./QuoteRequestModal";

export default function CTAContatti() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-primary p-8 md:p-16 shadow-section"
        >
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="section-title text-white mb-6">
              Pronti a trasformare il tuo progetto?
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Contattaci oggi per una consulenza gratuita e scopri come Desmare
              può offrirti soluzioni sicure, efficienti e sostenibili per le tue
              esigenze di demolizione e recupero materiali.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn px-8 py-3 text-lg bg-white text-primary hover:bg-white/90 transition-colors font-medium"
              >
                Richiedi un preventivo
              </button>
            </div>

            <div className="mt-10 flex items-center justify-center">
              {/* <div className="flex -space-x-2 mr-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                  >
                    <div className="w-full h-full bg-white/30"></div>
                  </div>
                ))}
              </div> */}
            </div>
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
