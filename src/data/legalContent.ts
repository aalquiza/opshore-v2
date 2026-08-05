import type { LegalPageContent } from "../types";

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
            { text: "Hiring and recruitment support (Hiring Pod).", indent: 1 },
            { text: "Delivery and team-operations support (Delivery & Team Ops Pod).", indent: 1 },
            { text: "Other managed operations services agreed with you in writing.", indent: 1 },
          ],
        },
        {
          type: "paragraph",
          text: "Services are provided on a project-based or retainer-based model, as specified in your quotation, proposal, or contract.",
        },
      ],
    },
    {
      heading: "3. Customer obligations",
      body: [
        {
          type: "paragraph",
          text: "You agree to:",
        },
        {
          type: "list",
          items: [
            { text: "Provide accurate and up-to-date information about your business, team, and requirements.", indent: 1 },
            { text: "Treat Opshore.co team members and processes in a professional manner.", indent: 1 },
            { text: "Comply with all applicable laws, including data-protection and employment-related rules in your jurisdiction.", indent: 1 },
          ],
        },
      ],
    },
    {
      heading: "4. Fees and payments",
      body: [
        {
          type: "list",
          items: [
            { text: "Fees for services are set out in your proposal, invoice, or retainer agreement.", indent: 1 },
            { 
              text: "**Payment terms:**", 
              indent: 1,
              items: [
                {text: "Project-based: 30% upfront, 70% upon completion and delivery.", indent: 2},
                {text: "Ongoing retainer: Payment is due net 15 days from the invoice date.", indent: 2},
              ]
            },
            { text: "Late payments may incur interest at 8% per year. We may suspend services until payment is cleared.", indent: 1 },
            { text: "You are responsible for any bank transfer fees or currency‑conversion costs.", indent: 1 },
          ],
        },
      ],
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