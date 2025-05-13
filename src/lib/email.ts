import sgMail from "@sendgrid/mail";

// Initialize SendGrid with API key
// Will use the key from environment variables when available
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

// For development, we'll log instead of sending if no API key
const isDevelopment = process.env.NODE_ENV !== "production";
const hasSendGridKey = !!process.env.SENDGRID_API_KEY;

// Company email address - centralize it to ensure consistency
const COMPANY_EMAIL = process.env.EMAIL_TO || "lorenzoboschi39@gmail.com";
const SENDER_EMAIL = process.env.EMAIL_FROM || "lorenzoboschi39@gmail.com";
const COMPANY_NAME = "Desmare";
const COMPANY_WEBSITE = "https://desmare.it"; // Adjust as needed

// Function to send contact form emails
export async function sendContactEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  if (isDevelopment && !hasSendGridKey) {
    console.log("Development mode: would send contact email to company");
    console.log({
      name,
      email,
      message,
      to: COMPANY_EMAIL,
      from: SENDER_EMAIL,
    });
    return;
  }

  // Log that we're sending emails
  console.log(`Sending contact form notification to ${COMPANY_EMAIL}`);

  try {
    // Get current date for email timestamps
    const currentDate = new Date().toISOString();

    // A unique message ID can help with deliverability and tracking
    const messageId = `contact-${Date.now()}-${Math.floor(
      Math.random() * 1000
    )}`;

    // Prepare email data for company notification
    const companyEmail = {
      to: COMPANY_EMAIL,
      from: {
        email: SENDER_EMAIL.includes("<")
          ? SENDER_EMAIL.match(/<(.+)>/)?.[1] || SENDER_EMAIL
          : SENDER_EMAIL,
        name: COMPANY_NAME + " Website",
      },
      replyTo: email,
      subject: `${COMPANY_NAME} Contatto: ${name}`,
      text: `
MESSAGGIO DAL SITO WEB ${COMPANY_NAME}

Nome: ${name}
Email: ${email}
Data: ${new Date().toLocaleString("it-IT")}

Messaggio:
${message}

--
Email generata automaticamente dal modulo di contatto del sito ${COMPANY_WEBSITE}
Non rispondere a questa email. Per contattare l'utente, utilizza l'indirizzo: ${email}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
          <h2 style="color: #388E3C; margin-top: 0;">Nuovo messaggio dal sito web ${COMPANY_NAME}</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Data:</strong> ${new Date().toLocaleString("it-IT")}</p>
          <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #388E3C; border-radius: 3px;">
            <p><strong>Messaggio:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;">
          <p style="font-size: 12px; color: #666;">Email generata automaticamente dal modulo di contatto del sito ${COMPANY_WEBSITE}<br>
          Non rispondere a questa email. Per contattare l'utente, utilizza l'indirizzo: <a href="mailto:${email}">${email}</a></p>
        </div>
      `,
      headers: {
        "X-Entity-Ref-ID": messageId,
        "List-Unsubscribe": `<mailto:${SENDER_EMAIL}?subject=unsubscribe>`,
        Precedence: "Bulk",
      },
      categories: ["contact_form", "website"],
      customArgs: {
        app: "desmare_website",
        type: "contact_form",
      },
    };

    // Prepare confirmation email to sender
    const confirmationEmail = {
      to: email,
      from: {
        email: SENDER_EMAIL.includes("<")
          ? SENDER_EMAIL.match(/<(.+)>/)?.[1] || SENDER_EMAIL
          : SENDER_EMAIL,
        name: COMPANY_NAME,
      },
      subject: `${COMPANY_NAME} - Conferma ricezione messaggio`,
      text: `
Gentile ${name},

Grazie per averci contattato tramite il nostro sito web.

Abbiamo ricevuto il tuo messaggio e ti risponderemo il prima possibile all'indirizzo email fornito (${email}).

Riepilogo della richiesta:
- Data e ora: ${new Date().toLocaleString("it-IT")}
- Messaggio: 
"${message.substring(0, 100)}${message.length > 100 ? "..." : ""}"

Se hai domande urgenti, puoi contattarci direttamente ai seguenti recapiti:
Telefono: [Inserire numero di telefono]
Email: ${COMPANY_EMAIL}

Cordiali saluti,
Il Team di ${COMPANY_NAME}
${COMPANY_WEBSITE}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
          <h2 style="color: #388E3C; margin-top: 0;">Abbiamo ricevuto il tuo messaggio</h2>
          
          <p>Gentile ${name},</p>
          
          <p>Grazie per averci contattato tramite il nostro sito web.</p>
          
          <p>Abbiamo ricevuto il tuo messaggio e ti risponderemo il prima possibile all'indirizzo email fornito (${email}).</p>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #388E3C; border-radius: 3px;">
            <p><strong>Riepilogo della richiesta:</strong></p>
            <p><strong>Data e ora:</strong> ${new Date().toLocaleString(
              "it-IT"
            )}</p>
            <p><strong>Messaggio:</strong> "${message.substring(0, 100)}${
        message.length > 100 ? "..." : ""
      }"</p>
          </div>
          
          <p>Se hai domande urgenti, puoi contattarci direttamente ai seguenti recapiti:</p>
          <ul>
            <li>Telefono: [Inserire numero di telefono]</li>
            <li>Email: <a href="mailto:${COMPANY_EMAIL}">${COMPANY_EMAIL}</a></li>
          </ul>
          
          <p>Cordiali saluti,<br>
          Il Team di ${COMPANY_NAME}</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea; font-size: 12px; color: #666; text-align: center;">
            <p>${COMPANY_NAME} | <a href="${COMPANY_WEBSITE}" style="color: #388E3C; text-decoration: none;">${COMPANY_WEBSITE}</a></p>
            <p>Questa è un'email automatica, si prega di non rispondere.</p>
          </div>
        </div>
      `,
      headers: {
        "X-Entity-Ref-ID": `${messageId}-confirmation`,
        "List-Unsubscribe": `<mailto:${SENDER_EMAIL}?subject=unsubscribe>`,
        Precedence: "Bulk",
      },
      categories: ["contact_form_confirmation", "website"],
      customArgs: {
        app: "desmare_website",
        type: "contact_confirmation",
      },
    };

    // Send company notification first
    await sgMail.send(companyEmail);
    console.log("Company notification email sent successfully");

    // Then send confirmation to user
    await sgMail.send(confirmationEmail);
    console.log("User confirmation email sent successfully");
  } catch (error: any) {
    console.error("Error sending emails:", error);
    if (error.response) {
      console.error("SendGrid error details:", error.response.body);
    }
    throw error; // Re-throw to be handled by the API route
  }
}

