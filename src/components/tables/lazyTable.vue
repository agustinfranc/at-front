<template>
  <GenericTable :columns="columns" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GenericTable from "./genericTable.vue";

export default defineComponent({
  props: ["columns", "endpoint"],
  name: "LazyTable",

  newColumns: {},

  components: {
    GenericTable,
  },
});
</script>
