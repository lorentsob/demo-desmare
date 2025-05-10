"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutPreview() {
  return (
    <section className="py-20 bg-accent/5">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Chi Siamo</h2>
            <p className="text-lg text-text-secondary mb-6">
              Desmare è una giovane azienda specializzata in demolizioni, smaltimento di rifiuti e recupero materiali. 
              La nostra missione è fornire servizi professionali che uniscono efficienza, sicurezza e sostenibilità.
            </p>
            <p className="text-lg text-text-secondary mb-8">
              Ci impegniamo a garantire che i materiali di scarto vengano gestiti in modo responsabile, 
              massimizzando il riutilizzo e il riciclo e minimizzando i rifiuti destinati alle discariche.
            </p>
            
            <Link 
              href="/chi-siamo" 
              className="btn btn-primary inline-flex items-center"
            >
              Scopri di più su di noi
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
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
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/vertical-1.jpg" 
                alt="Team Desmare" 
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-accent/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-5 -left-5 w-40 h-40 bg-accent/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}