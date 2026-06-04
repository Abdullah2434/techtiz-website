import type { IndustryPageData, IndustrySolutionItem } from '../types/industry';
import { ROUTES } from './routes';

const CONTACT = ROUTES.sledContact;

const defaultCta = {
  title1: 'Looking to Build',
  title2: 'Something Custom?',
  description:
    "Let's turn your web app idea into a powerful, production ready platform—tailored to your needs and built for scale.",
  buttonText: 'Contact Us for a Consultation',
  buttonUrl: CONTACT,
};

const healthcareSolutions: IndustrySolutionItem[] = [
  {
    id: 'faster-clinical-workflows',
    title: 'Faster Clinical Workflows',
    description:
      'Automate repetitive tasks, reduce administrative load, and streamline patient journeys.',
    iconPath: '/svgs/faster.svg',
  },
  {
    id: 'real-time-patient-insights',
    title: 'Real-Time Patient Insights',
    description:
      'Monitor vitals, capacity, and diagnostics with instant data visibility for faster care decisions.',
    iconPath: '/svgs/real-time.svg',
  },
  {
    id: 'scalable-health-platforms',
    title: 'Scalable Health Platforms',
    description:
      'Grow from clinics to nationwide systems with modular, cloud-based healthcare solutions.',
    iconPath: '/svgs/scalable.svg',
  },
  {
    id: 'secure-medical-architecture',
    title: 'Secure Medical Architecture',
    description: 'HIPAA-ready infrastructure designed for privacy, security, and system reliability.',
    iconPath: '/svgs/secure.svg',
  },
  {
    id: 'reporting-compliance-insights',
    title: 'Reporting & Compliance Insights',
    description:
      'Create real-time reports on inventory flow, cost savings, and compliance with FDA or local regulations.',
    iconPath: '/svgs/reporting.svg',
  },
];

const ecommerceSolutions: IndustrySolutionItem[] = [
  {
    id: 'custom-ecommerce-website',
    title: 'Custom E-commerce Website',
    description: 'Shopify, Magento, WooCommerce, or custom and Mobile-first design',
    iconPath: '/svgs/Custom E-commerce Website.svg',
  },
  {
    id: 'marketplace-platforms',
    title: 'Marketplace Platforms',
    description: 'Multi-vendor dashboards and admin panels for payouts and inventory.',
    iconPath: '/svgs/Marketplace Platforms.png',
  },
  {
    id: 'ai-driven-personalization',
    title: 'AI-Driven Personalization',
    description: 'Custom product bundles and personalized offers based on user behavior.',
    iconPath: '/svgs/AI-Driven Personalization.png',
  },
  {
    id: 'ecommerce-automation',
    title: 'E-commerce Automation',
    description: 'Sync with inventory and accounting tools AI chat support',
    iconPath: '/svgs/E-commerce Automation.png',
  },
  {
    id: 'headless-commerce-architecture',
    title: 'Headless Commerce Architecture',
    description: 'Integrates with CMS, PIM, and DAM for improved SEO and performance.',
    iconPath: '/svgs/Headless Commerce Architecture.png',
  },
];

const realEstateSolutions: IndustrySolutionItem[] = [
  {
    id: 'property-listing-sync',
    title: 'Property Listing Sync',
    description: 'Easily update all your portals from a single dashboard!',
    iconPath: '/svgs/Property Listing Sync.svg',
  },
  {
    id: 'lead-routing',
    title: 'Lead Routing',
    description: "Check in with the agents and see who's free to take on tasks.",
    iconPath: '/svgs/Lead Routing.svg',
  },
  {
    id: 'smart-scheduling',
    title: 'Smart Scheduling',
    description: 'Clients can easily schedule visits online—no phone calls required!',
    iconPath: '/svgs/Smart Scheduling.svg',
  },
  {
    id: 'deal-tracking',
    title: 'Deal Tracking',
    description: "AI predicts when deals will close and how much they're worth in the pipeline.",
    iconPath: '/svgs/Deal Tracking.svg',
  },
  {
    id: 'reporting',
    title: 'Reporting',
    description: 'Create monthly sales and marketing insights automatically.',
    iconPath: '/svgs/reporting.svg',
  },
];

