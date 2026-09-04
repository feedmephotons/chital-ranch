import type { VercelRequest, VercelResponse } from '@vercel/node';

// Called by a Supabase database webhook whenever a row lands in
// form_submissions. The trigger lives on the table rather than in the
// browser, so a submission is emailed even if the visitor closes the tab
// the instant they hit send.

interface Submission {
  id: number;
  created_at: string;
  form_type: 'contact' | 'visit';
  name: string;
  email: string;
  phone: string | null;
  interest: string | null;
  message: string | null;
  preferred_date: string | null;
  party_size: number | null;
  source_path: string | null;
}

const escapeHtml = (value: string): string =>
  value.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string)
  );

const row = (label: string, value: string | number | null): string => {
  if (value === null || value === '') return '';
  return `<tr>
    <td style="padding:6px 16px 6px 0;color:#64748b;white-space:nowrap;vertical-align:top">${label}</td>
    <td style="padding:6px 0;color:#0f172a"><strong>${escapeHtml(String(value))}</strong></td>
  </tr>`;
};

const buildEmail = (s: Submission) => {
  const isVisit = s.form_type === 'visit';
  const subject = isVisit
    ? `Visit request from ${s.name}`
    : `Website inquiry from ${s.name}${s.interest ? ` — ${s.interest}` : ''}`;

  const html = `<div style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;max-width:560px">
  <p style="color:#64748b;margin:0 0 4px;font-size:13px;text-transform:uppercase;letter-spacing:.08em">
    ${isVisit ? 'Visit Request' : 'Contact Form'} &middot; crfallow.com
  </p>
  <h2 style="margin:0 0 20px;color:#0f172a;font-size:22px">${escapeHtml(s.name)}</h2>
  <table style="border-collapse:collapse;font-size:15px">
    ${row('Email', s.email)}
    ${row('Phone', s.phone)}
    ${row('Interested in', s.interest)}
    ${row('Preferred date', s.preferred_date)}
    ${row('Party size', s.party_size)}
    ${row('Submitted', new Date(s.created_at).toLocaleString('en-US', { timeZone: 'America/Chicago' }) + ' CT')}
    ${row('Page', s.source_path)}
  </table>
  ${
    s.message
      ? `<p style="margin:20px 0 6px;color:#64748b;font-size:13px;text-transform:uppercase;letter-spacing:.08em">Message</p>
         <p style="margin:0;color:#0f172a;font-size:15px;line-height:1.6;white-space:pre-wrap">${escapeHtml(s.message)}</p>`
      : ''
  }
  <p style="margin:28px 0 0;color:#94a3b8;font-size:13px">
    Reply to this email to answer ${escapeHtml(s.name)} directly. Submission #${s.id}.
  </p>
</div>`;

  const text = [
    `${isVisit ? 'Visit request' : 'Website inquiry'} from ${s.name}`,
    ``,
    `Email: ${s.email}`,
    s.phone ? `Phone: ${s.phone}` : '',
    s.interest ? `Interested in: ${s.interest}` : '',
    s.preferred_date ? `Preferred date: ${s.preferred_date}` : '',
    s.party_size ? `Party size: ${s.party_size}` : '',
    s.source_path ? `Page: ${s.source_path}` : '',
    ``,
    s.message ? `Message:\n${s.message}` : '',
    ``,
    `Submission #${s.id}`,
  ]
    .filter(Boolean)
    .join('\n');

  return { subject, html, text };
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const expected = process.env.SUBMISSION_WEBHOOK_SECRET;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL_TO;
  const from = process.env.NOTIFY_EMAIL_FROM;

  if (!expected || !apiKey || !to || !from) {
    console.error('Notification endpoint is missing configuration.');
    return res.status(500).json({ error: 'Not configured' });
  }

  // Without this the endpoint is a public button for sending mail to the ranch.
  if (req.headers['x-webhook-secret'] !== expected) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Supabase sends { type, table, record, old_record, schema }.
  const record: Submission | undefined = req.body?.record ?? req.body;
  if (!record?.email || !record?.name) {
    return res.status(400).json({ error: 'Malformed payload' });
  }

  const { subject, html, text } = buildEmail(record);

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      html,
      text,
      // So hitting reply in the inbox answers the customer, not the robot.
      reply_to: record.email,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error('Resend rejected the message:', response.status, detail);
    return res.status(502).json({ error: 'Send failed' });
  }

  const sent = await response.json();
  return res.status(200).json({ ok: true, id: sent.id });
}
