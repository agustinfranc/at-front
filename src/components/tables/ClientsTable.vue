<template>
  <LazyTable :columns="columns" :request="getClients" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ClientApi from "@/api/client/index";
import LazyTable from "@/components/tables/LazyTable.vue";

export default defineComponent({
  name: "ClientsTable",
  components: {
    LazyTable,
  },
  data() {
    return {
      //TODO: tipar data

      getClients: ClientApi.get,
      columns: [
        {
          field: "name",
        },
        {
          field: "dni",
        },
        {
          field: "phone",
        },
        {
          field: "rate",
        },
        {
          field: "taxable",
        },
        {
          field: "comments",
        },
      ],
    };
  },
});
</script>
