<template>
  <LazyTable :columns="columns" :service="service"></LazyTable>
</template>
<script setup lang="ts">

import LazyTable from "@/components/tables/LazyTable.vue";
import type { ColDef } from "@/components/tables/interfaces/GenericTable/columnDefinitions";
import { ClientService } from "@/services/clientService";
import ClientApi from "@/api/client";

//lo puse para que no rompa y me deje probar
const service = new ClientService(new ClientApi());

const columns = [
  {
    headerName: "Cliente",
    field: "name",
  },
  {
    headerName: "Deuda",
    field: "debt",
  },
] as ColDef[];
</script>
