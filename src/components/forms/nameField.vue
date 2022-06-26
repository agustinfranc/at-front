<template>
  <v-text-field
    v-model="name"
    :rules="nameRules"
    label="Nombre"
    required
    @input="(event) => $emit('updateName', event)"
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
        (v) => !!v || "Falta el nombre del cliente",
        (v) => (v && v.length <= 50) || "Nombre muy largo",
      ],
    };
  },
});
</script>
