<script setup></script>

<template>
  <button class="btn"><slot></slot></button>
</template>

<style lang="scss" scoped>
.btn {
  background-color: var(--bg-color);
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 4px 20px;

  transition-property: background-color, transform;
  transition-duration: 180ms;
  transition-timing-function: ease-out;
  &:hover {
    background-color: var(--bg-hover-color);
  }
  &:active {
    transform: scale(0.95);
  }
}
</style>
