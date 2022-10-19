<template>
  <ClientsTable id="clients-table" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ClientsTable from "@/components/modules/client/table/ClientsTable.vue";

export default defineComponent({
  name: "ClientsView",

  components: {
    ClientsTable,
  },
});
</script>
