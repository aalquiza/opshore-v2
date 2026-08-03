import type { PageId } from "../types";
import Hero from "./Hero";
import Pillars from "./Pillars";
import ComparisonTable from "./ComparisonTable";
import CTABanner from "./CTABanner";

interface HomePageProps {
  active: boolean;
  onNavigate: (page: PageId) => void;
}

export default function HomePage({ active, onNavigate }: HomePageProps) {
  return (
    <section
      id="home"
      className={`page${active ? " active" : ""}`}
      style={{ borderTop: "none", paddingTop: 0 }}
    >
      <Hero onNavigate={onNavigate} />
      <Pillars />
      <ComparisonTable />
      <CTABanner
        heading="Ready to stop managing and start scaling?"
        onNavigate={onNavigate}
      />
    </section>
  );
}
