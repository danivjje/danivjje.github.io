import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoaderStore = defineStore('loader', () => {
    const isLoading = ref(false);

    const startLoading = () => {
        isLoading.value = true;
    }

    const finishLoading = () => {
        isLoading.value = false;
    }

    return { isLoading, startLoading, finishLoading };
})