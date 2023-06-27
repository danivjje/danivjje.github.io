<script setup>
import { ref } from "vue";
import { loginUser } from "@/api/firebase";
import { useRouter } from "vue-router";
import { useNotificationStore } from "@/store/notification";
import { useI18n } from "vue-i18n";
import { useLoaderStore } from "@/store/loader";

const { t } = useI18n();
const router = useRouter();
const emailValue = ref("");
const passwordValue = ref("");

const notificationStore = useNotificationStore();
const loaderStore = useLoaderStore();

const handleLogin = async () => {
  if (emailValue.value && passwordValue.value) {
    try {
      loaderStore.startLoading();
      const response = await loginUser(emailValue.value, passwordValue.value);
      loaderStore.finishLoading();
      if (response) {
        notificationStore.useNotification("successfully authorization!");
        router.push("/schedule");
      }
    } catch (error) {
      loaderStore.finishLoading();
      if (error.message.includes("(auth/too-many-requests)")) {
        return notificationStore.useNotification(
          t(`errors['too many requests']`)
        );
      }

      if (error.message.includes("(auth/wrong-password)")) {
        return notificationStore.useNotification(t(`errors['wrong password']`));
      }

      if (error.message.includes("(auth/user-not-found)")) {
        return notificationStore.useNotification(t(`errors['user not found']`));
      }
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
      <main-button :type="'submit'" class="submit-button">sign in</main-button>
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
