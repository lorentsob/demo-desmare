import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import ValuePro from '@/components/ValuePro';
import { useSiteConfig } from '@/hooks/useSiteConfig';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Collabora con noi | Desmare',
  description:
    'Unisciti al nostro team di professionisti nel settore delle demolizioni e della bonifica ambientale. Opportunità di crescita e ambiente di lavoro sicuro.',
};

const positions = [
  {
    title: 'Operai Specializzati',
    description:
      'Cerchiamo operai con esperienza nel settore delle demolizioni e della bonifica ambientale. Competenze richieste:',
    requirements: [
      'Patente C/D per mezzi pesanti',
      'Certificazioni per lavori in quota',
      'Esperienza in cantieri edili',
      'Conoscenza delle norme di sicurezza',
    ],
  },
  {
    title: 'Tecnici Ambientali',
    description:
      'Ricerca di tecnici specializzati nella gestione e smaltimento dei rifiuti speciali. Requisiti:',
    requirements: [
      'Laurea in Scienze Ambientali o equivalente',
      'Conoscenza normativa ambientale',
      'Esperienza in gestione rifiuti speciali',
      'Certificazioni ambientali',
    ],
  },
  {
    title: 'Coordinatori di Cantiere',
    description:
      'Posizioni aperte per coordinatori con esperienza nella gestione di cantieri di demolizione. Competenze richieste:',
    requirements: [
      'Esperienza minima 5 anni nel settore',
      'Certificazione CSP/CSE',
      'Gestione squadre e subappaltatori',
      'Pianificazione e controllo cantieri',
    ],
  },
  {
    title: 'Tecnici Ambientali',
    description:
      'Ricerca di tecnici specializzati nella gestione e smaltimento dei rifiuti speciali. Requisiti:',
    requirements: [
      'Laurea in Scienze Ambientali o equivalente',
      'Conoscenza normativa ambientale',
      'Esperienza in gestione rifiuti speciali',
      'Certificazioni ambientali',
    ],
  },
];

export default function CollaboraPage() {
  const { contact } = useSiteConfig();

  return (
    <div className="flex min-h-screen flex-col">
      <main>
        {/* Hero Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold sm:text-5xl">
                Unisciti al team di collaboratori De.SMA.RE
              </h1>
              <p className="mt-6 text-lg text-text-secondary">
                In Desmare crediamo che il successo dell'azienda sia il
                risultato diretto del talento e della passione delle persone che
                la compongono. Stiamo cercando professionisti motivati che
                condividano i nostri valori di eccellenza, sicurezza e
                sostenibilità.
              </p>
            </div>
          </div>
        </section>
        <section>
          {' '}
          <ValuePro />
        </section>

        {/* Open Positions */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-center text-3xl font-bold">
              Le collaborazioni che stiamo cercando
            </h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              {positions.map((position, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-2xl font-semibold">
                      {position.title}
                    </h3>
                    <p className="mb-4 text-text-secondary">
                      {position.description}
                    </p>
                    <ul className="mb-6 space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-text-secondary"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="mr-2 h-5 w-5 text-primary"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                          {req}
                        </li>
                      ))}
                    </ul>
                    <Button>
                      <Link
                        href={`mailto:${contact.email}?subject=Collaborazione per ${position.title}`}
                      >
                        Contattaci
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 py-16">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Hai altre competenze?</h2>
              <p className="mt-4 text-lg text-text-secondary">
                Collaboriamo con professionisti qualificati in tutto il
                territorio. Se hai competenze nel settore delle demolizioni,
                della bonifica ambientale o della gestione dei rifiuti,
                contattaci per valutare insieme opportunità di collaborazione.
              </p>
              <div className="mt-8">
                <Button>
                  <Link href="mailto:info@desmare.it?subject=Proposta di Collaborazione">
                    Invia una proposta di collaborazione
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* <CTAPros /> */}
      </main>
    </div>
  );
}
