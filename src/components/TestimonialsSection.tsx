'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote:
      "Desmare ha completato la demolizione del nostro vecchio edificio industriale con grande professionalità. Sono stati estremamente attenti alla sicurezza e hanno recuperato la maggior parte dei materiali riducendo l'impatto ambientale.",
    author: 'Marco Rossi',
    position: 'Direttore Operativo, TechBuild SpA',
    image: '/images/img/demolition-excavator-action.jpg', // Industrial demolition project
  },
  {
    id: 2,
    quote:
      "Abbiamo scelto Desmare per il loro approccio sostenibile. La loro capacità di recuperare e riutilizzare i materiali da demolizione è stata impressionante, aiutandoci a ridurre i costi e l'impatto ambientale del nostro progetto.",
    author: 'Laura Bianchi',
    position: 'Project Manager, GreenDev Srl',
    image: '/images/img/construction-site-drone-view-earthmoving.jpg',
  },
  {
    id: 3,
    quote:
      'Il servizio di smaltimento rifiuti edili fornito da Desmare è stato impeccabile. Hanno gestito tutta la documentazione e le autorizzazioni necessarie, permettendoci di concentrarci sul nostro progetto di costruzione.',
    author: 'Alessandro Verdi',
    position: 'Titolare, Costruzioni Verdi',
    image: '/images/img/waste-loading-into-dumpster-truck.jpg',
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="bg-primary/5 py-20">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-3xl font-bold md:text-4xl"
          >
            Cosa dicono i nostri clienti
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text-secondary"
          >
            La soddisfazione dei nostri clienti è la nostra priorità. Ecco
            alcune testimonianze dei nostri progetti recenti.
          </motion.p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <motion.div
            key={testimonials[activeIndex].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-white/10 bg-background p-8 shadow-xl md:p-10"
          >
            <div className="grid gap-8 md:grid-cols-5">
              <div className="md:col-span-3">
                <svg
                  className="mb-6 h-10 w-10 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="mb-6 text-xl leading-relaxed">
                  {testimonials[activeIndex].quote}
                </p>
                <div>
                  <div className="text-lg font-bold">
                    {testimonials[activeIndex].author}
                  </div>
                  <div className="text-text-secondary">
                    {testimonials[activeIndex].position}
                  </div>
                </div>
              </div>

              <div className="relative h-60 overflow-hidden rounded-lg md:col-span-2 md:h-full">
                <Image
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].author}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <div className="mt-8 flex justify-between">
            <button
              onClick={prevTestimonial}
              className="rounded-full bg-primary/10 p-2 transition-colors hover:bg-primary/20"
              aria-label="Testimonianza precedente"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <div className="flex space-x-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => goToTestimonial(index)}
                  className={`h-3 w-3 rounded-full ${
                    index === activeIndex ? 'bg-primary' : 'bg-primary/20'
                  }`}
                  aria-label={`Vai alla testimonianza ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="rounded-full bg-primary/10 p-2 transition-colors hover:bg-primary/20"
              aria-label="Testimonianza successiva"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
