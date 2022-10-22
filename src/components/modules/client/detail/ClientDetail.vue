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
                {{ renderNullableTableCell(client.guardian_name) }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p class="font-weight-bold">Teléfono</p>
                {{ client.phone }}
              </v-col>
              <v-col>
                <p class="font-weight-bold">Teléfono Extra</p>
                {{ renderNullableTableCell(client.extra_phone) }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p class="font-weight-bold">Dni</p>
                {{ client.dni }}
              </v-col>
              <v-col>
                <p class="font-weight-bold">Nacimiento</p>
                {{ renderNullableTableCell(client.birthday) }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p class="font-weight-bold">Dirección</p>
                {{ renderNullableTableCell(client.address) }}
              </v-col>
            </v-row>
            <v-divider class="my-5"></v-divider>
            <v-row>
              <v-col>
                <p class="font-weight-bold">Obra Social</p>
                {{ renderNullableTableCell(client.health_insurance) }}
              </v-col>
              <v-col>
                <p class="font-weight-bold">Afiliado</p>
                {{ renderNullableTableCell(client.affiliate) }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p class="font-weight-bold">Diagnosis</p>
                {{ renderNullableTableCell(client.diagnosis) }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p class="font-weight-bold">Tratamiento</p>
                {{ renderNullableTableCell(client.treatment) }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p class="font-weight-bold">Medicamento</p>
                {{ renderNullableTableCell(client.medicine) }}
              </v-col>
            </v-row>
            <v-divider class="my-5"></v-divider>
            <v-row>
              <v-col>
                <p class="font-weight-bold">Porcentaje Facturable</p>
                {{ renderNullableTaxableCell(client.taxable) }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p class="font-weight-bold">Tarifa</p>
                {{ renderNullableMoneyCell(client.rate) }}
              </v-col>
              <v-col>
                <p class="font-weight-bold">Fecha Presupuesto</p>
                {{ renderNullableTableCell(client.budget_date) }}
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
import { renderNullableMoneyCell } from "../../cellRenderer/renderNullableMoneyCell";

const route = useRoute();
const clientService = new ClientService(new ClientApi());
const snackbarStore = useSnackbarStore();

let client: Ref<Client | undefined> = ref();
let loading = ref(false);

onMounted(async () => {
  await getClient();
});

function renderNullableTableCell(value: string | number) {
  return value ?? "-";
}

function renderNullableTaxableCell(value: number | string) {
  return value ? value + "%" : "-";
}

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
