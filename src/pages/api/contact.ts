import type { APIRoute } from "astro";

import { isValidEmail, jsonResponse } from "../../lib/api/json";
import { verifyRecaptchaToken } from "../../lib/email/recaptcha";
import { getContactTransporter } from "../../lib/email/transporter";
import { emailEnv } from "../../lib/email/env";

export const prerender = false;

const createAdminEmailTemplate = (data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  subscribe: boolean;
}) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Contact Form Submission</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #18B0E6; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #18B0E6; }
    .value { margin-top: 5px; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Form Submission</h1>
      <p>TechTiz Website</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${data.firstName} ${data.lastName}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value">${data.email}</div>
      </div>
      <div class="field">
        <div class="label">Phone:</div>
        <div class="value">${data.phone || "Not provided"}</div>
      </div>
      <div class="field">
        <div class="label">Message:</div>
        <div class="value">${data.message}</div>
      </div>
      <div class="field">
        <div class="label">Subscribe to Newsletter:</div>
        <div class="value">${data.subscribe ? "Yes" : "No"}</div>
      </div>
    </div>
    <div class="footer">
      <p>This email was sent from the TechTiz contact form.</p>
      <p>Timestamp: ${new Date().toLocaleString()}</p>
    </div>
  </div>
</body>
</html>
`;

const createThankYouEmailTemplate = (firstName: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Thank You - TechTiz</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #18B0E6; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    .cta { background: #18B0E6; color: white; padding: 15px; text-align: center; margin: 20px 0; }
    .cta a { color: white; text-decoration: none; font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Contacting TechTiz!</h1>
    </div>
    <div class="content">
      <p>Dear ${firstName},</p>
      <p>Thank you for reaching out to us! We have received your message and our team will get back to you within 24-48 hours.</p>
      <p>In the meantime, here's what you can expect:</p>
      <ul>
        <li>We'll review your inquiry carefully</li>
        <li>Our experts will prepare a personalized response</li>
        <li>We may schedule a call to discuss your requirements in detail</li>
      </ul>
      <a href="https://techtiz.co" style="text-decoration:none;">
        <div class="cta">Visit Our Website</div>
      </a>
      <p>Best regards,<br>The TechTiz Team</p>
    </div>
    <div class="footer">
      <p>TechTiz - Transforming businesses with AI and automation</p>
      <p>Email: contact@techtiz.co | Phone: +92 326 1199244</p>
    </div>
  </div>
</body>
</html>
`;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      message,
      subscribe,
      company,
      recaptchaToken,
    } = body;

    if (company) {
      return jsonResponse({ error: "Bot detection triggered" }, 400);
    }

    if (!firstName || !lastName || !email || !message) {
      return jsonResponse({ error: "Missing required fields" }, 400);
    }

    const recaptchaCheck = await verifyRecaptchaToken(recaptchaToken);
    if (!recaptchaCheck.ok) {
      return jsonResponse({ error: recaptchaCheck.error }, recaptchaCheck.status);
    }

    if (!isValidEmail(email)) {
      return jsonResponse({ error: "Invalid email format" }, 400);
    }

    const fromAddress = emailEnv.contactUser();
    const transporter = getContactTransporter();

    await Promise.all([
      transporter.sendMail({
        from: fromAddress,
        to: fromAddress,
        subject: "New Contact Form Submission - TechTiz",
        html: createAdminEmailTemplate({
          firstName,
          lastName,
          email,
          phone,
          message,
          subscribe: Boolean(subscribe),
        }),
      }),
      transporter.sendMail({
        from: fromAddress,
        to: email,
        subject: "Thank You for Contacting TechTiz",
        html: createThankYouEmailTemplate(firstName),
      }),
    ]);

    return jsonResponse({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    return jsonResponse({ error: "Failed to send emails" }, 500);
  }
};
