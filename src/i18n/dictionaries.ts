import 'server-only';
import type { Locale } from './config';
import { i18n } from './config';

const dictionaries = {
    uz: () => import('@/dictionaries/uz.json').then((module) => module.default),
    ru: () => import('@/dictionaries/ru.json').then((module) => module.default),
    en: () => import('@/dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
    return dictionaries[locale] ? dictionaries[locale]() : dictionaries[i18n.defaultLocale as Locale]();
};
