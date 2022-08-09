<template>
  <v-container>
    <v-card>
      <v-card-title>Acompañante Nuevo</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <Name v-model="form.name" />

          <DNI v-model="form.dni" />

          <Telephone v-model="form.telephone" />

          <v-text-field
            type="number"
            v-model="form.maxTaxable"
            label="Máximo Facturable"
            required
            prefix="$"
          ></v-text-field>

          <ComboboxField
            v-model="form.extras"
            :items="extrasItems"
            label="Extras"
            multiple
            chips
          />

          <SubmitButton :valid="valid" />

          {{ form }}
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
import ComboboxField from "./comboboxField.vue";
import SubmitButton from "./submitButton.vue";

export default defineComponent({
  name: "CompanionForm",
  components: {
    Name,
    DNI,
    Telephone,
    ComboboxField,
    SubmitButton,
  },

  data: () => ({
    extrasItems: ["Monotributo", "Antecedentes Penales", "Seguros"],

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
      extras: [],
      maxTaxable: "",
    },
  }),
});
</script>
