<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { messages } from "@/locales";
const { t } = useI18n();

const { subjects } = defineProps({
  subjects: {
    type: Array,
    required: true,
  },
});
const searchValue = ref("");
const hintIsHover = ref(false);
const filteredSubjects = ref([]);

const handleSearchSubjects = () => {
  filteredSubjects.value.length = 0;

  const reverseTranslateSubject = (subject) => {
    const subjectsRu = messages.ru.subjects;
    const subjectKeys = Object.keys(subjectsRu);

    for (let i = 0; i < subjectKeys.length; i++) {
      const key = subjectKeys[i];
      if (subjectsRu[key] === subject) return key;
    }

    return subject;
  };

  const inputValue = searchValue.value.toLowerCase();
  const isCyryllic = new RegExp(/^[\u0400-\u04FF]+$/).test(inputValue);
  const neededValue = isCyryllic
    ? reverseTranslateSubject(inputValue)
    : inputValue;

  for (let i = 0; i < subjects.length; ++i) {
    const weekdayObj = subjects[i];
    const hasValue = weekdayObj.subjects.some((subj) =>
      subj.includes(neededValue)
    );

    if (hasValue) {
      filteredSubjects.value.push({
        day: weekdayObj.day,
        subjects: weekdayObj.subjects.filter((subj) =>
          subj.includes(neededValue)
        ),
      });
    }
  }
};

const onHintMouse = () => (hintIsHover.value = true);
const onHintLeave = () => setTimeout(() => (hintIsHover.value = false), 1000);
</script>

<template>
  <transition name="hint">
    <div v-if="hintIsHover" class="hint-wrapper">
      <span>{{ $t("['search input'].hint") }}</span>
    </div>
  </transition>
  <div>
    <div class="input-wrapper">
      <span class="text-span">{{ $t("['search input'].input") }}</span>
      <input
        v-model="searchValue"
        @input="handleSearchSubjects"
        class="input"
        type="search"
        :placeholder="$t(`['search input'].placeholder`)"
      />

      <button
        class="question-hint"
        @mouseover="onHintMouse"
        @mouseleave="onHintLeave"
      >
        ?
      </button>
    </div>
    <ul v-if="searchValue">
      <li v-for="subject in filteredSubjects" class="item">
        <span class="subject-title">{{
          $t(`["schedule titles"].${subject.day}`)
        }}</span
        >:
        {{
          subject.subjects.map((subg) => t(`subjects["${subg}"]`)).join(", ")
        }}.
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

.input-wrapper {
  display: flex;
  align-items: center;
}

.input {
  border-radius: 5px 25px;
  background-color: var(--bg-color);
  padding: 10px 25px;
  border: none;
  width: 250px;
  margin-right: 10px;
  &:focus {
    outline: 3px solid var(--focus-color);
  }
}

.question-hint {
  opacity: 0.8;
  background-color: var(--bg-color);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  transition-property: background-color, transform;
  transition-duration: 225ms;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: var(--bg-hover-color);
  }
  &:active {
    transform: scale(0.95);
  }
}

.hint-wrapper {
  position: fixed;
  top: 0;
  left: calc(50% - 200px);
  width: 400px;
  padding: 10px 15px;
  text-align: center;
  box-shadow: 0 2px 8px 6px rgba(50, 50, 50, 0.08);
  background-color: var(--bg-color);
  border-radius: 5px 25px;
}

.hint-enter-active,
.hint-leave-active {
  transition: transform 225ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.hint-enter-from,
.hint-leave-to {
  transform: translateY(-150px);
}

.subject-title {
  font-weight: 500;
}
</style>
