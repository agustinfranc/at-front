<template>
  <v-container class="h-100 d-flex flex-column">
    <TableHeader title="Acompañamientos" route="/assignment" />

    <LazyTable :columns="columns" :request="getAssignments" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AssignmentApi from "@/api/assignment/index";
import LazyTable from "@/components/tables/LazyTable.vue";
import TableHeader from "./extras/TableHeader.vue";

export default defineComponent({
  name: "AssignmentsTable",
  components: {
    LazyTable,
    TableHeader,
  },
  data() {
    return {
      //TODO: tipar data

      getAssignments: AssignmentApi.get,

      columns: [
        {
          field: "Cliente",
        },
        {
          field: "Acompañante",
        },
        {
          field: "Fecha",
        },
        {
          field: "Horas",
        },
      ],
    };
  },
});
</script>
