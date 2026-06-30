import { useTranslation } from "react-i18next";
import { useContent } from "../hooks/useContent";

export function LangToggle() {
  const { i18n } = useTranslation();
  const { c, lang } = useContent();
  const next = lang === "ru" ? "en" : "ru";

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={() => void i18n.changeLanguage(next)}
      aria-label={c.lang.switchTo}
      title={c.lang.switchTo}
    >
      <span className={lang === "ru" ? "lang-on" : "lang-off"}>RU</span>
      <span className="lang-sep" aria-hidden="true">
        /
      </span>
      <span className={lang === "en" ? "lang-on" : "lang-off"}>EN</span>
    </button>
  );
}
