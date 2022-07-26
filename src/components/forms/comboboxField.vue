<template>
  <v-combobox
    :items="items"
    item-value="id"
    item-text="nombre"
    :rules="[(v) => !!v || 'Ingresar']"
    :label="label"
    required
    :multiple="multiple"
  ></v-combobox>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["value", "items", "label", "multiple"],
  name: "ComboboxField",
  data() {
    return {
      value: this.value,
      ComboboxRules: [(v) => !!v || "Completar"],
    };
  },
});
</script>
