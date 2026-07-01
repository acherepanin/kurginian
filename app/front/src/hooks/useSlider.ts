import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Horizontal scroll-snap slider logic shared by Services, Reviews and Certificates.
 * Tracks start/end edges and the active card index, and exposes arrow navigation.
 */
export function useSlider<T extends HTMLElement = HTMLUListElement>(
  cardSelector = ".slide-card",
) {
  const trackRef = useRef<T>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [active, setActive] = useState(0);

  const measureStep = useCallback(() => {
    const el = trackRef.current;
    if (!el) return 0;
    const cards = el.querySelectorAll<HTMLElement>(cardSelector);
    if (cards.length >= 2) return cards[1].offsetLeft - cards[0].offsetLeft;
    if (cards.length === 1) return cards[0].offsetWidth;
    return el.clientWidth;
  }, [cardSelector]);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
    const step = measureStep();
    setActive(step ? Math.round(el.scrollLeft / step) : 0);
  }, [measureStep]);

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
    const step = measureStep() || el.clientWidth * 0.8;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return { trackRef, atStart, atEnd, active, scrollByCard };
}
