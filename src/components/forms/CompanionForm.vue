<template>
  <v-container>
    <v-card>
      <v-card-title>Acompañante Nuevo</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <TextField
            v-model="fields.name"
            label="Nombre"
            required
            :rules="[
              (v) => !!v || 'Falta el nombre',
              (v) => (v && v.length <= 50) || 'Nombre muy largo',
            ]"
          ></TextField>

          <TextField v-model="fields.dni" type="number" label="Dni"></TextField>

          <TextField
            v-model="fields.phone"
            type="number"
            label="Teléfono"
            :rules="[(v) => !!v || 'Falta el teléfono del acompañante']"
          />

          <TextField
            type="number"
            v-model="fields.max_taxable"
            label="Máximo Facturable"
            prefix="$"
          ></TextField>

          <SubmitButton :valid="valid" @click="storeCompanion" />
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { reactive, ref, toRaw } from "vue";
import SubmitButton from "./common/SubmitButton.vue";
import TextField from "./fields/TextField.vue";
import CompanionApi from "@/api/companion/index";
import { CompanionService } from "@/services/companionService";
import { useSnackbarStore } from "@/stores/snackbar";
import Companion from "@/api/companion/interface";

const valid = ref(true);
const fields = reactive(new Companion());

// declare template ref form
const form = ref();

async function storeCompanion() {
  const formValidation = await form.value.validate();
  console.log("hola", formValidation);
  if (!formValidation.valid) return;

  // Si el acompañante tuviera id, haria update y no create
  const { error } = await new CompanionService(new CompanionApi()).create({
    ...toRaw(fields),
  });

  const snackbarStore = useSnackbarStore();

  if (!error) {
    snackbarStore.showSuccess({
      text: "Acompañante agregado con exito",
    });
    return;
  }
}
</script>
