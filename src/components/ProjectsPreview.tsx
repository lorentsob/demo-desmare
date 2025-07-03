'use client';

import Image from 'next/image';

// Progetto in evidenza
const featuredProject = {
  title: 'Strip-out Controllato nel Centro di Terni',
  description:
    'Strip-out controllato nel centro della città di Terni per conto del cliente Superconti. Intervento di precisione in area urbana densamente popolata con minimo impatto sui cittadini.',
  image: '/images/img/stripout-terni.jpeg',
  category: 'strip-out',
  client: 'Superconti',
  stats: [
    { label: 'Cliente', value: 'Superconti' },
    { label: 'Durata', value: '2 mesi' },
    { label: 'Dove', value: 'Centro di Terni' },
  ],
};

export default function ProjectsPreview() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Progetti Recenti
          </h2>
          <p className="text-lg text-text-secondary">
            Scopri alcuni dei nostri progetti più significativi, dove abbiamo
            combinato efficienza operativa e sostenibilità ambientale.
          </p>
        </div>

        <div className="mb-12 grid gap-8 overflow-hidden rounded-xl bg-primary/5 md:grid-cols-5">
          <div className="relative h-64 md:col-span-2 md:h-auto">
            <Image
              src={featuredProject.image}
              alt={featuredProject.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8 md:col-span-3">
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-2xl font-bold">{featuredProject.title}</h3>
              <span className="rounded-full bg-primary/20 px-3 py-1 text-sm text-primary">
                {featuredProject.category === 'demolizione'
                  ? 'Demolizione'
                  : featuredProject.category === 'strip-out'
                    ? 'Strip-out'
                    : featuredProject.category === 'smaltimento'
                      ? 'Smaltimento'
                      : 'Recupero'}
              </span>
            </div>

            <p className="mb-6 text-text-secondary">
              {featuredProject.description}
            </p>

            <div className="mb-6 grid grid-cols-3 gap-4">
              {featuredProject.stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-background p-3 text-center"
                >
                  <div className="text-lg font-bold">{stat.value}</div>
                  <div className="text-sm text-text-secondary">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="text-center">
          <Link
            href="/progetti"
            className="btn btn-primary inline-flex items-center"
          >
            Scopri tutti i progetti
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div> */}
      </div>
    </section>
  );
}
