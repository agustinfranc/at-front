<template>
  <LazyTable :columns="columns" :service="service"></LazyTable>
</template>
<script setup lang="ts">

import LazyTable from "@/components/tables/LazyTable.vue";
import type { ColDef } from "@/components/tables/interfaces/GenericTable/columnDefinitions";
import { CompanionService } from "@/services/companionService";
import CompanionApi from "@/api/companion";

//lo puse para que no rompa y me deje probar
const service = new CompanionService(new CompanionApi());

const columns = [
  {
    headerName: "Acompañante",
    field: "name",
  },
  {
    headerName: "A pagar",
    field: "debt",
  },
] as ColDef[];
</script>
