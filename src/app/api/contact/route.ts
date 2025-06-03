import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  console.log('Contact API: start');

  try {
    if (!process.env.RESEND_API_KEY) {
      console.error(
        "Contact API: RESEND_API_KEY non trovata nelle variabili d'ambiente",
      );
      return Response.json(
        { error: 'Configurazione API mancante' },
        { status: 500 },
      );
    }

    const body = await request.json();
    const { name, email, message } = body;

    console.log('Contact API: dati ricevuti:', { name, email });

    const adminEmailAddress = 'lorenzo.boschi@isiadesign.fi.it';
    const adminEmail = await resend.emails.send({
      from: 'Desmare <onboarding@resend.dev>',
      to: [adminEmailAddress],
      subject: `Nuovo messaggio da ${name}`,
      reply_to: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nuovo messaggio dal sito</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Messaggio:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    if (adminEmail.error) {
      console.error(
        "Contact API: Errore invio email all'amministratore:",
        adminEmail.error,
      );
      return Response.json(
        { error: "Errore nell'invio dell'email" },
        { status: 500 },
      );
    }

    return Response.json({ success: true, data: adminEmail.data });
  } catch (error) {
    console.error('Contact API: Errore generale:', error);
    return Response.json(
      { error: error instanceof Error ? error.message : 'Errore sconosciuto' },
      { status: 500 },
    );
  }
}
