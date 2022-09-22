<template>
  <v-combobox
    :items="items"
    item-value="id"
    item-title="name"
    :label="label"
    :multiple="multiple"
  ></v-combobox>
</template>

<script setup lang="ts">
const props = defineProps({
  itemValue: {
    type: String,
    //default: "id",
  },
  itemText: {
    type: String,
    //default: "name",
  },
  label: String,
  multiple: {
    type: Boolean,
    //default: false,
  },
  items: null,
});
</script>
