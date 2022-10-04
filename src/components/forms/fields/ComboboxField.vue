<template>
  <v-combobox
    :items="items"
    :item-title="itemTitle"
    :label="label"
    :multiple="multiple"
  ></v-combobox>
</template>

<script setup lang="ts">
export interface Props {
  label: string;
  items: undefined[];
  itemTitle?: string;
  multiple?: boolean;
}

withDefaults(defineProps<Props>(), {
  itemValue: "id",
  itemTitle: "name",
  multiple: false,
});
</script>
