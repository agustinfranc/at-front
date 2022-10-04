<template>
  <v-container>
    <TitleComponent title="Cliente"></TitleComponent>

    <v-card class="my-4">
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row class="flex-grow-0">
            <v-col>
              <TextField
                v-model="fields.name"
                label="Nombre Beneficiario"
                required
                append-inner-icon="mdi-exclamation"
                :rules="[
                  (v: any) => !!v || 'Este campo es requerido',
                  (v: string | any[]) => (v && v.length <= 50) || 'El nombre excede los 50 digitos',
                ]"
              ></TextField>
            </v-col>
            <v-col>
              <TextField
                label="Nombre Familiar a Cargo"
                v-model="fields.guardian_name"
              />
            </v-col>
          </v-row>

          <v-row class="flex-grow-0">
            <v-col>
              <TextField
                v-model="fields.phone"
                label="Teléfono"
                append-inner-icon="mdi-exclamation"
                prepend-inner-icon="mdi-phone-in-talk"
                :rules="[(v: any) => !!v || 'Este campo es requerido']"
              />
            </v-col>
            <v-col>
              <TextField
                v-model="fields.extra_phone"
                label="Teléfono Adicional"
                prepend-inner-icon="mdi-phone-plus"
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <TextField
                v-model="fields.dni"
                type="number"
                label="DNI"
                append-inner-icon="mdi-exclamation"
                :rules="[(v: any) => !!v || 'Este campo es requerido']"
              ></TextField>
            </v-col>
            <v-col>
              <TextField
                v-model="fields.birthday"
                type="date"
                label="Nacimiento"
                prepend-inner-icon="mdi-calendar-month"
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <TextField
                label="Domicilio"
                v-model="fields.address"
                prepend-inner-icon="mdi-map-marker-radius"
              />
            </v-col>
          </v-row>

          <v-divider class="my-5"></v-divider>

          <v-row>
            <v-col>
              <TextField
                label="Obra Social"
                v-model="fields.health_insurance"
                prepend-inner-icon="mdi-medical-bag"
              />
            </v-col>
            <v-col>
              <TextField label="Nro Afiliado" v-model="fields.affiliate" />
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <TextAreaField
                label="Tareas a realizar"
                v-model="fields.treatment"
              ></TextAreaField>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <TextField v-model="fields.diagnosis" label="Diagnóstico" />
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <TextField
                v-model="fields.medicine"
                label="Medicación"
                prepend-inner-icon="mdi-pill"
              />
            </v-col>
          </v-row>

          <v-divider class="my-5"></v-divider>

          <v-row>
            <v-col>
              <TextField
                v-model="fields.taxable"
                label="Porcentaje Facturado"
                prefix="%"
                type="number"
                append-inner-icon="mdi-exclamation"
                :rules="[(v: any) => !!v || 'Este campo es requerido']"
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <TextField
                type="number"
                v-model="fields.rate"
                label="Tarifa"
                required
                prepend-inner-icon="mdi-currency-usd"
                append-inner-icon="mdi-exclamation"
                :rules="[(v: any) => !!v || 'Este campo es requerido']"
              />
            </v-col>
            <v-col
              ><TextField
                v-model="fields.budget_date"
                type="date"
                label="Fecha Presupuesto"
                placeholder="aaaa/mm/dd"
                prepend-inner-icon="mdi-calendar-month"
              />
            </v-col>
          </v-row>

          <v-btn
            :disabled="!valid"
            color="success"
            class="my-5"
            @click="storeClient"
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
import SubmitButton from "./common/SubmitButton.vue";
import TextField from "./fields/TextField.vue";
import TextAreaField from "./fields/TextAreaField.vue";
import ClientApi from "@/api/client/index";
import { ClientService } from "@/services/clientService";
import { useSnackbarStore } from "@/stores/snackbar";
import Client from "@/api/client/interface";
import TitleComponent from "./extras/TitleComponent.vue";

const valid = ref(true);
const fields = reactive(new Client());

// declare template ref form
const form = ref();

async function storeClient() {
  const formValidation = await form.value.validate();
  if (!formValidation.valid) return;

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
