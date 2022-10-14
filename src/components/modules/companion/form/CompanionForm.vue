<template>
  <v-container>
    <FormTitle title="Acompañante"></FormTitle>
    <v-card>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <TextField
            v-model="fields.name"
            label="Nombre"
            required
            append-inner-icon="mdi-exclamation"
            :rules="[
              (v: any) => !!v || 'Este campo es requerido',
              (v: string | any[]) => (v && v.length <= 50) || 'El nombre excede los 50 digitos',
            ]"
          ></TextField>

          <TextField
            v-model="fields.cuit"
            label="CUIT"
            append-inner-icon="mdi-exclamation"
            :rules="[(v: any) => !!v || 'Este campo es requerido']"
          ></TextField>

          <TextField
            v-model="fields.birthday"
            type="date"
            label="Nacimiento"
            prepend-inner-icon="mdi-calendar-month"
            append-inner-icon="mdi-exclamation"
            :rules="[(v: any) => !!v || 'Este campo es requerido']"
          />

          <SelectField
            v-model="fields.nationality"
            type="text"
            label="Nacionalidad"
            append-inner-icon="mdi-exclamation"
            :rules="[(v: any) => !!v || 'Este campo es requerido']"
            :items="countries"
          >
          </SelectField>

          <TextField
            v-model="fields.phone"
            label="Teléfono"
            append-inner-icon="mdi-exclamation"
            :rules="[(v: any) => !!v || 'Este campo es requerido']"
          />

          <TextField
            type="number"
            v-model="fields.max_taxable"
            label="Máximo Facturable"
            prepend-inner-icon="mdi-currency-usd"
          ></TextField>

          <!-- TODO: crear componente -->
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
                <div class="d-flex justify-center align-center">
                  <v-checkbox
                    v-model="fields.has_sign_contract"
                    :label="`Firmo Contrato`"
                  />
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

          <v-btn
            :disabled="!valid"
            color="success"
            class="my-5"
            @click="storeCompanion"
          >
            Guardar
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { reactive, ref, toRaw } from "vue";
import TextField from "../../../forms/fields/TextField.vue";
import CompanionApi from "@/api/companion/index";
import { CompanionService } from "@/services/companionService";
import { useSnackbarStore } from "@/stores/snackbar";
import SelectField from "../../../forms/fields/SelectField.vue";
import FormTitle from "../../../forms/extras/FormTitle.vue";
import CompanionForm from "../interfaces/companionForm";

const valid = ref(true);
const fields = reactive(new CompanionForm());

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
