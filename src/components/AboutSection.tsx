import Image from 'next/image';
import ContactButton from './ContactButton';

export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Chi Siamo</h1>
          <p className="text-xl text-text-secondary">
            <span className="font-semibold text-primary">De.sma.re</span> è un'azienda specializzata in{' '}
            <span className="font-semibold">demolizioni</span>,{' '}
            <span className="font-semibold">smaltimento rifiuti</span> e{' '}
            <span className="font-semibold">recupero materiali</span>. Una{' '}
            <span className="font-medium">tradizione familiare</span> nel settore
            che affonda le radici in <span className="font-medium">provincia di Arezzo</span>.
          </p>
        </div>

        <div className="mb-24 grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold">Le Nostre Origini</h2>
            <p className="mb-6 text-lg text-text-secondary">
              La nostra esperienza nasce da una{' '}
              <span className="font-semibold">tradizione familiare</span> sviluppatasi per generazioni
              in provincia di Arezzo, dove gestivamo un{' '}
              <span className="font-medium">impianto di recupero ferro</span>. Questa eredità ci ha
              trasmesso la passione per il <span className="font-medium">recupero e valorizzazione dei materiali</span>.
            </p>
            <p className="mb-6 text-lg text-text-secondary">
              Oggi <span className="font-semibold text-primary">De.sma.re</span> è il{' '}
              <span className="font-semibold">partner affidabile</span> di imprese e pubbliche amministrazioni.
              Garantiamo <span className="font-medium">cantieri sicuri</span> e{' '}
              <span className="font-medium">soluzioni complete</span>, sempre conformi alle normative.
              Offriamo anche <span className="font-medium">smontaggio e acquisto materiali industriali</span>,
              seguendo i principi dell'<span className="font-semibold">economia circolare</span>.
            </p>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
            <Image
              src="/images/img/abandoned-factory-interior-structure.jpg.jpg"
              alt="Team Desmare"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-24 grid items-center gap-12 md:grid-cols-2">
          <div className="relative order-1 h-[400px] overflow-hidden rounded-lg shadow-xl md:order-none">
            <Image
              src="/images/img/facade-dismantling-workers-metal-cutting.jpg"
              alt="I nostri valori"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-bold">I Nostri Valori</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-bold">Professionalità</h3>
                  <p className="text-text-secondary">
                    Il nostro team è composto da professionisti altamente
                    qualificati e dedicati alla soddisfazione del cliente.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-bold">Sostenibilità</h3>
                  <p className="text-text-secondary">
                    Adottiamo pratiche sostenibili in tutti i nostri progetti,
                    puntando a minimizzare gli sprechi e l'impatto ambientale.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-bold">Trasparenza</h3>
                  <p className="text-text-secondary">
                    Preventivi chiari e report dettagliati e verificabili.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-bold">Affidabilità</h3>
                  <p className="text-text-secondary">
                     Rispettiamo sempre impegni e normative, con puntualità e
                    rigore.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl bg-primary/5 p-8 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">Il Nostro Approccio</h2>
            <p className="mb-8 text-balance text-lg text-text-secondary">
              Desmare si distingue per un approccio{' '}
              <span className="font-bold">completo</span> e{' '}
              <span className="font-bold">personalizzato</span> ad ogni
              progetto. Comprendiamo che ogni lavoro ha esigenze uniche, e
              offriamo soluzioni su misura che si adattano perfettamente alle
              vostre necessità specifiche.{' '}
            </p>{' '}
            <p className="mb-8 text-balance text-lg text-text-secondary">
              {' '}
              Ci proponiamo come{' '}
              <span className="font-bold">general contractor</span>: un unico
              referente che coordina una rete locale di tecnici specializzati.
            </p>
            <ContactButton />
          </div>
        </div>
      </div>
    </section>
  );
}
