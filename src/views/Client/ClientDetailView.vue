<template>
  <v-container>
    <TitleComponent :title="client.name"></TitleComponent>
    <v-card class="my-4">
      <v-progress-linear
        v-if="loading.value"
        class="position-absolute"
        style="z-index: 1"
        height="10"
        indeterminate
      ></v-progress-linear>
      <v-row>
        <v-col>
          <v-card-item>
            <v-span class="font-weight-bold"> Dirección: </v-span>
            <v-span> {{ client.address }}</v-span>
          </v-card-item>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card-item>
            <v-span class="font-weight-bold"> Teléfono: </v-span>
            <v-span> {{ client.phone }}</v-span>
          </v-card-item>
        </v-col>
        <v-col>
          <v-card-item>
            <v-span class="font-weight-bold"> Teléfono Extra: </v-span>
            <v-span> {{ client.extra_phone }}</v-span>
          </v-card-item>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card-item>
            <v-span class="font-weight-bold"> Dni: </v-span>
            <v-span> {{ client.dni }}</v-span>
          </v-card-item>
        </v-col>
        <v-col>
          <v-card-item>
            <v-span class="font-weight-bold"> Nacimiento: </v-span>
            <v-span> {{ client.birthday }}</v-span>
          </v-card-item>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card-item>
            <v-span class="font-weight-bold"> Nombre a cargo: </v-span>
            <v-span> {{ client.guardian_name }}</v-span>
          </v-card-item>
        </v-col>
      </v-row>
      <v-divider class="my-5"></v-divider>

      <v-row>
        <v-col>
          <v-card-item>
            <v-span class="font-weight-bold"> Obra Social: </v-span>
            <v-span> {{ client.health_insurance }}</v-span>
          </v-card-item>
        </v-col>
        <v-col>
          <v-card-item>
            <v-span class="font-weight-bold"> Afiliado: </v-span>
            <v-span> {{ client.affiliate }}</v-span>
          </v-card-item>
        </v-col>
      </v-row>

      <v-card-item>
        <v-span class="font-weight-bold"> Diagnosis: </v-span>
        <v-span> {{ client.diagnosis }}</v-span>
      </v-card-item>
      <v-card-item>
        <v-span class="font-weight-bold"> Tratamiento: </v-span>
        <v-span> {{ client.treatment }}</v-span>
      </v-card-item>
      <v-card-item>
        <v-span class="font-weight-bold"> Medicamento: </v-span>
        <v-span> {{ client.medicine }}</v-span>
      </v-card-item>

      <v-divider class="my-5"></v-divider>

      <v-row>
        <v-col>
          <v-card-item>
            <v-span class="font-weight-bold"> Tarifa: </v-span>
            <v-span> ${{ client.rate }}</v-span>
          </v-card-item>
        </v-col>
        <v-col>
          <v-card-item>
            <v-span class="font-weight-bold"> Fecha Presupuesto: </v-span>
            <v-span> {{ client.budget_date }}</v-span>
          </v-card-item>
        </v-col>
      </v-row>
      <v-card-item>
        <v-span class="font-weight-bold"> Porcentaje Facturable: </v-span>
        <v-span> {{ client.taxable }}%</v-span>
      </v-card-item>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import ClientApi from "@/api/client";
import { ClientService } from "@/services/clientService";
import { onBeforeMount, onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import TitleComponent from "../../components/forms/extras/TitleComponent.vue";

const client = ref();
const clientService = new ClientService(new ClientApi());

const route = useRoute();

const loading = reactive({ value: true });

onBeforeMount(() => {
  client.value = [];
});

onMounted(async () => {
  const clientId = route.params.id as string;
  const clientData = await clientService.findOne(parseInt(clientId));
  client.value = clientData.data;
  loading.value = false;

  if (clientData.error) return;
});
</script>
