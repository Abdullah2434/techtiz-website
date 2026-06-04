import type {
  CareersBenefitItem,
  CareersContactHeroData,
  CareersHeroData,
  CareersHiringStep,
  CareersValueItem,
} from '../../types/careers';
import {
  BENEFIT_CERTIFICATION_ICON,
  BENEFIT_INSURANCE_ICON,
  BENEFIT_LEAVES_ICON,
  BENEFIT_LUNCH_ICON,
  BENEFIT_RECREATIONAL_ICON,
  VALUE_COLLABORATION_ICON,
  VALUE_INTEGRITY_ICON,
  VALUE_TRANSPARENCY_ICON,
  VALUE_TRUST_ICON,
} from '../careers-icons';

export const CAREERS_HERO: CareersHeroData = {
  videoSrc: '/videos/careers/heroVideo.mp4',
  heading: 'Join the Future with TECHTIZ',
  bottomHeading: "We're not just building products — we're shaping what's next.",
  description:
    "At TECHTIZ, we're redefining how businesses scale with AI, automation, and human-centered design. Whether you're a designer, developer, strategist, or data nerd — your ideas matter here. We're looking for bold thinkers and builders who want to make real impact.",
  titleMaxWidth: '850px',
};

export const CAREERS_VALUES: CareersValueItem[] = [
  {
    title: 'Collaboration',
    description:
      'Collaboration is the process of two or more people or organizations working together to complete a task or achieve a goal.',
    icon: VALUE_COLLABORATION_ICON,
  },
  {
    title: 'Transparency',
    description:
      'Transparency, as used in science is operating in such a way that it is easy for others to see what actions are performed.',
    icon: VALUE_TRANSPARENCY_ICON,
  },
  {
    title: 'Trust',
    description:
      'Trust will help us foster a positive and productive environment that delivers value to our users and customers.',
    icon: VALUE_TRUST_ICON,
  },
  {
    title: 'Integrity',
    description:
      'Integrity is the practice of showing a consistent and uncompromising adherence to strong moral and ethical principles.',
    icon: VALUE_INTEGRITY_ICON,
  },
];

export const CAREERS_HIRING_STEPS: CareersHiringStep[] = [
  { number: 1, title: 'Online Application' },
  { number: 2, title: 'Pre Screening Activities' },
  { number: 3, title: 'Interview or Assessment' },
  { number: 4, title: 'Receive Offer' },
];

export const CAREERS_BENEFITS: CareersBenefitItem[] = [
  { title: 'Life & Health Insurance', subtitle: '', icon: BENEFIT_INSURANCE_ICON },
  { title: 'On-site Recreational', subtitle: '', icon: BENEFIT_RECREATIONAL_ICON },
  { title: 'Leaves', subtitle: '(Sick, Casual & Marriage)', icon: BENEFIT_LEAVES_ICON },
  { title: 'In-house Lunch', titleHtml: 'In-house <br /> Lunch', subtitle: '', icon: BENEFIT_LUNCH_ICON },
  { title: 'Certification Reimbursement', subtitle: '', icon: BENEFIT_CERTIFICATION_ICON },
];

export const CAREERS_CONTACT_HERO: CareersContactHeroData = {
  heading: 'Together, we',
  headingHighlight: 'create possibilities',
  description:
    "At TECHTIZ, we believe people thrive when they're supported, challenged, and trusted. That's why we create an environment where creativity meets clarity, and growth is backed by structure.",
};

export const CAREERS_FORM_SUCCESS_MESSAGE =
  'Thanks for your interest! Online submissions are being set up — please email your CV to complete your application.';
