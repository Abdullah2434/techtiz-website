import { ROUTES } from '../routes';

export const CONTACT_HERO = {
  heading: 'Together, we',
  headingAccent: 'create possibilities',
  body:
    'Share your goals for custom software, AI, or digital transformation. We respond with a clear next step—not a generic pitch deck.',
} as const;

export const CONTACT_FORM = {
  messagePlaceholder: 'Your message',
  subscribeLabel:
    'I would like to subscribe to receive news and promotional offers from TECHTIZ.',
  legalPrefix: 'By clicking the button below you agree to our',
  legalConnector: 'and have read and understood our',
  submitLabel: 'Confirm',
  submittingLabel: 'Submitting...',
  successTitle: 'Thank you',
  successMessage:
    'Your message has been sent. Our team will get back to you within 24–48 hours. A confirmation email is on its way.',
} as const;

export const CONTACT_SCHEDULER = {
  heading: 'Discover your',
  headingAccent: 'future workspace.',
  steps: [
    {
      title: '1. Fill Out the Form',
      body: 'Share a few details about your project, goals, or questions so we can prepare for the conversation.',
    },
    {
      title: '2. Choose a Time',
      body: "Pick a time slot that works best for you — we'll match you with the right expert.",
    },
    {
      title: '3. Get Confirmation',
      body: "You'll receive a calendar invite and a confirmation email with the call details.",
    },
    {
      title: '4. Meet & Explore Solutions',
      body: 'Jump on a video call with our team to discuss how we can help you move forward.',
    },
  ],
  stepper: [
    { id: 1, name: 'CHOOSE TIME' },
    { id: 2, name: 'YOUR INFO' },
  ],
  selectTimeLabel: 'SELECT A TIME',
  selectDateFirst: 'Please select a date first.',
  noSlots: 'No available time slots for this date.',
  nextLabel: 'Next',
  backLabel: 'Back',
  confirmLabel: 'Confirm',
  confirmingLabel: 'Confirming...',
  successTitle: 'Appointment requested',
  successMessage:
    'Your consultation has been booked. Check your inbox for a confirmation email with the meeting details.',
  mailtoSubject: 'Consultation request',
} as const;

export const CONTACT_PAGE_ANCHORS = {
  form: '#contact-form',
  scheduler: '#schedule-consultation',
} as const;
