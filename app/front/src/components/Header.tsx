import { useEffect, useState } from "react";
import { useContent } from "../hooks/useContent";
import { LangToggle } from "./LangToggle";

export function Header() {
  const { c } = useContent();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initials = c.doctor.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  const nav: { href: string; label: string }[] = [
    { href: "#services", label: c.nav.services },
    { href: "#skills", label: c.nav.prices },
    { href: "#about", label: c.nav.about },
    { href: "#faq", label: c.nav.faq },
  ];

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="shell header-inner">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            {initials}
          </span>
          <span className="brand-text">
            <span className="brand-name">{c.doctor.name}</span>
            <span className="brand-role">{c.doctor.role}</span>
          </span>
        </a>
        <nav className="site-nav" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
        <LangToggle />
      </div>
    </header>
  );
}
