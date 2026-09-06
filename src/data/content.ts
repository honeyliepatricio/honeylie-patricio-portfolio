/**
 * Centralized content.
 * Edit the text here to update copy across the site without touching components.
 * Nothing in this file is intended beyond what was provided — update freely as
 * your real experience grows.
 */

export type ServiceGroup = {
  id: string;
  title: string;
  summary: string;
  items: string[];
  status?: "learning";
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "healthcare-admin",
    title: "Healthcare Administrative Support",
    summary:
      "Non-clinical administrative support built on real clinical-world context, for clinics, practices, and healthcare teams.",
    items: [
      "Administrative tasks",
      "Scheduling and calendar support",
      "Documentation organization",
      "Data entry",
      "Research",
      "Email support",
      "File organization",
      "Non-clinical patient/client communication support",
    ],
  },
  {
    id: "general-va",
    title: "General Virtual Assistance",
    summary:
      "Day-to-day operational support so small teams and business owners can focus on their work, not their inbox.",
    items: [
      "Email management",
      "Calendar management",
      "Data entry",
      "Online research",
      "Google Workspace",
      "Microsoft Office",
      "File organization",
    ],
  },
  {
    id: "airbnb-operations",
    title: "Airbnb & Staycation Operations",
    summary:
      "Hands-on reservation and guest-communication support for hosts and property managers.",
    items: [
      "Reservation management",
      "Calendar management",
      "Guest communication",
      "Availability updates",
      "Check-in/check-out coordination",
      "Guest instructions",
      "Customer support",
    ],
  },
  {
    id: "social-media",
    title: "Social Media Support",
    summary:
      "Consistent, on-brand presence for Facebook pages — from graphics to captions to scheduling.",
    items: [
      "Facebook page management",
      "Canva graphics",
      "Caption writing",
      "Content scheduling",
      "Community engagement",
      "Promotional content",
    ],
  },
  {
    id: "ai-workflow",
    title: "AI-Assisted Workflow Support",
    summary:
      "Currently learning and developing — applying AI tools to make repetitive admin work faster and more consistent.",
    items: [
      "AI productivity tools",
      "Prompt engineering",
      "AI-assisted workflow",
      "Workflow optimization",
      "Repetitive-task automation",
    ],
    status: "learning",
  },
];

export type ExperienceEntry = {
  id: string;
  role: string;
  period?: string;
  summary: string;
  highlights: string[];
};

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "registered-nurse",
    role: "Registered Nurse",
    summary:
      "Frontline healthcare experience that shapes how I support healthcare professionals today — precise documentation, calm communication, and steady follow-through.",
    highlights: [
      "Healthcare communication",
      "Documentation",
      "Organization",
      "Time management",
      "Attention to detail",
      "Working under pressure",
      "Following protocols",
    ],
  },
  {
    id: "airbnb-staycation",
    role: "Airbnb & Staycation Operations",
    summary:
      "Kept reservations, guest communication, and property availability running smoothly from behind the scenes.",
    highlights: [
      "Managed reservations and calendars",
      "Handled guest inquiries",
      "Coordinated check-in/check-out",
      "Managed availability",
      "Provided guest support",
    ],
  },
  {
    id: "social-media-management",
    role: "Social Media Management",
    summary:
      "Kept a business page active, consistent, and on-brand across posts and campaigns.",
    highlights: [
      "Managed Facebook business pages",
      "Created Canva graphics",
      "Wrote captions",
      "Scheduled content",
      "Supported promotional campaigns",
    ],
  },
];

export type PortfolioProject = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  isLearningProject?: boolean;
  link?: string;
  linkLabel?: string;
  secondaryLink?: string;
  secondaryLinkLabel?: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "airbnb-operations",
    title: "Airbnb & Staycation Operations",
    description:
      "Day-to-day management of reservations, calendars, and guest communication across active listings — plus coordinated check-in/check-out logistics and guest instructions for a consistent, low-friction arrival experience.",
    tags: [
      "Reservations",
      "Calendar Management",
      "Guest Communication",
      "Check-in Coordination",
      "Guest Instructions",
      "Customer Support",
    ],
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    description:
      "Ongoing management of a Facebook business page: designing graphics in Canva, writing captions, scheduling posts, and supporting promotional campaigns.",
    tags: ["Facebook", "Canva", "Content Scheduling"],
  },
  {
    id: "ai-workflow-learning",
    title: "AI Workflow Learning Project",
    description:
      "A personal learning project exploring how AI tools like ChatGPT and Claude can support prompt engineering and streamline repetitive administrative tasks. This portfolio site itself was built using this workflow. This is self-directed learning, not client work.",
    tags: ["Personal Project", "Prompt Engineering", "AI Tools"],
    isLearningProject: true,
    link: "https://honeylie-patricio-portfolio.vercel.app",
    linkLabel: "My Works",
    secondaryLink: "https://cozyspotazurestaycation206.vercel.app/",
    secondaryLinkLabel: "Cozy Spot Azure Staycation",
  },
];

export type SkillItem = {
  name: string;
  status: "experienced" | "learning";
};

export const skills: SkillItem[] = [
  { name: "Canva", status: "experienced" },
  { name: "Facebook", status: "experienced" },
  { name: "Airbnb", status: "experienced" },
  { name: "Google Docs", status: "experienced" },
  { name: "Google Sheets", status: "experienced" },
  { name: "Google Drive", status: "experienced" },
  { name: "Microsoft Office", status: "experienced" },
  { name: "ChatGPT", status: "learning" },
  { name: "Claude", status: "learning" },
  { name: "AI automation tools", status: "learning" },
  { name: "Prompt engineering", status: "learning" },
  { name: "AI workflow tools", status: "learning" },
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  {
    question: "What is a Healthcare Virtual Assistant?",
    answer:
      "A Healthcare Virtual Assistant provides remote, non-clinical administrative support to doctors, clinics, and healthcare teams — things like scheduling, documentation, data entry, and communication support.",
  },
  {
    question: "Are you able to provide clinical services remotely?",
    answer:
      "No. My background as a Registered Nurse informs how I understand healthcare workflows and communication, but the support I offer is non-clinical and administrative.",
  },
  {
    question: "Do you work with businesses outside of healthcare?",
    answer:
      "Yes. Alongside healthcare administrative support, I also support Airbnb and staycation hosts with reservations and guest communication, and small businesses with general VA and social media support.",
  },
  {
    question: "What tools do you use?",
    answer:
      "Day to day, I work in Google Workspace (Docs, Sheets, Drive), Microsoft Office, Canva, and Facebook's business tools. I'm also currently learning AI-assisted workflow tools.",
  },
  {
    question: "Are you an AI automation expert?",
    answer:
      "No — AI-assisted workflow support is an area I am actively learning and developing, not an area of expertise. I'm transparent about what's current skill versus what's in progress.",
  },
  {
    question: "How do we get started working together?",
    answer:
      "Reach out through the contact page with a short description of what you need support with, and I'll follow up to discuss scope, schedule, and next steps.",
  },
];
