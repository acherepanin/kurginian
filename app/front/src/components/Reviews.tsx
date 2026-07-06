import { Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { SliderArrows, SliderDots } from "./Slider";
import { useSlider } from "../hooks/useSlider";
import { useContent } from "../hooks/useContent";

export function Reviews() {
  const { c } = useContent();
  const { trackRef, atStart, atEnd, active, scrollByCard } = useSlider();

  return (
    <section className="section reviews" id="reviews">
      <div className="shell slider-head">
        <div>
          <Reveal>
            <span className="eyebrow">{c.reviews.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="section-title">{c.reviews.heading}</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="section-note">{c.reviews.note}</p>
          </Reveal>
        </div>
      </div>

      <ul className="slide-track" ref={trackRef}>
        {c.reviews.items.map((item, i) => (
          <li className="slide-card review-card" key={`${item.name}-${i}`}>
            <Quote className="review-quote" size={26} aria-hidden="true" />
            <div
              className="review-stars"
              aria-label={`${item.rating} ${c.a11y.ratingOutOf}`}
            >
              {Array.from({ length: 5 }).map((_, s) => (
                <Star
                  key={s}
                  size={15}
                  className={s < item.rating ? "star is-on" : "star"}
                  aria-hidden="true"
                />
              ))}
            </div>
            <blockquote className="review-text">{item.text}</blockquote>
          </li>
        ))}
      </ul>

      <div className="shell service-foot">
        <SliderDots count={c.reviews.items.length} active={active} />
        <SliderArrows
          atStart={atStart}
          atEnd={atEnd}
          onPrev={() => scrollByCard(-1)}
          onNext={() => scrollByCard(1)}
        />
      </div>
    </section>
  );
}
