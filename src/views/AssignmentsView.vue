<template>
  <AssignmentsTable />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import AssignmentsTable from "@/components/tables/assignmentsTable.vue";

export default defineComponent({
  name: "AssignmentsView",
  components: {
    AssignmentsTable,
  },
});
</script>
