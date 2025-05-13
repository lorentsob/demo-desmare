import { NextResponse } from "next/server";
import { z } from "zod";
import { sendContactEmail } from "@/lib/email";

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

    // Send email
    console.log("Attempting to send email...");
    await sendContactEmail({ name, email, message });
    console.log("Email sent successfully");

    return NextResponse.json(
      {
        success: true,
        message: "Messaggio ricevuto con successo! Ti contatteremo presto.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form submission:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Si è verificato un errore durante l'elaborazione della richiesta.",
      },
      { status: 500 }
    );
  }
}
