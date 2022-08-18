<template>
  <LazyTable :columns="columns" endpoint="/assignments" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import LazyTable from "@/components/tables/lazyTable.vue";
export default defineComponent({
  name: "AssignmentsView",

  components: {
    LazyTable,
  },

  data() {
    return {
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
