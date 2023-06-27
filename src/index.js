import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import { VueFire, VueFireAuth } from 'vuefire';
import { firebaseApp } from '@/api/firebase/firebase-init';
import { i18config } from '@/locales';
import router from '@/router';

import App from '@/index.vue';
import MainButton from '@/components/ui/main-button.vue';
import MainInput from '@/components/ui/main-input.vue';

const i18n = createI18n(i18config);
const app = createApp(App);
const pinia = createPinia();

app.component('MainButton', MainButton);
app.component('MainInput', MainInput);

app.use(VueFire, {
    firebaseApp,
    modules: [
        VueFireAuth(),
    ],
});
app.use(router);
app.use(pinia);
app.use(i18n);

app.mount('#app');