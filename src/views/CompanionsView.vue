<template>
  <CompanionsTable />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CompanionsTable from "@/components/tables/CompanionsTable.vue";

export default defineComponent({
  name: "CompanionsView",
  components: {
    CompanionsTable,
  },
});
</script>
