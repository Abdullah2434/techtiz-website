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
  consent: boolean;
}) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Case Study Form Submission</title>
  <style>
    body { font-family: Arial; line-height: 1.6; color: #333; }
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
      <h1>New Case Study Form Submission</h1>
    </div>
    <div class="content">
      <div class="field"><div class="label">Name:</div><div class="value">${data.firstName} ${data.lastName}</div></div>
      <div class="field"><div class="label">Email:</div><div class="value">${data.email}</div></div>
      <div class="field"><div class="label">Phone:</div><div class="value">${data.phone || "Not provided"}</div></div>
      <div class="field"><div class="label">Consent:</div><div class="value">${data.consent ? "Yes" : "No"}</div></div>
    </div>
    <div class="footer">
      <p>Sent from TechTiz case study form</p>
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
.content { padding: 20px; background: #f9f9f9; border-radius: 8px; }
.footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
.cta { background: #18B0E6; color: white; padding: 15px; text-align: center; margin: 20px 0; border-radius: 6px; }
.cta a { color: white; text-decoration: none; font-weight: bold; }
ul { margin-left: 20px; }
</style>
</head>
<body>
<div class="container">
  <div class="header">
    <h1>Thank You for Visiting TechTiz!</h1>
  </div>
  <div class="content">
    <p>Dear ${firstName},</p>
    <p>Thank you for visiting our website, reviewing our case study, and downloading the content. We truly appreciate your interest in TechTiz and the time you took to explore our solutions.</p>
    <p>Here's what you can expect next:</p>
    <ul>
      <li>Our team may reach out to provide additional insights if needed</li>
      <li>We ensure your inquiry and interests are carefully reviewed</li>
      <li>You can always contact us for further information or support</li>
    </ul>
    <div class="cta">
      <a href="https://techtiz.co">Visit Our Website</a>
    </div>
    <p>We look forward to staying connected!</p>
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
    const { firstName, lastName, email, phone, consent, recaptchaToken } = body;

    if (!firstName || !lastName || !email || consent !== true) {
      return jsonResponse(
        { error: "Consent and required fields are mandatory" },
        400,
      );
    }

    if (!isValidEmail(email)) {
      return jsonResponse({ error: "Invalid email format" }, 400);
    }

    const recaptchaCheck = await verifyRecaptchaToken(recaptchaToken);
    if (!recaptchaCheck.ok) {
      return jsonResponse({ error: recaptchaCheck.error }, recaptchaCheck.status);
    }

    const fromAddress = emailEnv.contactUser();
    const transporter = getContactTransporter();

    await Promise.all([
      transporter.sendMail({
        from: fromAddress,
        to: fromAddress,
        subject: "New Case Study Form Submission - TechTiz",
        html: createAdminEmailTemplate({
          firstName,
          lastName,
          email,
          phone,
          consent,
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
