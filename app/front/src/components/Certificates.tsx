import { useState } from "react";
import { Award } from "lucide-react";
import { Reveal } from "./Reveal";
import { SliderArrows, SliderDots } from "./Slider";
import { Lightbox } from "./Lightbox";
import { useSlider } from "../hooks/useSlider";
import { useContent } from "../hooks/useContent";

export function Certificates() {
  const { c } = useContent();
  const { trackRef, atStart, atEnd, active, scrollByCard } = useSlider();
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="section certificates" id="certificates">
      <div className="shell slider-head">
        <div>
          <Reveal>
            <span className="eyebrow">{c.certificates.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="section-title">{c.certificates.heading}</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="section-note">{c.certificates.note}</p>
          </Reveal>
        </div>
      </div>

      <ul className="slide-track" ref={trackRef}>
        {c.certificates.items.map((item, i) => {
          const clickable = Boolean(item.image);
          return (
            <li className="slide-card cert-card" key={`${item.title}-${i}`}>
              {item.image ? (
                <button
                  type="button"
                  className="cert-thumb"
                  onClick={() => setZoom({ src: item.image!, alt: item.title })}
                  aria-label={`${c.a11y.openCert}: ${item.title}`}
                >
                  <img src={item.image} alt={item.title} />
                </button>
              ) : (
                <span className="cert-icon" aria-hidden="true">
                  <Award size={22} strokeWidth={1.8} />
                </span>
              )}
              <div className="cert-body">
                <h3 className="cert-title">{item.title}</h3>
                {item.meta ? <span className="cert-meta">{item.meta}</span> : null}
              </div>
              {clickable ? (
                <span className="cert-hint">{c.certificates.hint}</span>
              ) : null}
            </li>
          );
        })}
      </ul>

      <div className="shell service-foot">
        <SliderDots count={c.certificates.items.length} active={active} />
        <SliderArrows
          atStart={atStart}
          atEnd={atEnd}
          onPrev={() => scrollByCard(-1)}
          onNext={() => scrollByCard(1)}
        />
      </div>

      {zoom ? (
        <Lightbox
          src={zoom.src}
          alt={zoom.alt}
          caption={zoom.alt}
          onClose={() => setZoom(null)}
        />
      ) : null}
    </section>
  );
}
