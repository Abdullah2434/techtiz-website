/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly EMAIL_SMTP_CONTACT_USER?: string;
  readonly EMAIL_SMTP_CONTACT_PASS?: string;
  readonly EMAIL_SMTP_HR_USER?: string;
  readonly EMAIL_SMTP_HR_PASS?: string;
  readonly EMAIL_FROM_NAME?: string;
  readonly RECAPTCHA_SECRET_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  interface Window {
    AOS: import("aos");
  }
}

export {};
