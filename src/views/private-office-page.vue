<script setup>
import { useCurrentUser } from "vuefire";
import { updateProfile } from "@firebase/auth";
import { useScheduleStore } from "@/store/schedule";
import { useLoaderStore } from "@/store/loader";
import { useNotificationStore } from "@/store/notification";
import { onMounted, ref } from "vue";
import ScheduleTable from "@/components/schedule/schedule-table.vue";
import EditButton from "@/components/ui/edit-button.vue";

const goEdit = ref(false);
const username = ref("");
const goEditUsername = ref(false);
const user = useCurrentUser().value;

const loaderStore = useLoaderStore();
const scheduleStore = useScheduleStore();
const notificationStore = useNotificationStore();

const handleChangeUsername = async () => {
  if (goEditUsername.value) {
    if (username.value) {
      try {
        loaderStore.startLoading();
        await updateProfile(user, { displayName: username.value });
        loaderStore.finishLoading();
        notificationStore.useNotification(
          "your username was successfully updated"
        );
        goEditUsername.value = !goEditUsername.value;
      } catch (err) {
        loaderStore.finishLoading();
        notificationStore.useNotification("unknown error");
        console.log(err);
      }
    } else {
      goEditUsername.value = !goEditUsername.value;
    }
  } else {
    goEditUsername.value = !goEditUsername.value;
  }
};

onMounted(() => {
  if (!scheduleStore.subjects.length || !scheduleStore.timers.length) {
    loaderStore.startLoading();
    scheduleStore.fetchData();
    loaderStore.finishLoading();
  }
});
</script>

<template>
  <div class="page">
    <router-link class="back-link" to="/schedule">
      <transition name="button" mode="out-in">
        <main-button>{{ $t(`['private office']['back button']`) }}</main-button>
      </transition>
    </router-link>
    <div class="username-wrapper">
      <input
        v-if="goEditUsername"
        v-model="username"
        class="username-input"
        type="text"
        placeholder="username"
      />
      <h1 v-else class="title">
        <template v-if="user.displayName">
          {{ $t(`['private office'].title`, { username: user.displayName }) }}
        </template>
        <template v-else>{{
          $t(`['private office']['havent username']`)
        }}</template>
      </h1>

      <edit-button @click="handleChangeUsername" />
    </div>
    <schedule-table
      class="table"
      :goEdit="goEdit"
      :subjects="scheduleStore.subjects"
      :timers="scheduleStore.timers"
    />
    <ul class="list">
      <li>
        <main-button>{{
          $t(`['private office']['templates button']`)
        }}</main-button>
      </li>
      <li>
        <main-button @click="goEdit = !goEdit">{{
          $t(`['private office']['edit button']`)
        }}</main-button>
      </li>
      <li>
        <main-button>{{ $t(`['private office']['save button']`) }}</main-button>
      </li>
      <li>
        <main-button>{{
          $t(`['private office']['save exit button']`)
        }}</main-button>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.table {
  margin-bottom: 25px;
}

.back-link {
  margin-bottom: 15px;
}

.username-wrapper {
  margin-bottom: 25px;
  display: flex;
  align-items: center;
}

.title {
  font-size: 18px;
  font-weight: 500;
  text-align: right;
  margin-right: 5px;
}

.list {
  display: flex;
  align-self: flex-end;
  li {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
}

.username-input {
  margin-right: 10px;
  border-radius: 5px 25px;
  padding: 10px 20px;
  border: none;
  background-color: var(--bg-color);
  &:focus {
    outline: 3px solid var(--focus-color);
  }
}

.button-enter-active,
.button-leave-active {
  transition-property: transform;
  transition-duration: 550ms;
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
}

.button-enter-from,
.button-leave-to {
  transform: translateX(500px);
}
</style>
