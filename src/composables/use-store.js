import { useLoaderStore } from '@/store/loader';
import { useNotificationStore } from '@/store/notification';
import { useScheduleStore } from '@/store/schedule';

export default function useStore() {
    const loaderStore = useLoaderStore();
    const notificationStore = useNotificationStore();
    const scheduleStore = useScheduleStore();

    return {
        loaderStore, notificationStore, scheduleStore
    };
}