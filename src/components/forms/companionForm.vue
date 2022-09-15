<template>
  <v-container>
    <v-card>
      <v-card-title>Acompañante Nuevo</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
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
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ComboboxField from "./fields/ComboboxField.vue";
import TextField from "./fields/TextField.vue";
import SubmitButton from "./SubmitButton.vue";

export default defineComponent({
  name: "CompanionForm",
  components: {
    ComboboxField,
    SubmitButton,
    TextField,
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
