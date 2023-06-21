<script setup>
const { weekday, weekdayName } = defineProps({
  weekday: {
    type: Array,
    required: true,
  },
  weekdayName: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <tr class="row-wrapper">
    <th class="row-title">{{ $t(`['schedule titles'].${weekdayName}`) }}</th>
    <td v-for="subject in weekday" class="row-item">
      {{ $t(`subjects.${subject}`) }}
    </td>
  </tr>
</template>

<style scoped lang="scss">
.row-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.row-title {
  padding-bottom: 35px;
  font-weight: 500;
}

.row-item {
  min-height: 80px;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid black;
  border-left: 1px solid black;
}
</style>
