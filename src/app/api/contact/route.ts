import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// Initialize Resend with your API key from environment variables
const resendApiKey = process.env.RESEND_API_KEY;
console.log(
  "Resend API Key configured:",
  resendApiKey ? "Yes (length: " + resendApiKey.length + ")" : "No"
);
const resend = new Resend(resendApiKey);

// Define validation schema
const contactFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

export async function POST(request: Request) {
  console.log("Contact form API route called");

  try {
    // Parse and validate request body
    const body = await request.json();
    console.log("Received form data:", body);

    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      // Return validation errors
      console.log("Validation failed:", result.error.flatten().fieldErrors);
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, message } = result.data;
    console.log("Validated data:", { name, email, message });

    // Email configuration values
    const fromEmail = process.env.EMAIL_FROM || "lorenzoboschi39@gmail.com";
    const toEmail = process.env.EMAIL_TO || "lorenzoboschi39@gmail.com";

    console.log("Email configuration:", {
      apiKeyConfigured: !!resendApiKey,
      fromEmail,
      toEmail,
    });

    // Send email to company
    console.log("Attempting to send company email...");
    let toCompany;
    try {
      toCompany = await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        subject: `Nuovo messaggio dal sito web da ${name}`,
        html: `
          <h2>Nuovo messaggio dal sito web</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Messaggio:</strong></p>
          <p>${message}</p>
        `,
      });

      console.log("Company email response:", JSON.stringify(toCompany));

      if (!toCompany.data?.id) {
        console.error(
          "Company email might have failed - no ID returned:",
          toCompany
        );
      }
    } catch (emailError) {
      console.error("Failed to send company email:", emailError);
      throw emailError;
    }

    // Send confirmation email to customer
    console.log("Attempting to send customer confirmation email...");
    try {
      const toCustomer = await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: "Conferma ricezione messaggio - Desmare",
        html: `
          <h2>Grazie per averci contattato, ${name}!</h2>
          <p>Abbiamo ricevuto il tuo messaggio e ti risponderemo al più presto.</p>
          <p>Ecco un riepilogo di quanto ci hai inviato:</p>
          <p><strong>Messaggio:</strong> ${message}</p>
          <hr>
          <p>Cordiali saluti,<br>Il team Desmare</p>
        `,
      });

      console.log("Customer email response:", JSON.stringify(toCustomer));

      if (!toCustomer.data?.id) {
        console.error(
          "Customer email might have failed - no ID returned:",
          toCustomer
        );
      }

      return NextResponse.json(
        {
          success: true,
          message: "Messaggio ricevuto con successo! Ti contatteremo presto.",
          companyEmailId: toCompany?.data?.id,
          customerEmailId: toCustomer?.data?.id,
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error("Failed to send customer email:", emailError);
      throw emailError;
    }
  } catch (error) {
    console.error("Error processing contact form submission:", error);

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
