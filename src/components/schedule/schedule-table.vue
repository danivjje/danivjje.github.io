<script setup>
import TableRow from "@/components/schedule/table-row.vue";

const { subjects, timers } = defineProps({
  subjects: {
    type: Array,
    required: true,
  },
  timers: {
    type: Array,
    required: true,
  },
  goEdit: Boolean,
});
</script>

<template>
  <table class="table">
    <tr class="date-row">
      <th class="date-title">{{ $t('["schedule titles"].time') }}</th>
      <th v-for="timer in timers" class="date-item">
        <input
          v-if="goEdit"
          class="edit-input"
          type="text"
          :value="timer"
          :placeholder="timer"
        />
        <template v-else>{{ timer }}</template>
      </th>
    </tr>
    <table-row
      v-for="weekday in subjects"
      :goEdit="goEdit"
      :weekday="weekday.subjects"
      :weekdayName="weekday.day"
    />
  </table>
</template>

<style scoped lang="scss">
.table {
  width: 100%;
  display: flex;
  background-color: var(--schedule-color);
  border-radius: 5px 45px;
  padding-top: 35px;
}

.edit-input {
  width: 100%;
  padding: 10px 20px;
  border-radius: 5px 25px;
  border: none;
  background-color: var(--bg-color);
  &:focus {
    outline: 3px solid var(--focus-color);
  }
}

.date-row {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 200px;
}

.date-title {
  padding-bottom: 35px;
  font-weight: 500;
}

.date-item {
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border-top: 2px solid black;
  font-weight: 500;
}
</style>
