<template>
  <GenericTable
    :columns="columns"
    :rows="rows.value"
    class="flex-grow-1"
    @showDetails="$emit('showDetails')"
  />
</template>

<script setup lang="ts">
import { reactive, onMounted, type PropType } from "vue";
import type { ColDef } from "@/components/tables/interfaces/GenericTable/columnDefinitions";
import GenericTable from "./GenericTable.vue";

const props = defineProps({
  columns: {
    type: Array as PropType<ColDef[]>,
    required: true,
  },
  service: {
    type: Object,
    required: true,
  },
});

function sendId(id: string) {
  //this.$emit("showDetails", id);
}

// We use reactive instead of ref
const rows = reactive({ value: [] as any[] });

onMounted(async () => {
  const { data, error } = await props.service.find();

  if (error) return;

  rows.value = data;
});
</script>
