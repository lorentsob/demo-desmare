import { NextResponse } from "next/server";
import { z } from "zod";
import { sendQuoteRequestEmail } from "@/lib/email";

// Define validation schema
const quoteFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(6).max(20),
  service: z.string().min(1),
  message: z.string().min(10).max(500),
});

export async function POST(request: Request) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const result = quoteFormSchema.safeParse(body);

    if (!result.success) {
      // Return validation errors
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, phone, service, message } = result.data;

    // Send email
    await sendQuoteRequestEmail({ name, email, phone, service, message });

    return NextResponse.json(
      {
        success: true,
        message:
          "Richiesta di preventivo ricevuta con successo! Ti contatteremo al più presto.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing quote request submission:", error);

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
