import { REVIEWS } from "../data/content";

interface ReviewsPageProps {
  active: boolean;
}

export default function ReviewsPage({ active }: ReviewsPageProps) {
  return (
    <section
      id="reviews"
      className={`page${active ? " active" : ""}`}
      style={{ paddingTop: 64 }}
    >
      <div className="section-head">
        <div className="eyebrow">What clients say</div>
        <h2>Trusted by growing teams</h2>
      </div>
      <div className="reviews-grid">
        {REVIEWS.map((review) => (
          <div className="review-card" key={review.name}>
            <blockquote>&ldquo;{review.quote}&rdquo;</blockquote>
            <div className="review-person">
              {review.avatarUrl && (
                <img
                  className="review-avatar"
                  src={review.avatarUrl}
                  alt={review.name}
                />
              )}
              <div className="review-person-info">
                <span className="name">{review.name}</span>
                <cite>{review.role}</cite>
              </div>
            </div>
          </div>
        ))}
        <div
          className="review-card"
          style={{
            gridColumn: "1 / -1",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--mist)",
          }}
        >
          <div
            className="review-avatar initials"
            style={{ width: 48, height: 48 }}
          >
            +
          </div>
          <span style={{ fontFamily: "var(--mono)", fontSize: "0.82rem" }}>
            More client stories coming soon.
          </span>
        </div>
      </div>
    </section>
  );
}
