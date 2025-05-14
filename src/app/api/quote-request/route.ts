import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// Inizializza Resend con la tua API key dalle variabili d'ambiente
const resendApiKey = process.env.RESEND_API_KEY;
console.log(
  "Resend API Key configured in quote-request:",
  resendApiKey ? "Yes (length: " + resendApiKey.length + ")" : "No"
);
const resend = new Resend(resendApiKey);

// Define validation schema
const quoteFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(6).max(20),
  service: z.string().min(1),
  message: z.string().min(10).max(500),
});

export async function POST(request: Request) {
  console.log("Quote request form API route called");

  try {
    // Parse and validate request body
    const body = await request.json();
    console.log("Received quote form data:", body);

    const result = quoteFormSchema.safeParse(body);

    if (!result.success) {
      // Return validation errors
      console.log(
        "Quote validation failed:",
        result.error.flatten().fieldErrors
      );
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, phone, service, message } = result.data;
    console.log("Validated quote data:", {
      name,
      email,
      phone,
      service,
      message,
    });

    // Email configuration values
    const fromEmail = process.env.EMAIL_FROM || "lorenzoboschi39@gmail.com";
    const toEmail = process.env.EMAIL_TO || "lorenzoboschi39@gmail.com";

    console.log("Quote email configuration:", {
      apiKeyConfigured: !!resendApiKey,
      fromEmail,
      toEmail,
    });

    // 1. Invia l'email a te (azienda)
    console.log("Attempting to send quote company email...");
    let toCompany;
    try {
      toCompany = await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        subject: `Nuova richiesta di preventivo: ${service}`,
        html: `
          <h2>Nuova richiesta di preventivo</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefono:</strong> ${phone}</p>
          <p><strong>Servizio richiesto:</strong> ${service}</p>
          <p><strong>Messaggio:</strong></p>
          <p>${message}</p>
        `,
      });

      console.log("Quote company email response:", JSON.stringify(toCompany));

      if (!toCompany.data?.id) {
        console.error(
          "Quote company email might have failed - no ID returned:",
          toCompany
        );
      }
    } catch (emailError) {
      console.error("Failed to send quote company email:", emailError);
      throw emailError;
    }

    // 2. Invia l'email di conferma al cliente
    console.log("Attempting to send quote customer confirmation email...");
    try {
      const toCustomer = await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: "Abbiamo ricevuto la tua richiesta di preventivo",
        html: `
          <h2>Grazie per averci contattato, ${name}!</h2>
          <p>Abbiamo ricevuto la tua richiesta di preventivo per <strong>${service}</strong> e ti risponderemo al più presto.</p>
          <p>Ecco un riepilogo di quanto ci hai inviato:</p>
          <p><strong>Messaggio:</strong> ${message}</p>
          <hr>
          <p>Cordiali saluti,<br>Il team Desmare</p>
        `,
      });

      console.log("Quote customer email response:", JSON.stringify(toCustomer));

      if (!toCustomer.data?.id) {
        console.error(
          "Quote customer email might have failed - no ID returned:",
          toCustomer
        );
      }

      return NextResponse.json(
        {
          success: true,
          message:
            "Richiesta di preventivo ricevuta con successo! Ti contatteremo al più presto.",
          companyEmailId: toCompany?.data?.id,
          customerEmailId: toCustomer?.data?.id,
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error("Failed to send quote customer email:", emailError);
      throw emailError;
    }
  } catch (error) {
    console.error("Error processing quote request submission:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Si è verificato un errore durante l'elaborazione della richiesta.",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
