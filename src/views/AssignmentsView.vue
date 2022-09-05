<template>
  <AssignmentsTable />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AssignmentsTable from "@/components/tables/AssignmentsTable.vue";

export default defineComponent({
  name: "AssignmentsView",
  components: {
    AssignmentsTable,
  },
});
</script>
