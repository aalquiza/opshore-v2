import type {
  ComparisonRow,
  NavItem,
  Pillar,
  Review,
  UseCase,
  UseCaseOption,
} from "../types";

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "What We Do", section: "services" },
  { id: "home", label: "Software Development", section: "software" },
  { id: "home", label: "Operations", section: "operations" },
  { id: "usecases", label: "Use Cases" },
  { id: "reviews", label: "Clients" },
  { id: "contact", label: "Contact" },
];

export const PILLARS: Pillar[] = [
  {
    tag: "Strategy",
    title: "Operations Strategy",
    description:
      "We identify bottlenecks, map workflows, and design scalable systems for your team.",
  },
  {
    tag: "Talent",
    title: "Global Talent Access",
    description:
      "We connect you with vetted offshore professionals matched to your operations, not just a job title.",
  },
  {
    tag: "Systems",
    title: "Process & Automation",
    description:
      "We streamline processes, integrate tools, and cut manual work out of the day-to-day.",
  },
  {
    tag: "Support",
    title: "Ongoing Operational Support",
    description:
      "We stay in the system, keeping it working as your company grows around it.",
  },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "Long-term scaling support",
    recruitmentAgencies: "no",
    vaAgencies: "no",
    opshore: "yes",
  },
  {
    label: "Workflow optimization",
    recruitmentAgencies: "no",
    vaAgencies: "no",
    opshore: "yes",
  },
  {
    label: "Talent sourcing",
    recruitmentAgencies: "yes",
    vaAgencies: "yes",
    opshore: "yes",
  },
  {
    label: "Process design",
    recruitmentAgencies: "no",
    vaAgencies: "no",
    opshore: "yes",
  },
  {
    label: "Strategic guidance",
    recruitmentAgencies: "no",
    vaAgencies: "limited",
    opshore: "yes",
  },
  {
    label: "Focus",
    recruitmentAgencies: "Fill job roles",
    vaAgencies: "Provide assistants",
    opshore: "Build operational systems",
  },
];

export const SOFTWARE_USE_CASES: UseCase[] = [
  {
    tag: "Custom Software",
    title: "Custom Software & Internal Tools",
    problem:
      "Your team depends on spreadsheets, manual handoffs, or tools that don't fit how your business works.",
    solution:
      "We design and develop software tailored to your workflows, giving teams a clearer, more reliable way to work.",
  },
  {
    tag: "SaaS & MVPs",
    title: "SaaS & MVP Development",
    problem:
      "You have a product idea but need a practical path from concept to something users can try.",
    solution:
      "We help define the essential features and build an initial product that can be tested, refined, and expanded.",
  },
  {
    tag: "Web & Mobile",
    title: "Web & Mobile Applications",
    problem:
      "Customers or staff need a better way to access services, data, and everyday tasks.",
    solution:
      "We create user-focused web and mobile applications, including portals, dashboards, and business tools.",
  },
  {
    tag: "Modernization",
    title: "Software Modernization & Enhancement",
    problem:
      "An existing application is slow, hard to maintain, or no longer meets changing needs.",
    solution:
      "We assess and improve existing software, from user experience and performance to features and integrations.",
  },
  {
    tag: "AI & Integrations",
    title: "AI, Automation & System Integrations",
    problem:
      "Disconnected systems and repetitive tasks slow your team down.",
    solution:
      "We connect applications and apply practical automation and AI capabilities where they add clear value.",
  },
];

export const USE_CASES: UseCase[] = [
  {
    tag: "Workflow Design",
    title: "Operations Workflow Design",
    problem: "Teams work hard but processes are unclear.",
    solution:
      "We map workflows, remove bottlenecks, and standardize operations.",
  },
  {
    tag: "Ops Support",
    title: "Business Operations Support",
    problem:
      "Founders spend too much time on scheduling, inboxes, and routine admin work.",
    solution:
      "We set up structured operational support so these tasks run smoothly in the background.",
  },
  {
    tag: "CRM & Sales",
    title: "CRM & Sales Pipeline Setup",
    problem: "Leads are scattered across spreadsheets and tools.",
    solution: "We structure your CRM, pipeline stages, and reporting system.",
  },
  {
    tag: "Team Build-Out",
    title: "Offshore Team Building",
    problem: "You want to hire globally but don't know where to start.",
    solution: "We define roles, build hiring pipelines, and onboard talent.",
  },
  {
    tag: "Lead Gen",
    title: "Lead Generation Infrastructure",
    problem: "Your team wants leads but there's no repeatable system.",
    solution:
      "We design your lead sourcing, outreach workflow, and supporting team.",
  },
  {
    tag: "Marketing Ops",
    title: "Marketing Operations",
    problem: "Marketing tools are disconnected and inefficient.",
    solution: "We connect CRM, email, automation, and reporting systems.",
  },
];

export const REVIEWS: Review[] = [
  {
    quote:
      "In just 2 weeks we saw about 50 new registrations, a meaningful boost for us. If someone needs help building early traction and getting new users through the door, I'd recommend Opshore.",
    name: "Debi Santos",
    role: "yourtechy (creator of Kerive)",
    avatarUrl:
      "https://static.wixstatic.com/media/649bc0_a32a06ff687848d8b204dc04f6269ad8~mv2.jpg",
  },
  {
    quote:
      "Opshore played an important role in bringing ExpatsTrust from concept to reality. The team understood our vision and translated it into a fully developed platform. Their ability to combine technical expertise with an understanding of our business goals made the entire process a great experience. I'd highly recommend Opshore as a technology partner.",
    name: "Esther",
    role: "Founder of ExpatsTrust",
    avatarUrl:
      "https://expatstrust.com/images/team/esther-chinchilla.jpg?v=07b9df6-20261112220751",
  },
];

export const USE_CASE_OPTIONS: { value: UseCaseOption; label: string }[] = [
  { value: "software-development", label: "Custom Software Development" },
  { value: "saas-development", label: "SaaS Product Development" },
  { value: "web-app-development", label: "Web Application Development" },
  { value: "mobile-app-development", label: "Mobile Application Development" },
  { value: "ai-integrations", label: "AI, Automation & Integrations" },
  { value: "operations-and-software", label: "Software Development + Operations" },
  { value: "workflow-design", label: "Workflow Design" },
  { value: "ops-support", label: "Ops Support" },
  { value: "crm-sales", label: "CRM & Sales" },
  { value: "team-build-out", label: "Team Build-Out" },
  { value: "lead-gen", label: "Lead Gen" },
  { value: "marketing-ops", label: "Marketing Ops" },
  { value: "other", label: "Other" },
];