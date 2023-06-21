import { ref } from "vue";
import { defineStore } from "pinia";
import { getSubjects, getTimers } from '@/api/requests';

export const useScheduleStore = defineStore('schedule', () => {
    const subjects = ref([]);
    const timers = ref([]);

    const fetchData = () => {
        subjects.value.push(...getSubjects());
        timers.value.push(...getTimers());
    }

    return { subjects, timers, fetchData };
});