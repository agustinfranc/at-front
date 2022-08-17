<template>
  <Assignments :columnDefinitions="columnDefs.value" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Assignments from "@/components/tables/genericTable.vue";
import { reactive } from "vue"; //el onMounted va acá para la API

export default defineComponent({
  name: "AssignmentsView",

  components: {
    Assignments,
  },
  setup() {
    const rowData = reactive({}); // Set rowData to Array of Objects, one Object per Row

    // Each Column Definition results in one Column.
    const columnDefs = reactive({
      value: [
        { field: "Cliente" },
        { field: "Acompañador" },
        { field: "Fecha" },
        { field: "Horas" },
      ],
    });

    return {
      columnDefs,
      rowData,
    };
  },
});
</script>
