<template>
  <v-container>
    <v-card>
      <v-card-title>Asignación</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <ComboboxField
            v-model="form.client"
            :items="clients"
            label="Cliente"
          />

          <ComboboxField
            v-model="form.companion"
            :items="companions"
            label="Acompañante"
          />
          <ComboboxField
            v-model="form.days"
            :items="days"
            label="Días"
            multiple
            chips
          />

          <div class="text-caption">Horas</div>

          <v-slider
            step="1"
            show-ticks="always"
            v-model="form.hours"
            thumb-label
            :max="24"
            :min="0"
          >
            <template v-slot:append>
              <v-text-field
                v-model="form.hours"
                type="number"
                density="compact"
                hide-details
                variant="outlined"
              ></v-text-field>
            </template>
          </v-slider>

          <v-checkbox v-model="form.periodic" label="Periódico"></v-checkbox>

          <v-checkbox v-model="form.enabled" label="Habilitado"></v-checkbox>

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
import SubmitButton from "./common/SubmitButton.vue";
import ComboboxField from "./fields/ComboboxField.vue";

import AssignmentsApi from "@/api/assignment/index";

export default defineComponent({
  name: "AssignmentForm",
  components: {
    SubmitButton,
    ComboboxField,
  },

  async validate() {
    this.request(this.form);
  },

  data() {
    return {
      assignmentPost: AssignmentsApi.post,

      snackbar: {
        display: false,
        text: "",
        color: "black",
      },

      clients: ["Franco Cavallini", "Gastón Malalel"],
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

      valid: true,
      form: {
        client: "",
        companion: "",
        days: [],
        hours: "",
        periodic: false,
        enabled: true,
      },
      passRules: [(v) => !!v || "Falta la constraseña del Usuario"],
    };
  },
});
</script>
