<script setup>
import LinksList from "@/components/header/links-list.vue";
import ChangeTHemeModal from "@/components/ui/change-theme-modal.vue";
import { signOutUser } from "@/api/firebase";
import { useRouter } from "vue-router";
import { useNotificationStore } from "@/store/notification";
import { toggleLocale } from "@/helpers/toggle-locale";
import { useI18n } from "vue-i18n";

const i18n = useI18n();
const router = useRouter();
const notificationStore = useNotificationStore();

const handleSignOut = async () => {
  try {
    await signOutUser();
    notificationStore.useNotification("successfully log out");
    router.push("sign-in");
  } catch (err) {
    notificationStore.useNotification("error, press f5 and try again please");
    console.log("authorization error: ", err);
  }
};
</script>

<template>
  <header class="header">
    <nav>
      <ul class="list">
        <li>
          <main-button @click="toggleLocale(i18n)">
            {{ $t('header["switch language"]') }}
          </main-button>
        </li>
        <li>
          <main-button> {{ $t('header["switch theme"]') }} </main-button>
        </li>
        <links-list />
        <li>
          <router-link to="/private-office">
            <main-button> {{ $t('header["private office"]') }} </main-button>
          </router-link>
        </li>
        <li>
          <main-button @click="handleSignOut">
            {{ $t('header["log out"]') }}
          </main-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  margin-bottom: 35px;
}

.list {
  display: flex;
  justify-content: space-between;
}
</style>