const logisticsSolutions: IndustrySolutionItem[] = [
  {
    id: 'faster-deployment-cycles',
    title: 'Faster Deployment Cycles',
    description: 'Agile sprints to optimize routes, stock, and fulfillment quickly.',
    iconPath: '/svgs/Faster Deployment Cycles.svg',
  },
  {
    id: 'real-time-visibility',
    title: 'Real-Time Visibility',
    description:
      'Unified dashboards for tracking shipments, inventory, and supplier performance.',
    iconPath: '/svgs/Real-Time Visibility.svg',
  },
  {
    id: 'scalability-made-simple',
    title: 'Scalability Made Simple',
    description:
      'Scalable cloud-native infrastructure for operations, from local warehouses to global networks.',
    iconPath: '/svgs/Scalability Made Simple.svg',
  },
  {
    id: 'clean-reliable-architecture',
    title: 'Clean, Reliable Architecture',
    description: 'Sustainable code and automated CI/CD for continuous improvement and reliability.',
    iconPath: '/svgs/Clean, Reliable Architecture.svg',
  },
  {
    id: 'intelligent-optimization',
    title: 'Intelligent Optimization',
    description:
      'Leverage AI for predictive analytics and demand forecasting to reduce costs and delays.',
    iconPath: '/svgs/Intelligent Optimization.svg',
  },
];

const eLearningTabsData = [
  {
    title: 'Learning Management Systems (LMS)',
    content: {
      title: 'Learning Management Systems (LMS)',
      features: [
        'Course & content management',
        'Student enrollment & tracking',
        'Assessment & grading tools',
        'Social learning & collaboration features',
        'SCORM & xAPI compliance',
      ],
      image: '/images/Industries/E1.svg',
    },
  },
  {
    title: 'Student Information Systems (SIS)',
    content: {
      title: 'Student Information Systems (SIS)',
      features: [
        'Admissions & registration management',
        'Attendance & records management',
        'Scheduling & timetable generation',
        'Parent/student portals',
        'Financial aid & billing integration',
      ],
      image: '/images/Industries/E2.svg',
    },
  },
  {
    title: 'Online Assessment Platforms',
    content: {
      title: 'Online Assessment Platforms',
      features: [
        'Secure proctoring & remote invigilation',
        'Question bank & randomization',
        'Automated grading & feedback',
        'Plagiarism detection',
        'Analytics on student performance',
      ],
      image: '/images/Industries/E3.svg',
    },
  },
  {
    title: 'Virtual Classroom & Tutoring Platforms',
    content: {
      title: 'Virtual Classroom & Tutoring Platforms',
      features: [
        'Live video conferencing & whiteboarding',
        'Session recording & playback',
        'Breakout rooms for group work',
        'Screen sharing & co-browsing',
        'Real-time chat & Q&A',
      ],
      image: '/images/Industries/E4.svg',
    },
  },
  {
    title: 'AI-Powered Learning Platforms',
    content: {
      title: 'AI-Powered Learning Platforms',
      features: [
        'Personalized learning paths',
        'Adaptive content delivery',
        'AI tutors & conversational agents',
        'Predictive analytics for at-risk students',
        'Automated content creation & curation',
      ],
      image: '/images/Industries/E5.svg',
    },
  },
];

