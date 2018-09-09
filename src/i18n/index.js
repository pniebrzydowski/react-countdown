import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const i18n = i18next
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        ns: ['translations'],
        defaultNS: 'translations',
        debug: process.env.NODE_ENV !== 'production',
        react: {
            wait: false,
        }
    });

export default i18n;
