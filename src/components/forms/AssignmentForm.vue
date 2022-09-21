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

          <ComboboxField
            v-model="fields.companion"
            :items="companions"
            label="Acompañante"
          />

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

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Enviar
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>

    <v-snackbar v-model="snackbar.display" :color="snackbar.color">
      {{ snackbar.text }}
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import { reactive, ref, toRaw } from "vue";
import ComboboxField from "./fields/ComboboxField.vue";
import AssignmentsApi from "@/api/assignment/index";
import Assignment from "@/api/assignment/interface";
import { AssignmentService } from "@/services/assignmentService";
import { useSnackbarStore } from "@/stores/snackbar";

const valid = ref(true);
const fields = reactive(new Assignment());

// declare template ref form
const form = ref();

async function storeAssignment() {
  const formValidation = await form.value.validate();
  if (!formValidation.valid) return;

  // Si el client tuviera id, haria update y no create
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
</script>
