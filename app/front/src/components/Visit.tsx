import { Reveal } from "./Reveal";
import { useContent } from "../hooks/useContent";

export function Visit() {
  const { c } = useContent();
  return (
    <section className="section visit" id="visit">
      <div className="shell">
        <Reveal>
          <span className="eyebrow">{c.visit.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="section-title">{c.visit.heading}</h2>
        </Reveal>

        <ol className="visit-steps">
          {c.visit.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.1} className="visit-step">
              <span className="visit-num">{i + 1}</span>
              <h3 className="visit-step-title">{step.title}</h3>
              <p className="visit-step-desc">{step.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
