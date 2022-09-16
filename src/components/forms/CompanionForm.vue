<template>
  <v-container>
    <v-card>
      <v-card-title>Acompañante Nuevo</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <TextField
            v-model="form.name"
            label="Nombre"
            required
            :rules="[
              (v) => !!v || 'Falta el nombre',
              (v) => (v && v.length <= 50) || 'Nombre muy largo',
            ]"
          ></TextField>

          <TextField v-model="form.dni" type="number" label="Dni"></TextField>

          <TextField
            v-model="form.phone"
            type="number"
            label="Teléfono"
            :rules="[(v) => !!v || 'Falta el teléfono del acompañante']"
          />

          <TextField
            type="number"
            v-model="form.maxTaxable"
            label="Máximo Facturable"
            prefix="$"
          ></TextField>

          <ComboboxField v-model="form.extras" label="Extras" multiple chips />

          <SubmitButton :valid="valid" @click="storeCompanion" />
        </v-form>
      </v-card-text>
    </v-card>

    <!-- TODO: refactorizar: creacion de componente global -->
    <v-snackbar v-model="snackbar.display" :color="snackbar.color">
      {{ snackbar.text }}
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SubmitButton from "./common/SubmitButton.vue";
import TextField from "./fields/TextField.vue";
import ComboboxField from "./fields/ComboboxField.vue";
import CompanionApi from "@/api/companion/index";

export default defineComponent({
  name: "ClientForm",
  components: {
    SubmitButton,
    TextField,
    ComboboxField,
  },

  methods: {
    async storeCompanion() {
      // Si el client tuviera id, haria update y no create
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

  data() {
    return {
      snackbar: {
        display: false,
        text: "",
        color: "",
      },
      valid: true,
      form: {
        name: "",
        dni: "",
        phone: "",
        maxTaxable: "",
        extras: "",
      },
    };
  },
});
</script>
