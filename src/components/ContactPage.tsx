import { useState } from "react";
import type { FormEvent } from "react";
import type { ContactFormState } from "../types";
import { USE_CASE_OPTIONS } from "../data/content";

interface ContactPageProps {
  active: boolean;
}

const INITIAL_STATE: ContactFormState = {
  firstName: "",
  lastName: "",
  email: "",
  website: "",
  useCase: "",
  message: "",
};

export default function ContactPage({ active }: ContactPageProps) {
  const [form, setForm] = useState<ContactFormState>(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const updateField =
    <K extends keyof ContactFormState>(field: K) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;
    setLoading(true);
    setError("");
    setSubmitted(false);

    // Browser-side checks improve UX; the API MUST validate these again.
    const payload: ContactFormState = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email.trim(),
      website: form.website.trim(),
      useCase: form.useCase,
      message: form.message.trim(),
    };

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
        credentials: "same-origin",
      });

      // A routing problem could return index.html (HTTP 200). Do not
      // misreport an HTML response as successful email delivery.
      const contentType = response.headers.get("content-type") || "";
      if (!contentType.toLowerCase().includes("json")) {
        setError("We couldn't confirm your enquiry was sent. Please try again later.");
        return;
      }
      const result: unknown = await response.json();
      // Only our API's explicit success:true indicates confirmed receipt.
      const confirmedSuccess =
        typeof result === "object" && result !== null &&
        "success" in result && result.success === true;

      if (response.ok && confirmedSuccess) {
        setSubmitted(true);
        setForm(INITIAL_STATE);
      } else if (response.status === 429) {
        setError("Too many requests. Please try again later.");
      } else {
        // Never display raw server errors or diagnostic details to users.
        setError("We couldn't send your enquiry. Please try again later.");
      }
    } catch (err) {
      const timedOut = err instanceof Error && err.name === "AbortError";
      setError(timedOut
        ? "The request timed out. Please try again."
        : "Connection error. Please try again later.");
    } finally {
      window.clearTimeout(timeoutId);
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className={`page wrap${active ? " active" : ""}`}
      style={{ paddingTop: 64 }}
    >
      <div className="section-head contact-head">
        <div className="eyebrow">Get in touch</div>
        <h2>Let's talk about what you're building</h2>
        <div className="contact-info">
          <p>
            Whether you're planning a software product, improving day-to-day
            operations, or looking for a partner to help with both, tell us what
            you want to achieve. We'll explore the right next step together.
          </p>
          <p>Fill out the form below and we'll respond as soon as we can.</p>
        </div>
      </div>

      <div className="contact-form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="field-row">
            <div className="field">
              <label htmlFor="fname">First name</label>
              <input
                id="fname"
                type="text"
                autoComplete="given-name"
                maxLength={80}
                required
                value={form.firstName}
                onChange={updateField("firstName")}
              />
            </div>
            <div className="field">
              <label htmlFor="lname">Last name</label>
              <input
                id="lname"
                type="text"
                autoComplete="family-name"
                maxLength={80}
                required
                value={form.lastName}
                onChange={updateField("lastName")}
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              maxLength={254}
              required
              value={form.email}
              onChange={updateField("email")}
            />
          </div>
          <div className="field">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              //type="url"
              type="text"
              autoComplete="url"
              maxLength={2048}
              placeholder="https://"
              value={form.website}
              onChange={updateField("website")}
            />
          </div>
          <div className="field">
            <label htmlFor="usecase">What do you need help with?</label>
            <select
              id="usecase"
              autoComplete="off"
              value={form.useCase}
              onChange={updateField("useCase")}
            >
              <option value="">Select one</option>
              {USE_CASE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              autoComplete="off"
              placeholder="Tell us about your project or operational challenge"
              maxLength={4000}
              value={form.message}
              onChange={updateField("message")}
            />
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            disabled={loading}
            style={{ width: "100%" }}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
          
          {error && (
            <div className="error-message" role="alert" style={{ color: "#ef4444", marginTop: 12 }}>
              {error}
            </div>
          )}

          <div className={`confirm${submitted ? " visible" : ""}`} role="status" aria-live="polite">
            Thanks for submitting — we'll be in touch.
          </div>
        </form>
      </div>
    </section>
  );
}