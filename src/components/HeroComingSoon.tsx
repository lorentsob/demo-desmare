"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import QuoteRequestModal from "./QuoteRequestModal";

export default function HeroComingSoon() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add effect to prevent scrolling when component mounts
  useEffect(() => {
    // Save current overflow style
    const originalStyle = window.getComputedStyle(document.body).overflow;

    // Prevent scrolling
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-between">
      <div className="container-custom relative z-10 flex-grow py-8 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {" "}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-construction-text">
              Desmare
            </h1>

            <h2 className="text-balance text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight mt-6 mb-6">
              Soluzioni professionali per{" "}
              <span className="text-accent">demolizioni</span> e{" "}
              <span className="text-accent">recupero materiali</span>
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-lg">
              Affidati a Desmare per servizi di demolizione, smaltimento e
              recupero rifiuti. La nostra esperienza garantisce sicurezza,
              efficienza e rispetto dell'ambiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary px-8 py-3 text-lg"
              >
                Richiedi un preventivo
              </button>
              <button className="btn px-8 py-3 text-lg border border-accent/20 hover:bg-accent/5 transition-colors">
                +39 123 456 7890
              </button>
            </div>

            {/* <div className="mt-12 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                    <div className="w-full h-full bg-accent/20"></div>
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-text-secondary">Valutazione media 4.9/5 dai nostri clienti</p>
              </div>
            </div> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl h-40 sm:h-64 relative">
                  <Image
                    src="/images/horizontal-1.jpg"
                    alt="Servizi di demolizione"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl h-40 sm:h-48 relative">
                  <Image
                    src="/images/horizontal-4.jpg"
                    alt="Recupero materiali"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-2xl overflow-hidden shadow-xl h-40 sm:h-48 relative">
                  <Image
                    src="/images/horizontal-2.jpg"
                    alt="Smaltimento rifiuti"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl h-40 sm:h-64 relative">
                  <Image
                    src="/images/horizontal-3.jpg"
                    alt="Attrezzature specializzate"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="text-balance text-center btn btn-primary rounded-none flex text-4xl font-bold align-center justify-center items-center py-8">
        <h3>Sito in costruzione! Desmare sarà presto online</h3>
      </div>

      <QuoteRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
