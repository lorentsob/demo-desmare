import type { Metadata } from "next";
import ServiceDetail from "@/components/services/ServiceDetail";

export const metadata: Metadata = {
  title: "Demolizioni | Servizi | Desmare",
  description:
    "Soluzioni chiavi in mano per demolizioni civili e industriali. Gestiamo l'intero processo, dal progetto alla gestione rifiuti, con un unico punto di contatto.",
};

const serviceData = {
  id: "demolizioni",
  title: "Demolizioni chiavi in mano",
  subtitle: "Soluzioni complete con un unico referente",
  heroImage: "/images/horizontal-1.jpg",
  description:
    "Desmare offre servizi completi di demolizione per strutture civili e industriali. Ci occupiamo di tutto il processo, dalla pianificazione iniziale alla consegna finale del sito, garantendo sicurezza, efficienza e conformità normativa.",
  benefits: [
    {
      title: "Un unico referente",
      description:
        "Gestiamo l'intero progetto, eliminando complessità e stress per il cliente",
      icon: "user",
    },
    {
      title: "Sicurezza garantita",
      description:
        "Rispetto rigoroso delle normative con un focus sulla sicurezza di persone e ambiente",
      icon: "shield",
    },
    {
      title: "Gestione completa dei rifiuti",
      description:
        "Ci assumiamo la responsabilità legale e operativa di tutti i rifiuti generati",
      icon: "recycle",
    },
    {
      title: "Movimento terra integrato",
      description:
        "Prepariamo il sito per la fase successiva con servizi di movimento terra professionali",
      icon: "truck",
    },
  ],
  process: [
    {
      step: 1,
      title: "Valutazione e progettazione",
      description:
        "Analisi approfondita della struttura, pianificazione dettagliata e definizione delle strategie di intervento",
    },
    {
      step: 2,
      title: "Preparazione e messa in sicurezza",
      description:
        "Delimitazione dell'area, installazione delle protezioni e preparazione del sito per la demolizione",
    },
    {
      step: 3,
      title: "Esecuzione controllata",
      description:
        "Demolizione controllata con tecniche e macchinari appropriati al contesto e alla struttura",
    },
    {
      step: 4,
      title: "Gestione e smaltimento rifiuti",
      description:
        "Separazione, caratterizzazione e smaltimento o recupero dei materiali secondo le normative",
    },
    {
      step: 5,
      title: "Movimento terra e pulizia",
      description:
        "Preparazione del terreno per la fase successiva del progetto e pulizia completa dell'area",
    },
  ],
  categories: [
    {
      title: "Demolizioni civili",
      description:
        "Demolizione di edifici residenziali, commerciali e pubblici con tecniche appropriate per contesti urbani e spazi limitati",
      image: "/images/horizontal-1.jpg",
    },
    {
      title: "Demolizioni industriali",
      description:
        "Demolizione di stabilimenti produttivi, capannoni e strutture industriali con attenzione alla gestione di materiali speciali e contaminati",
      image: "/images/horizontal-2.jpg",
    },
    {
      title: "Demolizioni speciali",
      description:
        "Interventi complessi che richiedono tecniche particolari come demolizioni controllate, tagli di precisione o smantellamento selettivo",
      image: "/images/horizontal-3.jpg",
    },
  ],
  certifications: [
    "Albo Nazionale Gestori Ambientali",
    "Categoria 8 - Intermediazione rifiuti",
    "ISO 9001 - Gestione Qualità",
    "ISO 14001 - Gestione Ambientale",
    "ISO 45001 - Sicurezza sul lavoro",
  ],
  cta: {
    title: "Hai un progetto di demolizione?",
    description:
      "Contattaci per un preventivo personalizzato o per una consulenza gratuita",
    buttonText: "Richiedi un preventivo",
  },
};

export default function DemolizioniPage() {
  return <ServiceDetail service={serviceData} />;
}
