<template>
  <v-combobox
    :items="items"
    item-value="id"
    item-text="nombre"
    :rules="[(v: string) => !!v || 'Ingresar']"
    :label="label"
    :multiple="multiple"
  ></v-combobox>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["value", "items", "label", "multiple"],
  name: "ComboboxField",
});
</script>
