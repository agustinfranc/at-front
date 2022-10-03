<template>
  <v-container>
    <v-card>
      <v-card-title class="mb-5">{{ title }}</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col>
              <ComboboxField
                v-model="fields.client_name"
                :items="clients"
                item-title="name"
                label="Cliente"
                :rules="[(v: string) => !!v || 'Este campo es requerido']"
              />
            </v-col>
            <v-col>
              <ComboboxField
                v-model="fields.companion_name"
                :items="companions"
                item-title="name"
                label="Acompañante"
                :rules="[(v: string) => !!v || 'Este campo es requerido']"
              />
            </v-col>
          </v-row>

          <div class="my-5">
            <v-row v-for="day in fields.days">
              <v-col cols="1">
                <v-checkbox v-model="day.enabled"></v-checkbox>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="day.day_type_name"
                  readonly
                  :disabled="!day.enabled"
                />
              </v-col>
              <v-col>
                <v-text-field
                  v-model="day.from"
                  type="time"
                  label="Desde"
                  :disabled="!day.enabled"
                />
              </v-col>
              <v-col>
                <v-text-field
                  v-model="day.to"
                  type="time"
                  label="Hasta"
                  :disabled="!day.enabled"
                />
              </v-col>
              <v-col>
                <v-text-field
                  type="number"
                  label="Horas"
                  v-model="day.hours"
                  :disabled="!day.enabled"
                  :rules="[(v: number) => (!!v || !day.enabled) || 'Este campo es requerido']"
                />
              </v-col>
            </v-row>
          </div>

          <v-row>
            <v-col>
              <v-checkbox
                v-model="fields.periodic"
                label="Periódico"
              ></v-checkbox>
            </v-col>

            <v-col>
              <v-checkbox
                v-model="fields.enabled"
                label="Habilitado"
              ></v-checkbox>
            </v-col>
          </v-row>

          <SubmitButton :valid="valid" @click="storeAssignment" />
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, reactive, ref } from "vue";
import ComboboxField from "./fields/ComboboxField.vue";
import AssignmentsApi from "@/api/assignment/index";
import ClientApi from "@/api/client";
import { AssignmentService } from "@/services/assignmentService";
import { useSnackbarStore } from "@/stores/snackbar";
import SubmitButton from "./common/SubmitButton.vue";
import { ClientService } from "@/services/clientService";
import CompanionApi from "@/api/companion";
import { CompanionService } from "@/services/companionService";
import type Client from "@/api/client/interface";
import AssignmentForm from "./interfaces/assignmentForm";
import type Companion from "@/api/companion/interface";
import { cloneDeep } from "lodash";
// import _ from "@/plugins/lodash" not working

const valid = ref(true);
const fields = reactive(new AssignmentForm());

const clientService = new ClientService(new ClientApi());
const companionService = new CompanionService(new CompanionApi());

const clients = ref();
const companions = ref();

// declare template ref form
const form = ref();

// TODO: verifico  si la ruta tiene id
const title = 1 === 1 ? "Nueva asignación" : "Asignacion #12";

async function storeAssignment() {
  const formValidation = await form.value.validate();
  if (!formValidation.valid) return;

  const assignmentForm = getForm();

  // Si el assignment tuviera id, haria update y no create
  const { error } = await new AssignmentService(new AssignmentsApi()).create(
    cloneDeep(assignmentForm)
  );

  const snackbarStore = useSnackbarStore();

  if (!error) {
    snackbarStore.showSuccess({
      text: "Asignación agregada con exito",
    });
    return;
  }
}

function getForm() {
  return {
    ...fields,
    client_id: clients.value.find(
      (client: Client) => client.name === fields.client_name
    ).id,
    companion_id: companions.value.find(
      (companion: Companion) => companion.name === fields.companion_name
    ).id,
  };
}

onBeforeMount(() => {
  clients.value = [];
  companions.value = [];
});

onMounted(async () => {
  const clientsData = await clientService.find();
  const companionsData = await companionService.find();

  if (clientsData.error || companionsData.error) return;

  clients.value = clientsData.data;
  companions.value = companionsData.data;
});
</script>
