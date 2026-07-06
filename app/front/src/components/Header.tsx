import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { useContent } from "../hooks/useContent";
import { LangToggle } from "./LangToggle";

const AVATAR_URL = `${import.meta.env.BASE_URL}portrait.png`;

export function Header() {
  const { c } = useContent();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [menuOpen]);

  const nav: { href: string; label: string }[] = [
    { href: "#services", label: c.nav.services },
    { href: "#prices", label: c.nav.prices },
    { href: "#about", label: c.nav.about },
    { href: "#certificates", label: c.nav.certificates },
    { href: "#reviews", label: c.nav.reviews },
    { href: "#faq", label: c.nav.faq },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      ref={headerRef}
      className={`site-header${scrolled ? " is-scrolled" : ""}`}
    >
      <div className="shell">
        <div className="header-shell">
          <div className="header-inner">
            <a className="brand" href="#top" onClick={closeMenu}>
              <span
                className="brand-mark"
                aria-hidden="true"
                style={{ backgroundImage: `url(${AVATAR_URL})` }}
              />
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
            <div className="header-actions">
              <a className="btn btn-accent header-cta" href="#contact">
                {c.sticky.label}
              </a>
              <LangToggle />
              <button
                type="button"
                className="nav-toggle"
                aria-label={c.nav.menu}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen((open) => !open)}
              >
                {menuOpen ? (
                  <X size={20} strokeWidth={2.2} />
                ) : (
                  <Menu size={20} strokeWidth={2.2} />
                )}
              </button>
            </div>
          </div>

          <div
            id="mobile-menu"
            className={`mobile-menu${menuOpen ? " is-open" : ""}`}
          >
            <nav className="mobile-nav" aria-label="Sections">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={closeMenu}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              className="btn btn-accent btn-block"
              href="#contact"
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              {c.sticky.label}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
