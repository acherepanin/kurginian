import { ArrowLeft, ArrowRight } from "lucide-react";
import { useContent } from "../hooks/useContent";

interface ArrowsProps {
  atStart: boolean;
  atEnd: boolean;
  onPrev: () => void;
  onNext: () => void;
}

export function SliderArrows({ atStart, atEnd, onPrev, onNext }: ArrowsProps) {
  const { c } = useContent();
  return (
    <div className="slide-controls">
      <button
        type="button"
        className="slide-btn"
        onClick={onPrev}
        disabled={atStart}
        aria-label={c.a11y.prevSlide}
      >
        <ArrowLeft size={18} />
      </button>
      <button
        type="button"
        className="slide-btn"
        onClick={onNext}
        disabled={atEnd}
        aria-label={c.a11y.nextSlide}
      >
        <ArrowRight size={18} />
      </button>
    </div>
  );
}

export function SliderDots({ count, active }: { count: number; active: number }) {
  return (
    <div className="slide-dots" role="presentation">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={`dot${i === active ? " is-active" : ""}`} />
      ))}
    </div>
  );
}
