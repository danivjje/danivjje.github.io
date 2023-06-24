<script setup>
import { LINKS } from "@/assets/constants/links";
</script>

<template>
  <li v-for="link in LINKS" :key="link.id">
    <a target="_blank" class="link" :href="link.link">
      <main-button class="button">
        {{ link.title }}
      </main-button>
    </a>
  </li>
</template>
