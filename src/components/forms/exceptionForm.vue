<template>
  <v-container>
    <v-card>
      <v-card-title>Excepción Nueva</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <ComboboxField v-model="form.exception" label="Acompañamiento" />

          <ComboboxField
            v-model="form.companion"
            :items="companions"
            label="Reemplazante"
          />

          <ComboboxField
            v-model="form.days"
            :items="days"
            label="Días"
            multiple
            chips
          />

          <v-textarea
            class="mx-2"
            label="Comentarios"
            rows="1"
            prepend-inner-icon="mdi-comment"
            v-model="form.comments"
          ></v-textarea>

          <SubmitButton :valid="valid" />
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ComboboxField from "./comboboxField.vue";
import SubmitButton from "./SubmitButton.vue";

export default defineComponent({
  name: "ClientForm",
  components: {
    ComboboxField,
    SubmitButton,
  },

  data: () => ({
    companions: ["Juan Cruz Torasini", "Joaquín Misisco"],
    days: [
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
      "Domingo",
    ],
    snackbar: {
      display: false,
      text: "",
      color: "black",
    },
    valid: true,
    form: {
      exception: "",
      companion: "",
      days: [],
      comments: "",
    },
  }),
});
</script>
