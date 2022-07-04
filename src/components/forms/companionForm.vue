<template>
  <v-container>
    <v-card>
      <v-card-title>Acompañador Nuevo</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <Name v-model="form.name" />

          <DNI v-model="form.dni" />

          <Telephone v-model="form.telephone" />

          <Rate v-model="form.rate" />

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Enviar
          </v-btn>
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
import Rate from "./rateField.vue";

export default defineComponent({
  name: "CompanionForm",
  components: {
    Name,
    DNI,
    Telephone,
    Rate,
  },

  data: () => ({
    snackbar: {
      display: false,
      text: "",
      color: "black",
    },
    valid: true,
    form: {
      name: "",
      dni: "",
      telephone: "",
      rate: "",
    },
  }),
});
</script>
