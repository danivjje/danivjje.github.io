<script setup>
import { THEMES } from "@/assets/constants/themes";
import { onBeforeMount, reactive } from "vue";
import useStore from "@/composables/use-store";

const themes = reactive(Object.values(THEMES));
const { loaderStore } = useStore();

const fetchThemes = async () => {};

const toggleTheme = (theme) => {
  localStorage.setItem("theme", theme);
};

onBeforeMount(async () => {
  loaderStore.startLoading();
  const currentThemes = await fetchThemes();
  loaderStore.finishLoading();
  if (currentThemes && !Array.isArray(currentThemes)) {
    if (
      JSON.stringify(Object.values(currentThemes)) !== JSON.stringify(themes)
    ) {
      themes = { ...currentThemes };
    }
  }
});
</script>

<template>
  <!-- сделать эту модалку драгндропной -->
  <div class="wrapper">
    <ul class="themes-list">
      <!-- еще можно сделать транзишн групом эту отрисовку и если у пользователя есть другие при фетче они будут плавно добавляться -->
      <!-- отрисовать список тем, потом получать его у пользователя, сверять с базовым и если отличается изменять -->

      <!-- переделать под input radio -->
      <li v-for="theme in themes">
        <div>
          <transition v-if="theme.current" name="checkmark">
            <img class="checkmark-icon" src="/checkmark.svg" alt="+" />
          </transition>
        </div>
        <h3>{{ theme.name }}</h3>
      </li>
    </ul>
    <main-button class="create-button">create theme</main-button>
  </div>
</template>

<style scoped lang="scss">
// поиграться с цветами потому что щас хуета
.wrapper {
  cursor: pointer;
  width: 310px;
  padding: 15px 20px;
  border-radius: 5px 35px;
  background-color: var(--schedule-color);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.themes-list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 55px;
    position: relative;
    margin-bottom: 15px;
    &:not(:nth-child(4n)) {
      margin-right: 15px;
    }
    div {
      border-radius: 5px 15px;
      background-color: var(--body-color);
      width: 55px;
      height: 55px;
      margin-bottom: 2px;
    }
    h3 {
      font-size: 14px;
      font-weight: 400;
    }
  }
}

.create-button {
  background-color: var(--schedule-color);
}

/* .checkmark-enter-active,
.checkmark-leave-active {
  transition-property: opacity, transform;
  transition-duration: 450ms;
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
}

.checkmark-enter-from,
.checkmark-leave-to {
  opacity: 0;
  transform: translateY(-500px);
} */
</style>
