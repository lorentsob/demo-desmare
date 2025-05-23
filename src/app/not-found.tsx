import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-20">
      <div className="container-custom text-center">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          Sembra che questa pagina non esiste
        </h1>
        <p className="mb-8 text-lg text-text-secondary">
          La pagina che stai cercando potrebbe essere stata rimossa o non è più
          disponibile.
        </p>
        <Link href="/" className="btn btn-primary inline-flex items-center">
          Torna alla home
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
      </div>
    </section>
  );
}
