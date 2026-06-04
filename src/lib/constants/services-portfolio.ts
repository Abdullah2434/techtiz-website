import type { ServiceData } from "../types/service";

export const servicesData: Record<string, ServiceData> = {
  "custom-software": {
    slug: "custom-software",
    hero: {
      title: "Tailored Software Solutions",
      titleLine2: "That Drive Growth",
      subtitle: "As Seen In Your Tech Stack",
      description:
        "We build custom software that streamlines operations, enhances performance, and scales with your business.",
      ctaText: "Get a Free Consultation",
      ctaUrl: "/contact/",
      techStack: [
        { name: "Python", icon: "/images/tech-icons/python.png" },
        { name: "Go", icon: "/images/tech-icons/go.png" },
        { name: "Node.js", icon: "/images/tech-icons/node.png" },
        { name: "React", icon: "/images/tech-icons/react.png" },
        { name: "AWS", icon: "/images/tech-icons/aws.png" },
      ],
    },
    features: {
      title: "Features & Capabilities",
      description:
        "Your sales team shouldn't spend hours chasing prospects or updating data. Our AI-driven automations handle prospecting, lead nurturing, CRM updates, and deal forecasting so you can focus on building relationships, not managing tasks.",
      features: [
        {
          title: "Bespoke Web & Mobile Applications",
          description: "Custom solutions built for your business needs",
        },
        {
          title: "Scalable Architecture Design",
          description: "Systems that grow as your business grows",
        },
        {
          title: "Secure & Compliant Systems",
          description: "Built with industry-standard security and compliance",
        },
        {
          title: "API & Third-party Integrations",
          description: "Connect seamlessly with your existing tools",
        },
        {
          title: "Performance Optimization & Analytics",
          description: "Monitor, track, and improve system efficiency",
        },
      ],
    },
    workflow: {
      steps: [
        {
          step: "1",
          title: "Discover & Define",
          description: "Understand business challenges and define objectives",
          artifacts: [
            "Discovery & Planning",
            "Requirement Gathering",
            "Project Planning",
          ],
        },
        {
          step: "2",
          title: "Design & Develop",
          description: "Build intuitive, scalable, and secure software",
          artifacts: [
            "UI/UX Design",
            "Frontend Development",
            "Backend Development",
            "Database Design",
            "API Development",
          ],
        },
        {
          step: "3",
          title: "Integrate & Deploy",
          description: "Seamlessly implement the software into operations",
          artifacts: [
            "Deployment & Integration",
            "Testing & QA",
            "User Training",
            "Support Documentation",
          ],
        },
        {
          step: "4",
          title: "Monitor & Optimize",
          description: "Continuously improve performance based on analytics",
          artifacts: [
            "Performance Monitoring",
            "Analytics & Insights",
            "Performance Optimization",
            "System Maintenance",
          ],
        },
      ],
    },
    stats: {
      stats: [
        { value: "30%", label: "faster project delivery" },
        { value: "20%", label: "reduction in operational bottlenecks" },
        { value: "95%", label: "client satisfaction" },
        { value: "99%", label: "uptime reliability" },
        { value: "3×", label: "improvement in process efficiency" },
      ],
    },
    cta: {
      title1: "Ready to Build ",
      title2: "Software That Fits?",
      description:
        "Custom solutions designed to accelerate growth and streamline operations.",
      ctaText: "Book a Free Consultation",
      ctaUrl: "/contact/",
    },
  },
  "ai-agent": {
    slug: "ai-agent",
    hero: {
      title: "Intelligent AI Agents",
      titleLine2: "That Work for You",
      subtitle: "As Seen In Your Tech Stack",
      description:
        "Automate processes, make smarter decisions, and enhance business efficiency with AI-powered agents.",
      ctaText: "Let's Build Smarter",
      ctaUrl: "/contact/",
      techStack: [
        { name: "AI Tools", icon: "/images/tech-icons/ai-1.png" },
        { name: "LangChain", icon: "/images/tech-icons/langchain.png" },
        { name: "AI ML", icon: "/images/tech-icons/ai-2.png" },
        { name: "Power Automate", icon: "/images/tech-icons/power.png" },
        { name: "Integromat", icon: "/images/tech-icons/integromat.png" },
      ],
    },
    features: {
      title: "Features & Capabilities",
      description:
        "Your sales team shouldn't spend hours chasing prospects or updating data. Our AI-driven automations handle prospecting, lead nurturing, CRM updates, and deal forecasting so you can focus on building relationships, not managing tasks.",
      features: [
        {
          title: "Intelligent Workflow Automation",
          description: "Streamline routine tasks automatically",
        },
        {
          title: "Natural Language Processing & Chatbots",
          description: "Human-like interactions with clients",
        },
        {
          title: "Real-time Decision Support",
          description: "Data-driven insights instantly",
        },
        {
          title: "Seamless API Integrations",
          description: "Connect with your existing systems",
        },
        {
          title: "Predictive Analytics",
          description: "Anticipate trends and improve outcomes",
        },
      ],
    },
    workflow: {
      steps: [
        {
          step: "1",
          title: "Discover & Define",
          description: "Identify tasks and automation opportunities",
          artifacts: [
            "Process Mapping Documents",
            "Task Analysis Reports",
            "Requirements Specification",
            "Automation Feasibility Report",
          ],
        },
        {
          step: "2",
          title: "Design & Develop",
          description: "Build custom AI agents tailored to business needs",
          artifacts: [
            "AI Agent Architecture",
            "Model Training Logs",
            "Prototype Demo",
            "Technical Design Documentation",
          ],
        },
        {
          step: "3",
          title: "Integrate & Automate",
          description: "Embed AI into operations and workflows",
          artifacts: [
            "Integration APIs",
            "Automation Scripts",
            "Deployment Pipelines",
            "System Configuration Files",
          ],
        },
        {
          step: "4",
          title: "Monitor & Optimize",
          description: "Improve performance through continuous learning",
          artifacts: [
            "Performance Monitoring",
            "Analytics & Insights",
            "Performance Optimization",
            "System Maintenance",
            "Continuous Improvement Reports",
          ],
        },
      ],
    },
    stats: {
      stats: [
        { value: "40%", label: "faster task execution" },
        { value: "3×", label: "improved decision accuracy" },
        { value: "25%", label: "operational cost reduction" },
        { value: "30%", label: "improved customer response times" },
        { value: "95%", label: "client satisfaction" },
      ],
    },
    cta: {
      title1: "Ready to Deploy ",
      title2: "AI Agents?",
      description:
        "Automate, optimize, and scale smarter with intelligent AI systems.",
      ctaText: "Talk to Our Experts",
      ctaUrl: "/contact/",
    },
  },
  "sales-automation": {
    slug: "sales-automation",
    hero: {
      title: "Automate Your Sales,",
      titleLine2: "Maximize Revenue",
      subtitle: "As Seen In Your Tech Stack",
      description:
        "Streamline lead management, nurture pipelines, and boost conversions with smart automation.",
      ctaText: "Boost Sales Now",
      ctaUrl: "/contact/",
      techStack: [
        { name: "AI CRM", icon: "/images/tech-icons/ai-3.png" },
        { name: "Integromat", icon: "/images/tech-icons/integromat.png" },
        { name: "Power Automate", icon: "/images/tech-icons/power.png" },
        { name: "Azure", icon: "/images/tech-icons/azure.png" },
        { name: "Google Sheets", icon: "/images/tech-icons/googleSheet.png" },
      ],
    },
    features: {
      title: "Features & Capabilities",
      description:
        "Your sales team shouldn't spend hours chasing prospects or updating data. Our AI-driven automations handle prospecting, lead nurturing, CRM updates, and deal forecasting so you can focus on building relationships, not managing tasks.",
      features: [
        {
          title: "Lead Scoring & Routing",
          description: "Prioritize high-value prospects automatically",
        },
        {
          title: "Automated Follow-ups & Nurturing",
          description: "Never miss a lead touchpoint",
        },
        {
          title: "CRM Integration",
          description: "Connect seamlessly to your sales systems",
        },
        {
          title: "Sales Analytics & Insights",
          description: "Track performance and ROI",
        },
        {
          title: "Performance Dashboards",
          description: "Monitor team KPIs in real time",
        },
      ],
    },
    workflow: {
      steps: [
        {
          step: "1",
          title: "Discover & Define",
          description: "Assess sales processes and identify automation gaps",
          artifacts: [
            "Sales Process Audit Report",
            "Pipeline Bottleneck Analysis",
            "Customer Journey Mapping",
          ],
        },
        {
          step: "2",
          title: "Design & Develop",
          description: "Build automated workflows tailored to your pipeline",
          artifacts: [
            "Workflow Architecture Diagram",
            "Automation Blueprint",
            "AI-assisted Lead Scoring Model",
          ],
        },
        {
          step: "3",
          title: "Integrate & Automate",
          description: "Embed automation into CRM and tools",
          artifacts: [
            "CRM Integration Setup",
            "Automated Email / Lead Routing System",
            "Task Automation Scripts",
          ],
        },
        {
          step: "4",
          title: "Monitor & Optimize",
          description: "Refine processes using analytics",
          artifacts: [
            "Performance Monitoring Dashboard",
            "Sales Funnel Analytics",
            "Optimization Recommendations Report",
            "Automation Health Check",
          ],
        },
      ],
    },
    stats: {
      stats: [
        { value: "35%", label: "increase in lead conversion" },
        { value: "50%", label: "faster follow-up times" },
        { value: "20%", label: "improvement in sales efficiency" },
        { value: "3×", label: "better pipeline visibility" },
        { value: "95%", label: "user adoption" },
      ],
    },
    cta: {
      title1: "Ready to Automate ",
      title2: "Your Sales?",
      description: "Maximize revenue with intelligent sales automation.",
      ctaText: "Book a Free Consultation",
      ctaUrl: "/contact/",
    },
  },
  "innovation-digital-evolution": {
    slug: "innovation-digital-evolution",
    hero: {
      title: "Future-Ready Digital",
      titleLine2: "Transformation",
      subtitle: "As Seen In Your Tech Stack",
      description:
        "Adopt cutting-edge technologies and transform processes for next-level efficiency.",
      ctaText: "Start Your Transformation",
      ctaUrl: "/contact/",
      techStack: [
        { name: "Power Platform", icon: "/images/tech-icons/power.png" },
        { name: "AWS", icon: "/images/tech-icons/aws.png" },
        { name: "Azure", icon: "/images/tech-icons/azure.png" },
        { name: "Integromat", icon: "/images/tech-icons/integromat.png" },
        { name: "AI Tools", icon: "/images/tech-icons/ai-4.png" },
      ],
    },
    features: {
      title: "Features & Capabilities",
      description:
        "Your sales team shouldn't spend hours chasing prospects or updating data. Our AI-driven automations handle prospecting, lead nurturing, CRM updates, and deal forecasting so you can focus on building relationships, not managing tasks.",
      features: [
        {
          title: "Digital Strategy & Roadmapping",
          description: "Plan transformation initiatives",
        },
        {
          title: "Process Automation & Optimization",
          description: "Reduce bottlenecks and errors",
        },
        {
          title: "Emerging Tech Adoption",
          description: "AI, ML, and cloud-enabled solutions",
        },
        {
          title: "Change Management Support",
          description: "Smooth adoption across teams",
        },
        {
          title: "Scalable System Design",
          description: "Build for growth and flexibility",
        },
      ],
    },
    workflow: {
      steps: [
        {
          step: "1",
          title: "Discover & Define",
          description: "Identify areas for digital improvement",
          artifacts: [
            "Digital Maturity Assessment",
            "Current Systems Audit",
            "Technology Gap Analysis",
            "Process Mapping Document",
          ],
        },
        {
          step: "2",
          title: "Design & Develop",
          description: "Craft tailored technology strategies",
          artifacts: [
            "Solution Architecture Blueprint",
            "Technology Roadmap",
            "Prototype or Wireframes",
            "Custom Strategy Document",
          ],
        },
        {
          step: "3",
          title: "Integrate & Automate",
          description: "Implement solutions across operations",
          artifacts: [
            "System Integration Setup",
            "Automation Workflow Scripts",
            "Deployment Documentation",
            "Operational Guidelines",
          ],
        },
        {
          step: "4",
          title: "Monitor & Optimize",
          description: "Measure adoption and ROI",
          artifacts: [
            "Performance Dashboards",
            "Adoption & Usage Reports",
            "ROI Analysis",
            "Continuous Improvement Plan",
          ],
        },
      ],
    },
    stats: {
      stats: [
        { value: "30%", label: "improvement in operational efficiency" },
        { value: "25%", label: "faster adoption of new tools" },
        { value: "3×", label: "more innovation throughput" },
        { value: "20%", label: "cost optimization" },
        { value: "90%", label: "employee satisfaction" },
      ],
    },
    cta: {
      title1: "Ready to Digitally",
      title2: "Evolve?",
      description:
        "Innovate smarter with a structured digital transformation roadmap.",
      ctaText: "Talk to Our Experts",
      ctaUrl: "/contact/",
    },
  },
  "monitoring-optimization": {
    slug: "monitoring-optimization",
    hero: {
      title: "Optimize Performance",
      titleLine2: "in Real-Time",
      subtitle: "As Seen In Your Tech Stack",
      description:
        "Monitor your systems and processes with advanced analytics and actionable insights.",
      ctaText: "Start Optimizing",
      ctaUrl: "/contact/",
      techStack: [
        {
          name: "Data Visualization",
          icon: "/images/tech-icons/dataWrapper.png",
        },
        { name: "Power BI", icon: "/images/tech-icons/power.png" },
        { name: "Tableau", icon: "/images/tech-icons/tebleau.png" },
        { name: "Azure Monitor", icon: "/images/tech-icons/azure.png" },
        { name: "Google Charts", icon: "/images/tech-icons/googleCharts.png" },
      ],
    },
    features: {
      title: "Features & Capabilities",
      description:
        "Your sales team shouldn't spend hours chasing prospects or updating data. Our AI-driven automations handle prospecting, lead nurturing, CRM updates, and deal forecasting so you can focus on building relationships, not managing tasks.",
      features: [
        {
          title: "Real-time System Monitoring",
          description: "Track operations and performance continuously",
        },
        {
          title: "Predictive Maintenance",
          description: "Anticipate issues before they occur",
        },
        {
          title: "Analytics Dashboards",
          description: "Visualize KPIs at a glance",
        },
        {
          title: "Automated Alerts & Notifications",
          description: "Respond quickly to anomalies",
        },
        {
          title: "Continuous Optimization",
          description: "Improve efficiency with actionable insights",
        },
      ],
    },
    workflow: {
      steps: [
        {
          step: "1",
          title: "Discover & Define",
          description: "Identify key metrics and monitoring requirements",
          artifacts: [
            "KPI & Metrics Definition Document",
            "Monitoring Requirements Analysis",
            "Data Source Inventory",
            "Baseline Performance Report",
          ],
        },
        {
          step: "2",
          title: "Design & Develop",
          description: "Build dashboards and automation triggers",
          artifacts: [
            "Dashboard UI Mockups",
            "Automation Trigger Flowcharts",
            "Data Pipeline Design",
            "Alert & Notification Rules",
          ],
        },
        {
          step: "3",
          title: "Integrate & Automate",
          description: "Connect monitoring to operations and systems",
          artifacts: [
            "System Integration Setup",
            "Real-Time Data Sync Configurations",
            "Automation Scripts",
            "Deployment Documentation",
          ],
        },
        {
          step: "4",
          title: "Monitor & Optimize",
          description: "Adjust strategies using real-time insights",
          artifacts: [
            "Performance Analytics Dashboard",
            "Insights & Optimization Report",
            "Alert Review Logs",
            "Continuous Improvement Plan",
          ],
        },
      ],
    },
    stats: {
      stats: [
        { value: "35%", label: "faster issue resolution" },
        { value: "25%", label: "reduction in downtime" },
        { value: "3×", label: "improved process efficiency" },
        { value: "20%", label: "cost savings in operations" },
        { value: "90%", label: "system reliability" },
      ],
    },
    cta: {
      title1: "Ready to Optimize ",
      title2: "Your Operations?",
      description: "Leverage monitoring and analytics to stay ahead.",
      ctaText: "Talk to Our Experts",
      ctaUrl: "/contact/",
    },
  },
  "mobile-apps": {
    slug: "mobile-apps",
    hero: {
      title: "Custom Mobile Apps",
      titleLine2: "That Engage & Convert",
      subtitle: "As Seen In Your Tech Stack",
      description:
        "Deliver seamless experiences on iOS and Android, tailored to your users and business goals.",
      ctaText: "Build Your App",
      ctaUrl: "/contact/",
      techStack: [
        { name: "React Native", icon: "/images/tech-icons/react.png" },
        { name: "Flutter", icon: "/images/tech-icons/flutter.png" },
        { name: "FlutterFlow", icon: "/images/tech-icons/flutterflow.png" },
        { name: "Firebase", icon: "/images/tech-icons/firebase.png" },
        { name: "Node.js", icon: "/images/tech-icons/node.png" },
      ],
    },
    features: {
      title: "Features & Capabilities",
      description:
        "Your sales team shouldn't spend hours chasing prospects or updating data. Our AI-driven automations handle prospecting, lead nurturing, CRM updates, and deal forecasting so you can focus on building relationships, not managing tasks.",
      features: [
        {
          title: "Cross-platform Mobile Development",
          description: "Reach users on all devices",
        },
        {
          title: "Intuitive UI/UX Design",
          description: "Engaging and easy-to-use interfaces",
        },
        {
          title: "API Integrations",
          description: "Connect to third-party services seamlessly",
        },
        {
          title: "Secure & Scalable Architecture",
          description: "Reliable apps that grow with your business",
        },
        {
          title: "Performance Analytics",
          description: "Measure user engagement and app health",
        },
      ],
    },
    workflow: {
      steps: [
        {
          step: "1",
          title: "Discover & Define",
          description: "Understand user needs and business objectives",
          artifacts: [
            "User Research Report",
            "Business Requirements Document",
            "User Personas & Journey Maps",
            "Feature Prioritization List",
          ],
        },
        {
          step: "2",
          title: "Design & Develop",
          description: "Create engaging mobile experiences",
          artifacts: [
            "UI/UX Wireframes",
            "High-Fidelity App Designs",
            "App Prototype",
            "Development Sprints & Code Modules",
          ],
        },
        {
          step: "3",
          title: "Integrate & Deploy",
          description: "Launch apps to app stores with smooth deployment",
          artifacts: [
            "API Integrations",
            "Security & QA Testing Reports",
            "App Store Submission Package",
            "Deployment Documentation",
          ],
        },
        {
          step: "4",
          title: "Monitor & Optimize",
          description: "Track performance and improve continuously",
          artifacts: [
            "Analytics Dashboard",
            "User Feedback Insights",
            "Performance Monitoring Reports",
            "App Optimization Roadmap",
          ],
        },
      ],
    },
    stats: {
      stats: [
        { value: "4.8/5", label: "average user rating" },
        { value: "30%", label: "increase in user engagement" },
        { value: "25%", label: "reduction in app crashes" },
        { value: "3×", label: "faster time-to-market" },
        { value: "95%", label: "retention rate" },
      ],
    },
    cta: {
      title1: "Ready to Launch ",
      title2: "Your Mobile App?",
      description: "Build apps that users love and business thrives on.",
      ctaText: "Book a Free Consultation",
      ctaUrl: "/contact/",
    },
  },
  "machine-learning-predictive-intelligence": {
    slug: "machine-learning-predictive-intelligence",
    hero: {
      title: "Unlock Insights with",
      titleLine2: "Machine Learning",
      subtitle: "As Seen In Your Tech Stack",
      description:
        "Transform data into actionable predictions to drive smarter business decisions.",
      ctaText: "Discover ML Solutions",
      ctaUrl: "/contact/",
      techStack: [
        { name: "Python", icon: "/images/tech-icons/python.png" },
        { name: "AI ML", icon: "/images/tech-icons/ai-2.png" },
        { name: "AI Tools", icon: "/images/tech-icons/ai-3.png" },
        { name: "Azure ML", icon: "/images/tech-icons/azure.png" },
        { name: "AWS", icon: "/images/tech-icons/aws.png" },
      ],
    },
    features: {
      title: "Features & Capabilities",
      description:
        "Your sales team shouldn't spend hours chasing prospects or updating data. Our AI-driven automations handle prospecting, lead nurturing, CRM updates, and deal forecasting so you can focus on building relationships, not managing tasks.",
      features: [
        {
          title: "Predictive Analytics",
          description: "Anticipate trends and outcomes",
        },
        {
          title: "Data Modeling & Training",
          description: "Build robust ML models",
        },
        {
          title: "Automated Decision Making",
          description: "Reduce manual intervention",
        },
        {
          title: "Integration with Systems",
          description: "Embed ML into operations",
        },
        {
          title: "Performance Tracking",
          description: "Measure model accuracy and ROI",
        },
      ],
    },
    workflow: {
      steps: [
        {
          step: "1",
          title: "Discover & Define",
          description: "Identify business challenges and datasets",
          artifacts: [
            "Business Problem Definition",
            "Data Inventory Report",
            "Data Quality Assessment",
            "Feature Requirement Document",
          ],
        },
        {
          step: "2",
          title: "Design & Develop",
          description: "Train and validate predictive models",
          artifacts: [
            "Feature Engineering Pipeline",
            "Model Training Notebooks",
            "Validation & Accuracy Reports",
            "Model Comparison Matrix",
          ],
        },
        {
          step: "3",
          title: "Integrate & Automate",
          description: "Embed models into workflows",
          artifacts: [
            "Model Deployment Package",
            "API Integration Specs",
            "MLOps Pipelines",
            "CI/CD Deployment Scripts",
          ],
        },
        {
          step: "4",
          title: "Monitor & Optimize",
          description: "Continuously retrain and improve predictions",
          artifacts: [
            "Model Drift Analysis",
            "Performance Monitoring Dashboards",
            "Retraining Logs",
            "Optimization & Tuning Reports",
          ],
        },
      ],
    },
    stats: {
      stats: [
        { value: "30%", label: "increase in forecasting accuracy" },
        { value: "25%", label: "reduction in operational inefficiencies" },
        { value: "3×", label: "faster insights from data" },
        { value: "20%", label: "cost savings via automation" },
        { value: "95%", label: "adoption by business units" },
      ],
    },
    cta: {
      title1: "Ready to Predict ",
      title2: "Smarter?",
      description: "Leverage AI to make informed, data-driven decisions.",
      ctaText: "Talk to Our Experts",
      ctaUrl: "/contact/",
    },
  },
  "customer-service-automation": {
    slug: "customer-service-automation",
    hero: {
      title: "Enhance Customer Experience",
      titleLine2: "with Automation",
      subtitle: "As Seen In Your Tech Stack",
      description:
        "Automate support, reduce response times, and delight your customers at every touchpoint.",
      ctaText: "Automate Support",
      ctaUrl: "/contact/",
      techStack: [
        { name: "AI Chat", icon: "/images/tech-icons/ai-1.png" },
        { name: "Integromat", icon: "/images/tech-icons/integromat.png" },
        { name: "Power Automate", icon: "/images/tech-icons/power.png" },
        { name: "Google Forms", icon: "/images/tech-icons/googleForm.png" },
        { name: "AI Tools", icon: "/images/tech-icons/ai-5.png" },
      ],
    },
    features: {
      title: "Features & Capabilities",
      description:
        "Your sales team shouldn't spend hours chasing prospects or updating data. Our AI-driven automations handle prospecting, lead nurturing, CRM updates, and deal forecasting so you can focus on building relationships, not managing tasks.",
      features: [
        {
          title: "AI Chatbots & Virtual Assistants",
          description: "24/7 customer support",
        },
        {
          title: "Automated Ticketing & Routing",
          description: "Quick issue resolution",
        },
        {
          title: "Knowledge Base Integration",
          description: "Self-service for customers",
        },
        {
          title: "CRM Integration",
          description: "Keep customer data synchronized",
        },
        {
          title: "Performance Analytics",
          description: "Track response times and satisfaction",
        },
      ],
    },
    workflow: {
      steps: [
        {
          step: "1",
          title: "Discover & Define",
          description: "Identify customer service pain points",
          artifacts: [
            "Support Pain Point Analysis",
            "Customer Journey Mapping",
            "Current Ticket Categorization Report",
            "Automation Opportunity Assessment",
          ],
        },
        {
          step: "2",
          title: "Design & Develop",
          description: "Build automated support workflows",
          artifacts: [
            "Conversation Flow Diagrams",
            "Bot Training Dataset",
            "Workflow Automation Blueprints",
            "Response Template Library",
          ],
        },
        {
          step: "3",
          title: "Integrate & Automate",
          description: "Connect bots, CRM, and ticketing systems",
          artifacts: [
            "CRM Integration Specs",
            "Ticketing System APIs",
            "Bot Deployment Package",
            "Automation Pipeline Setup",
          ],
        },
        {
          step: "4",
          title: "Monitor & Optimize",
          description: "Track KPIs and improve service quality",
          artifacts: [
            "Customer Satisfaction Reports",
            "Ticket Resolution Time Dashboard",
            "Bot Performance Insights",
            "Continuous Improvement Plan",
          ],
        },
      ],
    },
    stats: {
      stats: [
        { value: "40%", label: "faster response times" },
        { value: "30%", label: "reduction in support workload" },
        { value: "20%", label: "improvement in customer satisfaction" },
        { value: "3×", label: "faster ticket resolution" },
        { value: "95%", label: "chatbot adoption rate" },
      ],
    },
    cta: {
      title1: "Ready to Automate ",
      title2: "Customer Support?",
      description: "Deliver faster, smarter, and more consistent service.",
      ctaText: "Book a Free Consultation",
      ctaUrl: "/contact/",
    },
  },
  "system-modernization-optimization": {
    slug: "system-modernization-optimization",
    hero: {
      title: "Modernize Systems for",
      titleLine2: "Maximum Efficiency",
      subtitle: "As Seen In Your Tech Stack",
      description:
        "Upgrade legacy systems, optimize processes, and drive digital agility.",
      ctaText: "Start Modernization",
      ctaUrl: "/contact/",
      techStack: [
        { name: "AWS", icon: "/images/tech-icons/aws.png" },
        { name: "Azure", icon: "/images/tech-icons/azure.png" },
        { name: "Docker", icon: "/images/tech-icons/docker.png" },
        { name: "Node.js", icon: "/images/tech-icons/node.png" },
        { name: "GCP", icon: "/images/tech-icons/gcp.png" },
      ],
    },
    features: {
      title: "Features & Capabilities",
      description:
        "Your sales team shouldn't spend hours chasing prospects or updating data. Our AI-driven automations handle prospecting, lead nurturing, CRM updates, and deal forecasting so you can focus on building relationships, not managing tasks.",
      features: [
        {
          title: "Legacy System Assessment",
          description: "Identify modernization needs",
        },
        {
          title: "Cloud Migration & Integration",
          description: "Move to scalable cloud platforms",
        },
        {
          title: "Performance Tuning",
          description: "Optimize processes and workflows",
        },
        {
          title: "Security & Compliance",
          description: "Modern systems with strong protection",
        },
        {
          title: "Process Automation",
          description: "Increase efficiency and reduce errors",
        },
      ],
    },
    workflow: {
      steps: [
        {
          step: "1",
          title: "Discover & Define",
          description: "Evaluate legacy systems and gaps",
          artifacts: [
            "Legacy System Audit Report",
            "Tech Stack Assessment",
            "Performance Bottleneck Analysis",
            "Modernization Opportunity Map",
          ],
        },
        {
          step: "2",
          title: "Design & Develop",
          description: "Create modernization roadmap",
          artifacts: [
            "Modernization Strategy Blueprint",
            "Architecture Redesign Plan",
            "Technology Migration Path",
            "Feature Prioritization Matrix",
          ],
        },
        {
          step: "3",
          title: "Integrate & Deploy",
          description: "Implement updated systems and workflows",
          artifacts: [
            "Migration Scripts",
            "Integration API Specs",
            "Deployment Package",
            "System Validation Checklist",
          ],
        },
        {
          step: "4",
          title: "Monitor & Optimize",
          description: "Track performance and optimize continuously",
          artifacts: [
            "System Performance Dashboards",
            "Error & Downtime Logs",
            "Optimization Recommendations",
            "Continuous Improvement Plan",
          ],
        },
      ],
    },
    stats: {
      stats: [
        { value: "50%", label: "reduction in system downtime" },
        { value: "30%", label: "faster application performance" },
        { value: "25%", label: "cost savings on infrastructure" },
        { value: "3×", label: "improvement in scalability" },
        { value: "95%", label: "system reliability" },
      ],
    },
    cta: {
      title1: "Ready to Modernize ",
      title2: "Your Systems?",
      description: "Optimize and future-proof your technology stack.",
      ctaText: "Talk to Our Experts",
      ctaUrl: "/contact/",
    },
  },
  "ui-ux-design": {
    slug: "ui-ux-design",
    hero: {
      title: "Design Experiences",
      titleLine2: "That Delight Users",
      subtitle: "As Seen In Your Tech Stack",
      description:
        "Create intuitive, engaging, and impactful digital experiences for your audience.",
      ctaText: "Start Designing",
      ctaUrl: "/contact/",
      techStack: [
        { name: "Framer", icon: "/images/tech-icons/framer.png" },
        { name: "Webflow", icon: "/images/tech-icons/webflow.png" },
        { name: "Bubble", icon: "/images/tech-icons/bubble.png" },
        { name: "CSS", icon: "/images/tech-icons/css.png" },
        { name: "HTML", icon: "/images/tech-icons/html.png" },
      ],
    },
    features: {
      title: "Features & Capabilities",
      description:
        "Your sales team shouldn't spend hours chasing prospects or updating data. Our AI-driven automations handle prospecting, lead nurturing, CRM updates, and deal forecasting so you can focus on building relationships, not managing tasks.",
      features: [
        {
          title: "User Research & Personas",
          description: "Understand audience needs",
        },
        {
          title: "Wireframing & Prototyping",
          description: "Visualize ideas quickly",
        },
        {
          title: "UI Design & Branding",
          description: "Intuitive and consistent design",
        },
        {
          title: "Interaction & Animation Design",
          description: "Engaging experiences",
        },
        {
          title: "Usability Testing & Feedback",
          description: "Optimize for conversion and retention",
        },
      ],
    },
    workflow: {
      steps: [
        {
          step: "1",
          title: "Discover & Define",
          description: "Conduct research and define goals",
          artifacts: [
            "User Research Report",
            "Stakeholder Interviews",
            "Persona Development",
            "Project Requirements Document",
          ],
        },
        {
          step: "2",
          title: "Design & Prototype",
          description: "Create wireframes and interactive prototypes",
          artifacts: [
            "Wireframe Screens",
            "Interactive Prototype",
            "UI Style Guide",
            "Design Mockups",
          ],
        },
        {
          step: "3",
          title: "Integrate & Deploy",
          description: "Work with developers to implement design",
          artifacts: [
            "Handoff Package",
            "Component Library",
            "Implementation Guidelines",
            "QA Testing Checklist",
          ],
        },
        {
          step: "4",
          title: "Monitor & Optimize",
          description: "Test, iterate, and enhance UX",
          artifacts: [
            "Usability Test Reports",
            "User Feedback Logs",
            "Conversion Rate Analysis",
            "UX Improvement Plan",
          ],
        },
      ],
    },
    stats: {
      stats: [
        { value: "35%", label: "increase in user engagement" },
        { value: "30%", label: "higher conversion rates" },
        { value: "25%", label: "reduction in drop-offs" },
        { value: "3×", label: "faster design-to-development workflow" },
        { value: "95%", label: "client satisfaction" },
      ],
    },
    cta: {
      title1: "Ready to Elevate ",
      title2: "User Experiences?",
      description: "Design digital products that users love.",
      ctaText: "Book a Free Consultation",
      ctaUrl: "/contact/",
    },
  },
  "low-code-development": {
    slug: "low-code-development",
    hero: {
      title: "Build Apps Faster with",
      titleLine2: "Low-code/No-code",
      subtitle: "As Seen In Your Tech Stack",
      description:
        "Accelerate development and reduce costs with visual development platforms.",
      ctaText: "Start Building",
      ctaUrl: "/contact/",
      techStack: [
        { name: "Bubble", icon: "/images/tech-icons/bubble.png" },
        { name: "Retool", icon: "/images/tech-icons/retool.png" },
        { name: "FlutterFlow", icon: "/images/tech-icons/flutterflow.png" },
        { name: "Power Apps", icon: "/images/tech-icons/power.png" },
        { name: "Webflow", icon: "/images/tech-icons/webflow.png" },
      ],
    },
    features: {
      title: "Features & Capabilities",
      description:
        "Your sales team shouldn't spend hours chasing prospects or updating data. Our AI-driven automations handle prospecting, lead nurturing, CRM updates, and deal forecasting so you can focus on building relationships, not managing tasks.",
      features: [
        {
          title: "Drag-and-Drop Development",
          description: "Build apps visually",
        },
        {
          title: "Rapid Prototyping",
          description: "Test ideas quickly",
        },
        {
          title: "Integration with APIs & Databases",
          description: "Seamless connections",
        },
        {
          title: "Cross-platform Deployment",
          description: "Launch on web & mobile",
        },
        {
          title: "Maintenance & Updates",
          description: "Easy to iterate and improve",
        },
      ],
    },
    workflow: {
      steps: [
        {
          step: "1",
          title: "Discover & Define",
          description: "Identify business needs and app requirements",
          artifacts: [
            "Requirement Document",
            "User Stories",
            "Process Flow Diagrams",
            "Use Case Analysis",
          ],
        },
        {
          step: "2",
          title: "Design & Develop",
          description: "Create apps using visual tools",
          artifacts: [
            "Wireframes",
            "Prototype Screens",
            "Drag-and-Drop App Modules",
            "UI Style Guide",
          ],
        },
        {
          step: "3",
          title: "Integrate & Deploy",
          description: "Connect data and deploy quickly",
          artifacts: [
            "Integration Plan",
            "Data Connectors",
            "Deployment Scripts",
            "Test Reports",
          ],
        },
        {
          step: "4",
          title: "Monitor & Optimize",
          description: "Track usage and optimize features",
          artifacts: [
            "Analytics Reports",
            "User Feedback Logs",
            "Performance Metrics",
            "Feature Enhancement Plan",
          ],
        },
      ],
    },
    stats: {
      stats: [
        { value: "50%", label: "faster development cycles" },
        { value: "30%", label: "cost reduction in software projects" },
        { value: "3×", label: "quicker time-to-market" },
        { value: "95%", label: "adoption rate among internal teams" },
        { value: "90%", label: "uptime for deployed apps" },
      ],
    },
    cta: {
      title1: "Ready to Build ",
      title2: "Without Code?",
      description: "Accelerate app delivery with low-code/no-code platforms.",
      ctaText: "Talk to Our Experts",
      ctaUrl: "/contact/",
    },
  },
  "ai-consultation": {
    slug: "ai-consultation",
    hero: {
      title: "Expert AI Guidance",
      titleLine2: "for Your Business",
      subtitle: "As Seen In Your Tech Stack",
      description:
        "Leverage AI strategies, implementation, and advisory to maximize impact and innovation.",
      ctaText: "Get AI Consultation",
      ctaUrl: "/contact/",
      techStack: [
        { name: "AI Tools", icon: "/images/tech-icons/ai-1.png" },
        { name: "AI ML", icon: "/images/tech-icons/ai-2.png" },
        { name: "Azure AI", icon: "/images/tech-icons/azure.png" },
        { name: "AI Platform", icon: "/images/tech-icons/ai-3.png" },
        { name: "LangChain", icon: "/images/tech-icons/langchain.png" },
      ],
    },
    features: {
      title: "Features & Capabilities",
      description:
        "Your sales team shouldn't spend hours chasing prospects or updating data. Our AI-driven automations handle prospecting, lead nurturing, CRM updates, and deal forecasting so you can focus on building relationships, not managing tasks.",
      features: [
        {
          title: "AI Strategy Roadmap",
          description: "Plan AI adoption across departments",
        },
        {
          title: "Model Selection & Deployment",
          description: "Choose and implement the right AI solutions",
        },
        {
          title: "Data Preparation & Insights",
          description: "Clean, structure, and analyze datasets",
        },
        {
          title: "Integration with Business Processes",
          description: "Embed AI for efficiency",
        },
        {
          title: "Training & Enablement",
          description: "Upskill teams on AI usage",
        },
      ],
    },
    workflow: {
      steps: [
        {
          step: "1",
          title: "Discover & Define",
          description: "Identify business AI opportunities",
          artifacts: [
            "Opportunity Assessment",
            "Data Inventory",
            "Feasibility Study",
            "Stakeholder Interviews",
          ],
        },
        {
          step: "2",
          title: "Design & Develop",
          description: "Create AI implementation plan",
          artifacts: [
            "AI Strategy Document",
            "Model Architecture Design",
            "Proof of Concept",
            "Data Preparation Plan",
          ],
        },
        {
          step: "3",
          title: "Integrate & Automate",
          description: "Deploy models and tools into operations",
          artifacts: [
            "Integration Plan",
            "Deployment Pipelines",
            "APIs & Connectors",
            "Automation Scripts",
          ],
        },
        {
          step: "4",
          title: "Monitor & Optimize",
          description: "Track outcomes and refine strategies",
          artifacts: [
            "Performance Dashboards",
            "Feedback Logs",
            "Model Retraining Plan",
            "Optimization Reports",
          ],
        },
      ],
    },
    stats: {
      stats: [
        { value: "40%", label: "faster AI adoption" },
        { value: "30%", label: "improved decision-making" },
        { value: "25%", label: "operational efficiency gains" },
        { value: "3×", label: "enhanced innovation throughput" },
        { value: "95%", label: "client satisfaction" },
      ],
    },
    cta: {
      title1: "Ready to Leverage ",
      title2: " AI?",
      description: "Turn AI into actionable, high-impact solutions.",
      ctaText: "Talk to Our Experts",
      ctaUrl: "/contact/",
    },
  },
  "crm-automation": {
    slug: "crm-automation",
    hero: {
      title: "Automate Customer Relationships",
      titleLine2: "Efficiently",
      subtitle: "As Seen In Your Tech Stack",
      description:
        "Streamline client interactions, lead management, and reporting with automated CRM workflows.",
      ctaText: "Automate CRM",
      ctaUrl: "/contact/",
      techStack: [
        { name: "AI CRM", icon: "/images/tech-icons/ai-4.png" },
        { name: "Integromat", icon: "/images/tech-icons/integromat.png" },
        { name: "Power Automate", icon: "/images/tech-icons/power.png" },
        { name: "Google Sheets", icon: "/images/tech-icons/googleSheet.png" },
        { name: "Azure", icon: "/images/tech-icons/azure.png" },
      ],
    },
    features: {
      title: "Features & Capabilities",
      description:
        "Your sales team shouldn't spend hours chasing prospects or updating data. Our AI-driven automations handle prospecting, lead nurturing, CRM updates, and deal forecasting so you can focus on building relationships, not managing tasks.",
      features: [
        {
          title: "Automated Lead Management",
          description: "Track and nurture leads automatically",
        },
        {
          title: "Task & Follow-up Automation",
          description: "Never miss customer touchpoints",
        },
        {
          title: "Sales & Marketing Integration",
          description: "Align teams for better results",
        },
        {
          title: "Analytics & Reporting",
          description: "Track CRM KPIs and ROI",
        },
        {
          title: "Customer Segmentation",
          description: "Target with precision",
        },
      ],
    },
    workflow: {
      steps: [
        {
          step: "1",
          title: "Discover & Define",
          description: "Audit CRM processes",
          artifacts: [
            "Process Mapping",
            "Gap Analysis",
            "Stakeholder Interviews",
            "Current System Audit",
          ],
        },
        {
          step: "2",
          title: "Design & Develop",
          description: "Automate workflows tailored to business needs",
          artifacts: [
            "Automation Plan",
            "Workflow Design",
            "Custom Scripts",
            "Testing Scenarios",
          ],
        },
        {
          step: "3",
          title: "Integrate & Deploy",
          description: "Sync CRM with tools and automation",
          artifacts: [
            "Integration Plan",
            "API Connectors",
            "Data Sync Setup",
            "Deployment Checklist",
          ],
        },
        {
          step: "4",
          title: "Monitor & Optimize",
          description: "Track performance and refine workflows",
          artifacts: [
            "Performance Dashboards",
            "Error Logs",
            "Optimization Plan",
            "Continuous Improvement Reports",
          ],
        },
      ],
    },
    stats: {
      stats: [
        { value: "35%", label: "increase in lead conversion" },
        { value: "50%", label: "faster follow-ups" },
        { value: "20%", label: "improved sales efficiency" },
        { value: "3×", label: "better customer insights" },
        { value: "95%", label: "CRM adoption rate" },
      ],
    },
    cta: {
      title1: "Ready to Automate ",
      title2: "CRM?",
      description:
        "Enhance productivity and client engagement with intelligent CRM automation.",
      ctaText: "Book a Free Consultation",
      ctaUrl: "/contact/",
    },
  },
  "automation-workflow-transformation": {
    slug: "automation-workflow-transformation",
    hero: {
      title: "Transform Your Workflows",
      titleLine2: "with Automation",
      subtitle: "As Seen In Your Tech Stack",
      description:
        "Streamline operations, reduce errors, and scale efficiently with smart automation.",
      ctaText: "Start Workflow Automation",
      ctaUrl: "/contact/",
      techStack: [
        { name: "Integromat", icon: "/images/tech-icons/integromat.png" },
        { name: "Power Automate", icon: "/images/tech-icons/power.png" },
        { name: "Retool", icon: "/images/tech-icons/retool.png" },
        { name: "Bubble", icon: "/images/tech-icons/bubble.png" },
        { name: "Webflow", icon: "/images/tech-icons/webflow.png" },
      ],
    },
    features: {
      title: "Features & Capabilities",
      description:
        "Your sales team shouldn't spend hours chasing prospects or updating data. Our AI-driven automations handle prospecting, lead nurturing, CRM updates, and deal forecasting so you can focus on building relationships, not managing tasks.",
      features: [
        {
          title: "End-to-End Process Automation",
          description: "Automate repetitive tasks",
        },
        {
          title: "Workflow Optimization",
          description: "Reduce bottlenecks and improve efficiency",
        },
        {
          title: "Cross-System Integration",
          description: "Connect multiple applications seamlessly",
        },
        {
          title: "Analytics & Reporting",
          description: "Monitor workflow performance",
        },
        {
          title: "Custom Automation Solutions",
          description: "Tailored to business needs",
        },
      ],
    },
    workflow: {
      steps: [
        {
          step: "1",
          title: "Discover & Define",
          description: "Map existing processes and gaps",
          artifacts: [
            "Process Maps",
            "Gap Analysis",
            "Stakeholder Interviews",
            "Current Workflow Audit",
          ],
        },
        {
          step: "2",
          title: "Design & Develop",
          description: "Build automated workflows",
          artifacts: [
            "Workflow Blueprints",
            "Automation Scripts",
            "Test Cases",
            "Validation Reports",
          ],
        },
        {
          step: "3",
          title: "Integrate & Deploy",
          description: "Implement automation across systems",
          artifacts: [
            "Integration Plans",
            "API Connectors",
            "Deployment Checklist",
            "System Sync Logs",
          ],
        },
        {
          step: "4",
          title: "Monitor & Optimize",
          description: "Track and refine for maximum efficiency",
          artifacts: [
            "Performance Metrics",
            "Monitoring Dashboards",
            "Optimization Reports",
            "Continuous Improvement Plan",
          ],
        },
      ],
    },
    stats: {
      stats: [
        { value: "40%", label: "time saved on manual tasks" },
        { value: "30%", label: "reduction in errors" },
        { value: "25%", label: "cost savings" },
        { value: "3×", label: "faster operational cycles" },
        { value: "95%", label: "team adoption" },
      ],
    },
    cta: {
      title1: "Ready to Automate ",
      title2: "Your Workflows?",
      description: "Drive efficiency and scale with intelligent automation.",
      ctaText: "Talk to Our Experts",
      ctaUrl: "/contact/",
    },
  },
  "vibe-code-dev": {
    slug: "vibe-code-dev",
    hero: {
      title: "Next-Level Custom",
      titleLine2: "Development",
      subtitle: "As Seen In Your Tech Stack",
      description:
        "Create robust, scalable, and future-proof applications with our Vibe Code approach.",
      ctaText: "Start Vibe Coding",
      ctaUrl: "/contact/",
      techStack: [
        { name: "Node.js", icon: "/images/tech-icons/node.png" },
        { name: "React", icon: "/images/tech-icons/react.png" },
        { name: "Vue.js", icon: "/images/tech-icons/vue.png" },
        { name: "Python", icon: "/images/tech-icons/python.png" },
        { name: "AWS", icon: "/images/tech-icons/aws.png" },
      ],
    },
    features: {
      title: "Features & Capabilities",
      description:
        "Your sales team shouldn't spend hours chasing prospects or updating data. Our AI-driven automations handle prospecting, lead nurturing, CRM updates, and deal forecasting so you can focus on building relationships, not managing tasks.",
      features: [
        {
          title: "Custom Web & Mobile Development",
          description: "Tailored applications for your business",
        },
        {
          title: "Scalable Architecture",
          description: "Future-proof and growth-ready",
        },
        {
          title: "API & Third-party Integrations",
          description: "Seamlessly connected systems",
        },
        {
          title: "Secure & Compliant Coding Practices",
          description: "Protect data and meet standards",
        },
        {
          title: "Performance Optimization",
          description: "High-performing applications",
        },
      ],
    },
    workflow: {
      steps: [
        {
          step: "1",
          title: "Discover & Define",
          description: "Analyze business requirements",
          artifacts: [
            "Requirement Analysis",
            "Stakeholder Feedback",
            "Use Case Documentation",
            "Initial Roadmap",
          ],
        },
        {
          step: "2",
          title: "Design & Develop",
          description: "Build applications with Vibe Code methodology",
          artifacts: [
            "Application Prototypes",
            "Code Modules",
            "Unit Test Reports",
            "Design Specifications",
          ],
        },
        {
          step: "3",
          title: "Integrate & Deploy",
          description: "Seamless launch and integration",
          artifacts: [
            "Deployment Scripts",
            "Integration Logs",
            "Environment Configurations",
            "Release Notes",
          ],
        },
        {
          step: "4",
          title: "Monitor & Optimize",
          description: "Performance tracking and updates",
          artifacts: [
            "Performance Metrics",
            "Bug Reports",
            "Update Logs",
            "Optimization Recommendations",
          ],
        },
      ],
    },
    stats: {
      stats: [
        { value: "3×", label: "faster development cycles" },
        { value: "25%", label: "cost savings" },
        { value: "95%", label: "client satisfaction" },
        { value: "30%", label: "improved system performance" },
        { value: "99%", label: "uptime reliability" },
      ],
    },
    cta: {
      title1: "Ready to Build ",
      title2: "with Vibe Code?",
      description: "Deliver custom, scalable, and efficient applications.",
      ctaText: "Book a Free Consultation",
      ctaUrl: "/contact/",
    },
  },
  "genai-llm-rag-solutions": {
    slug: "genai-llm-rag-solutions",
    hero: {
      title: "Harness the Power of",
      titleLine2: "Generative AI",
      subtitle: "As Seen In Your Tech Stack",
      description:
        "Build intelligent solutions with LLMs, RAG, and GenAI for next-level automation and insights.",
      ctaText: "Explore GenAI Solutions",
      ctaUrl: "/contact/",
      techStack: [
        { name: "AI Tools", icon: "/images/tech-icons/ai-1.png" },
        { name: "AI Platform", icon: "/images/tech-icons/ai-2.png" },
        { name: "LangChain", icon: "/images/tech-icons/langchain.png" },
        { name: "DALL-E", icon: "/images/tech-icons/dalle-stabilityai.png" },
        { name: "AI ML", icon: "/images/tech-icons/ai-3.png" },
      ],
    },
    features: {
      title: "Features & Capabilities",
      description:
        "Your sales team shouldn't spend hours chasing prospects or updating data. Our AI-driven automations handle prospecting, lead nurturing, CRM updates, and deal forecasting so you can focus on building relationships, not managing tasks.",
      features: [
        {
          title: "Generative AI Applications",
          description: "Content creation and automation",
        },
        {
          title: "RAG (Retrieval-Augmented Generation)",
          description: "Smart knowledge solutions",
        },
        {
          title: "LLM Integration",
          description: "Embed large language models into workflows",
        },
        {
          title: "Custom AI Solutions",
          description: "Tailored for business needs",
        },
        {
          title: "Performance Monitoring & Tuning",
          description: "Ensure accurate, reliable outputs",
        },
      ],
    },
    workflow: {
      steps: [
        {
          step: "1",
          title: "Discover & Define",
          description: "Identify GenAI opportunities",
          artifacts: [
            "Opportunity Assessment",
            "Stakeholder Inputs",
            "Feasibility Study",
            "Initial Strategy",
          ],
        },
        {
          step: "2",
          title: "Design & Develop",
          description: "Build models and solutions",
          artifacts: [
            "Model Prototypes",
            "Algorithm Design",
            "Training Datasets",
            "Test Reports",
          ],
        },
        {
          step: "3",
          title: "Integrate & Automate",
          description: "Deploy AI in workflows and apps",
          artifacts: [
            "Integration Scripts",
            "API Connections",
            "Automation Workflows",
            "Deployment Logs",
          ],
        },
        {
          step: "4",
          title: "Monitor & Optimize",
          description: "Track outputs and refine models",
          artifacts: [
            "Performance Metrics",
            "Error Analysis",
            "Refinement Plan",
            "Continuous Learning Updates",
          ],
        },
      ],
    },
    stats: {
      stats: [
        { value: "3×", label: "faster content creation" },
        { value: "40%", label: "improvement in knowledge retrieval accuracy" },
        { value: "25%", label: "operational efficiency gains" },
        { value: "95%", label: "client satisfaction" },
        { value: "30%", label: "faster decision-making" },
      ],
    },
    cta: {
      title1: "Ready to Leverage ",
      title2: "Generative AI?",
      description:
        "Build AI-powered solutions for smarter business operations.",
      ctaText: "Talk to Our Experts",
      ctaUrl: "/contact/",
    },
  },
  "marketing-automation": {
    slug: "marketing-automation",
    hero: {
      title: "Automate Marketing,",
      titleLine2: "Maximize Impact",
      subtitle: "As Seen In Your Tech Stack",
      description:
        "Streamline campaigns, nurture leads, and drive conversions with intelligent marketing automation.",
      ctaText: "Start Marketing Automation",
      ctaUrl: "/contact/",
      techStack: [
        { name: "AI Marketing", icon: "/images/tech-icons/ai-4.png" },
        { name: "Integromat", icon: "/images/tech-icons/integromat.png" },
        { name: "Power Automate", icon: "/images/tech-icons/power.png" },
        { name: "Google Forms", icon: "/images/tech-icons/googleForm.png" },
        { name: "Google Sheets", icon: "/images/tech-icons/googleSheet.png" },
      ],
    },
    features: {
      title: "Features & Capabilities",
      description:
        "Your sales team shouldn't spend hours chasing prospects or updating data. Our AI-driven automations handle prospecting, lead nurturing, CRM updates, and deal forecasting so you can focus on building relationships, not managing tasks.",
      features: [
        {
          title: "Campaign Automation",
          description: "Schedule and manage campaigns easily",
        },
        {
          title: "Lead Nurturing & Scoring",
          description: "Identify and target high-value prospects",
        },
        {
          title: "Multi-channel Integration",
          description: "Email, SMS, social media automation",
        },
        {
          title: "Analytics & Reporting",
          description: "Track campaign performance and ROI",
        },
        {
          title: "Personalized Messaging",
          description: "Improve engagement and conversions",
        },
      ],
    },
    workflow: {
      steps: [
        {
          step: "1",
          title: "Discover & Define",
          description: "Identify marketing processes to automate",
          artifacts: [
            "Process Audit",
            "Stakeholder Inputs",
            "Automation Opportunities",
            "Initial Strategy",
          ],
        },
        {
          step: "2",
          title: "Design & Develop",
          description: "Build campaign automation workflows",
          artifacts: [
            "Workflow Designs",
            "Campaign Templates",
            "Integration Scripts",
            "Test Reports",
          ],
        },
        {
          step: "3",
          title: "Integrate & Deploy",
          description: "Connect with CRM and other tools",
          artifacts: [
            "API Connections",
            "CRM Sync",
            "Automation Deployment",
            "Monitoring Setup",
          ],
        },
        {
          step: "4",
          title: "Monitor & Optimize",
          description: "Track results and refine campaigns",
          artifacts: [
            "Performance Metrics",
            "A/B Test Reports",
            "Optimization Plan",
            "Feedback Loops",
          ],
        },
      ],
    },
    stats: {
      stats: [
        { value: "35%", label: "increase in lead engagement" },
        { value: "25%", label: "higher conversion rates" },
        { value: "3×", label: "faster campaign deployment" },
        { value: "30%", label: "cost savings" },
        { value: "95%", label: "marketing team adoption" },
      ],
    },
    cta: {
      title1: "Ready to Automate ",
      title2: "Your Marketing?",
      description: "Deliver smarter, faster, and more personalized campaigns.",
      ctaText: "Book a Free Consultation",
      ctaUrl: "/contact/",
    },
  },
  "data-intelligence-insight-systems": {
    slug: "data-intelligence-insight-systems",
    hero: {
      title: "Transform Data into",
      titleLine2: "Actionable Insights",
      subtitle: "As Seen In Your Tech Stack",
      description:
        "Leverage advanced analytics and intelligence systems to make smarter decisions.",
      ctaText: "Unlock Data Insights",
      ctaUrl: "/contact/",
      techStack: [
        { name: "Tableau", icon: "/images/tech-icons/tebleau.png" },
        { name: "Power BI", icon: "/images/tech-icons/power.png" },
        {
          name: "Data Visualization",
          icon: "/images/tech-icons/dataWrapper.png",
        },
        { name: "AWS", icon: "/images/tech-icons/aws.png" },
        { name: "Azure", icon: "/images/tech-icons/azure.png" },
      ],
    },
    features: {
      title: "Features & Capabilities",
      description:
        "Your sales team shouldn't spend hours chasing prospects or updating data. Our AI-driven automations handle prospecting, lead nurturing, CRM updates, and deal forecasting so you can focus on building relationships, not managing tasks.",
      features: [
        {
          title: "Advanced Analytics",
          description: "Deep insights from business data",
        },
        {
          title: "Data Warehousing & Integration",
          description: "Centralized, structured data",
        },
        {
          title: "Visualization & Dashboards",
          description: "Easy-to-read KPI reporting",
        },
        {
          title: "Predictive & Prescriptive Analytics",
          description: "Anticipate trends and actions",
        },
        {
          title: "Data Governance & Security",
          description: "Secure and compliant analytics",
        },
      ],
    },
    workflow: {
      steps: [
        {
          step: "1",
          title: "Discover & Define",
          description: "Identify data sources and KPIs",
          artifacts: [
            "Data Inventory",
            "KPI Definitions",
            "Stakeholder Interviews",
            "Initial Analysis",
          ],
        },
        {
          step: "2",
          title: "Design & Develop",
          description: "Build analytics pipelines and dashboards",
          artifacts: [
            "ETL Pipelines",
            "Dashboard Prototypes",
            "Data Models",
            "Validation Reports",
          ],
        },
        {
          step: "3",
          title: "Integrate & Deploy",
          description: "Connect insights to business processes",
          artifacts: [
            "Process Integration",
            "API Connections",
            "Automation Scripts",
            "Deployment Documentation",
          ],
        },
        {
          step: "4",
          title: "Monitor & Optimize",
          description: "Refine data models and reporting",
          artifacts: [
            "Performance Metrics",
            "Model Tuning",
            "User Feedback",
            "Reporting Enhancements",
          ],
        },
      ],
    },
    stats: {
      stats: [
        { value: "3×", label: "faster data-driven decisions" },
        { value: "30%", label: "increased forecasting accuracy" },
        { value: "25%", label: "operational cost savings" },
        { value: "95%", label: "user adoption" },
        { value: "90%", label: "reporting efficiency improvement" },
      ],
    },
    cta: {
      title1: "Ready to Unlock ",
      title2: "Your Data?",
      description: "Turn data into actionable insights that drive growth.",
      ctaText: "Talk to Our Experts",
      ctaUrl: "/contact/",
    },
  },
  "lead-generation": {
    slug: "lead-generation",
    hero: {
      title: "Generate High-Quality Leads",
      titleLine2: "Effortlessly",
      subtitle: "As Seen In Your Tech Stack",
      description:
        "Automate prospecting, scoring, and nurturing to fuel sales growth.",
      ctaText: "Start Generating Leads",
      ctaUrl: "/contact/",
      techStack: [
        { name: "AI Lead Gen", icon: "/images/tech-icons/ai-5.png" },
        { name: "Integromat", icon: "/images/tech-icons/integromat.png" },
        { name: "Power Automate", icon: "/images/tech-icons/power.png" },
        { name: "Google Sheets", icon: "/images/tech-icons/googleSheet.png" },
        { name: "Google Forms", icon: "/images/tech-icons/googleForm.png" },
      ],
    },
    features: {
      title: "Features & Capabilities",
      description:
        "Your sales team shouldn't spend hours chasing prospects or updating data. Our AI-driven automations handle prospecting, lead nurturing, CRM updates, and deal forecasting so you can focus on building relationships, not managing tasks.",
      features: [
        {
          title: "Automated Prospecting",
          description: "Identify potential clients efficiently",
        },
        {
          title: "Lead Scoring & Prioritization",
          description: "Focus on high-value leads",
        },
        {
          title: "Multi-channel Outreach",
          description: "Email, social, and calls automation",
        },
        {
          title: "CRM Integration",
          description: "Sync leads directly into sales pipeline",
        },
        {
          title: "Performance Analytics",
          description: "Measure lead conversion and ROI",
        },
      ],
    },
    workflow: {
      steps: [
        {
          step: "1",
          title: "Discover & Define",
          description: "Map target audience and lead criteria",
          artifacts: [
            "Audience Profiles",
            "Lead Criteria Matrix",
            "Market Research",
            "Initial Segmentation",
          ],
        },
        {
          step: "2",
          title: "Design & Develop",
          description: "Build automated lead generation workflows",
          artifacts: [
            "Automation Scripts",
            "Email Templates",
            "Workflow Diagrams",
            "Integration Plan",
          ],
        },
        {
          step: "3",
          title: "Integrate & Deploy",
          description: "Connect tools to CRM and outreach systems",
          artifacts: [
            "CRM Integration",
            "API Connections",
            "Tool Configuration",
            "Deployment Documentation",
          ],
        },
        {
          step: "4",
          title: "Monitor & Optimize",
          description: "Track metrics and refine strategy",
          artifacts: [
            "Performance Reports",
            "A/B Testing Results",
            "Optimization Plan",
            "Dashboard Analytics",
          ],
        },
      ],
    },
    stats: {
      stats: [
        { value: "40%", label: "increase in qualified leads" },
        { value: "3×", label: "faster prospecting cycles" },
        { value: "30%", label: "higher conversion rates" },
        { value: "25%", label: "reduction in manual outreach" },
        { value: "95%", label: "adoption rate by sales teams" },
      ],
    },
    cta: {
      title1: "Ready to Generate ",
      title2: "Leads Smarter?",
      description: "Automate prospecting and focus on closing deals.",
      ctaText: "Book a Free Consultation",
      ctaUrl: "/contact/",
    },
  },
  "strategic-enablement-change-management": {
    slug: "strategic-enablement-change-management",
    hero: {
      title: "Empower Teams for",
      titleLine2: "Lasting Change",
      subtitle: "As Seen In Your Tech Stack",
      description:
        "Drive organizational transformation with enablement programs and change management strategies.",
      ctaText: "Enable Your Teams",
      ctaUrl: "/contact/",
      techStack: [
        { name: "Power Platform", icon: "/images/tech-icons/power.png" },
        { name: "Azure", icon: "/images/tech-icons/azure.png" },
        { name: "Google Sheets", icon: "/images/tech-icons/googleSheet.png" },
        { name: "Integromat", icon: "/images/tech-icons/integromat.png" },
        { name: "AI Tools", icon: "/images/tech-icons/ai-1.png" },
      ],
    },
    features: {
      title: "Features & Capabilities",
      description:
        "Your sales team shouldn't spend hours chasing prospects or updating data. Our AI-driven automations handle prospecting, lead nurturing, CRM updates, and deal forecasting so you can focus on building relationships, not managing tasks.",
      features: [
        {
          title: "Change Readiness Assessments",
          description: "Understand organizational readiness",
        },
        {
          title: "Training & Enablement Programs",
          description: "Upskill teams for new workflows",
        },
        {
          title: "Communication & Adoption Strategies",
          description: "Ensure smooth transitions",
        },
        {
          title: "Process Reengineering",
          description: "Align operations with new goals",
        },
        {
          title: "Metrics & KPIs Tracking",
          description: "Measure adoption and success",
        },
      ],
    },
    workflow: {
      steps: [
        {
          step: "1",
          title: "Discover & Define",
          description: "Assess current state and change readiness",
          artifacts: [
            "Current State Analysis",
            "Stakeholder Interviews",
            "Readiness Assessment",
            "Change Impact Matrix",
          ],
        },
        {
          step: "2",
          title: "Design & Develop",
          description: "Plan enablement and adoption strategies",
          artifacts: [
            "Enablement Plan",
            "Adoption Roadmap",
            "Training Modules",
            "Communication Strategy",
          ],
        },
        {
          step: "3",
          title: "Integrate & Deploy",
          description: "Implement training and communication plans",
          artifacts: [
            "Training Sessions",
            "Resource Guides",
            "Communication Materials",
            "Deployment Checklist",
          ],
        },
        {
          step: "4",
          title: "Monitor & Optimize",
          description: "Track outcomes and refine change approach",
          artifacts: [
            "Feedback Reports",
            "Adoption Metrics",
            "Performance Dashboards",
            "Continuous Improvement Plan",
          ],
        },
      ],
    },
    stats: {
      stats: [
        { value: "40%", label: "faster adoption of new processes" },
        { value: "30%", label: "increase in team productivity" },
        { value: "3×", label: "improved stakeholder engagement" },
        { value: "25%", label: "reduction in resistance to change" },
        { value: "95%", label: "program satisfaction" },
      ],
    },
    cta: {
      title1: "Ready to Enable ",
      title2: "Your Teams?",
      description: "Drive successful transformation with strategic enablement.",
      ctaText: "Talk to Our Experts",
      ctaUrl: "/contact/",
    },
  },
  "seo-automation": {
    slug: "seo-automation",
    hero: {
      title: "Automate SEO for",
      titleLine2: "Maximum Visibility",
      subtitle: "As Seen In Your Tech Stack",
      description:
        "Streamline SEO tasks, reporting, and optimization for higher rankings and traffic.",
      ctaText: "Start SEO Automation",
      ctaUrl: "/contact/",
      techStack: [
        { name: "AI SEO", icon: "/images/tech-icons/ai-2.png" },
        { name: "Google Forms", icon: "/images/tech-icons/googleForm.png" },
        { name: "Google Sheets", icon: "/images/tech-icons/googleSheet.png" },
        {
          name: "Data Visualization",
          icon: "/images/tech-icons/dataWrapper.png",
        },
        { name: "Power Automate", icon: "/images/tech-icons/power.png" },
      ],
    },
    features: {
      title: "Features & Capabilities",
      description:
        "Your sales team shouldn't spend hours chasing prospects or updating data. Our AI-driven automations handle prospecting, lead nurturing, CRM updates, and deal forecasting so you can focus on building relationships, not managing tasks.",
      features: [
        {
          title: "Automated Keyword Research",
          description: "Identify high-value search terms",
        },
        {
          title: "Content Optimization",
          description: "AI-driven SEO recommendations",
        },
        {
          title: "Rank Tracking & Reporting",
          description: "Monitor visibility in search engines",
        },
        {
          title: "Technical SEO Audits",
          description: "Identify and fix site issues automatically",
        },
        {
          title: "Competitor Analysis",
          description: "Stay ahead in the market",
        },
      ],
    },
    workflow: {
      steps: [
        {
          step: "1",
          title: "Discover & Define",
          description: "Audit current SEO and identify goals",
          artifacts: [
            "SEO Audit Report",
            "Keyword Analysis",
            "Competitor Research",
            "Goal Setting Document",
          ],
        },
        {
          step: "2",
          title: "Design & Develop",
          description: "Set up automation workflows",
          artifacts: [
            "SEO Automation Plan",
            "Content Scheduling Templates",
            "Meta Tag Strategy",
            "Workflow Diagrams",
          ],
        },
        {
          step: "3",
          title: "Integrate & Deploy",
          description: "Implement SEO tools and dashboards",
          artifacts: [
            "SEO Tools Integration",
            "Dashboard Setup",
            "Tracking Scripts",
            "Monitoring Templates",
          ],
        },
        {
          step: "4",
          title: "Monitor & Optimize",
          description: "Track performance and refine strategies",
          artifacts: [
            "Performance Reports",
            "SEO Analytics Dashboards",
            "Optimization Recommendations",
            "Continuous Improvement Plan",
          ],
        },
      ],
    },
    stats: {
      stats: [
        { value: "30%", label: "increase in organic traffic" },
        { value: "25%", label: "improvement in search rankings" },
        { value: "3×", label: "faster content optimization cycles" },
        { value: "20%", label: "reduction in manual SEO tasks" },
        { value: "95%", label: "client satisfaction" },
      ],
    },
    cta: {
      title1: "Ready to Automate ",
      title2: "SEO?",
      description: "Boost rankings and traffic with intelligent automation.",
      ctaText: "Book a Free Consultation",
      ctaUrl: "/contact/",
    },
  },
  "ai-appointment-scheduling": {
    slug: "ai-appointment-scheduling",
    hero: {
      title: "Simplify Scheduling",
      titleLine2: "with AI",
      subtitle: "As Seen In Your Tech Stack",
      description:
        "Automate appointment booking, reminders, and follow-ups with intelligent AI solutions.",
      ctaText: "Automate Scheduling",
      ctaUrl: "/contact/",
      techStack: [
        { name: "AI Scheduling", icon: "/images/tech-icons/ai-3.png" },
        { name: "Power Automate", icon: "/images/tech-icons/power.png" },
        { name: "Google Forms", icon: "/images/tech-icons/googleForm.png" },
        { name: "Google Sheets", icon: "/images/tech-icons/googleSheet.png" },
        { name: "Integromat", icon: "/images/tech-icons/integromat.png" },
      ],
    },
    features: {
      title: "Features & Capabilities",
      description:
        "Your sales team shouldn't spend hours chasing prospects or updating data. Our AI-driven automations handle prospecting, lead nurturing, CRM updates, and deal forecasting so you can focus on building relationships, not managing tasks.",
      features: [
        {
          title: "Automated Booking & Rescheduling",
          description: "Reduce manual scheduling work",
        },
        {
          title: "Smart Reminders & Notifications",
          description: "Minimize missed appointments",
        },
        {
          title: "CRM & Calendar Integration",
          description: "Sync with client and internal systems",
        },
        {
          title: "AI Scheduling Assistants",
          description: "Optimize time slots automatically",
        },
        {
          title: "Reporting & Analytics",
          description: "Track scheduling efficiency",
        },
      ],
    },
    workflow: {
      steps: [
        {
          step: "1",
          title: "Discover & Define",
          description: "Map appointment processes and pain points",
          artifacts: [
            "Process Map",
            "Pain Point Analysis",
            "Stakeholder Interviews",
            "Requirements Document",
          ],
        },
        {
          step: "2",
          title: "Design & Develop",
          description: "Build AI-powered scheduling workflows",
          artifacts: [
            "Workflow Design",
            "AI Scheduling Models",
            "Integration Plan",
            "Prototype Testing",
          ],
        },
        {
          step: "3",
          title: "Integrate & Deploy",
          description: "Connect tools to calendars and CRM",
          artifacts: [
            "CRM Integration",
            "Calendar Sync Setup",
            "Deployment Scripts",
            "User Training Materials",
          ],
        },
        {
          step: "4",
          title: "Monitor & Optimize",
          description: "Analyze metrics and refine automation",
          artifacts: [
            "Performance Dashboards",
            "Analytics Reports",
            "Optimization Recommendations",
            "Continuous Improvement Plan",
          ],
        },
      ],
    },
    stats: {
      stats: [
        { value: "40%", label: "reduction in scheduling errors" },
        { value: "3×", label: "faster booking cycles" },
        { value: "30%", label: "improvement in client satisfaction" },
        { value: "25%", label: "reduction in no-shows" },
        { value: "95%", label: "adoption by teams" },
      ],
    },
    cta: {
      title1: "Ready to Automate ",
      title2: "Appointments?",
      description: "Save time and improve scheduling efficiency with AI.",
      ctaText: "Talk to Our Experts",
      ctaUrl: "/contact/",
    },
  },
};

// Helper function to get service by slug
export function getServiceBySlug(slug: string): ServiceData | undefined {
  // Try direct match first
  if (servicesData[slug]) {
    return servicesData[slug];
  }

  // Try lowercase
  const lowerSlug = slug.toLowerCase();
  if (servicesData[lowerSlug]) {
    return servicesData[lowerSlug];
  }

  // Try normalized slug (replace spaces and special chars with hyphens)
  const normalized = slug
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  if (normalized && servicesData[normalized]) {
    return servicesData[normalized];
  }

  return undefined;
}

// Get all service slugs for metadata generation
export function getAllServiceSlugs(): string[] {
  return Object.keys(servicesData);
}
