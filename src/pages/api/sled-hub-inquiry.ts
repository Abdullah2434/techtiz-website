import type { APIRoute } from "astro";

import { isValidEmail, jsonResponse } from "../../lib/api/json";
import {
  createSledHubAdminEmailTemplate,
  createSledHubThankYouEmailTemplate,
} from "../../lib/email/sled-hub-inquiry-mail";
import { getSledTransporter } from "../../lib/email/transporter";
import { emailEnv } from "../../lib/email/env";
import { SITE } from "../../lib/constants/site";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const {
      needs = "",
      company,
      role = "",
      rfp = "",
      nda = "",
      vehicle = "",
      agency = "",
      email,
      phone = "",
      desc = "",
      website,
    } = body;

    if (website) {
      return jsonResponse({ error: "Bot detection triggered" }, 400);
    }

    if (!company || !email) {
      return jsonResponse(
        { error: "Company and email are required" },
        400,
      );
    }

    if (!isValidEmail(email)) {
      return jsonResponse({ error: "Invalid email format" }, 400);
    }

    const payload = {
      needs,
      company,
      role,
      rfp,
      nda,
      vehicle,
      agency,
      email,
      phone,
      desc,
    };

    const fromAddress = emailEnv.contactUser();
    const toAddress = emailEnv.contactUser() || SITE.email.sled;
    const transporter = getSledTransporter();

    await Promise.all([
      transporter.sendMail({
        from: `${emailEnv.fromName()} <${fromAddress}>`,
        to: toAddress,
        replyTo: email,
        subject: `SLED engagement inquiry — ${company}`,
        html: createSledHubAdminEmailTemplate(payload),
      }),
      transporter.sendMail({
        from: `${emailEnv.fromName()} <${fromAddress}>`,
        to: email,
        subject: "Inquiry received — Techtiz U.S. SLED Partnerships",
        html: createSledHubThankYouEmailTemplate(company),
      }),
    ]);

    return jsonResponse({ message: "SLED hub inquiry submitted successfully" });
  } catch (error) {
    console.error("SLED hub inquiry submission error:", error);
    return jsonResponse(
      { error: "Failed to submit inquiry. Please try again." },
      500,
    );
  }
};
