"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Gallery preview images showcasing different aspects of construction/demolition work
const galleryImages = [
  {
    id: 1,
    src: '/images/img/construction-site-drone-view-earthmoving.jpg',
    alt: 'Vista aerea cantiere movimento terra'
  },
  {
    id: 2,
    src: '/images/img/abandoned-industrial-machine-hall-large-space.png',
    alt: 'Capannone industriale dismesso'
  },
  {
    id: 3,
    src: '/images/img/demolition-excavator-action.jpg',
    alt: 'Escavatore in azione'
  },
  {
    id: 4,
    src: '/images/img/facade-dismantling-workers-metal-cutting.jpg',
    alt: 'Smantellamento facciata'
  }
]

export default function GalleryPreview() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Gallery
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text-secondary"
          >
            Esplora alcuni dei nostri lavori e progetti realizzati
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-xl h-64 relative"
            >
              <Image 
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-lg font-medium">{image.alt}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link 
            href="/gallery" 
            className="btn btn-primary inline-flex items-center"
          >
            Vedi tutte le immagini
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}