import { useEffect } from "react";
import Lenis from "lenis";

// Offset so the section top lands flush right under the floating header,
// including the gap above the bar. A little breathing room is added.
const getHeaderOffset = () => {
  const bar = document.querySelector<HTMLElement>(".header-inner");
  if (bar) return Math.round(bar.getBoundingClientRect().bottom) + 12;
  return 88;
};

export function useSmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let lenis: Lenis | null = null;
    let frame = 0;

    if (!reduce) {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => 1 - Math.pow(1 - t, 4),
        smoothWheel: true,
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
    }

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return;

      const anchor = (event.target as HTMLElement | null)?.closest("a[href]");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#") || href.length < 2) return;

      const id = href.slice(1);
      const toTop = id === "top";
      const target = toTop ? null : document.getElementById(id);
      if (!toTop && !target) return;

      event.preventDefault();

      const headerOffset = getHeaderOffset();
      // Sections carry a large top padding, so aligning the section box top
      // under the header leaves the heading mid-viewport. Skip most of that
      // padding so the heading starts near the top, just below the header.
      const padTop = target
        ? parseFloat(getComputedStyle(target).paddingTop) || 0
        : 0;

      if (lenis) {
        if (toTop) lenis.scrollTo(0, { duration: 1 });
        else if (target) lenis.scrollTo(target, { offset: padTop - headerOffset });
      } else {
        const top = target
          ? target.getBoundingClientRect().top +
            window.scrollY +
            padTop -
            headerOffset
          : 0;
        window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
      }

      history.replaceState(null, "", toTop ? " " : href);
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      if (frame) cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, []);
}
