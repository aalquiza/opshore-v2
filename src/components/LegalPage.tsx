import type { LegalBlock, LegalPageContent } from "../types";

interface LegalPageProps {
  content: LegalPageContent;
  active: boolean;
}

/**
 * Parses markdown-style **bold** syntax into React elements
 */
function renderWithBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

/**
 * Renders individual content blocks (paragraphs or unordered lists)
 */
function renderBlock(block: LegalBlock, index: number) {
  if (block.type === "list") {
    return (
      <ul className="legal-list" key={index}>
        {block.items.map((item, i) => (
          <li
            key={i}
            className={item.indent ? `legal-indent-${item.indent}` : undefined}
          >
            {renderWithBold(item.text)}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p
      key={index}
      className={block.indent ? `legal-indent-${block.indent}` : undefined}
    >
      {renderWithBold(block.text)}
    </p>
  );
}

export default function LegalPage({ content, active }: LegalPageProps) {
  return (
    <section
      id={content.id}
      className={`page wrap${active ? " active" : ""}`}
      style={{ paddingTop: 64 }}
    >
      <div className="section-head">
        <div className="eyebrow">{content.updated}</div>
        <h2>{content.title}</h2>
        <p className="legal-intro">
          {content.intro}
        </p>
      </div>

      <div className="legal-content">
        {content.sections.map((section, idx) => (
          <div className="legal-block" key={section.heading || idx}>
            {section.heading && <h3>{section.heading}</h3>}
            {section.body.map((block, index) => renderBlock(block, index))}
          </div>
        ))}
      </div>
    </section>
  );
}