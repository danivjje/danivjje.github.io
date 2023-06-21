<script setup>
import { useI18n } from "vue-i18n";
const i18n = useI18n();

const toggleLocale = () => {
  const locale = i18n.locale.value;
  const newLocale = locale === "en" ? "ru" : "en";
  i18n.locale.value = newLocale;
  localStorage.setItem("locale", newLocale);
};
</script>

<template>
  <main-button @click="toggleLocale">
    {{ $t('header["switch language"]') }}
  </main-button>
</template>

<style scoped lang="scss"></style>
