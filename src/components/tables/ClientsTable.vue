<template>
  <LazyTable :columns="columns" @request="getClients" />
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
      clients: [],
      columns: [
        {
          field: "Nombre",
        },
        {
          field: "DNI",
        },
        {
          field: "Telefono",
        },
        {
          field: "Precio",
        },
        {
          field: "Máximo Facturable",
        },
        {
          field: "Comentarios",
        },
      ],
    };
  },
});
</script>
