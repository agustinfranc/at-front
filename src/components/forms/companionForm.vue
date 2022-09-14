<template>
  <v-container>
    <v-card>
      <v-card-title>Acompañante Nuevo</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <Name v-model="form.name" />

          <DNI v-model="form.dni" />

          <Telephone v-model="form.telephone" />

          <TextField
            type="number"
            v-model="form.maxTaxable"
            label="Máximo Facturable"
            prefix="$"
          ></TextField>

          <ComboboxField
            v-model="form.extras"
            :items="extrasItems"
            label="Extras"
            multiple
            chips
          />

          <SubmitButton :valid="valid" />
        </v-form>
      </v-card-text>
    </v-card>
    <v-snackbar v-model="snackbar.display" :color="snackbar.color">
      {{ snackbar.text }}
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Name from "./nameField.vue";
import DNI from "./dniField.vue";
import Telephone from "./telephoneField.vue";
import ComboboxField from "./ComboboxField.vue";
import TextField from "./TextField.vue";
import SubmitButton from "./SubmitButton.vue";

export default defineComponent({
  name: "CompanionForm",
  components: {
    Name,
    DNI,
    Telephone,
    ComboboxField,
    SubmitButton,
    TextField,
  },

  methods: {
    async storeCompanion() {
      const res = await CompanionApi.create({ ...this.form });

      if (res.data) {
        this.snackbar.text = "Acompañante agregado con exito";
        this.snackbar.display = true;
        this.snackbar.color = "green";
      } else {
        this.snackbar.text = res.response.data.message;
        this.snackbar.display = true;
        this.snackbar.color = "red";
      }
    },
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
