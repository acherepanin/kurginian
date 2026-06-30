import { Reveal } from "./Reveal";
import { useContent } from "../hooks/useContent";

export function Skills() {
  const { c } = useContent();
  return (
    <section className="section skills" id="skills">
      <div className="shell">
        <Reveal>
          <span className="eyebrow">{c.skills.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="section-title">{c.skills.heading}</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="section-note">{c.skills.note}</p>
        </Reveal>

        <div className="skills-grid">
          {c.skills.groups.map((group, gi) => (
            <Reveal key={group.title} delay={0.1 + gi * 0.08} className="skill-group">
              <h3 className="skill-group-title">{group.title}</h3>
              <ul className="skill-tags">
                {group.items.map((item) => (
                  <li key={item} className="skill-tag">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
