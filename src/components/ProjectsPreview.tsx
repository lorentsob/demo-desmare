"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

// Progetto in evidenza
const featuredProject = {
  id: 1,
  title: 'Demolizione e recupero edificio industriale',
  description: 'Demolizione controllata di un ex sito industriale con recupero dell\'85% dei materiali e corretta gestione dei rifiuti speciali. Questo progetto rappresenta un esempio perfetto del nostro approccio integrato alla demolizione sostenibile e al recupero dei materiali.',
  category: 'demolizione',
  location: 'Milano',
  image: '/images/horizontal-1.jpg',
  stats: [
    { label: 'Durata', value: '3 mesi' },
    { label: 'Materiali recuperati', value: '85%' },
    { label: 'Area trattata', value: '2500 m²' }
  ]
}

export default function ProjectsPreview() {
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
            I Nostri Progetti
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text-secondary"
          >
            Esplora uno dei nostri progetti recenti che abbiamo realizzato con successo.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-5 gap-8 bg-accent/5 rounded-xl overflow-hidden mb-12"
        >
          <div className="md:col-span-2 relative h-64 md:h-auto">
            <Image 
              src={featuredProject.image} 
              alt={featuredProject.title} 
              fill
              className="object-cover"
            />
          </div>
          
          <div className="md:col-span-3 p-8">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold">{featuredProject.title}</h3>
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">
                {featuredProject.category === 'demolizione' ? 'Demolizione' :
                 featuredProject.category === 'smaltimento' ? 'Smaltimento' : 'Recupero'}
              </span>
            </div>
            
            <p className="text-text-secondary mb-6">
              {featuredProject.description}
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              {featuredProject.stats.map((stat, index) => (
                <div key={index} className="bg-background p-3 rounded-lg text-center">
                  <div className="text-lg font-bold">{stat.value}</div>
                  <div className="text-sm text-text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center text-sm text-text-secondary mb-6">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {featuredProject.location}
              </span>
            </div>
          </div>
        </motion.div>
        
        <div className="text-center">
          <Link 
            href="/progetti" 
            className="btn btn-primary inline-flex items-center"
          >
            Scopri tutti i progetti
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}