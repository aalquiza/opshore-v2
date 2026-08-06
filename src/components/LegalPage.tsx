import type { LegalBlock, LegalListItem, LegalPageContent, PageId } from "../types";

interface LegalPageProps {
  content: LegalPageContent;
  active: boolean;
  onNavigate?: (page: PageId) => void;
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
 * Renders list items recursively to support lists inside lists
 */
function renderListItems(items: LegalListItem[]) {
  return items.map((item, i) => (
    <li
      key={i}
      className={item.indent ? `legal-indent-${item.indent}` : undefined}
    >
      {renderWithBold(item.text)}

      {/* Render sub-list recursively if sub-items exist */}
      {item.items && item.items.length > 0 && (
        <ul className="legal-list legal-sublist">
          {renderListItems(item.items)}
        </ul>
      )}
    </li>
  ));
}

export default function LegalPage({ content, active, onNavigate }: LegalPageProps) {
  /**
   * Renders individual content blocks (paragraphs, lists, or contact info)
   */
  function renderBlock(block: LegalBlock, index: number) {
    if (block.type === "list") {
      const listStyleClass = block.listStyle ? `list-style-${block.listStyle}` : "";

      return (
        <ul className={`legal-list ${listStyleClass}`.trim()} key={index}>
          {renderListItems(block.items)}
        </ul>
      );
    }

    if (block.type === "contact") {
      return (
        <p
          key={index}
          className={`legal-contact-block ${block.hasLine ? "has-divider" : ""}`}
        >
          {/* Optional Label (Supports **bold**) */}
          {block.label && <strong>{renderWithBold(block.label)}: </strong>}

          {/* Description Text (Supports **bold**) */}
          {block.text
            ? renderWithBold(`${block.text} `)
            : "For inquiries, please contact: "}

          {/* Email Link */}
          {block.email && (
            <a href={`mailto:${block.email}`}>
              <strong>{block.linkText ? renderWithBold(block.linkText) : block.email}</strong>
            </a>
          )}

          {/* Internal Page Link / Navigation */}
          {!block.email && (block.pageId || block.href) && (
            <a
              href={block.href || `#${block.pageId}`}
              onClick={(e) => {
                if (block.pageId && onNavigate) {
                  e.preventDefault();
                  onNavigate(block.pageId);
                }
              }}
            >
              <strong>{block.linkText ? renderWithBold(block.linkText) : "Contact Us"}</strong>
            </a>
          )}
        </p>
      );
    }

    // Handle paragraph block
    return (
      <p
        key={index}
        className={block.indent ? `legal-indent-${block.indent}` : undefined}
      >
        {renderWithBold(block.text)}
      </p>
    );
  }

  return (
    <section
      id={content.id}
      className={`page wrap${active ? " active" : ""}`}
      style={{ paddingTop: 64 }}
    >
      <div className="section-head">
        <div className="eyebrow">{content.updated}</div>
        <h2>{content.title}</h2>
        <p className="legal-intro">{content.intro}</p>
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