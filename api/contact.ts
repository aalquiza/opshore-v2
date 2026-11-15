/**
 * Opshore contact form Vercel Function.
 * Expects the existing form's JSON fields:
 * firstName, lastName, email, website, useCase, message.
 *
 * Note: request validation is not bot protection. Configure a per-IP rate limit
 * on POST /api/contact in Vercel Firewall before production deployment.
 */
import dotenv from "dotenv";
/*import type { VercelRequest, VercelResponse } from "@vercel/node";*/
import type { IncomingMessage, ServerResponse } from "node:http";

type ContactRequest = IncomingMessage & {
  body?: unknown;
};

type ContactResponse = ServerResponse & {
  status(code: number): ContactResponse;
  json(body: unknown): ContactResponse;
};

import nodemailer from "nodemailer";

dotenv.config({ path: ".env.local" }); // Local only; Vercel provides its own env values.

const MAX_BODY_BYTES = 12_000;
const MAX = {
  firstName: 80,
  lastName: 80,
  email: 254,
  website: 2048,
  useCase: 120,
  message: 4000,
} as const;

const HAS_CONTROL = /[\u0000-\u001F\u007F]/;
const HAS_FORBIDDEN_TEXT_CONTROL = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/;
const EMAIL_PATTERN = /^[^\s@<>(),;:\\"\[\]]+@[^\s@<>(),;:\\"\[\]]+\.[^\s@<>(),;:\\"\[\]]+$/;

type Contact = {
  firstName: string;
  lastName: string;
  email: string;
  website: string;
  useCase: string;
  message: string;
};

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    switch (character) {
      case "&": return "&amp;";
      case "<": return "&lt;";
      case ">": return "&gt;";
      case '"': return "&quot;";
      default: return "&#39;";
    }
  });
}

function getString(
  object: Record<string, unknown>,
  name: keyof Contact,
  mandatory: boolean,
  allowNewlines = false
): string | null {
  const raw = object[name];
  if (raw === undefined || raw === null || raw === "") {
    return mandatory ? null : "";
  }
  if (typeof raw !== "string") return null;
  // Validate before trimming: leading CR/LF must not disappear unnoticed.
  if ((allowNewlines ? HAS_FORBIDDEN_TEXT_CONTROL : HAS_CONTROL).test(raw)) return null;
  const trimmed = raw.trim();
  if (mandatory && !trimmed) return null;
  if (trimmed.length > MAX[name]) return null;
  return trimmed;
}

function validEmail(email: string): boolean {
  return email.length <= MAX.email && EMAIL_PATTERN.test(email);
}

