import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useContent } from "../hooks/useContent";

export interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

export function Lightbox({ images, index, onIndexChange, onClose }: LightboxProps) {
  const { c } = useContent();
  const count = images.length;
  const multiple = count > 1;
  const current = images[index];
  const touchX = useRef(0);

  const go = (dir: number) => {
    if (count > 0) onIndexChange((index + dir + count) % count);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (multiple && e.key === "ArrowLeft") go(-1);
      else if (multiple && e.key === "ArrowRight") go(1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, index, count, multiple]);

  if (!current) return null;

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!multiple) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 44) go(dx < 0 ? 1 : -1);
  };

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <button
        type="button"
        className="lightbox-close"
        aria-label={c.a11y.close}
        onClick={onClose}
      >
        <X size={22} />
      </button>

      {multiple ? (
        <button
          type="button"
          className="lightbox-nav lightbox-prev"
          aria-label={c.a11y.prevSlide}
          onClick={(e) => {
            e.stopPropagation();
            go(-1);
          }}
        >
          <ChevronLeft size={26} />
        </button>
      ) : null}

      <figure
        className="lightbox-figure"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img className="lightbox-img" src={current.src} alt={current.alt} />
        {current.caption || multiple ? (
          <figcaption className="lightbox-cap">
            {current.caption}
            {multiple ? (
              <span className="lightbox-count">
                {index + 1} / {count}
              </span>
            ) : null}
          </figcaption>
        ) : null}
      </figure>

      {multiple ? (
        <button
          type="button"
          className="lightbox-nav lightbox-next"
          aria-label={c.a11y.nextSlide}
          onClick={(e) => {
            e.stopPropagation();
            go(1);
          }}
        >
          <ChevronRight size={26} />
        </button>
      ) : null}
    </div>,
    document.body,
  );
}
