import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { findBestAvailableLanguage } from 'react-native-localize';
import esCommon from './locales/es/common.json';
import esLogin from './locales/es/login.json';
import esRegister from './locales/es/register.json';
import enCommon from './locales/en/common.json';
import enLogin from './locales/en/login.json';
import enRegister from './locales/en/register.json';

const languages = ['en', 'es'];

const es = {
    common: esCommon,
    login: esLogin,
    register: esRegister,
};

const en = {
    common: enCommon,
    login: enLogin,
    register: enRegister,
};

void i18n.use(initReactI18next).init({
    resources: { en, es },
    lng: findBestAvailableLanguage(languages)?.languageTag ?? 'es',
    fallbackLng: 'es',
    interpolation: {
        escapeValue: false,
    },
    load: 'currentOnly',
});

export default i18n;
