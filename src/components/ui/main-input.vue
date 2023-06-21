<script setup>
import { computed, ref } from "vue";

const passwordWrapper = ref(null);
const { type } = defineProps({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
});

const isVisible = ref(true);
const isFocus = ref(false);
const isPassword = type === "password";
const focusClass = computed(() => (isFocus.value ? "w-focus" : ""));

const toggleVisible = () => (isVisible.value = !isVisible.value);
</script>

<template>
  <div
    v-if="isPassword"
    ref="passwordWrapper"
    :class="'password-wrapper ' + focusClass"
  >
    <input
      class="input password-input"
      :type="isVisible ? 'password' : 'text'"
      :name="name"
      :placeholder="placeholder"
      @focus="isFocus = true"
      @blur="isFocus = false"
    />
    <button @click="toggleVisible" class="toggle-password-button">
      <transition name="visible">
        <svg
          v-if="isVisible"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 visible-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 visible-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
          />
        </svg>
      </transition>
    </button>
  </div>
  <input
    v-else
    class="input default-input"
    :type="type"
    :name="name"
    :placeholder="placeholder"
  />
</template>

<style scoped lang="scss">
.password-wrapper {
  width: 100%;
  margin-bottom: 15px;
  border-radius: 5px 20px;
  background-color: var(--bg-color);
  padding-right: 46px;
  position: relative;
}

.w-focus {
  outline: 3px solid var(--focus-color);
}

.input {
  width: 100%;
  border: none;
}

.default-input {
  padding: 10px 15px;
  background-color: var(--bg-color);
  margin-bottom: 15px;
  border-radius: 5px 20px;
  &:focus {
    outline: 3px solid var(--focus-color);
  }
}

.password-input {
  background: transparent;
  padding: 10px 0 10px 15px;
  &:focus {
    outline: none;
  }
}

.toggle-password-button {
  position: absolute;
  right: 10px;
  top: 5px;
  border: none;
  width: 26px;
  height: 26px;
  flex-shrink: 0;
  background: transparent;
  background-size: cover;
  svg {
    position: absolute;
    inset: 0;
  }
}

.visible-enter-active,
.visible-leave-active {
  transition: opacity 225ms ease-in-out;
}

.visible-enter-from,
.visible-leave-to {
  opacity: 0;
}
</style>
