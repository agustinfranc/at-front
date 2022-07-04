<template>
  <v-text-field
    type="number"
    v-model="rate"
    label="Tarifa"
    :rules="rateRules"
    required
  ></v-text-field>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["value"],
  name: "RateField",
  data() {
    return {
      rate: this.value,
      rateRules: [(v) => !!v || "Falta la tarifa del acompañador"],
    };
  },
});
</script>
