<template>
  <v-text-field
    type="number"
    v-model="dni"
    :rules="dniRules"
    label="DNI"
    required
  ></v-text-field>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["value"],
  name: "DniField",
  data() {
    return {
      dni: this.value,
      dniRules: [(v) => !!v || "Falta el DNI del cliente"],
    };
  },
});
</script>
