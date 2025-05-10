"use client"

import Image from 'next/image'
import { useState } from 'react'
import QuoteRequestModal from './QuoteRequestModal'

const services = [
  {
    id: 'demolizioni',
    title: 'Demolizioni',
    description: 'Eseguiamo servizi di demolizione controllata per strutture di qualsiasi dimensione, garantendo sicurezza e minimizzando l\'impatto ambientale.',
    features: [
      'Demolizione selettiva e controllata',
      'Demolizione meccanica di strutture',
      'Demolizione manuale di interni',
      'Demolizione di edifici completi',
      'Rimozione di strutture in cemento armato',
      'Bonifica pre-demolizione'
    ],
    image: '/images/horizontal-1.jpg'
  },
  {
    id: 'smaltimento',
    title: 'Smaltimento',
    description: 'Offriamo servizi completi di smaltimento di rifiuti edili e industriali, assicurando il rispetto di tutte le normative ambientali vigenti.',
    features: [
      'Smaltimento di rifiuti edili',
      'Gestione di materiali pericolosi',
      'Rimozione e smaltimento di amianto',
      'Trasporto autorizzato di rifiuti',
      'Documentazione completa di smaltimento',
      'Consulenza per la gestione dei rifiuti'
    ],
    image: '/images/horizontal-2.jpg'
  },
  {
    id: 'recupero',
    title: 'Recupero di Rifiuti',
    description: 'Siamo specializzati nel recupero e riciclo di materiali da demolizione, contribuendo all\'economia circolare e alla riduzione dell\'impatto ambientale.',
    features: [
      'Separazione e selezione materiali',
      'Riciclo di materiali inerti',
      'Recupero di metalli e materiali pregiati',
      'Trattamento e riutilizzo di legno',
      'Valorizzazione dei rifiuti',
      'Soluzioni personalizzate di recupero'
    ],
    image: '/images/horizontal-3.jpg'
  }
]

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(services[0])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [serviceType, setServiceType] = useState('')
  
  const openQuoteModal = (serviceId: string) => {
    setServiceType(serviceId)
    setIsModalOpen(true)
  }

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">I Nostri Servizi</h1>
          <p className="text-xl text-text-secondary">
            Offriamo soluzioni professionali e sostenibili per demolizioni, smaltimento e recupero di rifiuti.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service)}
              className={`px-6 py-3 rounded-full text-lg transition-colors ${
                selectedService.id === service.id
                  ? 'bg-accent text-white'
                  : 'bg-accent/10 hover:bg-accent/20'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image 
              src={selectedService.image} 
              alt={selectedService.title} 
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-4">{selectedService.title}</h2>
            <p className="text-lg text-text-secondary mb-6">
              {selectedService.description}
            </p>
            
            <ul className="space-y-3 mb-8">
              {selectedService.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button
              onClick={() => openQuoteModal(selectedService.id)}
              className="btn btn-primary"
            >
              Richiedi un preventivo
            </button>
          </div>
        </div>
        
        <div className="bg-accent/5 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Approccio Personalizzato</h2>
          <p className="text-lg text-text-secondary mb-8 max-w-3xl mx-auto">
            Ogni progetto ha esigenze uniche. Il nostro team di esperti analizza le vostre necessità specifiche per offrire soluzioni su misura che garantiscono efficienza, sicurezza e sostenibilità.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-primary"
          >
            Contattaci per una consulenza
          </button>
        </div>
      </div>
      
      <QuoteRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}