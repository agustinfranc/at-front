<template>
  <BaseCalendar />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseCalendar from "@/components/BaseCalendar.vue";

export default defineComponent({
  name: "CalendarView",
  components: {
    BaseCalendar,
  },
});
</script>
