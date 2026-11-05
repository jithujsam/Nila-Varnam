import type { APIRoute } from 'astro';

export const prerender = false;

const TYPES = new Set(['hospitality', 'gifting', 'commission', 'general']);
const LABEL: Record<string, string> = { hospitality: 'Hospitality project', gifting: 'Gifting', commission: 'Commission', general: 'General' };
const hits = new Map<string, number[]>(); // best-effort, per warm instance
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
const clean = (v: FormDataEntryValue | null, max: number) => String(v ?? '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max);

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');
  const reply = (status: number, body: Record<string, unknown>, location?: string) =>
    wantsJson || !location
      ? new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } })
      : new Response(null, { status: 303, headers: { Location: location } });

  const key = process.env.RESEND_API_KEY, to = process.env.ENQUIRY_TO_EMAIL, from = process.env.ENQUIRY_FROM_EMAIL;
  if (!key || !to || !from) return reply(503, { ok: false, error: 'Enquiry delivery is not configured.' });

  const ip = clientAddress || request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  if (recent.length >= 5) return reply(429, { ok: false, error: 'Too many enquiries. Please try again later.' });
  hits.set(ip, [...recent, now]);

  let fd: FormData;
  try { fd = await request.formData(); } catch { return reply(400, { ok: false, error: 'Invalid request.' }); }

  if (clean(fd.get('website'), 100)) return reply(200, { ok: true }, '/thank-you/'); // honeypot: pretend success, send nothing
  const started = Number(clean(fd.get('started'), 20));
  if (started && now - started < 2500) return reply(400, { ok: false, error: 'Please try again.' });

  const type = clean(fd.get('type'), 20);
  const name = clean(fd.get('name'), 120), email = clean(fd.get('email'), 200), phone = clean(fd.get('phone'), 60);
  const org = clean(fd.get('organisation'), 160), brief = clean(fd.get('brief'), 5000);
  if (!TYPES.has(type) || name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || brief.length < 10) {
    return reply(400, { ok: false, error: 'Please check the form and try again.' }, '/contact/');
  }

  const subject = `Enquiry (${LABEL[type]}) from ${name}`.replace(/[\r\n]/g, ' ');
  const html = `<h2>${esc(subject)}</h2><p><b>Type:</b> ${esc(LABEL[type])}</p><p><b>Name:</b> ${esc(name)}</p><p><b>Email:</b> ${esc(email)}</p>` +
    (phone ? `<p><b>Phone/WhatsApp:</b> ${esc(phone)}</p>` : '') + (org ? `<p><b>Organisation/city:</b> ${esc(org)}</p>` : '') +
    `<p><b>Brief:</b></p><p style="white-space:pre-wrap">${esc(brief)}</p>`;
  const text = `${subject}\n\nType: ${LABEL[type]}\nName: ${name}\nEmail: ${email}\n${phone ? `Phone/WhatsApp: ${phone}\n` : ''}${org ? `Organisation/city: ${org}\n` : ''}\nBrief:\n${brief}\n`;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to: to.split(',').map((s) => s.trim()), reply_to: email, subject, html, text }),
    });
    if (!res.ok) { console.error('enquiry: provider error', res.status); return reply(502, { ok: false, error: 'Could not send.' }, '/contact/'); }
  } catch { console.error('enquiry: network error'); return reply(502, { ok: false, error: 'Could not send.' }, '/contact/'); }

  console.log('enquiry delivered', { type });
  return reply(200, { ok: true }, '/thank-you/');
};
