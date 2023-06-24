import ru from '@/locales/ru.json';
import en from '@/locales/en.json';

export const messages = {
    en, ru
}

export const i18config = {
    locale: localStorage.getItem('locale'),
    legacy: false,
    messages: {
        en: messages.en,
        ru: messages.ru
    }
}