function normalizeWebsite(input: string): string | null {
  if (!input) return "";
  // Only HTTP(S) schemes; do not transform javascript:, data:, etc.
  if (/^[a-z][a-z\d+.-]*:/i.test(input) && !/^https?:\/\//i.test(input)) return null;
  const raw = /^https?:\/\//i.test(input) ? input : `https://${input}`;
  try {
    const parsed = new URL(raw);
    if (!(["https:", "http:"].includes(parsed.protocol)) || !parsed.hostname ||
        parsed.username || parsed.password || /\s/.test(input) || raw.length > 2056) {
      return null;
    }
    return parsed.href;
  } catch {
    return null;
  }
}

export function validateContact(body: unknown): Contact | null {
  if (!body || typeof body !== "object" || Array.isArray(body)) return null;
  const object = body as Record<string, unknown>;
  const firstName = getString(object, "firstName", true);
  const lastName = getString(object, "lastName", true);
  const email = getString(object, "email", true);
  const websiteInput = getString(object, "website", false);
  const useCase = getString(object, "useCase", false);
  const message = getString(object, "message", false, true);
  if ([firstName, lastName, email, websiteInput, useCase, message].some((v) => v === null)) return null;
  if (!validEmail(email!)) return null;
  const website = normalizeWebsite(websiteInput!);
  if (website === null) return null;
  return { firstName: firstName!, lastName: lastName!, email: email!, website,
    useCase: useCase!, message: message! };
}

export default async function handler(req: ContactRequest, res: ContactResponse) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const contentType = String(req.headers["content-type"] || "").toLowerCase();
  if (!contentType.startsWith("application/json")) {
    return res.status(415).json({ error: "Expected application/json." });
  }

  let rawBody: unknown;
  try {
    rawBody = req.body;
    if (Buffer.byteLength(JSON.stringify(rawBody)) > MAX_BODY_BYTES) {
      return res.status(413).json({ error: "Request too large." });
    }
  } catch {
    return res.status(400).json({ error: "Invalid request." });
  }

  const contact = validateContact(rawBody);
  if (!contact) {
    return res.status(400).json({ error: "Please check your contact information and try again." });
  }

  const smtpUser = process.env.ZOHO_EMAIL?.trim() || "";
  const smtpPassword = process.env.ZOHO_PASSWORD || "";
  const fromAddress = process.env.ZOHO_FROM_EMAIL?.trim() || smtpUser;
  if (!validEmail(smtpUser) || !validEmail(fromAddress) || !smtpPassword) {
    console.error("Opshore contact API: SMTP configuration is missing or invalid.");
    return res.status(503).json({ error: "The contact form is temporarily unavailable." });
  }

  const fullName = `${contact.firstName} ${contact.lastName}`;
  const safe = {
    firstName: escapeHtml(contact.firstName),
    fullName: escapeHtml(fullName),
    email: escapeHtml(contact.email),
    website: escapeHtml(contact.website || "N/A"),
    useCase: escapeHtml(contact.useCase || "N/A"),
    message: escapeHtml(contact.message || "N/A"),
  };
  const textSummary = [
    `Name: ${fullName}`,
    `Email: ${contact.email}`,
    `Website: ${contact.website || "N/A"}`,
    `Use Case: ${contact.useCase || "N/A"}`,
    `Message:\n${contact.message || "N/A"}`,
  ].join("\n\n");
  const htmlSummary = `
    <p><strong>Name:</strong> ${safe.fullName}</p>
    <p><strong>Email:</strong> ${safe.email}</p>
    <p><strong>Website:</strong> ${safe.website}</p>
    <p><strong>Use Case:</strong> ${safe.useCase}</p>
    <p><strong>Message:</strong></p>
    <div style="white-space:pre-wrap">${safe.message}</div>
  `;

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
    auth: { user: smtpUser, pass: smtpPassword },
  });

  // The notification is essential; don't claim failure because an optional auto-reply failed.
  try {
    await transporter.sendMail({
      from: { name: "Opshore Contact Form", address: fromAddress },
      to: smtpUser,
      replyTo: { name: fullName, address: contact.email },
      subject: "New Opshore contact enquiry",
      html: `<h2>New Contact Enquiry</h2>${htmlSummary}`,
      text: `New Contact Enquiry\n\n${textSummary}`,
      disableFileAccess: true,
      disableUrlAccess: true,
    });
  } catch (error) {
    console.error("Opshore contact API: notification delivery failed.",
      error instanceof Error ? error.name : "Unknown error");
    return res.status(502).json({ error: "We couldn't send your enquiry. Please try again later." });
  }

  // Auto-reply is best-effort. If it fails, the main enquiry is still received.
  try {
    await transporter.sendMail({
      from: { name: "Opshore", address: fromAddress },
      to: contact.email,
      replyTo: { name: "Opshore", address: fromAddress },
      subject: "We received your enquiry - Opshore",
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#333;max-width:600px">
          <h2>Hi ${safe.firstName},</h2>
          <p>Thank you for contacting <strong>Opshore</strong>. Our team has received your enquiry.</p>
          <p>We typically respond within <strong>24 business hours</strong>.</p>
          <h3>Your submission</h3>
          ${htmlSummary}
          <p>If you need to add more information, you can reply to this email.</p>
          <p>Best regards,<br><strong>The Opshore Team</strong></p>
        </div>
      `,
      text: `Hi ${contact.firstName},\n\nThank you for contacting Opshore.\nWe typically respond within 24 business hours.\n\nYour submission:\n${textSummary}\n\nThe Opshore Team`,
      disableFileAccess: true,
      disableUrlAccess: true,
    });
  } catch (error) {
    console.error("Opshore contact API: auto-reply delivery failed.",
      error instanceof Error ? error.name : "Unknown error");
  }

  return res.status(200).json({ success: true, message: "Your enquiry was received." });
}
