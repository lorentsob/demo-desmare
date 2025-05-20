"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    quote: "Desmare ha completato la demolizione del nostro vecchio edificio industriale con grande professionalità. Sono stati estremamente attenti alla sicurezza e hanno recuperato la maggior parte dei materiali riducendo l'impatto ambientale.",
    author: "Marco Rossi",
    position: "Direttore Operativo, TechBuild SpA",
    image: "/images/horizontal-1.jpg" // Placeholder - would be replaced with actual testimonial images
  },
  {
    id: 2,
    quote: "Abbiamo scelto Desmare per il loro approccio sostenibile. La loro capacità di recuperare e riutilizzare i materiali da demolizione è stata impressionante, aiutandoci a ridurre i costi e l'impatto ambientale del nostro progetto.",
    author: "Laura Bianchi",
    position: "Project Manager, GreenDev Srl",
    image: "/images/horizontal-2.jpg"
  },
  {
    id: 3,
    quote: "Il servizio di smaltimento rifiuti edili fornito da Desmare è stato impeccabile. Hanno gestito tutta la documentazione e le autorizzazioni necessarie, permettendoci di concentrarci sul nostro progetto di costruzione.",
    author: "Alessandro Verdi",
    position: "Titolare, Costruzioni Verdi",
    image: "/images/horizontal-3.jpg"
  }
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }
  
  const goToTestimonial = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className="py-20 bg-primary/5">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
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
            La soddisfazione dei nostri clienti è la nostra priorità. Ecco alcune testimonianze dei nostri progetti recenti.
          </motion.p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={testimonials[activeIndex].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-background border border-white/10 rounded-xl p-8 md:p-10 shadow-xl"
          >
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <svg className="w-10 h-10 text-primary mb-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-xl mb-6 leading-relaxed">
                  {testimonials[activeIndex].quote}
                </p>
                <div>
                  <div className="font-bold text-lg">{testimonials[activeIndex].author}</div>
                  <div className="text-text-secondary">{testimonials[activeIndex].position}</div>
                </div>
              </div>
              
              <div className="md:col-span-2 relative h-60 md:h-full rounded-lg overflow-hidden">
                <Image 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].author} 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          <div className="flex justify-between mt-8">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Testimonianza precedente"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? 'bg-primary' : 'bg-primary/20'
                  }`}
                  aria-label={`Vai alla testimonianza ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Testimonianza successiva"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}