// Function to send quote request emails
export async function sendQuoteRequestEmail({
  name,
  email,
  phone,
  service,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  if (isDevelopment && !hasSendGridKey) {
    console.log("Development mode: would send quote request email");
    console.log({
      name,
      email,
      phone,
      service,
      message,
      to: COMPANY_EMAIL,
      from: SENDER_EMAIL,
    });
    return;
  }

  // Log that we're sending emails
  console.log(`Sending quote request notification to ${COMPANY_EMAIL}`);

  try {
    // A unique message ID can help with deliverability and tracking
    const messageId = `quote-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    // Prepare email data for sales team
    const salesEmail = {
      to: COMPANY_EMAIL,
      from: {
        email: SENDER_EMAIL.includes("<")
          ? SENDER_EMAIL.match(/<(.+)>/)?.[1] || SENDER_EMAIL
          : SENDER_EMAIL,
        name: COMPANY_NAME + " Website",
      },
      replyTo: email,
      subject: `${COMPANY_NAME} Preventivo: ${service} - ${name}`,
      text: `
RICHIESTA DI PREVENTIVO DAL SITO WEB ${COMPANY_NAME}

Nome: ${name}
Email: ${email}
Telefono: ${phone}
Servizio richiesto: ${service}
Data: ${new Date().toLocaleString("it-IT")}

Messaggio:
${message}

--
Email generata automaticamente dal modulo di richiesta preventivi del sito ${COMPANY_WEBSITE}
Non rispondere a questa email. Per contattare il cliente, utilizza l'indirizzo email o il numero di telefono forniti.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
          <h2 style="color: #388E3C; margin-top: 0;">Nuova richiesta di preventivo</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Telefono:</strong> ${phone}</p>
          <p><strong>Servizio richiesto:</strong> ${service}</p>
          <p><strong>Data:</strong> ${new Date().toLocaleString("it-IT")}</p>
          <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #388E3C; border-radius: 3px;">
            <p><strong>Messaggio:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;">
          <p style="font-size: 12px; color: #666;">Email generata automaticamente dal modulo di richiesta preventivi del sito ${COMPANY_WEBSITE}<br>
          Non rispondere a questa email. Per contattare il cliente, utilizza l'indirizzo email o il numero di telefono forniti.</p>
        </div>
      `,
      headers: {
        "X-Entity-Ref-ID": messageId,
        "List-Unsubscribe": `<mailto:${SENDER_EMAIL}?subject=unsubscribe>`,
        Precedence: "Bulk",
      },
      categories: ["quote_request", "website"],
      customArgs: {
        app: "desmare_website",
        type: "quote_request",
      },
    };

    // Prepare confirmation email to requester
    const confirmationEmail = {
      to: email,
      from: {
        email: SENDER_EMAIL.includes("<")
          ? SENDER_EMAIL.match(/<(.+)>/)?.[1] || SENDER_EMAIL
          : SENDER_EMAIL,
        name: COMPANY_NAME,
      },
      subject: `${COMPANY_NAME} - Conferma richiesta preventivo per ${service}`,
      text: `
Gentile ${name},

Grazie per la tua richiesta di preventivo per il servizio di ${service}.

Abbiamo ricevuto la tua richiesta e il nostro team la esaminerà il prima possibile. Ti contatteremo all'indirizzo email o al numero di telefono forniti.

Riepilogo della richiesta:
- Servizio: ${service}
- Data e ora: ${new Date().toLocaleString("it-IT")}
- Telefono: ${phone}

Se hai domande urgenti, puoi contattarci direttamente ai seguenti recapiti:
Telefono: [Inserire numero di telefono]
Email: ${COMPANY_EMAIL}

Cordiali saluti,
Il Team di ${COMPANY_NAME}
${COMPANY_WEBSITE}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
          <h2 style="color: #388E3C; margin-top: 0;">Abbiamo ricevuto la tua richiesta di preventivo</h2>
          
          <p>Gentile ${name},</p>
          
          <p>Grazie per la tua richiesta di preventivo per il servizio di <strong>${service}</strong>.</p>
          
          <p>Abbiamo ricevuto la tua richiesta e il nostro team la esaminerà il prima possibile. Ti contatteremo all'indirizzo email o al numero di telefono forniti.</p>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #388E3C; border-radius: 3px;">
            <p><strong>Riepilogo della richiesta:</strong></p>
            <p><strong>Servizio:</strong> ${service}</p>
            <p><strong>Data e ora:</strong> ${new Date().toLocaleString(
              "it-IT"
            )}</p>
            <p><strong>Telefono:</strong> ${phone}</p>
          </div>
          
          <p>Se hai domande urgenti, puoi contattarci direttamente ai seguenti recapiti:</p>
          <ul>
            <li>Telefono: [Inserire numero di telefono]</li>
            <li>Email: <a href="mailto:${COMPANY_EMAIL}">${COMPANY_EMAIL}</a></li>
          </ul>
          
          <p>Cordiali saluti,<br>
          Il Team di ${COMPANY_NAME}</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea; font-size: 12px; color: #666; text-align: center;">
            <p>${COMPANY_NAME} | <a href="${COMPANY_WEBSITE}" style="color: #388E3C; text-decoration: none;">${COMPANY_WEBSITE}</a></p>
            <p>Questa è un'email automatica, si prega di non rispondere.</p>
          </div>
        </div>
      `,
      headers: {
        "X-Entity-Ref-ID": `${messageId}-confirmation`,
        "List-Unsubscribe": `<mailto:${SENDER_EMAIL}?subject=unsubscribe>`,
        Precedence: "Bulk",
      },
      categories: ["quote_request_confirmation", "website"],
      customArgs: {
        app: "desmare_website",
        type: "quote_confirmation",
      },
    };

    // Send company notification first
    await sgMail.send(salesEmail);
    console.log("Company quote notification email sent successfully");

    // Then send confirmation to user
    await sgMail.send(confirmationEmail);
    console.log("User quote confirmation email sent successfully");
  } catch (error: any) {
    console.error("Error sending emails:", error);
    if (error.response) {
      console.error("SendGrid error details:", error.response.body);
    }
    throw error; // Re-throw to be handled by the API route
  }
}
