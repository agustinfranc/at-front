<template>
  <v-text-field
    type="number"
    v-model="telephone"
    label="Teléfono"
    :rules="telephoneRules"
  ></v-text-field>
</template>

<script lang="ts">
export default {
  data: () => ({
    telephone: "",
    telephoneRules: [(v) => !!v || "Falta el teléfono del cliente"],
  }),
};
</script>
