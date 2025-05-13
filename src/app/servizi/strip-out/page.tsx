import type { Metadata } from "next";
import ServiceDetail from "@/components/services/ServiceDetail";

export const metadata: Metadata = {
  title: "Strip-out | Servizi | Desmare",
  description:
    "Servizi di strip-out di precisione per la preparazione degli spazi alla ristrutturazione o riqualificazione, con minimo impatto sulle strutture adiacenti.",
};

const serviceData = {
  id: "strip-out",
  title: "Strip-out",
  subtitle: "Preparazione professionale degli spazi per ristrutturazioni",
  heroImage: "/images/horizontal-2.jpg",
  description:
    "Eseguiamo interventi di strip-out di alta precisione per preparare gli spazi alla ristrutturazione o riqualificazione. Rimuoviamo elementi non strutturali minimizzando l'impatto sulle strutture adiacenti e garantendo la massima efficienza.",
  benefits: [
    {
      title: "Precisione",
      description:
        "Rimozione mirata di elementi non strutturali salvaguardando le parti da preservare",
      icon: "shield",
    },
    {
      title: "Minimo disturbo",
      description:
        "Tecniche e attrezzature che riducono rumore, polvere e impatto sul contesto circostante",
      icon: "user",
    },
    {
      title: "Recupero materiali",
      description:
        "Massimizziamo il recupero di materiali riutilizzabili o riciclabili",
      icon: "recycle",
    },
    {
      title: "Pulizia completa",
      description:
        "Lasciamo gli spazi pronti per la fase successiva del progetto",
      icon: "truck",
    },
  ],
  process: [
    {
      step: 1,
      title: "Ispezione e pianificazione",
      description:
        "Analisi dettagliata del sito e definizione del piano di strip-out ottimale",
    },
    {
      step: 2,
      title: "Protezione aree sensibili",
      description:
        "Installazione di protezioni per preservare elementi da mantenere e aree adiacenti",
    },
    {
      step: 3,
      title: "Rimozione selettiva",
      description:
        "Smontaggio e rimozione controllata degli elementi non strutturali",
    },
    {
      step: 4,
      title: "Separazione materiali",
      description:
        "Suddivisione dei materiali per tipologia per massimizzare recupero e riciclo",
    },
    {
      step: 5,
      title: "Pulizia e preparazione",
      description:
        "Pulizia approfondita e preparazione dello spazio per la fase di ristrutturazione",
    },
  ],
  categories: [
    {
      title: "Strip-out commerciale",
      description:
        "Interventi in uffici, negozi e spazi retail con particolare attenzione ai tempi e alla minimizzazione delle interruzioni delle attività adiacenti",
      image: "/images/horizontal-2.jpg",
    },
    {
      title: "Strip-out industriale",
      description:
        "Rimozione di impianti, macchinari e finiture in stabilimenti produttivi e capannoni, con focus sulla sicurezza e sulla gestione di materiali speciali",
      image: "/images/horizontal-1.jpg",
    },
    {
      title: "Strip-out residenziale",
      description:
        "Interventi in abitazioni e condomini caratterizzati da estrema precisione e attenzione ai dettagli per preparare gli spazi alla ristrutturazione",
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
    title: "Hai bisogno di un intervento di strip-out?",
    description:
      "Contattaci per un sopralluogo gratuito e un preventivo personalizzato",
    buttonText: "Richiedi un preventivo",
  },
};

export default function StripOutPage() {
  return <ServiceDetail service={serviceData} />;
}
