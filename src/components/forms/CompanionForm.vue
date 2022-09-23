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

          <TextField
            v-model="fields.cuit"
            type="number"
            label="CUIT"
          ></TextField>

          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title> Nacimiento </v-expansion-panel-title>
              <v-expansion-panel-text>
                <div class="d-flex justify-center align-center">
                  <vue-cal
                    class="vuecal--date-picker"
                    xsmall
                    hide-view-selector
                    :time="false"
                    :transitions="false"
                    active-view="month"
                    :disable-views="['week']"
                    style="max-width: 70%; height: 230px"
                    locale="es"
                    @cell-click="assignDate"
                  >
                  </vue-cal>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

          <v-select
            v-model="fields.nationality"
            type="text"
            label="Nacionalidad"
            :items="countries"
            class="my-5"
          ></v-select>

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

          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title> Extras </v-expansion-panel-title>
              <v-expansion-panel-text>
                <div class="d-flex justify-center align-center">
                  <v-checkbox
                    v-model="fields.monotax"
                    :label="`Es Monotributista`"
                  />
                </div>
                <div class="d-flex justify-center align-center">
                  <v-checkbox
                    v-model="fields.criminal_record"
                    :label="`Tiene antecedentes penales`"
                  />
                </div>
                <div class="d-flex justify-center align-center">
                  <v-checkbox
                    v-model="fields.insurance"
                    :label="`Tiene seguro`"
                  />
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

          <SubmitButton class="my-5" :valid="valid" @click="storeCompanion" />
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
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

const valid = ref(true);
const fields = reactive(new Companion());

// declare template ref form
const form = ref();

const countries = [
  "Argentina",
  "Brasil",
  "Perú",
  "Bolivia",
  "Venezuela",
  "Chile",
  "México",
];

function assignDate(date: Date) {
  fields.birth = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

async function storeCompanion() {
  const formValidation = await form.value.validate();
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
