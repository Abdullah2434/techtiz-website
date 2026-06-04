import { ROUTES } from '../routes';
import type {
  AboutCtaData,
  AboutHeroData,
  AboutLeader,
  AboutStat,
  AboutValue,
} from '../../types/about';

export const ABOUT_CARD_EXPAND_MS = 500;

export const ABOUT_HERO: AboutHeroData = {
  titleHighlight: 'TechTiz',
  subtitle: 'Making Technology Work for You',
  headline: 'We Do More Than Just',
  headlineHighlight: 'Build Software',
  body: 'TECHTIZ is a product-first technology partner, empowering companies to innovate faster through AI-driven solutions, low-code development, and modern UX/UI design. We help businesses move from ideas to scalable, secure, and user-focused digital products.',
  quoteHighlight: 'technology should accelerate clarity,',
  quoteRest:
    'not complexity — we blend strategic thinking with cutting-edge engineering to launch experiences that make an impact.',
};

export const ABOUT_VALUES: AboutValue[] = [
  {
    number: '01.',
    title: 'Experienced Builder',
    description:
      "At TECHTIZ, we understand that a house is more than just four walls and a roof – it's the cornerstone of your life's journey. With our unwavering commitment to excellence and personalized service, we're dedicated to guiding you every step of the way on your real estate adventure.",
    video: '/images/Industries/education.mp4',
  },
  {
    number: '02.',
    title: 'Expert Market Knowledge.',
    description:
      'With years of hands-on experience, we understand the nuances of your industry inside and out. Our insights are rooted in data, trends, and real-world results — helping you make informed decisions with confidence. From competitive analysis to customer behavior, we bring clarity to complexity.',
    video: '/images/Industries/finance.mp4',
  },
  {
    number: '03.',
    title: 'Unrivaled Customer Satisfaction.',
    description:
      "We don't just deliver solutions — we deliver experiences. With a strong focus on communication, transparency, and responsiveness, our clients stay informed and supported at every step. Your goals become ours, and your satisfaction is our success.",
    video: '/images/Industries/healthHero.mp4',
  },
  {
    number: '04.',
    title: 'Innovative Technology.',
    description:
      "We leverage the latest in AI, automation, and scalable platforms to build future-ready digital solutions. Whether it's custom software, intelligent systems, or mobile apps — our tech-driven approach keeps you ahead of the curve and competition.",
    video: '/images/Industries/saas.mp4',
  },
];

export const ABOUT_STATS: AboutStat[] = [
  { value: 5, suffix: '+', label: 'Years of Excellence' },
  { value: 180, suffix: '+', label: 'Projects Completed' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 200, suffix: '+', label: 'Clients Served' },
];

export const ABOUT_LEADERS: AboutLeader[] = [
  {
    name: 'Mohsin Naeem',
    title: 'CEO',
    description:
      "We envision a world where technology doesn't just support progress it leads, shaping industries and elevating human potential.",
    image: '/images/about/mohsin.png',
    linkedin: 'https://www.linkedin.com/in/mohsin-m-naeem',
  },
  {
    name: 'Adnan Naeem',
    title: 'CTO',
    description:
      'The future belongs to those who can see beyond the code  to create, to transform, and to inspire through innovation.',
    image: '/images/about/adnan.png',
    linkedin: 'https://www.linkedin.com/in/adnan-naeem-442620130',
  },
];

export const ABOUT_CTA: AboutCtaData = {
  title1: 'Looking to Build',
  title2: 'Something Custom?',
  description:
    "Let's turn your web app idea into a powerful, production ready platform—tailored to your needs and built for scale.",
  buttonText: 'Contact Us for a Consultation',
  buttonUrl: ROUTES.sledContact,
};
