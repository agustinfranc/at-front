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
  itemTitle?: string;
  label?: string;
  multiple?: boolean;
  items: undefined[];
}

const props = withDefaults(defineProps<Props>(), {
  itemValue: "id",
  itemTitle: "name",
  multiple: false,
});
</script>
