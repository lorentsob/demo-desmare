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

    // Email di conferma per il cliente
    console.log('Contact API: Invio email di conferma al cliente:', email);
    const customerEmail = await resend.emails.send({
      from: 'Desmare <info@desmare.it>',
      to: [email],
      subject: 'Conferma ricezione messaggio - Desmare',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Grazie per averci contattato!</h2>
          <p>Gentile ${name},</p>
          <p>Abbiamo ricevuto il tuo messaggio e ti risponderemo al più presto.</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin-top: 20px;">
            <h3 style="color: #333; margin-top: 0;">Il tuo messaggio:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 20px;">Cordiali saluti,<br>Il team di Desmare</p>
        </div>
      `,
    });

    if (customerEmail.error) {
      console.error(
        'Contact API: Errore invio email al cliente:',
        customerEmail.error,
      );
    } else {
      console.log(
        'Contact API: Email al cliente inviata con successo. ID:',
        customerEmail.data?.id,
      );
    }

    // Email per l'amministratore (info@desmare.it)
    const adminEmailAddress = 'info@desmare.it';
    const adminEmail = await resend.emails.send({
      from: 'Desmare <onboarding@resend.dev>',
      to: [adminEmailAddress],
      subject: `Nuovo messaggio da ${name}`,
      replyTo: email,
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
    } else {
      console.log(
        "Contact API: Email all'amministratore inviata con successo. ID:",
        adminEmail.data?.id,
      );
    }

    if (customerEmail.error || adminEmail.error) {
      return Response.json(
        {
          error: "Errore nell'invio delle email",
          details: {
            customer: customerEmail.error,
            admin: adminEmail.error,
          },
        },
        { status: 500 },
      );
    }

    return Response.json({
      success: true,
      data: {
        customerEmail: customerEmail.data,
        adminEmail: adminEmail.data,
      },
    });
  } catch (error) {
    console.error('Contact API: Errore generale:', error);
    return Response.json(
      { error: error instanceof Error ? error.message : 'Errore sconosciuto' },
      { status: 500 },
    );
  }
}
