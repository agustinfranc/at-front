<template>
  <GenericTable :columns="columns" :rows="rows.value" />
</template>

<script setup lang="ts">
import { reactive, onMounted, type PropType } from "vue";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import type { ColDef } from "@/components/tables/interfaces/GenericTable/columnDefinitions";

import GenericTable from "./GenericTable.vue";

const props = defineProps({
  columns: {
    type: Array as PropType<ColDef[]>,
    required: true,
  },
  request: {
    type: Function,
    required: true,
  },
});

// We use reactive instead of ref
const rows = reactive({ value: [] });

onMounted(async () => {
  const res = await props.request();

  if (!res.data) return;

  rows.value = res.data;
});
</script>
