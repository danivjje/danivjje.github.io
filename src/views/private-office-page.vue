<script setup>
import { useCurrentUser } from "vuefire";
import { useScheduleStore } from "@/store/schedule";
import { useLoaderStore } from "@/store/loader";
import { onMounted, ref } from "vue";
import ScheduleTable from "@/components/schedule/schedule-table.vue";
import EditButton from "@/components/ui/edit-button.vue";

const goEdit = ref(false);
const user = useCurrentUser().value;
const scheduleStore = useScheduleStore();
const loaderStore = useLoaderStore();

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
      <main-button>{{ $t(`['private office']['back button']`) }}</main-button>
    </router-link>
    <div class="title-wrapper">
      <h1 v-if="user.displayName" class="title">
        {{ $t(`['private office'].title`, { username: user.displayName }) }}
      </h1>
      <h1 v-else class="title">
        {{ $t(`['private office']['havent username']`) }}
      </h1>
      <edit-button />
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

.title-wrapper {
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
</style>
