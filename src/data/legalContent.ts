import type { LegalPageContent } from "../types";

// NOTE: This is placeholder copy so the pages render correctly.
// Replace with your actual reviewed legal language before launch.

export const TERMS_CONTENT: LegalPageContent = {
  id: "terms",
  title: "Terms of Service",
  updated: "Last updated: August 2026",
  intro:
    "These Terms of Service govern your use of Opshore.co and any services provided by Apexa Teoranta, trading as Opshore.",
  sections: [
    {
      heading: "1. Who we are",
      body: [
        {
            type: "paragraph",
            text: "These Terms of Service govern your use of **Opshore.co** and the services offered by Opshore.co, a trading name of **Apexa Teoranta**, a private company limited by shares registered in Ireland (CRO 811040).",
        },
        {
            type: "paragraph",
            text: "Registered office: Castlemartyr, Cork, Ireland.",
        },
        {
            type: "paragraph",
            text: "By using our website or purchasing our services, you agree to these Terms.",
        },
      ],
    },
    {
      heading: "2. Services",
      body: [
        {
            type: "paragraph",
            text: "Opshore.co provides operations-as-a-service for B2B founders and startups, including:",
        },
        {
            type: "list",
            items: [
                {  text: "Hiring and recruitment support (Hiring Pod).", indent:1 },
                {  text: "Delivery and team‑operations support (Delivery & Team Ops Pod).", indent:1 },
                {  text: "Other managed operations services agreed with you in writing.", indent:1 },
            ],
        },
      ],
    },
    {
        heading: "",
        body: [],
    },
  ],
};

export const PRIVACY_CONTENT: LegalPageContent = {
  id: "privacy",
  title: "Privacy Policy",
  updated: "Last updated: August 2026",
  intro:
    "This Privacy Policy explains how Opshore.co (Apexa Teoranta) collects, uses, and protects your personal data.",
  sections: [
    {
      heading: "1. Information we collect",
      body: [
        {
            type: "paragraph",
            text: "We collect information you submit through our contact form, such as your name, email, and message.",
        },
      ],
    },
  ],
};

export const LEGAL_CONTENT: LegalPageContent = {
  id: "legal",
  title: "Legal Information",
  updated: "Last updated: August 2026",
  intro: "Company and registration details for Opshore.co.",
  sections: [
    {
      heading: "Trading name",
      body: [
            {
                type: "paragraph",
                text: "Opshore.co is a trading name of Apexa Teoranta.",
            },
        ],
    },
    {
      heading: "Registration",
      body: [
            {
                type: "paragraph",
                text: "Registered in Ireland. Company registration number: CRO 811040.",
            },
        ],
    },
  ],
};