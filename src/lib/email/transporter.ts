import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

import { emailEnv } from "./env";

function createGmailTransporter(
  user: string,
  pass: string | undefined,
): Transporter {
  if (!pass) {
    throw new Error("SMTP password is not configured");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

export function getContactTransporter(): Transporter {
  return createGmailTransporter(emailEnv.contactUser(), emailEnv.contactPass());
}

export function getHrTransporter(): Transporter {
  return createGmailTransporter(emailEnv.hrUser(), emailEnv.hrPass());
}

export function getSledTransporter(): Transporter {
  return createGmailTransporter(emailEnv.contactUser(), emailEnv.contactPass());
}
