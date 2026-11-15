import type { PageId } from "../types";

interface CTABannerProps {
  heading: string;
  buttonLabel?: string;
  onNavigate: (page: PageId) => void;
}

export default function CTABanner({
  heading,
  buttonLabel = "Book a Strategy Call",
  onNavigate,
}: CTABannerProps) {
  return (
    <section className="content-section" style={{ borderTop: "none" }}>
      <div className="cta-banner">
        <h2>{heading}</h2>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onNavigate("contact")}
        >
          {buttonLabel}
        </button>
      </div>
    </section>
  );
}
