"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import QuoteRequestModal from "./QuoteRequestModal";

export default function CTAPros() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-accent/70 p-8 md:p-16"
        >
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl text-balance md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Sei un professionista del settore?
            </h2>
            <p className="text-balance text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              De.sma.re è sempre alla ricerca di specialisti qualificati per
              espandere la propria rete di collaboratori. Se desideri
              collaborare con noi, contattaci per discutere delle opportunità di
              partnership.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                // onClick={() => setIsModalOpen(true)}
                className="btn px-8 py-3 text-lg bg-white text-accent hover:bg-white/90 transition-colors font-medium"
              >
                <a href="mailto:info@desmare.it">
                  Contattaci per sapene di più
                </a>
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
