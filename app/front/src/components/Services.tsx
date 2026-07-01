import { Reveal } from "./Reveal";
import { SliderArrows, SliderDots } from "./Slider";
import { useSlider } from "../hooks/useSlider";
import { useContent } from "../hooks/useContent";

export function Services() {
  const { c } = useContent();
  const { trackRef, atStart, atEnd, active, scrollByCard } = useSlider();

  return (
    <section className="section services" id="services">
      <div className="shell slider-head">
        <div>
          <Reveal>
            <span className="eyebrow">{c.services.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="section-title">{c.services.heading}</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="section-note">{c.services.note}</p>
          </Reveal>
        </div>
        <SliderArrows
          atStart={atStart}
          atEnd={atEnd}
          onPrev={() => scrollByCard(-1)}
          onNext={() => scrollByCard(1)}
        />
      </div>

      <ul className="slide-track" ref={trackRef}>
        {c.services.items.map((item, i) => (
          <li className="slide-card service-card" key={item.title}>
            <span className="service-index">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="service-title">{item.title}</h3>
            <p className="service-desc">{item.desc}</p>
          </li>
        ))}
      </ul>

      <div className="shell service-foot">
        <SliderDots count={c.services.items.length} active={active} />
      </div>
    </section>
  );
}
