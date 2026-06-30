import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { useContent } from "../hooks/useContent";

export function Services() {
  const { c } = useContent();
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [active, setActive] = useState(0);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
    const card = el.querySelector<HTMLElement>(".service-card");
    const step = card ? card.offsetWidth + 18 : el.clientWidth;
    setActive(Math.round(el.scrollLeft / step));
  }, []);

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".service-card");
    const step = card ? card.offsetWidth + 18 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <section className="section services" id="services">
      <div className="shell">
        <div className="services-head">
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
          <div className="slide-controls" aria-hidden="false">
            <button
              type="button"
              className="slide-btn"
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              aria-label="Previous"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              className="slide-btn"
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              aria-label="Next"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <ul className="shell service-track" ref={trackRef}>
        {c.services.items.map((item, i) => (
          <li className="service-card" key={item.title}>
            <span className="service-index">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="service-title">{item.title}</h3>
            <p className="service-desc">{item.desc}</p>
          </li>
        ))}
      </ul>

      <div className="shell service-foot">
        <div className="slide-dots" role="presentation">
          {c.services.items.map((item, i) => (
            <span
              key={item.title}
              className={`dot${i === active ? " is-active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
