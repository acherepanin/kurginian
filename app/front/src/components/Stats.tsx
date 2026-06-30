import { Reveal } from "./Reveal";
import { useContent } from "../hooks/useContent";

export function Stats() {
  const { c } = useContent();
  return (
    <section className="section stats" id="stats">
      <div className="shell">
        <ul className="stats-row">
          {c.stats.map((stat, i) => (
            <Reveal as="li" key={stat.label} delay={i * 0.08} className="stat">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
