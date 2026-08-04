import type {
  ComparisonRow,
  NavItem,
  Pillar,
  Review,
  UseCase,
  UseCaseOption,
} from "../types";

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "What We Do" },
  { id: "usecases", label: "Use Cases" },
  { id: "reviews", label: "What Clients Say" },
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
];

export const USE_CASE_OPTIONS: { value: UseCaseOption; label: string }[] = [
  { value: "workflow-design", label: "Workflow Design" },
  { value: "ops-support", label: "Ops Support" },
  { value: "crm-sales", label: "CRM & Sales" },
  { value: "team-build-out", label: "Team Build-Out" },
  { value: "lead-gen", label: "Lead Gen" },
  { value: "marketing-ops", label: "Marketing Ops" },
  { value: "other", label: "Other" },
];