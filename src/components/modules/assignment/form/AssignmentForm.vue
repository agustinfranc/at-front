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

          <v-row>
            <v-col>
              <TextField type="date" label="Fecha" v-model="fields.date" />
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <TextField type="time" label="Desde" v-model="fields.from" />
            </v-col>
            <v-col>
              <TextField type="time" label="Hasta" v-model="fields.to" />
            </v-col>
            <v-col>
              <TextField type="number" label="Horas" v-model="fields.hours" />
            </v-col>
          </v-row>

          <SubmitButton :valid="valid" @click="storeAssignment" />
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref, watch } from "vue";
import ComboboxField from "@/components/forms/fields/ComboboxField.vue";
import ClientApi from "@/api/client";
import { AssignmentService } from "@/services/assignmentService";
import SubmitButton from "@/components/forms/common/SubmitButton.vue";
import { ClientService } from "@/services/clientService";
import CompanionApi from "@/api/companion";
import { CompanionService } from "@/services/companionService";
import AssignmentForm from "../../assignment/interfaces/assignmentForm";
import TextField from "@/components/forms/fields/TextField.vue";
// eslint-disable-next-line
// @ts-ignore
import { cloneDeep } from "lodash";
import { useRoute } from "vue-router";
import type Assignment from "@/api/assignment/interface";
import { useFindOneService } from "@/composables/findOneItemService";
import AssignmentApi from "@/api/assignment/index";
import { useSaveFormService } from "@/composables/saveItemService";
import {
  mapAssignmentForEditForm,
  mapFormForRequest,
} from "@/components/forms/extras/formHelpers";
// import _ from "@/plugins/lodash" not working

const route = useRoute();
const clientService = new ClientService(new ClientApi());
const companionService = new CompanionService(new CompanionApi());

const form = ref(); // declare template ref form
const valid = ref(true);
const fields = ref(new AssignmentForm());
const clients = ref();
const companions = ref();
const service = new AssignmentService(new AssignmentApi());

const { isEdit, saveItem } = useSaveFormService<AssignmentForm>(service);
const title = isEdit()
  ? `Acompañamiento #${route.params.id}`
  : "Nuevo acompañamiento";

const { item } = useFindOneService<Assignment>(service);
watch(item, () => {
  if (item.value) {
    fields.value = mapAssignmentForEditForm(item.value);
  }
});

async function storeAssignment() {
  const formValidation = await form.value.validate();
  if (!formValidation.valid) return;

  const assignmentTemplateForm = mapFormForRequest(
    fields.value,
    clients.value,
    companions.value
  );

  saveItem(cloneDeep(assignmentTemplateForm), "assignments");
}

onBeforeMount(() => {
  clients.value = [];
  companions.value = [];
});

onMounted(async () => {
  const clientsData = await clientService.find();
  const companionsData = await companionService.find();

  if (clientsData.error || companionsData.error) return;

  clients.value = clientsData.data?.data || [];
  companions.value = companionsData.data?.data || [];
});
</script>
