"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/Card";
import { Button } from "./ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Define validation schema with zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Nome troppo corto" }).max(50),
  email: z.string().email({ message: "Email non valida" }),
  message: z.string().min(10, { message: "Messaggio troppo corto" }).max(500),
});

// Type for our form values
type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function InviaMessaggio() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setIsError(false);
    setIsSuccess(false);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Errore durante l'invio del messaggio"
        );
      }

      console.log("Form submitted:", data);
      reset();
      setIsSuccess(true);
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
    <section>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Inviaci un messaggio
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isSuccess && (
            <div className="mb-4 p-3 bg-success-light text-success rounded-md">
              Messaggio inviato con successo!
            </div>
          )}

          {isError && (
            <div className="mb-4 p-3 bg-error-light text-error rounded-md">
              {errorMessage || "Si è verificato un errore. Riprova più tardi."}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Nome e Cognome
              </label>
              <input
                type="text"
                id="name"
                className={`w-full ${errors.name ? "border-error" : ""}`}
                {...register("name")}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-error">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
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
    </section>
  );
}
