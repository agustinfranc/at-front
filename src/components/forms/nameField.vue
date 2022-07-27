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
  props: ["value"],
  name: "NameField",
  data() {
    return {
      name: this.value,
      nameRules: [
        (v) => !!v || "Falta el nombre",
        (v) => (v && v.length <= 50) || "Nombre muy largo",
      ],
    };
  },
});
</script>
