<template>
  <v-container>
    <v-card>
      <v-card-title>Cliente Nuevo</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <TextField
            v-model="fields.name"
            label="Nombre"
            required
            :rules="[
              (v: any) => !!v || 'Falta el nombre',
              (v: string | any[]) => (v && v.length <= 50) || 'Nombre muy largo',
            ]"
          ></TextField>

          <TextField v-model="fields.dni" type="number" label="Dni"></TextField>

          <TextField
            v-model="fields.phone"
            type="number"
            label="Teléfono"
            :rules="[(v: any) => !!v || 'Falta el teléfono del cliente']"
          />

          <TextField
            type="number"
            v-model="fields.rate"
            label="Tarifa"
            :rules="[(v: any) => !!v || 'Falta la tarifa']"
            required
            prefix="$"
          ></TextField>

          <TextField
            v-model="fields.taxable"
            label="Porcentaje Facturado"
            prefix="%"
            type="number"
          />

          <TextAreaField
            label="Comentarios"
            v-model="fields.comments"
          ></TextAreaField>

          <SubmitButton :valid="valid" @click="storeClient" />
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { reactive, ref, toRaw } from "vue";
import SubmitButton from "./common/SubmitButton.vue";
import TextField from "./fields/TextField.vue";
import TextAreaField from "./fields/TextAreaField.vue";
import ClientApi from "@/api/client/index";
import { ClientService } from "@/services/clientService";
import { useSnackbarStore } from "@/stores/snackbar";
import Client from "@/api/client/interface";

const valid = ref(true);
const fields = reactive(new Client());

// declare template ref form
const form = ref();

async function storeClient() {
  const formValidation = await form.value.validate();
  if (!formValidation.isValid) return;

  // Si el client tuviera id, haria update y no create
  const { error } = await new ClientService(new ClientApi()).create({
    ...toRaw(fields),
  });

  const snackbarStore = useSnackbarStore();

  if (!error) {
    snackbarStore.showSuccess({
      text: "Cliente agregado con exito",
    });
    return;
  }
}
</script>
