import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

interface TruncatedTextProps {
  text: string;
  className?: string;
}

const MARGIN = 8;

/** Floating bubble that measures itself and clamps inside the viewport. */
function TooltipBubble({ anchor, text }: { anchor: DOMRect; text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const bw = el.offsetWidth;
    const bh = el.offsetHeight;
    const spaceBelow = window.innerHeight - anchor.bottom;
    const spaceAbove = anchor.top;
    const placeBelow = spaceBelow >= bh + MARGIN || spaceBelow >= spaceAbove;

    let left = anchor.left + anchor.width / 2 - bw / 2;
    left = Math.max(MARGIN, Math.min(left, window.innerWidth - bw - MARGIN));

    const top = placeBelow ? anchor.bottom + MARGIN : anchor.top - bh - MARGIN;
    setPos({ left, top: Math.max(MARGIN, top) });
  }, [anchor, text]);

  return (
    <div
      ref={ref}
      className="tip-bubble"
      role="tooltip"
      style={{
        left: pos ? pos.left : -9999,
        top: pos ? pos.top : -9999,
        visibility: pos ? "visible" : "hidden",
      }}
    >
      {text}
    </div>
  );
}

export function TruncatedText({ text, className }: TruncatedTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [truncated, setTruncated] = useState(false);
  const [anchor, setAnchor] = useState<DOMRect | null>(null);

  const check = useCallback(() => {
    const el = ref.current;
    if (el) setTruncated(el.scrollWidth > el.clientWidth + 1);
  }, []);

  useEffect(() => {
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [check, text]);

  const show = useCallback(() => {
    if (!truncated || !ref.current) return;
    setAnchor(ref.current.getBoundingClientRect());
  }, [truncated]);

  const hide = useCallback(() => setAnchor(null), []);

  useEffect(() => {
    if (!anchor) return;
    window.addEventListener("scroll", hide, true);
    return () => window.removeEventListener("scroll", hide, true);
  }, [anchor, hide]);

  return (
    <>
      <span
        ref={ref}
        className={`truncate${className ? ` ${className}` : ""}`}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
        tabIndex={truncated ? 0 : undefined}
      >
        {text}
      </span>
      {anchor
        ? createPortal(<TooltipBubble anchor={anchor} text={text} />, document.body)
        : null}
    </>
  );
}
