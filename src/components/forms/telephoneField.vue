<template>
  <v-text-field
    type="number"
    v-model="telephone"
    label="Teléfono"
    :rules="telephoneRules"
  ></v-text-field>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TelephoneField",
  data: () => ({
    telephone: "",
    telephoneRules: [(v) => !!v || "Falta el teléfono del cliente"],
  }),
});
</script>
