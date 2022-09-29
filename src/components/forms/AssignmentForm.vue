<template>
  <v-container>
    <v-card>
      <v-card-title>Asignación</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col>
              <ComboboxField
                v-model="fields.client_name"
                :items="clients"
                item-title="name"
                label="Cliente"
              />
            </v-col>
            <v-col>
              <ComboboxField
                v-model="fields.companion_name"
                :items="companions"
                item-title="name"
                label="Acompañante"
              />
            </v-col>
          </v-row>

          <div class="my-5">
            <v-row v-for="day in days">
              <v-col cols="1">
                <v-checkbox v-model="day.enabled"></v-checkbox>
              </v-col>
              <v-col>
                <v-text-field :model-value="day.type" readonly></v-text-field>
              </v-col>
              <v-col>
                <TextField type="time" label="Desde" />
              </v-col>
              <v-col>
                <TextField type="time" label="Hasta" />
              </v-col>
              <v-col>
                <TextField type="number" label="Horas" />
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
    {{ fields }}
    {{ assignmentForm }}
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, toRaw, type Ref } from "vue";
import ComboboxField from "./fields/ComboboxField.vue";
import AssignmentsApi from "@/api/assignment/index";
import ClientApi from "@/api/client";
import Assignment from "@/api/assignment/interface";
import { AssignmentService } from "@/services/assignmentService";
import { useSnackbarStore } from "@/stores/snackbar";
import SubmitButton from "./common/SubmitButton.vue";
import { ClientService } from "@/services/clientService";
import CompanionApi from "@/api/companion";
import { CompanionService } from "@/services/companionService";
import type Client from "@/api/client/interface";
import AssignmentForm from "./interfaces/assignmentForm";
import type Companion from "@/api/companion/interface";
import TextField from "./fields/TextField.vue";

const valid = ref(true);
const fields = reactive(new AssignmentForm());
let assignmentForm = reactive(new Assignment());

const clientService = new ClientService(new ClientApi());
const companionService = new CompanionService(new CompanionApi());

const clients = ref();
const companions = ref();

// declare template ref form
const form = ref();

const days = [
  { enabled: false, type: "Domingo" },
  { enabled: false, type: "Lunes" },
  { enabled: false, type: "Martes" },
  { enabled: false, type: "Miercoles" },
  { enabled: false, type: "Jueves" },
  { enabled: false, type: "Viernes" },
  { enabled: false, type: "Sabado" },
  { enabled: false, type: "Domingo" },
];

function assignId() {
  assignmentForm = {
    ...fields,
    client_id: clients.value.find(
      (client: Client) => client.name === fields.client_name
    ).id,
    companion_id: companions.value.find(
      (companion: Companion) => companion.name === fields.companion_name
    ).id,
  };
}

async function storeAssignment() {
  const formValidation = await form.value.validate();
  if (!formValidation.valid) return;

  assignId();

  // Si el assignment tuviera id, haria update y no create
  const { error } = await new AssignmentService(new AssignmentsApi()).create({
    ...toRaw(assignmentForm),
  });

  const snackbarStore = useSnackbarStore();

  if (!error) {
    snackbarStore.showSuccess({
      text: "Asignación agregada con exito",
    });
    return;
  }
}

onMounted(async () => {
  const clientsData = await clientService.find();
  const companionsData = await companionService.find();

  if (clientsData.error || companionsData.error) return;

  clients.value = clientsData.data;
  companions.value = companionsData.data;
});
</script>
