<template>
  <LazyTable :columns="columns" :request="ClientApi.get" />
</template>

<script setup lang="ts">
import ClientApi from "@/api/client/index";
import LazyTable from "@/components/tables/LazyTable.vue";
import type { ColDef } from "@/components/tables/interfaces/GenericTable/columnDefinitions";

const columns = [
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
] as ColDef[];
</script>
