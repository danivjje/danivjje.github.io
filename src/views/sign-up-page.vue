<script setup>
import { registerUser } from "@/api/firebase";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useNotificationStore } from "@/store/notification";
import { useLoaderStore } from "@/store/loader";

const router = useRouter();
const usernameValue = ref("");
const emailValue = ref("");
const passwordValue = ref("");
const repeatPasswordValue = ref("");

const notificationStore = useNotificationStore();
const loaderStore = useLoaderStore();

const handleRegister = async () => {
  const passwordIsRepeat =
    passwordValue.value && passwordValue.value === repeatPasswordValue.value;

  if (passwordIsRepeat) {
    try {
      // нужно будет сделать проверку, есть ли у кого-то еще такой username, посмотреть какие есть error.message
      // и в зависимости от их значений в кэтче отрисовывать уведомление с ошибкой (как в sign-in)
      loaderStore.startLoading();
      const response = await registerUser(
        usernameValue.value,
        emailValue.value,
        passwordValue.value
      );
      loaderStore.finishLoading();
      if (response) {
        notificationStore.useNotification("successfully registration!");
        router.push("/schedule");
      }
    } catch (err) {
      loaderStore.finishLoading();
      notificationStore.useNotification("something went wrong");
      console.log(err.message);
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
        :required="true"
      />
      <main-input
        v-model="passwordValue"
        :type="'password'"
        :name="'password'"
        :placeholder="'your password'"
        :required="true"
      />
      <main-input
        v-model="repeatPasswordValue"
        :type="'password'"
        :name="'repeat-password'"
        :placeholder="'your password'"
        :required="true"
      />
      <main-button :type="'submit'" class="submit-button">
        sign up
      </main-button>
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
