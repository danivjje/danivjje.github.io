import { defineStore } from "pinia";
import { ref } from "vue";

export const useNotificationStore = defineStore('modals', () => {
    const notification = ref({
        isShowed: false,
        text: ''
    });

    const useNotification = (text, duration = 1000) => {
        if (text !== notification.value.text) notification.value.text = text;
        notification.value.isShowed = true;
        setTimeout(() => notification.value.isShowed = false, duration);
    }

    const showNotification = (text) => {
        if (text !== notification.value.text) notification.value.text = text;
        notification.value.isShowed = true;
    }

    const hideNotification = (delay = 1000) => setTimeout(() => notification.value.isShowed = false, delay);

    return { notification, useNotification, showNotification, hideNotification };
});