import type { APIRoute } from "astro";

import { isValidEmail, jsonResponse } from "../../lib/api/json";
import { verifyRecaptchaToken } from "../../lib/email/recaptcha";
import { getContactTransporter } from "../../lib/email/transporter";
import { emailEnv } from "../../lib/email/env";

export const prerender = false;

const createAdminAppointmentTemplate = (data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
}) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Appointment Booking</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #18B0E6; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #18B0E6; }
    .value { margin-top: 5px; }
    .appointment { background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 15px 0; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Appointment Booking</h1>
      <p>TechTiz Website</p>
    </div>
    <div class="content">
      <div class="appointment">
        <h3>Appointment Details</h3>
        <div class="field">
          <div class="label">Date:</div>
          <div class="value">${data.date}</div>
        </div>
        <div class="field">
          <div class="label">Time:</div>
          <div class="value">${data.time}</div>
        </div>
      </div>
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
        <div class="value">${data.phone}</div>
      </div>
    </div>
    <div class="footer">
      <p>This appointment was booked through the TechTiz calendar.</p>
      <p>Timestamp: ${new Date().toLocaleString()}</p>
    </div>
  </div>
</body>
</html>
`;

const createAppointmentConfirmationTemplate = (data: {
  firstName: string;
  lastName: string;
  date: string;
  time: string;
}) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Appointment Confirmed - TechTiz</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #18B0E6; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .appointment { background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    .cta { background: #18B0E6; color: white; padding: 15px; text-align: center; margin: 20px 0; }
    .cta a { color: white; text-decoration: none; font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Appointment Confirmed!</h1>
      <p>TechTiz Meeting</p>
    </div>
    <div class="content">
      <p>Dear ${data.firstName},</p>
      <p>Your appointment with TechTiz has been successfully confirmed!</p>
      <div class="appointment">
        <h3>Meeting Details</h3>
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Time:</strong> ${data.time}</p>
        <p><strong>Duration:</strong> 30 minutes</p>
      </div>
      <p>What to expect:</p>
      <ul>
        <li>We'll discuss your project requirements</li>
        <li>Explore potential solutions and approaches</li>
        <li>Answer any questions you may have</li>
        <li>Provide next steps and recommendations</li>
      </ul>
      <p><strong>Meeting Link:</strong> We'll send you a video call link 15 minutes before the meeting.</p>
      <a href="https://techtiz.co" style="text-decoration:none;">
        <div class="cta">Visit Our Website</div>
      </a>
      <p>If you need to reschedule or cancel, please contact us at least 24 hours in advance.</p>
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
    const { firstName, lastName, email, phone, date, time, recaptchaToken } =
      body;

    if (!firstName || !lastName || !email || !phone || !date || !time) {
      return jsonResponse({ error: "Missing required fields" }, 400);
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
        subject: "New Appointment Booking - TechTiz",
        html: createAdminAppointmentTemplate({
          firstName,
          lastName,
          email,
          phone,
          date,
          time,
        }),
      }),
      transporter.sendMail({
        from: fromAddress,
        to: email,
        subject: "Appointment Confirmed - TechTiz",
        html: createAppointmentConfirmationTemplate({
          firstName,
          lastName,
          date,
          time,
        }),
      }),
    ]);

    return jsonResponse({ message: "Appointment booked successfully" });
  } catch (error) {
    console.error("Appointment booking error:", error);
    return jsonResponse({ error: "Failed to book appointment" }, 500);
  }
};
