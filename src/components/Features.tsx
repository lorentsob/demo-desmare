"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Accessible for all product developers',
    description: 'Designed for teams of all sizes with interfaces that scale',
    icon: '✨',
    image: 'feature-accessibility',
  },
  {
    title: 'Designed for modern teams',
    description: 'Built with the latest technologies for maximum flexibility',
    icon: '🎨',
    image: 'feature-design',
  },
  {
    title: 'Crafted to perfection',
    description: 'Every detail has been considered for an optimal workflow',
    icon: '🛠️',
    image: 'feature-craft',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container-custom">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Solutions for modern businesses
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-secondary text-lg max-w-2xl mx-auto"
          >
            Every solution is designed to help businesses succeed in today's competitive landscape.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card-bg border border-border rounded-xl p-6 hover:translate-y-[-4px] transition-transform"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                <span className="text-xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-text-secondary mb-6">{feature.description}</p>
              <div className="rounded-lg overflow-hidden bg-background/50 border border-border h-40 flex items-center justify-center">
                <div className="text-text-secondary">{feature.image}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}