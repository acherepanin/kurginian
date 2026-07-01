import { useEffect, useState } from "react";
import { CalendarHeart } from "lucide-react";
import { useContent } from "../hooks/useContent";

export function StickyCta() {
  const { c } = useContent();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById("contact");
      const contactTop = contact
        ? contact.getBoundingClientRect().top
        : Infinity;
      setShow(window.scrollY > 400 && contactTop > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className={`sticky-cta${show ? " is-visible" : ""}`} aria-hidden={!show}>
        <a
          className="btn btn-primary btn-block"
          href="#contact"
          tabIndex={show ? 0 : -1}
        >
          <CalendarHeart size={18} strokeWidth={2} />
          {c.contact.ctaPrimary}
        </a>
      </div>

      <a
        className={`book-fab${show ? " is-visible" : ""}`}
        href="#contact"
        aria-label={c.contact.ctaPrimary}
        title={c.contact.ctaPrimary}
        tabIndex={show ? 0 : -1}
      >
        <CalendarHeart size={24} strokeWidth={1.9} />
      </a>
    </>
  );
}
