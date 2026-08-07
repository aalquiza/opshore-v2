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

  // Create Zoho SMTP transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com", // Or smtp.zoho.eu if using European data center
    port: 465,
    secure: true, // true for 465, false for 587
    auth: {
      user: process.env.ZOHO_EMAIL,
      pass: process.env.ZOHO_PASSWORD, // Use Zoho App Password
    },
  });

  try {
    await transporter.sendMail({
      from: `"Opshore Contact Form" <${process.env.ZOHO_EMAIL}>`,
      to: process.env.ZOHO_EMAIL, // Where you want to receive inquiries
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website || "N/A"}</p>
        <p><strong>Use Case:</strong> ${useCase || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("SMTP Error:", error);
    return res.status(500).json({ error: "Failed to send email. Please try again later." });
  }
}