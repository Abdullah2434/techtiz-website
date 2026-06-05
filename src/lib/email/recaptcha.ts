import { emailEnv } from "./env";

type RecaptchaResult = {
  success?: boolean;
  "error-codes"?: string[];
};

export async function verifyRecaptchaToken(
  recaptchaToken: string | null | undefined,
): Promise<{ ok: true } | { ok: false; status: number; error: string }> {
  if (!recaptchaToken) {
    return { ok: false, status: 400, error: "reCAPTCHA token missing" };
  }

  const recaptchaSecret = emailEnv.recaptchaSecret();
  if (!recaptchaSecret) {
    console.error("Missing RECAPTCHA_SECRET_KEY");
    return { ok: false, status: 500, error: "Server configuration error" };
  }

  const recaptchaResponse = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${encodeURIComponent(recaptchaSecret)}&response=${encodeURIComponent(recaptchaToken)}`,
    },
  );

  const recaptchaResult = (await recaptchaResponse.json()) as RecaptchaResult;

  if (!recaptchaResult?.success) {
    console.warn("reCAPTCHA validation failed", recaptchaResult);
    return { ok: false, status: 400, error: "reCAPTCHA verification failed" };
  }

  return { ok: true };
}
