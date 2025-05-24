'use client';

export default function TestEmail() {
  const sendTestEmail = async () => {
    const testData = {
      name: 'Lorenzo Boschi',
      email: 'lorenzoboschi39@gmail.com',
      phone: '+39 123 456 7890',
      service: 'Demolizione',
      message:
        'Buongiorno, vorrei richiedere un preventivo per la demolizione di un edificio commerciale di 200mq.',
    };

    console.log('Test Page: Inizio invio email con dati:', testData);

    try {
      console.log('Test Page: Invio richiesta POST a /api/send');
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
      });

      console.log('Test Page: Risposta ricevuta, status:', response.status);
      const data = await response.json();
      console.log('Test Page: Dati risposta:', data);

      if (!response.ok) {
        throw new Error(data.error || 'Errore sconosciuto dal server');
      }

      alert('Email inviata con successo! Controlla la console per i dettagli.');
    } catch (error) {
      console.error("Test Page: Errore durante l'invio:", error);
      alert(
        `Errore nell'invio dell'email: ${error instanceof Error ? error.message : 'Errore sconosciuto'}`,
      );
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-4 text-2xl font-bold">Test Email Resend</h1>
      <button
        onClick={sendTestEmail}
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Invia Email di Test
      </button>
    </div>
  );
}
