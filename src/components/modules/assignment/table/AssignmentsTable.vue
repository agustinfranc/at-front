<template>
  <v-container class="h-100 d-flex flex-column">
    <TableHeader title="Acompañamientos" :route="{ name: 'new-assignment' }" />

    <LazyTable :columns="columns" :service="service"> </LazyTable>
  </v-container>
</template>

<script setup lang="ts">
import AssignmentApi from "@/api/assignment/index";
import LazyTable from "@/components/tables/LazyTable.vue";
import TableHeader from "@/components/tables/extras/TableHeader.vue";
import { AssignmentService } from "@/services/assignmentService";
import type {
  ColDef,
  ValueFormatterParams,
} from "@/components/tables/interfaces/GenericTable/columnDefinitions";

const service = new AssignmentService(new AssignmentApi());

const columns = [
  {
    headerName: "Cliente",
    field: "client.name",
  },
  {
    headerName: "Acompañante",
    field: "companion.name",
  },
  {
    headerName: "Periodico",
    field: "periodic",
    valueFormatter: booleanFormatter,
  },
] as ColDef[];

function booleanFormatter(params: ValueFormatterParams) {
  return params.value ? "Si" : "No";
}
</script>
