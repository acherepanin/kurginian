import { Reveal } from "./Reveal";
import { useContent } from "../hooks/useContent";

export function Prices() {
  const { c } = useContent();
  return (
    <section className="section prices" id="prices">
      <div className="shell">
        <Reveal>
          <span className="eyebrow">{c.prices.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="section-title">{c.prices.heading}</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="section-note">{c.prices.note}</p>
        </Reveal>

        <ul className="price-list">
          {c.prices.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={0.1 + i * 0.05} className="price-row">
              <span className="price-body">
                <span className="price-title">{item.title}</span>
                <span className="price-desc">{item.desc}</span>
              </span>
              {item.price ? (
                <span className="price-value">{item.price}</span>
              ) : null}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
