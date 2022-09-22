<template>
  <v-container>
    <v-card>
      <v-card-title>Asignación</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <ComboboxField
            v-model="fields.client_id"
            :items="clients"
            label="Cliente"
          />

          <v-combobox
            :v-model="fields.companion_id"
            :items="companions"
            label="Acompañante"
            item-title="name"
            item-value="id"
          >
          </v-combobox>

          <!-- <ComboboxField
            v-model="fields.companion_id"
            :items="companions"
            label="Acompañante"
            item-title="name"
            item-value="id"
          /> -->

          <ComboboxField
            v-model="fields.days"
            :items="days"
            label="Días"
            multiple
            chips
          />

          <div class="text-caption">Horas</div>

          <v-slider
            step="1"
            show-ticks="always"
            v-model="fields.hours"
            thumb-label
            :max="24"
            :min="0"
          >
            <template v-slot:append>
              <v-text-field
                v-model="fields.hours"
                type="number"
                density="compact"
                hide-details
                variant="outlined"
              ></v-text-field>
            </template>
          </v-slider>

          <v-checkbox v-model="fields.periodic" label="Periódico"></v-checkbox>

          <v-checkbox v-model="fields.enabled" label="Habilitado"></v-checkbox>

          <SubmitButton :valid="valid" @click="storeAssignment" />
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
  {{ companions }}
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
import type Companion from "@/api/companion/interface";

const valid = ref(true);
const fields = reactive(new Assignment());

const clientService = new ClientService(new ClientApi());
const companionService = new CompanionService(new CompanionApi());

const clients: Ref<Client[] | undefined> = ref();
const companions: Ref<Companion[] | undefined> = ref();

// declare template ref form
const form = ref();

async function storeAssignment() {
  const formValidation = await form.value.validate();
  if (!formValidation.valid) return;

  // Si el assignment tuviera id, haria update y no create
  const { error } = await new AssignmentService(new AssignmentsApi()).create({
    ...toRaw(fields),
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

  console.log(clients.value);
});

const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
</script>
