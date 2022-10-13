<template>
  <v-container>
    <v-card class="my-4">
      <v-progress-linear
        v-if="loading"
        class="position-absolute"
        height="10"
        indeterminate
      ></v-progress-linear>
      <template v-if="companion">
        <v-card-title> Acompañante #{{ companion.id }}</v-card-title>

        <v-card-text>
          <v-card-text>
            <v-row>
              <v-col>
                <p class="font-weight-bold">Nombre</p>
                {{ companion.name }}
              </v-col>
              <v-col>
                <p class="font-weight-bold">Cuit</p>
                {{ companion.cuit }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p class="font-weight-bold">Nacimiento</p>
                {{ companion.birthday }}
              </v-col>
              <v-col>
                <p class="font-weight-bold">Nacionalidad</p>
                {{ companion.nationality }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p class="font-weight-bold">Teléfono</p>
                {{ companion.phone }}
              </v-col>
            </v-row>
            <v-row> </v-row>
            <v-divider class="my-5"></v-divider>
            <v-row>
              <v-col>
                <p class="font-weight-bold">Antecedentes</p>
                {{ companion.criminal_record ? "Si" : "No" }}
              </v-col>
              <v-col>
                <p class="font-weight-bold">Seguro</p>
                {{ companion.insurance ? "Si" : "No" }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p class="font-weight-bold">Firmó Contrato</p>
                {{ companion.has_sign_contract ? "Si" : "No" }}
              </v-col>
              <v-col>
                <p class="font-weight-bold">Monotributo</p>
                {{ companion.monotax ? "Si" : "No" }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p class="font-weight-bold">Máximo Facturable</p>
                {{ companion.max_taxable }}%
              </v-col>
            </v-row>
          </v-card-text>
        </v-card-text>
      </template>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import CompanionApi from "@/api/companion";
import type Companion from "@/api/companion/interface";
import { CompanionService } from "@/services/companionService";
import { useSnackbarStore } from "@/stores/snackbar";
import { onMounted, ref, type Ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const companionService = new CompanionService(new CompanionApi());
const snackbarStore = useSnackbarStore();

let companion: Ref<Companion | undefined> = ref();
let loading = ref(false);

onMounted(async () => {
  await getCompanion();
});

async function getCompanion() {
  loading.value = true;

  const companionId = route.params.id as string;
  const { error, data } = await companionService.findOne(parseInt(companionId));

  loading.value = false;

  if (error) {
    snackbarStore.showError({
      text: error.message,
    });
    return;
  }

  if (data) companion.value = data.data;
}
</script>
