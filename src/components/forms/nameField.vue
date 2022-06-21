<template>
  <v-text-field
    v-model="name"
    :rules="nameRules"
    label="Nombre"
    required
  ></v-text-field>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NameField",
  data: () => ({
    name: "",
    nameRules: [
      (v) => !!v || "Falta el nombre del cliente",
      (v) => (v && v.length <= 50) || "Nombre muy largo",
    ],
  }),
});
</script>
