export type PageId =
  | "home"
  | "usecases"
  | "reviews"
  | "contact"
  | "terms"
  | "privacy"
  | "legal";

export interface NavItem {
  id: PageId;
  label: string;
}

export interface Pillar {
  tag: string;
  title: string;
  description: string;
}

export type ComparisonValue = "yes" | "no" | "limited" | string;

export interface ComparisonRow {
  label: string;
  recruitmentAgencies: ComparisonValue;
  vaAgencies: ComparisonValue;
  opshore: ComparisonValue;
}

export interface UseCase {
  tag: string;
  title: string;
  problem: string;
  solution: string;
}

export interface Review {
  quote: string;
  name: string;
  role: string;
  avatarUrl?: string;
}

export type UseCaseOption =
  | "workflow-design"
  | "ops-support"
  | "crm-sales"
  | "team-build-out"
  | "lead-gen"
  | "marketing-ops"
  | "other";

export interface ContactFormState {
  firstName: string;
  lastName: string;
  email: string;
  website: string;
  useCase: UseCaseOption | "";
  message: string;
}

/* LEGAL BLOCK TYPES */
export interface LegalParagraph {
  type: "paragraph";
  text: string;
  indent?: number;
}

export interface LegalListItem {
  text: string;
  indent?: number;
  items?: LegalListItem[]; // Enables recursive sub-items/nested lists
}

export interface LegalList {
  type: "list";
  items: LegalListItem[];
}

export type LegalBlock = LegalParagraph | LegalList;

export interface LegalSection {
  heading?: string;
  body: LegalBlock[];
}

export interface LegalPageContent {
  id: Extract<PageId, "terms" | "privacy" | "legal">;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}