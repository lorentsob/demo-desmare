'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useModal } from '../hooks/useModal';

// Define validation schema with zod
const quoteFormSchema = z.object({
  name: z.string().min(2, { message: 'Nome troppo corto' }).max(50),
  email: z.string().email({ message: 'Email non valida' }),
  phone: z
    .string()
    .min(6, { message: 'Numero di telefono non valido' })
    .max(20),
  service: z.string().min(1, { message: 'Seleziona un servizio' }),
  message: z.string().min(10, { message: 'Messaggio troppo corto' }).max(500),
});

// Type for our form values
type QuoteFormValues = z.infer<typeof quoteFormSchema>;

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteRequestModal({
  isOpen,
  onClose,
}: QuoteRequestModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  const modalId = 'quote-request-modal';

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  // Reset all form states
  const resetFormState = useCallback(() => {
    reset();
    setIsSuccess(false);
    setIsError(false);
    setErrorMessage('');
  }, [reset]);

  // Use the custom modal hook
  const { handleClickOutside } = useModal({
    isOpen,
    onClose,
    modalRef,
    resetFn: resetFormState,
  });

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    setIsError(false);
    setIsSuccess(false);
    setErrorMessage('');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Errore durante l'invio della richiesta",
        );
      }

      console.log('Quote form submitted:', data);
      setIsSuccess(true);

      // Close modal after success message
      setTimeout(() => {
        reset();
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Form submission error:', error);
      setIsError(true);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Si è verificato un errore. Riprova più tardi.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={handleClickOutside}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${modalId}-title`}
        >
          <motion.div
            ref={modalRef}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="card w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-2 sm:p-4">
              <div className="mb-6 flex items-center justify-between">
                <h2 id={`${modalId}-title`} className="text-2xl font-bold">
                  Richiedi un preventivo
                </h2>
                <button
                  onClick={onClose}
                  className="text-text-secondary transition-colors hover:text-text focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Chiudi modale"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {isSuccess && (
                <div
                  className="bg-success-light text-success mb-4 rounded-md p-3"
                  role="alert"
                >
                  Richiesta inviata con successo!
                </div>
              )}

              {isError && (
                <div
                  className="bg-error-light text-error mb-4 rounded-md p-3"
                  role="alert"
                >
                  {errorMessage ||
                    'Si è verificato un errore. Riprova più tardi.'}
                </div>
              )}

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                aria-labelledby={`${modalId}-title`}
                noValidate
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium"
                  >
                    Nome e Cognome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full ${errors.name ? 'border-error' : ''}`}
                    {...register('name')}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="text-error mt-1 text-sm"
                      role="alert"
                    >
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full ${errors.email ? 'border-error' : ''}`}
                    {...register('email')}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="text-error mt-1 text-sm"
                      role="alert"
                    >
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-sm font-medium"
                  >
                    Numero di telefono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className={`w-full ${errors.phone ? 'border-error' : ''}`}
                    {...register('phone')}
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p
                      id="phone-error"
                      className="text-error mt-1 text-sm"
                      role="alert"
                    >
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-1 block text-sm font-medium"
                  >
                    Servizi necessari
                  </label>
                  <select
                    id="service"
                    className={`w-full ${errors.service ? 'border-error' : ''}`}
                    {...register('service')}
                    aria-invalid={errors.service ? 'true' : 'false'}
                    aria-describedby={
                      errors.service ? 'service-error' : undefined
                    }
                  >
                    <option value="" disabled>
                      Servizio richiesto
                    </option>
                    <option value="Demolizione">Demolizione</option>
                    <option value="Strip-out">Strip-out</option>
                    <option value="Bonifica ambientale">
                      Bonifica ambientale
                    </option>
                    <option value="Altro">Altro</option>
                  </select>
                  {errors.service && (
                    <p
                      id="service-error"
                      className="text-error mt-1 text-sm"
                      role="alert"
                    >
                      {errors.service.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium"
                  >
                    Messaggio
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className={`w-full ${errors.message ? 'border-error' : ''}`}
                    {...register('message')}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={
                      errors.message ? 'message-error' : undefined
                    }
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="text-error mt-1 text-sm"
                      role="alert"
                    >
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary flex w-full items-center justify-center"
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="-ml-1 mr-2 h-4 w-4 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Invio in corso...
                    </>
                  ) : (
                    'Invia richiesta'
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
