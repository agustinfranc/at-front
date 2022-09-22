<template>
  <v-combobox
    :items="items"
    :item-title="itemText"
    :item-value="itemValue"
    :label="label"
    :multiple="multiple"
  ></v-combobox>
</template>

<script setup lang="ts">
// TODO: usar la doc que te pase para definir defaults
defineProps({
  itemValue: {
    type: String,
    //default: "id",
  },
  itemText: {
    type: String,
    //default: "name",
  },
  label: {
    type: String,
    required: true,
  },
  multiple: {
    type: Boolean,
    //default: false,
  },
  items: null,
});
</script>
