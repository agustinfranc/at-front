<template>
  <ClientsTable />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ClientsTable from "@/components/tables/ClientsTable.vue";

export default defineComponent({
  name: "ClientsView",

  components: {
    ClientsTable,
  },
});
</script>
