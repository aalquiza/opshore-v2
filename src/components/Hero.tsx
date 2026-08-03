import type { PageId } from "../types";

interface HeroProps {
  onNavigate: (page: PageId) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="hero">
      <div className="hero-grid">
        <div>
          <div className="eyebrow">Operations, built to scale</div>
          <h1>
            Stop managing tasks.
            <br />
            Start scaling systems.
          </h1>
          <p className="lead">
            Opshore takes full ownership of your operations, so you're not
            chasing tasks, managing people, or fixing bottlenecks. We build
            and run the systems behind your growth.
          </p>
          <div className="hero-ctas">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onNavigate("contact")}
            >
              Book a free audit
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => onNavigate("usecases")}
            >
              See how it works
            </button>
          </div>
        </div>
        <div>
          <svg
            className="hero-diagram"
            viewBox="0 0 420 260"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* scattered inputs */}
            <g fill="var(--mist)">
              <circle cx="30" cy="40" r="4" />
              <circle cx="18" cy="95" r="4" />
              <circle cx="46" cy="140" r="4" />
              <circle cx="22" cy="185" r="4" />
              <circle cx="50" cy="225" r="4" />
              <circle cx="14" cy="230" r="3" />
              <circle cx="38" cy="60" r="3" />
            </g>
            {/* converging paths */}
            <g fill="none" stroke="var(--line)" strokeWidth="1.4">
              <path d="M30,40 C140,60 220,120 330,130" />
              <path d="M18,95 C140,90 220,120 330,130" />
              <path d="M46,140 C160,135 240,130 330,130" />
              <path d="M22,185 C150,160 230,140 330,130" />
              <path d="M50,225 C160,190 240,150 330,130" />
            </g>
            {/* the system backbone */}
            <line
              x1="330"
              y1="20"
              x2="330"
              y2="240"
              stroke="var(--steel)"
              strokeWidth="2"
            />
            <g fill="var(--steel)">
              <circle cx="330" cy="50" r="5" />
              <circle cx="330" cy="90" r="5" />
              <circle cx="330" cy="130" r="5" />
              <circle cx="330" cy="170" r="5" />
              <circle cx="330" cy="210" r="5" />
            </g>
            <path
              id="diagram-path"
              d="M330,20 L330,240"
              stroke="var(--signal)"
              strokeWidth="2"
              strokeDasharray="220"
              strokeDashoffset="220"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="220"
                to="0"
                dur="1.4s"
                fill="freeze"
                begin="0.2s"
              />
            </path>
          </svg>
        </div>
      </div>
    </div>
  );
}
