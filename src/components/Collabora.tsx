'use client';

import { useSiteConfig } from '@/hooks/useSiteConfig';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from './ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';

export default function Collabora() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { contact } = useSiteConfig();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating form submission
    setTimeout(() => {
      // Reset form state
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);

      // Here you would typically submit to your actual backend
      console.log({ name, email, message });

      // Show success message
      alert('Messaggio inviato con successo!');
    }, 1000);
  };

  return (
    <section>
      <Card variant="default">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Vuoi collaborare con noi?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center gap-4 text-balance">
            <span className="text-center">
              Se sei un professionista del settore e vuoi entrare nella nostra
              rete di collaborarori?
            </span>
            <div className="flex gap-4">
              <Button variant="outline" className="w-fit">
                <Link href="/collabora">Scopri di più</Link>
              </Button>
              <Button variant="outline" className="w-fit">
                <Link
                  href={`mailto:${contact.email}?subject=Proposta di collaborazione`}
                >
                  Contattaci
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
