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

  const updateField =
    <K extends keyof ContactFormState>(field: K) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real deployment this would call an API endpoint.
    setSubmitted(true);
    setForm(INITIAL_STATE);
  };

  return (
    <section
      id="contact"
      className={`page${active ? " active" : ""}`}
      style={{ paddingTop: 64 }}
    >
      <div className="section-head">
        <div className="eyebrow">Get in touch</div>
        <h2>Let's talk about your operations</h2>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <p>Whether you're drowning in manual tasks, scaling past what your current team can handle, or just not sure where the bottleneck actually is - that's what this conversation is for.</p>
          <p>No pressure, no sales script. Tell us where things are breaking, and we'll tell you honestly whether we're the right fit to fix it.</p>
          <p>Fill out the form and we'll respond as soon as we can.</p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="field-row">
              <div className="field">
                <label htmlFor="fname">First name</label>
                <input
                  id="fname"
                  type="text"
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
                required
                value={form.email}
                onChange={updateField("email")}
              />
            </div>
            <div className="field">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                type="url"
                placeholder="https://"
                value={form.website}
                onChange={updateField("website")}
              />
            </div>
            <div className="field">
              <label htmlFor="usecase">Use case</label>
              <select
                id="usecase"
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
                placeholder="Tell us a bit about what you're running into"
                value={form.message}
                onChange={updateField("message")}
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
            <div className={`confirm${submitted ? " visible" : ""}`}>
              Thanks for submitting — we'll be in touch.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
