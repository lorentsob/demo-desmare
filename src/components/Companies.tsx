"use client"

import { motion } from 'framer-motion'

const companies = [
  { name: 'Vercel', logo: '/logos/vercel.svg' },
  { name: 'Stripe', logo: '/logos/stripe.svg' },
  { name: 'Figma', logo: '/logos/figma.svg' },
  { name: 'Mercury', logo: '/logos/mercury.svg' },
  { name: 'OpenAI', logo: '/logos/openai.svg' },
]

export default function Companies() {
  return (
    <section className="py-16 border-b border-white/10">
      <div className="container-custom">
        <p className="text-center text-text-secondary text-sm mb-8">
          Trusted by leading businesses worldwide
        </p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center items-center gap-12 md:gap-16"
        >
          {companies.map((company) => (
            <div key={company.name} className="opacity-60 hover:opacity-100 transition-opacity">
              <div className="h-8 px-5 bg-card-bg border border-border rounded-md flex items-center justify-center">
                {company.name}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}