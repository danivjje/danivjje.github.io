<script setup></script>

<template>
  <div class="page">
    <router-link class="title" to="/sign-in"
      >sign up, or <span>sign in</span></router-link
    >
    <form @submit.prevent class="form">
      <main-input
        :type="'text'"
        :name="'username'"
        :placeholder="'your username'"
      />
      <main-input :type="'email'" :name="'email'" :placeholder="'your email'" />
      <main-input
        :type="'password'"
        :name="'password'"
        :placeholder="'your password'"
      />
      <main-input
        :type="'password'"
        :name="'repeat-password'"
        :placeholder="'your password'"
      />
      <main-button class="submit-button"> sign up </main-button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.title {
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 15px;
  text-align: center;
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
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.submit-button {
  width: 60%;
}
</style>
