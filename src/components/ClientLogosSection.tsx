"use client"

import { motion } from 'framer-motion'

// In a real implementation, these would be actual client/partner logos
const clients = [
  { name: 'Comune di Milano', logo: '/logos/client1.svg' },
  { name: 'Regione Lombardia', logo: '/logos/client2.svg' },
  { name: 'CostruzioniItaliane SpA', logo: '/logos/client3.svg' },
  { name: 'GreenBuild Srl', logo: '/logos/client4.svg' },
  { name: 'RenovaProject', logo: '/logos/client5.svg' },
  { name: 'EdilCity', logo: '/logos/client6.svg' },
]

export default function ClientLogosSection() {
  return (
    <section className="py-12 border-b border-white/10">
      <div className="container-custom">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center text-text-secondary text-sm mb-10"
        >
          Collaboriamo con enti pubblici e privati in tutta Italia
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
        >
          {clients.map((client) => (
            <div key={client.name} className="opacity-60 hover:opacity-100 transition-opacity">
              <div className="h-12 px-6 bg-primary/5 border border-white/10 rounded-md flex items-center justify-center">
                {client.name}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}