<template>
  <v-container>
    <TableHeader title="Acompañamientos" route="assignments/new" />

    <LazyTable :columns="columns" :service="service" />
  </v-container>
</template>

<script setup lang="ts">
import AssignmentApi from "@/api/assignment/index";
import LazyTable from "@/components/tables/LazyTable.vue";
import TableHeader from "./extras/TableHeader.vue";
import { AssignmentService } from "@/services/assignmentService";
import type { ColDef } from "@/components/tables/interfaces/GenericTable/columnDefinitions";

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
  },
] as ColDef[];
</script>
