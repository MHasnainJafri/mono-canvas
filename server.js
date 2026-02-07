import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

const resend = new Resend(process.env.RESEND_API_KEY);
const OWNER_EMAIL = 'eng.muhammadhasnain@gmail.com';

app.use(cors());
app.use(express.json());

// Serve static frontend (Vite build output)
app.use(express.static(join(__dirname, 'dist')));

// Minimalistic email template - notification to owner
function ownerTemplate({ name, email, subject, message }) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb;padding:40px 20px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background-color:#ffffff;border-radius:8px;border:1px solid #e5e7eb;">
        
        <!-- Header -->
        <tr><td style="padding:32px 32px 0;">
          <p style="margin:0;font-size:13px;color:#6b7280;letter-spacing:0.05em;text-transform:uppercase;">New Inquiry</p>
          <h1 style="margin:8px 0 0;font-size:20px;font-weight:600;color:#111827;">${subject}</h1>
        </td></tr>

        <!-- Divider -->
        <tr><td style="padding:20px 32px;">
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:0;">
        </td></tr>

        <!-- Sender Info -->
        <tr><td style="padding:0 32px;">
          <table cellpadding="0" cellspacing="0" style="width:100%;">
            <tr>
              <td style="padding-bottom:12px;">
                <p style="margin:0;font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.05em;">From</p>
                <p style="margin:4px 0 0;font-size:15px;color:#111827;font-weight:500;">${name}</p>
              </td>
              <td style="padding-bottom:12px;text-align:right;">
                <p style="margin:0;font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.05em;">Email</p>
                <a href="mailto:${email}" style="margin:4px 0 0;font-size:15px;color:#111827;text-decoration:none;display:block;">${email}</a>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- Message -->
        <tr><td style="padding:12px 32px 32px;">
          <p style="margin:0 0 8px;font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.05em;">Message</p>
          <p style="margin:0;font-size:14px;color:#374151;line-height:1.6;">${message.replace(/\n/g, '<br>')}</p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:16px 32px;background-color:#f9fafb;border-top:1px solid #e5e7eb;border-radius:0 0 8px 8px;">
          <p style="margin:0;font-size:12px;color:#9ca3af;text-align:center;">Reply directly to this email to respond to ${name}.</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// Minimalistic email template - confirmation to user
function userTemplate({ name, subject, message }) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb;padding:40px 20px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background-color:#ffffff;border-radius:8px;border:1px solid #e5e7eb;">
        
        <!-- Header -->
        <tr><td style="padding:32px 32px 0;">
          <h1 style="margin:0;font-size:20px;font-weight:600;color:#111827;">Hi ${name},</h1>
          <p style="margin:12px 0 0;font-size:14px;color:#6b7280;line-height:1.6;">Thank you for reaching out. I've received your message and will get back to you within 24 hours.</p>
        </td></tr>

        <!-- Divider -->
        <tr><td style="padding:20px 32px;">
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:0;">
        </td></tr>

        <!-- Message Summary -->
        <tr><td style="padding:0 32px;">
          <p style="margin:0 0 4px;font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.05em;">Your message</p>
          <p style="margin:0 0 4px;font-size:15px;color:#111827;font-weight:500;">${subject}</p>
          <p style="margin:8px 0 0;font-size:13px;color:#6b7280;line-height:1.6;font-style:italic;">"${message.replace(/\n/g, '<br>')}"</p>
        </td></tr>

        <!-- CTA -->
        <tr><td style="padding:24px 32px 32px;">
          <p style="margin:0;font-size:14px;color:#374151;line-height:1.6;">In the meantime, feel free to check out my work:</p>
          <table cellpadding="0" cellspacing="0" style="margin-top:16px;">
            <tr>
              <td style="padding-right:8px;">
                <a href="https://anssol.com" style="display:inline-block;padding:8px 16px;font-size:13px;color:#111827;border:1px solid #e5e7eb;border-radius:6px;text-decoration:none;font-weight:500;">anssol.com</a>
              </td>
              <td style="padding-right:8px;">
                <a href="https://www.upwork.com/freelancers/~017303523ed7fc4024" style="display:inline-block;padding:8px 16px;font-size:13px;color:#14A800;border:1px solid #e5e7eb;border-radius:6px;text-decoration:none;font-weight:500;">Upwork</a>
              </td>
              <td>
                <a href="https://www.fiverr.com/s/qDXV4dV" style="display:inline-block;padding:8px 16px;font-size:13px;color:#1DBF73;border:1px solid #e5e7eb;border-radius:6px;text-decoration:none;font-weight:500;">Fiverr</a>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:16px 32px;background-color:#f9fafb;border-top:1px solid #e5e7eb;border-radius:0 0 8px 8px;">
          <p style="margin:0 0 2px;font-size:13px;color:#374151;font-weight:500;">Muhammad Hasnain</p>
          <p style="margin:0;font-size:12px;color:#9ca3af;">AI & Full Stack Developer &middot; CEO at Anssol</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// API endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const ownerResult = await resend.emails.send({
      from: 'Muhammad Hasnain <hello@mhasnain.com>',
      reply_to: email,
      to: [OWNER_EMAIL],
      subject: `New Inquiry: ${subject}`,
      html: ownerTemplate({ name, email, subject, message }),
    });
    console.log('Owner email result:', JSON.stringify(ownerResult, null, 2));

    const userResult = await resend.emails.send({
      from: 'Muhammad Hasnain <hello@mhasnain.com>',
      reply_to: OWNER_EMAIL,
      to: [email],
      subject: `Re: ${subject}`,
      html: userTemplate({ name, subject, message }),
    });
    console.log('User email result:', JSON.stringify(userResult, null, 2));

    res.json({ success: true, message: 'Emails sent successfully!' });
  } catch (error) {
    console.error('Resend error:', JSON.stringify(error, null, 2));
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

// SPA fallback - serve index.html for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
