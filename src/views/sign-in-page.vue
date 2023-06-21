<script setup></script>

<template>
  <div class="page">
    <router-link to="/sign-up" class="title"
      >sign in, or <span>sign up</span></router-link
    >
    <form class="form" @submit.prevent>
      <main-input
        :name="'username'"
        :type="'text'"
        :placeholder="'your username'"
      />
      <main-input
        :name="'password'"
        :type="'password'"
        :placeholder="'your password'"
      />
      <main-button class="submit-button">sign in</main-button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 15px;
  span {
    text-decoration: underline;
  }
}

.page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
}

.submit-button {
  width: 60%;
}
</style>
