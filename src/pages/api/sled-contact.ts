import type { APIRoute } from "astro";

import { isValidEmail, jsonResponse } from "../../lib/api/json";
import {
  createSledAdminEmailTemplate,
  createSledThankYouEmailTemplate,
} from "../../lib/email/sled-contact-mail";
import { getSledTransporter } from "../../lib/email/transporter";
import { emailEnv } from "../../lib/email/env";
import { SITE } from "../../lib/constants/site";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const {
      name,
      email,
      firm,
      role = "",
      vehicle = "",
      timing = "",
      intent = "",
      desc = "",
      website,
    } = body;

    if (website) {
      return jsonResponse({ error: "Bot detection triggered" }, 400);
    }

    if (!name || !email || !firm) {
      return jsonResponse(
        { error: "Name, work email, and prime firm are required" },
        400,
      );
    }

    if (!isValidEmail(email)) {
      return jsonResponse({ error: "Invalid email format" }, 400);
    }

    const payload = {
      name,
      email,
      firm,
      role,
      vehicle,
      timing,
      intent,
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
        subject: `SLED subcontract inquiry — ${firm}`,
        html: createSledAdminEmailTemplate(payload),
      }),
      transporter.sendMail({
        from: `${emailEnv.fromName()} <${fromAddress}>`,
        to: email,
        subject: "Inquiry received — Techtiz U.S. SLED Partnerships",
        html: createSledThankYouEmailTemplate(name),
      }),
    ]);

    return jsonResponse({ message: "SLED inquiry submitted successfully" });
  } catch (error) {
    console.error("SLED contact submission error:", error);
    return jsonResponse(
      { error: "Failed to submit inquiry. Please try again." },
      500,
    );
  }
};
