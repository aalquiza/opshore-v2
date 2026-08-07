import { useState, useEffect } from "react";
import type { PageId } from "../types";

interface CookieBannerProps {
  onNavigate?: (page: PageId) => void;
}

export default function CookieBanner({ onNavigate }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleChoice = (preference: "accepted" | "declined") => {
    localStorage.setItem("cookie_consent", preference);
    setIsClosing(true);
    
    // Wait for the exit animation duration (300ms) before unmounting
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className={`cookie-banner wrap${isClosing ? " closing" : ""}`}>
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
            onClick={() => handleChoice("declined")}
          >
            Decline
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleChoice("accepted")}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}