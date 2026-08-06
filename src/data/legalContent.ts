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
            { text: "You are responsible for any bank transfer fees or currency-conversion costs.", indent: 1 },
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
          type: "contact",
          label: "Contact",
          text: "For questions about these Terms, please contact:",
          email: "info@opshore.co",
          hasLine: false,
        }
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
      heading: "1. Who we are",
      body: [
        {
          type: "paragraph",
          text: "This Privacy Policy applies to **Opshore.co**, a trading name of **Apexa Teoranta**, a private company limited by shares registered in Ireland (CRO 811040).",
        },
        {
          type: "paragraph",
          text: "Registered office: Castlemartyr, Cork, Ireland",
        },
        {
          type: "contact",
          text: "For questions about data protection, contact:",
          email: "info@opshore.co",
          hasLine: false,
        }
      ],
    },
    {
      heading: "2. What data we collect",
      body: [
        {
          type: "paragraph",
          text: "We may collect the following personal data when you contact us, sign up for services, or use our website:",
        },
        {
          type: "list",
          items: [
            { text: "Name and contact details (email, phone number, country).", indent: 1 },
            { text: "Company name, role, and information about your business or project.", indent: 1 },
            { text: "IP address, browser type, and basic usage data for analytics and security.", indent: 1 },
          ],
        },
      ],
    },
    {
      heading: "3. Why we process your data",
      body: [
        {
          type: "paragraph",
          text: "We process your data for the following purposes:",
        },
        {
          type: "list",
          items: [
            { text: "To provide and deliver our operations-as-a-service to clients.", indent: 1 },
            { text: "To respond to sales, onboarding, and support inquiries.", indent: 1 },
            { text: "To manage contracts, invoices, and payments.", indent: 1 },
            { text: "To improve our website, products, and marketing communications.", indent: 1 },
          ],
        },
      ],
    },
    {
      heading: "4. Data sharing and tools",
      body: [
        {
          type: "paragraph",
          text: "We may share your data with trusted service providers that help us run the business, including:",
        },
        {
          type: "list",
          items: [
            { text: "**Apollo:** For prospecting and outreach.", indent: 1 },
            { text: "**Zoho CRM:** For contact management and operations.", indent: 1 },
            { text: "**Payment Processors:** For invoicing and payments.", indent: 1 },
          ],
        },
      ],
    },
    {
      heading: "5. International data transfers",
      body: [
        {
          type: "paragraph",
          text: "Some of your data may be transferred outside the EU/EEA (e.g., for recruitment in the Philippines or Pakistan). We use appropriate safeguards such as contractual clauses approved by the EU Commission.",
        },
      ],
    },
    {
      heading: "6. Data retention",
      body: [
        {
          type: "paragraph",
          text: "We keep your data for as long as needed to provide services and comply with legal obligations. Client records are kept for at least 7 years to meet Irish tax requirements.",
        },
      ],
    },
    {
      heading: "7. Your rights (EU/EEA)",
      body: [
        {
          type: "paragraph",
          text: "Under GDPR, you have the right to access, correct, delete, or restrict processing of your data.",
        },
        {
          type: "contact",
          text: "To exercise these rights, contact us at:",
          email: "privacy@opshore.co",
          hasLine: false,
        }
      ],
    },
    {
      heading: "8. Cookies and tracking",
      body: [
        {
          type: "paragraph",
          text: "Our website may use cookies to remember your preferences and analyze traffic. You can manage cookie preferences through your browser settings.",
        },
      ],
    },
    {
      heading: "9. Changes to this policy",
      body: [
        {
          type: "paragraph",
          text: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with a new “Last updated” date.",
        },
        {
          type: "contact",
          label: "Contact",
          text: "For privacy inquiries, please contact:",
          email: "info@opshore.co",
          hasLine: true,
        }
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