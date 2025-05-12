"use client";

import { useState } from "react";
import QuoteRequestModal from "./QuoteRequestModal";
import ContacInfo from "./ContactInfo";
import Apertura from "./Apertura";
import InviaMessaggio from "./InviaMessaggio";
import CTAContatti from "./CTAContatti";

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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ContacInfo />
            <Apertura />
          </div>
          <div>
            <InviaMessaggio />
          </div>
        </div>
        <CTAContatti />

        <QuoteRequestModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>

      <QuoteRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
