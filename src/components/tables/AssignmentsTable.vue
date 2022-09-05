<template>
  <LazyTable :columns="columns" @request="getAssignments" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AssignmentApi from "@/api/assignment/index";
import LazyTable from "@/components/tables/LazyTable.vue";

export default defineComponent({
  name: "AssignmentsTable",
  components: {
    LazyTable,
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
