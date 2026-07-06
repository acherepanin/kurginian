import type { SiteContent } from "./types";

export const en: SiteContent = {
  doctor: {
    name: "Kristina Kurginyan",
    role: "Obstetrician-gynecologist, ultrasound diagnostics",
    portraitAlt: "Kristina Kurginyan, obstetrician-gynecologist, in her consulting room",
  },
  nav: {
    services: "Services",
    prices: "Pricing",
    about: "About",
    certificates: "Certificates",
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
      "Postpartum recovery. Pregnancy planning and management, gynecological concerns. Evidence-based medicine.",
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
        title: "Postpartum recovery. Taping",
        desc: "Recovery after childbirth and taping to support muscles and relieve tension.",
      },
    ],
  },
  prices: {
    eyebrow: "Pricing",
    heading: "Appointment pricing",
    note: "Prices are indicative — the final cost and scope of testing are confirmed at the visit.",
    items: [
      {
        title: "Appointment",
        desc: "Consultation, examination and a testing plan, up to 60 minutes.",
        price: "3,500 ₽",
      },
      {
        title: "Pelvic ultrasound",
        desc: "Ultrasound examination with results explained at the visit.",
        price: "from 2,500 ₽",
      },
      {
        title: "Online consultation",
        desc: "Review of test results and questions online, 30 minutes.",
        price: "from 2,000 ₽",
      },
    ],
  },
  about: {
    eyebrow: "About",
    heading: "A doctor you feel at ease with",
    body: [
      "I am an obstetrician-gynecologist. I support patients at every stage — from planning and pregnancy to women's health questions at any age.",
      "I practice evidence-based medicine: I rely on current clinical guidelines and research rather than outdated routines. I don't order unnecessary tests, supplements, or “preventive” medications without indications — only what is truly needed and backed by data.",
      "I explain the cause of a condition and all the options in detail, so you can make an informed decision about treatment. I create an atmosphere where no question feels awkward to ask.",
    ],
    credentials: [
      {
        period: "2017 — 2023",
        title: "General Medicine (specialist degree)",
        place: "Medical university — add name",
      },
      {
        period: "2023 — 2025",
        title: "Residency in Obstetrics & Gynecology",
        place: "Add institution",
      },
      {
        period: "2025 — now",
        title: "Obstetrician-Gynecologist",
        place: "Add clinic and city",
      },
    ],
  },
  certificates: {
    eyebrow: "Qualifications",
    heading: "Certificates & professional development",
    note: "Education and professional development documents. Tap to open.",
    hint: "Open",
    items: [
      {
        title: "Specialist diploma in Pediatrics",
        meta: "Tver State Medical University, 2023",
        image: "./certificates/cert-1.jpg",
      },
      {
        title: "Residency diploma in Obstetrics & Gynecology",
        meta: "Pirogov NMSC, 2025",
        image: "./certificates/cert-2.jpg",
      },
      {
        title: "Residency: obstetrician-gynecologist",
        meta: "Pirogov NMSC, 2025",
        image: "./certificates/cert-3.jpg",
      },
      {
        title: "Professional retraining: Statistics & digital analysis of medical data",
        meta: "Pirogov University, 2025",
        image: "./certificates/cert-4.jpg",
      },
      {
        title: "Professional retraining diploma",
        meta: "Pirogov University, 2025",
        image: "./certificates/cert-5.jpg",
      },
      {
        title: "Advanced training in Obstetrics & Gynecology",
        meta: "Sechenov University, 144 h., 2025",
        image: "./certificates/cert-6.jpg",
      },
      {
        title: "Certificate: Postpartum recovery",
        meta: "FROM THE TOP, Moscow, 2025",
        image: "./certificates/cert-7.jpg",
      },
    ],
  },
  reviews: {
    eyebrow: "Reviews",
    heading: "What patients say",
    note: "Real reviews from patients about appointments and births.",
    items: [
      {
        name: "Patient",
        meta: "Childbirth",
        text: "These were my first labours, but I have something to compare with. Your golden hands, your calm — when something went wrong, you stayed composed to the end and did everything confidently and quickly. Kristina Sergeevna, huge thanks from our whole family; what you do is your calling. It was the birth of my dreams, thank you!",
        rating: 5,
      },
      {
        name: "Patient",
        meta: "Childbirth",
        text: "Kristina Sergeevna, you are simply a wonderful doctor. People like you are hard to find: attentive, gentle and genuinely kind. Thank you so much for the care, support and professionalism — thanks to you, my labour will stay in my memory with warmth and gratitude.",
        rating: 5,
      },
      {
        name: "Patient",
        meta: "Childbirth",
        text: "I arrived at the maternity ward already dilated, and Kristina Sergeevna came to me in the delivery room. She asked everything very carefully and supported me with every breath. A truly wonderful doctor! Thank you from the bottom of my heart for the support during labour. I'm so grateful.",
        rating: 5,
      },
      {
        name: "Patient",
        meta: "Childbirth",
        text: "In the delivery block I was surrounded with attention and care. During pushing you lose control, and at that moment Kristina Sergeevna's calm voice tells you what to do — and you believe her and do as she says. It was on her \u201cbreathe out\u201d that my son was born. Thank you!",
        rating: 5,
      },
      {
        name: "Patient",
        meta: "Childbirth",
        text: "I want to thank a truly wonderful Doctor — Kristina Kurginyan! I didn't think a maternity hospital could have such polite, sensitive and kind doctors. They helped me so much, I gave birth in a calm and cozy atmosphere!",
        rating: 5,
      },
      {
        name: "Lilya",
        meta: "Postpartum follow-up",
        text: "I want to express my huge gratitude to Kristina Sergeevna — a true professional and a caring person. After discharge I turned to her for advice many times: she always listened carefully and explained everything in plain language, never \u201cby the book\u201d but with attention to every detail. Golden hands and a kind heart. I wholeheartedly recommend her to anyone looking for a real specialist!",
        rating: 5,
      },
      {
        name: "Roman",
        meta: "Childbirth",
        text: "A note of gratitude! I especially want to thank Dr. Kristina Kurginyan. I was in safe hands during and after the birth. Kristina Sergeevna, with you I'd go \u201cthrough fire and water\u201d. I always got a detailed answer to every question — clear, precise and timely. Thank you for the chance to trust a professional!",
        rating: 5,
      },
      {
        name: "Patient",
        meta: "Gynecology visit",
        text: "Kristina Sergeevna, hello! Two months after the birth I saw a gynecologist — they said everything healed perfectly after my tears. I want to say a huge thank you!!! You are the best!",
        rating: 5,
      },
      {
        name: "Patient",
        meta: "Childbirth",
        text: "I arrived in labour, was examined quickly and sent to the delivery room. The doctor was very attentive, the attitude towards the patient was excellent — everything went perfectly. Thank you for the attentiveness and professional approach.",
        rating: 5,
      },
      {
        name: "Patient",
        meta: "Second birth",
        text: "Going into labour a second time was scary, but with Kristina Sergeevna everything was amazing: from the first word she put me at ease and made it clear there was nothing to fear. Even when her shift ended, she stayed and delivered my baby. She made neat stitches that don't even hurt. She came to my room, checked on my health, and is still in touch to this day. Thank you so much for my son!",
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
        a: "Tap “Book an appointment” or message me on Telegram or MAX. We will find a convenient date and time.",
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
        a: "Yes, online we can review test results and questions that do not require an in-person exam.",
      },
    ],
  },
  contact: {
    eyebrow: "Booking",
    heading: "Book your appointment",
    body: "Choose a convenient messenger. I reply personally and find a time that works.",
    ctaPrimary: "Message on MAX",
    note: "To book, message me on Telegram, MAX, or Instagram. I reply personally.",
    channels: [
      {
        label: "Telegram",
        value: "Message on Telegram",
        href: "https://t.me/kris_mdk",
        kind: "telegram",
      },
      {
        label: "MAX",
        value: "Message on MAX",
        href: "https://max.ru/u/f9LHodD0cOJTqP_zeQEmM1wWyD9Yy276Oi5XB_YWrYfbhSioeySsxHW0qmQ",
        kind: "max",
      },
      {
        label: "Instagram",
        value: "Message on Instagram",
        href: "https://www.instagram.com/dr_kurginyan",
        kind: "instagram",
      },
      {
        label: "Clinic address",
        value: "40 Minina St., 1st floor, office 17, Dmitrov",
        href: "https://yandex.ru/maps/?text=Дмитров, улица Минина, 40",
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
