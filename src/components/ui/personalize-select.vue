<script setup>
import { toggleLocale } from "@/helpers/toggle-locale";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

const i18n = useI18n();

const initialState =
  localStorage.getItem("personalize-select-status") === "true";
const isOpen = ref(initialState);
const classesForToggle = computed(() => (!isOpen.value ? "close" : ""));

const handleToggleStatus = () => {
  localStorage.setItem("personalize-select-status", !isOpen.value);
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <ul class="select-list">
    <transition-group>
      <li v-if="isOpen">
        <button @click="toggleLocale(i18n)" class="translate-button"></button>
      </li>
      <li v-if="isOpen">
        <button class="theme-button"></button>
      </li>
      <li>
        <button
          @click="handleToggleStatus"
          :class="`arrow-button ${classesForToggle}`"
        ></button>
      </li>
    </transition-group>
  </ul>
</template>

<style scoped lang="scss">
.select-list {
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 5px;
  left: 5px;
  li {
    &:not(:last-child) {
      margin-bottom: 3px;
    }
    button {
      width: 36px;
      height: 36px;
      border: none;
      border-radius: 5px 20px;
      background-color: var(--bg-color);
      background-repeat: no-repeat;
      background-position: center center;
      transition: transform 100ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
      &:active {
        transform: scale(0.9);
      }
    }
  }
}

.translate-button {
  background-image: url("/translate-icon.svg");
  background-size: 26px 26px;
}

.theme-button {
  background-image: url("/paint-icon.svg");
  background-size: 28px 28px;
}

.arrow-button {
  transition: transform 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  background-image: url("/arrow-icon.svg");
  background-size: 30px 30px;
}

.close {
  transform: rotate(180deg);
}

.v-enter-active,
.v-leave-active {
  transition: all 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
</style>
