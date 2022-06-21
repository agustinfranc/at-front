<template>
  <v-text-field
    type="number"
    v-model="dni"
    :rules="dniRules"
    label="DNI"
  ></v-text-field>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DniField",
  data: () => ({
    dni: "",
    dniRules: [(v) => !!v || "Falta el DNI del cliente"],
  }),
});
</script>
