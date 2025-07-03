export const servicesContent = {
  landing: {
    title: 'I nostri servizi',
    subtitle:
      'Demolizione, movimento terra e gestione rifiuti, con un unico referente per tutto il progetto.',
    categories: [
      {
        id: 'demolizioni',
        title: 'Demolizioni complete',
        description:
          "Servizi completi di demolizione per qualsiasi struttura con un unico referente, dalla pianificazione alla consegna del sito. Gestiamo l'intero processo eliminando complessità e stress per il cliente.",
        image: '/images/horizontal-1.jpg',
        link: '/servizi/demolizioni',
        features: [
          'Demolizioni civili',
          'Demolizioni industriali',
          'Demolizioni speciali',
          'Gestione completa del progetto',
          'Unico punto di contatto',
          'Conformità normativa garantita',
        ],
      },
      {
        id: 'strip-out',
        title: 'Strip-out',
        description:
          "Eseguiamo servizi di strip-out per preparare gli spazi alla ristrutturazione o riqualificazione, minimizzando l'impatto sulle strutture adiacenti e garantendo la massima efficienza.",
        image: '/images/horizontal-2.jpg',
        link: '/servizi/strip-out',
        features: [
          'Rimozione di elementi non strutturali',
          'Preparazione per ristrutturazioni',
          'Minimizzazione dei disturbi',
          'Preservazione degli elementi da mantenere',
          'Recupero di materiali riutilizzabili',
          'Consegna area completata',
        ],
      },
      {
        id: 'bonifiche',
        title: 'Bonifiche ambientali',
        description:
          "Ci occupiamo di bonifiche ambientali e gestione sicura di materiali speciali, incluso l'amianto, con un focus sulla sicurezza, la conformità normativa e la tutela dell'ambiente.",
        image: '/images/horizontal-3.jpg',
        link: '/servizi/bonifiche',
        features: [
          'Bonifica amianto',
          'Gestione materiali speciali',
          'Analisi e caratterizzazione',
          'Conformità normativa',
          'Certificazioni complete',
          "Soluzioni rispettose dell'ambiente",
        ],
      },
    ],
  },
  detail: {
    demolizioni: {
      id: 'demolizioni',
      title: 'Demolizioni complete',
      subtitle: 'Soluzioni complete con un unico referente',
      heroImage: '/images/horizontal-1.jpg',
      description:
        'Desmare offre servizi completi di demolizione per strutture civili e industriali. Ci occupiamo di tutto il processo, dalla pianificazione iniziale alla consegna finale del sito, garantendo sicurezza, efficienza e conformità normativa.',
      benefits: [
        {
          title: 'Un unico referente',
          description:
            "Gestiamo l'intero progetto, eliminando complessità e stress per il cliente",
          icon: 'user',
        },
        {
          title: 'Sicurezza garantita',
          description:
            'Rispetto rigoroso delle normative con un focus sulla sicurezza di persone e ambiente',
          icon: 'shield',
        },
        {
          title: 'Gestione completa dei rifiuti',
          description:
            'Ci assumiamo la responsabilità legale e operativa di tutti i rifiuti generati',
          icon: 'recycle',
        },
        {
          title: 'Movimento terra integrato',
          description:
            'Prepariamo il sito per la fase successiva con servizi di movimento terra professionali',
          icon: 'truck',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Valutazione e progettazione',
          description:
            'Analisi approfondita della struttura, pianificazione dettagliata e definizione delle strategie di intervento',
        },
        {
          step: 2,
          title: 'Preparazione e messa in sicurezza',
          description:
            "Delimitazione dell'area, installazione delle protezioni e preparazione del sito per la demolizione",
        },
        {
          step: 3,
          title: 'Esecuzione controllata',
          description:
            'Demolizione controllata con tecniche e macchinari appropriati al contesto e alla struttura',
        },
        {
          step: 4,
          title: 'Gestione e smaltimento rifiuti',
          description:
            'Separazione, caratterizzazione e smaltimento o recupero dei materiali secondo le normative',
        },
      ],
      categories: [
        {
          title: 'Demolizioni civili',
          description:
            'Demolizione di edifici residenziali, commerciali e pubblici con tecniche appropriate per contesti urbani e spazi limitati',
          image: '/images/horizontal-1.jpg',
        },
        {
          title: 'Demolizioni industriali',
          description:
            'Demolizione di stabilimenti produttivi, capannoni e strutture industriali con attenzione alla gestione di materiali speciali e contaminati',
          image: '/images/horizontal-2.jpg',
        },
        {
          title: 'Demolizioni speciali',
          description:
            'Interventi complessi che richiedono tecniche particolari come demolizioni controllate, tagli di precisione o smantellamento selettivo',
          image: '/images/horizontal-3.jpg',
        },
      ],
      // certifications: [
      //   'Albo Nazionale Gestori Ambientali',
      //   'Categoria 8 - Intermediazione rifiuti',
      //   'ISO 9001 - Gestione Qualità',
      //   'ISO 14001 - Gestione Ambientale',
      //   'ISO 45001 - Sicurezza sul lavoro',
      // ],
      cta: {
        title: 'Hai un progetto di demolizione?',
        description:
          'Contattaci per un preventivo personalizzato o per una consulenza gratuita',
        buttonText: 'Richiedi un preventivo',
      },
    },
    'strip-out': {
      id: 'strip-out',
      title: 'Servizi di Strip-out',
      subtitle: 'Preparazione professionale per ristrutturazioni',
      heroImage: '/images/horizontal-2.jpg',
      description:
        'Servizi di strip-out di precisione per la preparazione degli spazi alla ristrutturazione o riqualificazione, con minimo impatto sulle strutture adiacenti.',
      benefits: [
        {
          title: 'Precisione e cura',
          description:
            'Rimozione selettiva degli elementi con massima attenzione ai dettagli',
          icon: 'precision',
        },
        {
          title: 'Minimizzazione dei disturbi',
          description:
            "Tecniche e procedure che riducono al minimo l'impatto sulle aree circostanti",
          icon: 'shield',
        },
        {
          title: 'Recupero materiali',
          description:
            'Separazione e recupero di materiali riutilizzabili per ridurre i rifiuti',
          icon: 'recycle',
        },
        {
          title: 'Consegna professionale',
          description: "Consegna dell'area completata e pronta all'uso",
          icon: 'check',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Analisi e pianificazione',
          description:
            "Valutazione degli elementi da rimuovere e pianificazione dell'intervento",
        },
        {
          step: 2,
          title: 'Protezione e preparazione',
          description:
            'Protezione delle aree adiacenti e preparazione del cantiere',
        },
        {
          step: 3,
          title: 'Rimozione selettiva',
          description:
            'Rimozione controllata degli elementi secondo il piano stabilito',
        },
        {
          step: 4,
          title: 'Gestione materiali',
          description:
            'Separazione e smaltimento dei materiali secondo le normative',
        },
      ],
      categories: [
        {
          title: 'Strip-out commerciale',
          description:
            'Rimozione di elementi non strutturali in spazi commerciali e uffici',
          image: '/images/horizontal-2.jpg',
        },
        {
          title: 'Strip-out industriale',
          description:
            "Preparazione di spazi industriali per ristrutturazione o cambio destinazione d'uso",
          image: '/images/horizontal-3.jpg',
        },
        {
          title: 'Strip-out residenziale',
          description:
            'Rimozione di elementi in spazi residenziali con attenzione ai dettagli',
          image: '/images/horizontal-1.jpg',
        },
      ],
      // certifications: [
      //   'Albo Nazionale Gestori Ambientali',
      //   'Categoria 8 - Intermediazione rifiuti',
      //   'ISO 9001 - Gestione Qualità',
      //   'ISO 14001 - Gestione Ambientale',
      //   'ISO 45001 - Sicurezza sul lavoro',
      // ],
      cta: {
        title: 'Hai bisogno di servizi di strip-out?',
        description:
          'Contattaci per un preventivo personalizzato o per una consulenza gratuita',
        buttonText: 'Richiedi un preventivo',
      },
    },
    bonifiche: {
      id: 'bonifiche',
      title: 'Bonifiche Ambientali',
      subtitle: "Soluzioni sicure e conformi per la tutela dell'ambiente",
      heroImage: '/images/horizontal-3.jpg',
      description:
        "Bonifiche ambientali e gestione sicura di materiali speciali, incluso amianto. Servizi specializzati con focus su sicurezza e tutela dell'ambiente.",
      benefits: [
        {
          title: 'Sicurezza garantita',
          description:
            'Procedure rigorose per la protezione di persone e ambiente',
          icon: 'shield',
        },
        {
          title: 'Conformità normativa',
          description:
            'Rispetto di tutte le normative vigenti per la gestione dei rifiuti pericolosi',
          icon: 'check',
        },
        {
          title: 'Certificazioni complete',
          description:
            'Documentazione dettagliata e certificazioni per ogni intervento',
          icon: 'certificate',
        },
        {
          title: 'Soluzioni sostenibili',
          description:
            'Approccio eco-sostenibile alla gestione dei rifiuti pericolosi',
          icon: 'leaf',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Analisi e caratterizzazione',
          description:
            'Valutazione dei materiali e caratterizzazione dei rifiuti pericolosi',
        },
        {
          step: 2,
          title: "Pianificazione dell'intervento",
          description:
            'Definizione delle procedure e delle misure di sicurezza necessarie',
        },
        {
          step: 3,
          title: 'Esecuzione della bonifica',
          description:
            'Intervento di bonifica con tecniche e procedure specializzate',
        },
        {
          step: 4,
          title: 'Gestione dei rifiuti',
          description:
            'Raccolta, trasporto e smaltimento dei rifiuti pericolosi',
        },
      ],
      categories: [
        {
          title: 'Bonifica amianto',
          description:
            'Rimozione e smaltimento di materiali contenenti amianto',
          image: '/images/horizontal-3.jpg',
        },
        {
          title: 'Gestione materiali speciali',
          description:
            'Trattamento e smaltimento di materiali speciali e contaminati',
          image: '/images/horizontal-1.jpg',
        },
        {
          title: 'Bonifica ambientale',
          description: 'Interventi di bonifica e ripristino ambientale',
          image: '/images/horizontal-2.jpg',
        },
      ],
      certifications: [
        'Albo Nazionale Gestori Ambientali',
        'Categoria 8 - Intermediazione rifiuti',
        'ISO 9001 - Gestione Qualità',
        'ISO 14001 - Gestione Ambientale',
        'ISO 45001 - Sicurezza sul lavoro',
      ],
      cta: {
        title: 'Hai bisogno di servizi di bonifica?',
        description:
          'Contattaci per un preventivo personalizzato o per una consulenza gratuita',
        buttonText: 'Richiedi un preventivo',
      },
    },
  },
  process: {
    title: 'Il Nostro Processo',
    subtitle: 'Come lavoriamo',
    steps: [
      {
        number: '01',
        title: 'Valutazione',
        description: 'Analisi dettagliata del progetto e delle esigenze',
      },
      {
        number: '02',
        title: 'Preventivo',
        description: 'Preparazione di un preventivo dettagliato e trasparente',
      },
      {
        number: '03',
        title: 'Pianificazione',
        description: 'Organizzazione logistica e operativa del progetto',
      },
      {
        number: '04',
        title: 'Esecuzione',
        description: 'Realizzazione del progetto con massima professionalità',
      },
    ],
  },
  cta: {
    title: 'Hai un Progetto in Mente?',
    subtitle: 'Contattaci per un preventivo gratuito',
    button: 'Richiedi Preventivo',
  },
};
