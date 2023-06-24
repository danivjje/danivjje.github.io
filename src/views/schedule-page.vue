<script setup>
import ScheduleHeader from "@/components/header/schedule-header.vue";
import ScheduleTable from "@/components/schedule/schedule-table.vue";
import SearchInput from "@/components/schedule/search-input.vue";
import { useScheduleStore } from "@/store/schedule";
import { onBeforeMount } from "vue";

const scheduleStore = useScheduleStore();

onBeforeMount(() => {
  if (!scheduleStore.subjects.length || !scheduleStore.timers.length) {
    scheduleStore.fetchData();
  }
});
</script>

<template>
  <schedule-header />
  <schedule-table
    :subjects="scheduleStore.subjects"
    :timers="scheduleStore.timers"
  />
  <search-input :subjects="scheduleStore.subjects" />
</template>
<style></style>
