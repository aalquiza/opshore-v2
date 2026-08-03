import type { PageId } from "../types";
import { NAV_ITEMS } from "../data/content";
import logo from "../assets/logo.png";

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="site-header">
      <nav className="wrap">
        <img className="logo-mark" src={logo} alt="Opshore.co" />
        <div className="navlinks">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`navlink${currentPage === item.id ? " active" : ""}`}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onNavigate("contact")}
        >
          Book a Free Audit
        </button>
      </nav>
    </header>
  );
}
