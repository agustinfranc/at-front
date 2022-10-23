<template>
  <v-container>
    <v-card-title class="mb-5">{{ title }}</v-card-title>

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
                @change="(event) => capitalizeField(event.target.value, 'name')"
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
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <TextField
                type="number"
                v-model="fields.rate"
                label="Tarifa por hora"
                prepend-inner-icon="mdi-currency-usd"
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
import { ref, watch } from "vue";
import TextField from "../../../forms/fields/TextField.vue";
import TextAreaField from "../../../forms/fields/TextAreaField.vue";
import ClientApi from "@/api/client/index";
import { ClientService } from "@/services/clientService";
import { useRoute } from "vue-router";
import ClientForm from "../interfaces/clientForm";
// eslint-disable-next-line
// @ts-ignore
import { cloneDeep, startCase, toLower } from "lodash";
import { useSaveFormService } from "@/composables/saveItemService";
import { useFindOneService } from "@/composables/findOneItemService";
import type Client from "@/api/client/interface";

const valid = ref(true);
const fields = ref(new ClientForm());
const route = useRoute();
const service = new ClientService(new ClientApi());

// declare template ref form
const form = ref();

const { isEdit, saveItem } = useSaveFormService<ClientForm>(service);

const title = isEdit() ? `Cliente #${route.params.id}` : "Nuevo cliente";

const { item } = useFindOneService<Client>(service);
watch(item, () => {
  if (item.value) {
    fields.value = item.value;
  }
});

async function storeClient() {
  const formValidation = await form.value.validate();
  if (!formValidation.valid) return;

  saveItem(cloneDeep(fields.value), "clients");
}

function capitalizeField(value: string, field: string) {
  fields.value[field] = startCase(toLower(value));
}
</script>
