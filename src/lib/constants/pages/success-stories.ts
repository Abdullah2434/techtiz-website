import type { SuccessStory } from '../../types/case-study';

const caseStudyHref = (slug: string): string => `/case-studies/${slug}/`;

/** Homepage success-stories carousel (legacy SuccessStories section). */
export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'linkedgolf-1',
    slug: 'reinventing-how-golfers-connect-schedule-play-together',
    quote:
      'Our experience with Techtiz is great. They help us to increase our revenue with their expertise and support services. Always recommend them to others.',
    company: 'LinkedGolf',
    founder: {
      name: 'Matt Quattrani',
      role: 'Founder & CEO',
      image: '/images/testimonial/matt.png',
    },
    challenges:
      'Our experience with Techtiz is great. They help us to increase our revenue with their expertise and support services.',
    solutions:
      'Our experience with Techtiz is great. They help us to increase our revenue with their expertise and support services.',
    detailsUrl: caseStudyHref('reinventing-how-golfers-connect-schedule-play-together'),
    videoId: '-tDeffu-czE',
  },
  {
    id: 'dashboard-earth',
    slug: 'dashboard-earth-local-climate-action-real-rewards',
    quote:
      'Dashboard.Earth is a mobile app that empowers individuals to actively engage in climate resilience by translating complex environmental goals into local, actionable steps.',
    company: 'Dashboard.Earth',
    founder: {
      name: 'Joris Gunawardena',
      role: 'Co-founder Dashboard Earth',
      image: '/images/testimonial/Joris-Gunawardena.png',
    },
    challenges:
      'Our experience with Techtiz is great. They help us to increase our revenue with their expertise and support services.',
    solutions:
      'Our experience with Techtiz is great. They help us to increase our revenue with their expertise and support services.',
    detailsUrl: caseStudyHref('dashboard-earth-local-climate-action-real-rewards'),
    videoId: 'xMHDrCRN3V8',
  },
  {
    id: 'capsule-lab',
    slug: 'capsule-tickets-web3-powered-events-ticketing',
    quote:
      'Capsule Lab is a modern event ticketing platform leveraging blockchain/Web3 to deliver digital ownership, authenticity, and a vibrant post-event community.',
    company: 'Capsule Lab',
    founder: {
      name: 'Kenny Kemsley',
      role: 'Founder & CEO Capsule Labs',
      image: '/images/testimonial/Kenny.png',
    },
    challenges:
      'Our experience with Techtiz is great. They help us to increase our revenue with their expertise and support services.',
    solutions:
      'Our experience with Techtiz is great. They help us to increase our revenue with their expertise and support services.',
    detailsUrl: caseStudyHref('capsule-tickets-web3-powered-events-ticketing'),
    videoId: 'UOIOpaHtZxA',
  },
];
