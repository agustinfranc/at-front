<template>
  <Assignments />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Assignments from "@/components/tables/assignmentsTable.vue";

export default defineComponent({
  name: "AssignmentsView",

  components: {
    Assignments,
  },
});
</script>
