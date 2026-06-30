import { useTranslation } from "react-i18next";
import { ru } from "../content/ru";
import { en } from "../content/en";
import type { SiteContent } from "../content/types";

const dict: Record<string, SiteContent> = { ru, en };

export function useContent(): { c: SiteContent; lang: string } {
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith("en") ? "en" : "ru";
  return { c: dict[lang], lang };
}
