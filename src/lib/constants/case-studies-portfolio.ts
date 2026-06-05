import type { CaseStudy } from '../types/case-study';

export const CASE_STUDIES_PORTFOLIO: CaseStudy[] = [
  // Mobile Apps
  {
    title: "Reinventing How Golfers Connect, Schedule & Play Together",
    slug: "reinventing-how-golfers-connect-schedule-play-together",
    client: "Linked Golf",
    appLogo: "/images/case-studies/c20-logo.png",
    category: "Mobile App",
    image: "/images/case-studies/BG.png",
    website: "",
    overview:
      "Linked Golf is a mobile application designed for golf enthusiasts looking to streamline the way they connect, schedule, and play with fellow golfers. Available on both Android and iOS platforms, the app removes the traditional hassle of organizing golf rounds by offering a user-friendly experience centered around social connectivity. ",
    overview2:
      "Users can effortlessly match availability with friends, scan a QR code to instantly add fellow golfers after a round, and engage in community chat within the app. With a freemium model, Linked Golf provides core functionalities for free, while potentially offering premium upgrades for power users. The app’s mission is simple yet powerful: “Find your foresome. Golf more.” — encouraging users to spend less time planning and more time on the green.",
    tagline:
      "Connect with your golf buddies by scanning a QR code. Use the calendar to mark free days and plan games in the community chat – All in one App.",
    metrics: [
      { label: "Downloads", value: "4,000+" },
      { label: "Join it for Free", value: "Freemium" },
      { label: "User Satisfaction", value: "90%" },
    ],
    appStrengths: [
      "Social-first design: QR code connectivity and chat features facilitate growing golf networks.",
      "Simple scheduling: Helps players effortlessly coordinate availability.",
      "Cross-platform: Flutter engine ensures parity across Android/iOS.",
    ],
    highlights: [
      `Scan a QR code and bam, now your golf buddies – under 5 seconds to connect and expand your golf circle.`,
      `Find your foursome. Golf more. The app's ethos captures its mission: enhancing play frequency through better social connectivity.`,
      `Built for the real world: digitizing availability planning, roster invites, and post-round community building.`,
    ],
    technologies: [
      { name: "Flutter", icon: "/images/tech-icons/flutter.png" },
      { name: "Node.js", icon: "/images/tech-icons/node.png" },
      { name: "MongoDB", icon: "/images/tech-icons/mongodb.png" },
    ],
    isFeatured: true,
    reviewVideoUrl: "https://www.youtube.com/embed/-tDeffu-czE",
    founder: {
      name: "Matt Quattrani",
      role: "Founder & CEO",
      image: "/images/testimonial/matt.png",
    },
    videoId: "-tDeffu-czE",
    pdfUrl: "/Techtiz-Website.pdf",
  },

  {
    title: "Dashboard.Earth – Local Climate Action, Real Rewards",
    slug: "dashboard-earth-local-climate-action-real-rewards",
    client: "Dashboard.Earth",
    appLogo: "/images/case-studies/c2-logo.png",
    category: "Mobile App",
    image: "/images/case-studies/c2.png",
    website: "",
    overview:
      "Dashboard.Earth is a mobile app that empowers individuals—initially in Los Angeles and San Diego counties—to actively engage in climate resilience. It simplifies complex environmental goals by translating them into local, actionable steps like composting, planting trees, and reducing water usage. ",
    overview2:
      "The app uses gamification and verified rewards, allowing users to log their eco-friendly habits, grow a mascot (“Dashy”), earn “Sprouts” and tickets for weekly giveaways, and sometimes receive direct cash incentives . Community events, expert-curated resources and real-time impact tracking reinforce meaningful, hyperlocal engagement while building a sense of collective impact",
    tagline:
      "Log eco-actions like plant-based meals and carpooling to help Dashy grow. Earn Sprouts and win weekly prizes. Super Actions can earn cash rewards.",
    metrics: [
      { label: "Installs per month", value: "290" },
      { label: "Rating till Date", value: "4.3" },
      { label: "Downloads", value: "10K+" },
    ],
    appStrengths: [
      "Gamified habit logging with visible mascot progression.",
      "Financial incentives and community giveaways boost motivation.",
      "Partnership-driven localized content ensures relevance.",
    ],
    highlights: [
      "Help Dashy grow bigger with your impact makes environmental action fun and tangible.",
      "Earn Sprouts, win prizes, and get paid blends environmental benefit with personal rewards.",
      "Community-first design: Hyperlocal approach and nonprofit partnerships ensure high relevance and trustworthiness.",
    ],
    technologies: [
      { name: "GraphQL", icon: "/images/tech-icons/graphql.png" },
      { name: "Node.js", icon: "/images/tech-icons/node.png" },
      { name: "React Native", icon: "/images/tech-icons/react.png" },
    ],
    isFeatured: true,
    reviewVideoUrl: "https://www.youtube.com/embed/xMHDrCRN3V8",
    founder: {
      name: "Joris Gunawardena",
      role: "Co-founder Dashboard Earth",
      image: "/images/testimonial/Joris-Gunawardena.png",
    },
    videoId: "xMHDrCRN3V8",
    pdfUrl: "/assets/pdf/DashboardEarth.pdf",
  },
  {
    title: "Qartt – On-Demand Delivery Partner Platform",
    slug: "qartt-on-demand-delivery-partner-platform",
    client: "Qartt",
    appLogo: "/images/case-studies/c3-logo.png",
    category: "Mobile App",
    image: "/images/case-studies/c3-bg.png",
    website: "",
    overview:
      "Qartt is a business-grade delivery platform developed by Qartt Ltd (London-based), offering on-demand driver services through a seamless app. Designed primarily for restaurants, pharmacies, grocery stores, and other local businesses, Qartt enables users to request and track deliveries without managing their own fleet.",
    overview2:
      "Designed primarily for restaurants, pharmacies, grocery stores, and other local businesses, Qartt enables users to request and track deliveries without managing their own fleet, promising fast, reliable service that reduces operational overhead to actively engage in climate resilience. It simplifies complex environmental goals by translating them into local, actionable steps like composting, planting trees, and reducing water usage.",
    tagline:
      "Quick delivery. Just 3 taps to request a driver with real-time tracking. Hassle-free fleet management, Qartt provides professional drivers 7 days a week.",
    metrics: [
      { label: "Deliveries Completed", value: "1,012,469" },
      { label: "On-time Rate", value: "92%" },
      { label: "Avg. driver response time", value: "4 Minutes" },
    ],
    appStrengths: [
      "Rapid service: 4-min response, 92% on-time reliability builds trust.",
      "Seamless simplicity: 3-click ordering & fleet handling ease operations.",
      "Clear pricing: Transparent, tiered fares support budget control.",
    ],
    highlights: [
      `Fast Delivery, no fuss: "A member of our team will be with you within 7 minutes" promises reliable quick service.`,
      `Happiness-driven service: "We aren't just in the delivery business. We are in the happiness business," signaling focus on customer experience.`,
    ],
    technologies: [
      { name: "React Native", icon: "/images/tech-icons/react.png" },
      { name: "Node.js", icon: "/images/tech-icons/node.png" },
      { name: "Firebase", icon: "/images/tech-icons/firebase.png" },
    ],
    isFeatured: true,
    pdfUrl: "/assets/pdf/Qartt.pdf",
  },

  {
    title: "EPIC Life – AI-Powered Health Companion",
    slug: "epic-life-ai-powered-health-companion",
    client: "EPIC Life",
    appLogo: "/images/case-studies/c4-logo.png",
    category: "Mobile App",
    image: "/images/case-studies/c4-bg.png",
    website: "",
    overview:
      "EPIC Life Application is a mobile health & fitness app designed to empower users with AI-driven diagnostics and holistic wellness tracking.",
    overview2:
      "Launched in early 2025 by EPIC PC, the app brings together personalized health insights and seamless daily logging—supporting users to manage symptoms, wellness goals, and preventive care from their phones .",
    tagline:
      "AI health check-ins for condition detection and Secure access to health metrics, Track health goals with med and appointment reminders.",
    metrics: [
      { label: "Installations", value: "5k+" },
      { label: "On-time Rate", value: "92%" },
      { label: "Avg. driver response time", value: "4 Minutes" },
    ],
    appStrengths: [
      "AI-driven tools: Brings advanced diagnostics to consumer health.",
      "Comprehensive tracking: Supports symptom logging and goal planning in one place.",
      "Data privacy: Transparent about encryption, user deletion rights.",
    ],
    highlights: [
      "Prioritise your wellness effortlessly, anytime, anywhere: Captures convenient, daily-driven health management.",
      "AI-based diagnostics: Differentiates the app in a crowded fitness market—especially for self-monitoring.",
      "Size and device support: Lightweight and accessible to a wide user base, including older devices.",
    ],
    technologies: [
      { name: "Flutter", icon: "/images/tech-icons/flutter.png" },
      { name: "Next.js", icon: "/images/tech-icons/next.png" },
      { name: "PostgreSQL", icon: "/images/tech-icons/postgresql.png" },
    ],
    isFeatured: true,
  },
  {
    title: "Curetrax – Remote Monitoring for Blood Cancer Recovery",
    slug: "curetrax-remote-monitoring-blood-cancer-recovery",
    client: "Curetrax",
    appLogo: "/images/case-studies/c19-logo.png",
    category: "Mobile App",
    image: "/images/case-studies/c19-bg.png",
    website: "",
    overview:
      'Curetrax is a clinical-grade digital health platform designed to support patients recovering from intensive blood cancer therapies—such as allogeneic stem-cell transplants and CAR-T cell treatments. Comprised of patient-facing mobile apps (CuretraxAllo and CuretraxCAR19) and a clinician dashboard ("Flightdeck" and "CuretraxDoc"), the system facilitates real-time symptom logging, wearable vitals tracking, and secure communication—all aimed at enabling at-home recovery with enhanced clinical oversight.',
    overview2:
      "It enables continuous symptom reporting and biometric tracking through mobile apps that feed real-time data to clinical care teams, empowering early intervention, faster hospital discharge, and more efficient home-based care.",
    tagline:
      "Accelerates patient discharge after transplant or CAR-T, easing hospital pressure and lowering infection risk. Utilizes Garmin smartwatches for monitoring heart rate, oxygen, steps, and sleep.",
    metrics: [
      { label: "Installations", value: "5k+" },
      { label: "Monitoring", value: "Treatment-specific" },
      { label: "Alerting", value: "Real-time" },
    ],
    appStrengths: [
      "Condition-specific design: Deep focus on blood cancer treatment recovery metrics.",
      "Clinician involvement: Collaborative medication edits and alert-driven care coordination.",
      "Wearables integration: Provides continuous, passive patient data monitoring.",
      "Treatment-specific monitoring addresses post-transplant risks.",
      "Supports multilingual use, suiting global deployments.",
    ],
    highlights: [
      "Early-alert clinical interventions: The system detected early fever or hypoxia in CAR-T patients, enabling preemptive inpatient care.",
      "Continuous home-based care: Combines wearable data and symptom reporting to shorten hospital stays without compromising safety.",
      "Clinical-grade UX: Designed for both patients and clinicians with high usability and secure data presentation.",
    ],
    technologies: [
      { name: "React Native", icon: "/images/tech-icons/react.png" },
      { name: "Next.js", icon: "/images/tech-icons/next.png" },
      { name: "Node.js", icon: "/images/tech-icons/node.png" },
      { name: "PostgreSQL", icon: "/images/tech-icons/postgresql.png" },
      { name: "Lambda", icon: "/images/tech-icons/lambda.png" },
    ],
    isFeatured: true,
  },
  {
    title: "Step App – Move-to-Earn Fitness Meets Web3 Rewards",
    slug: "step-app-move-to-earn-fitness-meets-web3-rewards",
    client: "Step App",
    appLogo: "/images/case-studies/c6-logo.png",
    category: "Mobile App",
    image: "/images/case-studies/c6-bg.png",
    website: "",
    overview:
      "Run & Move to Earn (package: app.step.client) is a fitness app that integrates move-to-earn (M2E) and Web3 elements, rewarding users in crypto for walking, running, hiking, or working out.",
    overview2:
      "With GPS tracking, AI‑guided workouts, and a built‑in non‑custodial crypto wallet, it transforms everyday movement into earnings while fostering a global community of over 300,000 “Steppers”.",
    tagline:
      "Earn rewards by walking, running, or hiking with GPS tracking. Enjoy AI coaching through video workouts. Use a non-custodial wallet for your earnings and gear.",
    metrics: [
      { label: "Installations", value: "100K" },
      { label: "Reviews", value: "1.17K" },
      { label: "Earn", value: "Earn Crypto for every step" },
    ],
    appStrengths: [
      "Motivational model: Crypto incentives transform fitness into a rewarding experience.",
      "Full-featured ecosystem: Tracking, AI coaching, wallet, and marketplace all in one app.",
      "Community-driven: Global challenges and events foster engagement.",
    ],
    highlights: [
      "Walk. Run. Earn real crypto—just by moving.",
      "Merges Web3 rewards, marketplace trading, and AI coaching.",
      "Democratizes fitness through tangible incentives.",
    ],
    technologies: [
      { name: "Flutter", icon: "/images/tech-icons/flutter.png" },
      { name: "Next.js", icon: "/images/tech-icons/next.png" },
      { name: "PostgreSQL", icon: "/images/tech-icons/postgresql.png" },
    ],
    isFeatured: true,
  },
  {
    title: "EstheMate – Personalized, Data-Driven Skincare Companion",
    slug: "esthemate-personalized-data-driven-skincare-companion",
    client: "EstheMate",
    appLogo: "/images/case-studies/c7-logo.png",
    category: "Mobile App",
    image: "/images/case-studies/c7-bg.png",
    website: "",
    overview: `EstheMate is a mobile-first skincare assistant developed by EstheMate Technology Pte. Ltd, designed to help users make informed decisions about their skin. `,
    overview2:
      "Whether you're aiming to hydrate, firm, tackle aging, or enhance elasticity, EstheMate offers personalized skin insights, custom routines, and expert-backed tips—free from brand bias. It turns daily skincare into an intuitive, data-guided experience.",
    tagline:
      "Skin Analysis: Evaluates hydration, oiliness, and elasticity. Custom Routines: Recommends personalized day/night regimens. Progress Tracking: Users can track changes over time.",
    metrics: [
      { label: "Downloads", value: "10K+" },
      { label: "Join it for Free", value: "Freemium" },
      { label: "User Satisfaction", value: "87%" },
    ],
    appStrengths: [
      "Data-driven personalization: Removes guesswork from skincare choices.",
      "Expert-guided advice: Skin science backed by articles and tips.",
      "Cross-platform compatibility: Lightweight and widely supported builds.",
    ],
    highlights: [
      "Track. Analyze. Glow.",
      "Fills the gap between generic apps and dermatologist visits.",
      "Focus on hydration, elasticity, oiliness for actionable insights.",
    ],
    technologies: [
      { name: "React Native", icon: "/images/tech-icons/react.png" },
      { name: "Node.js", icon: "/images/tech-icons/node.png" },
    ],
    isFeatured: true,
  },
  {
    title: "Orient Champions – Incentive Tracking for Sales Teams",
    slug: "orient-champions-incentive-tracking-for-sales-teams",
    client: "Orient Care",
    appLogo: "/images/case-studies/c8-logo.png",
    category: "Mobile App",
    image: "/images/case-studies/c8-bg.png",
    website: "",
    overview:
      "Orient Champions is a mobile app by Orient Electronics that empowers sales personnel to track, claim, and maximize monthly incentives tied to product sales. ",
    overview2:
      " It acts as a strategic gateway: sales reps scan barcodes of sold Orient Electronics units, access product information, and automatically calculate earned rewards—without manual paperwork. It fosters performance-driven sales excellence across the organization.",
    tagline:
      "Scan barcodes to log sales fast. Access detailed info on Orient Electronics products. Track monthly incentives in real-time. Visualize progress toward sales goals.",
    metrics: [
      { label: "Downloads", value: "10,000+" },
      { label: "No Data", value: "Collected or Shared" },
      { label: "User Satisfaction", value: "87%" },
    ],
    appStrengths: [
      "Streamlines incentive process, reducing administrative overhead.",
      "Product information centralized with incentive data.",
      "Multi-platform support with regular updates.",
    ],
    highlights: [
      "Simplifies sales workflow.",
      "Focuses on product-sales connection, barcode scans, and reward tracking.",
      "Zero data collection/sharing ensures trust and compliance.",
    ],
    technologies: [
      { name: "React Native", icon: "/images/tech-icons/react.png" },
      { name: "Node.js", icon: "/images/tech-icons/node.png" },
      { name: "MySQL", icon: "/images/tech-icons/mysql.png" },
    ],
    isFeatured: true,
  },
  {
    title: "'FT Play – Connecting Local Footballers Through Smart",
    slug: "ft-play-connecting-local-footballers-through-smart-verified-play",
    client: "FT Play",
    appLogo: "/images/case-studies/c9-logo.png",
    category: "Mobile App",
    image: "/images/case-studies/c9-bg.png",
    website: "",
    overview: `FT Play is a dynamic football app designed to bridge the gap between casual players and organized local football. The platform empowers users to book verified games, track personal performance, and build their football profile through a gamified, community-focused experience.`,
    overview2:
      "Whether you're looking for a quick 5-a-side or want to level up your on-pitch identity, FT Play turns everyday matches into data-backed, social opportunities.",
    tagline:
      "Join football matches, from 5-a-side to 11-a-side. Track your goals and assists with a digital FT Card. Stay updated with scheduled games and reminders.",
    metrics: [
      { label: "Hosted Games", value: "3,000+" },
      { label: "Active Users across the UK", value: "10,000+" },
      { label: "Host Satisfaction", value: "90%" },
    ],
    appStrengths: [
      "Verified, stat-driven matches increase trust.",
      "Gamified identity (FT Cards) is social-friendly.",
      "Growing community of 10K+ users.",
    ],
    highlights: [
      "Play Smarter, Not Just Harder.",
      "App-like web interface ensures accessibility and onboarding.",
      "Geo-targeted discovery of matches.",
    ],
    technologies: [
      { name: "React Native", icon: "/images/tech-icons/react.png" },
      { name: "Node.js", icon: "/images/tech-icons/node.png" },
      { name: "PostgreSQL", icon: "/images/tech-icons/postgresql.png" },
    ],
    isFeatured: true,
  },
  {
    title: "Bluesky – A New Era in Decentralized Social Media",
    slug: "bluesky-a-new-era-in-decentralized-social-media",
    client: "Bluesky",
    appLogo: "/images/case-studies/c10-logo.png",
    category: "Mobile App",
    image: "/images/case-studies/c10-bg.png",
    overview: `Blue Sky Prevention Centers mobile application, designed to revolutionize your healthcare experience. Blue Sky offers a comprehensive suite of features to streamline your journey towards wellness. `,
    overview2:
      "With the Blue Sky Prevention Centers app, you can effortlessly review your test results and their interpretations, gaining valuable insights into your health status anytime, anywhere. Scheduling appointments has never been easier, book appointments with your healthcare provider seamlessly. Communication is key to effective healthcare, and our app facilitates seamless interaction between you and your provider.",
    tagline:
      "Informed patients have better control over their health, reducing no-shows with reminders and easy scheduling. Messaging and result-sharing minimize calls and admin work.",
    metrics: [
      { label: "Downloads", value: "1000+" },
      { label: "Rating on App Store", value: "4.4" },
      { label: "User Satisfaction", value: "90%" },
    ],
    appStrengths: [
      "Patients feel more in control and informed about their health.",
      "With reminders and simplified scheduling, no-shows have decreased.",
      "Messaging and result-sharing reduce inbound calls and admin load.",
    ],
    highlights: [
      "Users can instantly view their lab results along with easy-to-understand interpretations—eliminating confusion and promoting proactive health awareness.",
      "The app streamlines the process of booking appointments, offering flexible options based on provider availability, with automatic reminders and follow-up prompts.",
      `Integrated secure messaging allows for instant feedback, clarifications, and care coordination, making it easier to stay on top of one's health journey.`,
    ],
    technologies: [
      { name: "Flutter", icon: "/images/tech-icons/flutter.png" },
      { name: "Node.js", icon: "/images/tech-icons/node.png" },
      { name: "PostgreSQL", icon: "/images/tech-icons/postgresql.png" },
    ],
    isFeatured: true,
  },
  {
    title: "Uzman Restaurant – Authentic Turkish Dining in Doha",
    slug: "uzman-restaurant-authentic-turkish-dining-in-doha",
    client: "Uzman Restaurant",
    appLogo: "/images/case-studies/c11-logo.jpg",
    category: "Shopify",
    image: "/images/case-studies/c11-bg.png",
    overview: `Uzman Restaurant, located in City Center Doha, offers a luxurious and immersive Turkish dining experience. It brings traditional Istanbul flavors to Qatar, serving everything from home-baked breads to Ottoman-style classics like Konya tandir kebap, Iskender kebap, and rich cold starters.`,
    overview2:
      "Uzman's inviting atmosphere pairs beautifully with its culinary artistry, creating a destination for families, couples, and friends seeking an authentic Turkish meal.",
    tagline:
      "Talabat has Uzman rocking a solid 5.0-star average with more than 1,500 ratings—proof that they always deliver like a champ!",
    appStrengths: [
      "Authentic cuisine: Deeply rooted in Turkish culinary tradition with premium dishes and ambiance.",
      "Dynamic menu offerings: Seasonal specials during Ramadan and street food campaigns enrich offerings.",
      "Halal & family-friendly: Appeals to broad halal demographics.",
    ],
    highlights: [
      "Experience the true taste of Istanbul in the heart of Doha: A compelling promise that resonates with expatriates and local food lovers.",
      "High delivery ratings and seasonal menus show agility and commitment to customer satisfaction.",
      "Mixed-use mall location brings foot traffic, supports both dine-in and delivery strategies, maximizing reach.",
    ],
    technologies: [
      { name: "Shopify", icon: "/images/tech-icons/shopify.png" },
      { name: "Liquid HTML", icon: "/images/tech-icons/liquid.png" },
      { name: "Tailwind", icon: "/images/tech-icons/tailwind.png" },
    ],
    isFeatured: true,
  },
  {
    title: "FastCat Mobile – Seamless Ferry Booking in the Philippines",
    slug: "fastcat-mobile-seamless-ferry-booking-in-the-philippines",
    client: "Fastcat",
    appLogo: "/images/case-studies/c12-logo.png",
    category: "Website",
    image: "/images/case-studies/c12-bg.png",
    overview: `FastCat Mobile, developed by eKonek Pilipinas for Archipelago Philippine Ferries Corporation (APFC), simplifies inter-island travel with fast, safe, and convenient ferry booking.`,
    overview2:
      "The app allows users to search schedules, reserve seats (for passengers and vehicles), and pay via credit/debit—all designed to reduce queues at terminals .",
    tagline:
      "Quickly search destinations and book seats or vehicle space with ease. Choose specific seats for a smoother terminal experience.",
    appStrengths: [
      "Modern catamaran RoRo fleet with speed and safety.",
      "Fleet offers multi-class seating (Economy, Premium, Business).",
      "Comprehensive route network across 11+ connections.",
    ],
    highlights: [
      'Brand Promise: "FerrySafe. FerryFast. FerryConvenient." reflects their unified ethos of safety, speed, and ease.',
      `Fleet Design: APFC's twin hulled catamarans (up to 320 passengers + vehicles) combine comfort with robust safety and accessibility (elevators included).`,
      "Training & Innovation: APFC invests in crew training, VR simulation, and aims to expand its fleet to 60 vessels—showing a long-term growth vision.",
    ],
    technologies: [
      { name: "Next.js", icon: "/images/tech-icons/next.png" },
      { name: "Node.js", icon: "/images/tech-icons/node.png" },
      { name: "PostgreSQL", icon: "/images/tech-icons/postgresql.png" },
    ],
    isFeatured: true,
  },
  {
    title: "OrientCare – Smart HVAC Solutions with Consumer-Centric Innovation",
    slug: "orientcare-smart-hvac-solutions-with-consumer-centric-innovation",
    client: "Orient Care",
    appLogo: "/images/case-studies/c13-logo.png",
    category: "Website",
    image: "/images/case-studies/c13-bg.png",
    overview: `OrientCare, by BlueEast under the Orient Electronics umbrella, delivers technologically advanced air-conditioning solutions including Mini Split Inverter Heat Pumps, Multi-Zone Systems, and Air Handler Units.`,
    overview2:
      " Aimed at homeowners and small-business users, OrientCare emphasizes smart, energy-efficient climate control with smart app integration, eco-saving options, and certified reliability—designed to enhance comfort, performance, and peace of mind.",
    tagline: "Compassionate Care. Delivered Where You Need It Most — At Home.",
    appStrengths: [
      "Smart-home ready with eco-modes and app control.",
      "Certified for global markets; scalable product range.",
      "Partner/dealer network & comprehensive documentation.",
    ],
    highlights: [
      'Smart-home integration offers a modern experience: "Start cooling within seconds" via sprint activation and voice enabled devices.',
      "Eco-centric messaging (T3 inverter and Eco Gear) resonates with environmentally conscious users, enhancing value beyond usual aircon offerings.",
      "Product scalability from single-room units to multi-zone setups allows end-to-end home comfort solutions.",
    ],
    technologies: [
      { name: "Shopify", icon: "/images/tech-icons/shopify.png" },
      { name: "Liquid HTML", icon: "/images/tech-icons/liquid.png" },
      { name: "Tailwind", icon: "/images/tech-icons/tailwind.png" },
    ],
    isFeatured: true,
  },
  {
    title: "Token Mart – Empowering Web3 & AI Builders",
    slug: "token-mart-empowering-web3-ai-builders",
    client: "Token Mart",
    appLogo: "/images/case-studies/c14-logo.png",
    category: "Website",
    image: "/images/case-studies/c14-bg.png",
    overview: `Venturethon Token Mart is a web portal created to support participants in the 10-day soonami Venturethon—a global hackathon and startup-launchpad focused on Web3 and AI innovation.`,
    overview2:
      "The Token Mart enables participants to access, utilize, and integrate various token-based tools and APIs (like Token API from Pinax and EtherMail credits) to prototype smart contract–enabled applications. It also serves as a centralized platform for managing token access paired with project-building sprints",
    tagline:
      "Integrate tokenized APIs (Pinax, EtherMail) and Layer-2 tools for Web3/AI developers with quick documentation and support.",
    appStrengths: [
      "Smart-home ready with eco-modes and app control.",
      "Certified for global markets; scalable product range.",
      "Partner/dealer network & comprehensive documentation.",
    ],
    highlights: [
      'Smart-home integration offers a modern experience: "Start cooling within seconds" via sprint activation and voice enabled devices.',
      "Eco-centric messaging (T3 inverter and Eco Gear) resonates with environmentally conscious users, enhancing value beyond usual aircon offerings.",
      "Product scalability from single-room units to multi-zone setups allows end-to-end home comfort solutions.",
    ],
    technologies: [
      { name: "Next.js", icon: "/images/tech-icons/next.png" },
      { name: "Node.js", icon: "/images/tech-icons/node.png" },
      { name: "PostgreSQL", icon: "/images/tech-icons/postgresql.png" },
    ],
    isFeatured: true,
  },
  {
    title: "AlKhazan – Premium Organic Food Supplier in MENA & Europe",
    slug: "alkhazan-premium-organic-food-supplier-in-mena-europe",
    client: "AlKhazan Food",
    appLogo: "/images/case-studies/c15-logo.png",
    category: "Shopify",
    image: "/images/case-studies/c15-bg.png",
    overview: `Founded in 2014 in Doha, AlKhazan specializes in importing and distributing organic, natural, and kid-friendly food products across Qatar and the UK.`,
    overview2:
      "With a commitment to quality, the company sources directly from top global manufacturers, delivering everything from gluten-free granola and nut milks to vegan breadsticks and veggie waffles—all with minimal ingredients and no added sugars",
    tagline:
      "We operate in Qatar and the UK, managing chilled, frozen, and ambient warehousing while ensuring compliance for GCC exports. We also support supermarkets and foodservice clients with in-store displays.",
    // metrics: [
    //   { label: "Focus", value: "Clean-label, organic" },
    //   { label: "Supply Chain", value: "Qatar & UK" },
    //   { label: "Logistics", value: "Regulation-ready" },
    // ],
    appStrengths: [
      "Spiral focus on clean-label, organic snacks.",
      "Established Qatar & UK supply chain.",
      "Controlled merchandising support.",
      "Lean, regulation-ready logistics.",
    ],
    highlights: [
      "Where the food comes to the Middle East: Conveys focus on curated, quality global food supply.",
      `Nutritional clarity: Full transparency about ingredients, allergies, and origin resonates with today's label-aware shoppers.`,
      "Dual-market advantage: Simultaneously managing GCC and UK distribution offers both scale and supply resilience.",
    ],
    technologies: [
      { name: "Shopify", icon: "/images/tech-icons/shopify.png" },
      { name: "Liquid HTML", icon: "/images/tech-icons/liquid.png" },
      { name: "Tailwind", icon: "/images/tech-icons/tailwind.png" },
    ],
    isFeatured: true,
  },
  {
    title: `KH Medicals – Qatar's Niche Medical Distributor & e-Pharmacy`,
    slug: "kh-medicals-qatar-niche-medical-distributor-e-pharmacy",
    client: "KH Medicals",
    appLogo: "/images/case-studies/c16-logo.png",
    category: "Shopify",
    image: "/images/case-studies/kh-medical.png",
    overview: `KH Medicals, based in Doha, Qatar, is a boutique distributor and e-pharmacy provider, specializing in medical and pharmaceutical supplies, biomedical equipment, health & beauty products, and skincare solutions. With a lean team of 10–50 employees, it focuses on reliable, personalized distribution to hospitals, clinics, and end consumers through both wholesale and online channels.`,
    overview2: "",
    tagline: `KH Medicals specializes in medical kits and behind-the-counter products in Qatar's healthcare sector. Its partnership with Neobionics enhances its credibility in neonatal medicine.`,
    // metrics: [
    //   { label: "Distribution", value: "Niche, biomedical" },
    //   { label: "Pharmacy", value: "Online via Talabat" },
    //   { label: "Offerings", value: "Swift, curated" },
    // ],
    appStrengths: [
      "Niche product distribution (biomedical, veterinary, aesthetics).",
      "Online pharmacy capability via Talabat ensures consumer reach.",
      "Compact size allows swift, curated service offerings.",
    ],
    highlights: [
      "Launch branded D2C store: Host catalogs, prescription uploads, and direct ordering options.",
      "Boost online visibility: Encourage reviews and partner promotions to increase trust.",
      "Digital marketing expansion: Invest in SEO, social media, and content around health and skincare education.",
      "Loyalty & subscription: Offer repeat-order programs, wellness bundles, and scheduled refill services.",
    ],
    technologies: [
      { name: "Shopify", icon: "/images/tech-icons/shopify.png" },
      { name: "Liquid HTML", icon: "/images/tech-icons/liquid.png" },
      { name: "Tailwind", icon: "/images/tech-icons/tailwind.png" },
    ],
    isFeatured: true,
  },
  {
    title:
      "Jonquils Café & Bakery – Artisanal Elegance Meets Pastry Innovation",
    slug: "jonquils-cafe-bakery-artisanal-elegance-meets-pastry-innovation",
    client: "Jonquils Café & Bakery",
    appLogo: "/images/case-studies/c17-logo.png",
    category: "Shopify",
    image: "/images/case-studies/c17-bg.png",
    overview: `Jonquils Café & Bakery, nestled at 125 Newbury Street in Boston's Back Bay, positions itself as an "elegant café" blending artisanal coffee, fine teas, and artistic pastries. The café's standout feature is its collaboration with 3D mold pastry chefs like Dinara Kasko, creating visually stunning geometric desserts—think apple, rose, and Rubik's cube like spheres—that double as Instagram-worthy masterpieces.`,
    overview2: "",
    tagline:
      "Where Art Meets Appetite – Every Plate Is a Canvas, Every Flavor a Masterpiece.",
    // metrics: [
    //   { label: "Design", value: "3D pastry, social buzz" },
    //   { label: "Menu", value: "Premium coffee & tea" },
    //   { label: "Location", value: "Multi-format seating" },
    // ],
    appStrengths: [
      "Visually striking, 3D pastry design that drives social media buzz.",
      "Premium coffee & tea curated from Gracenote, Rishi & Flora.",
      "Accessible location with multi-format seating.",
    ],
    highlights: [
      'Brand Promise: "An Elegant Café on Newbury Street"—enhanced by artful pastries and a polished interior that supports the "elegant" claim.',
      "Experience Fusion: Combines fine-dining aesthetics with café convenience: daily breakfast, casual seating, and high-end desserts.",
      "Customer Loyalty: Positive reviews around coffee, ambiance, and staff create a solid baseline for growth.",
    ],
    technologies: [
      { name: "Shopify", icon: "/images/tech-icons/shopify.png" },
      { name: "Liquid HTML", icon: "/images/tech-icons/liquid.png" },
      { name: "Tailwind", icon: "/images/tech-icons/tailwind.png" },
    ],
    isFeatured: true,
  },
  {
    title: `Credence Global – Smart, Independent Investment Advisory`,
    slug: "credence-global-smart-independent-investment-advisory",
    client: "Credence Global",
    appLogo: "/images/case-studies/c18-logo.png",
    category: "Shopify",
    image: "/images/case-studies/c18-bg.png",
    overview: `Credence Global (via their landing page at credence.global) is a boutique investment advisory firm headquartered in Doha, Qatar. They specialize in management and investment consulting, with a focus on delivering independent, transparent, client-first solutions. Leveraging a robust network of directors and industry experts, Credence introduces clients to capital markets, trade finance, and tailored business development opportunities—helping grow wealth via strategic insights and ethical practices.`,
    overview2: "",
    tagline: `Where Art Meets Appetite – Every Plate Is a Canvas, Every Flavor a Masterpiece.`,
    // metrics: [
    //   { label: "Advisory", value: "Transparent, independent" },
    //   { label: "Service Suite", value: "Trade finance to AI" },
    //   { label: "Access", value: "Regional HQ, global" },
    // ],
    appStrengths: [
      "Transparent, independent advisory style.",
      "Diverse service suite—Trade finance to AI portfolio tools.",
      "Regional HQ with global access.",
      "Boutique model enables tailored relationships.",
    ],
    highlights: [
      "Investment accounts made smarter: aligns with their landing page mantra credence.global.",
      "Client-centered ethos: Emphasizes advocacy and trust ahead of fees or products.",
      `Boutique advantage: High-touch and globally connected, but regionally anchored in Qatar's market.`,
    ],
    technologies: [
      { name: "Next.js", icon: "/images/tech-icons/next.png" },
      { name: "Node.js", icon: "/images/tech-icons/node.png" },
      { name: "PostgreSQL", icon: "/images/tech-icons/postgresql.png" },
    ],
    isFeatured: true,
  },
  {
    title: "Linked Golf – Building Your Lifelong Foresome",
    slug: "linked-golf-building-your-lifelong-foresome",
    client: "Linked Golf",
    appLogo: "/images/case-studies/c20-logo.png",
    category: "Website",
    image: "/images/case-studies/c20-bg.png",
    overview: `Linked Golf is a community-first golf app that makes it effortless to expand your golf network, schedule outings, and chat with fellow players—all designed to get you on the course more often.`,
    overview2:
      "By syncing your availability, connecting via scanned QR codes, and facilitating real-time conversation, Linked Golf transforms casual encounters into lifelong golf buddies and consistent play opportunities .",
    tagline:
      "Mark your free days to find players easily. On the course, scan a QR code to connect—no phone numbers required.",
    // metrics: [
    //   { label: "Users", value: "100K+" },
    //   { label: "Courses", value: "15,000+" },
    //   { label: "Free to use", value: "Community growth" },
    // ],
    appStrengths: [
      "Rapid scaling—with 100K+ users across 15,000+ courses.",
      "Social-first: QR scanning makes in-person connections spontaneous.",
      "Free to use, focused on community growth.",
    ],
    highlights: [
      `Golf more, text less: The app addresses golfers' core behavior—finding people who can actually play.`,
      "Community locked-in: QR code connectivity encourages sustained growth on the course, not just in-app.",
      "Scalable format: Highly extensible to league formats, statistical modules, and monetization.",
    ],
    technologies: [
      { name: "Next.js", icon: "/images/tech-icons/next.png" },
      { name: "Node.js", icon: "/images/tech-icons/node.png" },
      { name: "PostgreSQL", icon: "/images/tech-icons/postgresql.png" },
    ],
    isFeatured: true,
    reviewVideoUrl: "https://www.youtube.com/embed/-tDeffu-czE",
  },
  {
    title:
      "Mian Muhammad Fazal Memorial Hospital (MMFMH) – Free Quality Healthcare in Lahore",
    slug: "mian-muhammad-fazal-memorial-hospital-mmfmh-free-quality-healthcare-in-lahore",
    client: "Mian Muhammad Fazal Memorial Hospital",
    appLogo: "/images/case-studies/c21-logo.png",
    category: "Website",
    image: "/images/case-studies/c21-bg.png",
    overview: `MMFMH is a charitable eight-bed outpatient hospital in Lahore, Pakistan, established in 2014 by Orient Electronics (Orient Group). Located near Multan Road, the hospital aims to provide free-of-cost medical care and medicines to underprivileged populations—regardless of creed or background.`,
    overview2:
      " All services, including pathology and radiology, are offered at minimal or no charge, blending compassion with clinical excellence.",
    tagline:
      "Offers free consultations, prescriptions, and imaging. Keeps secure patient records. Initiatives include daily iftar meals and scholarships.",
    // metrics: [
    //   { label: "Care", value: "High-quality, free" },
    //   { label: "Funding", value: "Strong, no constraints" },
    //   { label: "Records", value: "Robust system" },
    // ],
    appStrengths: [
      "High-quality, free specialized care in a rural setting.",
      "Strong funding—no resource constraints.",
      "Robust patient record system.",
      "Holistic charity ecosystem.",
    ],
    highlights: [
      'Mission-Centric Model: With "quality healthcare for all, free of cost", MMFMH serves as an anchor of healthcare accessibility in underserved areas.',
      "Expert-Led Care: Senior consultants provide specialist-level services, rare in community hospitals.",
      "Sustainable Philanthropy: Supported by Orient Group ensures longevity and program consistency.",
      "Community as Foundation: Health services are part of a broader welfare ecosystem, strengthening long-term impact.",
    ],
    technologies: [
      { name: "Next.js", icon: "/images/tech-icons/next.png" },
      { name: "Node.js", icon: "/images/tech-icons/node.png" },
      { name: "PostgreSQL", icon: "/images/tech-icons/postgresql.png" },
    ],
    isFeatured: true,
  },
  {
    title: "Steppi – Move More, Save More",
    slug: "steppi-move-more-save-more",
    client: "Steppi",
    appLogo: "/images/case-studies/c22-logo.png",
    category: "Mobile App",
    image: "/images/case-studies/c22-bg.png",
    overview: `Steppi, by DMCC (Dubai-based), is a health and fitness app designed to turn everyday activity into real-life rewards. Users track steps via smartphone or synced wearables, earn credits in a "Steps Wallet", and redeem them for discounts on dining, gym passes, shopping, and entertainment—making each step count.`,
    overview2:
      "The platform also powers corporate wellness via virtual challenges, real-time leaderboards, and branded team competitions.",
    tagline:
      "Access analytics for participation and rewards. Sync steps with Apple Health, Google Fit, or wearables. Earn credits for offers like 2-for-1 deals and free gym passes.",
    // metrics: [
    //   { label: "Motivation", value: "Cash-backed" },
    //   { label: "Focus", value: "Individual & corporate" },
    //   { label: "Integration", value: "Broad device" },
    // ],
    appStrengths: [
      "Strong cash-backed motivation—with local retail benefits.",
      "Dual focus: individual app & corporate programs.",
      "Charity-aligned campaigns enhance social brand value.",
      "Broad device integration & easy syncing.",
    ],
    highlights: [
      "Pioneer in corporate wellness across the GCC, fueling healthy work culture and morale.",
      "Gamified step economy incentivizes movement and consumer engagement through tangible rewards.",
      "Community-driven impact fuses individual fitness with collective philanthropic results.",
    ],
    technologies: [
      { name: "Flutter", icon: "/images/tech-icons/flutter.png" },
      { name: "Node.js", icon: "/images/tech-icons/node.png" },
      { name: "PostgreSQL", icon: "/images/tech-icons/postgresql.png" },
    ],
    isFeatured: true,
  },
  {
    title: "Capsule Lab – Web3-Powered Event Ticketing",
    slug: "capsule-tickets-web3-powered-events-ticketing",
    client: "Capsule Labs",
    appLogo: "/images/case-studies/c23-logo.png",
    category: "Mobile App",
    image: "/images/case-studies/c23-bg.png",
    overview: `Capsule Tickets by Capsule Labs (Perth, Australia) is a modern event ticketing platform leveraging blockchain/Web3 to deliver digital ownership, authenticity, and a vibrant post-event community.`,
    overview2:
      "Aimed at independent artists, promoters, and venue operators, Capsule offers secure purchases, traceable resales, community discovery, and collectible ticket memorabilia—enabling fans to own every live moment with confidence.",
    tagline:
      "Blockchain tickets are digital collectibles that enable peer-to-peer resale with authenticity. Users receive personalized event suggestions.",
    // metrics: [
    //   { label: "Ownership", value: "Web3-native" },
    //   { label: "Resale", value: "Trust-built market" },
    //   { label: "Protection", value: "Strong fraud" },
    // ],
    appStrengths: [
      "Web3-native—secure ownership and unique ticket collectibles.",
      "Trust-built resale market with fair pricing.",
      "Strong fraud protection & transparency.",
      "Mobile-first with scanner integration.",
    ],
    highlights: [
      '"Your ticket, your ownership": Empowers fans with real ownership, reusable memorabilia, and safe resale.',
      "Creator-first model: Small promoters and independent artists get efficient ticket distribution w/ instant resale.",
      "Post-event community: Collectible tickets encourage fans to reconnect and relive experiences.",
    ],
    technologies: [
      { name: "Flutter", icon: "/images/tech-icons/flutter.png" },
      { name: "Node.js", icon: "/images/tech-icons/node.png" },
      { name: "PostgreSQL", icon: "/images/tech-icons/postgresql.png" },
    ],
    isFeatured: true,
    reviewVideoUrl: "https://www.youtube.com/embed/UOIOpaHtZxA",
    founder: {
      name: "Kenny Kemsley",
      role: "Founder & CEO Capsule Labs",
      image: "/images/testimonial/Kenny.png",
    },
    videoId: "UOIOpaHtZxA",
  },

  {
    title: "Capsule Lab – Web3-Powered Event Ticketing",
    slug: "capsule-tickets-web3-powered-event-ticketing",
    client: "Dawaai",
    appLogo: "/images/case-studies/c24-logo.png",
    category: "Website",
    image: "/images/case-studies/c24-bg.png",
    overview: `Capsule Tickets by Capsule Labs (Perth, Australia) is a modern event ticketing platform leveraging blockchain/Web3 to deliver digital ownership, authenticity, and a vibrant post-event community.`,
    overview2:
      "Aimed at independent artists, promoters, and venue operators, Capsule offers secure purchases, traceable resales, community discovery, and collectible ticket memorabilia—enabling fans to own every live moment with confidence.",
    tagline:
      "Blockchain tickets are digital collectibles that enable peer-to-peer resale with authenticity. Users receive personalized event suggestions.",
    // metrics: [
    //   { label: "Ownership", value: "Web3-native" },
    //   { label: "Resale", value: "Trust-built market" },
    //   { label: "Protection", value: "Strong fraud" },
    // ],
    appStrengths: [
      "Web3-native—secure ownership and unique ticket collectibles.",
      "Trust-built resale market with fair pricing.",
      "Strong fraud protection & transparency.",
      "Mobile-first with scanner integration.",
    ],
    highlights: [
      "“Your ticket, your ownership”: Empowers fans with real ownership, reusable memorabilia, and safe resale.",
      "Creator-first model: Small promoters and independent artists get efficient ticket distribution w/ instant resale.",
      "Post-event community: Collectible tickets encourage fans to reconnect and relive experiences.",
    ],
    technologies: [
      { name: "Next.js", icon: "/images/tech-icons/next.png" },
      { name: "Node.js", icon: "/images/tech-icons/node.png" },
      { name: "PostgreSQL", icon: "/images/tech-icons/postgresql.png" },
    ],
    isFeatured: true,
  },

  {
    title: "FT Play – Revolutionizing Local Football with Tech",
    slug: "ft-play-revolutionizing-local-football-with-tech",
    client: "FTPlay",
    appLogo: "/images/case-studies/c25-logo.png",
    category: "Website",
    image: "/images/case-studies/c25-bg.png",
    overview: `Whether you're looking for a quick 5-a-side or want to level up your on-pitch identity, FT Play turns everyday matches into data-backed, social opportunities.FT Play is a dynamic football app designed to bridge the gap between casual players and organized local football. The platform empowers users to book verified games, track personal performance, and build their football profile through a gamified, community-focused experience.`,
    overview2: "",
    tagline:
      "Blockchain tickets are digital collectibles that enable peer-to-peer resale with authenticity. Users receive personalized event suggestions.",
    // metrics: [
    //   { label: "Discovery", value: "Local games" },
    //   { label: "Tracking", value: "Real-time stats" },
    //   { label: "Personalization", value: "FT Card" },
    // ],
    appStrengths: [
      "Local Game Discovery: Instantly find and join verified football matches near you.",
      "Real-Time Stat Tracking: Track goals, assists, wins & more—all verified by match hosts.",
      "Personalized FT Card: Showcase your playing style with skill ratings in Technique, Physical, Defence, and Attack.",
    ],
    highlights: [
      "Makes finding and joining local football games as easy as booking a ride.",
      "Tracks individual player stats like goals, assists, and wins.",
      "Builds a dynamic FT Card, showcasing Technique, Physical, Defence, and Attack ratings.",
      "Offers host-verified match data to ensure credibility and fairness.",
    ],
    technologies: [
      { name: "Next.js", icon: "/images/tech-icons/next.png" },
      { name: "Node.js", icon: "/images/tech-icons/node.png" },
      { name: "PostgreSQL", icon: "/images/tech-icons/postgresql.png" },
    ],
    isFeatured: true,
  },

  {
    title: "myUnity (by Netsmart) – Optimizing Home & Hospice Care with EHR",
    slug: "myunity-by-netsmart-optimizing-home-hospice-care-with-ehr",
    client: "Medmodus",
    appLogo: "/images/case-studies/c27-logo.png",
    category: "Power Pages",
    image: "/images/case-studies/c27-bg.png",
    overview: `myUnity, developed by Netsmart, is a cloud-based EHR and care coordination platform tailored for home health, hospice, and post-acute care providers.`,
    overview2:
      "It integrates scheduling, documentation, billing, and EVV, offering clinicians and administrators a unified workflow to deliver high-quality, compliant care—including Medicaid and Medicare coordination",
    tagline:
      "Clinicians can access schedules and log visits on mobile devices. Unified patient records streamline care, while integrated billing supports compliance with Medicaid and Medicare.",
    // metrics: [
    //   { label: "Ease-of-use", value: "Strong for caregivers" },
    //   { label: "EVV & Billing", value: "Integrated" },
    //   { label: "Support", value: "Responsive, live" },
    // ],
    appStrengths: [
      "Strong ease-of-use and mobile support for caregivers",
      "Integrated EVV and billing streamline operations",
      "Responsive customer service and live support",
      "ONC-certified, compliant with Medicaid/Medicare",
    ],
    highlights: [
      "Unified clinical and administrative workflows reduce duplication and enhance caregiver efficiency",
      "Mobile-centric design empowers field staff with real-time access and EVV via smartphones/tablets",
      "Government alignment (e.g., GCloud14) enables scaling into public-sector care segments like NHS",
    ],
    technologies: [
      { name: "Power Pages", icon: "/images/tech-icons/power.png" },
      { name: "Tailwind", icon: "/images/tech-icons/tailwind.png" },
    ],
    isFeatured: true,
  },
  {
    title: "Heavenly Tasty – Healthy, Organic Snacking for Kids",
    slug: "heavenly-tasty-healthy-organic-snacking-for-kids",
    client: "Heavenly Tasty",
    appLogo: "/images/case-studies/c28-logo.png",
    category: "Low Code",
    image: "/images/case-studies/c28-bg.mp4",
    overview: `Heavenly Tasty Organics specializes in crafting organic, additive-free snacks for babies and toddlers. Their products—such as coconut squishies and Italian breadsticks—boast no added sugar or salt, appealing to health-conscious parents looking for clean-label options.`,
    overview2: "",
    tagline:
      "Their Mini Italian Breadsticks won Best Organic Product at the 2016 Maternity & Infant Awards, highlighting natural ingredients and transparent manufacturing—key for parents.",
    // metrics: [
    //   { label: 'Award Winner', value: '2016 Maternity & Infant Awards' },
    //   { label: 'Target Market', value: 'Health-conscious parents' },
    //   { label: 'Product Focus', value: 'Clean-label, organic' },
    // ],
    appStrengths: [
      "Clean-label, organic products with no added sugar",
      "Community engagement with preschools & nurseries",
      "Instagram content from users powerful social proof",
    ],
    highlights: [
      "Unique market position: A health-first snack brand tailored for early childhood nutrition.",
      "Built-in trust: Awards and community initiatives create a strong foundation.",
      "Organic growth model: Social sharing and classroom engagement fuel brand advocacy.",
    ],
    technologies: [
      { name: "Replit", icon: "/images/tech-icons/replit.png" },
      { name: "Next.js", icon: "/images/tech-icons/next.png" },
      { name: "Tailwind", icon: "/images/tech-icons/tailwind.png" },
    ],
    isFeatured: true,
  },
  {
    title: "E-Com Console – Custom E-Commerce Admin Panel Built with Retool",
    slug: "e-com-console-custom-e-commerce-admin-panel-built-with-retool",
    client: "E-com Console",
    appLogo: "/images/case-studies/c29-logo.png",
    category: "Low Code",
    image: "/images/case-studies/c29-bg.png",
    overview: `E-Com Console is a custom internal tool built using Retool, designed to streamline the backend operations of a mid-sized e-commerce store. It centralizes key workflows like order fulfillment, inventory management, customer support, and product updates—all in one intuitive dashboard.`,
    overview2:
      "This Retool-powered admin app replaced a mix of spreadsheets, disconnected tools, and manual workflows with a secure, real-time, and role-based admin panel",
    tagline:
      "Works for bulk refunds and low stock alerts. Summarize tickets and add reply suggestions. Also, track product return reasons and restock.",
    // metrics: [
    //   { label: 'Total Products', value: '7' },
    //   { label: 'Total Orders', value: '7' },
    //   { label: 'Total Revenue', value: '64850' },
    // ],
    appStrengths: [
      "Centralize store operations",
      "Improve order fulfillment speed",
      "Reduce support bottlenecks",
      "Eliminate reliance on dev team",
    ],
    highlights: [
      "40% faster order fulfillment through real-time updates",
      "30% fewer customer support tickets",
      "Empowered non-tech teams to manage operations without engineering help",
      "Full audit trail of all admin edits for compliance and traceability",
    ],
    technologies: [
      { name: "Retool", icon: "/images/tech-icons/retool.png" },
      { name: "SQL", icon: "/images/tech-icons/sql.png" },
      { name: "PostgreSQL", icon: "/images/tech-icons/postgresql.png" },
    ],
    isFeatured: true,
  },
  {
    title:
      "Travilo – Simplifying Vacation Planning with a Seamless Web Experience",
    slug: "travilo-simplifying-vacation-planning-with-seamless-web-experience",
    client: "Travilo",
    appLogo: "/images/case-studies/c30-logo.png",
    category: "No-Code",
    image: "/images/case-studies/c30-bg.png",
    overview: `Travilo is a dynamic, user-first vacation planning platform designed to help users discover destinations, create itineraries, and book experiences, all through an intuitive interface.`,
    overview2:
      "Built using Webflow, the website combines visual elegance, responsiveness, and functional interactivity to deliver a travel planning experience that feels personal, fast, and fun.",
    tagline:
      "Works for bulk refunds and low stock alerts. Summarize tickets and add reply suggestions. Also, track product return reasons and restock.",
    // metrics: [
    //   { label: 'Time on Site', value: '+10% increase' },
    //   { label: 'Lead Submissions', value: '3x more' },
    //   { label: 'Mobile Performance', value: '+85% improvement' },
    // ],
    appStrengths: [
      "Create a visually immersive travel site",
      "Let users build personalized vacation plans",
      "Drive user sign-ups and leads for tour packages",
      "Ensure mobile-first usability",
    ],
    highlights: [
      "+210% increase in time spent on site due to engaging, interactive layout",
      "3x more lead form submissions after optimizing mobile CTAs and multi-step forms",
      "+85% improvement in mobile performance scores after Webflow-native optimizations",
      "Page load time under 2 seconds, ensuring quick access across all regions",
    ],
    technologies: [{ name: "Webflow", icon: "/images/tech-icons/webflow.png" }],
    isFeatured: true,
  },
  {
    title:
      "Building a Scalable No-Code Website for a Tech Agency Using Bubble.io",
    slug: "building-scalable-no-code-website-tech-agency-bubble-io",
    client: "Techtiz",
    appLogo: "/images/case-studies/c31-logo.png",
    category: "No Code",
    image: "/images/case-studies/c31-bg.png",
    website: "",
    overview:
      "Techtiz needed a dynamic, scalable website to showcase its broad suite of tech services, manage inquiries, and streamline lead capture—all without relying on a traditional development stack. The goal was to move fast without sacrificing design quality or backend flexibility.",
    overview2: "",
    tagline:
      "Advanced Contact Form with conditional logic and auto emails. Landing Pages for Web Development, SaaS, and UI/UX. Dynamic CMS with Bubble's database for updates.",
    // metrics: [
    //   { label: '100% no-code stack', value: 'Rapid deployment' },
    //   { label: '42% increase in service inquiries', value: 'within first month' },
    //   { label: '95/100 Google PageSpeed score', value: 'on desktop' },
    // ],
    appStrengths: [
      "100% no-code stack",
      "42% increase in service inquiries within the first month",
      "95/100 Google PageSpeed score on desktop",
      "Team now updates content without developer involvement",
    ],
    highlights: [
      "Bubble.io proved powerful for building both frontend and backend logic in a unified space",
      "No-code saved development time and gave the team autonomy post-launch",
      "Highly customizable for agencies needing both visual polish and robust function",
    ],
    technologies: [{ name: "Bubble", icon: "/images/tech-icons/bubble.png" }],
    isFeatured: true,
  },
  {
    title: "Heartfelt Online Store for Pet Lovers with Lovable",
    slug: "heartfelt-online-store-pet-lovers-lovable",
    client: "Perfect Paw Place",
    appLogo: "/images/case-studies/c32-logo.png",
    category: "Low Code",
    image: "/images/case-studies/c32-bg.png",
    website: "",
    overview:
      "Perfect Paw Place is a cozy neighborhood pet shop turned charming online store, built using the Lovable platform. Designed for pet lovers, the site offers a curated selection of treats, toys, grooming tools, and accessories, along with an easy-to-use service booking system. With a focus on warmth, trust, and community, the site blends e-commerce with educational content and featuring pet care tips.",
    overview2:
      "Built in just under three days, the website reflects the brand’s personality—friendly, playful, and purpose-driven—while giving the team full control over content and customer interaction, all without writing a single line of code.",
    tagline:
      "Categories for dogs, cats, treats, toys, accessories, and grooming tools. Online appointments for grooming and nail trimming via Lovable's scheduling module. Embedded Google Maps and contact form for curbside pickup.",
    // metrics: [
    //   { label: 'Build Time', value: 'Under 3 days' },
    //   { label: 'Content Control', value: 'Full team autonomy' },
    //   { label: 'Community Features', value: 'Pet gallery & local focus' },
    // ],
    appStrengths: [
      "Lovable-native email builder with weekly newsletters and promotions",
      "User-submitted pet photos showcased weekly",
      "Auto-pulled posts to keep content fresh and friendly",
      "Regular tips, product spotlights, and featured local adoptions",
    ],
    highlights: [
      "Lovable's modular design made it easy to go live fast and grow gradually",
      "Owner can now update products, add blogs, and run promos—without help",
      "Community-driven features (pet gallery, blog, insta feed) helped the brand feel personal and local",
    ],
    technologies: [
      { name: "Loveable", icon: "/images/tech-icons/loveable.png" },
      { name: "TypeScript", icon: "/images/tech-icons/typescript.png" },
      { name: "Tailwind", icon: "/images/tech-icons/tailwind.png" },
      { name: "Next.js", icon: "/images/tech-icons/next.png" },
    ],
    isFeatured: true,
  },
  {
    title: "Launching a Modern Security Agency Website with Framer for Nicaea",
    slug: "launching-modern-security-agency-website-framer-nicaea",
    client: "Nicaea",
    appLogo: "/images/case-studies/c33-logo.png",
    category: "No Code",
    image: "/images/case-studies/c33-bg.png",
    website: "",
    overview:
      "Nicaea is a modern private security agency offering high-end protection services to individuals, corporate clients, and events. To reflect its reputation for precision, discretion, and professionalism, Nicaea needed a digital presence that felt both secure and sophisticated.",
    overview2:
      "Built entirely in Framer, the new website combines sharp design with smooth, interactive UX—tailored to communicate trust, clarity, and strength.",
    tagline:
      'A video fades in with the headline "Securing What Matters" and a CTA to book a consultation. Services include Personal Security, Executive Transport, Risk Assessment, and Event Security, each with hover effects.',
    // metrics: [
    //    { label: '60% increase in inquiry submissions', value: 'within first month' },
    //    { label: '3.8x more time spent on mobile', value: 'vs. old site' },
    //    { label: '5+ corporate clients onboarded', value: 'through the quote form' },
    //    { label: '98 performance score', value: 'on Google PageSpeed Insights' },
    // ],
    appStrengths: [
      "60% increase in inquiry submissions within first month",
      "3.8x more time spent on mobile vs. old site",
      "5+ corporate clients onboarded through the quote form",
      "98 performance score on Google PageSpeed Insights",
    ],
    highlights: [
      "Framer enabled a polished, custom feel without developer overhead",
      "Visual clarity + trust messaging = strong conversion uplift",
      "Mobile experience was a major win for busy clients on-the-go",
    ],
    technologies: [{ name: "Framer", icon: "/images/tech-icons/framer.png" }],
    isFeatured: true,
  },
  {
    title: "Automating Upwork Job Hunting with n8n",
    slug: "automating-upwork-job-hunting-n8n",
    client: "In House Project",
    appLogo: "/images/case-studies/c34-logo.png",
    category: "AI Automation",
    image: "/images/case-studies/c34-bg.png",
    website: "",
    overview:
      "Freelancers spend hours scrolling, filtering, and applying for jobs on platforms like Upwork. To streamline this time-consuming process, we built an automated Upwork job-hunting assistant using n8n.",
    overview2:
      "The system scans for new job listings based on predefined criteria, filters high-quality matches, and sends instant notifications—freeing up time and increasing response speed for better client wins",
    tagline:
      "Auto-save jobs with status tracking (applied/declined), CRM integration (Pipedrive/Trello), lead digests, and smart auto-replies.",
    // metrics: [
    //    { label: 'Reduced job search time', value: 'by 90%' },
    //    { label: 'Instant alerts improved early proposal submissions', value: 'higher response rate' },
    //    { label: 'Increased qualified leads per week', value: 'from ~4 to 20+' },
    //    { label: 'Allowed better focus on proposals', value: 'not search' },
    // ],
    appStrengths: [
      "Reduced job search time by 90%",
      "Instant alerts improved early proposal submissions → higher response rate",
      "Increased qualified leads per week from ~4 to 20+",
      "Allowed better focus on proposals, not search",
    ],
    highlights: [
      "Focus on closing, not scrolling – Proactively discover jobs before competitors",
      "Fully adaptable – Easily clone the workflow for different services or clients",
      "Saves hours weekly – Especially powerful for agencies or multi-profile freelancers",
    ],
    technologies: [{ name: "n8n", icon: "/images/tech-icons/ai-4.png" }],
    isFeatured: true,
  },
  {
    title: "Automating Appointment Reminders with n8n",
    slug: "automating-appointment-reminders-n8n",
    client: "In House Project",
    appLogo: "/images/case-studies/c35-logo.png",
    category: "AI Automation",
    image: "/images/case-studies/c35-bg.png",
    website: "",
    overview:
      "Manual appointment follow-ups can lead to missed meetings, no-shows, and frustrated clients. To solve this, we built a fully automated appointment reminder system using n8n.",
    overview2:
      "The workflow fetches scheduled bookings from a calendar or CRM, sends timely reminders across channels like email, SMS, or WhatsApp, and even allows clients to confirm, reschedule, or cancel—all without human intervention.",
    tagline:
      "Eliminate manual appointment reminder tasks. Reduce client no-shows and last-minute cancellations. Create a flexible, multi-channel reminder system.",
    // metrics: [
    //    { label: 'Reduced no-shows', value: 'by 75%' },
    //    { label: 'Time saved on manual reminders', value: '10+ hours/week' },
    //    { label: 'Client satisfaction improvement', value: '40%' },
    //    { label: 'Automated reminder delivery rate', value: '99.9%' },
    // ],
    appStrengths: [
      "Sends automated reminders via email",
      "Personalized with client names, time zones, and service details",
      "Updates Airtable/Notion with real-time status",
    ],
    highlights: [
      "Improved attendance → fewer no-shows, smoother schedules",
      "Multi-platform integration → works with existing calendar or CRM",
      "Scalable & reusable → can be adapted for coaches, clinics, agencies, or service businesses",
      "No-code friendly → built entirely in n8n with drag-and-drop workflows",
    ],
    technologies: [{ name: "n8n", icon: "/images/tech-icons/ai-4.png" }],
    isFeatured: true,
  },
  {
    title: "AI-Powered Client Insights Automation with Zapier",
    slug: "ai-powered-client-insights-automation",
    client: "In House Project",
    appLogo: "/images/case-studies/c36-logo.png",
    category: "AI Automation",
    image: "/images/case-studies/c36-bg.png",
    website: "",
    overview:
      "Manual handling of client inquiries often leads to delays, missed insights, and inconsistent follow-up. To resolve this, we developed an Automated Client Insights Workflow using Google Forms, Claude AI, Zapier, Gmail, and optional Google Apps Script—a no-code/low-code solution that collects, summarizes, and delivers client insights in real time.",
    overview2:
      "This system enables teams to gain a deeper understanding of client pain points and goals within seconds of a form submission—boosting both efficiency and personalization in the sales or onboarding process.",
    tagline:
      "Turn client feedback into easy insights no coding required! With Zapier, everything flows smoothly—from grabbing data to AI processing to sending emails no hands on work needed.",
    // metrics: [],
    appStrengths: [
      "Instantly summarize discovery form submissions for SDRs and AEs.",
      "Automate intake for service-based businesses or agencies.",
      "Route and summarize client complaints or tickets to the correct department.",
    ],
    highlights: [
      "90% reduction in manual review time",
      "100% real-time delivery of actionable summaries",
      "Consistency and clarity in client data interpretation",
      "Boosted responsiveness from internal teams, leading to higher conversion and satisfaction",
      "No-code friendly and easy to replicate for other use cases",
    ],
    technologies: [
      { name: "Zapier", icon: "/images/tech-icons/ai-5.png" },
      { name: "Gmail", icon: "/images/tech-icons/googleCharts.png" },
      { name: "Google Forms", icon: "/images/tech-icons/googleForm.png" },
    ],
    isFeatured: true,
  },
  {
    title:
      "Capital Shack – Intelligent OCR Workflow for Merchant Application Automation",
    slug: "capital-shack-intelligent-ocr-workflow-for-merchant-application-automation",
    client: "Capital Shack Funding LLC",
    appLogo: "/images/case-studies/c37-logo.png",
    category: "AI Automation",
    image: "/images/case-studies/c37-bg.png",
    website: "",
    overview:
      "Capital Shack Funding LLC is a short-term working capital provider, specializing in merchant cash advances (MCA) and syndication opportunities. Founded as a rebrand of Zahav Asset Management in 2023, their operations are powered by proprietary underwriting models, a custom CRM, and tight ISO relationships.",
    overview2: "",
    tagline:
      "To eliminate manual data entry and accelerate deal processing, the goal was to build an automated document intelligence pipeline.",
    // metrics: [],
    appStrengths: [
      "Transforms PDF submissions into structured CRM entries with zero manual input.",
      "Uses Document AI to extract key fields accurately from varied ISO forms.",
      "Instantly updates Google Sheets and AppSheet for live deal tracking.",
    ],
    highlights: [
      "~75% reduction in manual entry time",
      "Fewer data entry errors due to OCR + validation logic",
      "End-to-end integration between Google Workspace, AppSheet, and Document AI",
      "Staff efficiency gains, freeing time for underwriting and compliance",
    ],
    technologies: [
      { name: "Zapier", icon: "/images/tech-icons/ai-5.png" },
      { name: "Gmail", icon: "/images/tech-icons/googleCharts.png" },
      { name: "Google Forms", icon: "/images/tech-icons/googleForm.png" },
      { name: "Google Sheets", icon: "/images/tech-icons/googleSheet.png" },
    ],
    isFeatured: true,
  },

  // adding more case studies here (8 more case studies)
  {
    title: "AI-Driven Customer Support Automation",
    slug: "ai-driven-customer-support-automation",
    client: "In House Project",
    appLogo: "/images/case-studies/email-icon.png",
    category: "AI Automation",
    image: "/images/case-studies/c38.png",
    website: "",
    overview:
      "Handling high volumes of support emails can strain teams and slow response times. We built a fully automated workflow that reads incoming Gmail messages, extracts order and product information, fetches context from Shopify, and leverages AI (Gemini) with a Pinecone vector store to craft accurate, on-brand replies. ",
    overview2:
      "Each response is sent back to the customer and the email is labeled in Gmail (e.g., Cancel/Refund, Shipping/Product, Happy Customers) for streamlined tracking.",
    tagline:
      "To eliminate manual data entry and accelerate deal processing, the goal was to build an automated document intelligence pipeline.",
    // metrics: [],
    appStrengths: [
      "Transforms PDF submissions into structured CRM entries with zero manual input.",
      "Uses Document AI to extract key fields accurately from varied ISO forms.",
      "Instantly updates Google Sheets and AppSheet for live deal tracking.",
    ],
    highlights: [
      "~75% reduction in manual entry time",
      "Fewer data entry errors due to OCR + validation logic",
      "End-to-end integration between Google Workspace, AppSheet, and Document AI",
      "Staff efficiency gains, freeing time for underwriting and compliance",
    ],
    technologies: [
      { name: "Zapier", icon: "/images/tech-icons/ai-5.png" },
      { name: "Gmail", icon: "/images/tech-icons/googleCharts.png" },
      { name: "Google Forms", icon: "/images/tech-icons/googleForm.png" },
      { name: "Google Sheets", icon: "/images/tech-icons/googleSheet.png" },
    ],
    isFeatured: true,
  },
  {
    title:
      "Voice AI Appointment Booking Assistant – Built with n8n & ElevenLabs",
    slug: "voice-ai-appointment-booking-assistant-built-with-n8n-elevenLabs",
    client: "In House Project",
    appLogo: "/images/case-studies/user-icon.png",
    category: "AI Automation",
    image: "/images/case-studies/c39.png",
    website: "",
    overview:
      "Managing patient appointment requests manually can be inefficient and prone to missed opportunities. This automated workflow, powered by n8n and ElevenLabs Voice AI, listens to patient inquiries, detects their medical need or specialization, matches them to the right doctor, and books an appointment—all without human intervention. If the requested slot is unavailable, the system intelligently suggests a new time and completes the booking automatically.",
    overview2:
      "This voice-first interface enhances patient experience while reducing operational load for healthcare providers.",
    tagline:
      "To eliminate manual data entry and accelerate deal processing, the goal was to build an automated document intelligence pipeline.",
    // metrics: [],
    appStrengths: [
      "Transforms PDF submissions into structured CRM entries with zero manual input.",
      "Uses Document AI to extract key fields accurately from varied ISO forms.",
      "Instantly updates Google Sheets and AppSheet for live deal tracking.",
    ],
    highlights: [
      "~75% reduction in manual entry time",
      "Fewer data entry errors due to OCR + validation logic",
      "End-to-end integration between Google Workspace, AppSheet, and Document AI",
      "Staff efficiency gains, freeing time for underwriting and compliance",
    ],
    technologies: [
      { name: "Zapier", icon: "/images/tech-icons/ai-5.png" },
      { name: "Gmail", icon: "/images/tech-icons/googleCharts.png" },
      { name: "Google Forms", icon: "/images/tech-icons/googleForm.png" },
      { name: "Google Sheets", icon: "/images/tech-icons/googleSheet.png" },
    ],
    isFeatured: true,
  },
  {
    title: "Job Scraper Pro – Full-Stack Job Intelligence Platform",
    slug: "job-scraper-pro-full-stack-job-intelligence-platform",
    client: "In House Project",
    appLogo: "/images/case-studies/c31-logo.png",
    category: "AI Automation",
    image: "/images/case-studies/c40.png",
    website: "",
    overview:
      "Job Scraper Pro is an advanced, full-stack web application designed to automate job data collection from 9 leading employment platforms. Purpose-built for recruiters, HR teams, analysts, and job seekers, it transforms the complexity of cross-platform job scraping into real-time dashboards, actionable insights, and market research intelligence.",
    overview2:
      "The system offers a seamless end-to-end pipeline: from stealth scraping to structured storage, and from live dashboards to data validation—demonstrating cutting-edge engineering in web automation and analytics.",
    tagline:
      "To eliminate manual data entry and accelerate deal processing, the goal was to build an automated document intelligence pipeline.",
    // metrics: [],
    appStrengths: [
      "Transforms PDF submissions into structured CRM entries with zero manual input.",
      "Uses Document AI to extract key fields accurately from varied ISO forms.",
      "Instantly updates Google Sheets and AppSheet for live deal tracking.",
    ],
    highlights: [
      "~75% reduction in manual entry time",
      "Fewer data entry errors due to OCR + validation logic",
      "End-to-end integration between Google Workspace, AppSheet, and Document AI",
      "Staff efficiency gains, freeing time for underwriting and compliance",
    ],
    technologies: [
      { name: "Zapier", icon: "/images/tech-icons/ai-5.png" },
      { name: "Gmail", icon: "/images/tech-icons/googleCharts.png" },
      { name: "Google Forms", icon: "/images/tech-icons/googleForm.png" },
      { name: "Google Sheets", icon: "/images/tech-icons/googleSheet.png" },
    ],
    isFeatured: true,
  },
  {
    title: "Tectiz Lunch Automation System",
    slug: "tectiz-lunch-automation-system",
    client: "In House Project",
    appLogo: "/images/case-studies/c31-logo.png",
    category: "AI Automation",
    image: "/images/case-studies/c41.png",
    website: "",
    overview:
      "The Tectiz Lunch Automation System is an end-to-end digital solution that replaces manual lunch tracking and planning with real-time automation. ",
    overview2:
      "It integrates biometric attendance devices (ZK50), smart menu parsing, dietary rules, and automated WhatsApp messaging—creating a seamless, zero-intervention workflow that benefits HR teams and kitchen staff alike.",
    tagline:
      "To eliminate manual data entry and accelerate deal processing, the goal was to build an automated document intelligence pipeline.",
    // metrics: [],
    appStrengths: [
      "Transforms PDF submissions into structured CRM entries with zero manual input.",
      "Uses Document AI to extract key fields accurately from varied ISO forms.",
      "Instantly updates Google Sheets and AppSheet for live deal tracking.",
    ],
    highlights: [
      "~75% reduction in manual entry time",
      "Fewer data entry errors due to OCR + validation logic",
      "End-to-end integration between Google Workspace, AppSheet, and Document AI",
      "Staff efficiency gains, freeing time for underwriting and compliance",
    ],
    technologies: [
      { name: "Zapier", icon: "/images/tech-icons/ai-5.png" },
      { name: "Gmail", icon: "/images/tech-icons/googleCharts.png" },
      { name: "Google Forms", icon: "/images/tech-icons/googleForm.png" },
      { name: "Google Sheets", icon: "/images/tech-icons/googleSheet.png" },
    ],
    isFeatured: true,
  },
  {
    title: "Lead Management & Nurturing Automation System",
    slug: "lead-management-nurturing-automation-system",
    client: "In House Project",
    appLogo: "/images/case-studies/c31-logo.png",
    category: "AI Automation",
    image: "/images/case-studies/c42.png",
    website: "",
    overview:
      "The Lead Management & Nurturing Automation System transforms manual lead handling into a fully AI-driven, multi-channel engagement engine. Triggered instantly by a form submission webhook, it enriches lead data, generates unique AI-powered conversation memory keys, and executes parallel outreach campaigns across email, SMS, WhatsApp, and CRM. Every step is tracked for full transparency and optimization, ensuring fast, personalized, and scalable lead nurturing.",
    overview2: "",
    tagline:
      "To eliminate manual data entry and accelerate deal processing, the goal was to build an automated document intelligence pipeline.",
    // metrics: [],
    appStrengths: [
      "Transforms PDF submissions into structured CRM entries with zero manual input.",
      "Uses Document AI to extract key fields accurately from varied ISO forms.",
      "Instantly updates Google Sheets and AppSheet for live deal tracking.",
    ],
    highlights: [
      "~75% reduction in manual entry time",
      "Fewer data entry errors due to OCR + validation logic",
      "End-to-end integration between Google Workspace, AppSheet, and Document AI",
      "Staff efficiency gains, freeing time for underwriting and compliance",
    ],
    technologies: [
      { name: "Zapier", icon: "/images/tech-icons/ai-5.png" },
      { name: "Gmail", icon: "/images/tech-icons/googleCharts.png" },
      { name: "Google Forms", icon: "/images/tech-icons/googleForm.png" },
      { name: "Google Sheets", icon: "/images/tech-icons/googleSheet.png" },
    ],
    isFeatured: true,
  },
  {
    title: "Foodii – Community-Driven Recipe Sharing App Template",
    slug: "foodii-community-driven-recipe-sharing-app-template",
    client: "Template App",
    appLogo: "/images/case-studies/c31-logo.png",
    category: "Food",
    image: "/images/case-studies/c43.png",
    website: "",
    overview:
      "Foodii is a beautifully designed recipe-sharing app template built to connect food lovers, home cooks, and chefs through an engaging digital experience. Designed with an intuitive UI and seamless functionality, Foodii allows users to explore trending recipes, share their own creations, and connect with a community of food enthusiasts. ",
    overview2:
      "With multi-platform login options, personalized profiles, and content discovery features, it provides a scalable foundation for food-focused social applications.",
    tagline:
      "To eliminate manual data entry and accelerate deal processing, the goal was to build an automated document intelligence pipeline.",
    // metrics: [],
    appStrengths: [
      "Transforms PDF submissions into structured CRM entries with zero manual input.",
      "Uses Document AI to extract key fields accurately from varied ISO forms.",
      "Instantly updates Google Sheets and AppSheet for live deal tracking.",
    ],
    highlights: [
      "~75% reduction in manual entry time",
      "Fewer data entry errors due to OCR + validation logic",
      "End-to-end integration between Google Workspace, AppSheet, and Document AI",
      "Staff efficiency gains, freeing time for underwriting and compliance",
    ],
    technologies: [
      { name: "Zapier", icon: "/images/tech-icons/ai-5.png" },
      { name: "Gmail", icon: "/images/tech-icons/googleCharts.png" },
      { name: "Google Forms", icon: "/images/tech-icons/googleForm.png" },
      { name: "Google Sheets", icon: "/images/tech-icons/googleSheet.png" },
    ],
    isFeatured: true,
  },
  {
    title: "BitFlow – Cryptocurrency Trading App UI Kit",
    slug: "bitflow-cryptocurrency-trading-app-ui-kit",
    client: "Template App",
    appLogo: "/images/case-studies/c31-logo.png",
    category: "Crypto Currency",
    image: "/images/case-studies/c44.png",
    website: "",
    overview:
      "BitFlow is a sleek and modern UI kit crafted to help developers and designers build high-quality cryptocurrency trading applications. With pre-built essential screens, dummy data integration, and customizable chart components, BitFlow enables rapid prototyping and app development for the growing crypto industry. ",
    overview2:
      "Whether targeting seasoned traders or newcomers, BitFlow delivers an intuitive, professional interface to elevate user engagement.",
    tagline:
      "To eliminate manual data entry and accelerate deal processing, the goal was to build an automated document intelligence pipeline.",
    // metrics: [],
    appStrengths: [
      "Transforms PDF submissions into structured CRM entries with zero manual input.",
      "Uses Document AI to extract key fields accurately from varied ISO forms.",
      "Instantly updates Google Sheets and AppSheet for live deal tracking.",
    ],
    highlights: [
      "~75% reduction in manual entry time",
      "Fewer data entry errors due to OCR + validation logic",
      "End-to-end integration between Google Workspace, AppSheet, and Document AI",
      "Staff efficiency gains, freeing time for underwriting and compliance",
    ],
    technologies: [
      { name: "Zapier", icon: "/images/tech-icons/ai-5.png" },
      { name: "Gmail", icon: "/images/tech-icons/googleCharts.png" },
      { name: "Google Forms", icon: "/images/tech-icons/googleForm.png" },
      { name: "Google Sheets", icon: "/images/tech-icons/googleSheet.png" },
    ],
    isFeatured: true,
  },
  {
    title: "Kamquat – Consultation Platform UI Kit",
    slug: "kamquat-consultation-platform-ui-kit",
    client: "Template App",
    appLogo: "/images/case-studies/c31-logo.png",
    category: "Consultation",
    image: "/images/case-studies/c45.png",
    website: "",
    overview:
      "Kamquat is a modern consultation platform UI Kit built to showcase how clients can connect with vetted professionals across industries such as tech, design, and business. While it’s a UI demonstration kit (without live features like authentication or payments), Kamquat provides an excellent blueprint for building consultation platforms, highlighting how experts and clients interact in real-time through sessions, bookings, and reviews.",
    overview2: "",
    tagline:
      "To eliminate manual data entry and accelerate deal processing, the goal was to build an automated document intelligence pipeline.",
    // metrics: [],
    appStrengths: [
      "Transforms PDF submissions into structured CRM entries with zero manual input.",
      "Uses Document AI to extract key fields accurately from varied ISO forms.",
      "Instantly updates Google Sheets and AppSheet for live deal tracking.",
    ],
    highlights: [
      "~75% reduction in manual entry time",
      "Fewer data entry errors due to OCR + validation logic",
      "End-to-end integration between Google Workspace, AppSheet, and Document AI",
      "Staff efficiency gains, freeing time for underwriting and compliance",
    ],
    technologies: [
      { name: "Zapier", icon: "/images/tech-icons/ai-5.png" },
      { name: "Gmail", icon: "/images/tech-icons/googleCharts.png" },
      { name: "Google Forms", icon: "/images/tech-icons/googleForm.png" },
      { name: "Google Sheets", icon: "/images/tech-icons/googleSheet.png" },
    ],
    isFeatured: true,
  },
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined =>
  CASE_STUDIES_PORTFOLIO.find((study) => study.slug === slug);

export const getFeaturedCaseStudies = (): CaseStudy[] =>
  CASE_STUDIES_PORTFOLIO.filter((study) => study.isFeatured);

export const getCaseStudiesByCategory = (category: string): CaseStudy[] =>
  category === 'All'
    ? CASE_STUDIES_PORTFOLIO
    : CASE_STUDIES_PORTFOLIO.filter((study) => study.category === category);
