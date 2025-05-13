import type { Metadata } from "next";
import ServiceDetail from "@/components/services/ServiceDetail";

export const metadata: Metadata = {
  title: "Rifiuti Pericolosi e Bonifica Ambientale | Servizi | Desmare",
  description:
    "Gestione sicura e conforme di rifiuti pericolosi e bonifiche ambientali, incluso amianto. Servizi specializzati con focus su sicurezza e tutela dell'ambiente.",
};

const serviceData = {
  id: "rifiuti-pericolosi",
  title: "Rifiuti pericolosi e bonifica ambientale",
  subtitle:
    "Gestione specializzata con massima sicurezza e conformità normativa",
  heroImage: "/images/horizontal-3.jpg",
  description:
    "Desmare offre servizi specializzati per la gestione di rifiuti pericolosi e bonifiche ambientali, incluso l'amianto. Ci occupiamo di ogni fase del processo con un focus prioritario sulla sicurezza, la conformità normativa e la tutela dell'ambiente.",
  benefits: [
    {
      title: "Esperienza specializzata",
      description:
        "Team altamente qualificato e formato per gestire materiali pericolosi",
      icon: "user",
    },
    {
      title: "Massima sicurezza",
      description:
        "Protocolli rigorosi e attrezzature all'avanguardia per operare senza rischi",
      icon: "shield",
    },
    {
      title: "Conformità totale",
      description:
        "Rispetto di tutte le normative nazionali ed europee con documentazione completa",
      icon: "recycle",
    },
    {
      title: "Responsabilità ambientale",
      description:
        "Approccio sostenibile volto a minimizzare l'impatto sull'ambiente",
      icon: "truck",
    },
  ],
  process: [
    {
      step: 1,
      title: "Analisi e caratterizzazione",
      description:
        "Identificazione e classificazione dei rifiuti pericolosi presenti",
    },
    {
      step: 2,
      title: "Piano di intervento",
      description:
        "Definizione dettagliata delle procedure di intervento e misure di sicurezza",
    },
    {
      step: 3,
      title: "Rimozione sicura",
      description:
        "Bonifica e rimozione dei materiali pericolosi con protocolli specifici",
    },
    {
      step: 4,
      title: "Imballaggio e trasporto",
      description:
        "Confezionamento sicuro e trasporto specializzato verso impianti autorizzati",
    },
    {
      step: 5,
      title: "Smaltimento conforme",
      description:
        "Trattamento, smaltimento e documentazione secondo normativa vigente",
    },
  ],
  categories: [
    {
      title: "Bonifica amianto",
      description:
        "Rimozione, incapsulamento e smaltimento di materiali contenenti amianto in diverse forme (coperture, coibentazioni, pavimentazioni), con rilascio di tutta la documentazione necessaria.",
      image: "/images/horizontal-3.jpg",
    },
    {
      title: "Gestione rifiuti pericolosi",
      description:
        "Gestione completa di rifiuti industriali pericolosi, solventi, olii esausti, sostanze chimiche, apparecchiature contaminate e altri materiali classificati come pericolosi.",
      image: "/images/horizontal-1.jpg",
    },
    {
      title: "Bonifiche siti contaminati",
      description:
        "Interventi di bonifica ambientale in siti industriali dismessi, terreni contaminati e aree sottoposte a inquinamento, con ripristino delle condizioni di sicurezza.",
      image: "/images/horizontal-2.jpg",
    },
  ],
  certifications: [
    "Albo Nazionale Gestori Ambientali",
    "Categoria 8 - Intermediazione rifiuti",
    "Categoria 10 - Bonifica amianto",
    "ISO 9001 - Gestione Qualità",
    "ISO 14001 - Gestione Ambientale",
    "ISO 45001 - Sicurezza sul lavoro",
  ],
  cta: {
    title: "Hai bisogno di gestire rifiuti pericolosi?",
    description:
      "Contattaci per una consulenza specializzata e un preventivo dettagliato",
    buttonText: "Richiedi un preventivo",
  },
};

export default function RifiutiPericolosiPage() {
  return <ServiceDetail service={serviceData} />;
}
