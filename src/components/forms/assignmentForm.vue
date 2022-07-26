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
          <!-- <v-combobox
            v-model="form.client"
            :items="clients"
            item-value="id"
            item-text="nombre"
            :rules="[(v) => !!v || 'Ingresar Cliente']"
            label="Cliente"
            required
          ></v-combobox> -->

          <ComboboxField
            v-model="form.companion"
            :items="companions"
            label="Acompañante"
          />
          <!-- <v-combobox
            v-model="form.companion"
            :items="companions"
            item-value="id"
            item-text="nombre"
            :rules="[(v) => !!v || 'Ingresar Acompañante']"
            label="Acompañante"
            required
          ></v-combobox> -->
          <ComboboxField
            v-model="form.days"
            :items="days"
            label="Días"
            multiple
            chips
          />
          <!-- <v-combobox
            v-model="form.days"
            :items="days"
            :rules="[(v) => !!v || 'Ingresar días']"
            label="Días"
            required
            multiple
            chips
          ></v-combobox> -->

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
    {{ form }}
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Name from "./nameField.vue";
import SubmitButton from "./submitButton.vue";
import Password from "./passwordField.vue";
import ComboboxField from "./comboboxField.vue";

export default defineComponent({
  name: "UserForm",
  components: {
    Name,
    SubmitButton,
    Password,
    ComboboxField,
  },

  data: () => ({
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
  }),
});
</script>
