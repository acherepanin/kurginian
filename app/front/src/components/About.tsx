import { Reveal } from "./Reveal";
import { useContent } from "../hooks/useContent";

export function About() {
  const { c } = useContent();
  return (
    <section className="section about" id="about">
      <div className="shell about-grid">
        <div className="about-intro">
          <Reveal>
            <span className="eyebrow">{c.about.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="section-title">{c.about.heading}</h2>
          </Reveal>
          {c.about.body.map((para, i) => (
            <Reveal key={i} delay={0.12 + i * 0.06}>
              <p className="about-text">{para}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="about-timeline-wrap">
          <ol className="timeline">
            {c.about.credentials.map((item, i) => (
              <li key={`${item.period}-${item.title}-${i}`} className="timeline-item">
                <span className="timeline-period">{item.period}</span>
                <span className="timeline-body">
                  <span className="timeline-title">{item.title}</span>
                  <span className="timeline-place">{item.place}</span>
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
