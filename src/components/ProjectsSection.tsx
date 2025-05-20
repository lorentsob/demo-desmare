"use client"

import Image from 'next/image'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Demolizione e recupero edificio industriale',
    description: 'Demolizione controllata di un ex sito industriale con recupero dell\'85% dei materiali e corretta gestione dei rifiuti speciali.',
    category: 'demolizione',
    location: 'Milano',
    image: '/images/horizontal-1.jpg'
  },
  {
    id: 2,
    title: 'Smaltimento rifiuti edilizi',
    description: 'Gestione completa dei rifiuti edilizi per un grande cantiere residenziale, con selezione e differenziazione accurata dei materiali.',
    category: 'smaltimento',
    location: 'Roma',
    image: '/images/horizontal-2.jpg'
  },
  {
    id: 3,
    title: 'Recupero materiali da ristrutturazione',
    description: 'Recupero di materiali pregiati da un edificio storico durante la ristrutturazione, preservando elementi di valore architettonico.',
    category: 'recupero',
    location: 'Firenze',
    image: '/images/horizontal-3.jpg'
  },
  {
    id: 4,
    title: 'Demolizione selettiva area commerciale',
    description: 'Demolizione selettiva di un\'area commerciale dismessa con attenzione particolare alla sicurezza e all\'impatto acustico.',
    category: 'demolizione',
    location: 'Torino',
    image: '/images/horizontal-4.jpg'
  }
]

export default function ProjectsSection() {
  const [filter, setFilter] = useState('all')
  const [activeProject, setActiveProject] = useState<number | null>(null)
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)
  
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">I Nostri Progetti</h1>
          <p className="text-xl text-text-secondary">
            Esplora alcuni dei progetti recenti che abbiamo realizzato con successo.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-full text-lg transition-colors ${
              filter === 'all'
                ? 'bg-primary text-white'
                : 'bg-primary/10 hover:bg-primary/20'
            }`}
          >
            Tutti
          </button>
          <button
            onClick={() => setFilter('demolizione')}
            className={`px-6 py-3 rounded-full text-lg transition-colors ${
              filter === 'demolizione'
                ? 'bg-primary text-white'
                : 'bg-primary/10 hover:bg-primary/20'
            }`}
          >
            Demolizioni
          </button>
          <button
            onClick={() => setFilter('smaltimento')}
            className={`px-6 py-3 rounded-full text-lg transition-colors ${
              filter === 'smaltimento'
                ? 'bg-primary text-white'
                : 'bg-primary/10 hover:bg-primary/20'
            }`}
          >
            Smaltimento
          </button>
          <button
            onClick={() => setFilter('recupero')}
            className={`px-6 py-3 rounded-full text-lg transition-colors ${
              filter === 'recupero'
                ? 'bg-primary text-white'
                : 'bg-primary/10 hover:bg-primary/20'
            }`}
          >
            Recupero
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-primary/5 rounded-xl overflow-hidden transition-transform hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-64">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                    {project.category === 'demolizione' ? 'Demolizione' :
                     project.category === 'smaltimento' ? 'Smaltimento' : 'Recupero'}
                  </span>
                </div>
                <p className="text-text-secondary mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-text-secondary">
                    📍 {project.location}
                  </span>
                  <button
                    onClick={() => setActiveProject(project.id)}
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    Dettagli
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-text-secondary">
              Nessun progetto trovato per questa categoria.
            </p>
          </div>
        )}
        
        <div className="mt-16 text-center">
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Questi sono solo alcuni esempi dei progetti che abbiamo realizzato. Contattaci per scoprire come possiamo aiutarti con le tue specifiche esigenze.
          </p>
          <button
            onClick={() => {
              // Redirect to contacts page
              window.location.href = '/contatti';
            }}
            className="btn btn-primary"
          >
            Contattaci per il tuo progetto
          </button>
        </div>
      </div>
      
      {/* Project Details Modal (simplified version) */}
      {activeProject !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setActiveProject(null)}>
          <div className="w-full max-w-2xl bg-background rounded-lg shadow-xl overflow-hidden p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {projects.find(p => p.id === activeProject)?.title}
              </h2>
              <button 
                onClick={() => setActiveProject(null)} 
                className="text-text-secondary hover:text-foreground transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
              <Image 
                src={projects.find(p => p.id === activeProject)?.image || ''} 
                alt={projects.find(p => p.id === activeProject)?.title || ''} 
                fill
                className="object-cover"
              />
            </div>
            
            <p className="text-text-secondary mb-6">
              {projects.find(p => p.id === activeProject)?.description}
              <br /><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, 
              magna eu fringilla tincidunt, nisi tellus consequat urna, 
              quis facilisis libero augue vel nunc. In hac habitasse platea dictumst.
            </p>
            
            <div className="flex items-center text-sm text-text-secondary mb-6">
              <span className="mr-6">
                📍 {projects.find(p => p.id === activeProject)?.location}
              </span>
              <span>
                🏷️ {projects.find(p => p.id === activeProject)?.category === 'demolizione' ? 'Demolizione' :
                    projects.find(p => p.id === activeProject)?.category === 'smaltimento' ? 'Smaltimento' : 'Recupero'}
              </span>
            </div>
            
            <button className="btn btn-primary w-full">
              Richiedi un progetto simile
            </button>
          </div>
        </div>
      )}
    </section>
  )
}