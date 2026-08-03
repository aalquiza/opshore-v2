import { PILLARS } from "../data/content";

export default function Pillars() {
  return (
    <section className="content-section">
      <div className="section-head">
        <div className="eyebrow">What we do</div>
        <h2>How Opshore supports growing companies</h2>
      </div>
      <div className="pillars">
        {PILLARS.map((pillar) => (
          <div className="pillar" key={pillar.title}>
            <span className="num">{pillar.tag}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
