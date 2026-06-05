import type { APIRoute } from "astro";

import { isValidEmail, jsonResponse } from "../../lib/api/json";
import { verifyRecaptchaToken } from "../../lib/email/recaptcha";
import { getHrTransporter } from "../../lib/email/transporter";
import { emailEnv } from "../../lib/email/env";

export const prerender = false;

const createCareerAdminEmailTemplate = (data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  hasCV: boolean;
}) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Career Application</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #18B0E6; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #18B0E6; }
    .value { margin-top: 5px; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    .highlight { background: #fff3cd; padding: 10px; border-left: 4px solid #ffc107; margin: 15px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Career Application</h1>
      <p>TechTiz Careers Portal</p>
    </div>
    <div class="content">
      <div class="highlight">
        <strong>New job application received!</strong>
      </div>
      <div class="field">
        <div class="label">Applicant Name:</div>
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
        <div class="label">CV Attached:</div>
        <div class="value">${data.hasCV ? "Yes" : "No"}</div>
      </div>
      ${
        data.message
          ? `
      <div class="field">
        <div class="label">Cover Letter:</div>
        <div class="value">${data.message}</div>
      </div>
      `
          : ""
      }
      <div class="highlight">
        <strong>Next Steps:</strong>
        <ul>
          <li>Review the application and CV</li>
          <li>Schedule initial screening if qualified</li>
          <li>Send response within 3-5 business days</li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <p>This application was submitted through TechTiz Careers page.</p>
      <p>Received: ${new Date().toLocaleString()}</p>
    </div>
  </div>
</body>
</html>
`;

const createCareerThankYouEmailTemplate = (firstName: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Application Received - TechTiz Careers</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #18B0E6; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    .cta { background: #18B0E6; color: white; padding: 15px; text-align: center; margin: 20px 0; }
    .cta a { color: white; text-decoration: none; font-weight: bold; }
    .timeline { background: #e8f4fd; padding: 15px; border-left: 4px solid #18B0E6; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Application Received!</h1>
      <p>Thank you for applying to TechTiz</p>
    </div>
    <div class="content">
      <p>Dear ${firstName},</p>
      <p>Thank you for your interest in joining the TechTiz team! We have successfully received your application and are excited to learn more about you.</p>
      <div class="timeline">
        <h3>What happens next?</h3>
        <ul>
          <li><strong>Application Review (3-5 days):</strong> Our HR team will carefully review your application</li>
          <li><strong>Initial Screening:</strong> Qualified candidates will be contacted for a brief phone/video call</li>
          <li><strong>Technical Assessment:</strong> Role-specific evaluation of your skills</li>
          <li><strong>Final Interview:</strong> Meet the team and discuss the opportunity in detail</li>
        </ul>
      </div>
      <a href="https://techtiz.co/careers" style="text-decoration:none;">
        <div class="cta">Explore More Opportunities</div>
      </a>
      <p>We'll be in touch soon! If you have any questions, feel free to reply to this email.</p>
      <p>Best regards,<br><strong>TechTiz Talent Acquisition Team</strong></p>
    </div>
    <div class="footer">
      <p>TechTiz - Where Innovation Meets Opportunity</p>
      <p>careers@techtiz.co | techtiz.co</p>
    </div>
  </div>
</body>
</html>
`;

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    const cvFile = formData.get("cv") as File | null;
    const company = formData.get("company") as string;
    const recaptchaToken = formData.get("recaptchaToken") as string;

    if (company) {
      return jsonResponse({ error: "Bot detection triggered" }, 400);
    }

    if (!firstName || !lastName || !email || !phone || !cvFile) {
      return jsonResponse(
        {
          error:
            "Missing required fields: First name, Last name, Email, Phone number, and CV are required",
        },
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

    const attachments: Array<{
      filename: string;
      content: Buffer;
      contentType: string;
    }> = [];

    if (cvFile) {
      const buffer = await cvFile.arrayBuffer();
      attachments.push({
        filename: cvFile.name,
        content: Buffer.from(buffer),
        contentType: cvFile.type,
      });
    }

    const fromAddress = emailEnv.hrUser();
    const transporter = getHrTransporter();

    await Promise.all([
      transporter.sendMail({
        from: fromAddress,
        to: fromAddress,
        subject: `New Career Application - ${firstName} ${lastName}`,
        html: createCareerAdminEmailTemplate({
          firstName,
          lastName,
          email,
          phone,
          message,
          hasCV: Boolean(cvFile),
        }),
        attachments,
      }),
      transporter.sendMail({
        from: fromAddress,
        to: email,
        subject: "Application Received - TechTiz Careers",
        html: createCareerThankYouEmailTemplate(firstName),
      }),
    ]);

    return jsonResponse({
      message:
        "Career application submitted successfully! Check your email for confirmation.",
    });
  } catch (error) {
    console.error("Career application submission error:", error);
    return jsonResponse(
      { error: "Failed to submit career application. Please try again." },
      500,
    );
  }
};
