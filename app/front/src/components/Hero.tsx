import { motion, useReducedMotion } from "framer-motion";
import { CalendarHeart, ChevronRight } from "lucide-react";
import { useContent } from "../hooks/useContent";
import { Portrait } from "./Portrait";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const PORTRAIT_SRC = "/portrait.png";

export function Hero() {
  const { c } = useContent();
  const reduce = useReducedMotion();

  const initials = c.doctor.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        };

  return (
    <section className="hero" id="top">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <motion.span className="hero-badge" {...rise(0.05)}>
            <CalendarHeart size={15} strokeWidth={2} />
            {c.hero.badge}
          </motion.span>

          <motion.h1 className="hero-title" {...rise(0.12)}>
            {c.doctor.name}
          </motion.h1>

          <motion.p className="hero-role" {...rise(0.2)}>
            {c.doctor.role}
          </motion.p>

          <motion.p className="hero-summary" {...rise(0.28)}>
            {c.hero.summary}
          </motion.p>

          <motion.div className="hero-actions" {...rise(0.36)}>
            <a className="btn btn-primary" href="#contact">
              {c.hero.ctaPrimary}
              <ChevronRight size={18} strokeWidth={2.2} />
            </a>
            <a className="btn btn-ghost" href="#services">
              {c.hero.ctaSecondary}
            </a>
          </motion.div>

          <motion.ul className="hero-chips" {...rise(0.46)}>
            {c.hero.chips.map((chip) => (
              <li key={chip} className="chip">
                {chip}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="hero-portrait"
          initial={reduce ? undefined : { opacity: 0, scale: 1.04 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <span className="hero-portrait-frame" aria-hidden="true" />
          <figure className="hero-figure">
            <Portrait
              src={PORTRAIT_SRC}
              alt={c.doctor.portraitAlt}
              initials={initials}
            />
            <figcaption className="hero-figcap">
              <span className="hero-figcap-dot" aria-hidden="true" />
              {c.doctor.role}
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
