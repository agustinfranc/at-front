<template>
  <GenericTable :columns="columns" :rows="rows" />
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import GenericTable from "./GenericTable.vue";
import type { ColDef } from "@/components/tables/interfaces/GenericTable/ColumnDefinitions";

export default defineComponent({
  name: "LazyTable",
  props: {
    columns: {
      type: Array as PropType<ColDef[]>,
      required: true,
    },
    request: {
      type: Promise,
      required: true,
    },
  },
  components: {
    GenericTable,
  },

  data() {
    return {
      rows: [],
    };
  },

  async mounted() {
    const res = await this.request();

    if (!res.data) return;

    this.rows = res.data;
  },
});
</script>
