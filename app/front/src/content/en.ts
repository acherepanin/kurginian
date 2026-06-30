import type { SiteContent } from "./types";

export const en: SiteContent = {
  doctor: {
    name: "Kristina Kurginyan",
    role: "Pediatrician",
    location: "Moscow",
    portraitAlt: "Kristina Kurginyan, pediatrician, in her consulting room",
  },
  nav: {
    services: "Care",
    prices: "Skills",
    about: "About",
    faq: "FAQ",
  },
  lang: { switchTo: "Переключить на русский", current: "EN" },
  hero: {
    badge: "By appointment",
    summary:
      "I care for children from birth to 18: preventive check-ups, help when they are ill, vaccination and follow-up. I calmly explain to parents what is happening and what to do.",
    ctaPrimary: "Book an appointment",
    ctaSecondary: "How I can help",
    chips: ["Primary-care pediatrician", "Children 0–18", "Moscow"],
  },
  stats: [
    { value: "0–18", label: "years, children of any age" },
    { value: "since 2023", label: "in pediatric practice" },
    { value: "3", label: "clinics in professional experience" },
    { value: "TSMU", label: "specialized medical degree" },
  ],
  about: {
    eyebrow: "About",
    heading: "A children's doctor parents trust",
    body: [
      "I am a pediatrician in Moscow. I work with children of all ages in city clinics and a medical center: primary-care visits, development monitoring, and help with acute and chronic conditions.",
      "I graduated from the pediatric faculty of Tver State Medical University. I am attentive to every child and create a calm, trusting atmosphere for children and parents. I keep learning through conferences and professional courses.",
    ],
    credentials: [
      {
        period: "2023",
        title: "Pediatric faculty",
        place: "Tver State Medical University",
      },
      {
        period: "2023–2024",
        title: "Pediatrician",
        place: "Gigeya Medical Center",
      },
      {
        period: "2023–2024",
        title: "Primary-care pediatrician",
        place: "Andreevskaya City Clinic, Moscow region",
      },
      {
        period: "2024 — now",
        title: "Primary-care pediatrician",
        place: "Children's City Clinic No. 52, Moscow",
      },
    ],
  },
  services: {
    eyebrow: "Focus areas",
    heading: "How I can help",
    note: "Care for children from birth to 18.",
    items: [
      {
        title: "Preventive check-up",
        desc: "Routine examination and age-based development assessment, with care advice.",
      },
      {
        title: "Visit when ill",
        desc: "Diagnosis and treatment of respiratory infections and acute conditions in children.",
      },
      {
        title: "Care from birth",
        desc: "Infant follow-up, monitoring of growth, development and nutrition in the first year.",
      },
      {
        title: "Vaccination",
        desc: "Building and guiding an individual immunization schedule.",
      },
      {
        title: "Certificates & forms",
        desc: "Medical certificates for daycare, school, sports clubs and the swimming pool.",
      },
      {
        title: "Parent consultation",
        desc: "Reviewing test results, answering questions on health, care and daily routine.",
      },
    ],
  },
  skills: {
    eyebrow: "Strengths",
    heading: "Skills & qualities",
    note: "What I bring to the visit and to working with the family.",
    groups: [
      {
        title: "Professional skills",
        items: [
          "Clinical diagnosis and treatment",
          "Care for children of all ages",
          "Immunization",
          "Decisions in non-standard situations",
          "Working with children and parents",
          "Continuous professional development",
        ],
      },
      {
        title: "Personal qualities",
        items: [
          "Responsibility",
          "Attentiveness",
          "Love for children",
          "Communication",
          "Empathy",
          "Determination",
        ],
      },
    ],
  },
  visit: {
    eyebrow: "The visit",
    heading: "How a visit goes",
    steps: [
      {
        title: "Talk",
        desc: "We discuss concerns, history and the child's development. No rush, no judgment.",
      },
      {
        title: "Examination",
        desc: "I examine the child and assess their condition for their age.",
      },
      {
        title: "Plan",
        desc: "I explain the diagnosis and give a clear plan for treatment and follow-up.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Frequent questions",
    items: [
      {
        q: "How do I book an appointment?",
        a: "Tap “Book an appointment”, message me on WhatsApp or call. We will find a convenient date and time.",
      },
      {
        q: "From what age do you see children?",
        a: "I care for children from birth up to 18 years old.",
      },
      {
        q: "What should I bring to the visit?",
        a: "The medical record or vaccination certificate and any previous test results, if you have them.",
      },
      {
        q: "Do you help with fever and respiratory infections?",
        a: "Yes, I diagnose and treat acute conditions in children.",
      },
      {
        q: "Do you do preventive check-ups?",
        a: "Yes, age-based routine examinations with growth and development assessment.",
      },
    ],
  },
  contact: {
    eyebrow: "Booking",
    heading: "Book your appointment",
    body: "Choose the channel that suits you. I reply personally and find a time that works.",
    ctaPrimary: "Book an appointment",
    note: "To book, message me on WhatsApp or call. I reply personally.",
    channels: [
      {
        label: "WhatsApp",
        value: "+7 999 379-85-65",
        href: "https://wa.me/79993798565",
        kind: "whatsapp",
      },
      {
        label: "Phone",
        value: "+7 999 379-85-65",
        href: "tel:+79993798565",
        kind: "phone",
      },
      {
        label: "Email",
        value: "kriskurginyan@bk.ru",
        href: "mailto:kriskurginyan@bk.ru",
        kind: "email",
      },
      {
        label: "City",
        value: "Moscow",
        href: "https://maps.google.com/?q=Moscow",
        kind: "map",
      },
    ],
  },
  sticky: { label: "Book" },
  footer: {
    disclaimer:
      "Information on this page is for reference only and is not a public offer or medical advice.",
    rights: "All rights reserved.",
  },
};
