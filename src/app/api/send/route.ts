import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// mittente e destinatario admin in un’unica costante così lo tocchi solo qui
const FROM = 'Desmare <lorenzoboschi39@gmail.com>';
const ADMIN = 'lorenzoboschi39@gmail.com';

export async function POST(request: Request) {
  console.log('API Route: Inizio elaborazione richiesta');

  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('API Route: RESEND_API_KEY mancante');
      return Response.json(
        { error: 'Configurazione API mancante' },
        { status: 500 },
      );
    }

    const body = await request.json();
    const { name, email, phone, service, message } = body;
    console.log('API Route: Dati ricevuti:', { name, email, phone, service });

    /* ---------- 1. conferma al cliente ---------- */
    const customerEmail = await resend.emails.send({
      from: FROM,
      to: [email],
      subject: 'Conferma richiesta preventivo - Desmare',
      html: `
        <div style="font-family: Arial; max-width:600px; margin:0 auto;">
          <h2>Grazie per averci contattato, ${name}!</h2>
          <p>Richiesta per: <strong>${service}</strong></p>
          <p>${message}</p>
          <p>Ti risponderemo al più presto.</p>
        </div>
      `,
      text: `Grazie ${name}! Abbiamo ricevuto la tua richiesta di preventivo (${service}).`,
    });

    if (customerEmail.error) {
      console.error('API Route: Errore email cliente:', customerEmail.error);
    } else {
      console.log(
        'API Route: Email cliente inviata, ID:',
        customerEmail.data?.id,
      );
    }

    /* ---------- 2. notifica interna ---------- */
    const adminEmail = await resend.emails.send({
      from: FROM,
      to: [ADMIN],
      subject: `Nuova richiesta preventivo - ${service}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial; max-width:600px; margin:0 auto;">
          <h2>Nuova richiesta preventivo</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefono:</strong> ${phone}</p>
          <p><strong>Servizio:</strong> ${service}</p>
          <p><strong>Messaggio:</strong></p>
          <p>${message}</p>
        </div>
      `,
      text: `Preventivo da ${name} (${email}) – ${service}\n${message}`,
    });

    if (adminEmail.error) {
      console.error('API Route: Errore email admin:', adminEmail.error);
    } else {
      console.log('API Route: Email admin inviata, ID:', adminEmail.data?.id);
    }

    if (customerEmail.error || adminEmail.error) {
      return Response.json(
        { error: 'Errore nell’invio delle email' },
        { status: 500 },
      );
    }

    console.log('API Route: Tutte le email inviate con successo');
    return Response.json({ success: true });
  } catch (error) {
    console.error('API Route: Errore generale:', error);
    return Response.json(
      { error: error instanceof Error ? error.message : 'Errore sconosciuto' },
      { status: 500 },
    );
  }
}
