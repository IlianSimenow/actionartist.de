/**
 * prompt: Enable Resend for the contact form — POST /api/contact sends enquiry emails
 */
import type { APIRoute } from 'astro';
import {
  RESEND_API_KEY,
  CONTACT_TO_EMAIL,

  RESEND_FROM_EMAIL,
} from 'astro:env/server';
import { Resend } from 'resend';

export const prerender = false;

function jsonResponse(body: Record<string, unknown>, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

/** Escape user input before inserting into HTML email body */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Resend test sender only delivers to RESEND_DELIVERY_EMAIL until actionartist.de is verified */
function resolveRecipient(from: string, contactTo: string) {
  const usingTestSender = from.includes('onboarding@resend.dev');
  if (!usingTestSender) return contactTo;
  return contactTo;
}

export const POST: APIRoute = async ({ request }) => {
  const apiKey = RESEND_API_KEY;
  const contactToEmail = CONTACT_TO_EMAIL;
  const fromEmail = RESEND_FROM_EMAIL;

  if (!apiKey || !contactToEmail) {
    console.error('Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL not configured');
    return jsonResponse({ error: 'Server mail configuration missing' }, 503);
  }

  const toEmail = resolveRecipient(fromEmail, contactToEmail);
  if (!toEmail) {
    return jsonResponse({ error: 'Server mail configuration missing' }, 503);
  }

  let body: Record<string, string>;

  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid request body' }, 400);
  }

  const name = body.name?.trim() ?? '';
  const email = body.email?.trim() ?? '';
  const phone = body.phone?.trim() ?? '';
  const type = body.type?.trim() ?? '';
  const message = body.message?.trim() ?? '';
  const lang = body.lang ?? 'de';

  if (!name || !email || !message) {
    return jsonResponse({ error: 'Missing required fields' }, 400);
  }

  const isDE = lang !== 'en';
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeType = escapeHtml(type);
  const safeMessage = escapeHtml(message);

  const subject = isDE
    ? `Neue Anfrage von ${name}${type ? ` — ${type}` : ''}`
    : `New enquiry from ${name}${type ? ` — ${type}` : ''}`;

  const usingTestSender = fromEmail.includes('onboarding@resend.dev');
  const testNotice = usingTestSender && contactToEmail !== toEmail
    ? `<p style="margin:0 0 20px;padding:12px 16px;background:#fff7ed;border-left:3px solid #ff6b2b;font-size:13px;color:#555;">
        ${isDE
          ? `Testmodus: Zustellung an <strong>${escapeHtml(toEmail)}</strong>. Zieladresse nach Domain-Verifizierung: <strong>${escapeHtml(contactToEmail)}</strong>.`
          : `Test mode: Delivering to <strong>${escapeHtml(toEmail)}</strong>. Target after domain verification: <strong>${escapeHtml(contactToEmail)}</strong>.`}
      </p>`
    : '';

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
      <div style="background:#1a1a1a;padding:24px 32px;margin-bottom:0">
        <span style="color:#ff6b2b;font-size:12px;letter-spacing:3px;text-transform:uppercase;font-weight:600">
          ${isDE ? 'Neue Kontaktanfrage' : 'New Contact Enquiry'} — actionartist.de
        </span>
      </div>
      <div style="border:1px solid #e5e5e5;border-top:none;padding:32px">
        ${testNotice}
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;width:120px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px">Name</td>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-weight:600">${safeName}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px">E-Mail</td>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0"><a href="mailto:${safeEmail}" style="color:#ff6b2b">${safeEmail}</a></td>
          </tr>
          ${phone ? `<tr>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px">${isDE ? 'Telefon' : 'Phone'}</td>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0">${safePhone}</td>
          </tr>` : ''}
          ${type ? `<tr>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px">${isDE ? 'Art der Anfrage' : 'Type'}</td>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0">${safeType}</td>
          </tr>` : ''}
        </table>
        <div style="margin-top:24px">
          <div style="color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px">${isDE ? 'Nachricht' : 'Message'}</div>
          <div style="background:#f9f9f9;padding:20px;border-left:3px solid #ff6b2b;white-space:pre-wrap;line-height:1.6">${safeMessage}</div>
        </div>
        <div style="margin-top:24px;padding-top:24px;border-top:1px solid #f0f0f0">
          <a href="mailto:${safeEmail}?subject=${encodeURIComponent(`Re: ${subject}`)}" style="display:inline-block;background:#ff6b2b;color:#fff;padding:12px 24px;text-decoration:none;font-size:14px;font-weight:600;letter-spacing:1px">
            ${isDE ? 'Direkt antworten' : 'Reply directly'}
          </a>
        </div>
      </div>
    </div>
  `;

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: email,
    subject,
    html,
  });

  if (error) {
    console.error('Resend error:', error);
    return jsonResponse({ error: 'Failed to send email', detail: error.message }, 500);
  }

  return jsonResponse({ ok: true, id: data?.id }, 200);
};
