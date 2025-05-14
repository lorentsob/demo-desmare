"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Define validation schema with zod
const quoteFormSchema = z.object({
  name: z.string().min(2, { message: "Nome troppo corto" }).max(50),
  email: z.string().email({ message: "Email non valida" }),
  phone: z
    .string()
    .min(6, { message: "Numero di telefono non valido" })
    .max(20),
  service: z.string().min(1, { message: "Seleziona un servizio" }),
  message: z.string().min(10, { message: "Messaggio troppo corto" }).max(500),
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
  const [errorMessage, setErrorMessage] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  // Reset form state when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      reset();
      setIsSuccess(false);
      setIsError(false);
      setErrorMessage("");
    }
  }, [isOpen, reset]);

  // Handle click outside to close
  const handleClickOutside = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    setIsError(false);
    setIsSuccess(false);
    setErrorMessage("");

    try {
      const response = await fetch("/api/quote-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Errore durante l'invio della richiesta"
        );
      }

      console.log("Quote form submitted:", data);
      setIsSuccess(true);

      // Close modal after success message
      setTimeout(() => {
        reset();
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Form submission error:", error);
      setIsError(true);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Si è verificato un errore. Riprova più tardi."
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={handleClickOutside}
        >
          <motion.div
            ref={modalRef}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="card w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-2 sm:p-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Richiedi un preventivo</h2>
                <button
                  onClick={onClose}
                  className="text-text-secondary hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
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
                <div className="mb-4 p-3 bg-success-light text-success rounded-md">
                  Richiesta inviata con successo!
                </div>
              )}

              {isError && (
                <div className="mb-4 p-3 bg-error-light text-error rounded-md">
                  {errorMessage ||
                    "Si è verificato un errore. Riprova più tardi."}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
                    className={`w-full ${errors.name ? "border-error" : ""}`}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-error">
                      {errors.name.message}
                    </p>
                  )}
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
                    className={`w-full ${errors.email ? "border-error" : ""}`}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-error">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1"
                  >
                    Numero di telefono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className={`w-full ${errors.phone ? "border-error" : ""}`}
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-error">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium mb-1"
                  >
                    Servizi necessari
                  </label>
                  <select
                    id="service"
                    className={`w-full ${errors.service ? "border-error" : ""}`}
                    {...register("service")}
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
                    <p className="mt-1 text-sm text-error">
                      {errors.service.message}
                    </p>
                  )}
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
                    rows={4}
                    className={`w-full ${errors.message ? "border-error" : ""}`}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-error">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
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
                    "Invia richiesta"
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
