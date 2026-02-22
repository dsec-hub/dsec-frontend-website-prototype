import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ---------------------------------------------------------------------------
// In-memory rate limiting — max 5 submissions per IP per hour
// ---------------------------------------------------------------------------
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count++;
  return false;
}

// ---------------------------------------------------------------------------
// Input sanitisation — strip HTML tags to prevent XSS in email body
// ---------------------------------------------------------------------------
function sanitise(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// ---------------------------------------------------------------------------
// HTML email template
// ---------------------------------------------------------------------------
function buildHtmlEmail(fields: {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}): string {
  const { name, email, subject, message, timestamp } = fields;
  // Pre-sanitised values are used inside the email HTML
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DSEC Contact Form</title>
</head>
<body style="margin:0;padding:0;background-color:#0f0f0f;font-family:system-ui,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f0f0f;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#1a1a1a;border-radius:12px;overflow:hidden;border:1px solid #2a2a2a;max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#7c3aed,#db2777);padding:32px 40px;">
              <p style="margin:0;font-size:13px;color:#e9d5ff;letter-spacing:0.1em;text-transform:uppercase;">Deakin Software Engineering Club</p>
              <h1 style="margin:8px 0 0;font-size:24px;color:#ffffff;font-weight:700;">New Contact Message</h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom:24px;">
                    <p style="margin:0 0 4px;font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.08em;">From</p>
                    <p style="margin:0;font-size:16px;color:#f9fafb;font-weight:600;">${name}</p>
                    <p style="margin:4px 0 0;font-size:14px;color:#9ca3af;">
                      <a href="mailto:${email}" style="color:#a78bfa;text-decoration:none;">${email}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:24px;">
                    <p style="margin:0 0 4px;font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.08em;">Subject</p>
                    <p style="margin:0;font-size:16px;color:#f9fafb;font-weight:600;">${subject}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:24px;">
                    <p style="margin:0 0 12px;font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.08em;">Message</p>
                    <div style="background-color:#111111;border-left:3px solid #7c3aed;border-radius:0 8px 8px 0;padding:20px 24px;">
                      <p style="margin:0;font-size:15px;color:#d1d5db;line-height:1.7;white-space:pre-wrap;">${message}</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color:#111111;padding:20px 40px;border-top:1px solid #2a2a2a;">
              <p style="margin:0;font-size:12px;color:#4b5563;">Received at ${timestamp} · Sent via dsec.club contact form</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ---------------------------------------------------------------------------
// POST handler
// ---------------------------------------------------------------------------
export async function POST(req: NextRequest): Promise<NextResponse> {
  // Resolve client IP
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait before submitting again.' },
      { status: 429 },
    );
  }

  // Parse body
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  // Honeypot check — bots fill hidden fields; humans leave them blank
  if (body.website !== '' && body.website != null) {
    // Silently succeed so bots don't know they were blocked
    return NextResponse.json({ success: true });
  }

  // Server-side validation
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const subject = typeof body.subject === 'string' ? body.subject.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  const errors: string[] = [];
  if (!name) errors.push('Name is required.');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('A valid email is required.');
  if (!subject) errors.push('Subject is required.');
  if (!message) errors.push('Message is required.');
  if (message.length > 5000) errors.push('Message must be under 5,000 characters.');

  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join(' ') }, { status: 400 });
  }

  // Sanitise for HTML email
  const safe = {
    name: sanitise(name),
    email: sanitise(email),
    subject: sanitise(subject),
    message: sanitise(message),
    timestamp: new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' }),
  };

  // Build transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? 'smtp.hostinger.com',
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    authMethod: 'LOGIN',
  });

  const mailOptions = {
    from: `"DSEC Contact Form" <${process.env.SMTP_USER ?? 'contact@dsec.club'}>`,
    to: process.env.SMTP_USER ?? 'contact@dsec.club',
    replyTo: `"${safe.name}" <${email}>`,
    subject: `[DSEC Contact] ${subject}`,
    html: buildHtmlEmail(safe),
    text: [
      `New contact message via dsec.club`,
      ``,
      `From:    ${name} <${email}>`,
      `Subject: ${subject}`,
      `Time:    ${safe.timestamp}`,
      ``,
      `Message:`,
      message,
    ].join('\n'),
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[/api/contact] SMTP send failed:', err);
    return NextResponse.json(
      { error: 'Failed to send your message. Please try again later.' },
      { status: 500 },
    );
  }
}
