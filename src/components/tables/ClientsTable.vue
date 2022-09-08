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
          headerName: "Nombre",
          field: "name",
        },
        {
          headerName: "Dni",
          field: "dni",
        },
        {
          headerName: "Telefono",
          field: "phone",
        },
        {
          headerName: "Tarifa",
          field: "rate",
        },
        {
          headerName: "Máximo Facturable",
          field: "taxable",
        },
        {
          headerName: "Comentarios",
          field: "comments",
        },
      ],
    };
  },
});
</script>
