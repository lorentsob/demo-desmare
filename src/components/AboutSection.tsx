import Image from 'next/image'
import ContactButton from './ContactButton'

export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Chi Siamo</h1>
          <p className="text-xl text-text-secondary">
            Desmare è una giovane azienda specializzata in demolizioni, smaltimento di rifiuti e recupero materiali.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">La Nostra Missione</h2>
            <p className="text-lg text-text-secondary mb-6">
              In Desmare crediamo che ogni progetto di demolizione sia un'opportunità per recuperare materiali preziosi e ridurre l'impatto ambientale. La nostra missione è fornire servizi professionali che uniscono efficienza, sicurezza e sostenibilità.
            </p>
            <p className="text-lg text-text-secondary">
              Ci impegniamo a garantire che i materiali di scarto vengano gestiti in modo responsabile, massimizzando il riutilizzo e il riciclo e minimizzando i rifiuti destinati alle discariche.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="/images/vertical-1.jpg" 
              alt="Team Desmare" 
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-1 md:order-none">
            <Image 
              src="/images/vertical-2.jpg" 
              alt="I nostri valori" 
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">I Nostri Valori</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-bold text-lg">Sostenibilità</h3>
                  <p className="text-text-secondary">Adottiamo pratiche sostenibili in tutti i nostri progetti, puntando a minimizzare gli sprechi e l'impatto ambientale.</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-bold text-lg">Sicurezza</h3>
                  <p className="text-text-secondary">La sicurezza è la nostra priorità assoluta. Seguiamo rigorosamente tutte le normative e adottiamo procedure avanzate.</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-bold text-lg">Innovazione</h3>
                  <p className="text-text-secondary">Utilizziamo tecnologie e metodologie all'avanguardia per garantire risultati ottimali in ogni progetto.</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-bold text-lg">Professionalità</h3>
                  <p className="text-text-secondary">Il nostro team è composto da professionisti altamente qualificati e dedicati alla soddisfazione del cliente.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-accent/5 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Il Nostro Approccio</h2>
            <p className="text-lg text-text-secondary mb-8">
              Desmare si distingue per un approccio personalizzato ad ogni progetto. Comprendiamo che ogni lavoro ha esigenze uniche, e offriamo soluzioni su misura che si adattano perfettamente alle vostre necessità specifiche.
            </p>
            <ContactButton />
          </div>
        </div>
      </div>
    </section>
  )
}