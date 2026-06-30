export interface SiteContent {
  doctor: {
    name: string;
    role: string;
    location: string;
    portraitAlt: string;
  };
  nav: { services: string; prices: string; about: string; faq: string };
  lang: { switchTo: string; current: string };
  hero: {
    badge: string;
    summary: string;
    ctaPrimary: string;
    ctaSecondary: string;
    chips: string[];
  };
  stats: { value: string; label: string }[];
  about: {
    eyebrow: string;
    heading: string;
    body: string[];
    credentials: { period: string; title: string; place: string }[];
  };
  services: {
    eyebrow: string;
    heading: string;
    note: string;
    items: { title: string; desc: string }[];
  };
  skills: {
    eyebrow: string;
    heading: string;
    note: string;
    groups: { title: string; items: string[] }[];
  };
  visit: {
    eyebrow: string;
    heading: string;
    steps: { title: string; desc: string }[];
  };
  faq: {
    eyebrow: string;
    heading: string;
    items: { q: string; a: string }[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    body: string;
    ctaPrimary: string;
    note: string;
    channels: { label: string; value: string; href: string; kind: string }[];
  };
  sticky: { label: string };
  footer: { disclaimer: string; rights: string };
}
