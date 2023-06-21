import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import { router } from '@/router';
import { messages } from '@/locales';

import App from '@/index.vue';
import MainButton from '@/components/ui/main-button.vue';
import MainInput from '@/components/ui/main-input.vue';

const i18n = createI18n({
    locale: localStorage.getItem('locale'),
    legacy: false,
    messages: {
        en: messages.en,
        ru: messages.ru
    }
});
const app = createApp(App);
const pinia = createPinia();

app.component('MainButton', MainButton);
app.component('MainInput', MainInput);

app.use(router);
app.use(pinia);
app.use(i18n);

app.mount('#app');