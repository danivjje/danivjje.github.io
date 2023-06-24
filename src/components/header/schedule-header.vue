<script setup>
import LinksList from "@/components/header/links-list.vue";
import SwitchTheme from "@/components/header/switch-theme.vue";
import SwitchLanguage from "@/components/header/switch-language.vue";
import { signOutUser } from "@/api/firebase";
import { useRouter } from "vue-router";

const router = useRouter();

const handleSignOut = async () => {
  try {
    await signOutUser();
    router.push("sign-in");
  } catch (err) {
    console.log();
  }
};
</script>

<template>
  <header class="header">
    <nav>
      <ul class="list">
        <li>
          <switch-language />
        </li>
        <li>
          <switch-theme />
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
