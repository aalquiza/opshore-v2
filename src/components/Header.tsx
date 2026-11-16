import { useEffect, useRef, useState } from "react";
import type { HomeSection, PageId } from "../types";
import { NAV_ITEMS } from "../data/content";
import logo from "../assets/logo.png";

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId, section?: HomeSection) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const menuLinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    // Keep the page behind the open mobile menu from scrolling.
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const menuButtons = Array.from(
      menuLinksRef.current?.querySelectorAll<HTMLButtonElement>("button") ?? [],
    );
    const firstButton = menuButtons[0];
    const toggleButton = menuToggleRef.current;
    firstButton?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleButton?.focus();
        return;
      }

      // Keep keyboard focus inside the navigation while the menu is open.
      if (event.key === "Tab" && firstButton && toggleButton) {
        if (event.shiftKey && document.activeElement === firstButton) {
          event.preventDefault();
          toggleButton.focus();
        } else if (!event.shiftKey && document.activeElement === toggleButton) {
          event.preventDefault();
          firstButton.focus();
        }
      }
    };
    const onResize = () => {
      if (window.innerWidth > 860) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const handleNavigate = (page: PageId, section?: HomeSection) => {
    setMenuOpen(false);
    onNavigate(page, section);
    // Return focus to the still-visible navigation control on mobile.
    if (menuOpen) menuToggleRef.current?.focus();
  };

  return (
    <header className="site-header">
      <nav className="wrap">
        {/* Clickable Logo leading home */}
        <button
          type="button"
          className="logo-btn"
          style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
          onClick={() => handleNavigate("home")}
        >
          <img className="logo-mark" src={logo} alt="Opshore.co" />
        </button>

        {/* Mobile Slide-out / Dropdown Menu */}
        <div className={`navlinks${menuOpen ? " open" : ""}`}
          id="opshore-primary-links"
          ref={menuLinksRef}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.section ?? item.id}
              type="button"
              className={`navlink${currentPage === item.id && !item.section ? " active" : ""}`}
              onClick={() => handleNavigate(item.id, item.section)}
            >
              {item.label}
            </button>
          ))}
          {/* Mobile CTA inside dropdown */}
          <button
            type="button"
            className="btn btn-primary navlinks-cta"
            onClick={() => handleNavigate("contact")}
          >
            Book a Strategy Call
          </button>
        </div>

        {/* Desktop CTA outside dropdown */}
        <button
          type="button"
          className="btn btn-primary desktop-only"
          onClick={() => handleNavigate("contact")}
        >
          Book a Strategy Call
        </button>

        {/* Hamburger Menu Toggle */}
        <button
          type="button"
          className={`menu-toggle${menuOpen ? " open" : ""}`}
          ref={menuToggleRef}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="opshore-primary-links"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}