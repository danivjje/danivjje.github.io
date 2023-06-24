<script setup>
import { ref } from "vue";
import { loginUser } from "@/api/firebase";
import { useRouter } from "vue-router";

const router = useRouter();
const emailValue = ref("");
const passwordValue = ref("");

const handleLogin = async () => {
  if (emailValue.value && passwordValue.value) {
    try {
      await loginUser(emailValue.value, passwordValue.value);
      router.push("/schedule");
    } catch (err) {
      console.log("error: ", err);
    }
  }
};
</script>

<template>
  <div class="page">
    <router-link to="/sign-up" class="title"
      >sign in, or <span>sign up</span></router-link
    >
    <form class="form" @submit.prevent="handleLogin">
      <main-input
        v-model="emailValue"
        :name="'email'"
        :type="'email'"
        :placeholder="'your email'"
      />
      <main-input
        v-model="passwordValue"
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
