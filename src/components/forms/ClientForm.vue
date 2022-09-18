<template>
  <v-container>
    <v-card>
      <v-card-title>Cliente Nuevo</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <TextField
            v-model="form.name"
            label="Nombre"
            required
            :rules="[
              (v: any) => !!v || 'Falta el nombre',
              (v: string | any[]) => (v && v.length <= 50) || 'Nombre muy largo',
            ]"
          ></TextField>

          <TextField v-model="form.dni" type="number" label="Dni"></TextField>

          <TextField
            v-model="form.phone"
            type="number"
            label="Teléfono"
            :rules="[(v: any) => !!v || 'Falta el teléfono del cliente']"
          />

          <TextField
            type="number"
            v-model="form.rate"
            label="Tarifa"
            :rules="[(v: any) => !!v || 'Falta la tarifa']"
            required
            prefix="$"
          ></TextField>

          <TextField
            v-model="form.taxable"
            label="Porcentaje Facturado"
            prefix="%"
            type="number"
          />

          <TextAreaField
            label="Comentarios"
            v-model="form.comments"
          ></TextAreaField>

          <SubmitButton :valid="valid" @click="storeClient" />
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
import TextAreaField from "./fields/TextAreaField.vue";
import ClientApi from "@/api/client/index";
import { ClientService } from "@/services/clientService";

export default defineComponent({
  name: "ClientForm",
  components: {
    SubmitButton,
    TextField,
    TextAreaField,
  },

  methods: {
    async storeClient() {
      // Si el client tuviera id, haria update y no create
      const { error } = await new ClientService(new ClientApi()).create({
        ...this.form,
      });

      if (error) {
        this.snackbar.text = error.response?.data?.message || error.message;
        this.snackbar.display = true;
        this.snackbar.color = "red";
        return;
      }

      this.snackbar.text = "Cliente agregado con exito";
      this.snackbar.display = true;
      this.snackbar.color = "green";
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
        rate: "",
        comments: "",
        taxable: "",
      },
    };
  },
});
</script>
