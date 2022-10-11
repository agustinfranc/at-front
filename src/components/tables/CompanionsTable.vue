<template>
  <v-container class="h-100 d-flex flex-column">
    <TableHeader title="Acompañantes" :route="{ name: 'new-companion' }" />
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
    headerName: "CUIT",
    field: "cuit",
  },
  {
    headerName: "Fecha Nacimiento",
    field: "birthday",
  },
  {
    headerName: "Teléfono",
    field: "phone",
  },
] as ColDef[];
</script>
