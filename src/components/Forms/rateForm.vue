<template>
  <v-text-field
    type="number"
    v-model="rate"
    label="Tarifa"
    :rules="rateRules"
  ></v-text-field>
</template>

<script lang="ts">
export default {
  data: () => ({
    rate: "",
    rateRules: [(v) => !!v || "Falta la tarifa del acompañador"],
  }),
};
</script>
