import {
  MapPin,
  Mail,
  MessageCircle,
  Phone,
  Send,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { TruncatedText } from "./TruncatedText";
import { useContent } from "../hooks/useContent";

const iconFor: Record<string, LucideIcon> = {
  whatsapp: MessageCircle,
  telegram: Send,
  phone: Phone,
  email: Mail,
  map: MapPin,
};

const sameWindow = new Set(["phone", "email"]);

export function Contact() {
  const { c } = useContent();
  const primaryHref =
    c.contact.channels.find((ch) => ch.kind === "whatsapp")?.href ?? "#";

  return (
    <section className="section contact" id="contact">
      <div className="shell">
        <div className="contact-card">
          <div className="contact-card-bg" aria-hidden="true" />
          <div className="contact-inner">
            <Reveal>
              <span className="eyebrow eyebrow-on-dark">{c.contact.eyebrow}</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="contact-title">{c.contact.heading}</h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="contact-body">{c.contact.body}</p>
            </Reveal>

            <Reveal delay={0.18}>
              <a
                className="btn btn-accent btn-lg"
                href={primaryHref}
                target="_blank"
                rel="noreferrer"
              >
                {c.contact.ctaPrimary}
              </a>
            </Reveal>

            <Reveal delay={0.24}>
              <ul className="channels">
                {c.contact.channels.map((ch) => {
                  const Icon = iconFor[ch.kind] ?? Phone;
                  const external = !sameWindow.has(ch.kind);
                  return (
                    <li key={ch.label}>
                      <a
                        className="channel"
                        href={ch.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noreferrer" : undefined}
                      >
                        <span className="channel-icon">
                          <Icon size={18} strokeWidth={2} />
                        </span>
                        <span className="channel-text">
                          <span className="channel-label">{ch.label}</span>
                          <TruncatedText className="channel-value" text={ch.value} />
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="contact-note">{c.contact.note}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
