import type { HomeSection, PageId } from "../types";
import { REVIEWS } from "../data/content";
import Pillars from "./Pillars";
import CTABanner from "./CTABanner";

interface HomePageProps {
  active: boolean;
  onNavigate: (page: PageId, section?: HomeSection) => void;
}

const SOFTWARE_CAPABILITIES = [
  "Custom software",
  "SaaS products",
  "Web applications",
  "Mobile applications",
  "AI & automation",
  "API integrations",
];

const OPERATIONS_CAPABILITIES = [
  "Operations strategy",
  "Process optimization",
  "Engineering operations",
  "Project delivery",
  "Team building",
  "Ongoing support",
];

const ENGAGEMENTS = [
  {
    number: "01",
    tag: "SOFTWARE DEVELOPMENT",
    title: "Build a product",
    description: "From a new software idea to an existing platform that needs to evolve. Work with a team focused on building and delivering the right solution.",
  },
  {
    number: "02",
    tag: "MANAGED OPERATIONS",
    title: "Improve operations",
    description: "Get practical help with bottlenecks, workflows, team coordination, and reliable day-to-day execution.",
  },
  {
    number: "03",
    tag: "INTEGRATED PARTNERSHIP",
    title: "Build & operate",
    description: "Bring technology and operations together through one coordinated partner, from product delivery to ongoing execution.",
  },
];

const STEPS = [
  { number: "01", title: "Understand", description: "Learn your goals, challenges, users, and operational needs." },
  { number: "02", title: "Plan", description: "Agree on priorities, scope, ownership, and a practical roadmap." },
  { number: "03", title: "Execute", description: "Build, coordinate, and deliver with clear communication." },
  { number: "04", title: "Improve", description: "Review what works and adapt as your business grows." },
];

