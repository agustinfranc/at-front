<template>
  <LazyTable :columns="columns" @request="getAssignments" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AssignmentsApi from "@/api/assignments/index";
import LazyTable from "@/components/tables/lazyTable.vue";

export default defineComponent({
  name: "AssignmentsTable",
  components: {
    LazyTable,
  },

  data() {
    return {
      getAssignments: AssignmentsApi.get,

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
