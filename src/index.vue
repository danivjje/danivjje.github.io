<script setup>
import { useNotificationStore } from "@/store/notification";
import { useLoaderStore } from "@/store/loader";
import NotificationModal from "@/components/ui/notification-modal.vue";
import LoadSpinner from "@/components/ui/load-spinner.vue";
import PersonalizeSelect from "@/components/ui/personalize-select.vue";

const loaderStore = useLoaderStore();
const notificationStore = useNotificationStore();
</script>

<template>
  <notification-modal
    :isShowed="notificationStore.notification.isShowed"
    :text="notificationStore.notification.text"
  />
  <load-spinner v-if="loaderStore.isLoading" />
  <personalize-select />

  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss">
@import url("@/assets/scss/global.scss");
@import url("@/assets/scss/theme.scss");

.route-enter-active,
.route-leave-active {
  transition-property: opacity, transform;
  transition-duration: 550ms;
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
  transform: translateY(-500px);
}
</style>
