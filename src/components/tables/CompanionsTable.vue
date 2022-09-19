<template>
  <v-container>
    <TableHeader title="Acompañantes" route="/companion" />
    <LazyTable :columns="columns" :service="service" />
  </v-container>
</template>

<script setup lang="ts">
import CompanionApi from "@/api/companion/index";
import LazyTable from "@/components/tables/LazyTable.vue";
import type { ColDef } from "@/components/tables/interfaces/GenericTable/columnDefinitions";
import TableHeader from "./extras/TableHeader.vue";
import { CompanionService } from "@/services/companionService";

const service = new CompanionService(new CompanionApi());

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
    headerName: "Máximo Facturable",
    field: "taxable",
  },
  {
    headerName: "Extras",
    field: "extras",
  },
] as ColDef[];
</script>
