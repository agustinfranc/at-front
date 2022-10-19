<template>
  <GenericTable
    :columns="columns"
    :rows="store.rows.value"
    class="flex-grow-1"
  />
</template>

<script setup lang="ts">
import { onMounted, type PropType } from "vue";
import type { ColDef } from "@/components/tables/interfaces/GenericTable/columnDefinitions";
import GenericTable from "./GenericTable.vue";
import type { FindService } from "@/services/interfaces/FindService";
import { useLazyTableStore } from "@/stores/lazyTable";

const props = defineProps({
  columns: {
    type: Array as PropType<ColDef[]>,
    required: true,
  },
  service: {
    type: Object as PropType<FindService>,
    required: true,
  },
});

const store = useLazyTableStore();

onMounted(async () => {
  const { data, error } = await props.service.find();

  if (error || !data) return;

  store.rows.value = data.data;
});
</script>
