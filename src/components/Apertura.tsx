"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/Card";

export default function Apertura() {
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
    <section>
      <Card variant="default">
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
    </section>
  );
}
