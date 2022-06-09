<template>
  <BaseCalendar />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import BaseCalendar from "@/component/BaseCalendar.vue";

export default defineComponent({
  name: "CalendarView",

  components: {
    BaseCalendar,
  },
});
</script>
