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
    {
      heading: "5. Changes to scope or timing",
      body: [
        {
          type: "paragraph",
          text: "If you request changes to the scope of work, timelines, or deliverables, we may adjust the fee and schedule. Any changes should be confirmed in writing before we proceed.",
        },
      ],
    },
    {
      heading: "6. Intellectual property",
      body: [
        {
          type: "paragraph",
          text: "Pre-existing materials and tools created by Opshore.co remain our property. Custom deliverables created specifically for you may be licensed to you under the terms of your contract. You retain ownership of your own brand, logos, and core business assets.",
        },
      ],
    },
    {
      heading: "7. Confidentiality",
      body: [
        {
          type: "paragraph",
          text: "Both parties agree to keep the other's confidential information (business plans, client data, processes, etc.) private. This obligation survives the end of your contract.",
        },
      ],
    },
    {
      heading: "8. Data protection and GDPR",
      body: [
        {
          type: "paragraph",
          text: "We process personal data in accordance with our Privacy Policy and applicable data-protection laws (including GDPR). You warrant that you have the right to share any personal data with us.",
        },
      ],
    },
    {
      heading: "9. Limitation of liability",
      body: [
        {
          type: "paragraph",
          text: "To the extent permitted by Irish law, our total liability is limited to the fees you have paid to us in the last 12 months. We are not liable for indirect damages or issues arising from third-party tools.",
        },
      ],
    },
    {
      heading: "10. Termination and notice",
      body: [
        {
          type: "list",
          items: [
            { text: "**Project-based:** Ends automatically once deliverables are completed and accepted.", indent: 1 },
            { text: "**Retainer-based:** Either party may terminate with 30 days written notice.", indent: 1 },
            { text: "Upon termination, you must pay any fees due for work performed.", indent: 1 },
          ],
        },
      ],
    },
    {
      heading: "11. Governing law and jurisdiction",
      body: [
        {
          type: "paragraph",
          text: "These Terms are governed by the laws of **Ireland**. The courts of Ireland have exclusive jurisdiction over any disputes.",
        },
      ],
    },
    {
      heading: "12. Changes to these Terms",
      body: [
        {
          type: "paragraph",
          text: "We may update these Terms from time to time. Any changes will be posted on this page. Continued use of our services after changes are posted means you accept the updated Terms.",
        },
        {
          type: "paragraph",
          text: "**Contact:** For questions about these Terms, please contact: info@opshore.co",
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