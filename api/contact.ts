import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { firstName, lastName, email, website, useCase, message } = req.body;

  // Basic validation
  if (!firstName || !lastName || !email) {
    return res.status(400).json({ error: "Required fields missing." });
  }

  // Normalize website URL if provided without http:// or https://
  let formattedWebsite = website ? website.trim() : "";
  if (formattedWebsite && !/^https?:\/\//i.test(formattedWebsite)) {
    formattedWebsite = `https://${formattedWebsite}`;
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_EMAIL,
      pass: process.env.ZOHO_PASSWORD,
    },
  });

  try {
    const fullName = `${firstName} ${lastName}`;
    const fromAddress = process.env.ZOHO_FROM_EMAIL || process.env.ZOHO_EMAIL;

    // 1. Internal Notification Email (To You)
    const adminMailOptions = {
      from: `"Opshore Contact Form" <${fromAddress}>`,
      to: process.env.ZOHO_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${formattedWebsite || "N/A"}</p>
        <p><strong>Use Case:</strong> ${useCase || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "N/A"}</p>
      `,
    };

    // 2. Auto-Reply Confirmation Email (To Submitter)
    const userAutoReplyOptions = {
      from: `"Opshore" <${fromAddress}>`,
      to: email,
      replyTo: fromAddress,
      subject: "We received your inquiry - Opshore",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e4e4e4; border-radius: 8px;">
          <h2 style="color: #111; margin-top: 0;">Hi ${firstName},</h2>
          <p>Thank you for reaching out to <strong>Opshore</strong>! We've received your message and our team will review it shortly.</p>
          <p>We typically respond within <strong>24 business hours</strong>.</p>
          
          <div style="background-color: #f9f9f9; padding: 16px; border-radius: 6px; border-left: 4px solid #111; margin: 20px 0;">
            <h4 style="margin: 0 0 10px 0; color: #111;">Summary of Your Submission:</h4>
            <p style="margin: 4px 0; font-size: 0.9em;"><strong>Name:</strong> ${fullName}</p>
            <p style="margin: 4px 0; font-size: 0.9em;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 4px 0; font-size: 0.9em;"><strong>Website:</strong> ${formattedWebsite || "N/A"}</p>
            <p style="margin: 4px 0; font-size: 0.9em;"><strong>Use Case:</strong> ${useCase || "N/A"}</p>
            <p style="margin: 4px 0; font-size: 0.9em;"><strong>Message:</strong></p>
            <p style="margin: 4px 0; font-size: 0.9em; white-space: pre-wrap; color: #555;">${message || "N/A"}</p>
          </div>
    
          <p style="font-size: 0.85em; color: #666;">
            Need to update your message? Simply reply directly to this email and it will go straight to our team.
          </p>
    
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="margin-bottom: 0;">Best regards,<br /><strong>The Opshore Team</strong></p>
        </div>
      `,
    };

    // Send both emails concurrently
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userAutoReplyOptions),
    ]);

    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("SMTP Error:", error);
    return res.status(500).json({ error: "Failed to send email. Please try again later." });
  }
}