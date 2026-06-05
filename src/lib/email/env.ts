/** Astro 6 inlines `.env` into `import.meta.env`; `process.env` only has shell vars. */
const fileEnv = {
  EMAIL_SMTP_CONTACT_USER: import.meta.env.EMAIL_SMTP_CONTACT_USER,
  EMAIL_SMTP_CONTACT_PASS: import.meta.env.EMAIL_SMTP_CONTACT_PASS,
  EMAIL_SMTP_HR_USER: import.meta.env.EMAIL_SMTP_HR_USER,
  EMAIL_SMTP_HR_PASS: import.meta.env.EMAIL_SMTP_HR_PASS,
  EMAIL_FROM_NAME: import.meta.env.EMAIL_FROM_NAME,
  RECAPTCHA_SECRET_KEY: import.meta.env.RECAPTCHA_SECRET_KEY,
} as const;

type EnvKey = keyof typeof fileEnv;

function readEnv(name: EnvKey): string | undefined {
  const runtime = process.env[name];
  if (runtime && runtime.length > 0) return runtime;

  const fromFile = fileEnv[name];
  return typeof fromFile === "string" && fromFile.length > 0 ? fromFile : undefined;
}

export const emailEnv = {
  contactUser: () => readEnv("EMAIL_SMTP_CONTACT_USER") ?? "contact@techtiz.co",
  contactPass: () => readEnv("EMAIL_SMTP_CONTACT_PASS"),
  hrUser: () => readEnv("EMAIL_SMTP_HR_USER") ?? "hr@techtiz.co",
  hrPass: () => readEnv("EMAIL_SMTP_HR_PASS"),
  fromName: () => readEnv("EMAIL_FROM_NAME") ?? "Techtiz",
  recaptchaSecret: () => readEnv("RECAPTCHA_SECRET_KEY"),
} as const;