function CapabilityList({ items }: { items: string[] }) {
  return (
    <ul className="merged-capabilities">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

export default function HomePage({ active, onNavigate }: HomePageProps) {
  return (
    <section id="home" className={`page merged-home${active ? " active" : ""}`}>
      <div className="merged-hero">
        <div className="merged-hero-copy">
          <div className="eyebrow">Technology & operations, built to scale</div>
          <h1>Build better software.<br /><span>Run stronger operations.</span></h1>
          <p className="merged-lead">Opshore helps founders build software products, streamline operations, and create reliable systems that make growth possible — with one accountable partner from idea to execution.</p>
          <div className="merged-button-row">
            <button className="btn btn-primary" type="button" onClick={() => onNavigate("contact")}>Discuss Your Project</button>
            <button className="btn btn-ghost" type="button" onClick={() => onNavigate("home", "services")}>Explore Our Services ↓</button>
          </div>
          <p className="merged-microcopy">Custom software · SaaS · Managed operations · Automation</p>
        </div>
        <div className="merged-hero-visual" aria-label="Illustration of Opshore's two service areas">
          <div className="merged-window-head"><span className="merged-dots"><i /><i /><i /></span><small>THE OPSHORE APPROACH</small></div>
          <div className="merged-visual-grid">
            <div className="merged-visual-card"><span>01 / BUILD</span><strong>Software that moves your business forward.</strong><small>Products · Platforms · Integrations</small><b aria-hidden="true">&lt;/&gt;</b></div>
            <div className="merged-visual-card"><span>02 / OPERATE</span><strong>Systems that keep everything running.</strong><small>People · Process · Delivery</small><b aria-hidden="true">↗</b></div>
          </div>
          <div className="merged-window-foot"><small>Build what you need. Run it with confidence.</small><span>ONE PARTNER</span></div>
        </div>
      </div>

      <section className="merged-section" id="services" aria-labelledby="services-title">
        <div className="section-head merged-head">
          <div className="eyebrow">What we do</div>
          <h2 id="services-title">One partner. Two ways to move forward.</h2>
          <p>Independent services, or a joined-up partnership. Start where your business needs the most momentum.</p>
        </div>
        <div className="merged-service-grid">
          <article className="merged-service-card"><span className="merged-count">01 / BUILD</span><div className="merged-service-icon" aria-hidden="true">&lt;/&gt;</div><h3>Software Development</h3><p>Design, develop, and improve software products built around your business goals.</p><div className="merged-tags"><span>Custom Software</span><span>SaaS</span><span>Web & Mobile</span><span>AI Solutions</span></div><button type="button" className="merged-link" onClick={() => onNavigate("home", "software")}>Explore Software Development →</button></article>
          <article className="merged-service-card"><span className="merged-count">02 / OPERATE</span><div className="merged-service-icon" aria-hidden="true">↗</div><h3>Operations & Managed Execution</h3><p>Build effective workflows, align teams, and bring structure and accountability to everyday execution.</p><div className="merged-tags"><span>Strategy</span><span>Delivery</span><span>Teams</span><span>Automation</span></div><button type="button" className="merged-link" onClick={() => onNavigate("home", "operations")}>Explore Operations →</button></article>
        </div>
      </section>

      <section className="merged-section merged-feature" id="software" aria-labelledby="software-title">
        <div className="merged-feature-copy">
          <div className="eyebrow">Software development</div>
          <h2 id="software-title">From product idea to software that works.</h2>
          <p>Whether you're launching a new product, modernizing an existing platform, or developing custom business software, Opshore combines engineering and delivery structure to move your project forward.</p>
          <CapabilityList items={SOFTWARE_CAPABILITIES} />
          <button className="btn btn-primary" type="button" onClick={() => onNavigate("contact")}>Discuss a Development Project</button>
        </div>
        <div className="merged-feature-graphic merged-software-graphic" aria-label="Illustration of software planning, development and delivery">
          <div className="merged-graphic-kicker">PRODUCT ENGINEERING</div>
          <div className="merged-code-window"><div className="merged-code-bar"><i/><i/><i/><span>product-workspace</span></div><div className="merged-code-content"><div className="merged-code-line wide"/><div className="merged-code-line"/><div className="merged-code-line medium"/><div className="merged-code-split"><div/><div/></div></div></div>
          <div className="merged-graphic-steps"><span>Plan</span><b>→</b><span>Build</span><b>→</b><span>Launch</span></div>
        </div>
      </section>

      <section className="merged-section merged-feature merged-operations-feature" id="operations" aria-labelledby="operations-title">
        <div className="merged-feature-graphic merged-ops-graphic" aria-label="Illustration of connected operational workflows">
          <div className="merged-graphic-kicker">MANAGED EXECUTION</div>
          <div className="merged-system-stack"><div><span>01</span> Strategy & priorities <b>✓</b></div><div><span>02</span> People & processes <b>✓</b></div><div><span>03</span> Delivery & support <b>✓</b></div></div>
          <p>Structure creates momentum.</p>
        </div>
        <div className="merged-feature-copy">
          <div className="eyebrow">Operations & managed execution</div>
          <h2 id="operations-title">Make your operations work as hard as your ideas.</h2>
          <p>Opshore helps founders remove operational bottlenecks and establish the people, processes, and systems needed to execute consistently.</p>
          <CapabilityList items={OPERATIONS_CAPABILITIES} />
          <div className="merged-button-row"><button className="btn btn-primary" type="button" onClick={() => onNavigate("contact")}>Discuss Your Operations</button><button className="btn btn-ghost" type="button" onClick={() => onNavigate("usecases")}>See Use Cases</button></div>
        </div>
      </section>

      <div className="merged-ops-pillars"><Pillars /></div>

      <section className="merged-section" aria-labelledby="engagement-title">
        <div className="merged-head"><div className="eyebrow">Flexible ways to work together</div><h2 id="engagement-title">Start with what you need. Expand as you grow.</h2><p>Choose a focused engagement or bring both disciplines together.</p></div>
        <div className="merged-engagement-grid">{ENGAGEMENTS.map((item) => <article className="merged-engagement-card" key={item.number}><span className="merged-count">{item.number} / {item.tag}</span><h3>{item.title}</h3><p>{item.description}</p><button type="button" className="merged-link" onClick={() => onNavigate("contact")}>Start a conversation →</button></article>)}</div>
      </section>

      <section className="merged-section merged-difference" aria-labelledby="difference-title">
        <div className="merged-difference-copy"><div className="eyebrow">Why Opshore</div><h2 id="difference-title">More than a supplier. A partner in execution.</h2><p>Software and operations are often treated as separate challenges. We bring a practical delivery mindset to both — helping you move from planning to ongoing progress.</p></div>
        <div className="merged-difference-points"><div><span>01</span><strong>Built around your goals</strong><p>Solutions shaped by your requirements, not a one-size-fits-all package.</p></div><div><span>02</span><strong>Clear ownership</strong><p>Visibility into priorities, responsibilities, and what happens next.</p></div><div><span>03</span><strong>Support beyond launch</strong><p>The option to continue improving processes and systems as you grow.</p></div></div>
      </section>

      <section className="merged-section" id="approach" aria-labelledby="approach-title">
        <div className="merged-head"><div className="eyebrow">How we work</div><h2 id="approach-title">Clear direction. Accountable execution.</h2><p>Four practical stages, tailored to the work you need done.</p></div>
        <div className="merged-steps">{STEPS.map((step) => <div className="merged-step" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></div>)}</div>
      </section>

      <section className="merged-section" aria-labelledby="home-clients-title">
        <div className="merged-head"><div className="eyebrow">Client experience</div><h2 id="home-clients-title">Trusted by growing teams.</h2></div>
        <div className="merged-review-grid">{REVIEWS.map((review) => <article className="merged-review-card" key={review.name}><blockquote>“{review.quote}”</blockquote><div className="merged-review-person">{review.avatarUrl && <img src={review.avatarUrl} alt="" loading="lazy" />}<span><strong>{review.name}</strong><small>{review.role}</small></span></div></article>)}</div>
        <button type="button" className="merged-link merged-more-reviews" onClick={() => onNavigate("reviews")}>Read client testimonials →</button>
      </section>

      <CTABanner heading="What are you looking to build or improve?" buttonLabel="Book a Strategy Call" onNavigate={onNavigate} />
    </section>
  );
}