export const industriesData: Record<string, IndustryPageData> = {
  healthcare: {
    slug: 'healthcare',
    title: 'Healthcare',
    sections: [
      {
        type: 'hero',
        data: {
          videoSrc: '/videos/industry-hero-section/Health.mp4',
          title: 'Healthcare',
          heading: 'We Help You Build Smarter Healthcare Systems',
          bottomHeading: 'Manual Tracking to Smart, AI-Powered Systems',
          description:
            'At Techtiz, we help hospitals, clinics, and healthcare distributors build intelligent inventory and operations ecosystems that are real-time, automated, and scalable - giving you complete control over medical supplies, equipment tracking, and demand forecasting.',
          titleMaxWidth: '850px',
        },
      },
      {
        type: 'solutions',
        data: {
          solutions: healthcareSolutions,
          mainTitle: 'We Build diversified range of solutions',
          highlightText: 'We Build',
          highlightColor: '#18B0E6',
          ctaTitle: "Do you have idea, Let's Build it.",
          ctaButtonText: 'Book a Call',
          ctaButtonUrl: CONTACT,
          solutionColumns: 3,
        },
      },
      {
        type: 'comparison',
        data: {
          mainTitle: 'The Modern Healthcare Dilemma',
          description:
            'Healthcare organizations are struggling with rising digital demands from patients and providers, while still using outdated legacy systems. This gap hinders effective healthcare delivery.',
          columns: [
            { id: 'challenges', title: 'Challenges', type: 'challenge' },
            { id: 'traditional', title: 'Traditional Approach', type: 'traditional' },
            { id: 'modern', title: 'Modern Tech-Enabled Solution', type: 'modern' },
          ],
          rows: [
            {
              id: 'patient-experience',
              category: 'Patient Experience',
              values: [
                'Patient Experience',
                'Long wait times, limited accessibility',
                'AI-enabled virtual assistants, 24/7 telehealth, mobile-first design',
              ],
            },
            {
              id: 'data-handling',
              category: 'Data Handling',
              values: [
                'Data Handling',
                'Paper-based or siloed systems',
                'Cloud-based EHR with real-time sync and compliance',
              ],
            },
            {
              id: 'operational-efficiency',
              category: 'Operational Efficiency',
              values: [
                'Operational Efficiency',
                'Manual admin processes and redundant tasks',
                'Automated workflows, appointment scheduling, and task bots',
              ],
            },
            {
              id: 'care-personalization',
              category: 'Care Personalization',
              values: [
                'Care Personalization',
                'Generic treatments and low engagement',
                'Predictive analytics, AI-powered recommendations, tailored insights',
              ],
            },
            {
              id: 'compliance-security',
              category: 'Compliance & Security',
              values: [
                'Compliance & Security',
                'High risk of human error in compliance',
                'Built-in HIPAA/GDPR standards, encryption, access control, audit trails',
              ],
            },
          ],
        },
      },
      {
        type: 'features',
        data: {
          title: 'Data Privacy & Compliance in Healthcare',
          description:
            "In healthcare, protecting patient data isn't just important – it's non-negotiable. At Techtiz, we embed data privacy and regulatory compliance into every solution we build, ensuring your digital health ecosystem is secure, trustworthy, and fully aligned with global standards.",
          features: [
            {
              icon: '/svgs/real-time.svg',
              title: 'HIPAA, GDPR & Regional Regulations',
              description:
                'We strictly adhere to HIPAA (USA), GDPR (Europe), and any other relevant local healthcare data laws, ensuring full legal and ethical compliance.',
            },
            {
              icon: '/svgs/real-time.svg',
              title: 'Role-Based Access Controls',
              description:
                'We implement strict user access hierarchies, allowing only authorized personnel to view or modify sensitive data.',
            },
          ],
        },
      },
      { type: 'successStories' },
      { type: 'cta', data: defaultCta },
    ],
  },
  'digital-marketing': {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    sections: [
      {
        type: 'hero',
        data: {
          videoSrc: '/videos/industry-hero-section/Digital-Marketing.mp4',
          title: 'Digital Marketing',
          heading: 'Convert clicks to conversions with audience-learning intelligence',
          bottomHeading: 'Make more Content , worry less about work!',
          description:
            'At Techtiz, we help marketing teams and agencies design and build intelligent ecosystems that are real-time, scalable, and AI-driven giving you complete control over campaigns, lead flow, and performance tracking across every channel..',
          titleMaxWidth: '850px',
        },
      },
      {
        type: 'scrollList',
        data: {
          heading: 'Problems We Can\nHelp You Tackle',
          highlightText: 'Problems We Can',
          items: [
            {
              title: 'Post Scheduling',
              description:
                'Plan content weeks ahead with AI-optimized timing to maximize reach and engagement.',
            },
            {
              title: 'Analytics',
              description:
                'Track performance across all platforms in one dashboard with real-time AI insights.',
            },
            {
              title: 'Client Delivery',
              description: 'Auto-send or publish approved content instantly—no manual follow-ups.',
            },
            {
              title: 'Lead Nurturing',
              description: 'Automate sponsor emails with personalized, behavior-based follow-ups.',
            },
            {
              title: 'Collaboration',
              description: 'Assign tasks, track progress, and keep your team aligned effortlessly.',
            },
          ],
        },
      },
      {
        type: 'challenges',
        data: {
          items: [
            {
              challenge: 'Missing high-intent leads',
              solution: 'Auto-score and route leads with AI-based prioritization.',
            },
            {
              challenge: 'Manual reporting',
              solution: 'Unified dashboard with real-time performance analytics.',
            },
            {
              challenge: 'Inconsistent posting and engagement',
              solution: 'Schedule and publish content automatically with AI timing.',
            },
            {
              challenge: 'Slow response to audience interactions',
              solution: 'Automate replies and follow-ups through integrated workflows.',
            },
          ],
        },
      },
      { type: 'successStories' },
      {
        type: 'whoWeServe',
        data: {
          variant: 'digital-marketing',
          title: 'Who We Serve',
          description:
            "We offer automation strategies, data insights, and digital tools to enhance efficiency and success in today's competitive landscape.",
          stats: [
            { value: '15+', unit: 'hrs', label: 'Saved Weekly' },
            { value: '3x', unit: 'more', label: 'Consistent Posting' },
          ],
        },
      },
      { type: 'cta', data: defaultCta },
    ],
  },
  'e-commerce': {
    slug: 'e-commerce',
    title: 'E-Commerce',
    sections: [
      {
        type: 'hero',
        data: {
          videoSrc: '/videos/industry-hero-section/E-Commerce.mp4',
          title: 'E-Commerce',
          heading: 'Sell More. Manage Less.\nAutomate Your Store.',
          bottomHeading: 'Through Intelligent E-commerce Automation',
          description:
            'E-commerce brands must deliver quickly and provide seamless customer experiences. At Techtiz, we assist online retailers and DTC brands in automating their commerce ecosystem—from inventory to checkout—ensuring real-time visibility and faster fulfillment.',
          titleMaxWidth: '700px',
        },
      },
      {
        type: 'scrollList',
        data: {
          heading: 'Industry Challenges\nWe Address',
          highlightText: 'Industry Challenges',
          items: [
            {
              title: 'Order Management',
              description:
                'Automatically sync order, job, or delivery status across your dashboard and customer portals. No manual updates ever.',
            },
            {
              title: 'Inventory Sync',
              description:
                'Get instant visibility into stock levels, field resources, or parts availability across all your devices, helping teams make quick, informed decisions.',
            },
            {
              title: 'Cart Recovery',
              description:
                'Send reminders, follow-ups, and discount notifications automatically keeping customers engaged and informed at every step.',
            },
            {
              title: 'Customer Segmentation',
              description:
                'Deliver personalized offers and promotions based on user behavior, purchase history, or service patterns driving higher conversions effortlessly.',
            },
            {
              title: 'Review Automation',
              description:
                'Automatically request customer feedback after delivery or service completion, helping you measure satisfaction and improve performance continuously.',
              highlighted: true,
            },
          ],
        },
      },
      {
        type: 'comparison',
        data: {
          columns: [
            { id: 'Challenges', title: 'Challenges', type: 'challenge' },
            { id: 'With TechTiz', title: 'With TechTiz', type: 'techtiz' },
          ],
          rows: [
            {
              id: 'order-management',
              category: 'Order Management',
              values: ['6+ hours/day managing orders', 'Real-time sync'],
            },
            {
              id: 'restocks',
              category: 'Inventory',
              values: ['Missed restocks and delays', '2x faster fulfillment'],
            },
            {
              id: 'feedback',
              category: 'Customer Satisfaction',
              values: ['Bad Feedback from Clients', 'Happier customers'],
            },
          ],
        },
      },
      {
        type: 'solutions',
        data: {
          solutions: ecommerceSolutions,
          mainTitle: 'We Build diversified range of solutions',
          highlightText: 'We Build',
          highlightColor: '#18B0E6',
          ctaTitle: "Do you have idea, Let's Build it.",
          ctaButtonText: 'Book a Call',
          ctaButtonUrl: CONTACT,
          solutionColumns: 3,
        },
      },
      { type: 'successStories' },
      { type: 'cta', data: defaultCta },
    ],
  },
  'real-estate': {
    slug: 'real-estate',
    title: 'Real Estate',
    sections: [
      {
        type: 'hero',
        data: {
          videoSrc: '/videos/industry-hero-section/Real-Estate.mp4',
          title: 'Real Estate',
          heading: 'Smarter Real Estate Operations\nPowered by Automation',
          bottomHeading: 'Driving Innovation in Real Estate',
          description:
            'Agents waste hours on data entry and follow-ups. Techtiz connects CRMs, calendars, and marketing channels for hands-free property management.',
          titleMaxWidth: '850px',
        },
      },
      {
        type: 'solutions',
        data: {
          solutions: realEstateSolutions,
          mainTitle: 'We Build diversified range of solutions',
          highlightText: 'We Build',
          highlightColor: '#18B0E6',
          ctaTitle: "Do you have idea, Let's Build it.",
          ctaButtonText: 'Book a Call',
          ctaButtonUrl: CONTACT,
          solutionColumns: 3,
        },
      },
      {
        type: 'challenges',
        data: {
          items: [
            {
              challenge: 'Updating listings across multiple portals',
              solution: 'Sync once – update everywhere automatically',
            },
            {
              challenge: 'Losing track of hot leads',
              solution: 'Auto-assign and follow up with AI reminders',
            },
            {
              challenge: 'Manual scheduling conflicts',
              solution: 'Real-time synced calendars',
            },
          ],
        },
      },
      { type: 'successStories' },
      {
        type: 'whoWeServe',
        data: {
          variant: 'real-estate',
          title: 'Who We Serve',
          description:
            "We offer automation strategies, data insights, and digital tools to enhance efficiency and success in today's competitive landscape.",
          buttonText: 'Book a Free Consultation',
          buttonUrl: CONTACT,
          stats: [
            { topLabel: 'Save', value: '15+', unit: 'hours/week', label: '' },
            { topLabel: 'Close', value: '25%', label: 'More Deals' },
            { value: '40%', middleLabel: 'Improve', label: 'Response Time' },
          ],
        },
      },
      { type: 'cta', data: defaultCta },
    ],
  },
  'logistics-supply-chain': {
    slug: 'logistics-supply-chain',
    title: 'Supply Chain & Logistics',
    sections: [
      {
        type: 'hero',
        data: {
          videoSrc: '/videos/industry-hero-section/Supply Chain & Logistics.mp4',
          title: 'Supply Chain & Logistics',
          heading: 'From Bottlenecks to Flow\nAI Supply Chains',
          bottomHeading: 'Empowering Supply Chains for\nFaster, Smarter Movement',
          description:
            'We build intelligent, scalable, and secure supply chain platforms that streamline operations, enhance visibility, and enable real-time decision-making – helping enterprises adapt quickly to market shifts and customer demands.',
          titleMaxWidth: '650px',
        },
      },
      {
        type: 'solutions',
        data: {
          solutions: logisticsSolutions,
          mainTitle: 'We Help You Smart Supply Chain Systems',
          highlightText: 'Smart Supply Chain Systems',
          highlightColor: '#18B0E6',
          ctaTitle: "Do you have idea, Let's Build it.",
          ctaButtonText: 'Book a Call',
          ctaButtonUrl: CONTACT,
          solutionColumns: 3,
        },
      },
      {
        type: 'scrollList',
        data: {
          heading: 'Industry Challenges\nWe Address',
          highlightText: 'Industry Challenges',
          items: [
            {
              title: 'Manual Operations & Inefficiency',
              description:
                'Reduce errors and time lags with automation across warehousing, inventory, and fulfillment.',
            },
            {
              title: 'Lack of Real-Time Visibility',
              description:
                'Track shipments, drivers, and goods with live GPS, RFID, and IoT integrations.',
            },
            {
              title: 'Poor Route Optimization',
              description:
                'Leverage AI to plan faster, fuel-efficient delivery routes based on traffic, weather, and volume.',
            },
            {
              title: 'Disconnected Systems',
              description: 'Unify TMS, WMS, CRM, and ERP systems for seamless data flow.',
            },
            {
              title: 'Scalability Struggles',
              description:
                'Build platforms that grow with increasing inventory, SKUs, vendors, and distribution points.',
            },
          ],
        },
      },
      {
        type: 'whoWeServe',
        data: {
          variant: 'real-estate',
          title: 'Who We Serve',
          description:
            "We offer automation strategies, data insights, and digital tools to enhance efficiency and success in today's competitive landscape.",
          buttonText: 'Book a Free Consultation',
          buttonUrl: CONTACT,
          stats: [
            { value: '60%', label: 'Accuracy', arrowDirection: 'up' },
            { value: '35%', label: 'Delivery Speed', arrowDirection: 'up' },
            { value: '40%', label: 'Costs', arrowDirection: 'down' },
          ],
        },
      },
      { type: 'successStories' },
      { type: 'cta', data: defaultCta },
    ],
  },
  education: {
    slug: 'education',
    title: 'Education',
    sections: [
      {
        type: 'hero',
        data: {
          videoSrc: '/videos/industry-hero-section/Education.mp4',
          title: 'Education',
          heading: 'Education & E-learning Solutions',
          bottomHeading: 'Transforming Learning with Smart Digital Platforms',
          description:
            'Education is evolving from static classrooms to dynamic, AI-powered digital learning experiences. At Techtiz, we help EdTech startups, institutions, and corporate trainers design and build modern learning ecosystems that are personalized, scalable, and outcome-driven.',
          titleMaxWidth: '650px',
        },
      },
      {
        type: 'scrollList',
        data: {
          heading: 'Common Challenges\nWe Help Solve',
          highlightText: 'We Help Solve',
          items: [
            {
              title: 'Lack of Student Engagement',
              description:
                'Improve participation with gamified learning, interactivity, and personalized content.',
            },
            {
              title: 'Outdated Legacy Systems',
              description:
                'Migrate and modernize LMS, CMS, and internal tools for cloud scalability and better UX.',
            },
            {
              title: 'Limited Accessibility',
              description:
                'Ensure learning materials work across mobile, low-bandwidth, and multi-language environments.',
            },
            {
              title: 'Poor Assessment & Analytics',
              description:
                'Implement real-time progress tracking, quizzes, and AI-generated insights for students & instructors.',
            },
            {
              title: 'High Drop-off Rates',
              description: 'Drive retention with AI tutors, nudges, and smarter onboarding.',
            },
          ],
        },
      },
      {
        type: 'tabs',
        data: {
          mainTitle: 'Our E-learning Technology Services',
          tabs: eLearningTabsData,
        },
      },
      { type: 'successStories' },
      {
        type: 'whoWeServe',
        data: {
          variant: 'education',
          title: 'Who We Serve',
          description:
            'We design E-learning platforms for every level of the education ecosystem:',
          educationBoxes: [
            { title: 'EdTech Startups launching MVPs & mobile-first platforms' },
            { title: 'Schools, Colleges, and Universities digitizing classrooms' },
            { title: 'Corporate Training Teams modernizing L&D programs' },
            { title: 'Nonprofits & NGOs expanding access to remote education' },
          ],
        },
      },
      { type: 'cta', data: defaultCta },
    ],
  },
};

export function getIndustryBySlug(slug: string): IndustryPageData | undefined {
  return industriesData[slug];
}

export function getAllIndustrySlugs(): string[] {
  return Object.keys(industriesData);
}
