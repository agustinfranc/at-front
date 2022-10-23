<template>
  <v-container>
    <v-card>
      <v-card-title class="mb-5">{{ title }}</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <TextField
            v-model="fields.name"
            label="Nombre"
            required
            append-inner-icon="mdi-exclamation"
            :rules="[
              (v: string) => !!v || 'Este campo es requerido',
              (v: string) => (v && v.length <= 50) || 'El nombre excede los 50 digitos',
            ]"
            @change="(event) => capitalizeField(event.target.value, 'name')"
          ></TextField>

          <TextField
            v-model="fields.cuit"
            label="CUIT"
            append-inner-icon="mdi-exclamation"
            :rules="[(v: string) => !!v || 'Este campo es requerido']"
          ></TextField>

          <TextField
            v-model="fields.birthday"
            type="date"
            label="Nacimiento"
            prepend-inner-icon="mdi-calendar-month"
            append-inner-icon="mdi-exclamation"
            :rules="[(v: string) => !!v || 'Este campo es requerido']"
          />

          <SelectField
            v-model="fields.nationality"
            label="Nacionalidad"
            append-inner-icon="mdi-exclamation"
            :rules="[(v: string) => !!v || 'Este campo es requerido']"
            :items="countries"
          >
          </SelectField>

          <TextField
            v-model="fields.phone"
            label="Teléfono"
            append-inner-icon="mdi-exclamation"
            :rules="[(v: string) => !!v || 'Este campo es requerido']"
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
import { ref, watch } from "vue";
import TextField from "../../../forms/fields/TextField.vue";
import CompanionApi from "@/api/companion/index";
import { CompanionService } from "@/services/companionService";
import SelectField from "../../../forms/fields/SelectField.vue";
import CompanionForm from "../interfaces/companionForm";
import { useRoute } from "vue-router";
import { useFindOneService } from "@/composables/findOneItemService";
import type Companion from "@/api/companion/interface";
import { useSaveFormService } from "@/composables/saveItemService";
// eslint-disable-next-line
// @ts-ignore
import { cloneDeep, startCase, toLower } from "lodash";

const route = useRoute();
const form = ref(); // declare template ref form
const valid = ref(true);
const fields = ref(new CompanionForm());
const service = new CompanionService(new CompanionApi());

const { isEdit, saveItem } = useSaveFormService<CompanionForm>(service);

const title = isEdit()
  ? `Acompañante #${route.params.id}`
  : "Nuevo acompañante";

const { item } = useFindOneService<Companion>(service);
watch(item, () => {
  if (item.value) {
    fields.value = item.value;
  }
});

const countries = [
  "Argentina",
  "Brasil",
  "Perú",
  "Bolivia",
  "Colombia",
  "Puerto Rico",
  "Ecuador",
  "Venezuela",
  "Chile",
  "Paraguay",
  "México",
];

async function storeCompanion() {
  const formValidation = await form.value.validate();
  if (!formValidation.valid) return;

  saveItem(cloneDeep(fields.value), "companions");
}

function capitalizeField(value: string, field: string) {
  fields.value[field] = startCase(toLower(value));
}
</script>
