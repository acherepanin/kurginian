import { ArrowLeft, ArrowRight } from "lucide-react";

interface ArrowsProps {
  atStart: boolean;
  atEnd: boolean;
  onPrev: () => void;
  onNext: () => void;
}

export function SliderArrows({ atStart, atEnd, onPrev, onNext }: ArrowsProps) {
  return (
    <div className="slide-controls">
      <button
        type="button"
        className="slide-btn"
        onClick={onPrev}
        disabled={atStart}
        aria-label="Назад"
      >
        <ArrowLeft size={18} />
      </button>
      <button
        type="button"
        className="slide-btn"
        onClick={onNext}
        disabled={atEnd}
        aria-label="Вперёд"
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
