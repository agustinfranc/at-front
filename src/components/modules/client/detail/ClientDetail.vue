<template>
  <v-container>
    <v-card class="my-4">
      <v-progress-linear
        v-if="loading"
        class="position-absolute"
        height="10"
        indeterminate
      ></v-progress-linear>

      <template v-if="client">
        <v-card-title> Cliente #{{ client.id }}</v-card-title>

        <v-card-text>
          <v-card-text>
            <v-row>
              <v-col>
                <p class="font-weight-bold">Nombre</p>
                {{ client.name }}
              </v-col>
              <v-col>
                <p class="font-weight-bold">Nombre a Cargo</p>
                {{ client.guardian_name }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p class="font-weight-bold">Teléfono</p>
                {{ client.phone }}
              </v-col>
              <v-col>
                <p class="font-weight-bold">Teléfono Extra</p>
                {{ client.extra_phone }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p class="font-weight-bold">Dni</p>
                {{ client.dni }}
              </v-col>
              <v-col>
                <p class="font-weight-bold">Nacimiento</p>
                {{ client.birthday }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p class="font-weight-bold">Dirección</p>
                {{ client.address }}
              </v-col>
            </v-row>
            <v-divider class="my-5"></v-divider>
            <v-row>
              <v-col>
                <p class="font-weight-bold">Obra Social</p>
                {{ client.health_insurance }}
              </v-col>
              <v-col>
                <p class="font-weight-bold">Afiliado</p>
                {{ client.affiliate }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p class="font-weight-bold">Diagnosis</p>
                {{ client.diagnosis }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p class="font-weight-bold">Tratamiento</p>
                {{ client.treatment }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p class="font-weight-bold">Medicamento</p>
                {{ client.medicine }}
              </v-col>
            </v-row>
            <v-divider class="my-5"></v-divider>
            <v-row>
              <v-col>
                <p class="font-weight-bold">Tarifa</p>
                ${{ client.rate }}
              </v-col>
              <v-col>
                <p class="font-weight-bold">Fecha Presupuesto</p>
                {{ client.budget_date }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card-text>
      </template>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import ClientApi from "@/api/client";
import type Client from "@/api/client/interface";
import { ClientService } from "@/services/clientService";
import { useSnackbarStore } from "@/stores/snackbar";
import { onMounted, ref, type Ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const clientService = new ClientService(new ClientApi());
const snackbarStore = useSnackbarStore();

let client: Ref<Client | undefined> = ref();
let loading = ref(false);

onMounted(async () => {
  await getClient();
});

async function getClient() {
  loading.value = true;

  const clientId = route.params.id as string;
  const { error, data } = await clientService.findOne(parseInt(clientId));

  loading.value = false;

  if (error) {
    snackbarStore.showError({
      text: error.message,
    });
    return;
  }

  if (data) client.value = data.data;
}
</script>
