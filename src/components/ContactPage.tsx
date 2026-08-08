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
    setLoading(true);
    setError("");
    setSubmitted(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setForm(INITIAL_STATE);
      } else {
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
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
        <h2>Let's talk about your operations</h2>
        <div className="contact-info">
          <p>
            Whether you're drowning in manual tasks, scaling past what your
            current team can handle, or just not sure where the bottleneck
            actually is — that's what this conversation is for. No pressure, no sales script. 
            Tell us where things are breaking, and we'll tell you honestly whether we're the right fit to fix it.
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
              placeholder="https://"
              value={form.website}
              onChange={updateField("website")}
            />
          </div>
          <div className="field">
            <label htmlFor="usecase">Use case</label>
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
              placeholder="Tell us a bit about what you're running into"
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
            <div className="error-message" style={{ color: "#ef4444", marginTop: 12 }}>
              {error}
            </div>
          )}

          <div className={`confirm${submitted ? " visible" : ""}`}>
            Thanks for submitting — we'll be in touch.
          </div>
        </form>
      </div>
    </section>
  );
}