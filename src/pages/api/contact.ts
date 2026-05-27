import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const TO_EMAIL = import.meta.env.CONTACT_TO_EMAIL;
const FROM_EMAIL = 'Kontakt <onboarding@resend.dev>';

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, string>;

  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { name, email, phone, type, message, lang } = body;

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const isDE = lang !== 'en';
  const subject = isDE
    ? `Neue Anfrage von ${name}${type ? ` — ${type}` : ''}`
    : `New enquiry from ${name}${type ? ` — ${type}` : ''}`;

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
      <div style="background:#1a1a1a;padding:24px 32px;margin-bottom:0">
        <span style="color:#ff6b2b;font-size:12px;letter-spacing:3px;text-transform:uppercase;font-weight:600">
          ${isDE ? 'Neue Kontaktanfrage' : 'New Contact Enquiry'} — actionartist.de
        </span>
      </div>
      <div style="border:1px solid #e5e5e5;border-top:none;padding:32px">
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;width:120px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px">${isDE ? 'Name' : 'Name'}</td>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-weight:600">${name}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px">E-Mail</td>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0"><a href="mailto:${email}" style="color:#ff6b2b">${email}</a></td>
          </tr>
          ${phone ? `<tr>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px">${isDE ? 'Telefon' : 'Phone'}</td>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0">${phone}</td>
          </tr>` : ''}
          ${type ? `<tr>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px">${isDE ? 'Art der Anfrage' : 'Type'}</td>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0">${type}</td>
          </tr>` : ''}
        </table>
        <div style="margin-top:24px">
          <div style="color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px">${isDE ? 'Nachricht' : 'Message'}</div>
          <div style="background:#f9f9f9;padding:20px;border-left:3px solid #ff6b2b;white-space:pre-wrap;line-height:1.6">${message}</div>
        </div>
        <div style="margin-top:24px;padding-top:24px;border-top:1px solid #f0f0f0">
          <a href="mailto:${email}?subject=Re: ${subject}" style="display:inline-block;background:#ff6b2b;color:#fff;padding:12px 24px;text-decoration:none;font-size:14px;font-weight:600;letter-spacing:1px">
            ${isDE ? 'Direkt antworten' : 'Reply directly'}
          </a>
        </div>
      </div>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject,
    html,
  });

  if (error) {
    console.error('Resend error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
