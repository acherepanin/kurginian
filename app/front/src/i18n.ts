import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ru } from "./content/ru";
import { en } from "./content/en";

const STORAGE_KEY = "taplink-lang";

const stored =
  typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;

const browser =
  typeof navigator !== "undefined" && navigator.language.startsWith("en")
    ? "en"
    : "ru";

void i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    en: { translation: en },
  },
  lng: stored ?? browser,
  fallbackLng: "ru",
  interpolation: { escapeValue: false },
  returnObjects: true,
});

i18n.on("languageChanged", (lng) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng;
  }
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, lng);
  }
});

if (typeof document !== "undefined") {
  document.documentElement.lang = i18n.language;
}

export default i18n;
