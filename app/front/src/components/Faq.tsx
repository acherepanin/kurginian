import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { useContent } from "../hooks/useContent";

export function Faq() {
  const { c } = useContent();
  return (
    <section className="section faq" id="faq">
      <div className="shell faq-grid">
        <div className="faq-head">
          <Reveal>
            <span className="eyebrow">{c.faq.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="section-title">{c.faq.heading}</h2>
          </Reveal>
        </div>

        <div className="faq-list">
          {c.faq.items.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.05}>
              <details className="faq-item">
                <summary className="faq-q">
                  <span>{item.q}</span>
                  <Plus className="faq-icon" size={20} aria-hidden="true" />
                </summary>
                <p className="faq-a">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
