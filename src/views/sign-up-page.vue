<script setup>
import { registerUser } from "@/api/firebase";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const usernameValue = ref("");
const emailValue = ref("");
const passwordValue = ref("");
const repeatPasswordValue = ref("");

const handleRegister = async () => {
  const passwordIsRepeat =
    passwordValue.value && passwordValue.value === repeatPasswordValue.value;

  if (passwordIsRepeat) {
    try {
      await registerUser(
        usernameValue.value,
        emailValue.value,
        passwordValue.value
      );
      router.push("/schedule");
    } catch (err) {
      console.log("error: ", err);
    }
  }
};
</script>

<template>
  <div class="page">
    <router-link class="title" to="/sign-in"
      >sign up, or <span>sign in</span></router-link
    >
    <form @submit.prevent="handleRegister" class="form">
      <main-input
        v-model="usernameValue"
        :type="'text'"
        :name="'username'"
        :placeholder="'your username'"
      />
      <main-input
        v-model="emailValue"
        :type="'email'"
        :name="'email'"
        :placeholder="'your email'"
      />
      <main-input
        v-model="passwordValue"
        :type="'password'"
        :name="'password'"
        :placeholder="'your password'"
      />
      <main-input
        v-model="repeatPasswordValue"
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
