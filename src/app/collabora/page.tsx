import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import ValuePro from '@/components/ValuePro';
import { generateMetadata } from '@/content/metadata';
import { useSiteConfig } from '@/hooks/useSiteConfig';
import Link from 'next/link';

export const metadata = generateMetadata('collabora');

const collaborationTypes = [
  {
    title: 'Operai specializzati',
    description:
      'Collaboriamo con operai specializzati nel settore delle demolizioni. Competenze che cerchiamo:',
    requirements: [
      'Esperienza in demolizioni civili e industriali',
      'Patente C/D per mezzi pesanti',
      'Certificazioni per lavori in quota',
      'Conoscenza delle norme di sicurezza',
    ],
  },
  {
    title: 'Ingegneri',
    description:
      'Cerchiamo collaborazioni con ingegneri per la progettazione e supervisione tecnica. Competenze richieste:',
    requirements: [
      'Laurea in Ingegneria Civile o Ambientale',
      'Esperienza in progettazione demolizioni',
      'Conoscenza normativa tecnica e ambientale',
      'Abilitazione professionale',
    ],
  },
  {
    title: 'Geometri',
    description:
      'Collaborazioni con geometri per rilievi, pratiche edilizie e coordinamento cantieri. Requisiti:',
    requirements: [
      'Diploma di Geometra e abilitazione',
      'Esperienza in pratiche edilizie',
      'Competenze in rilievi topografici',
      'Conoscenza software CAD',
    ],
  },
  {
    title: 'Aziende edili',
    description:
      'Collaboriamo con aziende edili per progetti integrati di demolizione e ricostruzione. Cerchiamo:',
    requirements: [
      'Esperienza consolidata nel settore edile',
      'Certificazioni SOA per lavori pubblici',
      'Disponibilità a collaborazioni a lungo termine',
      'Attrezzature e mezzi propri',
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
                Con chi collaboriamo
              </h1>
              <h2 className="mt-6 text-2xl font-semibold text-primary">
                Avete un progetto da proporci? Vi aiutiamo con la demolizione.
              </h2>
              <p className="mt-6 text-lg text-text-secondary">
                Se hai un progetto, della parte di demolizione me ne occupo io.
                Collaboriamo con professionisti qualificati e aziende del
                settore per offrire soluzioni complete e integrate.
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
              Con chi lavoriamo
            </h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              {collaborationTypes.map((collaboration, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-2xl font-semibold">
                      {collaboration.title}
                    </h3>
                    <p className="mb-4 text-text-secondary">
                      {collaboration.description}
                    </p>
                    <ul className="mb-6 space-y-2">
                      {collaboration.requirements.map((req, idx) => (
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
                        href={`mailto:${contact.email}?subject=Proposta di collaborazione per ${collaboration.title}`}
                      >
                        Proponi collaborazione
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
              <h2 className="text-3xl font-bold">Hai un progetto per noi?</h2>
              <p className="mt-4 text-lg text-text-secondary">
                Se hai un progetto che include una fase di demolizione,
                contattaci. Ci occupiamo di tutta la parte demolizione,
                permettendoti di concentrarti sul resto del progetto.
                Collaboriamo con professionisti e aziende in tutta Italia.
              </p>
              <div className="mt-8">
                <Button>
                  <Link
                    href={`mailto:${contact.email}?subject=Proposta di Progetto con Demolizione`}
                  >
                    Proponi il tuo progetto
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
