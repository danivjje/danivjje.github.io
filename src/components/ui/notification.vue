<script setup>
const { text } = defineProps({
  text: {
    type: String,
    required: true,
  },
  isShowed: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <transition name="notification">
    <div v-if="isShowed" class="notification-wrapper">
      <span>{{ text }}</span>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.notification-wrapper {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: calc(50% - 200px);
  width: 400px;
  padding: 10px 15px;
  text-align: center;
  box-shadow: 0 2px 8px 6px rgba(50, 50, 50, 0.08);
  background-color: var(--bg-color);
  border-radius: 5px 25px;
}

.notification-enter-active,
.notification-leave-active {
  transition: transform 225ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.notification-enter-from,
.notification-leave-to {
  transform: translateY(-150px);
}
</style>
