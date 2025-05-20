"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/Card";

export default function ContacInfo() {
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
    <section className="">
      <Card variant="default" className="mb-8">
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
                  className="text-primary hover:underline"
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
                  className="text-primary hover:underline"
                >
                  +39 0123 456789
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
