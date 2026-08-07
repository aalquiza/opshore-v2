import { useState, useEffect } from "react";
import type { PageId } from "../types";

interface CookieBannerProps {
  onNavigate?: (page: PageId) => void;
}

export default function CookieBanner({ onNavigate }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner wrap">
      <div className="cookie-content">
        <p>
          We use cookies to improve your experience and analyze site traffic.
          Read our{" "}
          <button
            type="button"
            className="cookie-link-btn"
            onClick={() => onNavigate && onNavigate("privacy")}
          >
            Privacy Policy
          </button>{" "}
          for details.
        </p>
        <div className="cookie-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleDecline}
          >
            Decline
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleAccept}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}