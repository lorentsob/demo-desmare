import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  console.log('API Route: Inizio elaborazione richiesta');

  try {
    // Verifica API key
    if (!process.env.RESEND_API_KEY) {
      console.error(
        "API Route: RESEND_API_KEY non trovata nelle variabili d'ambiente",
      );
      return Response.json(
        { error: 'Configurazione API mancante' },
        { status: 500 },
      );
    }

    console.log('API Route: Parsing del body della richiesta');
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    console.log('API Route: Dati ricevuti:', { name, email, phone, service });

    // Email per il cliente (lorenzoboschi39@gmail.com)
    console.log('API Route: Invio email di conferma al cliente:', email);
    const customerEmail = await resend.emails.send({
      from: 'Desmare <onboarding@resend.dev>',
      to: [email],
      subject: 'Conferma richiesta preventivo - Desmare',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Grazie per averci contattato!</h2>
          <p>Gentile ${name},</p>
          <p>Abbiamo ricevuto la tua richiesta di preventivo per il servizio di <strong>${service}</strong>.</p>
          <p>Un nostro operatore ti contatterà al più presto per discutere i dettagli della tua richiesta.</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin-top: 20px;">
            <h3 style="color: #333; margin-top: 0;">Riepilogo della tua richiesta:</h3>
            <p><strong>Servizio:</strong> ${service}</p>
            <p><strong>Messaggio:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 20px;">Cordiali saluti,<br>Il team di Desmare</p>
        </div>
      `,
    });

    if (customerEmail.error) {
      console.error(
        'API Route: Errore invio email al cliente:',
        customerEmail.error,
      );
    } else {
      console.log(
        'API Route: Email al cliente inviata con successo. ID:',
        customerEmail.data?.id,
      );
    }

    // Email per l'amministratore (info@desmare.it)
    const adminEmailAddress = 'info@desmare.it';
    console.log(
      "API Route: Invio email di notifica all'amministratore:",
      adminEmailAddress,
    );
    const adminEmail = await resend.emails.send({
      from: 'Desmare <onboarding@resend.dev>',
      to: [adminEmailAddress],
      subject: `Nuova richiesta preventivo - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nuova richiesta preventivo</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefono:</strong> ${phone}</p>
            <p><strong>Servizio:</strong> ${service}</p>
            <p><strong>Messaggio:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    if (adminEmail.error) {
      console.error(
        "API Route: Errore invio email all'amministratore:",
        adminEmail.error,
      );
    } else {
      console.log(
        "API Route: Email all'amministratore inviata con successo. ID:",
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

    console.log('API Route: Tutte le email inviate con successo');
    return Response.json({
      success: true,
      data: {
        customerEmail: customerEmail.data,
        adminEmail: adminEmail.data,
      },
    });
  } catch (error) {
    console.error('API Route: Errore generale:', error);
    return Response.json(
      { error: error instanceof Error ? error.message : 'Errore sconosciuto' },
      { status: 500 },
    );
  }
}
