'use client';

import Image from 'next/image';

const services = [
  {
    id: 'demolizioni',
    title: 'Demolizioni',
    description:
      'Servizi completi di demolizione per strutture civili e industriali.',
    image: '/images/img/demolition-excavator-action.jpg',
  },
  {
    id: 'strip-out',
    title: 'Strip-out',
    description: 'Gestione professionale dei rifiuti edili e speciali.',
    image: '/images/img/facade-dismantling-workers-metal-cutting.jpg',
  },
  {
    id: 'bonifiche',
    title: 'Bonifiche ambientali',
    description:
      'Interventi di bonifica e messa in sicurezza di siti contaminati o dismessi.',
    image: '/images/img/environmental-cleanup.jpg',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            I Nostri Servizi
          </h2>
          <p className="text-lg text-text-secondary">
            Offriamo soluzioni professionali e sostenibili per demolizioni,
            smaltimento e recupero di rifiuti.
          </p>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="border-border overflow-hidden rounded-xl border bg-white shadow-card transition-shadow hover:shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                <p className="mb-4 text-text-secondary">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
