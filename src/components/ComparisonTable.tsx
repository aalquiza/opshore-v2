import type { ComparisonValue } from "../types";
import { COMPARISON_ROWS } from "../data/content";

function renderCell(value: ComparisonValue, highlighted: boolean) {
  const classNames = [
    value === "yes" ? "yes" : "",
    value === "no" ? "no" : "",
    highlighted ? "hi" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const display =
    value === "yes" ? "Yes" : value === "no" ? "—" : value === "limited" ? "Limited" : value;

  return <td className={classNames || undefined}>{display}</td>;
}

export default function ComparisonTable() {
  return (
    <section className="content-section">
      <div className="section-head">
        <div className="eyebrow">The comparison</div>
        <h2>How Opshore is different</h2>
      </div>
      <div className="table-scroll">
        <table className="comp-table">
          <thead>
            <tr>
              <th></th>
              <th>Recruitment Agencies</th>
              <th>VA Agencies</th>
              <th className="hi">Opshore</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((row) => (
              <tr key={row.label}>
                <td>{row.label}</td>
                {renderCell(row.recruitmentAgencies, false)}
                {renderCell(row.vaAgencies, false)}
                {renderCell(row.opshore, true)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
