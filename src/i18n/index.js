import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';

const i18n = i18next
    .use(LanguageDetector)
    .use(Backend)
    .init({
        fallbackLng: 'en',
        ns: ['translations'],
        defaultNS: 'translations',
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        },
        debug: process.env.NODE_ENV !== 'production',
        react: {
            wait: true,
        }
    });

export default i18n;
