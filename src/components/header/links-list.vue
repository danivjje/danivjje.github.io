<script setup>
import { LINKS } from "@/assets/constants/links";
</script>

<template>
  <li v-for="link in LINKS" :key="link.id">
    <main-button class="button">
      <a target="_blank" class="link" :href="link.link">{{ link.title }}</a>
    </main-button>
  </li>
</template>
