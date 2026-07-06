export interface SiteContent {
  doctor: {
    name: string;
    role: string;
    portraitAlt: string;
  };
  nav: {
    services: string;
    prices: string;
    about: string;
    certificates: string;
    reviews: string;
    faq: string;
    menu: string;
  };
  lang: { switchTo: string; current: string };
  a11y: {
    prevSlide: string;
    nextSlide: string;
    close: string;
    openPhoto: string;
    openCert: string;
    ratingOutOf: string;
  };
  hero: {
    badge: string;
    summary: string;
    ctaPrimary: string;
    ctaSecondary: string;
    chips: string[];
  };
  services: {
    eyebrow: string;
    heading: string;
    note: string;
    items: { title: string; desc: string }[];
  };
  prices: {
    eyebrow: string;
    heading: string;
    note: string;
    items: { title: string; desc: string; price?: string }[];
  };
  about: {
    eyebrow: string;
    heading: string;
    body: string[];
    credentials: { period: string; title: string; place: string }[];
  };
  certificates: {
    eyebrow: string;
    heading: string;
    note: string;
    hint: string;
    items: { title: string; meta?: string; image?: string }[];
  };
  reviews: {
    eyebrow: string;
    heading: string;
    note: string;
    items: {
      name: string;
      meta: string;
      text: string;
      rating: number;
      avatar?: string;
    }[];
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
