export const locales = ["zh", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "zh";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const CONTACT_EMAIL = "venslu.pro@gmail.com";
