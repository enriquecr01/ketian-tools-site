import { ui, defaultLang } from "./ui";

export type Lang = keyof typeof ui;

function isLang(lang: string): lang is Lang {
  return lang in ui;
}

export function useTranslations(lang: string) {
  const resolved = isLang(lang) ? lang : defaultLang;
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[resolved][key] ?? ui[defaultLang][key];
  };
}
