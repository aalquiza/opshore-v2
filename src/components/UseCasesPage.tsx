import type { PageId, UseCase } from "../types";
import { SOFTWARE_USE_CASES, USE_CASES } from "../data/content";
import CTABanner from "./CTABanner";
import ComparisonTable from "./ComparisonTable";

interface UseCasesPageProps {
  active: boolean;
  onNavigate: (page: PageId) => void;
}

function UseCaseList({ items }: { items: UseCase[] }) {
  return (
    <>
      {items.map((useCase, index) => (
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
    </>
  );
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
        <h2>Challenges we help businesses solve</h2>
        <p style={{ color: "var(--ink-soft)", fontSize: "1rem", marginTop: 14 }}>
          Whether you're building a software product or strengthening day-to-day
          operations, Opshore helps you move from challenges to practical solutions.
        </p>
      </div>

      <section className="content-section" aria-labelledby="software-use-cases-title">
        <div className="section-head">
          <div className="eyebrow">01 / Build</div>
          <h2 id="software-use-cases-title">Software Development</h2>
          <p style={{ color: "var(--ink-soft)", marginTop: 14 }}>
            From a new product idea to better software for an established business.
          </p>
        </div>
        <UseCaseList items={SOFTWARE_USE_CASES} />
      </section>

      <section className="content-section" aria-labelledby="operations-use-cases-title">
        <div className="section-head">
          <div className="eyebrow">02 / Operate</div>
          <h2 id="operations-use-cases-title">Operations & Managed Execution</h2>
          <p style={{ color: "var(--ink-soft)", marginTop: 14 }}>
            Practical ways to improve workflows, teams, and everyday business execution.
          </p>
        </div>
        <UseCaseList items={USE_CASES} />
      </section>

      <div className="section-head">
        <div className="eyebrow">Operations comparison</div>
        <p style={{ color: "var(--ink-soft)", marginTop: 14 }}>
          The comparison below focuses on managed operations services,
          not software development providers.
        </p>
      </div>
      <ComparisonTable />

      <CTABanner
        heading="Not sure which use case fits you?"
        onNavigate={onNavigate}
      />
    </section>
  );
}
