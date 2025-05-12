"use client";

import { useState } from "react";
import QuoteRequestModal from "./QuoteRequestModal";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/Card";
import { Button } from "./ui/Button";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating form submission
    setTimeout(() => {
      // Reset form state
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);

      // Here you would typically submit to your actual backend
      console.log({ name, email, message });

      // Show success message
      alert("Messaggio inviato con successo!");
    }, 1000);
  };

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="section-title">Contatti</h1>
          <p className="section-subtitle">
            Siamo qui per aiutarti. Contattaci per qualsiasi informazione o per
            richiedere un preventivo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <Card variant="accent" className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Informazioni di contatto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="icon-container mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <a
                        href="mailto:info@desmare.it"
                        className="text-accent hover:underline"
                      >
                        info@desmare.it
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="icon-container mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Telefono</h3>
                      <a
                        href="tel:+390123456789"
                        className="text-accent hover:underline"
                      >
                        +39 0123 456789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="icon-container mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Indirizzo</h3>
                      <p className="text-text-secondary">
                        Via Roma 123, 00100 Roma, Italia
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="accent">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Orari di apertura
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Lunedì - Venerdì</span>
                    <span>8:30 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabato</span>
                    <span>9:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domenica</span>
                    <span>Chiuso</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Inviaci un messaggio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Nome e Cognome
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Messaggio
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    loading={isSubmitting}
                  >
                    Invia messaggio
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="text-center">
              <p className="text-lg text-text-secondary mb-4">
                Hai bisogno di un preventivo dettagliato?
              </p>
              <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                Richiedi un preventivo
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-6 text-center">Dove siamo</h2>
          <div className="card bg-accent-50 h-[400px] flex items-center justify-center">
            <p className="text-text-secondary">
              Mappa di Google - Via Roma 123, 00100 Roma, Italia
            </p>
          </div>
        </div>
      </div>

      <QuoteRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
