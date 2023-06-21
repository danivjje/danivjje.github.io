<script setup>
import { ref } from "vue";
import { useScheduleStore } from "@/store/schedule";

const searchValue = ref("");
const scheduleStore = useScheduleStore();
const filteredSubjects = ref([]);

const handleSearchSubjects = () => {
  filteredSubjects.value.length = 0;
  for (let i = 0; i < scheduleStore.subjects.length; ++i) {
    const weekdayObj = scheduleStore.subjects[i];
    if (weekdayObj.subjects.some((subj) => subj.includes(searchValue.value))) {
      filteredSubjects.value.push({
        day: weekdayObj.day,
        subjects: weekdayObj.subjects.filter((subj) =>
          subj.includes(searchValue.value)
        ),
      });
    }
  }
};
</script>

<template>
  <div>
    <div>
      <span class="text-span">{{ $t("['search input'].input") }}</span>
      <input
        v-model="searchValue"
        @input="handleSearchSubjects"
        class="input"
        type="search"
        :placeholder="$t(`['search input'].placeholder`)"
      />
    </div>
    <ul v-if="searchValue">
      <li v-for="subject in filteredSubjects" class="item">
        <span class="subject-title">{{
          $t(`["schedule titles"].${subject.day}`)
        }}</span
        >: {{ subject.subjects.join(", ") }}.
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.item {
  &:not(:last-child) {
    margin-bottom: 7px;
  }
}

.text-span {
  margin-right: 10px;
}

.input {
  border-radius: 5px 25px;
  background-color: var(--bg-color);
  padding: 10px 25px;
  border: none;
  width: 250px;
  margin-bottom: 15px;
  &:focus {
    outline: 3px solid var(--focus-color);
  }
}

.subject-title {
  font-weight: 500;
}
</style>
