<template>
  <v-text-field
    type="number"
    v-model="telephone"
    label="Teléfono"
    :rules="telephoneRules"
    @input="(event) => $emit('updateTelephone', event)"
    required
  ></v-text-field>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["value"],
  name: "TelephoneField",
  data() {
    return {
      telephone: this.value,
      telephoneRules: [(v) => !!v || "Falta el teléfono del cliente"],
    };
  },
});
</script>
