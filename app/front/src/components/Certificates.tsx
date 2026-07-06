import { useState } from "react";
import { Award, Images } from "lucide-react";
import { Reveal } from "./Reveal";
import { SliderArrows, SliderDots } from "./Slider";
import { Lightbox, type LightboxImage } from "./Lightbox";
import { useSlider } from "../hooks/useSlider";
import { useContent } from "../hooks/useContent";

export function Certificates() {
  const { c } = useContent();
  const { trackRef, atStart, atEnd, active, scrollByCard } = useSlider();
  const [gallery, setGallery] = useState<{
    images: LightboxImage[];
    index: number;
  } | null>(null);

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
          const images = item.images ?? (item.image ? [item.image] : []);
          const multiple = images.length > 1;
          const lbImages: LightboxImage[] = images.map((src) => ({
            src,
            alt: item.title,
            caption: item.title,
          }));
          return (
            <li className="slide-card cert-card" key={`${item.title}-${i}`}>
              {images.length > 0 ? (
                <div className={`cert-media${multiple ? " is-multi" : ""}`}>
                  {images.map((src, idx) => (
                    <button
                      type="button"
                      className="cert-thumb"
                      key={src}
                      onClick={() => setGallery({ images: lbImages, index: idx })}
                      aria-label={`${c.a11y.openCert}: ${item.title}`}
                    >
                      <img src={src} alt={item.title} loading="lazy" />
                    </button>
                  ))}
                  {multiple ? (
                    <span className="cert-count" aria-hidden="true">
                      <Images size={14} strokeWidth={2} />
                      {images.length}
                    </span>
                  ) : null}
                </div>
              ) : (
                <span className="cert-icon" aria-hidden="true">
                  <Award size={22} strokeWidth={1.8} />
                </span>
              )}
              <div className="cert-body">
                <h3 className="cert-title">{item.title}</h3>
                {item.meta ? <span className="cert-meta">{item.meta}</span> : null}
              </div>
              {images.length > 0 ? (
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

      {gallery ? (
        <Lightbox
          images={gallery.images}
          index={gallery.index}
          onIndexChange={(index) =>
            setGallery((g) => (g ? { ...g, index } : g))
          }
          onClose={() => setGallery(null)}
        />
      ) : null}
    </section>
  );
}
