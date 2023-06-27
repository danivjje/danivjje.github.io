<script setup>
import ScheduleHeader from "@/components/header/schedule-header.vue";
import ScheduleTable from "@/components/schedule/schedule-table.vue";
import SearchInput from "@/components/schedule/search-input.vue";
import { useScheduleStore } from "@/store/schedule";
import { useLoaderStore } from "@/store/loader";
import { onBeforeMount } from "vue";

const scheduleStore = useScheduleStore();
const loaderStore = useLoaderStore();

onBeforeMount(() => {
  if (!scheduleStore.subjects.length || !scheduleStore.timers.length) {
    loaderStore.startLoading();
    scheduleStore.fetchData();
    loaderStore.finishLoading();
  }
});
</script>

<template>
  <div>
    <schedule-header />
    <schedule-table
      class="table"
      :subjects="scheduleStore.subjects"
      :timers="scheduleStore.timers"
    />
    <search-input :subjects="scheduleStore.subjects" />
  </div>
</template>

<style scoped lang="scss">
.table {
  margin-bottom: 25px;
}
</style>
