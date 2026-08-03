import type { PageId } from "../types";

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="site-footer wrap">
      <div className="footer-grid">
        <div className="footer-legal">
          Opshore.co is a trading name of Apexa Teoranta. Registered in
          Ireland. CRO 811040. Registered office: Castlemartyr, Cork, Ireland.
        </div>
        <div className="footer-links">
          <button type="button" onClick={() => onNavigate("terms")}>
            Terms of Service
          </button>
          <button type="button" onClick={() => onNavigate("legal")}>
            Legal Information
          </button>
          <button type="button" onClick={() => onNavigate("privacy")}>
            Privacy Policy
          </button>
        </div>
      </div>
      <div className="footer-copyright" style={{ marginTop: 18 }}>
        © 2026 Opshore.co
      </div>
    </footer>
  );
}