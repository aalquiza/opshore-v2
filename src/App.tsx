import { useCallback, useState } from "react";
import type { PageId } from "./types";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import UseCasesPage from "./components/UseCasesPage";
import ReviewsPage from "./components/ReviewsPage";
import ContactPage from "./components/ContactPage";
import LegalPage from "./components/LegalPage";
import Footer from "./components/Footer";
import {
  LEGAL_CONTENT,
  PRIVACY_CONTENT,
  TERMS_CONTENT,
} from "./data/legalContent";

export default function App() {
  const [page, setPage] = useState<PageId>("home");

  const goTo = useCallback((next: PageId) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <>
      <Header currentPage={page} onNavigate={goTo} />
      <main className="wrap">
        <HomePage active={page === "home"} onNavigate={goTo} />
        <UseCasesPage active={page === "usecases"} onNavigate={goTo} />
        <ReviewsPage active={page === "reviews"} />
        <ContactPage active={page === "contact"} />

        <LegalPage content={TERMS_CONTENT} active={page === "terms"} />
        <LegalPage content={PRIVACY_CONTENT} active={page === "privacy"} />
        <LegalPage content={LEGAL_CONTENT} active={page === "legal"} />

      </main>
      <Footer onNavigate={goTo} />
    </>
  );
}
