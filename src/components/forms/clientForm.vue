<template>
  <v-container>
    <v-card>
      <v-card-title>Cliente Nuevo</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <Name />

          <DNI />

          <Telephone />

          <SendButton :valid="valid" />
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Name from "./nameField.vue";
import DNI from "./dniField.vue";
import Telephone from "./telephoneField.vue";
import SubmitButton from "./SubmitButton.vue";

export default defineComponent({
  components: {
    Name,
    DNI,
    Telephone,
    SubmitButton,
  },

  data: () => ({
    snackbar: {
      display: false,
      text: "",
      color: "black",
    },
    valid: true,
    form: {
      nombre: "",
      dni: "",
      telefono: "",
    },
  }),
});
</script>
