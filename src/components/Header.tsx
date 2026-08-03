import { useState } from "react";
import type { PageId } from "../types";
import { NAV_ITEMS } from "../data/content";
import logo from "../assets/logo.png";

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (page: PageId) => {
    onNavigate(page);
    setMenuOpen(false); // close the menu after picking a page
  };

  return (
    <header className="site-header">
      <nav className="wrap">
        <img className="logo-mark" src={logo} alt="Opshore.co" />

        <div className={`navlinks${menuOpen ? " open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`navlink${currentPage === item.id ? " active" : ""}`}
              onClick={() => handleNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            className="btn btn-primary navlinks-cta"
            onClick={() => handleNavigate("contact")}
          >
            Book a Free Audit
          </button>
        </div>

        <button
          type="button"
          className="btn btn-primary desktop-only"
          onClick={() => handleNavigate("contact")}
        >
          Book a Free Audit
        </button>

        <button
          type="button"
          className={`menu-toggle${menuOpen ? " open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}