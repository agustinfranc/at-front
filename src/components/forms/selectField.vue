<template>
  <v-select
    :items="items"
    item-value="id"
    item-text="nombre"
    :rules="[(v) => !!v || 'Ingresar']"
    :label="label"
    required
  ></v-select>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["value", "items", "label"],
  name: "SelectField",
  data() {
    return {
      value: this.value,
      SelectRules: [(v) => !!v || "Completar"],
    };
  },
});
</script>
