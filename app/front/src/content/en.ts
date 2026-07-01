import type { SiteContent } from "./types";

export const en: SiteContent = {
  doctor: {
    name: "Kristina Kurginyan",
    role: "Obstetrician-Gynecologist",
    portraitAlt: "Kristina Kurginyan, obstetrician-gynecologist, in her consulting room",
  },
  nav: {
    services: "Services",
    prices: "Pricing",
    about: "About",
    reviews: "Reviews",
    faq: "FAQ",
    menu: "Menu",
  },
  lang: { switchTo: "Переключить на русский", current: "EN" },
  a11y: {
    prevSlide: "Previous",
    nextSlide: "Next",
    close: "Close",
    openPhoto: "Open photo",
    openCert: "Open certificate",
    ratingOutOf: "out of 5",
  },
  hero: {
    badge: "By appointment",
    summary:
      "I care for women's health at every stage: routine check-ups, pregnancy management, gynecological concerns and planning. I explain calmly and clearly — without fear or unnecessary prescriptions.",
    ctaPrimary: "Book an appointment",
    ctaSecondary: "Services & pricing",
    chips: ["Obstetrician-Gynecologist", "Pregnancy management", "Ultrasound on-site"],
  },
  services: {
    eyebrow: "Focus areas",
    heading: "How I can help",
    note: "Full-spectrum women's health care — from planning to follow-up.",
    items: [
      {
        title: "Gynecological visit",
        desc: "Examination, consultation and an individual plan for testing and treatment.",
      },
      {
        title: "Pregnancy management",
        desc: "Support at every stage: monitoring, tests and calm preparation for birth.",
      },
      {
        title: "Pelvic ultrasound",
        desc: "Ultrasound diagnostics during the visit with a clear explanation of the results.",
      },
      {
        title: "Pregnancy planning",
        desc: "Preconception preparation, couple assessment and correction of any findings.",
      },
      {
        title: "Infections & inflammation",
        desc: "Diagnosis and treatment of infectious and inflammatory conditions by modern protocols.",
      },
      {
        title: "Menopause & hormones",
        desc: "Help with hormonal imbalances and support through the menopause transition.",
      },
    ],
  },
  prices: {
    eyebrow: "Pricing",
    heading: "Appointment pricing",
    note: "Prices are indicative — the final cost and scope of testing are confirmed at the visit.",
    items: [
      {
        title: "Initial visit",
        desc: "Consultation, examination and a testing plan, up to 60 minutes.",
        price: "from 3,500 ₽",
      },
      {
        title: "Follow-up visit",
        desc: "Treatment review and adjustment of prescriptions.",
        price: "from 2,500 ₽",
      },
      {
        title: "Pelvic ultrasound",
        desc: "Ultrasound examination with results explained at the visit.",
        price: "from 2,500 ₽",
      },
      {
        title: "Pregnancy management",
        desc: "Comprehensive support, price per trimester.",
        price: "on request",
      },
      {
        title: "Online consultation",
        desc: "Review of test results and questions over video, 30 minutes.",
        price: "from 2,000 ₽",
      },
    ],
  },
  about: {
    eyebrow: "About",
    heading: "A doctor you feel at ease with",
    body: [
      "I am an obstetrician-gynecologist. I support patients at every stage — from planning and pregnancy to women's health questions at any age.",
      "I work gently and by evidence-based medicine: I explain the cause in detail and prescribe only what is truly needed. I create an atmosphere where no question feels awkward to ask.",
    ],
    credentials: [
      {
        period: "2014",
        title: "General Medicine (specialist degree)",
        place: "Medical university — add name",
      },
      {
        period: "2016",
        title: "Residency in Obstetrics & Gynecology",
        place: "Add institution",
      },
      {
        period: "2016 — now",
        title: "Obstetrician-Gynecologist",
        place: "Add clinic and city",
      },
    ],
  },
  certificates: {
    eyebrow: "Qualifications",
    heading: "Certificates & professional development",
    note: "Sample list. Replace with real certificates. You can attach a photo of the document (image field) — it opens on click.",
    hint: "Open",
    items: [
      { title: "Board certificate in Obstetrics & Gynecology", meta: "Add year" },
      { title: "Ultrasound diagnostics in obstetrics and gynecology", meta: "Add year" },
      { title: "Cervical pathology and colposcopy", meta: "Add year" },
      { title: "Aesthetic and intimate gynecology", meta: "Add year" },
      { title: "Management of physiological pregnancy", meta: "Add year" },
      { title: "Professional development course", meta: "Add topic and year" },
    ],
  },
  reviews: {
    eyebrow: "Reviews",
    heading: "What patients say",
    note: "These are placeholder examples. Replace them with real patient reviews (e.g. from review platforms or messenger, with consent). You can add a patient photo (avatar field).",
    items: [
      {
        name: "Patient name",
        meta: "Initial visit",
        text: "Sample review: she explained everything in detail and prescribed nothing unnecessary. I left the visit calm for the first time. Replace this text with a real review.",
        rating: 5,
      },
      {
        name: "Patient name",
        meta: "Pregnancy management",
        text: "Sample review: she guided my whole pregnancy, always available and to the point. Replace this text with a real review.",
        rating: 5,
      },
      {
        name: "Patient name",
        meta: "Ultrasound & consultation",
        text: "Sample review: an attentive doctor — you can feel the care and professionalism. Replace this text with a real review.",
        rating: 5,
      },
      {
        name: "Patient name",
        meta: "Pregnancy planning",
        text: "Sample review: she helped me prepare calmly and laid everything out clearly. Replace this text with a real review.",
        rating: 5,
      },
      {
        name: "Patient name",
        meta: "Follow-up visit",
        text: "Sample review: the treatment was spot on, results were visible within a couple of weeks. Replace this text with a real review.",
        rating: 5,
      },
      {
        name: "Patient name",
        meta: "Online consultation",
        text: "Sample review: she reviewed my tests online and answered every question without rushing. Replace this text with a real review.",
        rating: 5,
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
        q: "What should I bring to the visit?",
        a: "Previous test and exam results, medical records and a list of current medications, if you have them.",
      },
      {
        q: "Do you manage pregnancy?",
        a: "Yes, I support pregnancy at every stage — from planning to preparing for birth.",
      },
      {
        q: "Do you do ultrasound during the visit?",
        a: "Yes, when needed I perform a pelvic ultrasound during the consultation and explain the result.",
      },
      {
        q: "Is an online consultation possible?",
        a: "Yes, over video we can review test results and questions that do not require an in-person exam.",
      },
    ],
  },
  contact: {
    eyebrow: "Booking",
    heading: "Book your appointment",
    body: "Choose a convenient messenger or call. I reply personally and find a time that works.",
    ctaPrimary: "Message on WhatsApp",
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
        label: "Clinic address",
        value: "15 Tverskaya St., office 204, Moscow",
        href: "https://yandex.ru/maps/?text=Moscow, Tverskaya street, 15",
        kind: "map",
      },
    ],
  },
  sticky: { label: "Book" },
  footer: {
    disclaimer:
      "Information on this page is for reference only and is not a public offer or medical advice. There are contraindications; a specialist consultation is required.",
    rights: "All rights reserved.",
  },
};
