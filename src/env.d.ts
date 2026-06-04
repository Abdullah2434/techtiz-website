/// <reference types="astro/client" />

declare global {
  interface Window {
    AOS: import('aos');
  }
}

export {};
