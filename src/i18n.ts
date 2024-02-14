import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import sk from "../public/i18n/sk.json";
import en from "../public/i18n/en.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    sk: {
      translation: sk,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
