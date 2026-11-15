import type { PageId } from "../types";
import { USE_CASES } from "../data/content";
import CTABanner from "./CTABanner";
import ComparisonTable from "./ComparisonTable";

interface UseCasesPageProps {
  active: boolean;
  onNavigate: (page: PageId) => void;
}

export default function UseCasesPage({ active, onNavigate }: UseCasesPageProps) {
  return (
    <section
      id="usecases"
      className={`page${active ? " active" : ""}`}
      style={{ paddingTop: 64 }}
    >
      <div className="section-head">
        <div className="eyebrow">Use cases</div>
        <h2>Operational bottlenecks we help founders solve</h2>
        <p style={{ color: "var(--ink-soft)", fontSize: "1rem", marginTop: 14 }}>
          Startups don't fail because of lack of effort. They fail because
          operations break as they scale. Opshore helps fix the systems
          behind growth.
        </p>
      </div>

      {USE_CASES.map((useCase, index) => (
        <div
          className={`usecase${index === 0 ? " first" : ""}`}
          key={useCase.title}
        >
          <div>
            <span className="tag">{useCase.tag}</span>
          </div>
          <div>
            <h3>{useCase.title}</h3>
            <p>
              <strong>Problem:</strong> {useCase.problem}
            </p>
            <p>
              <strong>Opshore:</strong> {useCase.solution}
            </p>
          </div>
        </div>
      ))}

      <ComparisonTable />
      <CTABanner
        heading="Not sure which use case fits you?"
        onNavigate={onNavigate}
      />
    </section>
  );
}
